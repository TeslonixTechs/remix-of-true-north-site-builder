export type Location = { name: string; slug: string };

const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const LOCATION_NAMES = [
  "Uxbridge",
  "Port Perry",
  "Whitby",
  "Brooklin",
  "Ashburn",
  "Myrtle",
  "Myrtle Station",
  "Oshawa",
  "Pickering",
  "Ajax",
  "Stouffville",
  "Markham",
  "Richmond Hill",
  "Thornhill",
  "Vaughan",
  "Woodbridge",
  "Aurora",
  "North York",
  "Toronto",
  "Goodwood",
  "Zephyr",
  "Sunderland",
  "Ballantrae",
  "Mount Albert",
  "Sandford",
  "Leaskdale",
];

export const LOCATIONS: Location[] = LOCATION_NAMES.map((name) => ({
  name,
  slug: slugify(name),
}));

export const getLocation = (slug: string) => LOCATIONS.find((l) => l.slug === slug);

/** Keyword variations used for local SEO cross-links. */
export const OTHER_SERVICE_KEYWORDS = [
  "Junk Removal",
  "Trash Removal",
  "Garbage Removal",
  "Waste Removal",
  "Rubbish Removal",
  "Appliance Removal",
  "Furniture Removal",
  "Junk Pick Up",
  "Disposal Bin",
  "Dumpster",
  "Furniture Donations",
  "Junk",
  "E-waste Removal",
  "Hoarding",
  "Property Clean Out",
  "Specialty Removal",
];
