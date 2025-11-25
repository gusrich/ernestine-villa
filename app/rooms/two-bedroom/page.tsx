import SectionTitle from "../../../components/SectionTitle";
import AmenityCard from "../../../components/AmenityCard";
import { generateSEO } from "@/components/SEO";

// ⭐ SEO PAKAI METADATA API (BEBAS ERROR + FULL CRAWLER SUPPORT)
export const metadata = generateSEO({
  title: "Two-Bedroom Villa — Ernestine Villa North Bali",
  description:
    "A spacious and comfortable two-bedroom villa in Lovina with private pool, tropical garden, roof terrace, and Starlink high-speed internet.",
  url: "https://ernestine-villa.vercel.app/rooms/two-bedroom",
  image: "/images/og-two-bedroom.jpg", // opsional, kalau belum ada bisa dihapus
});

export default function TwoBedroomPage() {
  return (
    <div className="bg-soft text-dark">

      {/* HERO */}
      <section className="relative h-[45vh] md:h-[60vh] w-full overflow-hidden">
        <img
          src="/images/villa-bedroom.avif"
          alt="Two-bedroom villa in North Bali"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-display font-bold drop-shadow-xl">
            Two-Bedroom Villa
          </h1>
        </div>
      </section>

      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-20">

        <SectionTitle
          title="A Spacious & Peaceful Retreat"
          subtitle="Warm, comfortable, and designed to feel like home"
        />

        <p className="text-lg leading-relaxed max-w-3xl">
          Villa Ernestine is a spacious two-bedroom home in the heart of Lovina,
          designed for peace, comfort, and slow living. Enjoy your private pool,
          tropical garden, pocket gardens beside each bedroom, and an inviting
          open-plan living room filled with natural light.
          <br />
          <br />
          With Starlink high-speed internet, the villa is perfect for relaxing,
          working remotely, or simply enjoying quiet days surrounded by greenery.
        </p>

        {/* IMAGE GRID */}
        <div className="grid md:grid-cols-2 gap-6">
          <img
            src="/images/villa-bedroom.avif"
            alt="bedroom villa"
            className="rounded-2xl shadow-lg"
          />
          <img
            src="/images/bedroom2.avif"
            alt="bedroom villa bali"
            className="rounded-2xl shadow-lg"
          />
        </div>

        <SectionTitle
          title="Villa Features"
          subtitle="Comfort-focused facilities for an effortless stay"
        />

        <div className="grid md:grid-cols-3 gap-6">
          <AmenityCard title="Two Air-Conditioned Bedrooms" description="Both bedrooms include ensuite bathrooms and private pocket gardens." />
          <AmenityCard title="Private Swimming Pool" description="Enjoy full privacy with tropical views surrounding the villa." />
          <AmenityCard title="Open Living Room" description="Spacious area with natural light and two ceiling fans." />
          <AmenityCard title="Fully Equipped Kitchen" description="Cook, dine, and enjoy your stay with complete kitchen essentials." />
          <AmenityCard title="Roof Terrace" description="Perfect for star gazing, evening chats, or a quiet sunset moment." />
          <AmenityCard title="Starlink Internet" description="High-speed and stable connection for remote work and streaming." />
          <AmenityCard title="Outdoor Shower" description="Rinse off after a swim in your private outdoor space." />
          <AmenityCard title="Tropical Garden" description="Lush greenery providing calm, privacy, and a refreshing atmosphere." />
          <AmenityCard title="Daily Assistance Available" description="Help available for car parking arrangements or luggage transfer." />
        </div>

        <SectionTitle
          title="Access Information"
          subtitle="Important to know before your arrival"
        />

        <p className="text-lg leading-relaxed max-w-3xl">
          The road leading to Villa Ernestine is narrow. Small cars can access
          the villa directly, but larger vehicles such as minivans can only stop
          at the entrance of the lane.
          <br /><br />
          From there, guests will need to walk approximately 50 meters to reach
          the villa. We are happy to assist with luggage or help arrange
          parking space nearby.
        </p>

        <SectionTitle
          title="Gallery"
          subtitle="Spaces around Villa Ernestine"
        />

        <div className="grid md:grid-cols-3 gap-6">
          <img src="/images/rooftop.avif" className="rounded-xl shadow-md" />
          <img src="/images/pool.avif" className="rounded-xl shadow-md" />
          <img src="/images/interior.avif" className="rounded-xl shadow-md" />
          <img src="/images/dining-room.avif" className="rounded-xl shadow-md" />
          <img src="/images/pool2.avif" className="rounded-xl shadow-md" />
          <img src="/images/outdoor-dining.avif" className="rounded-xl shadow-md" />
        </div>

        <div className="text-center mt-16">
          <a
            href="/booking"
            className="inline-block px-8 py-4 rounded-full bg-gold text-white text-lg font-medium hover:opacity-90"
          >
            Check Availability
          </a>
        </div>
      </main>
    </div>
  );
}
