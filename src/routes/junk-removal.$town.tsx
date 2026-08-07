import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import logoWhite from "@/assets/logo-white.png.asset.json";
import heroImg from "@/assets/hero-junk.jpg.asset.json";
import { LOCATIONS, getLocation, OTHER_SERVICE_KEYWORDS } from "@/lib/site-data";

const PHONE_DISPLAY = "(365) 361-5865";
const TEL = "tel:+13653615865";
const SMS = "sms:+13653615865";

const SERVICES = [
  "Furniture removal",
  "Mattress disposal",
  "Appliance & e-waste removal",
  "Garage & basement cleanouts",
  "Full property clean outs",
  "Estate cleanouts",
  "Construction & renovation debris",
  "Hoarding cleanups",
  "Scrap metal",
  "Same-day / emergency pickups",
];

export const Route = createFileRoute("/junk-removal/$town")({
  loader: ({ params }) => {
    const location = getLocation(params.town);
    if (!location) throw notFound();
    return { location };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.location.name ?? "Ontario";
    const title = `Junk Removal ${name} | Same-Day Pickup | True North Junk Solutions`;
    const description = `Local junk removal in ${name}, Ontario. Furniture, appliance, garage, estate and property cleanouts plus construction debris. Free estimates, same-day service. Call (365) 361-5865.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
    };
  },
  component: TownPage,
});

function TownPage() {
  const { location } = Route.useLoaderData();
  const others = LOCATIONS.filter((l) => l.slug !== location.slug);

  return (
    <div className="min-h-screen bg-[color:var(--bone)]">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[color:var(--ink)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link to="/" className="flex items-center">
            <img
              src={logoWhite.url}
              alt="True North Junk Solutions"
              className="h-12 w-auto md:h-14"
              width={120}
              height={120}
            />
          </Link>
          <div className="flex items-center gap-3">
            <a href={TEL} className="label-eyebrow hidden text-white md:inline">
              {PHONE_DISPLAY}
            </a>
            <a href={TEL} className="btn-base btn-primary">
              Get an estimate
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[color:var(--ink)] px-4 py-20 md:py-28">
          <img
            src={heroImg.url}
            alt={`Junk removal crew loading a couch in ${location.name}, Ontario`}
            className="absolute inset-0 h-full w-full object-cover opacity-35"
            width={1920}
            height={1088}
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-[color:var(--ink)] via-[color:var(--ink)]/85 to-[color:var(--ink)]/30"
          />
          <div className="relative mx-auto max-w-4xl">
            <p className="label-eyebrow mb-4 text-[color:var(--maple)]">
              True to our word · {location.name}, Ontario
            </p>
            <h1 className="text-4xl text-white sm:text-6xl md:text-7xl">
              Junk Removal in {location.name}
            </h1>
            <p className="mt-6 max-w-2xl text-[color:var(--muted-dark)] md:text-lg">
              Furniture, appliances, garage and estate cleanouts, renovation debris and full
              property clean outs in {location.name} — loaded, hauled and swept up, often the same
              day. Free, upfront estimates.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={TEL} className="btn-base btn-primary">
                Call now · {PHONE_DISPLAY}
              </a>
              <a href={SMS} className="btn-base btn-outline-light">
                Text us a photo
              </a>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl">What we haul in {location.name}</h2>
            <ul className="mt-10 grid gap-px border border-[color:var(--ink)] bg-[color:var(--ink)] sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => (
                <li key={s} className="bg-[color:var(--bone)] p-5 font-medium">
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-[color:var(--muted-foreground)]">
              We price by volume — you pay only for the space your junk takes up in the truck. One
              item or a whole house in {location.name}, our crew does all the lifting. Usable items
              go to local charities and recyclers before anything heads to the landfill.
            </p>
            <div className="mt-8">
              <Link to="/" className="btn-base btn-outline-dark">
                See how it works
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[color:var(--ink)] px-4 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl text-white md:text-4xl">Other services in {location.name}</h2>
            <ul className="mt-8 flex flex-wrap gap-2">
              {OTHER_SERVICE_KEYWORDS.map((k) => (
                <li
                  key={k}
                  className="label-eyebrow border border-white/15 px-3 py-2 text-[color:var(--muted-dark)]"
                >
                  {k} {location.name}
                </li>
              ))}
            </ul>

            <h2 className="mt-14 text-2xl text-white md:text-4xl">Other locations we service</h2>
            <ul className="mt-8 flex flex-wrap gap-2">
              {others.map((l) => (
                <li key={l.slug}>
                  <Link
                    to="/junk-removal/$town"
                    params={{ town: l.slug }}
                    className="label-eyebrow inline-block border border-white/20 px-4 py-2 text-[color:var(--muted-dark)] transition-colors hover:bg-white hover:text-[color:var(--ink)]"
                  >
                    Junk Removal {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-[color:var(--maple)] px-4 py-16 text-center">
          <h2 className="text-3xl text-white md:text-5xl">
            Book junk removal in {location.name}.
          </h2>
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
          </div>
        </section>
      </main>

      <footer className="bg-[color:var(--ink)] px-4 py-10 text-center text-xs text-[color:var(--muted-dark)]">
        © 2026 True North Junk Solutions · Locally owned &amp; operated.
      </footer>
    </div>
  );
}
