// Bản tiếng Anh của nội dung (trang /en).
// Chỉ chứa phần chữ cần dịch; ảnh, màu, link, thứ tự sản phẩm lấy từ site.ts.
// Sửa nội dung tiếng Việt ở site.ts thì nhớ sửa phần tương ứng ở đây.

import type { Category } from './site';

type ProductText = {
  name?: string;
  pitch: string;
  need: string;
  built: string[];
  highlight?: string;
  role: string;
  year?: string;
  status?: string;
  linkLabel?: string;
  tech?: string[];
};

export const categories: { id: Category; label: string }[] = [
  { id: 'news', label: 'News & content' },
  { id: 'business', label: 'Websites & portals' },
  { id: 'platform', label: 'Web apps & admin systems' },
  { id: 'mobile', label: 'Mobile apps' },
];

export const products: Record<string, ProductText> = {
  'kol-portal': {
    pitch: 'The official portal and rankings for KOLs and MCNs in Vietnam.',
    need: 'A public portal was needed to rank influencers by real engagement, show detailed profiles, let KOLs and MCNs register their own profiles, and let the public report violations.',
    built: [
      'Home page, Top 100 rankings, KOL and MCN profile pages, search.',
      'Profile registration form: paste a channel link and the platform is detected automatically, with checks before submitting.',
      'Violation report form and campaign sign-up page.',
      'A per-period moderation summary and article filters in the admin panel (Laravel).',
    ],
    role: 'Interface and back end',
  },
  vietpress: {
    pitch: 'A 24/7 online newspaper with light and dark themes.',
    need: 'The newsroom needed a news site that loads fast on every device, with flexible layouts per section and articles picked up by Google News.',
    built: [
      'Mega menu, search, weather bar, section breadcrumbs.',
      'Home page layout blocks, plus 7 new block styles editors can arrange themselves.',
      'E-magazine and video articles.',
      'Automatic sitemaps for Google and Google News.',
      'Content pulled from the CMS on the server, so pages load fast and are SEO-friendly.',
    ],
    role: 'Interface and server side',
    year: '2025 – 2026',
  },
  gocnhinmoi: {
    pitch: 'An in-depth news site where readers can write their own articles and listen to podcasts.',
    need: 'More than a news site: readers sign up, write articles, follow authors, save stories, comment and listen to podcasts right on the site.',
    built: [
      'Profile pages, author pages, following, a featured-authors leaderboard.',
      'Podcast player with a progress waveform, playlists, listening history.',
      'Writing articles directly on the site, plus an editorial review flow.',
      'Rebuilt the home, category and Explore pages; works well on phones, tablets and desktops.',
      'Sign-in and user sessions handled on the server, with automatic redirects when a session expires.',
    ],
    role: 'Interface and server side',
    year: '2025 – present',
  },
  'hien-mau': {
    name: 'Thien Khoi Blood Donation',
    pitch: 'The system that runs a blood donation day: registration, QR check-in, numbers called on a TV screen.',
    need: 'A crowded event with many desks working at once: donors register in advance, scan a QR code on arrival to join the queue, a TV screen calls numbers and reads names aloud, and every desk sees the same data.',
    built: [
      'Check-in flow: lookup, photo update, duplicate handling, waiting list, certificates.',
      'Queue management and a TV call screen with text-to-speech and recall.',
      'Instant sync between check-in desks, coordinators and the TV screen, handling more than 1,000 connections at once.',
      'Admin panel with filters, activity log, Excel export and per-round statistics.',
    ],
    highlight: 'Instant sync across desks, handling more than 1,000 connections at once.',
    role: 'Interface and back end',
  },
  netevent: {
    pitch: 'A subscription platform for creating and running events.',
    need: 'Event organisers were stitching together Google Forms, Excel, landing-page builders, QR scanners and manual emails. They needed one place to do it all.',
    built: [
      'Event landing-page builder, registration forms, ticket inventory.',
      'Check-in with a phone camera.',
      'Automatic emails: OTP codes, tickets, reminders, end-of-day summaries.',
      'Role groups, member invitations, real-time notifications.',
    ],
    role: 'Interface and back end',
  },
  'tkg-mobile': {
    name: 'TKG Proptech & Thien Khoi HRM',
    pitch: 'Two iOS and Android apps for Thien Khoi Group’s real estate brokers and staff.',
    need: 'Brokers needed to manage property inventory, consignments and deals from their phones; HR needed to manage recruitment, training and events across branches and departments.',
    built: [
      'Rebuilt the property inventory screen from the design: listing cards, search, quick filters, sorting.',
      'Choosing event participants by region and department within each role’s permissions; attendance with Excel export.',
      'Unsaved-changes warnings on 28 screens, and forms pre-filled from data just entered.',
      'Deep links between the two apps.',
    ],
    highlight: 'Thien Khoi Group was named a Top 5 Proptech of 2026 for the ecosystem that includes these two apps.',
    role: 'App interface',
  },
  'thienkhoi-cdc': {
    name: 'Thien Khoi CDC',
    pitch: 'A bilingual Vietnamese–English website for an interior design and build company.',
    need: 'The company needed a website for its services, projects and careers, in English for foreign clients, and easy to find on Google.',
    built: [
      'Almost the entire site: about, services, projects, news, careers, search, contact.',
      'Vietnamese and English versions.',
      'SEO: sitemaps generated on the server for each content type, structured data, proper URLs for each language.',
      'Video banner, marquee text, scroll animations.',
    ],
    role: 'Interface and server side',
    tech: ['Next.js', 'Bilingual', 'SEO'],
  },
  buddhaworlds: {
    pitch: 'A Buddhist library and portal in three languages.',
    need: 'A portal with a digital library, dharma talks, short videos and a map of pagodas, with a dedicated page for each pagoda.',
    built: [
      'Short-video page that plays YouTube, TikTok and Facebook videos.',
      'A dedicated page for each pagoda: about, photo gallery, events, news, contact.',
      'Donations, events and featured news on pagoda pages.',
      'Pagoda pages rendered on the server from each pagoda’s code, good for SEO.',
    ],
    role: 'Interface and server side',
    tech: ['Next.js', 'VI · EN · ZH', 'Maps'],
  },
  'kol-safety': {
    pitch: 'AI moderation for Vietnamese videos before they go live.',
    need: 'Brands and KOLs need to know whether a video breaks online conduct rules, both before posting and across a channel’s existing videos.',
    built: [
      'Connect a YouTube channel and scan videos in bulk, with a progress bar.',
      'A YouTube Studio–style workspace: filters, video selection, scan queue.',
      'Scans TikTok photo-slide posts too.',
      'Scoring based on Vietnam’s Digital Culture Code of Conduct.',
    ],
    role: 'Interface and back end',
    year: '2026 – present',
  },
  emagazine: {
    pitch: 'Magazine-style article templates shared across many news sites.',
    need: 'Editors wanted beautiful long-form stories like a magazine, without needing a developer for every article.',
    built: [
      'More than 10 template sets: E-magazine, Business, Sport, Photo story.',
      'Editors adjust each part right on the page and preview on phone or desktop.',
      'Swap images, captions and text colours; spell-check inside the editor through its own API.',
    ],
    role: 'Interface and server side',
    tech: ['React', 'Shared library'],
  },
  phapluat: {
    pitch: 'A legal news site with a flipbook reader for the print magazine.',
    need: 'The newsroom needed a new news site that can also show its print magazine on the web, sharing one admin system with other news sites.',
    built: ['Rebuilt the entire news site interface.', 'Full-screen flipbook reader for the print magazine.', 'Video, Longform, Podcast and ad blocks.', 'A server-side data layer shared by several news sites, and a tool to spin up a new site quickly.'],
    role: 'Interface and server side',
    status: 'Finishing up',
    linkLabel: 'Preview build',
  },
  'thienviet-id': {
    name: 'Thien Viet ID',
    pitch: 'One account for the whole system: wallet, chat, food ordering, news.',
    need: 'Users needed a single app to sign in, top up, chat and order at the system’s restaurants and cafés.',
    built: [
      'The full coffee ordering flow: menu by category, paid add-on options, cart, checkout.',
      'Collecting and using vouchers.',
      'The back end for orders, menus and vouchers.',
    ],
    role: 'Ordering feature (app and back end)',
  },
  antcms: {
    pitch: 'A content management system for multiple newsrooms.',
    need: 'Many newsrooms share one system, each with its own data: articles, videos, podcasts, author fees, ads, SEO.',
    built: ['Article editor with video embedding and character count.', 'Photo and video library, featured image picker.', 'SEO scoring for articles, author changes, category picker, author fees.', 'Fixes in the Laravel admin and lighter server-side rendering.'],
    role: 'Interface and back end',
  },
  templates: {
    name: 'Newsroom themes',
    pitch: 'One theme codebase, many news sites: Reatimes, Thế giới Điện ảnh, Góc Nhìn Mới.',
    need: 'Each newsroom wanted its own look without paying to rebuild from scratch.',
    built: [
      'Each site picks its theme, colours and fonts through configuration.',
      'The Cinematic theme, the Reatimes home page, rebuilt Thế giới Điện ảnh pages.',
      'Category, tag, search, video and help-centre pages for Góc Nhìn Mới.',
      'Detects each newsroom by its domain and loads its configuration on the server; a Docker package for each site.',
    ],
    role: 'Interface and server side',
  },
  kolhub: {
    pitch: 'A campaign marketplace connecting brands with KOLs and MCNs.',
    need: 'Brands post campaign briefs; KOLs apply, submit content and get paid in one place, and channels must pass content moderation first.',
    built: [
      'Integration with KOL Safety: a channel must pass moderation before its profile is approved.',
      'Single sign-on between the two systems.',
      'Flows for KOLs, MCNs, brands and admins.',
    ],
    role: 'Interface and back end',
    status: 'In development',
  },
};

