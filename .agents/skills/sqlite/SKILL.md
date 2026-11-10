---
name: sqlite
description: >-
  Use this skill whenever the task involves creating, inspecting, querying, migrating, optimizing, or backing up SQLite databases (.db, .sqlite, .sqlite3), designing relational schemas for local/embedded or Smart Factory MES/Traceability data, using the sqlite3 CLI or Python sqlite3 module, enabling WAL mode, FTS5 full-text search, JSON1 functions, or importing/exporting CSV and JSON data with SQLite.
---

# SQLite Skill (`sqlite`)

Comprehensive runbook and best practices for designing, querying, optimizing, and managing SQLite databases via Python (`sqlite3` standard library) and the `sqlite3` CLI.

---

## 1. Environment & Quick Inspection

On this Windows machine:
- **`sqlite3` CLI:** Available directly (`C:\msys64\ucrt64\bin\sqlite3.exe`, v3.53+).
- **Python `sqlite3`:** Invoke Python via the `py` launcher (`py -c "import sqlite3..."`), as `python` points to the Windows Store alias.

### Inspect a Database via `sqlite3` CLI or `py`
```powershell
# Using sqlite3 CLI directly:
sqlite3 path/to/database.db ".tables"
sqlite3 -header -column path/to/database.db "SELECT * FROM lots LIMIT 10;"

# Or using the bundled helper script:
py .agents/skills/sqlite/scripts/sqlite_helper.py data/nexus_factory.db --inspect
```

---

## 2. Production-Grade Connection Settings (PRAGMAs)

Every SQLite connection used for application backends, edge gateways, or MES/Traceability data collection MUST apply these PRAGMAs immediately after connecting:

```sql
PRAGMA foreign_keys = ON;          -- Enforce foreign key constraints (OFF by default in SQLite!)
PRAGMA journal_mode = WAL;         -- Write-Ahead Logging: concurrent reads + fast writes
PRAGMA synchronous = NORMAL;       -- Safe with WAL, much faster than FULL
PRAGMA busy_timeout = 5000;        -- Wait up to 5s on lock contention instead of failing with SQLITE_BUSY
PRAGMA temp_store = MEMORY;        -- Keep temp tables/indices in RAM
PRAGMA cache_size = -64000;        -- ~64 MB page cache (negative = KiB)
```

### Python Helper Pattern (`get_db_connection`)
```python
import sqlite3
from pathlib import Path

def get_db_connection(db_path: str | Path) -> sqlite3.Connection:
    conn = sqlite3.connect(str(db_path), timeout=5.0)
    conn.row_factory = sqlite3.Row  # Access columns by name: row["lot_code"]
    conn.execute("PRAGMA foreign_keys = ON;")
    conn.execute("PRAGMA journal_mode = WAL;")
    conn.execute("PRAGMA synchronous = NORMAL;")
    conn.execute("PRAGMA busy_timeout = 5000;")
    return conn
```

---

## 3. Schema Design Rules & Best Practices

1. **Use `STRICT` Tables (SQLite 3.37+):**
   Append `STRICT` to `CREATE TABLE` definitions to enforce strong column types (`INT`, `INTEGER`, `REAL`, `TEXT`, `BLOB`, `ANY`) and prevent accidental type-affinity bugs:
   ```sql
   CREATE TABLE IF NOT EXISTS work_orders (
       id INTEGER PRIMARY KEY,
       wo_code TEXT NOT NULL UNIQUE,
       product_gtin TEXT NOT NULL,
       planned_qty INTEGER NOT NULL CHECK (planned_qty > 0),
       status TEXT NOT NULL DEFAULT 'PLANNED' CHECK (status IN ('PLANNED', 'RUNNING', 'COMPLETED', 'HOLD')),
       created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
   ) STRICT;
   ```
2. **Timestamps:** Store timestamps in ISO-8601 UTC (`TEXT` via `strftime('%Y-%m-%dT%H:%M:%fZ', 'now')`) or Unix epoch milliseconds (`INTEGER`). Keep the format consistent across all tables.
3. **JSON Columns:** Use `TEXT` columns validated with `CHECK (json_valid(payload))` and query using SQLite JSON functions (`json_extract(payload, '$.temperature')` or `payload ->> '$.temperature'`).
4. **Full-Text Search (FTS5):** For fast keyword search across logs, electronic batch records (eBR), or documentation, create an external-content FTS5 virtual table:
   ```sql
   CREATE VIRTUAL TABLE IF NOT EXISTS trace_events_fts USING fts5(
       lot_code, stage, description,
       content='trace_events', content_rowid='id'
   );
   ```

---

## 4. Safe Operations & Data Integrity

- **Parameterized Queries Only:** Always use `?` or `:named` placeholders (`conn.execute("SELECT * FROM lots WHERE lot_code = ?", (code,))`). Never interpolate user input via f-strings into SQL.
- **Explicit Transactions for Batch Writes:** Wrap bulk inserts/updates in `with conn:` so they execute in a single atomic transaction (100x faster than auto-commit per row).
- **Online Backup:** Never copy a live `.db` file with `cp`/`Copy-Item` while WAL is active without copying `-wal` and `-shm` or using the backup API:
  ```python
  import sqlite3
  with sqlite3.connect("source.db") as src, sqlite3.connect("backup.db") as dst:
      src.backup(dst)
  ```
- **Query Plan & Health Verification:**
  - Check index usage: `EXPLAIN QUERY PLAN SELECT ...`
  - Verify database integrity: `PRAGMA integrity_check;` and `PRAGMA foreign_key_check;`
  - Optimize before closing long-lived connections: `PRAGMA optimize;`

See [references/smart-factory-schema.md](./references/smart-factory-schema.md) for ready-to-use SQLite schemas tailored to Smart Factory (MES Work Orders, OEE Machine Events, GS1 Lot Genealogy & Traceability, and Lead Capture).
