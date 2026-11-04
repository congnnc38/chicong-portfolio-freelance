// Toàn bộ nội dung của trang nằm ở file này: sản phẩm, dịch vụ, quy trình, câu hỏi thường gặp, liên hệ.
// Sửa chữ ở đây là trang đổi theo, không cần đụng vào component.

export type Cover =
  | { kind: 'image'; src: string; w: number; h: number }
  /** ảnh ghép nền trong suốt (điện thoại, cửa sổ trình duyệt) phủ kín thẻ 4:3, nền màu của thẻ hiện qua chỗ trong suốt */
  | { kind: 'scene'; src: string; w: number; h: number }
  | { kind: 'kolhub' }
  | { kind: 'netevent' }
  | { kind: 'phapluat' }
  | { kind: 'vietpress' }
  | { kind: 'thienkhoi' }
  | { kind: 'mobile' }
  | { kind: 'thienviet' }
  | { kind: 'templates' };

export type Category = 'news' | 'business' | 'platform' | 'mobile';

export const categories: { id: Category; label: string }[] = [
  { id: 'news', label: 'Báo điện tử & nội dung' },
  { id: 'business', label: 'Website & cổng thông tin' },
  { id: 'platform', label: 'Web app & hệ thống quản lý' },
  { id: 'mobile', label: 'App di động' },
];

export type Product = {
  id: string;
  name: string;
  category: Category;
  /** Một câu: sản phẩm này là gì, viết cho người không làm kỹ thuật */
  pitch: string;
  /** Bài toán của khách hàng / đơn vị sở hữu */
  need: string;
  /** Những phần tôi trực tiếp làm, viết theo tính năng người dùng thấy được */
  built: string[];
  /** Điểm nổi bật có thể kiểm chứng */
  highlight?: string;
  role: string;
  year: string;
  status?: string;
  link?: { href: string; label: string };
  tech: string[];
  color: string;
  cover: Cover;
  /**
   * Ảnh chụp toàn bộ trang thật (từ đầu đến cuối trang), đặt trong public/shots/.
   * Có ảnh này thì thẻ sản phẩm hiện khung trình duyệt và tự cuộn khi rê chuột.
   * w, h là kích thước thật của ảnh; url là địa chỉ hiện trên thanh trình duyệt.
   */
  page?: { src: string; w: number; h: number; url: string };
};

export const contact = {
  name: 'Ngô Nguyễn Chí Công',
  shortName: 'Chí Công',
  email: 'congnnc38@gmail.com',
  phone: '033 224 9402',
  phoneHref: 'tel:+84332249402',
  zalo: 'https://zalo.me/0332249402',
  linkedin: 'https://www.linkedin.com/in/ngonguyenchicong',
};