export const services = [
  {
    title: 'Company websites & landing pages',
    text: 'Present your company, services, projects and careers. Fast, great on phones, SEO-ready, bilingual if you need it.',
    example: 'Thien Khoi CDC, BuddhaWorlds',
  },
  {
    title: 'News sites & content management',
    text: 'Multi-section news sites, article editors, magazine-style stories, podcasts, video, Google News sitemaps.',
    example: 'VietPress, Góc Nhìn Mới',
  },
  {
    title: 'Web apps & admin systems',
    text: 'Registration, ticketing, QR check-in, booking, admin panels, permissions, reports, Excel export, real-time updates.',
    example: 'NetEvent, Thien Khoi Blood Donation',
  },
  {
    title: 'iOS & Android apps',
    text: 'One codebase for both platforms: lists, filters, cart, checkout, notifications.',
    example: 'TKG Proptech, Thien Viet ID',
  },
  {
    title: 'UI design',
    text: 'I started as a UI/UX Designer, so I can design the interface in Figma first for you to review and approve.',
    example: 'Great when you don’t have a design yet',
  },
  {
    title: 'Upgrades & fixes for existing sites',
    text: 'Redesigns, new features, bug fixes, faster page loads and better SEO for the website you already have.',
    example: 'Next.js, React and modern websites',
  },
];

