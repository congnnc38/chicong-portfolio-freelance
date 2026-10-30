'use client';

import { AnimatePresence, LayoutGroup, motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import type { Category, Product } from '@/data/site';
import { getContent, type Lang } from '@/i18n';
import { ArrowRight, ArrowUpRight, Chat, Check, Close, Mail } from './Icons';
import { Eyebrow, Reveal, Shot, btnPrimary, ease } from './ui';
import { Magnetic, Tilt, Words, useTouchLive } from './fx';

type Filter = 'all' | Category;

export default function Products({ lang }: { lang: Lang }) {
  const { t, products, categories } = getContent(lang);
  const catLabel = (c: Category) => categories.find((x) => x.id === c)!.label;
  const [filter, setFilter] = useState<Filter>('all');
  const [open, setOpen] = useState<Product | null>(null);
  const list = filter === 'all' ? products : products.filter((p) => p.category === filter);
  const count = (f: Filter) => (f === 'all' ? products.length : products.filter((p) => p.category === f).length);
  const tabs: { id: Filter; label: string }[] = [{ id: 'all', label: t.products.all }, ...categories];

  // Điện thoại không rê chuột được: thẻ nào đi qua giữa màn hình thì trang trong thẻ tự cuộn
  useTouchLive('#san-pham', [filter]);

  return (
    <section id="san-pham" aria-labelledby="t-products" className="mx-auto max-w-[76rem] px-5 py-24 sm:px-8 md:py-32">
      <Reveal className="grid gap-6 lg:grid-cols-[1fr_minmax(0,26rem)] lg:items-end">
        <div>
          <Eyebrow>{t.products.eyebrow}</Eyebrow>
          <h2 id="t-products" className="heading mt-4 text-[clamp(2.2rem,5vw,3.6rem)]">
            <Words text={t.products.title(products.length)} />
          </h2>
        </div>
        <p className="text-ink-soft">{t.products.intro}</p>
      </Reveal>

      <LayoutGroup>
        <div role="group" aria-label={t.products.filterLabel} className="mt-10 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]">
          {tabs.map((t) => {
            const on = filter === t.id;
            return (
              <Magnetic key={t.id} strength={0.25} className="shrink-0">
              <button
                type="button"
                aria-pressed={on}
                onClick={() => setFilter(t.id)}
                className={`relative shrink-0 rounded-full px-4 py-2.5 text-[0.95rem] font-semibold whitespace-nowrap transition-colors ${
                  on ? 'text-paper' : 'text-ink-soft ring-1 ring-line hover:text-ink'
                }`}
              >
                {on && <motion.span layoutId="tab" transition={{ duration: 0.35, ease }} className="absolute inset-0 rounded-full bg-ink" />}
                <span className="relative">
                  {t.label} <span className="opacity-60">{count(t.id)}</span>
                </span>
              </button>
              </Magnetic>
            );
          })}
        </div>
      </LayoutGroup>

      <ul className="mt-8 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence initial={false} mode="popLayout">
          {list.map((p, i) => (
            <motion.li
              key={p.id}
              layout
              initial={{ opacity: 0, y: 48, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '0px 0px -8% 0px' }}
              exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.25 } }}
              transition={{ duration: 0.75, ease, delay: (i % 3) * 0.09 }}
            >
              <button
                type="button"
                onClick={() => setOpen(p)}
                aria-haspopup="dialog"
                data-cursor="view"
                data-cursor-label={t.products.cursor}
                data-live={p.page ? '' : undefined}
                className="group block w-full text-left"
              >
                <Tilt className="block rounded-[1.5rem]" max={6}>
                  <span className="block overflow-hidden rounded-[1.5rem] ring-1 ring-black/5 transition-shadow duration-500 group-hover:shadow-[0_30px_60px_-30px_rgba(23,20,15,0.5)]">
                    <Shot
                      p={p}
                      live="hover"
                      alt={`${t.products.shotAlt} ${p.name}`}
                      pageAlt={`${t.products.pageAlt} ${p.name}`}
                      sizes="(min-width: 1024px) 21rem, (min-width: 768px) 40vw, 80vw"
                    />
                  </span>
                </Tilt>
                <span className="mt-5 flex items-center gap-2 text-sm font-semibold text-ink-soft">
                  {catLabel(p.category)}
                  {p.status && <span className="rounded-full bg-paper-2 px-2 py-0.5 text-[0.78rem] text-ink">{p.status}</span>}
                </span>
                <span className="mt-1.5 block text-[1.5rem] leading-tight font-extrabold tracking-tight transition-colors duration-300 group-hover:text-accent-ink">{p.name}</span>
                <span className="mt-2 block text-ink-soft">{p.pitch}</span>
                <span className="mt-4 inline-flex items-center gap-1.5 font-semibold text-accent-ink">
                  {t.products.more}
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      <ProductDialog p={open} lang={lang} catLabel={catLabel} onClose={() => setOpen(null)} />
    </section>
  );
}

function ProductDialog({
  p,
  lang,
  catLabel,
  onClose,
}: {
  p: Product | null;
  lang: Lang;
  catLabel: (c: Category) => string;
  onClose: () => void;
}) {
  const { t } = getContent(lang);
  const CtaIcon = t.cta.external ? Chat : Mail;
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (p && !d.open) d.showModal();
    if (!p && d.open) d.close();
  }, [p]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      aria-labelledby="dlg-title"
      className="m-auto max-h-[92dvh] w-[min(64rem,calc(100vw-1.5rem))] overflow-y-auto overscroll-contain rounded-[1.75rem] bg-paper p-0 text-ink shadow-2xl"
    >
      {p && (
        <div>
          <div className="relative">
            <Shot
              p={p}
              live="scroll"
              alt={`${t.products.shotAlt} ${p.name}`}
              pageAlt={`${t.products.pageAlt} ${p.name}`}
              hint={t.products.scrollHint}
              sizes="(min-width: 1024px) 58rem, 92vw"
              className="aspect-[16/9]! sm:aspect-[21/9]!"
            />
            <button
              type="button"
              onClick={onClose}
              aria-label={t.products.close}
              autoFocus
              className="absolute top-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-paper/90 shadow-md backdrop-blur transition-colors hover:bg-card"
            >
              <Close />
            </button>
          </div>

          <div className="grid gap-10 p-6 sm:p-10 md:grid-cols-[minmax(0,1fr)_16rem]">
            <div>
              <p className="text-sm font-semibold text-ink-soft">
                {catLabel(p.category)} · {p.year}
              </p>
              <h3 id="dlg-title" className="heading mt-2 text-[clamp(1.9rem,4vw,2.8rem)]">
                {p.name}
              </h3>
              <p className="mt-3 text-[1.1rem]">{p.pitch}</p>

              <h4 className="mt-8 text-sm font-bold tracking-wide text-ink-soft uppercase">{t.products.need}</h4>
              <p className="mt-2 leading-relaxed">{p.need}</p>

              <h4 className="mt-8 text-sm font-bold tracking-wide text-ink-soft uppercase">{t.products.built}</h4>
              <ul className="mt-3 space-y-2.5">
                {p.built.map((b, i) => (
                  <motion.li
                    key={`${p.id}-${b}`}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease, delay: 0.2 + i * 0.07 }}
                    className="flex gap-3"
                  >
                    <Check className="mt-1 shrink-0 text-accent-ink" />
                    <span>{b}</span>
                  </motion.li>
                ))}
              </ul>

              {p.highlight && (
                <p className="mt-8 rounded-2xl bg-card p-5 font-semibold ring-1 ring-line">
                  <span aria-hidden="true" className="mr-2 text-accent">★</span>
                  {p.highlight}
                </p>
              )}
            </div>

            <aside className="space-y-6 md:border-l md:border-line md:pl-8">
              <div>
                <h4 className="text-sm font-bold tracking-wide text-ink-soft uppercase">{t.products.role}</h4>
                <p className="mt-1.5 font-semibold">{p.role}</p>
              </div>
              {p.status && (
                <div>
                  <h4 className="text-sm font-bold tracking-wide text-ink-soft uppercase">{t.products.status}</h4>
                  <p className="mt-1.5 font-semibold">{p.status}</p>
                </div>
              )}
              <div>
                <h4 className="text-sm font-bold tracking-wide text-ink-soft uppercase">{t.products.tech}</h4>
                <p className="mt-1.5 text-ink-soft">{p.tech.join(' · ')}</p>
              </div>
              {p.link && (
                <a
                  href={p.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-sweep inline-flex items-center gap-2 pb-0.5 font-semibold text-accent-ink"
                >
                  {p.link.label}
                  <ArrowUpRight />
                </a>
              )}
              <div className="rounded-2xl bg-ink p-5 text-paper">
                <p className="font-semibold">{t.products.similar}</p>
                <a
                  href={t.cta.href}
                  {...(t.cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={`${btnPrimary} mt-4 h-11 px-5 text-[0.95rem]`}
                >
                  <CtaIcon />
                  {t.cta.label}
                </a>
              </div>
            </aside>
          </div>
        </div>
      )}
    </dialog>
  );
}
