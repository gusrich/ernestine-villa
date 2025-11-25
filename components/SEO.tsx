// components/SEO.ts
import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: "website" | "article";
  canonical?: string;
}

export function generateSEO({
  title,
  description,
  url,
  image = "/images/og-default.jpg",
  type = "website",
  canonical,
}: SEOProps): Metadata {
  const canonicalUrl = canonical || url;

  return {
    metadataBase: new URL("https://ernestine-villa.vercel.app"),

    title,
    description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      type,
      title,
      description,
      url,
      siteName: "Ernestine Villa",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} - Ernestine Villa`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },

    other: {
      // JSON-LD LodgingBusiness Schema
      "script:type": "application/ld+json",
      "script:innerHTML": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LodgingBusiness",
        name: "Ernestine Villa",
        description,
        image,
        url,
        telephone: "+62 812-3456-7890",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lovina",
          addressRegion: "Bali",
          addressCountry: "ID",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -8.1695,
          longitude: 115.0267,
        },
        openingHours: "Mo-Su 00:00-23:59",
        priceRange: "$$",
      }),
    },
  };
}