export const steps = [
  { title: 'Talk', text: 'You tell me about the product and your goals. I ask follow-up questions and suggest a scope that fits the budget.' },
  { title: 'Quote & plan', text: 'You get a quote based on scope, a feature list and delivery milestones.' },
  { title: 'Design', text: 'If there is no design yet, I design the interface in Figma for you to approve before coding.' },
  { title: 'Build & update', text: 'You see a working build at each milestone and give feedback early instead of waiting until the end.' },
  { title: 'Hand over', text: 'Deployed on your domain, with the source code and a user guide handed over.' },
];

export const reasons = [
  { title: 'Design and code by one person', text: 'What gets built matches the design, with nothing lost when work passes between people.' },
  { title: '5 years of experience', text: 'News sites, portals, event platforms, admin systems and mobile apps.' },
  { title: 'Products that are live', text: 'Most of the products above have real users every day, and you can open them yourself.' },
  { title: 'Web and mobile', text: 'One point of contact for the website, admin panel, back end and phone app.' },
];

export const faqs = [
  {
    q: 'How is pricing worked out?',
    a: 'I quote based on the scope of work after our first conversation, with payments split across delivery milestones. You know the total cost before we start.',
  },
  {
    q: 'How long does a website take?',
    a: 'It depends on the size. A landing page or company website is usually much quicker than a web app or mobile app. I give a concrete timeline together with the quote.',
  },
  {
    q: 'I don’t have a design yet. Can you still help?',
    a: 'Yes. I can design the interface in Figma for you to approve first, or work from a website you like.',
  },
  {
    q: 'Can I manage it myself after handover?',
    a: 'Yes. You get the source code, admin accounts and a user guide. If you need new features or support later, just message me.',
  },
];
