# Portfolio freelance — Ngô Nguyễn Chí Công

Trang giới thiệu sản phẩm để nhận dự án freelance. Khác với portfolio xin việc (v1), trang này nói về **sản phẩm đã làm và bài toán của khách hàng**, ít nói về công nghệ.

Các phần trên trang: Đầu trang · Sản phẩm (lọc theo loại; bấm vào sản phẩm có trang công khai thì mở trang thật ở thẻ mới, sản phẩm chưa có trang công khai thì mở hộp thoại chi tiết) · Dịch vụ · Quy trình · Về tôi · Hỏi đáp · Liên hệ (Zalo, điện thoại, email, LinkedIn).

Làm bằng Next.js 15, Tailwind CSS 4 và Motion, font Plus Jakarta Sans (đủ dấu tiếng Việt).

## Chạy trên máy

```bash
npm install
npm run dev
```

Mở http://localhost:3000.

## Ngôn ngữ và giao diện sáng/tối

- Trang có 2 ngôn ngữ: tiếng Việt ở `/`, tiếng Anh ở `/en`. Nút **VI | EN** trên thanh menu để chuyển.
  Bản tiếng Việt có nút liên hệ chính là Zalo, bản tiếng Anh là email (khách nước ngoài ít dùng Zalo).
- Nút mặt trăng/mặt trời trên thanh menu đổi giao diện sáng/tối. Lần đầu vào trang sẽ theo cài đặt của máy người xem,
  sau đó nhớ lựa chọn trên trình duyệt. Trên Chrome, Edge, Safari bản mới, giao diện mới loang ra thành vòng tròn từ chỗ bấm.
- Màu của hai giao diện: `src/app/globals.css` (khối `:root` là sáng, `:root[data-theme='dark']` là tối).

## Con trỏ chuột

Trên máy tính có chuột, trang dùng con trỏ riêng (`src/components/Cursor.tsx`): một chấm đi theo chuột và một vòng tròn bám theo có độ trễ,
tự đảo màu theo nền. Rê lên link/nút thì vòng phóng to; rê lên thẻ sản phẩm hoặc tên miền ở dải "Đang chạy tại" thì hiện bong bóng chữ.
Muốn thêm bong bóng cho phần tử khác: gắn `data-cursor="view"` và `data-cursor-label="Chữ muốn hiện"`.
Điện thoại, máy bật "Giảm chuyển động" và lúc đang mở hộp thoại chi tiết sẽ dùng con trỏ bình thường.

## Sửa nội dung

Nội dung tiếng Việt nằm trong **`src/data/site.ts`**, tiếng Anh trong **`src/data/site.en.ts`** (chỉ chứa phần chữ đã dịch, ảnh và link lấy từ `site.ts`). Chữ trên nút và tiêu đề mục của cả hai ngôn ngữ nằm trong **`src/i18n.ts`**. Sửa bên tiếng Việt thì nhớ sửa phần tương ứng bên tiếng Anh.

Trong `site.ts`:

- `products`: từng sản phẩm gồm tên, loại, một câu giới thiệu, bài toán, những gì đã làm, điểm nổi bật, phần phụ trách, link, màu nền và ảnh.
  Thứ tự trong danh sách là thứ tự hiện trên trang.
- `services`, `steps`, `reasons`, `faqs`: dịch vụ, quy trình, lý do chọn, câu hỏi thường gặp.
- `contact`: email, số điện thoại, link Zalo, LinkedIn.

Ảnh sản phẩm đặt trong `public/covers/`. Sản phẩm chưa có ảnh chụp đang dùng hình vẽ bằng code (`src/components/CoverArt.tsx`).
Khi có ảnh chụp màn hình thật, bỏ ảnh vào `public/covers/` rồi đổi `cover` của sản phẩm thành
`{ kind: 'image', src: '/covers/ten-anh.webp', w: 1600, h: 900 }` (w, h là kích thước thật của ảnh).

## Ảnh chụp toàn trang và hiệu ứng tự cuộn

10 sản phẩm đang chạy thật có ảnh chụp **toàn bộ trang** (từ đầu đến cuối) trong `public/shots/`, khai báo bằng trường `page` trong `site.ts`:

```ts
page: { src: '/shots/vietpress.webp', w: 1200, h: 6131, url: 'vietpress.vn' },
```

- Thẻ sản phẩm hiện ảnh trong khung trình duyệt. Rê chuột vào thẻ (hoặc bấm Tab tới thẻ) thì trang tự cuộn từ đầu đến cuối như đang lướt web thật, rời chuột thì cuộn về đầu. Trang càng dài thì cuộn càng lâu để tốc độ đều nhau (tối đa khoảng 11 giây).
- Trên điện thoại (không rê chuột được), thẻ nào đi qua giữa màn hình thì tự cuộn.
- Trong hộp thoại chi tiết, người xem tự cuộn trong khung để xem cả trang.
- Máy bật "Giảm chuyển động" thì thẻ đứng yên, chỉ cuộn tay trong hộp thoại.
- Ba ảnh xếp hình quạt ở phần đầu trang (Góc Nhìn Mới và kol.gov.vn phía sau, Hiến máu phía trước) cũng là ảnh chụp toàn trang: rê chuột lên ảnh nào thì ảnh đó tự cuộn; trên điện thoại ảnh phía trước tự cuộn. Muốn đổi sản phẩm hiện ở đây thì sửa `fanSpec` trong `src/components/Hero.tsx` (chọn sản phẩm có `page`).
- Sản phẩm không có `page` dùng ảnh bìa `cover`. App di động (TKG, Thiên Việt ID), AntCMS và Bộ giao diện cho toà soạn dùng ảnh ghép
  `{ kind: 'scene', src: '/covers/...-scene.webp', w: 1600, h: 1200 }`: màn hình thật (từ Figma, Figma Make, trang quản trị AntCMS,
  các trang Góc Nhìn Mới) đặt trong khung điện thoại hoặc cửa sổ trình duyệt, nền trong suốt nên tự hợp với giao diện sáng và tối.

Chụp lại một trang: chụp toàn trang ở khung rộng khoảng 1440px (Chrome: DevTools → Ctrl+Shift+P → "Capture full size screenshot"),
thu về rộng 1200px, lưu WebP vào `public/shots/`, sửa `w`, `h` trong `site.ts`.
Sau đó tạo lại ảnh mờ hiện trong lúc tải (`src/data/shots-blur.ts`): mỗi dòng là ảnh thu nhỏ còn 16px chiều rộng, mã hoá base64.
Không có dòng nào cho ảnh mới thì trang vẫn chạy, chỉ là không có ảnh mờ lúc đang tải.

## Deploy lên Vercel

1. Tạo repo mới trên GitHub và push thư mục này lên.
2. Vào https://vercel.com/new, chọn **Import** repo vừa tạo, bấm **Deploy**.
3. Ảnh xem trước khi chia sẻ link nằm ở `public/og/og-vi.jpg` và `public/og/og-en.jpg` (1200x630). Link tuyệt đối của ảnh tự lấy theo tên miền chính
   của dự án trên Vercel. Nếu đặt biến môi trường `NEXT_PUBLIC_SITE_URL` thì biến này phải đúng tên miền đang dùng (ví dụ `https://chicong-work.vercel.app`).
4. Facebook và Zalo lưu tạm ảnh xem trước của link đã từng chia sẻ. Sau khi deploy, vào https://developers.facebook.com/tools/debug/ dán link và bấm
   "Scrape Again" để Facebook/Messenger lấy ảnh mới.
