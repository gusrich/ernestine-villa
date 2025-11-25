import React from "react";

export default function RoomCard({
  title,
  summary,
  beds,
  baths,
  features,
  image,
  cta,
}: {
  title: string;
  summary: string;
  beds: string;
  baths: string;
  features: string[];
  image: string;
  cta: string;
}) {
  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="font-display text-2xl">{title}</h3>
        <p className="mt-2 text-sm">{summary}</p>
        <ul className="mt-4 text-sm space-y-1">
          <li><strong>{beds}</strong> · <strong>{baths}</strong></li>
          {features.map((f) => <li key={f}>• {f}</li>)}
        </ul>
        <a href={cta} className="inline-block mt-4 px-4 py-2 rounded-full border border-gray-200">View Details</a>
      </div>
    </article>
  );
}