export const products: Product[] = [
  {
    id: 'kol-portal',
    name: 'kol.gov.vn',
    category: 'business',
    pitch: 'Cổng thông tin và bảng xếp hạng KOL, MCN chính thức.',
    need: 'Cần một cổng thông tin công khai: xếp hạng người ảnh hưởng theo tương tác thực, hồ sơ chi tiết, cho KOL và MCN tự khai báo hồ sơ, người dân báo cáo vi phạm.',
    built: [
      'Trang chủ, bảng xếp hạng Top 100, trang hồ sơ KOL và MCN, tìm kiếm.',
      'Form khai báo hồ sơ: dán link kênh là tự nhận ra nền tảng, kiểm tra thông tin trước khi gửi.',
      'Form báo cáo vi phạm, trang đăng ký tham gia chiến dịch.',
      'Bảng tổng hợp kiểm duyệt theo kỳ và bộ lọc bài viết trên trang quản trị (Laravel).',
    ],
    role: 'Giao diện và hệ thống phía sau',
    year: '2026',
    link: { href: 'https://kol.gov.vn/', label: 'kol.gov.vn' },
    tech: ['Next.js', 'PostgreSQL', 'Laravel Filament'],
    color: '#f36111',
    cover: { kind: 'image', src: '/covers/kol-portal.webp', w: 1600, h: 844 },
    page: { src: '/shots/kol-portal.webp', w: 1200, h: 2919, url: 'kol.gov.vn' },
  },
  {
    id: 'vietpress',
    name: 'VietPress',
    category: 'news',
    pitch: 'Báo điện tử tin tức 24h, có giao diện sáng và tối.',
    need: 'Toà soạn cần một trang báo đọc nhanh trên mọi thiết bị, dàn trang linh hoạt theo từng chuyên mục và được Google News lấy tin.',
    built: [
      'Thanh menu lớn, tìm kiếm, thanh thời tiết, đường dẫn chuyên mục.',
      'Các khối dàn trang ở trang chủ, thêm 7 kiểu khối mới để biên tập viên tự sắp xếp.',
      'Bài viết dạng E-magazine và video.',
      'Sitemap tự động cho Google và Google News.',
      'Lấy dữ liệu từ hệ thống quản trị ngay trên máy chủ, để trang tải nhanh và tốt cho SEO.',
    ],
    role: 'Giao diện và phần chạy trên máy chủ',
    year: '2025 – 2026',
    link: { href: 'https://vietpress.vn/', label: 'vietpress.vn' },
    tech: ['Next.js', 'CMS AntCMS'],
    color: '#c62a35',
    cover: { kind: 'vietpress' },
    page: { src: '/shots/vietpress.webp', w: 1200, h: 6131, url: 'vietpress.vn' },
  },
  {
    id: 'gocnhinmoi',
    name: 'Góc Nhìn Mới',
    category: 'news',
    pitch: 'Trang tin chuyên sâu, độc giả có thể tự viết bài và nghe podcast.',
    need: 'Không chỉ là trang tin: độc giả đăng ký tài khoản, viết bài, theo dõi tác giả, lưu bài, bình luận và nghe podcast ngay trên trang.',
    built: [
      'Trang cá nhân, trang tác giả, theo dõi, bảng xếp hạng tác giả nổi bật.',
      'Nghe podcast có sóng âm chạy theo tiến trình, playlist, lịch sử nghe.',
      'Soạn bài trực tiếp trên trang và luồng duyệt bài.',
      'Làm lại trang chủ, chuyên mục, trang Khám phá; hiển thị tốt trên điện thoại, máy tính bảng và máy tính.',
      'Đăng nhập và phiên người dùng xử lý trên máy chủ, tự chuyển hướng khi hết phiên.',
    ],
    role: 'Giao diện và phần chạy trên máy chủ',
    year: '2025 – nay',
    link: { href: 'https://gocnhinmoi.com.vn/', label: 'gocnhinmoi.com.vn' },
    tech: ['Next.js', 'CMS AntCMS'],
    color: '#d4141a',
    cover: { kind: 'image', src: '/covers/gocnhinmoi.webp', w: 1600, h: 900 },
    page: { src: '/shots/gocnhinmoi.webp', w: 1200, h: 8784, url: 'gocnhinmoi.com.vn' },
  },
  {
    id: 'hien-mau',
    name: 'Hiến máu Thiên Khôi',
    category: 'platform',
    pitch: 'Hệ thống vận hành ngày hội hiến máu: đăng ký, check-in QR, gọi số lên màn hình TV.',
    need: 'Ngày hội đông người, nhiều quầy cùng làm việc: cần người tham gia đăng ký trước, đến nơi quét QR là vào hàng chờ, màn hình TV gọi số và đọc tên, mọi quầy thấy cùng một dữ liệu.',
    built: [
      'Luồng check-in: tra cứu, cập nhật ảnh, xử lý trùng thông tin, danh sách chờ, chứng nhận.',
      'Quản lý hàng chờ, màn hình TV gọi số có đọc giọng nói, gọi lại.',
      'Đồng bộ tức thời giữa quầy check-in, người điều phối và màn hình TV, chịu được hơn 1.000 kết nối cùng lúc.',
      'Trang quản trị có bộ lọc, nhật ký thao tác, xuất Excel và thống kê theo đợt.',
    ],
    highlight: 'Đồng bộ tức thời giữa các quầy, chịu được hơn 1.000 kết nối cùng lúc.',
    role: 'Giao diện và hệ thống phía sau',
    year: '2026',
    link: { href: 'https://hienmau.netspace.vn/', label: 'hienmau.netspace.vn' },
    tech: ['Next.js', 'Payload CMS', 'Socket.IO', 'Redis'],
    color: '#ec3f5c',
    cover: { kind: 'image', src: '/covers/hienmau.webp', w: 1600, h: 900 },
    page: { src: '/shots/hien-mau.webp', w: 1200, h: 6500, url: 'hienmau.netspace.vn' },
  },
  {
    id: 'netevent',
    name: 'NetEvent',
    category: 'platform',
    pitch: 'Nền tảng tạo và vận hành sự kiện theo gói thuê bao.',
    need: 'Ban tổ chức sự kiện đang phải ghép Google Form, Excel, công cụ làm landing page, máy quét QR và gửi email thủ công. Cần một nơi làm hết.',
    built: [
      'Trình làm trang giới thiệu sự kiện, form đăng ký, kho vé.',
      'Check-in bằng camera điện thoại.',
      'Email tự động: mã OTP, vé, nhắc lịch, tổng kết cuối ngày.',
      'Phân quyền theo nhóm, mời thành viên, thông báo tức thời.',
    ],
    role: 'Giao diện và hệ thống phía sau',
    year: '2026',
    link: { href: 'https://event.netspace.vn/', label: 'event.netspace.vn' },
    tech: ['Next.js', 'PostgreSQL', 'Docker'],
    color: '#1eaaff',
    cover: { kind: 'netevent' },
    page: { src: '/shots/netevent.webp', w: 1200, h: 6091, url: 'event.netspace.vn' },
  },
  {
    id: 'tkg-mobile',
    name: 'TKG Proptech & Thiên Khôi HRM',
    category: 'mobile',
    pitch: 'Hai app iOS và Android cho đội ngũ môi giới bất động sản và nhân sự Thiên Khôi Group.',
    need: 'Môi giới cần quản lý kho nguồn hàng, ký gửi và giao dịch ngay trên điện thoại; phòng nhân sự cần quản lý tuyển dụng, đào tạo, sự kiện theo từng chi nhánh, phòng ban.',
    built: [
      'Màn kho nguồn hàng làm lại theo thiết kế: thẻ sản phẩm, tìm kiếm, lọc nhanh, sắp xếp.',
      'Chọn người tham gia sự kiện theo khu vực, phòng ban, đúng quyền của từng vai trò; điểm danh và xuất Excel.',
      'Cảnh báo khi rời màn đang nhập dở trên 28 màn hình, tự điền sẵn form từ dữ liệu vừa nhập.',
      'Liên kết qua lại giữa hai app.',
    ],
    highlight: 'Thiên Khôi Group được vinh danh Top 5 Proptech 2026 với hệ sinh thái có hai app này.',
    role: 'Giao diện app',
    year: '2026',
    tech: ['React Native', 'iOS', 'Android'],
    color: '#e8762f',
    cover: { kind: 'scene', src: '/covers/tkg-mobile-scene.webp', w: 1600, h: 1200 },
  },
  {
    id: 'thienkhoi-cdc',
    name: 'Thiên Khôi CDC',
    category: 'business',
    pitch: 'Website doanh nghiệp thiết kế và thi công nội thất, song ngữ Việt – Anh.',
    need: 'Doanh nghiệp cần website giới thiệu dịch vụ, dự án, tuyển dụng; có tiếng Anh cho khách nước ngoài và lên Google tốt.',
    built: [
      'Gần như toàn bộ website: giới thiệu, dịch vụ, dự án, tin tức, tuyển dụng, tìm kiếm, liên hệ.',
      'Song ngữ Việt – Anh.',
      'Tối ưu SEO: sitemap tự tạo trên máy chủ cho từng loại nội dung, dữ liệu có cấu trúc, đường dẫn chuẩn cho từng ngôn ngữ.',
      'Banner video, chữ chạy, hiệu ứng khi cuộn.',
    ],
    role: 'Giao diện và phần chạy trên máy chủ',
    year: '2025 – 2026',
    link: { href: 'https://thienkhoicdc.com/', label: 'thienkhoicdc.com' },
    tech: ['Next.js', 'Song ngữ', 'SEO'],
    color: '#e8452f',
    cover: { kind: 'thienkhoi' },
    page: { src: '/shots/thienkhoi-cdc.webp', w: 1200, h: 4921, url: 'thienkhoicdc.com' },
  },
  {
    id: 'buddhaworlds',
    name: 'BuddhaWorlds',
    category: 'business',
    pitch: 'Thư viện và cổng thông tin Phật giáo bằng ba thứ tiếng.',
    need: 'Cần một cổng thông tin có thư viện số, bài giảng, video ngắn, danh bạ chùa trên bản đồ; mỗi chùa có trang riêng.',
    built: [
      'Trang video ngắn phát được YouTube, TikTok, Facebook.',
      'Trang riêng cho từng chùa: giới thiệu, thư viện ảnh, sự kiện, tin tức, liên hệ.',
      'Tính năng đóng góp, sự kiện và tin nổi bật trên trang chùa.',
      'Trang chùa dựng sẵn trên máy chủ theo mã chùa, tốt cho SEO.',
    ],
    role: 'Giao diện và phần chạy trên máy chủ',
    year: '2025',
    link: { href: 'https://buddhaworlds.com/', label: 'buddhaworlds.com' },
    tech: ['Next.js', 'Việt · Anh · Trung', 'Bản đồ'],
    color: '#b8862e',
    cover: { kind: 'image', src: '/covers/buddhaworlds.webp', w: 1280, h: 720 },
    page: { src: '/shots/buddhaworlds.webp', w: 1200, h: 3983, url: 'buddhaworlds.com' },
  },
  {
    id: 'kol-safety',
    name: 'KOL Safety',
    category: 'platform',
    pitch: 'Kiểm duyệt video tiếng Việt bằng AI trước khi đăng.',
    need: 'Nhãn hàng và KOL cần biết video có vi phạm quy tắc ứng xử trên mạng không, trước khi đăng và trên cả kênh đã đăng.',
    built: [
      'Kết nối kênh YouTube và quét hàng loạt video, có thanh tiến độ.',
      'Khung làm việc kiểu YouTube Studio: lọc, chọn video, xếp hàng quét.',
      'Quét được cả bài đăng dạng slide ảnh trên TikTok.',
      'Chấm điểm theo Bộ Quy tắc Ứng xử Văn hóa số.',
    ],
    role: 'Giao diện và hệ thống phía sau',
    year: '2026 – nay',
    link: { href: 'https://safety.netspace.vn/', label: 'safety.netspace.vn' },
    tech: ['Next.js', 'NestJS', 'AI'],
    color: '#7b6dff',
    cover: { kind: 'image', src: '/covers/kol-safety.webp', w: 1600, h: 900 },
    page: { src: '/shots/kol-safety.webp', w: 1200, h: 7012, url: 'safety.netspace.vn' },
  },
  {
    id: 'emagazine',
    name: 'E-magazine',
    category: 'news',
    pitch: 'Bộ mẫu bài viết dạng tạp chí số, dùng chung cho nhiều trang báo.',
    need: 'Biên tập viên muốn làm bài longform đẹp như tạp chí mà không cần lập trình viên cho mỗi bài.',
    built: [
      'Hơn 10 bộ mẫu: E-magazine, Business, Sport, Photo story.',
      'Biên tập viên chỉnh từng phần ngay trên trang và xem trước theo điện thoại hoặc máy tính.',
      'Đổi ảnh, chú thích, màu chữ; soát chính tả ngay trong trình soạn qua API riêng.',
    ],
    role: 'Giao diện và phần chạy trên máy chủ',
    year: '2026',
    tech: ['React', 'Thư viện dùng chung'],
    color: '#c08552',
    cover: { kind: 'image', src: '/covers/emagazine.webp', w: 1600, h: 768 },
    page: { src: '/shots/emagazine.webp', w: 1200, h: 3465, url: 'vietpress.vn/emagazine' },
  },
  {
    id: 'phapluat',
    name: 'phobienphapluat.vn',
    category: 'news',
    pitch: 'Trang tin pháp luật, có tạp chí in đọc dạng sách lật.',
    need: 'Toà soạn cần trang tin mới, đọc được cả tạp chí in trên web, và dùng chung hệ thống quản trị với các trang báo khác.',
    built: [
      'Dựng lại toàn bộ giao diện trang tin.',
      'Đọc tạp chí in dạng sách lật toàn màn hình.',
      'Các khối Video, Longform, Podcast và quảng cáo.',
      'Lớp lấy dữ liệu chạy trên máy chủ dùng chung cho nhiều trang tin, công cụ tạo nhanh trang tin mới.',
    ],
    role: 'Giao diện và phần chạy trên máy chủ',
    year: '2026',
    status: 'Đang hoàn thiện',
    link: { href: 'https://phobienphapluat-web-dev.antcms.vn/', label: 'Bản thử nghiệm' },
    tech: ['Next.js', 'CMS AntCMS'],
    color: '#3d6fd9',
    cover: { kind: 'phapluat' },
    page: { src: '/shots/phapluat.webp', w: 1200, h: 7721, url: 'phobienphapluat-web-dev.antcms.vn' },
  },
  {
    id: 'thienviet-id',
    name: 'Thiên Việt ID',
    category: 'mobile',
    pitch: 'App một tài khoản cho cả hệ thống: ví, chat, đặt món, tin tức.',
    need: 'Người dùng cần một app duy nhất để đăng nhập, nạp tiền, nhắn tin và đặt món ở nhà hàng, quán cà phê trong hệ thống.',
    built: [
      'Trọn luồng đặt cà phê: menu theo danh mục, chọn tuỳ chọn có tính thêm tiền, giỏ hàng, thanh toán.',
      'Nhận và dùng voucher.',
      'Phần hệ thống phía sau cho đơn hàng, menu và voucher.',
    ],
    role: 'Tính năng đặt món (app và hệ thống)',
    year: '2026',
    tech: ['React Native', 'Expo'],
    color: '#1f6b57',
    cover: { kind: 'scene', src: '/covers/thienviet-id-scene.webp', w: 1600, h: 1200 },
  },
  {
    id: 'antcms',
    name: 'AntCMS',
    category: 'news',
    pitch: 'Hệ thống quản trị nội dung cho nhiều toà soạn.',
    need: 'Nhiều toà soạn dùng chung một hệ thống, mỗi nơi có dữ liệu riêng: bài viết, video, podcast, nhuận bút, quảng cáo, SEO.',
    built: [
      'Trình soạn bài viết, chèn video, đếm ký tự.',
      'Thư viện ảnh và video, chọn ảnh đại diện.',
      'Chấm điểm SEO cho bài viết, đổi tác giả, chọn chuyên mục, nhuận bút.',
      'Sửa phần quản trị Laravel, giảm tải khi dựng trang trên máy chủ.',
    ],
    role: 'Giao diện và hệ thống phía sau',
    year: '2025',
    tech: ['Laravel', 'React'],
    color: '#c9a35d',
    cover: { kind: 'scene', src: '/covers/antcms-scene.webp', w: 1600, h: 1200 },
  },
  {
    id: 'templates',
    name: 'Bộ giao diện cho toà soạn',
    category: 'news',
    pitch: 'Một bộ mã giao diện, nhiều trang báo: Reatimes, Thế giới Điện ảnh, Góc Nhìn Mới.',
    need: 'Mỗi toà soạn muốn giao diện riêng nhưng không muốn trả tiền làm lại từ đầu.',
    built: [
      'Mỗi trang tự chọn mẫu giao diện, màu và font chữ qua cấu hình.',
      'Mẫu Cinematic, trang chủ Reatimes, làm lại các trang Thế giới Điện ảnh.',
      'Trang chuyên mục, tag, tìm kiếm, video, trung tâm hỗ trợ cho Góc Nhìn Mới.',
      'Nhận diện trang báo theo tên miền và tải cấu hình tương ứng trên máy chủ; đóng gói Docker cho từng trang.',
    ],
    role: 'Giao diện và phần chạy trên máy chủ',
    year: '2026',
    tech: ['Next.js'],
    color: '#2b2b2b',
    cover: { kind: 'scene', src: '/covers/templates-scene.webp', w: 1600, h: 1200 },
  },
  {
    id: 'kolhub',
    name: 'KOL Hub',
    category: 'platform',
    pitch: 'Sàn kết nối chiến dịch giữa nhãn hàng và KOL, MCN.',
    need: 'Nhãn hàng đăng yêu cầu chiến dịch, KOL ứng tuyển, nộp bài và nhận thanh toán ở cùng một nơi; kênh phải qua kiểm duyệt nội dung trước.',
    built: [
      'Liên kết với KOL Safety: kênh phải đạt kiểm duyệt mới được duyệt hồ sơ.',
      'Đăng nhập một lần giữa hai hệ thống.',
      'Các luồng cho KOL, MCN, nhãn hàng và quản trị viên.',
    ],
    role: 'Giao diện và hệ thống phía sau',
    year: '2026',
    status: 'Đang phát triển',
    tech: ['React', 'PostgreSQL'],
    color: '#f47a24',
    cover: { kind: 'kolhub' },
    page: { src: '/shots/kolhub.webp', w: 1200, h: 935, url: 'kol-hub-three.vercel.app/san' },
  },
];

