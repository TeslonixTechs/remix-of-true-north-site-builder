import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Clock, PackageOpen, Recycle, ShieldCheck } from "lucide-react";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import logoBlack from "@/assets/logo-black.png.asset.json";
import logoWhite from "@/assets/logo-white.png.asset.json";
import heroImg from "@/assets/hero-junk.jpg.asset.json";
import { LOCATIONS, OTHER_SERVICE_KEYWORDS } from "@/lib/site-data";

const PROMISES = [
  {
    icon: Clock,
    title: "On-time",
    body: "Our team calls 30 minutes before arrival so you know exactly when we're pulling up.",
  },
  {
    icon: PackageOpen,
    title: "We remove anything",
    body: "Virtually anything except hazardous waste. Just point — we do the rest.",
  },
  {
    icon: Recycle,
    title: "Recycle & donate",
    body: "We partner with local charities and recyclers to extend the life of your junk.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & insured",
    body: "100% licensed and insured for junk removal. Your home and belongings are safe with us.",
  },
];


const PHONE_DISPLAY = "(365) 361-5865";
const TEL = "tel:+13653615865";
const SMS = "sms:+13653615865";
const EMAIL = "truenorthjunksolutions@gmail.com";
// [DEV] Replace with the real Jobber online request-form URL.
const JOBBER_REQUEST_URL = "#estimate";
// [DEV] Replace with the real Jobber client hub URL.
const JOBBER_CLIENT_HUB_URL = "#client-login";

const TOWNS = [
  "Uxbridge",
  "Port Perry",
  "Goodwood",
  "Zephyr",
  "Sunderland",
  "Stouffville",
  "Ballantrae",
  "Mount Albert",
  "Sandford",
  "Leaskdale",
];

const SERVICES = [
  "Furniture removal",
  "Mattress disposal",
  "Garage cleanouts",
  "Full house cleanouts",
  "Appliance removal",
  "Construction & renovation debris",
  "Estate cleanouts",
  "Basement cleanouts",
  "Office & commercial cleanouts",
  "Same-day / emergency cleanups",
  "Scrap metal",
  "Junk donations & recycling",
];

const REVIEWS = [
  {
    name: "Joanne B.",
    text: "Comparable to the big franchises — but I was glad to give a local company my business.",
  },
  {
    name: "David O.",
    text: "True to their word, like it should be. Great service, great guys — highly recommend.",
  },
  {
    name: "Harold H.",
    text: "No gimmicks — just honest, trustworthy people doing a great job. My go-to from now on.",
  },
  {
    name: "Pam M.",
    text: "They worked hard to fill the truck for the best bang for the buck. Went above and beyond.",
  },
  {
    name: "Sue W.",
    text: "Shawn and Cody were fast, efficient, and had great attitudes. Recommend with confidence.",
  },
  {
    name: "Stephanie P.",
    text: "Arrived on time, professional and efficient — everything gone in no time.",
  },
];

