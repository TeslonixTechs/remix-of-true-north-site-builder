# Remix of True North Site Builder

# Lovable.dev Build Prompt — True North Junk Solutions

> Paste everything below the line into Lovable. It's written as direct build instructions.
> Anything in **[SQUARE BRACKETS]** is a note to *you* (Dev) — confirm or fill before publishing, and delete the brackets.

---

## PROJECT

Build a fast, mobile-first, SEO-optimized **one-page marketing website** (with anchor-linked sections) for a local junk removal company. The site has two jobs, in order: (1) **rank in local Google search** for junk removal in Uxbridge and nearby towns, and (2) **convert visitors into phone calls and texts**. Every design and copy decision serves those two goals. Build in React + Tailwind. Do not invent content — use only what's provided here. Where a photo or fact is missing, insert a clearly labeled placeholder.

## THE BUSINESS

- **Name:** True North Junk Solutions
- **Slogan:** *True to our word.* (feature this prominently — see hero)
- **Owner/operators:** Shawn Hulshof and Cody Burtch
- **Phone:** (365) 361-5865 — every phone element must be a `tel:+13653615865` link
- **Text:** same number — provide `sms:+13653615865` links (people love texting a photo for a quote)
- **Email:** truenorthjunksolutions@gmail.com
- **Based in:** Uxbridge, Ontario
- **Service area (lead with Uxbridge, do NOT say "all of the GTA"):** Uxbridge, Port Perry, Goodwood, Zephyr, Sunderland, Stouffville, Ballantrae, Mount Albert, Sandford, Leaskdale
- **Google rating:** 5.0 stars, 15+ reviews
- **Fully insured:** Yes — confirmed. Surface this as a trust signal (hero chip, Safety benefit, FAQ).
- **Instagram:** @truenorthjunksolutions1 · **Facebook:** [confirm handle]
- **Hours:** [CONFIRM — e.g. Mon–Sat 7am–7pm]

## LOGO

Use the official supplied logo file — do not recreate or approximate it. It's the black wordmark ("True" in script, "north" in heavy bold, small maple leaf) with a motion-truck mark above and "JUNK SOLUTIONS" beneath.
- The supplied file is **black on transparent/white**, so on the dark (ink) header, footer, and dark bands you MUST use a **white/knockout version** of the same logo. [Dev to supply the white version — same artwork, all white. Placeholder: use white logo on dark, black logo on light bone bands.]
- Maintain clear space around it; never stretch or recolor beyond black↔white.

## BOOKING / SOFTWARE — JOBBER

This business runs on **Jobber** (field-service software). Wire the site to it rather than building custom forms:
- The primary **"Get an estimate" / "Request a quote"** CTA should link to their **Jobber online request form / booking URL**. [Dev to supply the Jobber request-form URL.]
- Add a small **"Client login"** text link in the **footer only** (not the main nav) pointing to the **Jobber client hub**. [Dev to supply the client-hub URL.]
- Phone and text CTAs stay as `tel:`/`sms:` links as specified — Jobber is for form-based quote requests and existing-client access, calling/texting is still the fastest path and stays primary.
- If a "Powered by Jobber" credit is required by their plan, place it discreetly in the footer.

## BRAND VOICE

Warm, plain-spoken, blue-collar, trustworthy — a capable neighbour, not a corporate franchise. Short confident sentences. Active voice. No hype, no clichés, no "revolutionizing." The brand's real edge is **local + reliable + gives back to the community**, so lead with that. The owners' athletic/coaching background is a *story that explains why they're disciplined and reliable* — it belongs in the team bios and the "Experience" benefit, NOT in the headline. Never make being ex-athletes the selling point; make *showing up, working hard, and respecting the customer's home* the selling point.

---

## SEO REQUIREMENTS (build these in)

