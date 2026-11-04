import Image from 'next/image';
import { contact } from '@/data/site';
import { getContent, type Lang } from '@/i18n';
import { ArrowUpRight, Chat, LinkedIn, Mail, Phone, Plus } from './Icons';
import { CountUp, Drift, Float, Magnetic, Pop, ScrollLine, Spotlight, Tilt, Words } from './fx';
import { Eyebrow, Reveal, btnPrimary } from './ui';

export function Services({ lang }: { lang: Lang }) {
  const { t, services } = getContent(lang);
  return (
    <section id="dich-vu" aria-labelledby="t-services" className="relative isolate overflow-hidden bg-night text-snow">
      <Drift className="absolute -top-40 -left-40 -z-10 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,91,46,0.18),transparent)]" x={80} y={60} duration={18} />
      <div className="mx-auto max-w-[76rem] px-5 py-24 sm:px-8 md:py-32">
        <Reveal className="grid gap-6 lg:grid-cols-[1fr_minmax(0,26rem)] lg:items-end">
          <div>
            <Eyebrow light>{t.services.eyebrow}</Eyebrow>
            <h2 id="t-services" className="heading mt-4 text-[clamp(2.2rem,5vw,3.6rem)]">
              <Words text={t.services.title} />
            </h2>
          </div>
          <p className="text-snow/70">{t.services.intro}</p>
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={(i % 3) * 0.08} className="h-full">
                <Spotlight className="group h-full overflow-hidden rounded-[1.5rem] bg-white/[0.04] ring-1 ring-white/10 transition-[background-color,box-shadow] duration-500 hover:bg-white/[0.07] hover:ring-accent/50">
                  <div className="relative flex h-full flex-col p-7 sm:p-8">
                    <div className="flex items-center justify-between">
                      <span className="text-[2.6rem] leading-none font-extrabold tracking-tight text-white/15 transition-colors duration-500 group-hover:text-accent">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="grid h-10 w-10 -rotate-45 place-items-center rounded-full ring-1 ring-white/20 transition-all duration-500 group-hover:rotate-0 group-hover:bg-accent group-hover:ring-accent">
                        <ArrowUpRight />
                      </span>
                    </div>
                    <h3 className="mt-6 text-[1.3rem] leading-snug font-extrabold tracking-tight">{s.title}</h3>
                    <p className="mt-3 text-snow/70">{s.text}</p>
                    <p className="mt-auto pt-6 text-sm text-snow/50">
                      <span className="font-semibold text-snow/80">{t.services.example}</span> {s.example}
                    </p>
                  </div>
                </Spotlight>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Process({ lang }: { lang: Lang }) {
  const { t, steps } = getContent(lang);
  return (
    <section id="quy-trinh" aria-labelledby="t-process" className="mx-auto max-w-[76rem] px-5 py-24 sm:px-8 md:py-32">
      <Reveal>
        <Eyebrow>{t.process.eyebrow}</Eyebrow>
        <h2 id="t-process" className="heading mt-4 text-[clamp(2.2rem,5vw,3.6rem)]">
          <Words text={t.process.title} />
        </h2>
      </Reveal>
      <div className="relative mt-14">
        {/* đường nối các bước, dài ra khi cuộn */}
        <ScrollLine className="absolute top-[1.375rem] right-[10%] left-[10%] hidden h-[3px] md:block" />
        <ol className="relative grid gap-4 md:grid-cols-5">
          {steps.map((s, i) => (
            <li key={s.title} className="flex gap-4 md:block">
              <Pop delay={i * 0.12} className="relative z-10 shrink-0 md:mx-auto md:w-fit">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-accent text-[1rem] font-bold text-white shadow-[0_0_0_6px_var(--color-paper)]">
                  {i + 1}
                </span>
              </Pop>
              <Reveal delay={0.1 + i * 0.12} className="flex-1 md:mt-5">
                <div className="h-full rounded-[1.5rem] bg-card p-6 ring-1 ring-line transition-transform duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_40px_-28px_rgba(23,20,15,0.45)]">
                  <h3 className="text-[1.15rem] font-extrabold tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-[0.97rem] text-ink-soft">{s.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function About({ lang }: { lang: Lang }) {
  const { t, products, reasons } = getContent(lang);
  const liveCount = products.filter((p) => p.link && !p.status).length;
  const stats = [
    { n: 5, label: t.about.stats[0] },
    { n: products.length, label: t.about.stats[1] },
    { n: liveCount, label: t.about.stats[2] },
  ];
  return (
    <section id="ve-toi" aria-labelledby="t-about" className="bg-paper-2/70">
      <div className="mx-auto grid max-w-[76rem] gap-12 px-5 py-24 sm:px-8 md:py-32 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16">
        <Reveal className="relative">
          <Tilt className="rounded-[1.75rem]" max={7}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-[#37546a]">
              <Image src="/avatar.jpg" alt={t.about.photoAlt} fill sizes="(min-width: 1024px) 22rem, 92vw" className="object-cover object-top" />
            </div>
          </Tilt>
          <Float className="absolute -right-3 bottom-8 sm:-right-6" duration={5} distance={8}>
            <span className="block rounded-2xl bg-card px-4 py-3 text-sm font-semibold shadow-xl ring-1 ring-line">
              {t.about.badge[0]}
              <span className="text-accent-ink">{t.about.badge[1]}</span>
            </span>
          </Float>
        </Reveal>
        <div>
          <Reveal>
            <Eyebrow>{t.about.eyebrow}</Eyebrow>
            <h2 id="t-about" className="heading mt-4 text-[clamp(2.2rem,5vw,3.6rem)]">
              <Words text={t.about.title} />
            </h2>
            <p className="mt-6 max-w-[60ch] text-[1.1rem] text-ink-soft">{t.about.body}</p>
          </Reveal>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-y border-line py-6">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-[clamp(2rem,4.5vw,3rem)] leading-none font-extrabold tracking-tight text-accent-ink">
                  <CountUp to={s.n} />
                </dd>
                <dd className="mt-2 text-sm text-ink-soft">{s.label}</dd>
              </Reveal>
            ))}
          </dl>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <li key={r.title}>
                <Reveal delay={i * 0.08} className="h-full">
                  <div className="group h-full rounded-[1.5rem] bg-card p-6 ring-1 ring-line transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_40px_-28px_rgba(23,20,15,0.45)] hover:ring-accent/40">
                    <span aria-hidden="true" className="block h-1 w-8 rounded-full bg-accent transition-all duration-500 group-hover:w-16" />
                    <h3 className="mt-4 text-[1.1rem] font-extrabold tracking-tight">{r.title}</h3>
                    <p className="mt-2 text-[0.97rem] text-ink-soft">{r.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Faq({ lang }: { lang: Lang }) {
  const { t, faqs } = getContent(lang);
  return (
    <section id="hoi-dap" aria-labelledby="t-faq" className="mx-auto grid max-w-[76rem] gap-10 px-5 py-24 sm:px-8 md:py-32 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16">
      <Reveal>
        <Eyebrow>{t.faq.eyebrow}</Eyebrow>
        <h2 id="t-faq" className="heading mt-4 text-[clamp(2.2rem,5vw,3.2rem)]">
          <Words text={t.faq.title} />
        </h2>
      </Reveal>
      <div className="divide-y divide-line border-y border-line">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 0.06}>
            <details className="faq group py-2">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-[1.12rem] font-bold tracking-tight transition-colors hover:text-accent-ink [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full ring-1 ring-line transition-all duration-300 group-open:rotate-45 group-open:bg-accent group-open:text-white group-open:ring-accent">
                  <Plus />
                </span>
              </summary>
              <p className="max-w-[62ch] pb-5 text-ink-soft">{f.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Contact({ lang }: { lang: Lang }) {
  const { t } = getContent(lang);
  const L = t.contact.labels;
  const email = { Icon: Mail, label: L.email, value: contact.email, href: t.contact.mail, ext: false };
  const zalo = { Icon: Chat, label: L.zalo, value: contact.phone, href: contact.zalo, ext: true };
  const phone = { Icon: Phone, label: L.phone, value: contact.phone, href: contact.phoneHref, ext: false };
  const linkedin = { Icon: LinkedIn, label: L.linkedin, value: 'in/ngonguyenchicong', href: contact.linkedin, ext: true };
  // Bản tiếng Anh đưa email lên đầu, bản tiếng Việt đưa Zalo lên đầu
  const items = lang === 'en' ? [email, linkedin, zalo, phone] : [zalo, phone, email, linkedin];
  const CtaIcon = t.cta.external ? Chat : Mail;
  return (
    <section id="lien-he" aria-labelledby="t-contact" className="px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-accent text-white">
        <Drift className="absolute -top-40 -right-32 -z-10 h-[34rem] w-[34rem] rounded-full bg-white/10" x={-60} y={40} duration={15} />
        <Drift className="absolute -bottom-52 -left-24 -z-10 h-[30rem] w-[30rem] rounded-full bg-black/10" x={70} y={-30} duration={18} delay={2} />
        <Drift className="absolute top-[30%] right-[18%] -z-10 hidden h-24 w-24 rounded-3xl bg-white/15 md:block" x={-30} y={50} duration={11} delay={1} />
        <div className="mx-auto max-w-[76rem] px-5 py-20 sm:px-8 md:py-28">
          <h2 id="t-contact" className="heading max-w-[16ch] text-[clamp(2.4rem,6vw,4.4rem)]">
            <Words text={t.contact.title} stagger={0.06} />
          </h2>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-[52ch] text-[1.12rem] text-white/85">{t.contact.body}</p>
            <Magnetic className="mt-9">
              <a
                href={t.cta.href}
                {...(t.cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={`${btnPrimary} shine h-14 bg-[#17140f] px-7 text-[1.05rem] hover:bg-black`}
              >
                <CtaIcon />
                {t.cta.now}
              </a>
            </Magnetic>
          </Reveal>
          <ul className={`mt-14 grid gap-3 sm:grid-cols-2 ${lang === 'en' ? 'lg:grid-cols-[1.4fr_1fr_1fr_1fr]' : 'lg:grid-cols-[1fr_1fr_1.4fr_1fr]'}`}>
            {items.map(({ Icon, label, value, href, ext }, i) => (
              <li key={label}>
                <Reveal delay={0.1 + i * 0.08} className="h-full">
                  <a
                    href={href}
                    {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex h-full items-center gap-4 rounded-2xl bg-white/12 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/22"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-[#d23f12] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-8deg]">
                      <Icon size={18} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-white/75">{label}</span>
                      <span className="block font-bold [overflow-wrap:anywhere]">{value}</span>
                    </span>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Footer({ lang }: { lang: Lang }) {
  const { t } = getContent(lang);
  return (
    <footer className="mx-auto flex max-w-[76rem] flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-ink-soft sm:px-8">
      <p>
        © {new Date().getFullYear()} {contact.name}
      </p>
      <p>{t.footer}</p>
    </footer>
  );
}
