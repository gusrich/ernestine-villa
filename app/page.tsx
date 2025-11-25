import SectionTitle from "../components/SectionTitle";
import { generateSEO } from "@/components/SEO";

// 1️⃣ SEO DI SINI – BUKAN DI DALAM JSX
export const metadata = generateSEO({
  title: "Ernestine Villa — Luxury Villa in North Bali",
  description:
    "A refined two-bedroom villa near Lovina Beach, offering tranquility, comfort, and exclusive access to dolphin-watching experiences.",
  url: "https://ernestine-villa.vercel.app",
  image: "/images/og-home.jpg",
});

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[70vh] w-full flex items-center justify-center">
        <img
          src="/images/hero.avif"
          alt="Ernestine Villa exterior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark/40"></div>

        <div className="relative z-10 text-center text-soft px-6">
          <h1 className="font-playfair text-6xl">Ernestine Villa</h1>
          <p className="mt-4 text-xl text-soft/80">
            A secluded luxury villa near Lovina Beach, North Bali.
          </p>
          <a
            href="/contact"
            className="inline-block mt-8 px-10 py-4 bg-gold text-dark font-semibold rounded-full shadow-lg hover:opacity-90 transition"
          >
            Book Your Stay
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 container mx-auto px-6 max-w-5xl">
        <SectionTitle title="Your Private North Bali Getaway" />
        <p className="text-lg text-dark/70 leading-relaxed mt-6">
          Ernestine Villa is a refined two-bedroom retreat located in the serene
          northern coastline of Bali. Designed for guests seeking peace,
          comfort, and privacy, the villa is situated only minutes from the
          iconic Lovina Beach — famous for its calm waters and morning
          dolphin-watching tours.
        </p>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-soft">
        <div className="container mx-auto px-6 max-w-5xl">
          <SectionTitle title="Why Stay With Us" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
            <div className="p-8 bg-white rounded-xl shadow-md border border-dark/10">
              <h3 className="font-playfair text-2xl mb-3">Prime Location</h3>
              <p className="text-dark/70">
                Only minutes from Lovina Beach, offering easy access to dolphin
                tours, restaurants, and sunset viewpoints.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-md border border-dark/10">
              <h3 className="font-playfair text-2xl mb-3">
                Private Comfort
              </h3>
              <p className="text-dark/70">
                Two spacious bedrooms, modern bathrooms, and a peaceful
                garden-surrounded environment.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-md border border-dark/10">
              <h3 className="font-playfair text-2xl mb-3">
                Tranquil Surroundings
              </h3>
              <p className="text-dark/70">
                Experience quiet mornings, natural breeze, and a setting perfect
                for relaxation and privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 container mx-auto px-6 text-center">
        <h2 className="font-playfair text-4xl">Ready to Stay With Us?</h2>
        <p className="text-dark/70 mt-4">
          Contact us for availability and exclusive seasonal offers.
        </p>
        <a
          href="/contact"
          className="inline-block mt-8 px-10 py-4 bg-gold text-dark font-semibold rounded-full shadow-lg hover:opacity-90 transition"
        >
          Contact & Booking
        </a>
      </section>
    </>
  );
}
