"use client";

import React, { useState } from "react";

export default function BookingForm() {
  const [status, setStatus] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Your message has been sent. We will get back to you shortly.");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-10 rounded-xl shadow-lg border border-dark/10 max-w-2xl mx-auto"
    >
      <h3 className="font-playfair text-3xl text-dark mb-6 text-center">
        Booking Inquiry
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          required
          placeholder="Full Name"
          className="border border-dark/20 p-3 rounded-lg w-full"
        />
        <input
          type="email"
          required
          placeholder="Email Address"
          className="border border-dark/20 p-3 rounded-lg w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <input
          type="date"
          required
          className="border border-dark/20 p-3 rounded-lg w-full"
        />
        <input
          type="date"
          required
          className="border border-dark/20 p-3 rounded-lg w-full"
        />
      </div>

      <textarea
        placeholder="Message"
        className="border border-dark/20 p-3 rounded-lg w-full mt-6 h-32"
      />

      <button
        type="submit"
        className="mt-6 w-full bg-gol
