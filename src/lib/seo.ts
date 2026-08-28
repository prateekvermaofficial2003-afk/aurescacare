/**
 * Structured data (JSON-LD) built once from `src/data/site.ts` so the same
 * verified NAP powers the schema, the visible contact details and the Google
 * Business Profile — one source, no drift.
 *
 * The `MedicalClinic` (a LocalBusiness subtype) and `WebSite` objects render on
 * every page via the base layout; the per-page helpers below add breadcrumb and
 * article graphs where a page warrants them.
 */
import { site } from "@/data/site";

/** Canonical origin — matches `site` in astro.config.mjs. No trailing slash. */
export const SITE_URL = "https://aurescacare.com";

const LOGO_URL = `${SITE_URL}/images/auresca-logo.svg`;

/** Default social share image (1200×630) used when a page sets no override. */
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

/**
 * The clinic as a local medical business. Google reads the exact map pin from
 * the Google Business Profile, so no coordinates are hard-coded here. `@id` lets
 * the WebSite and Article publisher point back at this single entity.
 */
export const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": `${SITE_URL}/#clinic`,
  name: site.name,
  description: site.shortPitch,
  url: SITE_URL,
  logo: LOGO_URL,
  image: DEFAULT_OG_IMAGE,
  telephone: site.phone,
  email: site.email,
  currenciesAccepted: "INR",
  medicalSpecialty: "Dermatology",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2nd Floor, 594 P, Golf Course Road, Sector-43",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122009",
    addressCountry: "IN",
  },
  hasMap: site.googleListingUrl,
  areaServed: [
    { "@type": "City", name: "Gurugram" },
    "Golf Course Road",
    "DLF Phase 5",
    "Sushant Lok",
    "Sector 43",
    "Sector 54",
    "South Delhi",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phoneHref.replace("tel:", ""),
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://www.instagram.com/aurescacare/",
    site.googleListingUrl,
  ],
};

/** The site itself, tied back to the clinic as publisher. */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: site.name,
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#clinic` },
};

/** BreadcrumbList from an ordered list of {name, url} crumbs. */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

/** BlogPosting for an article page. Author stays at the clinic/team level. */
export function articleSchema(opts: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  url: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    image: opts.image,
    datePublished: opts.datePublished,
    author: { "@type": "Organization", name: opts.author, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: LOGO_URL },
    },
    mainEntityOfPage: opts.url,
    url: opts.url,
  };
}
