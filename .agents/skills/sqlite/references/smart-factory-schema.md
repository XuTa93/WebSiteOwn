# Reference SQLite Schema for Smart Factory (MES, OEE & GS1 Traceability)

This reference provides a canonical SQLite (`STRICT` + `WAL`) schema for **NEXUS Factory** edge gateways, local demos, and lightweight MES/Traceability backends.

```sql
PRAGMA foreign_keys = ON;
PRAGMA journal_mode = WAL;
PRAGMA synchronous = NORMAL;

-- 1. Production Lines & Equipment (ISA-95 Level 1-2 Assets)
CREATE TABLE IF NOT EXISTS machines (
    id INTEGER PRIMARY KEY,
    machine_code TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    line_code TEXT NOT NULL,
    protocol TEXT NOT NULL DEFAULT 'OPC_UA',
    status TEXT NOT NULL DEFAULT 'IDLE' CHECK (status IN ('RUN', 'IDLE', 'DOWN', 'MAINTENANCE'))
) STRICT;

-- 2. MES Work Orders (Lệnh sản xuất)
CREATE TABLE IF NOT EXISTS work_orders (
    id INTEGER PRIMARY KEY,
    wo_code TEXT NOT NULL UNIQUE,
    product_sku TEXT NOT NULL,
    product_gtin TEXT,
    line_code TEXT NOT NULL,
    planned_qty INTEGER NOT NULL CHECK (planned_qty > 0),
    good_qty INTEGER NOT NULL DEFAULT 0 CHECK (good_qty >= 0),
    scrap_qty INTEGER NOT NULL DEFAULT 0 CHECK (scrap_qty >= 0),
    status TEXT NOT NULL DEFAULT 'PLANNED' CHECK (status IN ('PLANNED', 'RUNNING', 'COMPLETED', 'HOLD')),
    started_at TEXT,
    completed_at TEXT
) STRICT;

-- 3. Product Lots & GS1 Packaging Hierarchy (Lô sản xuất & SSCC)
CREATE TABLE IF NOT EXISTS lots (
    id INTEGER PRIMARY KEY,
    lot_code TEXT NOT NULL UNIQUE,
    wo_code TEXT REFERENCES work_orders(wo_code) ON DELETE SET NULL,
    gtin TEXT,
    sscc_pallet TEXT,
    qty INTEGER NOT NULL DEFAULT 0,
    qc_status TEXT NOT NULL DEFAULT 'PENDING' CHECK (qc_status IN ('PENDING', 'PASSED', 'WARN', 'HOLD', 'REJECTED')),
    created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
) STRICT;

-- 4. Lot Genealogy (Phả hệ truy xuất Nguyên liệu -> Bán thành phẩm -> Thành phẩm)
CREATE TABLE IF NOT EXISTS lot_genealogy (
    id INTEGER PRIMARY KEY,
    parent_lot_code TEXT NOT NULL REFERENCES lots(lot_code) ON DELETE CASCADE,
    child_lot_code TEXT NOT NULL,
    material_type TEXT NOT NULL DEFAULT 'RAW_MATERIAL',
    consumed_qty REAL NOT NULL CHECK (consumed_qty > 0),
    UNIQUE(parent_lot_code, child_lot_code)
) STRICT;

-- 5. Traceability Events (Hành trình lô sản phẩm 6 bước)
CREATE TABLE IF NOT EXISTS trace_events (
    id INTEGER PRIMARY KEY,
    lot_code TEXT NOT NULL REFERENCES lots(lot_code) ON DELETE CASCADE,
    event_time TEXT NOT NULL,
    stage TEXT NOT NULL,
    description TEXT NOT NULL,
    is_warning INTEGER NOT NULL DEFAULT 0 CHECK (is_warning IN (0, 1)),
    parameters_json TEXT CHECK (parameters_json IS NULL OR json_valid(parameters_json))
) STRICT;

CREATE INDEX IF NOT EXISTS idx_trace_events_lot ON trace_events(lot_code, id);

-- 6. OEE & Machine Downtime Logs
CREATE TABLE IF NOT EXISTS machine_oee_logs (
    id INTEGER PRIMARY KEY,
    machine_code TEXT NOT NULL REFERENCES machines(machine_code) ON DELETE CASCADE,
    shift_date TEXT NOT NULL,
    shift_code TEXT NOT NULL,
    availability REAL NOT NULL CHECK (availability BETWEEN 0 AND 1),
    performance REAL NOT NULL CHECK (performance BETWEEN 0 AND 1),
    quality REAL NOT NULL CHECK (quality BETWEEN 0 AND 1),
    oee REAL GENERATED ALWAYS AS (ROUND(availability * performance * quality * 100, 2)) STORED
) STRICT;

-- 7. Website Lead Capture (Khảo sát / Demo / Tài liệu)
CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY,
    full_name TEXT NOT NULL,
    job_title TEXT,
    company_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    interest TEXT NOT NULL,
    source_modal TEXT,
    created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
) STRICT;
```
