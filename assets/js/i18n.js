/**
 * ============================================================================
 * TỪ ĐIỂN SONG NGỮ TRUNG TÂM — DFS (Digital Factory Solutions)
 * File: assets/js/i18n.js
 * ============================================================================
 * HƯỚNG DẪN CẬP NHẬT NỘI DUNG DÀNH CHO BẠN:
 * 1. Mỗi mục nội dung đều có 2 dòng nằm ngay cạnh nhau:
 *      vi: "Nội dung Tiếng Việt",
 *      en: "English content"
 * 2. Bạn chỉ cần sửa chữ nằm bên trong dấu ngoặc kép "..." hoặc '...'.
 * 3. Lưu ý giữ nguyên các thẻ đánh dấu màu xanh nếu có (ví dụ: <span class="hl">...</span>
 *    hoặc <strong>...</strong>).
 * 4. Sau khi sửa xong, nhấn Ctrl + S để lưu file và tải lại trang web (F5) để xem ngay.
 * ============================================================================
 */

window.DFS_I18N = {
  defaultLang: "vi",

  // ==========================================================================
  // PHẦN A: TỪ ĐIỂN VĂN BẢN TRÊN TRANG (Gắn với thuộc tính data-i18n="...")
  // ==========================================================================
  dict: {

    // ------------------------------------------------------------------------
    // 0. TIÊU ĐỀ TRANG & THANH TOPBAR / HEADER MENU (Dùng chung)
    // ------------------------------------------------------------------------
    "meta.sf.title": {
      vi: "DFS — Giải pháp Smart Factory: Hệ thống MES, Số hóa & Truy xuất nguồn gốc cho nhà máy",
      en: "DFS — Smart Factory Solutions: MES, Paperless & GS1 Traceability Platform"
    },
    "meta.sf.desc": {
      vi: "DFS — Digital Factory Solutions cung cấp giải pháp nhà máy thông minh: hệ thống điều hành sản xuất MES, số hóa quy trình không giấy tờ, giám sát OEE/IIoT và truy xuất nguồn gốc theo lô, theo serial chuẩn GS1.",
      en: "DFS — Digital Factory Solutions delivers end-to-end Smart Factory software & IIoT hardware: Manufacturing Execution System (MES), Paperless operations, real-time OEE monitoring, and GS1 lot/serial traceability."
    },
    "topbar.tagline": {
      vi: "Giải pháp Smart Factory cho nhà máy Việt Nam — MES · Số hóa · Truy xuất nguồn gốc",
      en: "Smart Factory Solutions for Modern Manufacturing — MES · Paperless · Traceability"
    },
    "topbar.survey_cta": {
      vi: "Đăng ký khảo sát miễn phí",
      en: "Book a Free Factory Audit"
    },
    "topbar.pr.tagline": {
      vi: "Giải pháp & Thiết bị Smart Factory chuẩn mở — DFS",
      en: "Open-Standard Smart Factory Hardware & Software — DFS"
    },
    "topbar.pr.consult": {
      vi: "Tư vấn & Báo giá dự án:",
      en: "Project Consultation & Quote:"
    },
    "topbar.pr.back_mes": {
      vi: "Trang Giải pháp MES",
      en: "MES Solutions Page"
    },

    // Menu chính trên Header & Mobile Drawer
    "nav.solutions": {
      vi: "Giải pháp",
      en: "Solutions"
    },
    "nav.products": {
      vi: "Sản phẩm",
      en: "Products"
    },
    "nav.platform": {
      vi: "Nền tảng",
      en: "Platform"
    },
    "nav.cases": {
      vi: "Dự án",
      en: "Case Studies"
    },
    "nav.roadmap": {
      vi: "Triển khai",
      en: "Deployment"
    },
    "nav.about": {
      vi: "Về chúng tôi",
      en: "About Us"
    },
    "nav.book_demo": {
      vi: "Đặt lịch demo",
      en: "Book Demo"
    },
    "nav.quote_full": {
      vi: "Liên hệ báo giá",
      en: "Request Quote"
    },
    "nav.quote_short": {
      vi: "Báo giá",
      en: "Quote"
    },

    // Mega Menu: Sản phẩm
    "mega.prod.tab_cat": {
      vi: "Danh mục sản phẩm",
      en: "Product Categories"
    },
    "mega.prod.tab_col": {
      vi: "Bộ giải pháp phần cứng trọn gói",
      en: "Turnkey Hardware Bundles"
    },
    "mega.prod.view_all": {
      vi: "Xem toàn bộ trang Sản phẩm →",
      en: "View All Products →"
    },
    "mega.prod.cat_title": {
      vi: "Danh mục sản phẩm",
      en: "Product Categories"
    },
    "mega.prod.cat_desc": {
      vi: "Hệ sinh thái phần mềm và thiết bị công nghiệp chuẩn mở cho nhà máy thông minh",
      en: "Open-standard industrial hardware and software ecosystem for smart factories"
    },
    "mega.prod.c1": { vi: "Bộ thu thập dữ liệu IIoT & Edge", en: "IIoT & Edge Gateways" },
    "mega.prod.c2": { vi: "Máy quét mã vạch & PDA", en: "Barcode Scanners & PDAs" },
    "mega.prod.c3": { vi: "Thị giác máy (AI Vision)", en: "Machine Vision (AI Vision)" },
    "mega.prod.c4": { vi: "Màn hình công nghiệp & Panel PC", en: "Industrial Displays & Panel PCs" },
    "mega.prod.c5": { vi: "Máy in nhãn mã vạch GS1", en: "GS1 Barcode Label Printers" },
    "mega.prod.c6": { vi: "Cân điện tử & Đo lường", en: "Industrial Scales & Weighing" },
    "mega.prod.c7": { vi: "Hệ thống hiển thị & Đèn Andon", en: "Andon Boards & Signal Towers" },
    "mega.prod.c8": { vi: "Thiết bị đọc & Thẻ RFID", en: "RFID Readers & Tags" },
    "mega.prod.c9": { vi: "Thiết bị mạng & Switch công nghiệp", en: "Industrial Switches & Networking" },
    "mega.prod.c10": { vi: "Phần mềm MES & Điều hành", en: "MES & MOM Software Suite" },
    "mega.prod.c11": { vi: "Cảm biến & Đồng hồ năng lượng", en: "Sensors & Smart Energy Meters" },
    "mega.prod.c12": { vi: "Phụ kiện & Tủ rack công nghiệp", en: "Industrial Enclosures & Mounts" },

    "mega.prod.col_title": {
      vi: "Bộ giải pháp phần cứng trọn gói",
      en: "Turnkey Hardware Bundles"
    },
    "mega.prod.col_desc": {
      vi: "Các bộ thiết bị được đóng gói đồng bộ để giải quyết trọn vẹn từng bài toán tại xưởng",
      en: "Pre-integrated hardware kits engineered to solve specific shop-floor challenges"
    },
    "mega.prod.b1": { vi: "Trạm phòng sạch & Chống cháy nổ", en: "Cleanroom & Explosion-Proof Workstations" },
    "mega.prod.b2": { vi: "Thiết bị gắn xe nâng & Kho vận", en: "Forklift-Mounted & Warehouse Kits" },
    "mega.prod.b3": { vi: "Gói nâng cấp máy cơ đời cũ", en: "Legacy Machine IIoT Retrofit Kit" },

    "mega.prod.s1_title": { vi: "Sản phẩm mới ra mắt", en: "New Releases" },
    "mega.prod.s1_desc": { vi: "Khám phá các thiết bị IIoT & phần mềm thế hệ mới nhất", en: "Explore our latest IIoT devices & software releases" },
    "mega.prod.s2_title": { vi: "Giải pháp theo ngành", en: "Industry Solutions" },
    "mega.prod.s2_desc": { vi: "Giải pháp đồng bộ cho Điện tử, Thực phẩm và Dược phẩm", en: "Tailored suites for Electronics, F&B, and GMP Pharma" },
    "mega.prod.s3_title": { vi: "Công cụ chọn cấu hình", en: "System Configurator" },
    "mega.prod.s3_desc": { vi: "Tính toán số lượng Gateway, trạm HMI & ước tính ROI", en: "Estimate gateways, HMI stations & project ROI" },

    // Mega Menu: Giải pháp
    "mega.sol.tab_mod": {
      vi: "Giải pháp theo phân hệ",
      en: "Solutions by Module"
    },
    "mega.sol.tab_ind": {
      vi: "Giải pháp theo ngành",
      en: "Solutions by Industry"
    },
    "mega.sol.roadmap_link": {
      vi: "Lộ trình triển khai 5 bước →",
      en: "5-Step Deployment Roadmap →"
    },
    "mega.sol.mod_title": {
      vi: "Giải pháp theo phân hệ",
      en: "Solutions by Module"
    },
    "mega.sol.mod_desc": {
      vi: "Hệ thống mô-đun Smart Factory linh hoạt — bắt đầu từ điểm nghẽn cấp thiết nhất",
      en: "Modular Smart Factory platform — start with your most critical bottleneck"
    },
    "mega.sol.m1": { vi: "MES — Điều hành sản xuất", en: "MES — Manufacturing Execution" },
    "mega.sol.m2": { vi: "Truy xuất nguồn gốc GS1", en: "GS1 End-to-End Traceability" },
    "mega.sol.m3": { vi: "Giám sát máy & OEE (IIoT)", en: "Machine Monitoring & OEE (IIoT)" },
    "mega.sol.m4": { vi: "Quản lý chất lượng (QMS / SPC)", en: "Quality Management (QMS / SPC)" },
    "mega.sol.m5": { vi: "Kho thông minh & Intralogistics", en: "Smart Warehouse & Intralogistics" },
    "mega.sol.m6": { vi: "Quản lý năng lượng (EMS)", en: "Energy Management (EMS)" },
    "mega.sol.m7": { vi: "Bảo trì thiết bị (CMMS)", en: "Maintenance Management (CMMS)" },
    "mega.sol.m8": { vi: "Số hóa biểu mẫu (Paperless)", en: "Paperless Digital Workforms" },
    "mega.sol.m9": { vi: "Hồ sơ lô điện tử (eBR / eDHR)", en: "Electronic Batch Record (eBR / eDHR)" },
    "mega.sol.m10": { vi: "Kiểm kê Carbon & ESG (ISO 50001)", en: "Carbon Accounting & ESG (ISO 50001)" },
    "mega.sol.m11": { vi: "Thị giác máy (AI Vision QC)", en: "AI Vision Quality Inspection" },
    "mega.sol.m12": { vi: "Tích hợp hai chiều ERP ⇄ MES", en: "Bi-directional ERP ⇄ MES Sync" },

    "mega.sol.ind_title": {
      vi: "Giải pháp theo ngành công nghiệp",
      en: "Solutions by Industry Sector"
    },
    "mega.sol.ind_desc": {
      vi: "Chuẩn hóa quy trình vận hành, truy xuất và tuân thủ kiểm toán theo đặc thù từng ngành",
      en: "Standardize operations, genealogy, and audit compliance tailored to your industry"
    },
    "mega.sol.i1": { vi: "Điện tử & Lắp ráp SMT", en: "Electronics & SMT Assembly" },
    "mega.sol.i2": { vi: "Cơ khí chính xác & Ô tô", en: "Precision Machining & Automotive" },
    "mega.sol.i3": { vi: "Thực phẩm & Đồ uống (F&B)", en: "Food & Beverage (F&B)" },
    "mega.sol.i4": { vi: "Nông thủy sản xuất khẩu", en: "Seafood & Agricultural Export" },
    "mega.sol.i5": { vi: "Dược phẩm & Y tế GMP", en: "GMP Pharmaceuticals & Medical" },
    "mega.sol.i6": { vi: "Mỹ phẩm & Hóa mỹ phẩm", en: "Cosmetics & Personal Care" },
    "mega.sol.i7": { vi: "Bao bì, Nhựa & Ép phun", en: "Packaging, Plastics & Injection Molding" },
    "mega.sol.i8": { vi: "Dệt may & Da giày", en: "Textiles, Apparel & Footwear" },

    "mega.sol.s1_title": { vi: "Khảo sát nhà máy miễn phí", en: "Free Factory Walkthrough" },
    "mega.sol.s1_desc": { vi: "Đánh giá 1 ngày tại xưởng & nhận lộ trình ROI chi tiết", en: "1-day on-site assessment & detailed ROI roadmap" },
    "mega.sol.s2_title": { vi: "Kiến trúc chuẩn ISA-95", en: "ISA-95 Open Architecture" },
    "mega.sol.s2_desc": { vi: "Kết nối xuyên suốt từ PLC/Cảm biến lên ERP", en: "Seamless integration from shop-floor PLC/Sensors to ERP" },
    "mega.sol.s3_title": { vi: "Kết quả thực tế tại VN", en: "Proven Factory Results" },
    "mega.sol.s3_desc": { vi: "Tăng 18% OEE & truy xuất nguồn gốc dưới 30 giây", en: "+18% OEE gain & lot traceability in under 30 seconds" },

    // ------------------------------------------------------------------------
    // 1. PHẦN MỞ ĐẦU (HERO SECTION)
    // ------------------------------------------------------------------------
    "hero.eyebrow": {
      vi: "SMART FACTORY · MES · TRACEABILITY",
      en: "SMART FACTORY · MES · TRACEABILITY"
    },
    "hero.title": {
      vi: 'Số hóa nhà máy, <span class="hl">minh bạch từng công đoạn</span> sản xuất',
      en: 'Digitize your factory, <span class="hl">transparent across every</span> production stage'
    },
    "hero.desc": {
      vi: "DFS kết nối máy móc, con người và dữ liệu trên một nền tảng MES duy nhất — giúp nhà máy theo dõi sản lượng theo thời gian thực, nâng hiệu suất thiết bị (OEE) và truy xuất nguồn gốc mọi lô hàng chỉ trong vài giây.",
      en: "DFS unifies machines, operators, and shop-floor data on a single MES platform — enabling real-time production visibility, higher equipment effectiveness (OEE), and end-to-end lot traceability in seconds."
    },
    "hero.cta_primary": {
      vi: "Khám phá giải pháp",
      en: "Explore Solutions"
    },
    "hero.cta_secondary": {
      vi: "Khảo sát nhà máy miễn phí",
      en: "Free Factory Assessment"
    },
    "hero.trust1": {
      vi: "Chuẩn kiến trúc ISA-95",
      en: "ISA-95 Standard Architecture"
    },
    "hero.trust2": {
      vi: "Mã hóa GS1 (QR / DataMatrix)",
      en: "GS1 Coding (QR / DataMatrix)"
    },
    "hero.trust3": {
      vi: "Tích hợp ERP: SAP, Oracle, Odoo…",
      en: "ERP Ready: SAP, Oracle, Odoo…"
    },

    // ------------------------------------------------------------------------
    // 2. BA THẺ CÔNG CỤ NỔI (PROMO STRIP)
    // ------------------------------------------------------------------------
    "promo.1.tag": { vi: "Công cụ đánh giá", en: "Readiness Tool" },
    "promo.1.title": {
      vi: "Nhà máy của bạn đang ở cấp độ số hóa nào?",
      en: "What is your factory's digital maturity level?"
    },
    "promo.1.desc": {
      vi: "Trả lời 12 câu hỏi để biết mức độ trưởng thành số (cấp 1–5) và ưu tiên đầu tư phù hợp.",
      en: "Answer 12 questions to benchmark your maturity (Levels 1–5) and prioritize high-ROI investments."
    },
    "promo.1.cta": { vi: "Làm bài đánh giá →", en: "Take Assessment →" },

    "promo.2.tag": { vi: "Demo trực tiếp", en: "Live Walkthrough" },
    "promo.2.title": {
      vi: "Trải nghiệm MES với dữ liệu dây chuyền thực",
      en: "Experience MES with live production line data"
    },
    "promo.2.desc": {
      vi: "Xem lệnh sản xuất, OEE, cảnh báo dừng máy và hồ sơ lô điện tử chạy trên màn hình xưởng.",
      en: "See work orders, real-time OEE, downtime alerts, and electronic batch records in action."
    },
    "promo.2.cta": { vi: "Đặt lịch demo 45 phút →", en: "Schedule 45-Min Demo →" },

    "promo.3.tag": { vi: "Tài liệu chuyên sâu", en: "Executive Guide" },
    "promo.3.title": {
      vi: "Cẩm nang truy xuất nguồn gốc cho nhà máy xuất khẩu",
      en: "Traceability Playbook for Export Manufacturers"
    },
    "promo.3.desc": {
      vi: "Yêu cầu từ thị trường EU, Mỹ, Nhật và cách đáp ứng bằng mã định danh GS1 + MES.",
      en: "Compliance requirements for EU, US, and Japan markets using GS1 identifiers + MES."
    },
    "promo.3.cta": { vi: "Tải cẩm nang (PDF) →", en: "Download Guide (PDF) →" },

    // ------------------------------------------------------------------------
    // 3. THÁCH THỨC THƯỜNG GẶP TẠI XƯỞNG (4 PAIN POINTS)
    // ------------------------------------------------------------------------
    "pain.kicker": {
      vi: "Thách thức thường gặp",
      en: "Shop-Floor Challenges"
    },
    "pain.title": {
      vi: "Nhà máy vẫn đang vận hành bằng giấy, Excel và kinh nghiệm?",
      en: "Still running your plant on paper, spreadsheets, and guesswork?"
    },
    "pain.desc": {
      vi: "Dữ liệu sản xuất rời rạc khiến ban điều hành ra quyết định chậm, khó chứng minh chất lượng với khách hàng và tốn kém khi xảy ra sự cố.",
      en: "Fragmented shop-floor data delays executive decisions, complicates customer quality audits, and multiplies the cost of recalls."
    },

    "pain.1.title": { vi: "Báo cáo sản xuất trễ 1–2 ngày", en: "Production reports delayed 1–2 days" },
    "pain.1.desc": {
      vi: "Số liệu ghi tay cuối ca, nhập lại vào Excel — sai lệch, thiếu và không ai tin hoàn toàn.",
      en: "Handwritten end-of-shift tallies re-typed into Excel — prone to errors, omissions, and distrust."
    },
    "pain.1.fix": { vi: "→ MES ghi nhận tự động theo thời gian thực", en: "→ Automated real-time MES capture" },

    "pain.2.title": { vi: "Không biết OEE thực tế", en: "Hidden machine losses & unknown OEE" },
    "pain.2.desc": {
      vi: "Thời gian dừng máy, chạy chậm, hàng lỗi bị \"ẩn\" — năng lực thật của xưởng chưa được khai thác.",
      en: "Unrecorded micro-stops, slow cycles, and scrap hide your plant's true production capacity."
    },
    "pain.2.fix": { vi: "→ Kết nối máy (IIoT) & phân tích tổn thất", en: "→ IIoT machine connectivity & loss analytics" },

    "pain.3.title": { vi: "Truy xuất lô mất hàng giờ", en: "Hours wasted tracing a single lot" },
    "pain.3.desc": {
      vi: "Khi khách hàng khiếu nại hoặc cần thu hồi, phải lục sổ sách nhiều bộ phận mới khoanh vùng được lô lỗi.",
      en: "Customer claims or recalls require digging through paper binders across multiple departments."
    },
    "pain.3.fix": { vi: "→ Phả hệ lô (genealogy) tra cứu trong vài giây", en: "→ Lot genealogy lookup in seconds" },

    "pain.4.title": { vi: "ERP và xưởng không \"nói chuyện\"", en: "Disconnect between ERP and shop floor" },
    "pain.4.desc": {
      vi: "Kế hoạch trên ERP không phản ánh tiến độ thực tế dưới xưởng; tồn kho WIP luôn chênh lệch.",
      en: "ERP schedules don't reflect actual line progress; work-in-progress (WIP) inventory never matches."
    },
    "pain.4.fix": { vi: "→ Tích hợp hai chiều ERP ⇄ MES ⇄ Máy", en: "→ Bi-directional ERP ⇄ MES ⇄ Machine sync" },

    // ------------------------------------------------------------------------
    // 4. BỘ GIẢI PHÁP SMART FACTORY THEO MÔ-ĐUN (7 SOLUTION TABS)
    // ------------------------------------------------------------------------
    "sol.kicker": { vi: "Giải pháp", en: "Solutions" },
    "sol.title": {
      vi: "Bộ giải pháp Smart Factory theo mô-đun",
      en: "Modular Smart Factory Solution Suite"
    },
    "sol.desc": {
      vi: "Bắt đầu từ bài toán cấp thiết nhất, mở rộng dần trên cùng một nền tảng dữ liệu. Chọn từng mô-đun để xem chi tiết.",
      en: "Start with your highest-priority bottleneck and scale seamlessly on a unified data backbone. Select a module below."
    },
    "sol.tab.mes": { vi: "MES — Điều hành sản xuất", en: "MES — Production Execution" },
    "sol.tab.trace": { vi: "Truy xuất nguồn gốc", en: "GS1 Traceability" },
    "sol.tab.oee": { vi: "Giám sát máy & OEE", en: "Machine Monitoring & OEE" },
    "sol.tab.qms": { vi: "Quản lý chất lượng", en: "Quality Management (QMS)" },
    "sol.tab.wms": { vi: "Kho & Logistics (WMS)", en: "Warehouse & Logistics (WMS)" },
    "sol.tab.cmms": { vi: "Bảo trì & Số hóa biểu mẫu", en: "Maintenance & Paperless" },
    "sol.tab.ems": { vi: "Quản lý năng lượng (EMS)", en: "Energy Management (EMS)" },
    "sol.btn_explore": { vi: "Nhận tài liệu giải pháp", en: "Get Solution Brochure" },
    "sol.btn_cases": { vi: "Xem dự án thực tế", en: "View Case Studies" },
    "sol.metric_label": { vi: "Hiệu quả điển hình", en: "Typical Impact" },

    // ------------------------------------------------------------------------
    // 5. KIẾN TRÚC MỞ ISA-95 (PLATFORM SECTION)
    // ------------------------------------------------------------------------
    "plat.kicker": {
      vi: "Nền tảng DFS — Digital Factory Solutions",
      en: "DFS Platform — Digital Factory Solutions"
    },
    "plat.title": {
      vi: "Kiến trúc mở ISA-95 & Chuẩn tương thích",
      en: "Open ISA-95 Architecture & Interoperability"
    },
    "plat.tier4.title": { vi: "Cấp 4 · ERP Quản trị", en: "Level 4 · Enterprise ERP" },
    "plat.tier4.meta": { vi: "SAP / Oracle / Odoo", en: "SAP / Oracle / Odoo" },
    "plat.arrow1": { vi: "↑↓ API Đồng bộ hai chiều", en: "↑↓ Bi-directional API Sync" },
    "plat.tier3.title": { vi: "Cấp 3 · DFS MES / MOM", en: "Level 3 · DFS MES / MOM" },
    "plat.tier3.sub": { vi: "Trung tâm điều hành & dữ liệu nhà máy", en: "Plant-wide execution & data hub" },
    "plat.arrow2": { vi: "↑↓ Thu thập thời gian thực", en: "↑↓ Real-Time Data Acquisition" },
    "plat.tier0.title": { vi: "Cấp 0–2 · Edge, PLC & Hiện trường", en: "Levels 0–2 · Edge, PLC & Shop Floor" },
    "plat.tier0.meta": { vi: "Máy móc & Cảm biến", en: "Machines & Sensors" },

    "plat.spec.head": { vi: "Bảng Chuẩn Kết nối & Triển khai", en: "Connectivity & Deployment Matrix" },
    "plat.spec.r1_label": { vi: "Giao thức Máy (OT)", en: "Machine Protocols (OT)" },
    "plat.spec.r1_val": {
      vi: "OPC UA · MQTT · Modbus TCP/RTU · Siemens S7 · EtherNet/IP · MTConnect",
      en: "OPC UA · MQTT · Modbus TCP/RTU · Siemens S7 · EtherNet/IP · MTConnect"
    },
    "plat.spec.r2_label": { vi: "Phần mềm ERP (IT)", en: "ERP Systems (IT)" },
    "plat.spec.r2_val": {
      vi: "SAP · Oracle · MS Dynamics · Odoo · REST / Webhook",
      en: "SAP · Oracle · MS Dynamics · Odoo · REST / Webhook"
    },
    "plat.spec.r3_label": { vi: "Thiết bị Hiện trường", en: "Shop-Floor Hardware" },
    "plat.spec.r3_val": {
      vi: "Robot / AGV · PLC · IoT Devices · Cảm biến · AI Vision · Máy quét DPM · Máy in GS1 · UHF RFID · Cân điện tử · Tablet / Andon",
      en: "Robots / AGVs · PLCs · IIoT Gateways · Sensors · AI Vision · DPM Scanners · GS1 Printers · UHF RFID · Scales · Tablets / Andon"
    },
    "plat.spec.r4_label": { vi: "Mô hình Hạ tầng", en: "Deployment Models" },
    "plat.spec.r4_val": {
      vi: "On-premise tại nhà máy, Cloud hoặc Hybrid — tương thích cả máy đời cũ",
      en: "On-premise server, Private Cloud, or Hybrid — compatible with legacy machines"
    },

    // ------------------------------------------------------------------------
    // 6. DỰ ÁN TIÊU BIỂU (CASE STUDIES)
    // ------------------------------------------------------------------------
    "cases.kicker": { vi: "Dự án tiêu biểu", en: "Featured Case Studies" },
    "cases.title": { vi: "Kết quả đo được tại nhà máy", en: "Measurable Shop-Floor Impact" },
    "cases.desc": {
      vi: "Mỗi dự án bắt đầu từ một dây chuyền thí điểm và mở rộng khi hiệu quả đã được chứng minh.",
      en: "Every deployment begins with a focused pilot line and scales once ROI is proven."
    },
    "cases.filter.all": { vi: "Tất cả", en: "All" },
    "cases.filter.elec": { vi: "Điện tử & Cơ khí", en: "Electronics & Automotive" },
    "cases.filter.fnb": { vi: "Thực phẩm & Đồ uống", en: "Food & Beverage" },
    "cases.filter.pharma": { vi: "Dược & Mỹ phẩm", en: "Pharma & Cosmetics" },

    "cases.1.cat": { vi: "Linh kiện cơ điện tử", en: "Automotive & Mechatronics" },
    "cases.1.title": {
      vi: "MES + OEE cho 12 chuyền lắp ráp linh kiện ô tô",
      en: "MES + OEE across 12 automotive component assembly lines"
    },
    "cases.1.desc": {
      vi: "Kết nối 85 máy qua OPC UA, thay thế báo cáo giấy bằng màn hình Andon và phân tích nguyên nhân dừng máy theo Pareto.",
      en: "Connected 85 machines via OPC UA, replaced paper logs with live Andon boards, and analyzed downtime via Pareto charts."
    },
    "cases.1.kpi1": { vi: "<b>+18%</b>OEE", en: "<b>+18%</b>OEE" },
    "cases.1.kpi2": { vi: "<b>-35%</b>Dừng máy", en: "<b>-35%</b>Downtime" },
    "cases.1.kpi3": { vi: "<b>100%</b>Paperless", en: "<b>100%</b>Paperless" },

    "cases.2.cat": { vi: "Thực phẩm xuất khẩu", en: "Food Export" },
    "cases.2.title": {
      vi: "Truy xuất nguồn gốc từ vùng nguyên liệu đến container",
      en: "Farm-to-container GS1 traceability for export food processing"
    },
    "cases.2.desc": {
      vi: "Mã hóa GS1 cho từng thùng – pallet, liên kết lô nguyên liệu, thông số chế biến và chứng từ xuất khẩu sang EU, Nhật Bản.",
      en: "GS1 coding for cartons & pallets, linking raw material lots, processing parameters, and export compliance for EU & Japan."
    },
    "cases.2.kpi1": { vi: "<b>&lt; 30s</b>Truy xuất lô", en: "<b>&lt; 30s</b>Lot Lookup" },
    "cases.2.kpi2": { vi: "<b>-70%</b>Thời gian audit", en: "<b>-70%</b>Audit Prep Time" },

    "cases.3.cat": { vi: "Dược phẩm GMP", en: "GMP Pharmaceuticals" },
    "cases.3.title": {
      vi: "Hồ sơ lô điện tử (eBR) cho nhà máy đạt chuẩn GMP",
      en: "Electronic Batch Records (eBR) for EU-GMP pharmaceutical plant"
    },
    "cases.3.desc": {
      vi: "Số hóa 140 biểu mẫu sản xuất – kiểm nghiệm, chữ ký điện tử và audit trail, rút ngắn thời gian duyệt xuất xưởng lô thuốc.",
      en: "Digitized 140 production & QC forms with 21 CFR Part 11 e-signatures and audit trails, accelerating batch release."
    },
    "cases.3.kpi1": { vi: "<b>-60%</b>Thời gian duyệt lô", en: "<b>-60%</b>Batch Release Time" },
    "cases.3.kpi2": { vi: "<b>0</b>Lỗi ghi chép", en: "<b>0</b>Recording Errors" },

    "cases.read_more": { vi: "Đọc case study", en: "Read case study" },

    // ------------------------------------------------------------------------
    // 7. LỘ TRÌNH TRIỂN KHAI 5 BƯỚC (ROADMAP)
    // ------------------------------------------------------------------------
    "road.kicker": { vi: "Phương pháp triển khai", en: "Implementation Methodology" },
    "road.title": {
      vi: "Lộ trình 5 bước — bắt đầu nhỏ, nhân rộng nhanh",
      en: "5-Step Roadmap — Start Small, Scale Fast"
    },
    "road.desc": {
      vi: "Giảm rủi ro đầu tư bằng mô hình thí điểm có mục tiêu đo lường rõ ràng trước khi mở rộng toàn nhà máy.",
      en: "De-risk your investment with a KPI-driven pilot line before rolling out plant-wide."
    },
    "road.1.title": { vi: "Khảo sát & đánh giá", en: "Factory Audit & Scoping" },
    "road.1.desc": {
      vi: "Đánh giá hiện trạng quy trình, thiết bị, dữ liệu; xác định bài toán ưu tiên và KPI mục tiêu.",
      en: "Assess current workflows, machines, and data; define priority bottlenecks and target KPIs."
    },
    "road.1.time": { vi: "1–2 tuần", en: "1–2 weeks" },

    "road.2.title": { vi: "Thiết kế giải pháp", en: "Solution Blueprint" },
    "road.2.desc": {
      vi: "Thiết kế quy trình số, kiến trúc kết nối máy, tích hợp ERP và phương án mã hóa.",
      en: "Design digital workflows, IIoT machine connectivity, ERP integration, and GS1 coding scheme."
    },
    "road.2.time": { vi: "2–4 tuần", en: "2–4 weeks" },

    "road.3.title": { vi: "Thí điểm 1 chuyền", en: "Pilot Line Go-Live" },
    "road.3.desc": {
      vi: "Triển khai trên dây chuyền đại diện, đào tạo người dùng, đo lường so với KPI ban đầu.",
      en: "Deploy on a representative line, train operators, and validate gains against baseline KPIs."
    },
    "road.3.time": { vi: "8–12 tuần", en: "8–12 weeks" },

    "road.4.title": { vi: "Mở rộng toàn nhà máy", en: "Plant-Wide Rollout" },
    "road.4.desc": {
      vi: "Nhân rộng theo mẫu chuẩn đã kiểm chứng sang các xưởng, chuyền và nhà máy khác.",
      en: "Replicate the proven template across remaining lines, workshops, and sister plants."
    },
    "road.4.time": { vi: "3–6 tháng", en: "3–6 months" },

    "road.5.title": { vi: "Vận hành & tối ưu", en: "Continuous Optimization" },
    "road.5.desc": {
      vi: "Hỗ trợ kỹ thuật, giám sát hệ thống, cải tiến liên tục dựa trên dữ liệu.",
      en: "24/7 technical SLA, system monitoring, and data-driven continuous improvement."
    },
    "road.5.time": { vi: "Liên tục", en: "Ongoing" },

    // ------------------------------------------------------------------------
    // 8. NĂNG LỰC & CON SỐ (NUMBERS & STANDARDS)
    // ------------------------------------------------------------------------
    "about.kicker": { vi: "Năng lực", en: "Track Record" },
    "about.title": {
      vi: "Đối tác chuyển đổi số sản xuất đáng tin cậy",
      en: "Your Trusted Manufacturing Digitalization Partner"
    },
    "about.desc": {
      vi: "Đội ngũ kỹ sư am hiểu cả công nghệ thông tin (IT) lẫn công nghệ vận hành (OT) tại xưởng sản xuất.",
      en: "Our engineering team bridges enterprise IT software and shop-floor OT automation."
    },
    "about.n1": { vi: "Nhà máy triển khai", en: "Factories Deployed" },
    "about.n2": { vi: "Máy móc được kết nối", en: "Connected Machines" },
    "about.n3": { vi: "Cải thiện OEE trung bình", en: "Average OEE Gain" },
    "about.n4": { vi: "Truy xuất một lô hàng", en: "Lot Traceability Time" },

    // ------------------------------------------------------------------------
    // 9. KHỐI KÊU GỌI HÀNH ĐỘNG (CTA BANNER)
    // ------------------------------------------------------------------------
    "cta.title": {
      vi: "Sẵn sàng bắt đầu hành trình Smart Factory?",
      en: "Ready to start your Smart Factory journey?"
    },
    "cta.desc": {
      vi: "Đăng ký khảo sát miễn phí 1 ngày tại nhà máy. Chuyên gia của chúng tôi sẽ đề xuất lộ trình số hóa và ước tính ROI cụ thể cho doanh nghiệp bạn.",
      en: "Book a complimentary 1-day on-site factory assessment. Our specialists will deliver a tailored digitalization roadmap and ROI estimate."
    },
    "cta.btn_survey": { vi: "Đăng ký khảo sát", en: "Book Free Audit" },
    "cta.btn_demo": { vi: "Đặt lịch demo", en: "Schedule Demo" },

    // ------------------------------------------------------------------------
    // 10. CHÂN TRANG (FOOTER — Dùng chung)
    // ------------------------------------------------------------------------
    "footer.col1": { vi: "Sản phẩm & Thiết bị", en: "Products & Hardware" },
    "footer.c1.l1": { vi: "Phần mềm MES / Trace / OEE", en: "MES / Traceability / OEE Suite" },
    "footer.c1.l2": { vi: "DFS Edge Gateway (IIoT)", en: "DFS Edge Gateway (IIoT)" },
    "footer.c1.l3": { vi: "Màn hình Andon & Panel PC", en: "Andon Displays & Panel PCs" },
    "footer.c1.l4": { vi: "Máy quét PDA & In nhãn GS1", en: "Rugged PDAs & GS1 Printers" },
    "footer.c1.l5": { vi: "Cảm biến & Tháp đèn Andon", en: "IIoT Sensors & Andon Towers" },

    "footer.col2": { vi: "Giải pháp & Ngành", en: "Solutions & Industries" },
    "footer.c2.l1": { vi: "Nhà máy không giấy tờ", en: "Paperless Manufacturing" },
    "footer.c2.l2": { vi: "Điện tử & Cơ khí", en: "Electronics & Machining" },
    "footer.c2.l3": { vi: "Thực phẩm & Đồ uống", en: "Food & Beverage" },
    "footer.c2.l4": { vi: "Dược phẩm GMP", en: "GMP Pharmaceuticals" },
    "footer.c2.l5": { vi: "Quản lý năng lượng (EMS)", en: "Energy Management (EMS)" },
    "footer.c2.l6": { vi: "Tích hợp xưởng ⇄ ERP", en: "Shop-Floor ⇄ ERP Integration" },

    "footer.col3": { vi: "Tài nguyên", en: "Resources" },
    "footer.c3.l1": { vi: "Case study", en: "Case Studies" },
    "footer.c3.l2": { vi: "Cẩm nang truy xuất", en: "Traceability Playbook" },
    "footer.c3.l3": { vi: "Đánh giá mức độ số hóa", en: "Digital Maturity Assessment" },
    "footer.c3.l4": { vi: "Phương pháp triển khai", en: "Deployment Methodology" },

    "footer.col4": { vi: "Công ty", en: "Company" },
    "footer.c4.l1": { vi: "Về DFS", en: "About DFS" },
    "footer.c4.l2": { vi: "Hệ thống nhận diện (Brand Guide)", en: "Brand Identity & Design System" },
    "footer.c4.l3": { vi: "Đối tác công nghệ", en: "Technology Partners" },
    "footer.c4.l4": { vi: "Tin tức", en: "News & Insights" },

    "footer.col5": { vi: "Liên hệ", en: "Contact" },
    "footer.c5.survey": { vi: "Đăng ký khảo sát", en: "Book Factory Audit" },
    "footer.copyright": {
      vi: "<strong>DFS — Digital Factory Solutions</strong> — Số hóa nhà máy, minh bạch từng công đoạn. © 2026",
      en: "<strong>DFS — Digital Factory Solutions</strong> — Digitize your factory, transparent across every stage. © 2026"
    },
    "footer.back_top": { vi: "Lên đầu trang ↑", en: "Back to top ↑" },

    // ------------------------------------------------------------------------
    // 11. HỘP THOẠI ĐĂNG KÝ (MODAL FORM)
    // ------------------------------------------------------------------------
    "modal.default_tag": { vi: "Liên hệ", en: "Contact" },
    "modal.default_title": { vi: "Đăng ký khảo sát nhà máy", en: "Book a Factory Assessment" },
    "modal.default_body": {
      vi: "Để lại thông tin, chuyên gia sẽ liên hệ trong 24 giờ làm việc.",
      en: "Leave your details and our solution engineers will reach out within 24 business hours."
    },
    "modal.lbl_name": { vi: "Họ và tên", en: "Full Name" },
    "modal.lbl_role": { vi: "Chức vụ", en: "Job Title" },
    "modal.lbl_company": { vi: "Công ty / Nhà máy", en: "Company / Plant Name" },
    "modal.lbl_phone": { vi: "Điện thoại", en: "Phone Number" },
    "modal.lbl_email": { vi: "Email", en: "Work Email" },
    "modal.lbl_interest": { vi: "Mối quan tâm chính", en: "Primary Area of Interest" },
    "modal.opt.mes": { vi: "Hệ thống MES", en: "MES — Manufacturing Execution" },
    "modal.opt.trace": { vi: "Truy xuất nguồn gốc", en: "GS1 Lot & Serial Traceability" },
    "modal.opt.oee": { vi: "Giám sát máy & OEE", en: "Machine Monitoring & OEE" },
    "modal.opt.ems": { vi: "Quản lý năng lượng (EMS / ESG)", en: "Energy Management (EMS / ESG)" },
    "modal.opt.qms": { vi: "Quản lý chất lượng", en: "Quality Management (QMS / SPC)" },
    "modal.opt.paperless": { vi: "Số hóa biểu mẫu / Paperless", en: "Paperless Digital Forms" },
    "modal.opt.consult": { vi: "Chưa rõ — cần tư vấn tổng thể", en: "General Smart Factory Consultation" },
    "modal.btn_cancel": { vi: "Đóng", en: "Cancel" },
    "modal.btn_submit": { vi: "Gửi yêu cầu", en: "Submit Request" },
    "toast.success": {
      vi: "Đã ghi nhận yêu cầu! Chuyên gia sẽ liên hệ trong 24 giờ làm việc.",
      en: "Request received! Our specialist will contact you within 24 business hours."
    }
  },

  // ==========================================================================
  // PHẦN B: DỮ LIỆU CHI TIẾT 7 MÔ-ĐUN GIẢI PHÁP (Khi bấm chọn từng Tab)
  // ==========================================================================
  solutionsData: {
    mes: {
      vi: {
        badge: "Manufacturing Execution System",
        title: "Điều hành sản xuất theo thời gian thực, không giấy tờ",
        desc: "Số hóa toàn bộ vòng đời lệnh sản xuất: từ kế hoạch nhận từ ERP, điều độ xuống từng chuyền/máy, cấp phát nguyên vật liệu, ghi nhận sản lượng – phế phẩm đến đóng lệnh và hồ sơ lô điện tử.",
        bullets: [
          "Lập và điều độ lệnh sản xuất theo năng lực chuyền, ca, công nhân",
          "Hướng dẫn công việc điện tử (eWI) & ghi nhận sản lượng bằng máy quét, tablet",
          "Theo dõi WIP, tiến độ đơn hàng và năng suất lao động tức thời",
          "Hồ sơ lô điện tử (eBR/eDHR) tự động tổng hợp khi đóng lệnh"
        ],
        metricVal: "-90%",
        metricCap: "Thời gian lập báo cáo sản xuất cuối ca, cuối tháng",
        note: "<strong>Tích hợp:</strong> đồng bộ lệnh, BOM, routing và tồn kho hai chiều với ERP qua REST API / middleware."
      },
      en: {
        badge: "Manufacturing Execution System",
        title: "Real-time, paperless shop-floor production execution",
        desc: "Digitize the entire work-order lifecycle: from ERP schedule intake, line/machine dispatching, material kitting, and live output/scrap capture to order closure and electronic batch records.",
        bullets: [
          "Dispatch and schedule work orders by line capacity, shift, and operator skill",
          "Electronic Work Instructions (eWI) & barcode/tablet output reporting",
          "Real-time WIP tracking, order progress, and labor productivity analytics",
          "Automated Electronic Batch / Device History Records (eBR/eDHR) upon closure"
        ],
        metricVal: "-90%",
        metricCap: "Time spent compiling shift and monthly production reports",
        note: "<strong>Integration:</strong> Bi-directional sync of work orders, BOM, routings, and inventory with ERP via REST API / middleware."
      }
    },
    trace: {
      vi: {
        badge: "Traceability & Genealogy",
        title: "Truy xuất nguồn gốc theo lô, theo serial chuẩn GS1",
        desc: "Xây dựng phả hệ đầy đủ toàn trình (End-to-End): từ lô nguyên liệu NCC, lệnh sản xuất, máy móc vận hành, kết quả kiểm tra chất lượng đến đóng gói dán nhãn pallet và phân phối.",
        bullets: [
          "Sinh và in mã định danh GS1: GTIN, SSCC, QR, DataMatrix, GS1-128",
          "Liên kết phả hệ cha – con: đơn vị → hộp → thùng → pallet (aggregation)",
          "Truy xuất xuôi – ngược 6 bước, khoanh vùng chính xác lô ảnh hưởng < 30 giây khi thu hồi",
          "Cổng tra cứu cho khách hàng/người tiêu dùng & xác thực hàng chính hãng qua QR"
        ],
        metricVal: "< 30s",
        metricCap: "Thời gian khoanh vùng một lô hàng thay vì nhiều giờ tra sổ sách",
        note: "<strong>Tuân thủ:</strong> định hướng theo TCVN 12850:2019, ISO 22000/HACCP, GMP và yêu cầu xuất khẩu EU/Mỹ/Nhật."
      },
      en: {
        badge: "Traceability & Genealogy",
        title: "End-to-end lot & unit serialization built on GS1 standards",
        desc: "Build complete product genealogy: linking supplier raw material lots, production work orders, machine parameters, and QC results through carton/pallet aggregation and distribution.",
        bullets: [
          "Generate and print GS1 identifiers: GTIN, SSCC, QR, DataMatrix, GS1-128",
          "Parent–child packaging hierarchy: unit → inner box → carton → pallet",
          "Forward & backward genealogy trace to isolate affected lots in < 30 seconds",
          "Customer verification portal & anti-counterfeit QR authentication"
        ],
        metricVal: "< 30s",
        metricCap: "Time required to isolate an affected batch during recalls or audits",
        note: "<strong>Compliance:</strong> Aligned with GS1 Global, ISO 22000/HACCP, EU-GMP, FDA FSMA, and EU/US/Japan export mandates."
      }
    },
    oee: {
      vi: {
        badge: "IIoT · Machine Monitoring",
        title: "Giám sát máy và tối ưu hiệu suất thiết bị tổng thể (OEE)",
        desc: "Thu thập tự động trạng thái chạy/dừng, tốc độ, sản lượng và cảnh báo từ PLC, cảm biến — kể cả máy đời cũ — để thấy rõ mọi tổn thất năng lực.",
        bullets: [
          "Dashboard OEE theo máy, chuyền, ca: Availability · Performance · Quality",
          "Phân loại nguyên nhân dừng máy, biểu đồ Pareto 6 tổn thất lớn",
          "Màn hình Andon tại xưởng, cảnh báo qua Zalo/Email/SMS",
          "Edge gateway kết nối OPC UA, Modbus, MQTT, Siemens S7…"
        ],
        metricVal: "+15–25%",
        metricCap: "Mức cải thiện OEE điển hình sau 6 tháng vận hành",
        note: "<strong>Không cần thay máy:</strong> bổ sung cảm biến/IO module cho máy chưa có PLC."
      },
      en: {
        badge: "IIoT · Machine Monitoring",
        title: "Automated machine monitoring & OEE loss elimination",
        desc: "Capture run/down status, cycle speed, part counts, and alarms directly from PLCs and sensors — including legacy equipment — to expose hidden capacity losses.",
        bullets: [
          "Live OEE dashboards by machine, line, and shift (Availability · Performance · Quality)",
          "Downtime reason categorization & Six Big Losses Pareto analytics",
          "Shop-floor Andon displays with instant alerts via Email/SMS/Messaging",
          "Plug-and-play Edge Gateways supporting OPC UA, Modbus, MQTT, Siemens S7…"
        ],
        metricVal: "+15–25%",
        metricCap: "Typical OEE improvement within 6 months of go-live",
        note: "<strong>Zero machine replacement:</strong> Non-intrusive sensor & I/O retrofit kits for legacy mechanical machines."
      }
    },
    qms: {
      vi: {
        badge: "Quality Management · SPC",
        title: "Kiểm soát chất lượng ngay tại công đoạn",
        desc: "Đưa kế hoạch kiểm tra lên tablet, thu thập kết quả đo trực tiếp từ thiết bị và cảnh báo sớm khi quá trình có xu hướng vượt giới hạn kiểm soát.",
        bullets: [
          "Kế hoạch kiểm tra IQC – IPQC – OQC số hóa theo sản phẩm, công đoạn",
          "Biểu đồ kiểm soát SPC, Cp/Cpk tự động",
          "Quản lý hàng không phù hợp (NCR), CAPA, 8D",
          "Khóa lô (hold) tự động khi phát hiện bất thường"
        ],
        metricVal: "-40%",
        metricCap: "Tỷ lệ phế phẩm và làm lại nhờ phát hiện sớm sai lệch",
        note: "<strong>Hỗ trợ:</strong> ISO 9001, IATF 16949, HACCP/ISO 22000, GMP."
      },
      en: {
        badge: "Quality Management · SPC",
        title: "In-line quality control & real-time Statistical Process Control",
        desc: "Deploy digital inspection plans on shop-floor tablets, capture measurements directly from digital gauges/scales, and trigger early alerts before processes drift out of spec.",
        bullets: [
          "Digital IQC – IPQC – OQC inspection checklists by item and routing step",
          "Automated SPC control charts and real-time Cp/Cpk capability indices",
          "Non-Conformance Report (NCR), CAPA, and 8D workflow management",
          "Automated lot hold / quarantine upon critical defect detection"
        ],
        metricVal: "-40%",
        metricCap: "Reduction in scrap and rework through early drift detection",
        note: "<strong>Standards:</strong> Supports ISO 9001, IATF 16949, HACCP/ISO 22000, and GMP quality systems."
      }
    },
    wms: {
      vi: {
        badge: "Warehouse & Intralogistics",
        title: "Kho nguyên liệu, bán thành phẩm và thành phẩm chính xác",
        desc: "Quản lý vị trí, lô, hạn dùng bằng mã vạch/RFID; đồng bộ cấp phát nguyên vật liệu theo lệnh sản xuất và xuất hàng theo đơn.",
        bullets: [
          "Nhập – xuất – chuyển kho bằng thiết bị cầm tay (PDA)",
          "Quản lý FIFO/FEFO, hạn sử dụng, vị trí kệ",
          "Cấp phát theo lệnh (kitting) & bổ sung nguyên liệu cho chuyền",
          "Kiểm kê nhanh, đối soát tồn kho với ERP"
        ],
        metricVal: "99,8%",
        metricCap: "Độ chính xác tồn kho sau khi áp dụng quét mã toàn trình",
        note: "<strong>Kết nối:</strong> máy in nhãn, PDA, RFID, cân điện tử, AGV/AMR."
      },
      en: {
        badge: "Warehouse & Intralogistics",
        title: "Precision raw material, WIP, and finished goods warehouse",
        desc: "Track bin locations, lots, and shelf-life via barcode/RFID; synchronize material kitting to production lines and outbound order fulfillment.",
        bullets: [
          "Receiving, putaway, picking, and transfers via rugged mobile PDAs",
          "Strict FIFO/FEFO enforcement, shelf-life alerts, and bin-level tracking",
          "Work-order material kitting & kanban line-side replenishment",
          "Rapid cycle counting and real-time ERP inventory reconciliation"
        ],
        metricVal: "99.8%",
        metricCap: "Inventory accuracy achieved through end-to-end barcode scanning",
        note: "<strong>Hardware ready:</strong> Seamless integration with GS1 printers, PDAs, UHF RFID, scales, and AGV/AMRs."
      }
    },
    cmms: {
      vi: {
        badge: "Maintenance · Digital Forms",
        title: "Bảo trì chủ động và số hóa biểu mẫu xưởng",
        desc: "Lập kế hoạch bảo trì định kỳ dựa trên giờ chạy thực tế từ máy; số hóa checklist, nhật ký ca, biểu mẫu 5S/an toàn thay cho giấy tờ.",
        bullets: [
          "Lịch bảo trì phòng ngừa theo thời gian hoặc theo bộ đếm máy",
          "Yêu cầu sửa chữa từ Andon, theo dõi MTTR/MTBF",
          "Quản lý phụ tùng thay thế và chi phí bảo trì",
          "Trình thiết kế biểu mẫu điện tử kéo – thả, chữ ký số, audit trail"
        ],
        metricVal: "-30%",
        metricCap: "Thời gian dừng máy ngoài kế hoạch",
        note: "<strong>Paperless:</strong> toàn bộ biểu mẫu lưu trữ tập trung, tìm kiếm tức thì khi audit."
      },
      en: {
        badge: "Maintenance · Digital Forms",
        title: "Condition-based maintenance & paperless shop-floor checklists",
        desc: "Schedule preventive maintenance based on actual machine runtime hours; replace paper clipboards with digital checklists, shift handovers, and 5S/safety audits.",
        bullets: [
          "Calendar-based and runtime-counter-based Preventive Maintenance (PM)",
          "Instant Andon repair ticketing with live MTTR & MTBF tracking",
          "Spare parts inventory control and maintenance cost tracking",
          "Drag-and-drop digital form builder with e-signatures and audit trails"
        ],
        metricVal: "-30%",
        metricCap: "Reduction in unplanned equipment downtime",
        note: "<strong>Paperless:</strong> Centralized digital records searchable in seconds during customer or ISO audits."
      }
    },
    ems: {
      vi: {
        badge: "Energy Management · ESG",
        title: "Giám sát năng lượng thời gian thực & Tối ưu chi phí",
        desc: "Thu thập liên tục dữ liệu điện năng, khí nén, hơi, nước từ đồng hồ đo thông minh theo từng phân xưởng, chuyền và máy; liên kết mức tiêu thụ với từng lệnh sản xuất và chuẩn bị báo cáo phát thải CO₂.",
        bullets: [
          "Theo dõi phụ tải đỉnh (Peak Demand), hệ số công suất (cosφ) & cảnh báo quá tải tức thời",
          "Tính định mức tiêu hao năng lượng (kWh, m³) trên từng sản phẩm và lô sản xuất",
          "Phát hiện máy chạy không tải, rò rỉ khí nén và thiết bị tiêu thụ điện bất thường",
          "Tự động tổng hợp báo cáo kiểm kê khí nhà kính Scope 1–2 theo ISO 50001 & ESG"
        ],
        metricVal: "-12–20%",
        metricCap: "Chi phí điện năng & tổn thất chạy không tải trên mỗi đơn vị sản phẩm",
        note: "<strong>Kết nối phần cứng:</strong> tương thích đồng hồ 3 pha Modbus RTU/TCP, biến dòng CT kẹp mở, cảm biến lưu lượng và DFS PowerMeter PM-3P."
      },
      en: {
        badge: "Energy Management · ESG",
        title: "Real-time energy monitoring, cost reduction & ESG reporting",
        desc: "Continuously meter electricity, compressed air, steam, and water across workshops, lines, and machines; allocate energy usage per production lot and automate Scope 1–2 CO₂ reporting.",
        bullets: [
          "Monitor Peak Demand, power factor (cosφ), and instant overload alerts",
          "Calculate energy intensity (kWh, m³) per unit produced and per batch",
          "Detect idle-running machines, compressed-air leaks, and abnormal draws",
          "Automated Scope 1–2 greenhouse gas accounting aligned with ISO 50001 & ESG"
        ],
        metricVal: "-12–20%",
        metricCap: "Reduction in energy cost and idle-load waste per unit produced",
        note: "<strong>Hardware ready:</strong> Compatible with Modbus RTU/TCP 3-phase meters, split-core CTs, flow sensors, and DFS PowerMeter PM-3P."
      }
    }
  },

  // ==========================================================================
  // PHẦN C: NỘI DUNG HỘP THOẠI ĐỘNG (Khi bấm các nút mở Popup / Case Study)
  // ==========================================================================
  modalContent: {
    survey: {
      vi: ["Miễn phí", "Đăng ký khảo sát nhà máy", "Chuyên gia khảo sát 1 ngày tại xưởng và gửi báo cáo hiện trạng số hóa kèm lộ trình đề xuất."],
      en: ["Complimentary", "Book a Free Factory Audit", "Our specialists conduct a 1-day on-site walkthrough and deliver a current-state assessment with a phased ROI roadmap."]
    },
    demo: {
      vi: ["Demo trực tiếp", "Đặt lịch demo hệ thống MES", "Buổi demo 45 phút (online hoặc tại văn phòng) với kịch bản theo ngành của bạn."],
      en: ["Live Demo", "Schedule a 1-on-1 MES Walkthrough", "A tailored 45-minute live session (online or on-site) configured for your industry workflow."]
    },
    assessment: {
      vi: ["Công cụ đánh giá", "Đánh giá mức độ sẵn sàng Smart Factory", "Nhận bộ câu hỏi đánh giá và báo cáo mức độ trưởng thành số qua email."],
      en: ["Readiness Tool", "Smart Factory Maturity Assessment", "Receive our 12-point benchmarking questionnaire and customized maturity report via email."]
    },
    ebook: {
      vi: ["Tài liệu", "Tải cẩm nang truy xuất nguồn gốc", "Để lại thông tin để nhận đường dẫn tải tài liệu PDF qua email."],
      en: ["Executive Guide", "Download the GS1 Traceability Playbook", "Enter your details below to receive the PDF download link via email."]
    }
  },

  caseContent: {
    electronics: {
      vi: ["Case study · Linh kiện ô tô", "MES + OEE cho 12 chuyền lắp ráp", "Kết nối 85 máy, Andon theo thời gian thực và phân tích nguyên nhân dừng máy giúp tăng 18% OEE sau 6 tháng. Để lại thông tin để nhận bản case study đầy đủ."],
      en: ["Case Study · Automotive Components", "MES + OEE for 12 Assembly Lines", "Connected 85 machines with live Andon boards and Pareto downtime analytics—boosting OEE by 18% within 6 months. Leave your details to receive the full PDF case study."]
    },
    fnb: {
      vi: ["Case study · Thực phẩm xuất khẩu", "Truy xuất từ vùng nguyên liệu đến container", "Mã hóa GS1 cho thùng – pallet, liên kết lô nguyên liệu và hồ sơ chế biến; truy xuất một lô dưới 30 giây. Để lại thông tin để nhận bản đầy đủ."],
      en: ["Case Study · Food Export", "Farm-to-Container GS1 Traceability", "Full GS1 carton-to-pallet serialization linking raw material lots and processing logs—enabling <30s lot recalls. Leave your details to receive the full PDF case study."]
    },
    pharma: {
      vi: ["Case study · Dược phẩm GMP", "Hồ sơ lô điện tử (eBR)", "Số hóa 140 biểu mẫu với chữ ký điện tử và audit trail, rút ngắn 60% thời gian duyệt lô. Để lại thông tin để nhận bản đầy đủ."],
      en: ["Case Study · GMP Pharmaceuticals", "Electronic Batch Records (eBR)", "Digitized 140 batch & QC forms with 21 CFR Part 11 electronic signatures and audit trails—cutting batch release time by 60%. Leave your details for the full PDF."]
    }
  },

  solExploreModal: {
    vi: {
      titlePrefix: "Nhận tài liệu: ",
      body: "Để lại thông tin để nhận tài liệu giải pháp chi tiết và bảng tính ROI tham khảo."
    },
    en: {
      titlePrefix: "Get Brochure: ",
      body: "Leave your contact details to receive the detailed technical brochure and sample ROI calculator."
    }
  },

  // ==========================================================================
  // PHẦN D: BỘ MÁY CHUYỂN ĐỔI NGÔN NGỮ & NHẬN DIỆN QUỐC GIA TỰ ĐỘNG
  // Quy tắc ưu tiên:
  //   1. Tham số URL (?lang=en | ?lang=vi) hoặc test quốc gia (?country=US | ?country=VN)
  //   2. Lựa chọn thủ công của người dùng khi bấm nút VI | EN (dfs_lang_manual)
  //   3. Quốc gia xác định qua IP (nếu ngoài VN -> tự động vào Tiếng Anh 'en')
  //   4. Nhận diện tức thì 0ms qua Múi giờ hệ thống (nếu ngoài Asia/Ho_Chi_Minh -> 'en')
  // ==========================================================================
  currentLang: "vi",

  isVietnamTimezone: function () {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      if (tz === "Asia/Ho_Chi_Minh" || tz === "Asia/Saigon" || tz === "Asia/Hanoi") {
        return true;
      }
      // Một số máy tính tại VN cài Windows để múi giờ chung UTC+7 (Asia/Bangkok) kèm ngôn ngữ trình duyệt Tiếng Việt
      const navLang = (navigator.language || navigator.userLanguage || "").toLowerCase();
      if (tz === "Asia/Bangkok" && navLang.indexOf("vi") === 0) {
        return true;
      }
      return false;
    } catch (e) {
      return true;
    }
  },

  getLang: function () {
    try {
      const params = new URLSearchParams(window.location.search);

      // 1. Ưu tiên tham số ?lang=vi hoặc ?lang=en trên URL
      const urlLang = params.get("lang");
      if (urlLang === "en" || urlLang === "vi") return urlLang;

      // Cho phép kiểm thử nhanh bằng ?country=US, ?country=JP, ?country=VN...
      const urlCountry = params.get("country");
      if (urlCountry) {
        return urlCountry.toUpperCase() === "VN" ? "vi" : "en";
      }

      // 2. Nếu người dùng đã chủ động bấm nút chọn ngôn ngữ trên thanh Header
      const manual = localStorage.getItem("dfs_lang_manual");
      if (manual === "en" || manual === "vi") return manual;

      // 3. Nếu đã có kết quả nhận diện quốc gia qua IP trong phiên làm việc
      const cachedCountry = sessionStorage.getItem("dfs_geo_country");
      if (cachedCountry) {
        return cachedCountry.toUpperCase() === "VN" ? "vi" : "en";
      }

      // 4. Nhận diện tức thì (0ms) dựa trên múi giờ: ngoài VN -> vào thẳng Tiếng Anh
      return this.isVietnamTimezone() ? "vi" : "en";
    } catch (e) {}
    return this.defaultLang;
  },

  detectCountryByIP: function () {
    const self = this;
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get("lang") || params.get("country")) return;
      if (localStorage.getItem("dfs_lang_manual")) return;
      if (sessionStorage.getItem("dfs_geo_country")) return;
    } catch (e) {}

    function applyCountryCode(countryCode) {
      if (!countryCode || typeof countryCode !== "string") return;
      const code = countryCode.trim().toUpperCase();
      if (code.length !== 2) return;
      try {
        sessionStorage.setItem("dfs_geo_country", code);
      } catch (e) {}
      // Nếu người dùng chưa tự bấm đổi ngôn ngữ trong lúc chờ API trả về
      try {
        if (localStorage.getItem("dfs_lang_manual")) return;
      } catch (e) {}
      const targetLang = code === "VN" ? "vi" : "en";
      if (self.currentLang !== targetLang) {
        self.setLang(targetLang, false);
      }
    }

    // Gọi Geo-IP siêu nhẹ (api.country.is), nếu lỗi mạng tự động fallback sang geojs.io
    fetch("https://api.country.is/", { cache: "no-store" })
      .then(function (res) {
        if (!res.ok) throw new Error("GeoIP primary failed");
        return res.json();
      })
      .then(function (data) {
        if (data && data.country) applyCountryCode(data.country);
      })
      .catch(function () {
        fetch("https://get.geojs.io/v1/ip/country.json", { cache: "no-store" })
          .then(function (res) {
            if (!res.ok) throw new Error("GeoIP fallback failed");
            return res.json();
          })
          .then(function (data) {
            if (data && data.country) applyCountryCode(data.country);
          })
          .catch(function () {});
      });
  },

  setLang: function (lang, isManual) {
    if (lang !== "vi" && lang !== "en") return;
    this.currentLang = lang;
    try {
      localStorage.setItem("dfs_lang", lang);
      if (isManual) {
        localStorage.setItem("dfs_lang_manual", lang);
      }
    } catch (e) {}

    document.documentElement.setAttribute("lang", lang);

    // 1. Cập nhật toàn bộ phần tử gắn data-i18n
    const dict = this.dict;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      const entry = dict[key];
      if (!entry || entry[lang] === undefined) return;
      const val = entry[lang];
      if (val.indexOf("<") !== -1 || val.indexOf("&") !== -1) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    // 2. Cập nhật meta description nếu có
    const metaDesc = document.querySelector('meta[name="description"][data-i18n-meta]');
    if (metaDesc) {
      const mKey = metaDesc.getAttribute("data-i18n-meta");
      if (dict[mKey] && dict[mKey][lang]) {
        metaDesc.setAttribute("content", dict[mKey][lang]);
      }
    }

    // 3. Cập nhật trạng thái nút chuyển đổi ngôn ngữ VI | EN
    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      const isMatch = btn.getAttribute("data-lang-btn") === lang;
      btn.classList.toggle("is-active", isMatch);
      btn.setAttribute("aria-pressed", String(isMatch));
    });

    // 3b. Cập nhật nhãn nút chọn tông màu theo ngôn ngữ VI | EN
    document.querySelectorAll("[data-theme-btn] .nx-theme-txt").forEach(function (span) {
      const btn = span.closest("[data-theme-btn]");
      if (!btn) return;
      const t = btn.getAttribute("data-theme-btn");
      if (t === "green") {
        span.textContent = lang === "en" ? "GREEN" : "XANH LÁ";
      } else if (t === "teal") {
        span.textContent = lang === "en" ? "TEAL" : "LỤC BẢO";
      }
    });

    // 4. Phát sự kiện để các thành phần động (như Tab Giải pháp) tự làm mới
    window.dispatchEvent(new CustomEvent("dfs:langchange", { detail: { lang: lang } }));
  },

  currentTheme: "green",

  getTheme: function () {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlTheme = params.get("theme");
      if (urlTheme === "green" || urlTheme === "teal") return urlTheme;
      const saved = localStorage.getItem("dfs_theme");
      if (saved === "green" || saved === "teal") return saved;
    } catch (e) {}
    return "green";
  },

  updateFavicon: function (theme) {
    const c1 = theme === "teal" ? "#0E7485" : "#008B45";
    const c2 = theme === "teal" ? "#00A0B0" : "#2E8B57";
    const svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">' +
      '<defs><linearGradient id="dfs-bg" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0%" stop-color="' + c1 + '"/>' +
      '<stop offset="100%" stop-color="' + c2 + '"/>' +
      '</linearGradient></defs>' +
      '<rect width="64" height="64" rx="6" fill="url(#dfs-bg)"/>' +
      '<g transform="translate(7.68 23.52) scale(0.06627)" fill="#FFFFFF">' +
      '<path fill-rule="evenodd" d="M55 0.5 H224 L266 54.5 L235 201.5 L169.5 255.5 H1 Z M105 63.5 H182 L197 82.5 L177 174 L155 192.5 H78 Z"/>' +
      '<path d="M306 0.5 H494.5 L481 63.5 H355.5 L348 99.5 H445 L432.5 158.5 H335.5 L315 255.5 H252 Z"/>' +
      '<path d="M569 0.5 H732.5 L719 63.5 H582 L571 73.5 L568 87.5 L575 96.5 H672.5 L707.5 142 L693 210 L638.5 255.5 H469.5 L483 192.5 H626 L636 183.5 L639 168 L632 159.5 H534.5 L499.5 114 L514 46 Z"/>' +
      '</g></svg>';
    const dataUrl = "data:image/svg+xml," + encodeURIComponent(svg);
    document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]').forEach(function (el) {
      if (el.parentNode) el.parentNode.removeChild(el);
    });
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/svg+xml";
    link.setAttribute("sizes", "any");
    link.href = dataUrl;
    document.head.appendChild(link);
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute("content", "#262626");
    }
  },

  setTheme: function (theme) {
    const t = theme === "teal" ? "teal" : "green";
    this.currentTheme = t;
    document.documentElement.setAttribute("data-theme", t);
    try {
      localStorage.setItem("dfs_theme", t);
    } catch (e) {}
    this.updateFavicon(t);
    document.querySelectorAll("[data-theme-btn]").forEach(function (btn) {
      const isMatch = btn.getAttribute("data-theme-btn") === t;
      btn.classList.toggle("is-active", isMatch);
      btn.setAttribute("aria-pressed", String(isMatch));
    });
    window.dispatchEvent(new CustomEvent("dfs:themechange", { detail: { theme: t } }));
  },

  init: function () {
    const self = this;
    const initialTheme = this.getTheme();
    this.setTheme(initialTheme);

    const initial = this.getLang();
    this.setLang(initial, false);

    // Kiểm tra thêm bằng IP thực tế để đảm bảo khách ngoài VN luôn vào Tiếng Anh
    this.detectCountryByIP();

    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        self.setLang(btn.getAttribute("data-lang-btn"), true);
      });
    });

    document.querySelectorAll("[data-theme-btn]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        self.setTheme(btn.getAttribute("data-theme-btn"));
      });
    });
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    window.DFS_I18N.init();
  });
} else {
  window.DFS_I18N.init();
}
