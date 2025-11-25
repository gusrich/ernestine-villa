import { generateSEO } from "@/components/SEO";

export const metadata = generateSEO({
  title: "Booking — Ernestine Villa North Bali",
  description:
    "Send booking inquiries for Ernestine Villa in Lovina. Fast response for availability, long-term stay, and airport transfer requests.",
  url: "https://ernestine-villa.vercel.app/booking",
  image: "/images/og-booking.jpg",
});

export default function BookingPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-display font-semibold text-dark mb-8">
        Booking Request
      </h1>

      <p className="text-dark/70 mb-6 max-w-2xl">
        Please fill in your details and we’ll respond as soon as possible.
      </p>

      <p className="text-gray-600">Form coming soon…</p>
    </main>
  );
}
