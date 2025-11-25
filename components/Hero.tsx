<section className="relative h-[72vh] md:h-[80vh] w-full overflow-hidden">
  <img src="/images/hero.avif" alt="Ernestine Villa — Lovina coast" className="absolute inset-0 w-full h-full object-cover" />
  <div className="absolute inset-0 bg-black/30"></div>

  <div className="relative z-20 max-w-6xl mx-auto px-6 h-full flex items-center">
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-white max-w-2xl drop-shadow-lg"
    >
      <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
        Escape to Serenity
      </h1>

      <p className="mt-4 text-lg md:text-xl">
        A luxury two-bedroom villa in North Bali — moments from Lovina Beach and private dolphin excursions.
      </p>

      <div className="mt-6">
        <a href="/booking" className="inline-block px-6 py-3 rounded-full bg-gold text-white font-medium">
          Check Availability
        </a>
      </div>
    </motion.div>
  </div>
</section>
