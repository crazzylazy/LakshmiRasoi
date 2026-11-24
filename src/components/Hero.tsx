"use client";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { MessageCircle, ChevronDown, Star, BadgeIndianRupee } from "lucide-react";
import { WHATSAPP_MESSAGES, waLink } from "@/lib/site";

const trustBadges = [
  { icon: "🏠", label: "100% Homemade" },
  { icon: "🌿", label: "Pure Veg Always" },
  { icon: "🧼", label: "Hygienic Kitchen" },
  { icon: "⏰", label: "On-time Delivery" },
  { icon: "❤️", label: "Growing Daily" },
];

const mosaicTiles = [
  {
    src: "/images/hero-thali.jpg",
    alt: "Full homemade thali with dal, aloo gobhi, rice, ghee rotis and salad",
    label: "Full Thali · Dal, Chawal, Roti",
    className: "row-span-4",
  },
  {
    src: "/images/hero-chole.jpg",
    alt: "Chole with raita, achar and soft rotis",
    label: "Chole · Raita · Achar",
    className: "row-span-3",
  },
  {
    src: "/images/hero-bhindi.jpg",
    alt: "Bhindi sabzi with yellow dal, salad and desi ghee rotis",
    label: "Bhindi · Dal · Ghee Roti",
    className: "row-span-3",
  },
  {
    src: "/images/hero-chane.jpg",
    alt: "Kale chane aloo gobhi sabzi with salad and desi ghee rotis",
    label: "Kale Chane · Aloo Gobhi",
    className: "row-span-2",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-cream dot-pattern"
    >
      {/* Warm radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 60% 40%, rgba(199,123,10,0.08) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 20% 70%, rgba(123,28,28,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start"
          >
            {/* Brand badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 bg-saffron-pale border border-saffron/25 text-saffron text-xs font-bold px-4 py-1.5 rounded-full tracking-[0.15em] uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-saffron animate-pulse" />
                100% Pure Veg · Homemade Tiffin · Hisar
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-text leading-[1.1] mb-5"
            >
              Fresh homemade meals,
              <br />
              <span className="text-maroon">delivered daily.</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-saffron text-sm font-bold tracking-[0.2em] uppercase mb-5"
            >
              Lakshmi Rasoi · Daily Tiffin & Meal Service
            </motion.p>

            {/* Supporting text */}
            <motion.p
              variants={itemVariants}
              className="text-medium-text text-base md:text-lg leading-relaxed max-w-lg mb-8"
            >
              The comfort of ghar ka khana, without the daily cooking. Hygienic,
              balanced and lovingly prepared tiffins for students, professionals
              and families near Marvel City, Hisar, hot and on time, every single day.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 mb-5"
            >
              <a
                href={waLink(WHATSAPP_MESSAGES.order)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 bg-maroon hover:bg-maroon-light text-cream font-bold px-7 py-3.5 rounded-full text-sm transition-all duration-200 hover:shadow-[0_8px_24px_rgba(123,28,28,0.35)] hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Order on WhatsApp
              </a>
              <a
                href="#plans"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#plans")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-transparent border-2 border-maroon text-maroon hover:bg-maroon hover:text-cream font-bold px-7 py-3.5 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                View Meal Plans
              </a>
            </motion.div>

            {/* Gentle urgency */}
            <motion.p variants={itemVariants} className="text-light-text text-sm mb-8">
              New here? <a href={waLink(WHATSAPP_MESSAGES.trial)} target="_blank" rel="noopener noreferrer" className="text-saffron font-semibold underline underline-offset-2 hover:text-maroon transition-colors">Start with a trial tiffin from ₹59</a>. No commitment.
            </motion.p>

            {/* Trust badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3"
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-1.5 bg-card-bg border border-border rounded-full px-3.5 py-1.5 text-xs font-semibold text-warm-text shadow-sm"
                >
                  <span aria-hidden="true">{badge.icon}</span>
                  {badge.label}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: photo mosaic of real dishes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="grid grid-cols-2 grid-rows-[repeat(6,minmax(0,1fr))] gap-3 sm:gap-4 aspect-[4/4.4]">
              {mosaicTiles.map((tile, i) => (
                <motion.figure
                  key={tile.src}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.12, ease: "easeOut" }}
                  className={`group relative overflow-hidden rounded-3xl border-4 border-card-bg shadow-[0_16px_40px_rgba(28,15,15,0.16)] ${tile.className}`}
                >
                  <Image
                    src={tile.src}
                    alt={tile.alt}
                    fill
                    priority={i === 0}
                    sizes="(max-width: 1024px) 45vw, 22vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <figcaption className="absolute top-2.5 left-2.5 max-w-[calc(100%-1.25rem)] bg-black/45 backdrop-blur-sm border border-white/20 text-white text-[11px] sm:text-xs font-semibold leading-tight rounded-full px-3 py-1.5">
                    {tile.label}
                  </figcaption>
                </motion.figure>
              ))}
            </div>

            {/* Rating + trial badge */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-card-bg border border-border rounded-2xl px-4 py-3 shadow-[0_12px_32px_rgba(28,15,15,0.18)] flex items-center gap-3 whitespace-nowrap"
            >
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-saffron text-saffron" />
                ))}
              </div>
              <span className="w-px h-6 bg-border" aria-hidden="true" />
              <div className="flex items-center gap-2">
                <BadgeIndianRupee className="w-5 h-5 text-maroon" />
                <p className="text-warm-text text-xs font-bold leading-tight">
                  Trial tiffin ₹59
                  <span className="block text-light-text font-medium">Plans from ₹1,799 (10% off)</span>
                </p>
              </div>
            </motion.div>

            <p className="absolute inset-x-0 -bottom-14 text-center text-[11px] italic text-light-text">
              Image is for illustrations only.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1 text-light-text hover:text-saffron transition-colors duration-200 cursor-pointer"
      >
        <span className="text-xs font-semibold tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </motion.a>
    </section>
  );
}
