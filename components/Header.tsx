"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // WhatsApp CTA (ubah nomor di sini)
  const phoneNumber = "6281234567890";
  const waMessage =
    "Hi, I'm interested in Ernestine Villa. Could you please tell me the availability for these dates: [please enter dates]? Thank you!";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    waMessage
  )}`;

  const menu = [
    { label: "Home", href: "/" },
    { label: "Rooms", href: "/rooms/two-bedroom" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* HEADER */}
      <header
        className="
          fixed top-0 left-0 w-full z-50
          backdrop-blur-md bg-dark/60
          border-b border-dark/20
          transition-all duration-300
        "
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <span className="font-title text-2xl text-soft cursor-pointer">
              Ernestine Villa
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 items-center text-soft/90 font-body">
            {menu.map((m) => (
              <Link
                key={m.href}
                href={m.href}
                className={`
                  px-3 py-1 rounded-md transition 
                  hover:bg-white/10
                  ${pathname === m.href ? "underline decoration-gold" : ""}
                `}
              >
                {m.label}
              </Link>
            ))}

            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="ml-4 inline-block px-5 py-2 rounded-full bg-gold text-dark font-semibold shadow-soft hover:opacity-95 transition"
            >
              Book Now
            </a>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 rounded-md text-soft/90"
            aria-label="Open menu"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Backdrop */}
        <div
          className={`fixed inset-0 z-40 transition-opacity ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Background overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />

          {/* Mobile Drawer */}
          <aside
            className={`
              absolute right-0 top-0 h-full 
              w-11/12 max-w-xs 
              bg-white !bg-white shadow-xl
              transform transition-transform duration-300
              ${open ? "translate-x-0" : "translate-x-full"}
              z-50
            `}
            role="dialog"
            aria-modal="true"
          >
            {/* Top Row */}
            <div className="p-6 flex items-center justify-between border-b border-dark/10">
              <Link href="/" onClick={() => setOpen(false)}>
                <span className="font-title text-xl text-dark cursor-pointer">
                  Ernestine Villa
                </span>
              </Link>

              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-md"
                aria-label="Close menu"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Menu List */}
            <nav className="px-6 py-4 flex flex-col font-body text-dark bg-white">
              {menu.map((m) => (
                <Link
                  key={m.href}
                  href={m.href}
                  className="py-4 text-lg border-b border-dark/10 hover:bg-dark/5 rounded-md transition"
                  onClick={() => setOpen(false)}
                >
                  {m.label}
                </Link>
              ))}

              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block px-6 py-3 rounded-full bg-gold text-dark font-semibold text-center shadow-soft hover:opacity-95 transition"
              >
                Book Now (WhatsApp)
              </a>
            </nav>
          </aside>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-20 md:h-24" />
    </>
  );
}