- **Primary keyword:** `junk removal Uxbridge`
- **Secondary keywords** (work naturally into headings, body, alt text, FAQ): garage cleanout Uxbridge, estate cleanout, junk removal Port Perry, junk removal Stouffville, construction debris removal, appliance removal, mattress disposal, same-day junk removal, junk removal near me.
- **Meta title:** `Junk Removal Uxbridge | Same-Day Pickup | True North Junk Solutions`
- **Meta description:** `Local, reliable junk removal in Uxbridge & surrounding towns. Furniture, appliance, garage & estate cleanouts, construction debris. Free estimates, same-day service. Call (365) 361-5865.`
- **One `

` only**, containing the primary keyword. Logical `

`/`

` hierarchy per section.
- **Descriptive alt text** on every image using service + location terms.
- **JSON-LD schema:**
  - `LocalBusiness` (name, telephone, email, `areaServed` = the town list above, `address` locality Uxbridge/ON/Canada, `priceRange` "$$", `aggregateRating` ratingValue 5.0 / reviewCount 15 — real, do not inflate).
  - `FAQPage` built from the FAQ section below.
- Semantic HTML, fast load, lazy-loaded images, mobile-first. Clean scroll-to-anchor nav.

---

## DESIGN SYSTEM

Bold, confident, "heavy printed field-flyer meets modern." The page moves through **alternating full-width horizontal bands** (near-black → warm bone → maple red) for rhythm — this keeps it from looking like a generic dark landing page.

**Colors**
- Ink (near-black): `#161311`
- Bone (warm off-white): `#F1ECE3`
- Maple red (primary accent / CTAs): `#C8102E`
- Dark red (hover): `#9E0C24`
- Muted text on light: `#8A8177` · muted on dark: `#B8AD9D`

**Type** (Google Fonts)
- Display / big headlines: **Anton** (uppercase, billboard scale)
- Subheads + UI + labels: **Archivo** (weights 600–900, uppercase for labels)
- Body: **Inter**

**Details**
- Border-radius small (2px) — sturdy, not soft.
- A small **red maple-leaf mark** used as the logo accent and as the eyebrow/label marker before section titles (ties to the existing logo).
- Buttons: solid maple-red primary; outline/ghost secondary. Clear hover lift.
- **Sticky mobile bottom bar** with two big buttons: **Call** (red) and **Text** — visible on phones only.
- Sticky top header: logo left; phone number + "Get an estimate" button right.
- Subtle scroll-reveal on sections; respect `prefers-reduced-motion`; visible keyboard focus states.

**Signature element — Before/After slider:** a **draggable before/after comparison slider** (works on mouse, touch, and keyboard arrows) in its own dark band. For junk removal the transformation *is* the product, so this is the one interactive moment on the page. Use labeled placeholder panels ("Before" / "After") until real job photos are dropped in.

---

## PAGE STRUCTURE & COPY (top to bottom)

### 1. Header (sticky, dark)
Logo (maple mark + "True North / Junk Solutions") · nav links: How it works · What we haul · Why us · Reviews · FAQ · right side: phone `(365) 361-5865` + red **Get an estimate** button.

### 2. Hero (dark band) — SEO-heavy, keyword-first
- Eyebrow (small, red): **TRUE TO OUR WORD · UXBRIDGE, ONTARIO**
- **H1:** `Junk Removal in Uxbridge, Done Right.`
- Subhead (keyword-rich, readable): `Fast, friendly junk removal and cleanouts for Uxbridge, Port Perry, Stouffville and the surrounding townships. Furniture, appliances, garage and estate cleanouts, renovation debris — loaded up and hauled away, often the same day.`
- Buttons: **Call now** (`tel:`) · **Text us a photo** (`sms:`)
- Trust chips row: ★★★★★ 5.0 on Google · Locally owned · Fully insured · Same / next-day · Free estimates

### 3. Social-proof bar (thin, directly under hero — reviews near the top fold)
Full-width strip: `★★★★★ 5.0 · 15+ Google reviews` and one rotating/leading real quote: *"True to their word, like it should be."* — David O., Google. Keep it compact; it exists to put proof above the fold.

### 4. How it works (bone band) — 3 numbered steps
Intro: `No forms that vanish into a void. No call centre three cities away. You call, we answer, and your problem's in the truck before you finish your coffee.`
1. **Call or text** — Tell us what needs to go, or just text a photo. Free, no-obligation price on the spot.
2. **We show up** — Often the same day, on time. Point to it — we handle the lifting, loading, and cleanup.
3. **It's gone** — We haul it off, sweep up, and you get your space (and your day) back.