export const services = [
  {
    title: 'Website doanh nghiệp & landing page',
    text: 'Giới thiệu công ty, dịch vụ, dự án, tuyển dụng. Tải nhanh, đẹp trên điện thoại, chuẩn SEO, song ngữ nếu cần.',
    example: 'Thiên Khôi CDC, BuddhaWorlds',
  },
  {
    title: 'Trang tin, báo điện tử & hệ thống quản trị nội dung',
    text: 'Trang tin nhiều chuyên mục, trình soạn bài, bài viết dạng tạp chí, podcast, video, sitemap cho Google News.',
    example: 'VietPress, Góc Nhìn Mới',
  },
  {
    title: 'Web app & hệ thống quản lý',
    text: 'Đăng ký, bán vé, check-in QR, đặt lịch, trang quản trị, phân quyền, báo cáo, xuất Excel, cập nhật tức thời.',
    example: 'NetEvent, Hiến máu Thiên Khôi',
  },
  {
    title: 'App di động iOS & Android',
    text: 'Một mã nguồn chạy cả hai nền tảng: danh sách, bộ lọc, giỏ hàng, thanh toán, thông báo.',
    example: 'TKG Proptech, Thiên Việt ID',
  },
  {
    title: 'Thiết kế giao diện',
    text: 'Tôi khởi đầu là UI/UX Designer, nên có thể thiết kế giao diện trên Figma trước khi làm, để bạn xem và duyệt.',
    example: 'Phù hợp khi bạn chưa có bản thiết kế',
  },
  {
    title: 'Nâng cấp & sửa website có sẵn',
    text: 'Làm lại giao diện, thêm tính năng, sửa lỗi, tăng tốc độ tải trang và cải thiện SEO cho website bạn đang có.',
    example: 'Next.js, React và các website hiện đại',
  },
];

