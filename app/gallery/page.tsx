import SectionTitle from "../../components/SectionTitle";
import { generateSEO } from "@/components/SEO";

export const metadata = generateSEO({
  title: "Gallery — Ernestine Villa North Bali",
  description:
    "View the full gallery of Ernestine Villa in Lovina: tropical garden, pool, rooftop, interior spaces, and serene surroundings.",
  url: "https://ernestine-villa.vercel.app/gallery",
  image: "/images/og-gallery.jpg",
});

export default function GalleryPage() {
  const images = [
    { src: "/images/exterior.avif", alt: "Villa exterior in Lovina" },
    { src: "/images/pool.avif", alt: "Private tropical swimming pool" },
    { src: "/images/interior.avif", alt: "Open living room interior" },
    { src: "/images/dining-room.avif", alt: "Indoor dining room" },
    { src: "/images/diningroom2.avif", alt: "Dining room second angle" },
    { src: "/images/bathroom1.avif", alt: "Modern bathroom amenities" },
    { src: "/images/pool2.avif", alt: "Swimming pool with greenery" },
    { src: "/images/pool3.avif", alt: "Pool at sunset" },
    { src: "/images/rooftop.avif", alt: "Rooftop terrace" },
    { src: "/images/relax-terrace.avif", alt: "Relaxation terrace area" },
    { src: "/images/outdoor-dining.avif", alt: "Outdoor dining garden" },
    { src: "/images/dolphin-lovina.avif", alt: "Lovina dolphin tour" },
  ];

  return (
    <main className="container mx-auto px-6 py-20 max-w-6xl">
      <SectionTitle title="Gallery" subtitle="Spaces around Ernestine Villa" />

      <p className="text-dark/70 max-w-3xl mb-8">
        A curated selection of photos showcasing the villa, pool, tropical
        garden, rooftop terrace, and the peaceful surroundings of North Bali.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img) => (
          <div key={img.src} className="rounded-xl overflow-hidden shadow-soft">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-64 object-cover image-hover"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