const FAQS = [
  {
    q: "How much does junk removal cost in Uxbridge?",
    a: "We price by volume — how much space your items take up in the truck — so you only pay for what you actually have, whether it's a single item or a full load. Every quote is free and upfront: text a photo or book a quick on-site look and we'll give you a firm price before we lift a thing.",
  },
  {
    q: "What items do you take?",
    a: "Furniture, mattresses, appliances, garage and basement junk, renovation and construction debris, yard waste, electronics, scrap metal, and full estate or home cleanouts. If it fits in the truck, it's likely gone — just ask.",
  },
  {
    q: "What can't you take?",
    a: "For safety and Ontario regulations, we can't haul hazardous materials like chemicals, fuel, paint, propane, asbestos, or biohazard waste. Not sure about an item? Call and we'll point you in the right direction.",
  },
  {
    q: "Do I need to be home for the pickup?",
    a: "We recommend it so you can approve the price and point out exactly what goes, but if you can't be there we'll arrange it over the phone. Either way, we call ahead so you know when we're on the way.",
  },
  {
    q: "Can you remove a single item, or only full loads?",
    a: "Both. One couch or a whole house — you only pay for the space your junk takes up in the truck.",
  },
  {
    q: "How do you handle stairs and heavy items?",
    a: "That's the job. Our crew does all the lifting and carrying — basements, upstairs, backyards, wherever it sits. You don't move a thing.",
  },
  {
    q: "Is your service suitable for renovation and construction debris?",
    a: "Yes. We regularly clear drywall, wood, flooring, fixtures, and general reno debris so you can keep your project moving. (Very heavy material like concrete or brick may be priced separately — just ask.)",
  },
  {
    q: "How quickly can you schedule a pickup?",
    a: "Often same day or next day. Call or text and we'll get you the soonest window we've got.",
  },
  {
    q: "Do you recycle or donate?",
    a: "Yes. We sort usable items for donation and recycle what we can before anything heads to the landfill. Less waste, more second life.",
  },
  {
    q: "Do you support community initiatives?",
    a: "A portion of every load goes back to youth sports programs in our community. Clearing your clutter helps fund local kids' teams.",
  },
  {
    q: "What areas do you serve?",
    a: "We're based in Uxbridge and serve the surrounding townships: Port Perry, Goodwood, Zephyr, Sunderland, Stouffville, Ballantrae, Mount Albert and nearby. A little further out? Give us a call.",
  },
  {
    q: "Are you insured?",
    a: "Yes — True North Junk Solutions is fully insured, so your home and belongings are protected from the moment we arrive to the final sweep-up.",
  },
];

const TITLE = "Junk Removal Uxbridge | Same-Day Pickup | True North Junk Solutions";
const DESCRIPTION =
  "Local, reliable junk removal in Uxbridge & surrounding towns. Furniture, appliance, garage & estate cleanouts, construction debris. Free estimates, same-day service. Call (365) 361-5865.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "True North Junk Solutions",
          slogan: "True to our word.",
          telephone: "+1-365-361-5865",
          email: EMAIL,
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Uxbridge",
            addressRegion: "ON",
            addressCountry: "CA",
          },
          areaServed: TOWNS.map((t) => ({ "@type": "City", name: t })),
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "15",
          },
          sameAs: ["https://www.instagram.com/truenorthjunksolutions1"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

function Leaf({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M12 2l1.6 4.2 3.1-2-.9 4 3.4-.8-1.6 3 2.4 1.4-4.6 2 .5 2.2-4-1.1V22h-1.8v-7.1l-4 1.1.5-2.2-4.6-2L4.4 10.4l-1.6-3 3.4.8-.9-4 3.1 2L12 2z" />
    </svg>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="label-eyebrow mb-4 flex items-center gap-2 text-[color:var(--maple)]">
      <Leaf className="h-3.5 w-3.5" />
      {children}
    </p>
  );
}

function Stars({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`tracking-[0.15em] text-[color:var(--maple)] ${className}`}>
      ★★★★★
    </span>
  );
}

