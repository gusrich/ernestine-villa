import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-soft py-12 mt-20">
      <div className="container mx-auto px-6 text-center">

        <h3 className="font-playfair text-2xl mb-4">Ernestine Villa</h3>
        <p className="text-soft/70 max-w-lg mx-auto">
          A private luxury retreat in North Bali, located just minutes from
          Lovina Beach — offering comfort, warmth, and serene coastal living.
        </p>

        <p className="text-soft/60 text-sm mt-8">
          © {new Date().getFullYear()} Ernestine Villa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