### 5. Before/After slider (dark band) — the signature
- H2: `See the difference.` Subline: `Drag to reveal — this is what a couple of hours looks like.`
- Draggable slider with Before/After placeholders. Caption: `Garage cleanout · Uxbridge` [swap in real job photos].

### 6. What we haul (bone band) — service grid (SEO anchors)
H2: `If it fits in the truck, it's gone.` Grid of services, each a keyword: Furniture removal · Mattress disposal · Garage cleanouts · Full house cleanouts · Appliance removal · Construction & renovation debris · Estate cleanouts · Basement cleanouts · Office & commercial cleanouts · Same-day / emergency cleanups · Scrap metal · Junk donations & recycling. Closing line: `Don't see it? Just ask — if it fits in the truck, we'll take it.`

### 7. Why us / Benefits (dark band) — 4 pillars (from owner's own copy)
H2: `Why we go above and beyond.`
- **Experience** — Over 40 years of combined experience across hockey and construction/move management taught us to work hard, stay accountable, and treat people with respect. That shows up as a crew that arrives on time, follows through, and finishes clean.
- **Safety first & fully insured** — We're fully insured, and from arrival to the final sweep-up we take every precaution to protect your home, your belongings, and our crew. Careful handling, clear communication, and doing the job the right way.
- **We support local youth sports** — A portion of every load helps fund youth sports programs in our community. Clear your clutter, help fund a local kid's season. [Optional: state a specific % if you want — e.g. "5% of every job" — otherwise keep "a portion."]
- **Fast & reliable** — We prioritize punctuality and professionalism to make your cleanup hassle-free.

### 8. Meet the team (bone band) — the storytelling section
H2: `The crew behind the truck.` Two cards, each with a photo placeholder and the real bios below.

**Shawn Hulshof — Owner/Operator.**
Shawn brings a lifetime of hands-on experience to every job. Raised on a farm in Stouffville, he learned the value of hard work early, later building skills in masonry, landscaping, hockey coaching, and general contracting. His hockey career took him from the GTA to NCAA at Oswego State, the ECHL, and two seasons in Europe — shaping the teamwork and discipline that define how True North operates today. Now living in Uxbridge with his wife Lindsey and their boys Mackenzie and Brady, Shawn is committed to serving the communities he grew up in, with honest service, efficient work, and a focus on doing things the right way.

**Cody Burtch — Owner/Operator.**
Born and raised in Markham, Cody still calls the community home and brings years of hands-on blue-collar experience to every job — as a contractor, pool technician, mover, and head coach. Hockey has always been a big part of his life: he played minor hockey across the GTA, moved on to the GMHL, and later competed in the NJCAA. Today, when he's not hauling junk, Cody is Head Coach of the Markham Islanders U16 AA and works as a hockey instructor — leadership that shows in how he treats every client.

### 9. Reviews (bone or white band) — USE ONLY THESE (all real, from Google)
H2: `Straight from the neighbours.` Header shows `5.0 ★ · 15+ reviews on Google`. Six cards:
- **Joanne B.** — "Comparable to the big franchises — but I was glad to give a local company my business."
- **David O.** — "True to their word, like it should be. Great service, great guys — highly recommend."
- **Harold H.** — "No gimmicks — just honest, trustworthy people doing a great job. My go-to from now on."
- **Pam M.** — "They worked hard to fill the truck for the best bang for the buck. Went above and beyond."
- **Sue W.** — "Shawn and Cody were fast, efficient, and had great attitudes. Recommend with confidence."
- **Stephanie P.** — "Arrived on time, professional and efficient — everything gone in no time."
> ⚠️ Do NOT generate, pad, or invent any additional reviews, names, or quotes. These six only.

### 10. Service area (dark band) — Uxbridge-led
H2: `Proudly based in Uxbridge.` Copy: `We keep it local on purpose — that's how you get same-day service and a crew that actually knows your area.` Show the town list as pills with **Uxbridge** highlighted in red first. Closing line: `A little further out? Give us a call — we'll travel for the right job.`

### 11. FAQ (bone band) — accordion + FAQPage schema
H2: `Junk removal questions, answered.` (Research-backed, SEO long-tail. Use all below.)

