#!/usr/bin/env python3
"""Helper script to initialize, seed, or inspect a NEXUS Factory SQLite database."""
import argparse
import sqlite3
from pathlib import Path

SCHEMA_PATH = Path(__file__).resolve().parent.parent / "references" / "smart-factory-schema.md"


def extract_sql_from_markdown(md_path: Path) -> str:
    text = md_path.read_text(encoding="utf-8")
    blocks = []
    in_sql = False
    for line in text.splitlines():
        if line.strip().startswith("```sql"):
            in_sql = True
            continue
        if in_sql and line.strip().startswith("```"):
            in_sql = False
            continue
        if in_sql:
            blocks.append(line)
    return "\n".join(blocks)


def init_db(db_path: Path, seed: bool = False) -> None:
    db_path.parent.mkdir(parents=True, exist_ok=True)
    sql = extract_sql_from_markdown(SCHEMA_PATH)
    with sqlite3.connect(str(db_path), timeout=5.0) as conn:
        conn.executescript(sql)
        if seed:
            conn.execute(
                "INSERT OR IGNORE INTO machines (machine_code, name, line_code, protocol, status) VALUES (?, ?, ?, ?, ?)",
                ("M3-02", "Máy ép phun & lắp ráp #02", "LINE-03", "OPC_UA", "RUN"),
            )
            conn.execute(
                "INSERT OR IGNORE INTO work_orders (wo_code, product_sku, product_gtin, line_code, planned_qty, good_qty, scrap_qty, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                ("WO-26-1182", "NX-MOD-A07", "08930000001072", "LINE-03", 5000, 4800, 12, "COMPLETED"),
            )
            conn.execute(
                "INSERT OR IGNORE INTO lots (lot_code, wo_code, gtin, sscc_pallet, qty, qc_status) VALUES (?, ?, ?, ?, ?, ?)",
                ("LOT-2611-A07", "WO-26-1182", "08930000001072", "008930000000000123", 4800, "PASSED"),
            )
            events = [
                ("LOT-2611-A07", "03/11 07:42", "Nguyên liệu", "Nhập nguyên liệu — Lô NCC: RM-5521 · IQC đạt", 0),
                ("LOT-2611-A07", "05/11 08:15", "Cấp phát", "Cấp phát cho lệnh WO-26-1182 · Chuyền 3", 0),
                ("LOT-2611-A07", "05/11 09:02", "Sản xuất", "Sản xuất · Máy M3-02 · Ca A · Nhiệt độ 182°C", 0),
                ("LOT-2611-A07", "05/11 13:30", "Chất lượng", "IPQC lần 2 — 1 mẫu cận giới hạn, đã điều chỉnh", 1),
                ("LOT-2611-A07", "05/11 16:45", "Đóng gói", "Đóng gói 4.800 đơn vị · 200 thùng · 5 pallet (SSCC)", 0),
                ("LOT-2611-A07", "06/11 10:20", "Chất lượng", "OQC đạt · Phê duyệt xuất xưởng", 0),
                ("LOT-2611-A07", "07/11 14:05", "Phân phối", "Xuất kho → Nhà phân phối miền Bắc · DO-77810", 0),
            ]
            cnt = conn.execute("SELECT COUNT(*) FROM trace_events WHERE lot_code = ?", ("LOT-2611-A07",)).fetchone()[0]
            if cnt == 0:
                conn.executemany(
                    "INSERT INTO trace_events (lot_code, event_time, stage, description, is_warning) VALUES (?, ?, ?, ?, ?)",
                    events,
                )
    print(f"Initialized SQLite database at: {db_path}")


def inspect_db(db_path: Path) -> None:
    with sqlite3.connect(str(db_path)) as conn:
        tables = [
            r[0]
            for r in conn.execute(
                "SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' ORDER BY name"
            )
        ]
        print(f"Database: {db_path} ({len(tables)} tables)")
        for t in tables:
            count = conn.execute(f'SELECT COUNT(*) FROM "{t}"').fetchone()[0]
            print(f"  - {t}: {count} rows")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="NEXUS Factory SQLite Manager")
    parser.add_argument("db_path", type=Path, help="Path to SQLite .db file")
    parser.add_argument("--init", action="store_true", help="Create Smart Factory tables")
    parser.add_argument("--seed", action="store_true", help="Seed sample MES & Traceability data")
    parser.add_argument("--inspect", action="store_true", help="Inspect tables and row counts")
    args = parser.parse_args()

    if args.init or args.seed:
        init_db(args.db_path, seed=args.seed)
    if args.inspect or (not args.init and not args.seed):
        inspect_db(args.db_path)