export const steps = [
  { title: 'Trao đổi', text: 'Bạn kể về sản phẩm và mục tiêu. Tôi hỏi lại cho rõ, gợi ý phạm vi hợp lý cho ngân sách.' },
  { title: 'Báo giá & kế hoạch', text: 'Bạn nhận báo giá theo phạm vi, danh sách tính năng và các mốc bàn giao.' },
  { title: 'Thiết kế', text: 'Nếu chưa có thiết kế, tôi làm giao diện trên Figma để bạn duyệt trước khi code.' },
  { title: 'Làm & cập nhật', text: 'Bạn xem bản chạy thử theo từng mốc, góp ý sớm thay vì đợi đến cuối.' },
  { title: 'Bàn giao', text: 'Đưa lên tên miền của bạn, bàn giao mã nguồn và hướng dẫn sử dụng.' },
];

export const reasons = [
  { title: 'Thiết kế và code cùng một người', text: 'Giao diện làm ra giống bản thiết kế, không bị “lệch” khi chuyển qua nhiều người.' },
  { title: '5 năm kinh nghiệm', text: 'Đã làm báo điện tử, cổng thông tin, nền tảng sự kiện, hệ thống quản trị và app di động.' },
  { title: 'Sản phẩm đang chạy thật', text: 'Phần lớn sản phẩm ở trên đang có người dùng hằng ngày, bạn có thể mở xem trực tiếp.' },
  { title: 'Làm được cả web lẫn app', text: 'Một đầu mối cho website, trang quản trị, hệ thống phía sau và app điện thoại.' },
];

export const faqs = [
  {
    q: 'Chi phí được tính thế nào?',
    a: 'Tôi báo giá theo phạm vi công việc sau buổi trao đổi đầu tiên, chia thanh toán theo các mốc bàn giao. Bạn biết trước tổng chi phí trước khi bắt đầu.',
  },
  {
    q: 'Làm một website mất bao lâu?',
    a: 'Tuỳ quy mô. Landing page hoặc website giới thiệu thường nhanh hơn nhiều so với web app hay app di động. Tôi sẽ đưa mốc thời gian cụ thể cùng với báo giá.',
  },
  {
    q: 'Tôi chưa có thiết kế, có làm được không?',
    a: 'Được. Tôi có thể thiết kế giao diện trên Figma để bạn duyệt trước, hoặc làm theo website mẫu bạn thích.',
  },
  {
    q: 'Sau khi bàn giao, tôi có tự quản lý được không?',
    a: 'Có. Bạn nhận mã nguồn, tài khoản quản trị và hướng dẫn sử dụng. Nếu cần thêm tính năng hay hỗ trợ sau này, cứ nhắn tôi.',
  },
];
