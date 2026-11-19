# Cẩm nang Phong cách Thiết kế & Bộ nhận diện Thương hiệu: DFS — Digital Factory Solutions

> **Tài liệu quy chuẩn thiết kế (Brand Identity & Design System Guide · Phiên bản 8C Speed Chevron)** dành cho website [SmartFactory.html](file:///d:/Project/WebSite/SmartFactory.html), [Products.html](file:///d:/Project/WebSite/Products.html), giao diện phần mềm MES/Andon và toàn bộ ấn phẩm truyền thông của **DFS — Digital Factory Solutions**.

---

## 1. Tinh thần & Định vị Thương hiệu (Brand Essence)

### 1.1. Tên thương hiệu & Tagline
- **Tên thương hiệu:** **DFS** *(Descriptor phụ: `Digital Factory Solutions`)*
- **Ý nghĩa tên gọi:** **DFS — Digital Factory Solutions** đại diện cho năng lực công nghệ và giải pháp nhà máy số toàn diện trong kỷ nguyên công nghiệp 4.0 — lớp nền tảng kết nối liền mạch giữa **Con người – Máy móc (OT) – Hệ thống quản trị (IT/ERP)** trong nhà máy hiện đại.
- **Khẩu hiệu (Tagline):** *“Số hóa nhà máy, minh bạch từng công đoạn.”*

### 1.2. Tính cách thương hiệu (Brand Personality)
| Thuộc tính | Biểu hiện trong thiết kế & ngôn ngữ | Không phải là... |
| :--- | :--- | :--- |
| **Chính xác & Đáng tin cậy (Precision & Reliability)** | Bố cục lưới chặt chẽ, số liệu dùng font kỹ thuật số sắc nét, dẫn chiếu chuẩn quốc tế (`ISA-95`, `GS1`, `TCVN 12850`). | Mơ hồ, dùng khẩu hiệu sáo rỗng không có con số đo lường. |
| **Hiện đại & Công nghiệp (Modern Industrial)** | Kết hợp sắc xanh **Emerald Jade** (tín hiệu máy chạy tốt / sản xuất xanh) với nền **Industrial Steel** (thép công nghiệp). | Giao diện nặng nề, cũ kỹ kiểu phần mềm thập niên 2000 hoặc quá sặc sỡ kiểu hàng tiêu dùng. |
| **Thực chiến tại xưởng (Shop-floor Ready)** | Độ tương phản cao, chữ rõ ràng khi nhìn từ xa trên màn hình Andon hoặc dưới ánh sáng đèn xưởng trên tablet. | Chữ mảnh, màu nhạt khó đọc trong môi trường công nghiệp. |

---

## 2. Hệ thống Logo & Biểu tượng (Logo System)

### 2.1. Cấu tạo Logo (2 Biến thể Đồng bộ 2 Tông màu `green` & `teal`)
Hệ thống nhận diện **DFS** sử dụng **chữ hình học nghiêng `12°` vát cạnh cơ khí (Geometric Chamfered Wordmark)** làm tâm điểm, triển khai qua 2 biến thể chính:
1. **Wordmark ngang (`DFS` + `Digital Factory Solutions`):**
   - Sử dụng làm logo chính trên Header và các ấn phẩm trình bày ngang (`viewBox="0 0 734 256"`).
   - Phủ dải chuyển sắc từ đậm (trái) sang sáng (phải) tự động thích ứng theo tông màu đang chọn:
     - **Phiên bản Xanh lá (`green`):** `#128243` → `#008B45` → `#38B870` (trên nền sáng) hoặc `#2E8B57` → `#38B870` (trên nền tối).
     - **Phiên bản Xanh lục bảo (`teal`):** `#006C7A` → `#0E7485` → `#00B8CA` (trên nền sáng) hoặc `#00A0B0` → `#00B8CA` (trên nền tối).
   - Dòng định danh phụ `DIGITAL FACTORY SOLUTIONS` đặt bên dưới bằng phông **IBM Plex Mono SemiBold (`600`)**, in hoa, màu `#5C6661` trên nền sáng hoặc trắng mờ trên nền tối.
2. **App Icon / Favicon vuông bo góc:**
   - Khung vuông bo góc (~`9.5%` bán kính góc, `rx="6"` trên khung `64×64`), nền chuyển sắc thương hiệu (`#008B45 → #2E8B57` ở tông Xanh lá hoặc `#0E7485 → #00A0B0` ở tông Xanh lục bảo), đặt biểu tượng chữ **DFS** màu trắng `#FFFFFF` căn giữa (`76%` bề ngang).
   - Biến thể đơn sắc nền tối dùng nền `#262626` kết hợp chữ **DFS** sáng (`#38B870` / `#00B8CA`).
   - Trên trình duyệt, `assets/js/i18n.js` và `BrandSystem.html` tự động cập nhật SVG Favicon động theo tông màu người dùng chọn.

### 2.2. Quy tắc khoảng trống an toàn & Kích thước tối thiểu
- **Khoảng trống an toàn (Clear Space):** Tối thiểu bằng `0.5×` chiều cao của chữ `DFS` tính từ 4 cạnh.
- **Kích thước tối thiểu:** Chiều cao Wordmark không nhỏ hơn `18px` trên màn hình di động (`24px` trên Desktop); Favicon tối thiểu `16×16px` / `32×32px`.

---

## 3. Bảng màu Thương hiệu & Giao diện (Color System)

Hệ màu được thiết kế dựa trên **ngôn ngữ tín hiệu công nghiệp (Andon/SCADA)** kết hợp thẩm mỹ công nghệ B2B hiện đại, đồng bộ hoàn toàn qua biến CSS (`--nx-*`).

### 3.1. Màu thương hiệu chủ đạo — Emerald Jade (Primary Brand)
Màu xanh ngọc lục bảo lấy cảm hứng từ đèn tín hiệu **RUN (máy hoạt động tối ưu)** trên dây chuyền sản xuất và xu hướng **sản xuất xanh bền vững**.

| Tên Token CSS | Mã HEX | Vai trò sử dụng |
| :--- | :---: | :--- |
| `--nx-brand` | `#18C96E` | Màu nhận diện chính, nền nút Primary CTA, thanh nhấn đầu thẻ, viền trạng thái Active, nền Footer. |
| `--nx-brand-hover` | `#0A8754` | Trạng thái `:hover` của nút Primary, màu chữ điểm nhấn (`--nx-text-brand`) đảm bảo tương phản chuẩn WCAG AA trên nền trắng. |
| `--nx-brand-pressed` | `#06683F` | Trạng thái `:active` / nhấn giữ của nút bấm. |
| `--nx-brand-subtle` | `#E6F9F0` | Nền nhẹ cho nhãn (Badge/Tag), hộp ghi chú kỹ thuật, vòng tròn icon khi hover. |
| `--nx-accent-teal` | `#00A88F` | Màu phụ trợ cho đồ thị hoặc dải chuyển sắc (gradient). |

### 3.2. Màu trung tính Công nghiệp — Industrial Steel & Surfaces
| Tên Token CSS | Mã HEX / RGBA | Vai trò sử dụng |
| :--- | :---: | :--- |
| `--nx-steel-900` | `#101714` | Nền tối sâu cho Topbar, Hero overlay, khu vực Kiến trúc ISA-95 (`--nx-section--dark`), chữ trên nền nút `#18C96E`. |
| `--nx-steel-800` | `#1B2420` | Nền thẻ lớp kiến trúc (ISA-95 Layer Card) trên nền tối. |
| `--nx-steel-700` | `#2A3530` | Ô định danh cấp độ (`Cấp 0–4`) trong sơ đồ kiến trúc. |
| `--nx-surface` | `#FFFFFF` | Nền chính của trang và bề mặt thẻ (Card) nổi. |
| `--nx-surface-alt` | `#F4F6F5` | Nền xen kẽ giữa các phân khu (`--nx-section--alt`), tạo nhịp điệu thị giác rõ ràng. |
| `--nx-border` | `rgba(16, 23, 20, 0.10)` | Đường viền mảnh phân tách thẻ, bảng và thanh điều hướng. |

### 3.3. Màu chữ (Typography Colors)
- `--nx-text` (`#141A17`): Chữ chính trên nền sáng (độ tương phản `> 16:1`).
- `--nx-text-muted` (`#5C6661`): Chữ mô tả phụ, chú thích thời gian, nhãn phụ.
- `--nx-text-inverse` (`#FFFFFF`): Chữ trên nền tối (`--nx-steel-900`).
- `--nx-text-brand` (`#0A8754`): Chữ nhấn thương hiệu, liên kết văn bản (`nx-link`).

### 3.4. Màu ngữ nghĩa trạng thái xưởng (Shop-floor Status Colors)
Dùng thống nhất trên cả website lẫn giao diện phần mềm MES/Andon:
- **Đang chạy / Đạt chuẩn (`--nx-status-run`):** `#18C96E` (Xanh lá)
- **Chờ / Cận giới hạn (`--nx-status-idle`):** `#F5A524` (Vàng hổ phách — nền badge `#FEF3E2`, chữ `#B54708`)
- **Dừng sự cố / Lỗi (`--nx-status-down`):** `#D92D20` (Đỏ cảnh báo)
- **Thông tin / Kế hoạch (`--nx-status-info`):** `#2E90FA` (Xanh dương)

---

## 4. Hệ thống Chữ viết (Typography)

Hệ thống chuẩn hóa trên **2 họ phông chữ chuẩn kỹ thuật công nghiệp quốc tế** từ Google Fonts (**Inter** + **IBM Plex Mono**), mang phong cách hiện đại, chính xác của các tập đoàn công nghệ công nghiệp (IBM / Linear) và hỗ trợ tiếng Việt có dấu hoàn hảo:

| Vai trò | Họ Font (`CSS Variable`) | Trọng lượng (Weights) | Ứng dụng cụ thể |
| :--- | :--- | :---: | :--- |
| **1. Tiêu đề, Giao diện & Số liệu KPI** | **`Inter`** (`--nx-ff-body` / `--nx-ff-display`) | `400`, `500`, `600`, `700`, `800` | Bật tính năng OpenType `font-feature-settings: "cv02", "cv03", "cv04", "cv11"` để chữ sắc nét, dễ phân biệt ký tự; dùng thống nhất cho Wordmark, Tiêu đề H1–H4 (`letter-spacing: -0.02em`), nội dung bài viết, nút bấm và các con số KPI lớn (`+18%`, `-90%`, `50+`, `< 30s`). |
| **2. Mã định danh & Kỹ thuật công nghiệp** | **`IBM Plex Mono`** (`--nx-ff-mono`) | `400`, `500`, `600`, `700` | Phông chữ đơn cách (Monospace) mang bản sắc kỹ thuật công nghiệp; dùng cho dòng descriptor `SMART MANUFACTURING` dưới Logo, mã lô (`LOT-2611-A07`), lệnh sản xuất (`WO-26-1182`), mốc thời gian (`05/11 09:02`), cấp độ `ISA-95` và huy hiệu tiêu chuẩn (`TCVN 12850:2019`). |

### Thang kích thước chữ (Type Scale)
- **Hero H1:** `clamp(1.75rem, 2.75vw, 2.45rem)` (`28px → 39.2px`), font `Inter`, `font-weight: 700`, `line-height: 1.2`, `letter-spacing: -0.015em`.
- **Section H2:** `clamp(1.5rem, 2.4vw, 1.95rem)` (`24px → 31.2px`), font `Inter`, `font-weight: 700`, `letter-spacing: -0.02em`, đi kèm thanh vạch nhấn xanh cắt xéo `64×4px` (`#18C96E`).
- **Kicker / Eyebrow:** `0.75rem` (`12px`), in hoa (`uppercase`), `font-weight: 600–700`, `letter-spacing: 0.06em–0.08em`.
- **KPI Metric Number:** `2.75rem` (`44px`), font `Inter`, `font-weight: 700`, `letter-spacing: -0.02em`.
- **Body Lead (Hero/Section):** `0.95rem – 0.975rem` (`15.2px – 15.6px`), `line-height: 1.6`.
- **Body chuẩn:** `1rem` (`16px`), `line-height: 1.625`.
- **Technical / Lot Code & Metadata:** `0.75rem – 0.875rem` (`12px – 14px`), font `IBM Plex Mono`.

---

## 5. Bố cục, Khoảng cách & Thành phần Giao diện (Layout & UI Components)

### 5.1. Lưới bố cục & Khoảng cách (Grid & Spacing)
- **Container tối đa (`--nx-container-max`):** `1300px` (`1280px` trên BrandSystem), căn giữa, padding ngang đáp ứng theo màn hình:
  - Mobile (`< 768px`): `1.5rem` (`24px`)
  - Desktop (`≥ 1024px`): `3rem` (`48px`)
- **Chiều cao Header cố định (`--nx-header-height`):** `72px` (`sticky`, `z-index: 200`), thanh gạch chân danh mục đang chọn kiểu Axis màu `#18C96E` (`3.5px`).
- **Nhịp khoảng cách dọc giữa các Section:** `4rem` (`64px`) trên Mobile và `5.5rem` (`88px`) trên Desktop.

### 5.2. Bo góc Công nghiệp & Đổ bóng (8C Precision Radius & Elevation)
Loại bỏ hoàn toàn nút bo tròn viên thuốc (`pill radius`) và các bo góc mềm mại kiểu mẫu AI phổ thông; sử dụng thang bo góc kỹ thuật nhỏ sắc nét (`2px – 6px`):
- **Bo góc (`Radius`):**
  - `--nx-radius-xs` (`2px`): Huy hiệu trạng thái Andon, chấm LED vuông (`status-dot`), bảng thông số nhỏ.
  - `--nx-radius-tag` (`2px`): Bộ lọc ngành (`.nx-filter`), nhãn thời gian lộ trình (`.nx-step-time`), huy hiệu tiêu chuẩn (`.nx-std`).
  - `--nx-radius-s` (`3px`): Ô nhập liệu form, dòng kết quả truy xuất, nút đóng icon.
  - `--nx-radius-m` (`4px`): Thẻ Promo, thẻ Pain Point, thẻ Tab giải pháp, Card Dự án, Card Sản phẩm (`Products.html`), bước lộ trình, khối KPI.
  - `--nx-radius-l` (`6px`): Khung chi tiết giải pháp, khung Demo truy xuất, khối CTA lớn, Modal.
- **Độ nổi (`Elevation`):**
  - `--nx-elev-1`: `0 2px 4px rgba(16, 23, 20, 0.10), 0 0 2px rgba(16, 23, 20, 0.08)` — dùng cho Header, hộp KPI.
  - `--nx-elev-2`: `0 4px 16px rgba(16, 23, 20, 0.12), 0 0 2px rgba(16, 23, 20, 0.10)` — dùng cho thẻ Promo nổi, thẻ Case Study, Mega Menu và Modal.

### 5.3. Ngôn ngữ Hình khối nhận diện riêng: **8C Speed Chevron (Mũi tên Tốc độ Automation)**
1. **Nút bấm Mũi nhọn Dẫn hướng (`.nx-btn` — Speed Chevron `>`):**
   - Toàn bộ nút CTA chính/phụ không dùng `border-radius` hay viền mảnh `1px`; cắt `clip-path: polygon(0 0, calc(100% - 13px) 0, 100% 50%, calc(100% - 13px) 100%, 0 100%)` tạo mũi tên hướng tiến về phía trước gợi luồng băng chuyền tự động.
   - **Primary CTA (`.nx-btn--primary`):** Nền `#18C96E`, chữ `#101714` (`font-weight: 700`), khi hover sáng lên `#26E080` và vươn nhẹ mũi nhọn sang phải (`padding-right: 2.2rem; margin-right: -0.25rem;`).
   - **Secondary trên nền sáng (`.nx-btn--secondary` — Precision Hairline 1px):** Hình khối chevron 6 cạnh có rãnh chữ V bên trái (`clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%, 9px 50%)`). Cấu trúc viền siêu mảnh 1px toàn bộ chu vi: lớp ngoài `rgba(16, 23, 20, 0.18)`, lớp trong `::before` nền trắng `#FFFFFF` co lùi chính xác 1px. Đảm bảo toàn bộ 6 cạnh hiển thị sắc nét, đồng đều (kể cả rãnh chữ V bên trái và mũi tên nhọn bên phải). Khi hover: lớp ngoài chuyển `var(--nx-brand)`, lớp trong `var(--nx-brand-subtle)`, chữ `var(--nx-text-brand)`.
   - **Secondary trên nền tối (`.nx-btn--ghost-light` — Precision Hairline 1px):** Hình khối chevron 6 cạnh có rãnh chữ V bên trái. Cấu trúc viền siêu mảnh 1px toàn bộ chu vi: lớp ngoài trắng mờ `rgba(255, 255, 255, 0.45)`, lớp trong `::before` nền thép đậm `#16231D` co lùi chính xác 1px. Đảm bảo toàn bộ 6 cạnh hiển thị sắc nét, khắc phục hiện tượng mất nét viền ở rãnh chữ V bên trái và đầu nhọn bên phải. Khi hover: lớp ngoài chuyển `var(--nx-brand)`, lớp trong `#1B2F25`, chữ `var(--nx-brand)`.
   - **Nút cỡ nhỏ (`.nx-btn--sm`):** Dùng cho Topbar/Header CTA: `padding: 0.45rem 1.35rem 0.45rem 0.85rem; font-size: 0.8rem;` (`clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%);`).
2. **Nhãn Hero & Ribbon `FLOW` / `NEW` Cắt xéo:**
   - Thay thế nhãn viền phát sáng + chấm tròn nhấp nháy bằng khối nhãn mũi nhọn `FLOW` / `NEW` / `SYS v2.1` nền `#18C96E`, chữ đen thép `#101714` in hoa `IBM Plex Mono`.
3. **Quy chuẩn Mép Bắt Sáng Quang Học (Phương Án 1B: Inset Specular Highlight — Apple Pro Style):**
   - Các thẻ nội dung (Promo Card, Pain Point, Solution Tab, Solution Metric, Roadmap, Spotlight & New Products Card) loại bỏ hoàn toàn viền đóng hộp thô cứng (`border: none;`), mép đỉnh bắt sáng kim loại `box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 0 0 1px rgba(16, 23, 20, 0.05), 0 3px 10px rgba(16, 23, 20, 0.05);`.
   - Đỉnh thẻ sử dụng vạch xanh ngọc bích siêu mảnh `2px` (`#18C96E`) vát xéo 8C (`clip-path: polygon(0 0, 100% 0, calc(100% - 4px) 100%, 0 100%);`), mở rộng toàn dải khi hover.
   - Nút Secondary (`.nx-btn--secondary`): Sử dụng cấu trúc Precision Hairline 1px với lớp lót `::before` co lùi 1px, hiển thị viền mảnh 1px tinh tế trên toàn bộ 6 cạnh chevron mà không dùng viền chì 1.5px thô cứng.
4. **Sơ đồ tầng kiến trúc ISA-95 & Bảng thông số mở (`#platform`):**
   - Tháp 3 tầng thu gọn (`Cấp 4 ERP ⇄ Cấp 3 DFS MES/MOM ⇄ Cấp 0–2 Edge/PLC`) với mũi tên luồng dữ liệu `↑↓` màu `#18C96E`; tầng lõi **Cấp 3** nổi bật bằng viền `#18C96E`, hào quang xanh (`0 10px 30px rgba(24, 201, 110, 0.14)`) và nhãn mũi nhọn `CORE` cắt xéo 8C.
   - Bên cạnh là **Bảng Chuẩn Kết nối & Triển khai (`.nx-spec-card`)** vạch kép cắt xéo 8C trên đầu thẻ, phân chia 4 hàng gọn gàng (`Giao thức Máy (OT)`, `Phần mềm ERP (IT)`, `Thiết bị Hiện trường`, `Mô hình Hạ tầng`) thay cho nhóm thẻ chip rời rạc.
5. **Chuyển động Viền Gạch Xanh Trái-Sang-Phải (Left-to-Right Green Sweep Motion):**
   - Thống nhất hiệu ứng chạy thanh gạch xanh từ trái sang phải (`transform: scaleX(0) → scaleX(1)` với `transform-origin: left center` hoặc mở rộng dải vạch 8C `width → 100%`) khi rê chuột (`:hover`) hoặc focus (`:focus-visible`) trên toàn bộ điểm lựa chọn:
     - **Điều hướng & Mega Menu:** `.nx-nav-btn`, `.nx-topbar a`, `.nx-axis-tab`, `.nx-axis-cats a`, `.nx-axis-spot`, Header `.nx-nav a` (`BrandSystem.html`).
     - **Lựa chọn & Bộ lọc:** 6 tab mô-đun giải pháp (`.nx-tab`), bộ lọc ngành (`.nx-filter`), liên kết hành động (`.nx-link`, `.ac-link-cta`).
     - **Thẻ nội dung & Bảng màu:** Thẻ Promo (`.nx-promo-card`), Thách thức (`.nx-pain`), Dự án (`.nx-card`), Lộ trình (`.nx-step`), Chỉ số (`.nx-number`), thẻ Danh mục (`.ac-deck-card`), Spotlight (`.ac-spot-card`), Sản phẩm mới (`.ac-single-card`) và ô màu `.swatch` (`BrandSystem.html`).
   - Hỗ trợ giảm chuyển động với `@media (prefers-reduced-motion: reduce)` trên cả 3 trang.

---

## 6. Định hướng Hình ảnh, Icon & Giọng điệu (Imagery, Iconography & Tone of Voice)

### 6.1. Phong cách Hình ảnh (Photography Direction)
- **Bối cảnh thực tế:** Sử dụng hình ảnh xưởng sản xuất hiện đại, sạch sẽ, có sự xuất hiện đồng thời của **thiết bị tự động hóa (robot, băng tải, máy quét mã vạch)** và **giao diện số (màn hình dashboard MES, tablet công nghiệp trên tay kỹ sư)**.
- **Xử lý màu sắc ảnh:** Ảnh có độ tương phản rõ, tông màu trung tính hơi lạnh của kim loại/ánh sáng xưởng để làm nổi bật các chi tiết màu xanh lá `#18C96E` của giao diện. Trên Hero Section, sử dụng lớp phủ gradient tối từ trái sang phải (`94% → 78% → 25%`) để chữ trắng luôn đạt độ tương phản cao nhất.
- **Tỷ lệ khung ảnh chuẩn trên thẻ (Card Media):** `4:3` (`aspect-ratio: 4 / 3`), hiệu ứng phóng nhẹ `scale(1.04)` trong `0.4s` khi di chuột.

### 6.2. Hệ thống Biểu tượng (Iconography)
- Sử dụng **SVG Line Icons** đồng nhất: nét vẽ `stroke-width: 2px – 2.4px`, đầu nét kỹ thuật rõ ràng, kích thước `24×24px` hoặc `26×26px` đặt trong khối ô thiết bị công nghiệp bo `4px` (`52px – 64px`) hoặc giữ khung tròn cho ảnh thumbnail spotlight trong Mega Menu chuẩn Axis.

### 6.3. Giọng văn thương hiệu (Tone of Voice)
- **Ngắn gọn, định lượng cụ thể:** Luôn ưu tiên con số thực tế thay vì tính từ chung chung (Ví dụ: viết *“Truy xuất một lô hàng dưới 30 giây”* thay vì *“Truy xuất cực kỳ nhanh chóng”*; viết *“Giảm 90% thời gian lập báo cáo cuối ca”* thay vì *“Tiết kiệm nhiều thời gian”*).
- **Chuẩn thuật ngữ chuyên ngành sản xuất:** Sử dụng tự nhiên, chính xác các thuật ngữ quen thuộc với Giám đốc Nhà máy và QA/QC: `MES`, `MOM`, `OEE`, `WIP`, `IQC / IPQC / OQC`, `SPC (Cp/Cpk)`, `eBR / eDHR`, `eWI`, `Andon`, `FIFO / FEFO`, `GS1 / GTIN / SSCC`, `ISA-95`.
- **Hỗ trợ tiếp cận & Trải nghiệm (Accessibility):** Tuân thủ điều hướng bàn phím (`:focus-visible` với viền `3px solid #18C96E`), hỗ trợ `prefers-reduced-motion: reduce` cho người dùng nhạy cảm với chuyển động.
