import React from "react";

export default function GalleryGrid({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {images.map((src) => (
        <div key={src} className="rounded overflow-hidden">
          <img src={src} alt="gallery" className="w-full h-40 object-cover transform hover:scale-105 transition" />
        </div>
      ))}
    </div>
  );
}
