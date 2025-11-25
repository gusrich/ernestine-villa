import SectionTitle from "../../components/SectionTitle";
import { generateSEO } from "@/components/SEO";

export const metadata = generateSEO({
  title: "Contact — Ernestine Villa North Bali",
  description:
    "Get in touch with Ernestine Villa in Lovina, North Bali. Inquiries, availability checks, transport, and personalized stay arrangements.",
  url: "https://ernestine-villa.vercel.app/contact",
  image: "/images/og-contact.jpg",
});

export default function ContactPage() {
  return (
    <div className="bg-soft text-dark">
      {/* HERO */}
      <section className="relative h-[40vh] md:h-[50vh] w-full bg-dark flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-display font-semibold">
          Contact Us
        </h1>
      </section>

      {/* BODY */}
      <main className="max-w-5xl mx-auto px-6 py-16 space-y-14">
        <SectionTitle title="We’re here to help" subtitle="Reach out anytime" />

        <p className="text-lg leading-relaxed max-w-3xl">
          Whether you’re planning a peaceful escape or a long stay in North Bali,
          our team is ready to assist with availability, airport transfer,
          special requests, or any questions you may have.
        </p>

        {/* Contact details */}
        <div className="grid md:grid-cols-2 gap-10 bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-dark">Direct Contact</h3>
            <p>
              Email:{" "}
              <span className="font-medium">stay@ernestinevilla.com</span>
            </p>
            <p>
              WhatsApp:{" "}
              <span className="font-medium">+62 812 0000 0000</span>
            </p>
            <p>Location: North Bali – Lovina Beach Area</p>
          </div>

          <div>
            <p className="mb-2 font-medium">Inquiry Form</p>
            <p className="text-gray-600">Form coming soon…</p>
          </div>
        </div>
      </main>
    </div>
  );
}
