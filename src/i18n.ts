// Hai ngôn ngữ của trang: tiếng Việt ở "/", tiếng Anh ở "/en".
// Nội dung sản phẩm, dịch vụ... nằm ở data/site.ts (tiếng Việt) và data/site.en.ts (tiếng Anh);
// chữ trên nút, tiêu đề mục nằm ở bảng `ui` bên dưới.

import * as vi from './data/site';
import * as en from './data/site.en';
import { contact, type Product } from './data/site';

export type Lang = 'vi' | 'en';
export const home: Record<Lang, string> = { vi: '/', en: '/en' };

const mailto = (subject: string) => `mailto:${contact.email}?subject=${encodeURIComponent(subject)}`;

const ui = {
  vi: {
    meta: {
      title: `${contact.name} · Nhận làm website, web app và app di động`,
      description:
        'Nhận làm website, web app và app di động: từ thiết kế giao diện đến lúc chạy thật. Xem các sản phẩm tôi đã làm: báo điện tử, cổng thông tin, nền tảng sự kiện, app iOS và Android.',
      locale: 'vi_VN',
    },
    // Nút liên hệ chính: bản tiếng Việt mở Zalo
    cta: { href: contact.zalo, external: true, label: 'Nhắn Zalo', long: 'Nhắn Zalo cho tôi', now: 'Nhắn Zalo ngay' },
    nav: {
      label: 'Điều hướng chính',
      links: [
        { href: '#san-pham', label: 'Sản phẩm' },
        { href: '#dich-vu', label: 'Dịch vụ' },
        { href: '#quy-trinh', label: 'Quy trình' },
        { href: '#ve-toi', label: 'Về tôi' },
        { href: '#hoi-dap', label: 'Hỏi đáp' },
      ],
      toLight: 'Chuyển sang giao diện sáng',
      toDark: 'Chuyển sang giao diện tối',
      switchLang: 'Xem bản tiếng Anh',
    },
    hero: {
      badge: 'Đang nhận dự án freelance',
      h1: ['Website và app', 'chạy thật', 'cho doanh nghiệp của bạn.'] as const,
      intro: [
        'Tôi là ',
        ', 5 năm làm sản phẩm web, khởi đầu là UI/UX Designer. Tôi nhận làm website, web app và app di động từ thiết kế đến lúc chạy thật. Phần lớn sản phẩm tôi từng làm đang có người dùng hằng ngày.',
      ] as const,
      seeProducts: 'Xem sản phẩm',
      role: 'Lập trình viên Fullstack · Frontend First',
      live: (n: number) => `${n} sản phẩm đang chạy thật`,
      tag: 'Web · App · Thiết kế',
      liveAt: 'Đang chạy tại',
      visit: 'Mở trang',
    },
    products: {
      eyebrow: 'Sản phẩm đã làm',
      title: (n: number) => `${n} sản phẩm, từ trang tin đến app di động`,
      intro:
        'Bấm vào sản phẩm để mở trang thật; sản phẩm chưa có trang công khai thì mở phần chi tiết. Các sản phẩm được làm cùng đội ngũ ở nơi tôi làm việc; mỗi sản phẩm ghi rõ phần tôi phụ trách.',
      all: 'Tất cả',
      filterLabel: 'Lọc theo loại sản phẩm',
      more: 'Xem chi tiết',
      cursor: 'Xem',
      newTab: '(mở trong thẻ mới)',
      shotAlt: 'Hình ảnh sản phẩm',
      pageAlt: 'Ảnh chụp toàn trang',
      scrollHint: 'Cuộn để xem cả trang',
      close: 'Đóng',
      need: 'Bài toán',
      built: 'Tôi đã làm',
      role: 'Phần tôi phụ trách',
      status: 'Trạng thái',
      tech: 'Làm bằng',
      similar: 'Bạn cần một sản phẩm tương tự?',
    },
    services: {
      eyebrow: 'Dịch vụ',
      title: 'Tôi có thể làm gì cho bạn',
      intro: 'Mỗi dịch vụ đều có sản phẩm thật ở phần trên để bạn tham khảo. Rê chuột lên từng ô để xem.',
      example: 'Ví dụ:',
    },
    process: { eyebrow: 'Quy trình', title: 'Làm việc rõ ràng từ đầu đến cuối' },
    about: {
      eyebrow: 'Về tôi',
      title: `Xin chào, tôi là ${contact.shortName}`,
      body: 'Tôi khởi đầu là UI/UX Designer rồi chuyển sang lập trình, đến nay đã 5 năm làm sản phẩm web. Tôi làm được cả phần giao diện người dùng nhìn thấy, phần hệ thống phía sau và app điện thoại, nên bạn chỉ cần làm việc với một người cho cả sản phẩm.',
      stats: ['năm kinh nghiệm', 'sản phẩm đã tham gia', 'sản phẩm đang chạy thật'] as const,
      badge: ['Từng là ', 'UI/UX Designer'] as const,
      photoAlt: `Ảnh chân dung ${contact.name}`,
    },
    faq: { eyebrow: 'Hỏi đáp', title: 'Câu hỏi thường gặp' },
    contact: {
      title: 'Bạn có ý tưởng sản phẩm? Kể cho tôi nghe.',
      body: 'Nhắn cho tôi vài dòng về sản phẩm bạn muốn làm, thời gian và ngân sách dự kiến. Tôi sẽ trả lời kèm câu hỏi và gợi ý hướng làm.',
      labels: { zalo: 'Zalo', phone: 'Điện thoại', email: 'Email', linkedin: 'LinkedIn' },
      mail: mailto('Trao đổi dự án'),
    },
    footer: 'Hình ảnh sản phẩm thuộc về các đơn vị sở hữu.',
  },
  en: {
    meta: {
      title: `${contact.name} · Freelance websites, web apps and mobile apps`,
      description:
        'Freelance websites, web apps and mobile apps, from interface design to launch. See the products I have worked on: news sites, portals, event platforms, iOS and Android apps.',
      locale: 'en_US',
    },
    // Nút liên hệ chính: bản tiếng Anh mở email (khách nước ngoài ít dùng Zalo)
    cta: { href: mailto('Project inquiry'), external: false, label: 'Email me', long: 'Email me', now: 'Email me now' },
    nav: {
      label: 'Main navigation',
      links: [
        { href: '#san-pham', label: 'Work' },
        { href: '#dich-vu', label: 'Services' },
        { href: '#quy-trinh', label: 'Process' },
        { href: '#ve-toi', label: 'About' },
        { href: '#hoi-dap', label: 'FAQ' },
      ],
      toLight: 'Switch to light mode',
      toDark: 'Switch to dark mode',
      switchLang: 'Xem bản tiếng Việt',
    },
    hero: {
      badge: 'Available for freelance projects',
      h1: ['Websites and apps', 'that go live', 'for your business.'] as const,
      intro: [
        'I’m ',
        ', a web developer with 5 years of experience who started out as a UI/UX Designer. I build websites, web apps and mobile apps from design to launch, and most of the products I have worked on have real users every day.',
      ] as const,
      seeProducts: 'See my work',
      role: 'Fullstack Developer · Frontend First',
      live: (n: number) => `${n} products live today`,
      tag: 'Web · App · Design',
      liveAt: 'Live at',
      visit: 'Visit',
    },
    products: {
      eyebrow: 'Selected work',
      title: (n: number) => `${n} products, from news sites to mobile apps`,
      intro:
        'Click a product to open the live site; products without a public site open their details instead. These products were built with the teams I worked with; each one shows exactly which part I was responsible for.',
      all: 'All',
      filterLabel: 'Filter by product type',
      more: 'View details',
      cursor: 'View',
      newTab: '(opens in a new tab)',
      shotAlt: 'Screenshot of',
      pageAlt: 'Full-page screenshot of',
      scrollHint: 'Scroll to see the full page',
      close: 'Close',
      need: 'The problem',
      built: 'What I built',
      role: 'My part',
      status: 'Status',
      tech: 'Built with',
      similar: 'Need something similar?',
    },
    services: {
      eyebrow: 'Services',
      title: 'What I can do for you',
      intro: 'Every service has a real product above for reference. Hover over each card to explore.',
      example: 'Example:',
    },
    process: { eyebrow: 'Process', title: 'A clear process from start to finish' },
    about: {
      eyebrow: 'About me',
      title: `Hi, I’m ${contact.shortName}`,
      body: 'I started as a UI/UX Designer before moving into development, and I have now spent 5 years building web products. I handle the interface people see, the back end behind it and the phone app, so you work with one person for the whole product.',
      stats: ['years of experience', 'products worked on', 'products live today'] as const,
      badge: ['Former ', 'UI/UX Designer'] as const,
      photoAlt: `Portrait of ${contact.name}`,
    },
    faq: { eyebrow: 'FAQ', title: 'Frequently asked questions' },
    contact: {
      title: 'Have a product idea? Tell me about it.',
      body: 'Send me a few lines about what you want to build, your timeline and rough budget. I’ll reply with questions and a suggested approach.',
      labels: { zalo: 'Zalo', phone: 'Phone', email: 'Email', linkedin: 'LinkedIn' },
      mail: mailto('Project inquiry'),
    },
    footer: 'Product images belong to their respective owners.',
  },
};

function englishProducts(): Product[] {
  return vi.products.map((p) => {
    const t = en.products[p.id];
    if (!t) return p;
    return {
      ...p,
      name: t.name ?? p.name,
      pitch: t.pitch,
      need: t.need,
      built: t.built,
      highlight: t.highlight,
      role: t.role,
      year: t.year ?? p.year,
      status: t.status,
      tech: t.tech ?? p.tech,
      link: p.link ? { ...p.link, label: t.linkLabel ?? p.link.label } : undefined,
    };
  });
}

const enProducts = englishProducts();

export function getContent(lang: Lang) {
  if (lang === 'en') {
    return {
      lang,
      t: ui.en,
      products: enProducts,
      categories: en.categories,
      services: en.services,
      steps: en.steps,
      reasons: en.reasons,
      faqs: en.faqs,
    };
  }
  return {
    lang,
    t: ui.vi,
    products: vi.products,
    categories: vi.categories,
    services: vi.services,
    steps: vi.steps,
    reasons: vi.reasons,
    faqs: vi.faqs,
  };
}
