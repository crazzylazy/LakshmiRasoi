"use client";
import { motion, type Variants } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";

const WHATSAPP_NUMBER = "917988267228";
const WHATSAPP_MSG = encodeURIComponent("Hello! I'd like to order your tiffin service.");

const trustBadges = [
  { icon: "🏠", label: "Homemade" },
  { icon: "🌿", label: "Fresh Daily" },
  { icon: "✓", label: "Hygienic Kitchen" },
  { icon: "⏰", label: "On-time Delivery" },
];

const floatingCards = [
  {
    top: "8%",
    right: "4%",
    rotate: 6,
    delay: 0,
    bg: "linear-gradient(135deg, #7B1C1C 0%, #9B2626 100%)",
    label: "Today's Special",
    sub: "Dal Makhani + Roti",
    badge: "🍛",
  },
  {
    top: "38%",
    right: "-2%",
    rotate: -4,
    delay: 0.4,
    bg: "linear-gradient(135deg, #2D6A4F 0%, #40916C 100%)",
    label: "Fresh & Healthy",
    sub: "Seasonal Sabzi",
    badge: "🥗",
  },
  {
    top: "68%",
    right: "8%",
    rotate: 5,
    delay: 0.8,
    bg: "linear-gradient(135deg, #C77B0A 0%, #E8960D 100%)",
    label: "Lunch Tiffin",
    sub: "₹ 99 / meal",
    badge: "🥘",
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
          {/* Left — content */}
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
                Premium Tiffin Service
              </span>
            </motion.div>

            {/* Brand name */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-warm-text leading-[1.08] mb-4"
            >
              Lakshmi
              <br />
              <span className="text-maroon">Rasoi</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-saffron text-sm font-bold tracking-[0.2em] uppercase mb-6"
            >
              Daily Tiffin & Meal Service
            </motion.p>

            {/* Headline */}
            <motion.h2
              variants={itemVariants}
              className="font-display text-2xl sm:text-3xl font-bold text-warm-text leading-snug mb-4"
            >
              Fresh homemade meals,
              <br />
              <span className="text-maroon">delivered daily.</span>
            </motion.h2>

            {/* Supporting text */}
            <motion.p
              variants={itemVariants}
              className="text-medium-text text-base md:text-lg leading-relaxed max-w-lg mb-8"
            >
              Nutritious, hygienic, and comforting meals prepared with care for
              students, professionals, and families. Taste the love in every
              bite.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
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
                  <span>{badge.icon}</span>
                  {badge.label}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — visual composition */}
          <div className="relative h-[480px] lg:h-[580px] hidden md:block">
            {/* Background circle */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(199,123,10,0.12) 0%, rgba(253,246,236,0) 70%)",
              }}
            />

            {/* Main center card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-64 h-80 rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(28,15,15,0.18)]"
              style={{
                background: "linear-gradient(160deg, #FEF3DC 0%, #F5EDD8 40%, #EDD5B8 100%)",
                rotate: -3,
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-20 h-20 rounded-2xl bg-white/60 backdrop-blur-sm flex items-center justify-center text-4xl mb-4 shadow-sm">
                  🍱
                </div>
                <p className="font-display font-bold text-warm-text text-xl leading-tight mb-1">
                  Daily Tiffin
                </p>
                <p className="text-medium-text text-sm mb-4">
                  Roti • Dal • Sabzi • Rice
                </p>
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-saffron text-sm">★</span>
                  ))}
                </div>
                <p className="text-xs text-light-text mt-1">500+ happy customers</p>
              </div>
              {/* Decorative circles */}
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-saffron/10" />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-maroon/8" />
            </motion.div>

            {/* Floating cards */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -8, 0],
                }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.5 + card.delay },
                  scale: { duration: 0.6, delay: 0.5 + card.delay },
                  y: {
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: card.delay,
                  },
                }}
                className="absolute w-44 rounded-2xl p-4 shadow-[0_8px_32px_rgba(28,15,15,0.2)]"
                style={{
                  top: card.top,
                  right: card.right,
                  rotate: card.rotate,
                  background: card.bg,
                }}
              >
                <div className="flex items-start gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-xl flex-shrink-0">
                    {card.badge}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm leading-tight">{card.label}</p>
                    <p className="text-white/75 text-xs mt-0.5">{card.sub}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Decorative dots */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -6, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.4 }}
                className="absolute rounded-full bg-saffron"
                style={{
                  width: 6 + i * 2,
                  height: 6 + i * 2,
                  top: `${15 + i * 12}%`,
                  left: `${5 + (i % 3) * 8}%`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-light-text hover:text-saffron transition-colors duration-200 cursor-pointer"
      >
        <span className="text-xs font-semibold tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </motion.a>
    </section>
  );
}
