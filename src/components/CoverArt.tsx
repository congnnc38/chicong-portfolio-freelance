import Image from 'next/image';
import type { Cover } from '@/data/site';

function Phone({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={`absolute aspect-[9/19] overflow-hidden rounded-[3.2cqw] border-[0.9cqw] border-[#0d1516] bg-white shadow-[0_4cqw_8cqw_-3cqw_rgba(0,0,0,0.6)] ${className ?? ''}`}>
      <div className="mx-auto mt-[4%] h-[3%] w-[34%] rounded-full bg-[#0d1516]" />
      {children}
    </div>
  );
}

// Bìa vẽ bằng code dùng đơn vị cqw/cqh (theo khung ảnh bao ngoài) nên co giãn theo mọi kích thước.

// Mẫu ô vuông giả mã QR cho bìa NetEvent (cố định, không ngẫu nhiên)
const QR = [
  '1111111010111',
  '1000001001001',
  '1011101011101',
  '1011101000101',
  '1011101011001',
  '1000001010101',
  '1111111010111',
  '0000000011000',
  '1101011101011',
  '0110100110110',
  '1011011011101',
  '0100110100011',
  '1110101101011',
];

function QRCode() {
  return (
    <svg viewBox="0 0 13 13" className="h-full w-full" aria-hidden="true" shapeRendering="crispEdges">
      {QR.flatMap((row, y) =>
        row.split('').map((c, x) => (c === '1' ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="#0b2f4f" /> : null)),
      )}
    </svg>
  );
}

