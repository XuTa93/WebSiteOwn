# AGENTS.md — Quy Chuẩn Phát Triển & Thiết Kế DFS — Digital Factory Solutions

Tài liệu này là quy chuẩn bắt buộc (Binding Design & Architecture Rules) dành cho tất cả AI Coding Agents và lập trình viên khi thao tác, chỉnh sửa hoặc tạo trang mới trên repository **DFS — Digital Factory Solutions** (`d:\Project\WebSite`).

---

## 1. Nguyên Tắc Cốt Lõi: Tuân Thủ Tuyệt Đối `BrandSystem.html`

> **MỆNH LỆNH THIẾT KẾ:**
> Tệp [`BrandSystem.html`](file:///d:/Project/WebSite/BrandSystem.html) là **Nguồn Chân Lý Duy Nhất (Single Source of Truth — SSOT)** cho toàn bộ hệ thống nhận diện thương hiệu, bảng màu, phông chữ, CSS design tokens và quy cách thành phần UI (8C Speed Chevron).
> 
> [`SmartFactory.html`](file:///d:/Project/WebSite/SmartFactory.html), [`Products.html`](file:///d:/Project/WebSite/Products.html) và **tất cả các trang web thêm mới sau này** bắt buộc phải tuân thủ tuyệt đối quy chuẩn trong `BrandSystem.html`.

---

## 2. Bảng Token CSS Chuẩn (`:root` — Tông Màu Xanh Lục Bảo `Teal`)

Mọi trang HTML mới phải khai báo chính xác bộ Design Tokens với tông màu chủ đạo **Xanh lục bảo — Teal (`#026A74` → `#0699A8`)** cùng bộ trung tính nền tảng (`#262626` & `#F5F5F5`) trong `:root`:

```css
:root {
  /* 1. Layout */
  --nx-header-height: 72px;
  --nx-container-max: 1300px;

  /* 2. Typography: Inter (UI/Display) + IBM Plex Mono (Technical/Code) */
  --nx-ff-body: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --nx-ff-display: "Inter", system-ui, -apple-system, "Segoe UI", sans-serif;
  --nx-ff-mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, Consolas, monospace;

  /* 3. Brand Palette — Tông màu Xanh lục bảo (Teal) */
  --nx-brand: #026A74;               /* Xanh lục bảo chủ đạo (DFS & icon) */
  --nx-brand-alt: #01535B;           /* Biến thể xanh lục bảo đậm */
  --nx-brand-secondary: #0699A8;     /* Xanh lục bảo phụ / chuyển sắc */
  --nx-brand-secondary-alt: #058390; /* Biến thể xanh lục bảo phụ */
  --nx-brand-hover: #0699A8;
  --nx-brand-pressed: #01535B;
  --nx-brand-subtle: #E6F4F6;
  --nx-brand-subtle-active: #CCE9ED;
  --nx-accent-teal: #0699A8;
  --nx-brand-on-dark: #1CC0D1;
  --nx-on-brand: #FFFFFF;
  --nx-brand-rgb: 2, 106, 116;
  --nx-brand-gradient: linear-gradient(135deg, #026A74 0%, #0699A8 100%);

  /* 4. Industrial Neutrals — Đen mờ #262626 & Trắng ngà #F5F5F5 */
  --nx-steel-900: #262626;
  --nx-steel-800: #303030;
  --nx-steel-700: #3D3D3D;
  --nx-surface: #FFFFFF;
  --nx-surface-alt: #F5F5F5;
  --nx-border: rgba(38, 38, 38, 0.10);
  --nx-border-strong: rgba(38, 38, 38, 0.18);

  /* 5. Text Hierarchy */
  --nx-text: #262626;
  --nx-text-muted: #5C6661;
  --nx-text-inverse: #FFFFFF;
  --nx-text-brand: #026A74;

  /* 6. Semantic Shop-floor Status (Andon / MES) */
  --nx-status-run: #026A74;
  --nx-status-run-bg: #E6F4F6;
  --nx-status-run-text: #01535B;
  --nx-status-idle: #F5A524;
  --nx-status-idle-bg: #FEF3E2;
  --nx-status-idle-text: #B54708;
  --nx-status-down: #D92D20;
  --nx-status-down-bg: #FEE4E2;
  --nx-status-down-text: #B42318;
  --nx-status-info: #2E90FA;
  --nx-status-info-bg: #EFF8FF;
  --nx-status-info-text: #175CD3;

  /* 7. Spacing & Radius (8C Industrial Precision Scale) */
  --nx-radius-xs: 2px;
  --nx-radius-s: 3px;
  --nx-radius-m: 4px;
  --nx-radius-l: 6px;
  --nx-radius-tag: 2px;

  /* 8. Elevation */
  --nx-elev-1: 0 0.125rem 0.25rem rgba(38, 38, 38, 0.10), 0 0 0.125rem rgba(38, 38, 38, 0.08);
  --nx-elev-2: 0 0.25rem 1rem rgba(38, 38, 38, 0.12), 0 0 0.125rem rgba(38, 38, 38, 0.10);
}
```

---

## 3. Quy Chuẩn Nút Bấm 8C Speed Chevron (`.nx-btn`)

Không bao giờ sử dụng nút bo tròn mềm dạng viên thuốc (`border-radius: 9999px`) hay viền bo tròn AI generic. Toàn bộ nút tuân thủ ngôn ngữ vát góc cơ học 8C:

### 3.1. Nút Primary (`.nx-btn--primary`)
- **Hình khối:** Chevron 5 cạnh mũi nhọn hướng phải:
  `clip-path: polygon(0 0, calc(100% - 13px) 0, 100% 50%, calc(100% - 13px) 100%, 0 100%);`
- **Màu sắc:** Nền `#18C96E`, chữ đen thép `#101714` (`font-weight: 700`).
- **Hover:** Nền `#26E080`, vươn mũi nhọn nhẹ sang phải (`padding-right: 2.2rem; margin-right: -0.25rem;`).

### 3.2. Nút Secondary trên Nền Sáng (`.nx-btn--secondary`) — Precision Hairline 1px
- **Hình khối:** Chevron 6 cạnh có rãnh chữ V bên trái khớp nối nút Primary:
  `clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%, 9px 50%);`
- **Cấu trúc viền siêu mảnh 1px toàn bộ chu vi (Precision Hairline 1px):** Lớp ngoài `rgba(16, 23, 20, 0.18)`, lớp trong `::before` nền trắng `#FFFFFF` co lùi chính xác `1px` (`top: 1px; bottom: 1px; left: 1.2px; right: 1.2px;`) giúp viền hiển thị sắc nét, đồng đều trên cả 6 cạnh (kể cả rãnh chữ V bên trái và mũi tên nhọn bên phải).
- **Hover:** Lớp ngoài chuyển xanh ngọc bích `var(--nx-brand)`, lớp trong `var(--nx-brand-subtle)`, chữ xanh `var(--nx-text-brand)`.

### 3.3. Nút Secondary trên Nền Tối (`.nx-btn--ghost-light`) — Precision Hairline 1px
- **Hình khối:** Chevron 6 cạnh có rãnh chữ V bên trái:
  `clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%, 9px 50%);`
- **Cấu trúc viền siêu mảnh 1px toàn bộ chu vi:** Lớp ngoài trắng mờ `rgba(255, 255, 255, 0.45)`, lớp trong `::before` nền thép đậm `#16231D` co lùi `1px`. Đảm bảo viền sắc nét, không bị mất nét ở rãnh chữ V bên trái và đầu mũi tên bên phải.
- **Hover:** Lớp ngoài chuyển sang xanh ngọc bích `var(--nx-brand)`, lớp trong `#1B2F25`, chữ `var(--nx-brand)`.

### 3.4. Nút Cỡ Nhỏ (`.nx-btn--sm`)
- Dùng cho Topbar/Header CTA: `padding: 0.45rem 1.35rem 0.45rem 0.85rem; font-size: 0.8rem;` (`clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%);`).

---

## 4. Quy Chuẩn Thẻ (Cards), Khung & Gợn Viền Quang Học (Zero-Thickness Optical Contour)

> **QUY CHUẨN THIẾT KẾ MỚI (0px Stroke Weight):**
> Nhằm loại bỏ cảm giác đóng hộp nặng nề của viền đen 3px và viền xám 1px, toàn bộ thẻ sử dụng **Gợn Viền Quang Học (Optical Contour)**: không dùng border stroke, phân định bề mặt bằng chênh lệch độ sáng nền (Surface Contrast) kết hợp đổ bóng vi mô (Micro-ambient Elevation).

1. **Thẻ & Khung trên nền sáng (`.nx-card`, `.nx-promo-card`, `.nx-pain`, `.nx-step`, `.nx-trace-demo`, `.nx-number`, `.ac-spot-card`, `.ac-single-card` — Phương Án 1B: Inset Specular Highlight):**
   - Viền bao: `border: none;` (0px stroke thickness).
   - Gợn viền quang học bắt sáng (Apple Specular Highlight): `box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 0 0 1px rgba(16, 23, 20, 0.05), 0 3px 10px rgba(16, 23, 20, 0.05);`
   - Hover: `box-shadow: inset 0 1px 0 rgba(255, 255, 255, 1), 0 0 0 1px rgba(24, 201, 110, 0.28), 0 6px 18px rgba(16, 23, 20, 0.08); transform: translateY(-3px);`
   - Bo góc: `border-radius: var(--nx-radius-m);`
   - Dải nhấn ngọc bích đỉnh/chân thẻ: Vạch xanh ngọc bích siêu mảnh `2px` (`var(--nx-brand)`) vát xéo 8C (`clip-path: polygon(0 0, 100% 0, calc(100% - 4px) 100%, 0 100%);`), mở rộng toàn dải khi hover.

1.1. **Quy Chuẩn Độ Dày Viền Toàn Diện (Universal Thin Border Scale):**
   - **Hairline 1px (Đường viền bao & ô tròn):** Toàn bộ đường viền tròn (.nx-axis-spot-thumb), ô số (.nx-flow li::before), viền nút chevrons (.nx-btn--secondary, .nx-btn--ghost-light), ô nhập liệu (.nx-input, input, select, textarea) và nút menu di động (.nx-menu-toggle) bắt buộc dùng viền siêu mảnh chuẩn xác **1px** (`1px solid ...`).
   - **Chỉ số điểm nhấn 2px (Accents & Highlights):** Các vạch chỉ thị trạng thái active (tab underline, mobile drawer border, dải vát xéo đỉnh thẻ, vạch nhấn callout/toast bên trái) chuẩn hóa đồng nhất độ dày **2px** (`2px solid var(--nx-brand)` hoặc `height: 2px;`).
   - **Tuyệt đối không dùng stroke thô cứng 2.5px, 3px, 4px trên bất kỳ thành phần nào.**
   - Viền bao: `border: none;` (0px stroke thickness).
   - Gợn viền quang học bắt sáng (Apple Specular Highlight): `box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 0 0 1px rgba(16, 23, 20, 0.05), 0 3px 10px rgba(16, 23, 20, 0.05);`
   - Hover: `box-shadow: inset 0 1px 0 rgba(255, 255, 255, 1), 0 0 0 1px rgba(24, 201, 110, 0.28), 0 6px 18px rgba(16, 23, 20, 0.08); transform: translateY(-3px);`
   - Bo góc: `border-radius: var(--nx-radius-m);`
   - Dải nhấn ngọc bích đỉnh thẻ: Vạch xanh ngọc bích siêu mảnh `2px` (`var(--nx-brand)`) vát xéo 8C (`clip-path: polygon(0 0, 100% 0, calc(100% - 4px) 100%, 0 100%);`), mở rộng toàn dải khi hover.
   - **Đồng bộ hóa thẻ có số thứ tự (`.nx-pain`, `.nx-step`):** Cả 2 nhóm thẻ đều đồng bộ số thứ tự lớn `1.6rem` in đậm màu ngọc bích `var(--nx-brand)` (`IBM Plex Mono`), vạch đỉnh chuẩn `64px`, tiêu đề `1.05rem Bold`, và chân thẻ dạng nhãn quang học không stroke viền đứng thô.
2. **Thẻ Tab Giải pháp (`.nx-tab`):**
   - Tab phẳng `border: none;` bắt sáng `box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.85), 0 0 0 1px rgba(16, 23, 20, 0.04), 0 2px 6px rgba(16, 23, 20, 0.03);`.
   - Vạch xanh ngọc bích `2.5px` trên đỉnh trượt mở khi hover hoặc active.
3. **Thẻ & Khung trên nền tối (`.nx-cta`, `.nx-spec-card`, `.nx-tier`):**
   - Viền bao: `border: none;`
   - Gợn viền quang học: `box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.14), inset 0 0 0 1px rgba(255, 255, 255, 0.07);` (hoặc `inset 0 1px 0 rgba(255,255,255,0.20), inset 0 0 0 1px rgba(255,255,255,0.10)` cho CTA banner).
   - Tầng Core ISA-95 (`.nx-tier--core`): `box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.30), inset 0 0 0 1.5px var(--nx-brand), 0 8px 24px rgba(24, 201, 110, 0.14);`
4. **Hiệu ứng Viền Gạch Xanh Chạy Từ Trái Sang Phải:**
   - Mọi mục menu, link, tab, filter, card có vạch nhấn đều dùng chuyển động quét từ trái sang phải: `transform: scaleX(0); transform-origin: left center; transition: transform 0.2s ease;` chuyển sang `scaleX(1)` khi `:hover` / `:focus-visible`.

---

## 5. Quy Chuẩn Mobile Parity (BẮT BUỘC)

> **QUY TẮC BẤT DI BẤT DỊCH:**
> **Nội dung hiển thị ở dạng mobile phải giống hoặc ít hơn khi xem trên web, kể cả thanh menu (`Mobile <= Desktop`).**
> Tuyệt đối không được xuất hiện nút bấm, mục menu, thẻ nội dung hay tính năng trên mobile mà desktop không có.

1. **Header & Menu Di Động:**
   - Nút mở menu di động hiển thị `< 900px` (hoặc `< 1024px`), đổi icon Hamburger ⇄ Close sắc cạnh `2.2px`.
   - Danh sách link trong drawer di động (`.nx-mobile-nav`) phải phản ánh chính xác các mục điều hướng cấp 1 trên desktop, có cùng thứ tự và đích đến.
2. **Tránh Tràn Ngang (No Horizontal Scroll):**
   - Đảm bảo `overflow-x: hidden;` trên `body` và không có phần tử nào phá vỡ viewport từ `360px` đến `430px`.
   - Các bảng dữ liệu phức tạp (`table`) phải được bọc trong container `overflow-x: auto;`.

---

## 6. Quy Chuẩn Đa Ngôn Ngữ Song Ngữ (`VI | EN` — `assets/js/i18n.js`)

1. **Từ Điển Song Ngữ Trung Tâm (`assets/js/i18n.js`):**
   - Toàn bộ nội dung văn bản trên các trang chung (`SmartFactory.html`, Header, Mega Menu, Footer, Modal) được quản lý tập trung tại [`assets/js/i18n.js`](file:///d:/Project/WebSite/assets/js/i18n.js) với cặp khóa `{ vi: "...", en: "..." }` đặt liền kề nhau.
   - Trên HTML sử dụng thuộc tính `data-i18n="key"` (và `data-i18n-meta="key"` cho thẻ `<meta name="description">`).
2. **Nút Chuyển Đổi Ngôn Ngữ (`.nx-lang-switch`):**
   - Đặt trong `.nx-header-utils`, sử dụng viền mảnh chuẩn xác `1px solid var(--nx-border-strong)`, phông chữ `var(--nx-ff-mono)`, nút đang chọn (`.nx-lang-btn.is-active`) nền `var(--nx-steel-900)` chữ `var(--nx-brand)`.
   - Lưu trạng thái vào `localStorage` (`dfs_lang`) và hỗ trợ tham số URL `?lang=en` / `?lang=vi`.

---

## 7. Quy Trình Kiểm Thử & Nghiệm Thu Cho Agents

Trước khi hoàn thành bất kỳ lượt chỉnh sửa giao diện nào:
1. **Kiểm tra CSS/HTML tính hợp lệ:** Không để lại inline style thừa mứa mâu thuẫn với `--nx-*` tokens.
2. **Chạy kiểm tra trực quan bằng Chrome:** Chụp màn hình và đọc lại các ảnh ở cả 2 chế độ Desktop (`1440×900`) và Mobile (`390×844` / `360×780`).
3. **Kiểm tra Console:** Số lỗi console (`Runtime.consoleAPICalled` / `Runtime.exceptionThrown`) phải bằng **0**.
4. **Bảo toàn khả năng truy cập (A11y):** Luôn giữ nguyên hỗ trợ `@media (prefers-reduced-motion: reduce)`.
