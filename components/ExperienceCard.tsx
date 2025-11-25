import React from "react";

export default function ExperienceCard({ title, short, image }: { title: string; short: string; image: string }) {
  return (
    <div className="rounded-lg overflow-hidden bg-white shadow">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-600 mt-2">{short}</p>
      </div>
    </div>
  );
}