export default function CoverArt({ cover, alt, sizes, priority = false }: { cover: Cover; alt: string; sizes: string; priority?: boolean }) {
  switch (cover.kind) {
    case 'image':
      return <Image src={cover.src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover object-top" />;

    case 'kolhub':
      return (
        <div className="absolute inset-0 overflow-hidden bg-[linear-gradient(135deg,#fff4ea,#ffd6bb)]" role="img" aria-label={alt}>
          <div className="absolute -right-[6%] -bottom-[20%] h-[72%] w-[40%] rotate-[-8deg] rounded-[2cqw] bg-white shadow-[0_3cqw_6cqw_-2cqw_rgba(241,90,41,0.55)]">
            <div className="m-[9%] h-[36%] rounded-[1.4cqw] bg-[linear-gradient(135deg,#f15a29,#f7941d)]" />
            <div className="mx-[9%] h-[6%] w-[70%] rounded-full bg-[#2b2b2b]/80" />
            <div className="mx-[9%] mt-[5%] h-[5%] w-[48%] rounded-full bg-[#2b2b2b]/25" />
          </div>
          <div className="absolute top-[10%] -left-[5%] h-[50%] w-[30%] rotate-[7deg] rounded-[2cqw] bg-white/85 shadow-[0_3cqw_6cqw_-2cqw_rgba(241,90,41,0.45)]">
            <div className="m-[10%] h-[42%] rounded-[1.4cqw] bg-[#f7941d]/30" />
            <div className="mx-[10%] h-[7%] w-[60%] rounded-full bg-[#2b2b2b]/30" />
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/covers/kolhub.svg" alt="" className="absolute top-1/2 left-1/2 w-[44%] -translate-x-1/2 -translate-y-1/2" />
        </div>
      );

    case 'netevent':
      return (
        <div
          className="absolute inset-0 overflow-hidden bg-[radial-gradient(120%_120%_at_0%_0%,#7fd3ff_0%,#1eaaff_45%,#0a6fb8_100%)]"
          role="img"
          aria-label={alt}
        >
          <div className="absolute inset-y-[17%] left-1/2 flex w-[60%] -translate-x-1/2 rotate-[-4deg] overflow-hidden rounded-[2.4cqw] bg-white shadow-[0_4cqw_8cqw_-3cqw_rgba(5,40,80,0.7)]">
            <div className="flex flex-1 flex-col justify-between p-[6%]">
              <span className="text-[3.4cqw] leading-none font-bold tracking-wide text-[#1eaaff]">NetEvent</span>
              <div>
                <div className="h-[2.6cqw] w-[82%] rounded-full bg-[#0b2f4f]" />
                <div className="mt-[1.6cqw] h-[1.8cqw] w-[56%] rounded-full bg-[#0b2f4f]/30" />
              </div>
              <div className="flex gap-[6%]">
                <div className="h-[1.4cqw] w-[30%] rounded-full bg-[#1eaaff]/60" />
                <div className="h-[1.4cqw] w-[20%] rounded-full bg-[#0b2f4f]/20" />
              </div>
            </div>
            <div className="relative grid w-[38%] place-items-center border-l-2 border-dashed border-[#0b2f4f]/15 p-[6%]">
              <span className="absolute -top-[2cqw] -left-[2cqw] h-[4cqw] w-[4cqw] rounded-full bg-[#2ab0ff]" />
              <span className="absolute -bottom-[2cqw] -left-[2cqw] h-[4cqw] w-[4cqw] rounded-full bg-[#0d7cc6]" />
              <div className="aspect-square w-full">
                <QRCode />
              </div>
            </div>
          </div>
        </div>
      );

    case 'phapluat':
      return (
        <div className="absolute inset-0 overflow-hidden bg-[#fbf8f3]" role="img" aria-label={alt}>
          <div className="absolute inset-x-0 top-0 h-[5%] bg-[#c8102e]" />
          {/* Hai trang tin chồng nhau gợi ý "nhiều site dùng chung một CMS" */}
          <div className="absolute right-[7%] -bottom-[12%] h-[52%] w-[38%] rounded-t-[1.6cqw] border border-black/10 bg-white shadow-[0_3cqw_5cqw_-3cqw_rgba(0,0,0,0.35)]">
            <div className="m-[8%] h-[32%] rounded-[1cqw] bg-[#3d6fd9]/20" />
            <div className="mx-[8%] h-[6%] w-[70%] rounded-full bg-black/25" />
            <div className="mx-[8%] mt-[5%] h-[6%] w-[50%] rounded-full bg-black/10" />
          </div>
          <div className="absolute -bottom-[16%] left-[7%] h-[46%] w-[32%] rounded-t-[1.6cqw] border border-black/10 bg-white shadow-[0_3cqw_5cqw_-3cqw_rgba(0,0,0,0.3)]">
            <div className="m-[8%] h-[36%] rounded-[1cqw] bg-[#c8102e]/15" />
            <div className="mx-[8%] h-[7%] w-[60%] rounded-full bg-black/20" />
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/covers/phapluat.png" alt="" className="absolute top-[33%] left-1/2 w-[66%] -translate-x-1/2 -translate-y-1/2" />
        </div>
      );

    case 'vietpress':
      return (
        <div className="absolute inset-0 overflow-hidden bg-[#f3f2f0]" role="img" aria-label={alt}>
          <div className="absolute inset-x-[8%] top-[11%] flex gap-[3%]">
            <div className="h-[1.6cqw] flex-1 rounded-full bg-black/12" />
            <div className="h-[1.6cqw] flex-1 rounded-full bg-black/12" />
            <div className="h-[1.6cqw] flex-1 rounded-full bg-[#c62a35]/45" />
            <div className="h-[1.6cqw] flex-1 rounded-full bg-black/12" />
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/covers/vietpress.svg" alt="" className="absolute top-1/2 left-1/2 w-[58%] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute inset-x-[8%] bottom-[11%] grid grid-cols-3 gap-[3%]">
            <div className="h-[7cqh] rounded-[0.8cqw] bg-black/8" />
            <div className="h-[7cqh] rounded-[0.8cqw] bg-black/8" />
            <div className="h-[7cqh] rounded-[0.8cqw] bg-black/8" />
          </div>
        </div>
      );

    case 'thienkhoi':
      return (
        <div className="absolute inset-0 overflow-hidden bg-white" role="img" aria-label={alt}>
          <div className="absolute inset-y-[6%] right-[4%] w-[46%]">
            <Image src="/covers/thienkhoi-photo.webp" alt="" fill sizes="30vw" className="object-contain" />
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/covers/thienkhoi.svg" alt="" className="absolute top-1/2 left-[7%] w-[40%] -translate-y-1/2" />
        </div>
      );

    case 'mobile':
      // Hai điện thoại: TKG Proptech (kho nguồn hàng) và Thiên Khôi HRM (sự kiện, điểm danh)
      return (
        <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(120%_120%_at_20%_0%,#ffe2c7_0%,#f5a25d_45%,#b8541c_100%)]" role="img" aria-label={alt}>
          <Phone className="top-[10%] left-[22%] w-[23%] rotate-[-7deg]">
            <div className="mx-[8%] mt-[8%] h-[4%] w-[60%] rounded-full bg-[#b8541c]/70" />
            <div className="mx-[8%] mt-[6%] h-[6%] rounded-[1cqw] bg-black/8" />
            {[0, 1, 2].map((i) => (
              <div key={i} className="mx-[8%] mt-[6%] flex gap-[6%] rounded-[1.2cqw] bg-[#fff4ea] p-[6%]">
                <div className="aspect-square w-[34%] rounded-[0.8cqw] bg-[#f5a25d]/60" />
                <div className="flex-1 space-y-[12%] pt-[4%]">
                  <div className="h-[1cqw] w-[90%] rounded-full bg-black/35" />
                  <div className="h-[1cqw] w-[60%] rounded-full bg-black/15" />
                  <div className="h-[1.3cqw] w-[48%] rounded-full bg-[#e8452f]/70" />
                </div>
              </div>
            ))}
          </Phone>
          <Phone className="top-[16%] left-[53%] w-[23%] rotate-[6deg]">
            <div className="mx-[8%] mt-[8%] flex gap-[5%]">
              {['bg-[#1b6fd1]', 'bg-black/10', 'bg-black/10'].map((c, i) => (
                <div key={i} className={`h-[2.2cqw] flex-1 rounded-full ${c}`} />
              ))}
            </div>
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="mx-[8%] mt-[6%] flex items-center gap-[6%]">
                <div className="aspect-square w-[16%] rounded-full bg-[#1b6fd1]/25" />
                <div className="h-[1cqw] flex-1 rounded-full bg-black/25" />
                <div className={`aspect-square w-[10%] rounded-[0.4cqw] ${i % 2 ? 'bg-black/10' : 'bg-[#2fb36d]'}`} />
              </div>
            ))}
          </Phone>
        </div>
      );

    case 'thienviet':
      // App Thiên Việt ID: luồng đặt cà phê
      return (
        <div className="absolute inset-0 overflow-hidden bg-[linear-gradient(135deg,#123c33,#1f6b57_55%,#d9b779)]" role="img" aria-label={alt}>
          <div className="absolute top-[18%] left-[10%] w-[34%] space-y-[1.4cqw]">
            <div className="h-[2.6cqw] w-[80%] rounded-full bg-white/85" />
            <div className="h-[1.4cqw] w-[60%] rounded-full bg-white/40" />
            <div className="mt-[3cqw] flex gap-[1.4cqw]">
              {['Ví', 'Chat', 'Đặt món'].map((t) => (
                <span key={t} className="rounded-full bg-white/15 px-[1.4cqw] py-[0.5cqw] text-[1.5cqw] text-white/85">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <Phone className="top-[9%] right-[16%] w-[25%] rotate-[4deg]">
            <div className="mx-[8%] mt-[8%] h-[16%] rounded-[1.4cqw] bg-[linear-gradient(135deg,#6b3f22,#c08552)]" />
            <div className="mx-[8%] mt-[6%] flex gap-[5%]">
              {[0, 1, 2].map((i) => (
                <div key={i} className={`h-[1.8cqw] flex-1 rounded-full ${i === 0 ? 'bg-[#1f6b57]' : 'bg-black/10'}`} />
              ))}
            </div>
            {[0, 1, 2].map((i) => (
              <div key={i} className="mx-[8%] mt-[6%] flex items-center gap-[6%]">
                <div className="aspect-square w-[26%] rounded-[1cqw] bg-[#c08552]/45" />
                <div className="flex-1 space-y-[1cqw]">
                  <div className="h-[1cqw] w-[85%] rounded-full bg-black/35" />
                  <div className="h-[1cqw] w-[45%] rounded-full bg-[#1f6b57]/60" />
                </div>
              </div>
            ))}
            <div className="absolute inset-x-[8%] bottom-[5%] h-[7%] rounded-full bg-[#1f6b57]" />
          </Phone>
        </div>
      );

    case 'templates':
      // Một bộ mã, nhiều toà soạn: ba trang tin cùng khung, khác màu và font
      return (
        <div className="absolute inset-0 overflow-hidden bg-[#ecebe6]" role="img" aria-label={alt}>
          {[
            { c: '#b3122e', l: '8%', t: '22%', r: '-5deg', z: 1 },
            { c: '#1d1d1f', l: '33%', t: '14%', r: '0deg', z: 3 },
            { c: '#0f6c5a', l: '58%', t: '22%', r: '5deg', z: 2 },
          ].map((s, i) => (
            <div
              key={i}
              className="absolute h-[70%] w-[34%] overflow-hidden rounded-[1.4cqw] bg-white shadow-[0_3cqw_6cqw_-3cqw_rgba(0,0,0,0.45)]"
              style={{ left: s.l, top: s.t, rotate: s.r, zIndex: s.z }}
            >
              <div className="h-[11%]" style={{ background: s.c }} />
              <div className="m-[7%] h-[34%] rounded-[0.8cqw]" style={{ background: `color-mix(in oklab, ${s.c} 22%, white)` }} />
              <div className="mx-[7%] h-[4%] w-[80%] rounded-full bg-black/40" />
              <div className="mx-[7%] mt-[4%] h-[3%] w-[60%] rounded-full bg-black/15" />
              <div className="mx-[7%] mt-[7%] grid grid-cols-2 gap-[6%]">
                <div className="h-[6cqh] rounded-[0.6cqw] bg-black/8" />
                <div className="h-[6cqh] rounded-[0.6cqw] bg-black/8" />
              </div>
            </div>
          ))}
        </div>
      );
  }
}