function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Index() {
  useReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[color:var(--bone)]">
      <a
        href="#main"
        className="label-eyebrow sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-[color:var(--maple)] focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[color:var(--ink)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <a href="#top" className="flex items-center">
            <img
              src={logoWhite.url}
              alt="True North Junk Solutions — junk removal in Uxbridge, Ontario"
              className="h-12 w-auto md:h-14"
              width={120}
              height={120}
            />
          </a>
          <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
            {[
              ["How it works", "#how-it-works"],
              ["What we haul", "#services"],
              ["Why us", "#why-us"],
              ["Reviews", "#reviews"],
              ["FAQ", "#faq"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="label-eyebrow text-[color:var(--muted-dark)] transition-colors hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={TEL}
              className="label-eyebrow hidden text-white transition-colors hover:text-[color:var(--maple)] md:inline"
            >
              {PHONE_DISPLAY}
            </a>
            <a href={JOBBER_REQUEST_URL} className="btn-base btn-primary hidden sm:inline-flex">
              Get an estimate
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* HERO */}
        <section id="top" className="relative overflow-hidden bg-[color:var(--ink)] px-4 py-16 md:py-28">
          <img
            src={heroImg.url}
            alt="True North Junk Solutions crew loading a couch into the truck in Uxbridge, Ontario"
            className="absolute inset-0 h-full w-full object-cover opacity-70"
            width={1920}
            height={1088}
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-[color:var(--ink)]/85 via-[color:var(--ink)]/60 to-[color:var(--ink)]"
          />
          <div className="relative mx-auto max-w-4xl text-center">

            <p className="label-eyebrow mb-5 flex items-center justify-center gap-2 text-[color:var(--maple)]">
              <Leaf className="h-3.5 w-3.5" />
              True to our word · Uxbridge, Ontario
            </p>
            <h1 className="text-5xl text-white sm:text-6xl md:text-8xl">
              Junk Removal in Uxbridge,
              <br />
              <span className="text-[color:var(--maple)]">Done Right.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-[color:var(--muted-dark)] md:text-lg">
              Fast, friendly junk removal and cleanouts for Uxbridge, Port Perry, Stouffville and
              the surrounding townships. Furniture, appliances, garage and estate cleanouts,
              renovation debris — loaded up and hauled away, often the same day.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={TEL} className="btn-base btn-primary">
                Call now · {PHONE_DISPLAY}
              </a>
              <a href={SMS} className="btn-base btn-outline-light">
                Text us a photo
              </a>
            </div>
            <ul className="mt-10 flex flex-wrap justify-center gap-2">
              {[
                "★★★★★ 5.0 on Google",
                "Locally owned",
                "Fully insured",
                "Same / next-day",
                "Free estimates",
              ].map((chip) => (
                <li
                  key={chip}
                  className="label-eyebrow border border-white/15 px-3 py-2 text-[color:var(--muted-dark)]"
                >
                  {chip}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* OUR PROMISES */}
        <section id="promises" className="reveal px-4 py-20 md:py-24">
          <div className="mx-auto max-w-6xl">
            <Eyebrow>Our promises</Eyebrow>
            <h2 className="text-4xl md:text-6xl">What you can count on.</h2>
            <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {PROMISES.map(({ icon: Icon, title, body }) => (
                <li key={title} className="border-t-4 border-[color:var(--ink)] pt-5">
                  <Icon className="h-9 w-9 text-[color:var(--maple)]" aria-hidden />
                  <h3 className="mt-4 text-2xl">{title}</h3>
                  <p className="mt-2 text-[color:var(--muted-foreground)]">{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>



        {/* SOCIAL PROOF BAR */}
        <section aria-label="Google rating" className="bg-[color:var(--maple)] px-4 py-4">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 text-center md:flex-row md:gap-6">
            <p className="label-eyebrow text-white">
              <span className="mr-2 tracking-[0.15em]" aria-hidden>
                ★★★★★
              </span>
              5.0 · 15+ Google reviews
            </p>
            <p className="text-sm text-white/90 italic">
              “True to their word, like it should be.” — David O., Google
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="reveal px-4 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Eyebrow>The process</Eyebrow>
            <h2 className="max-w-3xl text-4xl md:text-6xl">How it works</h2>
            <p className="mt-5 max-w-2xl text-[color:var(--muted-foreground)]">
              No forms that vanish into a void. No call centre three cities away. You call, we
              answer, and your problem's in the truck before you finish your coffee.
            </p>
            <ol className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                [
                  "Call or text",
                  "Tell us what needs to go, or just text a photo. Free, no-obligation price on the spot.",
                ],
                [
                  "We show up",
                  "Often the same day, on time. Point to it — we handle the lifting, loading, and cleanup.",
                ],
                [
                  "It's gone",
                  "We haul it off, sweep up, and you get your space (and your day) back.",
                ],
              ].map(([title, body], i) => (
                <li key={title} className="border-t-4 border-[color:var(--ink)] pt-5">
                  <span className="font-display block text-5xl text-[color:var(--maple)]">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-2xl">{title}</h3>
                  <p className="mt-2 text-[color:var(--muted-foreground)]">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* BEFORE / AFTER */}
        <section className="reveal bg-[color:var(--ink)] px-4 py-20 md:py-28">
          <div className="mx-auto max-w-5xl">
            <Eyebrow>The transformation</Eyebrow>
            <h2 className="text-4xl text-white md:text-6xl">See the difference.</h2>
            <p className="mt-4 text-[color:var(--muted-dark)]">
              Drag to reveal — this is what a couple of hours looks like.
            </p>
            <div className="mt-10 border-2 border-white/10">
              <BeforeAfterSlider />
            </div>
            <p className="label-eyebrow mt-4 text-[color:var(--muted-dark)]">
              Garage cleanout · Uxbridge — [swap in real job photos]
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="reveal px-4 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Eyebrow>What we haul</Eyebrow>
            <h2 className="max-w-3xl text-4xl md:text-6xl">If it fits in the truck, it's gone.</h2>
            <ul className="mt-12 grid gap-px border border-[color:var(--ink)] bg-[color:var(--ink)] sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 bg-[color:var(--bone)] px-5 py-6 transition-colors hover:bg-[color:var(--maple)] hover:text-white"
                >
                  <Leaf className="h-4 w-4 shrink-0 text-[color:var(--maple)]" />
                  <h3 className="text-lg tracking-normal normal-case">{s}</h3>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[color:var(--muted-foreground)]">
              Don't see it? Just ask — if it fits in the truck, we'll take it.
            </p>
          </div>
        </section>

        {/* WHY US */}
        <section id="why-us" className="reveal bg-[color:var(--ink)] px-4 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Eyebrow>The difference</Eyebrow>
            <h2 className="text-4xl text-white md:text-6xl">Why we go above and beyond.</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {[
                [
                  "Experience",
                  "Over 40 years of combined experience across hockey and construction/move management taught us to work hard, stay accountable, and treat people with respect. That shows up as a crew that arrives on time, follows through, and finishes clean.",
                ],
                [
                  "Safety first & fully insured",
                  "We're fully insured, and from arrival to the final sweep-up we take every precaution to protect your home, your belongings, and our crew. Careful handling, clear communication, and doing the job the right way.",
                ],
                [
                  "We support local youth sports",
                  "A portion of every load helps fund youth sports programs in our community. Clear your clutter, help fund a local kid's season.",
                ],
                [
                  "Fast & reliable",
                  "We prioritize punctuality and professionalism to make your cleanup hassle-free.",
                ],
              ].map(([title, body]) => (
                <div key={title} className="border-l-4 border-[color:var(--maple)] pl-6">
                  <h3 className="text-2xl text-white">{title}</h3>
                  <p className="mt-3 text-[color:var(--muted-dark)]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section id="team" className="reveal px-4 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <img
              src={logoBlack.url}
              alt="True North Junk Solutions logo — local junk removal crew, Uxbridge"
              className="mb-6 h-20 w-auto"
              loading="lazy"
              width={160}
              height={160}
            />
            <Eyebrow>About us</Eyebrow>
            <h2 className="text-4xl md:text-6xl">The crew behind the truck.</h2>
            <div className="mt-12 grid gap-10 md:grid-cols-2">
              {[
                {
                  name: "Shawn Hulshof",
                  role: "Owner/Operator",
                  photo: "Team photo — Shawn Hulshof, owner, True North Junk Solutions Uxbridge",
                  bio: "Shawn brings a lifetime of hands-on experience to every job. Raised on a farm in Stouffville, he learned the value of hard work early, later building skills in masonry, landscaping, hockey coaching, and general contracting. His hockey career took him from the GTA to NCAA at Oswego State, the ECHL, and two seasons in Europe — shaping the teamwork and discipline that define how True North operates today. Now living in Uxbridge with his wife Lindsey and their boys Mackenzie and Brady, Shawn is committed to serving the communities he grew up in, with honest service, efficient work, and a focus on doing things the right way.",
                },
                {
                  name: "Cody Burtch",
                  role: "Owner/Operator",
                  photo: "Team photo — Cody Burtch, owner, True North Junk Solutions Uxbridge",
                  bio: "Born and raised in Markham, Cody still calls the community home and brings years of hands-on blue-collar experience to every job — as a contractor, pool technician, mover, and head coach. Hockey has always been a big part of his life: he played minor hockey across the GTA, moved on to the GMHL, and later competed in the NJCAA. Today, when he's not hauling junk, Cody is Head Coach of the Markham Islanders U16 AA and works as a hockey instructor — leadership that shows in how he treats every client.",
                },
              ].map((m) => (
                <article key={m.name} className="border-2 border-[color:var(--ink)]">
                  <div className="flex aspect-[4/3] items-center justify-center bg-[color:var(--secondary)] px-6 text-center">
                    <span className="label-eyebrow text-[color:var(--muted-foreground)]">
                      [{m.photo}]
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl">{m.name}</h3>
                    <p className="label-eyebrow mt-1 text-[color:var(--maple)]">{m.role}</p>
                    <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                      {m.bio}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" className="reveal bg-white px-4 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Eyebrow>Testimonials</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-4xl md:text-6xl">Straight from the neighbours.</h2>
              <p className="label-eyebrow flex items-center gap-2">
                <Stars /> 5.0 · 15+ reviews on Google
              </p>
            </div>
            <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {REVIEWS.map((r) => (
                <li key={r.name} className="border border-[color:var(--border)] p-6">
                  <Stars className="text-sm" />
                  <blockquote className="mt-3 text-[color:var(--ink)]">“{r.text}”</blockquote>
                  <p className="label-eyebrow mt-4 text-[color:var(--muted-foreground)]">
                    {r.name} · Google
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SERVICE AREA */}
        <section id="service-area" className="reveal bg-[color:var(--ink)] px-4 py-20 md:py-28">
          <div className="mx-auto max-w-5xl">
            <Eyebrow>Service area</Eyebrow>
            <h2 className="text-4xl text-white md:text-6xl">Proudly based in Uxbridge.</h2>
            <p className="mt-5 max-w-2xl text-[color:var(--muted-dark)]">
              We keep it local on purpose — that's how you get same-day service and a crew that
              actually knows your area.
            </p>
            <ul className="mt-10 flex flex-wrap gap-3">
              {LOCATIONS.map((t, i) => (
                <li key={t.slug}>
                  <Link
                    to="/junk-removal/$town"
                    params={{ town: t.slug }}
                    className={
                      i === 0
                        ? "label-eyebrow inline-block bg-[color:var(--maple)] px-4 py-2 text-white"
                        : "label-eyebrow inline-block border border-white/20 px-4 py-2 text-[color:var(--muted-dark)] transition-colors hover:bg-white hover:text-[color:var(--ink)]"
                    }
                  >
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[color:var(--muted-dark)]">
              A little further out? Give us a call — we'll travel for the right job.
            </p>

            <h3 className="mt-14 text-2xl text-white md:text-3xl">Other services</h3>
            <ul className="mt-6 flex flex-wrap gap-2">
              {OTHER_SERVICE_KEYWORDS.map((k) => (
                <li key={k}>
                  <Link
                    to="/junk-removal/$town"
                    params={{ town: "uxbridge" }}
                    className="label-eyebrow inline-block border border-white/15 px-3 py-2 text-[color:var(--muted-dark)] transition-colors hover:text-white"
                  >
                    {k} Uxbridge
                  </Link>
                </li>
              ))}
            </ul>

          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="reveal px-4 py-20 md:py-28">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="text-4xl md:text-6xl">Junk removal questions, answered.</h2>
            <div className="mt-10 border-t border-[color:var(--ink)]">
              {FAQS.map((f, i) => (
                <div key={f.q} className="border-b border-[color:var(--ink)]">
                  <h3 className="text-base tracking-normal normal-case">
                    <button
                      type="button"
                      aria-expanded={openFaq === i}
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="font-ui flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-bold"
                    >
                      {f.q}
                      <span aria-hidden className="text-[color:var(--maple)]">
                        {openFaq === i ? "−" : "+"}
                      </span>
                    </button>
                  </h3>
                  {openFaq === i && (
                    <p className="pb-6 text-[color:var(--muted-foreground)]">{f.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="estimate" className="bg-[color:var(--maple)] px-4 py-20 text-center md:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="label-eyebrow mb-4 text-white/80">Ready when you are</p>
            <h2 className="text-4xl text-white md:text-6xl">Let's get it out of here.</h2>
            <p className="mt-4 text-white/90">
              Call or text right now for a free estimate. Same-day availability.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={TEL}
                className="btn-base bg-[color:var(--ink)] text-white hover:-translate-y-0.5"
              >
                Call {PHONE_DISPLAY}
              </a>
              <a href={SMS} className="btn-base btn-outline-light">
                Text us a photo
              </a>
              <a
                href={JOBBER_REQUEST_URL}
                className="btn-base bg-white text-[color:var(--ink)] hover:-translate-y-0.5"
              >
                Request a quote
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[color:var(--ink)] px-4 pt-16 pb-28 md:pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <img
                src={logoWhite.url}
                alt="True North Junk Solutions logo — junk removal Uxbridge Ontario"
                className="h-20 w-auto"
                loading="lazy"
                width={160}
                height={160}
              />
              <p className="mt-4 text-sm text-[color:var(--muted-dark)]">
                Locally owned junk removal serving Uxbridge and the surrounding townships. A piece
                of every load gives back to youth sports.
              </p>
            </div>
            <div>
              <h3 className="label-eyebrow text-white">Contact</h3>
              <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted-dark)]">
                <li>
                  <a href={TEL} className="hover:text-white">
                    Call {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <a href={SMS} className="hover:text-white">
                    Text {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${EMAIL}`} className="hover:text-white">
                    {EMAIL}
                  </a>
                </li>
                <li>Hours: [CONFIRM — e.g. Mon–Sat 7am–7pm]</li>
              </ul>
            </div>
            <div>
              <h3 className="label-eyebrow text-white">Services</h3>
              <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted-dark)]">
                {[
                  ["Garage cleanouts", "#services"],
                  ["Estate cleanouts", "#services"],
                  ["Appliance removal", "#services"],
                  ["Construction debris removal", "#services"],
                  ["How it works", "#how-it-works"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="hover:text-white">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="label-eyebrow text-white">Service area</h3>
              <p className="mt-4 text-sm text-[color:var(--muted-dark)]">{TOWNS.join(" · ")}</p>
              <h3 className="label-eyebrow mt-6 text-white">Follow</h3>
              <ul className="mt-3 space-y-2 text-sm text-[color:var(--muted-dark)]">
                <li>
                  <a
                    href="https://www.instagram.com/truenorthjunksolutions1"
                    className="hover:text-white"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
                <li>Facebook [confirm handle]</li>
                <li>Google reviews [confirm profile link]</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-[color:var(--muted-dark)] md:flex-row md:items-center md:justify-between">
            <p>© 2026 True North Junk Solutions. Locally owned &amp; operated. True to our word.</p>
            <a href={JOBBER_CLIENT_HUB_URL} className="hover:text-white">
              Client login
            </a>
          </div>
        </div>
      </footer>

      {/* STICKY MOBILE BAR */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-px bg-[color:var(--ink)] md:hidden">
        <a href={TEL} className="btn-base btn-primary rounded-none py-4">
          Call now
        </a>
        <a href={SMS} className="btn-base rounded-none bg-white py-4 text-[color:var(--ink)]">
          Text us
        </a>
      </div>
    </div>
  );
}
