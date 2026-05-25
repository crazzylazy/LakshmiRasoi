"use client";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const stats = [
  { value: "500+", label: "Happy Customers" },
  { value: "3+", label: "Years of Service" },
  { value: "100%", label: "Fresh Daily" },
  { value: "5★", label: "Avg. Rating" },
];

const values = [
  { icon: "🌿", title: "Clean & Hygienic", desc: "Prepared in a spotless, certified home kitchen." },
  { icon: "❤️", title: "Made with Love", desc: "Every meal carries the care of a home cook." },
  { icon: "⚖️", title: "Balanced Portions", desc: "Right nutrition, right quantity, every day." },
];

const galleryItems = [
  { bg: "linear-gradient(135deg, #F5EDD8 0%, #EDD5B8 100%)", emoji: "🍛", label: "Dal & Roti" },
  { bg: "linear-gradient(135deg, #E8F5EE 0%, #DCFCE7 100%)", emoji: "🥗", label: "Sabzi" },
  { bg: "linear-gradient(135deg, #FEF3DC 0%, #FDEFC4 100%)", emoji: "🍚", label: "Rice & Curry" },
  { bg: "linear-gradient(135deg, #FDF0F0 0%, #FCDADA 100%)", emoji: "🫓", label: "Fresh Rotis" },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — image grid + stats */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative"
          >
            {/* 2x2 image grid */}
            <div className="grid grid-cols-2 gap-4">
              {galleryItems.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ duration: 0.25 }}
                  className={`relative rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(28,15,15,0.10)] ${
                    i === 0 ? "aspect-[4/5]" : i === 1 ? "aspect-square" : i === 2 ? "aspect-square" : "aspect-[4/5]"
                  }`}
                  style={{ background: item.bg }}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <span className="text-5xl">{item.emoji}</span>
                    <span className="text-sm font-bold text-warm-text/70">{item.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-4 lg:-right-8 bg-maroon rounded-2xl p-5 shadow-[0_12px_40px_rgba(123,28,28,0.3)] text-cream"
            >
              <p className="font-display text-3xl font-bold">500+</p>
              <p className="text-cream/80 text-sm font-medium">Meals served daily</p>
            </motion.div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <SectionHeading
              badge="Our Story"
              title="The warmth of home,<br/>on your plate."
              centered={false}
            />

            <p className="text-medium-text text-base md:text-lg leading-relaxed mb-6">
              Lakshmi Rasoi brings the comfort of home-cooked meals to your daily
              routine. Our tiffins are prepared fresh every day with balanced
              portions, quality ingredients, and simple Indian flavours.
            </p>
            <p className="text-medium-text text-base leading-relaxed mb-8">
              We understand the need for nutritious, hygienic, and affordable
              food for students, working professionals, and families who deserve
              a proper meal without the hassle of cooking every day.
            </p>

            {/* Values */}
            <div className="flex flex-col gap-4 mb-10">
              {values.map((val, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="flex items-start gap-4 p-4 bg-card-bg border border-border rounded-2xl"
                >
                  <span className="text-2xl flex-shrink-0">{val.icon}</span>
                  <div>
                    <p className="font-bold text-warm-text text-sm mb-0.5">{val.title}</p>
                    <p className="text-light-text text-sm">{val.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-4 pt-6 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display font-bold text-2xl text-maroon">{stat.value}</p>
                  <p className="text-light-text text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