- **How much does junk removal cost in Uxbridge?** — We price by volume — how much space your items take up in the truck — so you only pay for what you actually have, whether it's a single item or a full load. Every quote is free and upfront: text a photo or book a quick on-site look and we'll give you a firm price before we lift a thing.
- **What items do you take?** — Furniture, mattresses, appliances, garage and basement junk, renovation and construction debris, yard waste, electronics, scrap metal, and full estate or home cleanouts. If it fits in the truck, it's likely gone — just ask.
- **What can't you take?** — For safety and Ontario regulations, we can't haul hazardous materials like chemicals, fuel, paint, propane, asbestos, or biohazard waste. Not sure about an item? Call and we'll point you in the right direction.
- **Do I need to be home for the pickup?** — We recommend it so you can approve the price and point out exactly what goes, but if you can't be there we'll arrange it over the phone. Either way, we call ahead so you know when we're on the way.
- **Can you remove a single item, or only full loads?** — Both. One couch or a whole house — you only pay for the space your junk takes up in the truck.
- **How do you handle stairs and heavy items?** — That's the job. Our crew does all the lifting and carrying — basements, upstairs, backyards, wherever it sits. You don't move a thing.
- **Is your service suitable for renovation and construction debris?** — Yes. We regularly clear drywall, wood, flooring, fixtures, and general reno debris so you can keep your project moving. (Very heavy material like concrete or brick may be priced separately — just ask.)
- **How quickly can you schedule a pickup?** — Often same day or next day. Call or text and we'll get you the soonest window we've got.
- **Do you recycle or donate?** — Yes. We sort usable items for donation and recycle what we can before anything heads to the landfill. Less waste, more second life.
- **Do you support community initiatives?** — A portion of every load goes back to youth sports programs in our community. Clearing your clutter helps fund local kids' teams.
- **What areas do you serve?** — We're based in Uxbridge and serve the surrounding townships: Port Perry, Goodwood, Zephyr, Sunderland, Stouffville, Ballantrae, Mount Albert and nearby. A little further out? Give us a call.
- **Are you insured?** — Yes — True North Junk Solutions is fully insured, so your home and belongings are protected from the moment we arrive to the final sweep-up. [If also WSIB-covered, add that here.]

### 12. Final CTA (bone or red band)
H2: `Let's get it out of here.` Sub: `Call or text right now for a free estimate. Same-day availability.` Buttons: Call `(365) 361-5865` · Text us a photo · **Request a quote** (→ Jobber request form URL).

### 13. Footer (near-black)
Use the **white/knockout logo** here. One-line: `Locally owned junk removal serving Uxbridge and the surrounding townships. A piece of every load gives back to youth sports.` Columns: Contact (phone/text/email) · Services (linked to anchors) · Service area (town list) · Socials (Instagram, Facebook, Google). Small **Client login** text link (→ Jobber client hub). Bottom line: `© 2026 True North Junk Solutions. Locally owned & operated. True to our word.` [Discreet "Powered by Jobber" credit here if required.]

---

## HARD RULES (do not break)

1. **No fabricated content.** Do not invent reviews, star counts, prices, dates, certifications, or "insured/licensed" claims. Use only what's in this brief; leave bracketed placeholders for anything unconfirmed.
2. **Never write "serving all of the GTA"** or lead with Toronto. Uxbridge first, always.
3. **No "Client Login" in the main nav** — existing-client access lives only as a small footer link to the Jobber client hub.
4. **Athlete background = story, not headline.** It appears only in the team bios and the Experience benefit.
5. Every phone number is a `tel:` link; every "text" action is an `sms:` link.
6. Keep it a single scrolling page with anchor nav (no separate routed pages for v1).
7. Photo placeholders must be clearly labeled (e.g. "Before job photo — Uxbridge garage") so they're easy to replace.
8. **Use the official logo file only** — never recreate it. Black logo on light bands, white/knockout logo on dark bands.
9. **Booking runs through Jobber** — the quote CTA links to their Jobber request form; don't build a custom backend form for v1.

## AFTER THE FIRST BUILD (ask me before doing these)
- Add individual service landing pages (garage cleanout, estate cleanout, construction debris) for deeper local SEO.
- Add a dedicated commercial / restoration-partner section (B2B accounts).
- Wire the "Get an estimate" button to a simple photo-upload quote form.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/84c96d8b-3c74-4029-a910-16069f404994).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
