import Image from 'next/image';
import type { ReactNode } from 'react';
import type { Product } from '@/data/site';
import CoverArt from './CoverArt';
import PageShot from './PageShot';

export const ease = [0.22, 1, 0.36, 1] as const;

export { default as Reveal } from './Reveal';

export const btnPrimary =
  'inline-flex h-12 items-center gap-2.5 rounded-full bg-accent px-6 font-semibold text-white transition-colors hover:bg-accent-deep';
export const btnDark =
  'inline-flex h-12 items-center gap-2.5 rounded-full bg-ink px-6 font-semibold text-paper transition-colors hover:bg-accent-deep hover:text-white';
export const btnLine =
  'inline-flex h-12 items-center gap-2.5 rounded-full border border-ink/20 px-6 font-semibold transition-colors hover:border-ink';

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`flex items-center gap-2.5 text-sm font-semibold tracking-wide uppercase ${light ? 'text-snow/70' : 'text-ink-soft'}`}>
      <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
      {children}
    </p>
  );
}

// Ảnh sản phẩm đặt trên nền màu thương hiệu, như một tấm ảnh chụp sản phẩm.
// Truyền `live` và sản phẩm có ảnh chụp toàn trang (page) thì hiện khung trình duyệt:
// live="hover" tự cuộn khi rê chuột (thẻ sản phẩm), live="scroll" cho người xem tự cuộn (hộp thoại).
export function Shot({
  p,
  sizes,
  alt,
  className = '',
  priority = false,
  eager = false,
  bare = false,
  live,
  pageAlt,
  hint,
}: {
  p: Product;
  sizes: string;
  alt?: string;
  className?: string;
  priority?: boolean;
  eager?: boolean;
  /** chỉ áp dụng cho ảnh chụp toàn trang: bỏ nền màu bao quanh để ảnh phủ kín thẻ */
  bare?: boolean;
  live?: 'hover' | 'scroll';
  pageAlt?: string;
  hint?: string;
}) {
  if (live && p.page) {
    return (
      <PageShot
        p={{ ...p, page: p.page }}
        sizes={sizes}
        alt={pageAlt ?? alt ?? p.name}
        mode={live}
        hint={hint}
        priority={priority}
        eager={eager}
        bare={bare}
      />
    );
  }
  const bg = `linear-gradient(160deg, color-mix(in oklab, ${p.color} 26%, var(--shot-a)), color-mix(in oklab, ${p.color} 48%, var(--shot-b)))`;
  // Ảnh ghép (điện thoại, cửa sổ trình duyệt) đã có bóng đổ và nền trong suốt: phủ kín thẻ, không cần khung trắng
  if (p.cover.kind === 'scene') {
    return (
      <div className={`relative aspect-[4/3] overflow-hidden ${className}`} style={{ background: bg }}>
        <Image
          src={p.cover.src}
          alt={alt ?? p.name}
          fill
          sizes={sizes}
          priority={priority}
          className="object-contain transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[1.5%] group-hover:scale-[1.03]"
        />
      </div>
    );
  }
  const ratio = p.cover.kind === 'image' ? p.cover.w / p.cover.h : 16 / 10;
  return (
    <div
      className={`relative grid aspect-[4/3] place-items-center overflow-hidden [container-type:size] ${className}`}
      style={{ background: bg }}
    >
      <div
        className="relative overflow-hidden rounded-[max(8px,1.6cqw)] bg-white shadow-[0_3cqh_7cqh_-2cqh_rgba(23,20,15,0.45)] ring-1 ring-black/5 [container-type:size] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[1.5cqh] group-hover:scale-[1.03]"
        style={{ width: `min(84cqw, ${(78 * ratio).toFixed(2)}cqh)`, aspectRatio: ratio }}
      >
        <CoverArt cover={p.cover} alt={alt ?? p.name} sizes={sizes} priority={priority} />
      </div>
    </div>
  );
}
