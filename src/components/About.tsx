"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const stats = [
  { value: "20+", label: "Meals / Day" },
  { value: "🌿", label: "Pure Veg Always" },
  { value: "100%", label: "Fresh Daily" },
  { value: "₹59", label: "Trial Tiffin" },
];

const values = [
  { icon: "🧼", title: "Clean & Hygienic", desc: "Every meal is prepared in a spotless home kitchen with strict food-safety habits." },
  { icon: "❤️", title: "Made with Love", desc: "Cooked the way a family cooks for its own: patiently, and with care." },
  { icon: "⚖️", title: "Balanced Portions", desc: "Right nutrition, right quantity: roti, dal, sabzi, rice and salad in every box." },
  { icon: "🌾", title: "Quality Ingredients", desc: "Market-fresh vegetables, good atta and pure spices. No shortcuts, no preservatives." },
];

const aboutImages = [
  {
    src: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&h=750&fit=crop&q=80",
    alt: "Authentic Indian homemade dal curry served fresh in a bowl",
    ratio: "aspect-[4/5] lg:aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&h=600&fit=crop&q=80",
    alt: "Fresh chapati dough being prepared in a home kitchen",
    ratio: "aspect-square lg:aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&h=600&fit=crop&q=80",
    alt: "North Indian home-style meal with paneer and fresh roti",
    ratio: "aspect-square lg:aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=750&fit=crop&q=80",
    alt: "Fresh salad with seasonal vegetables, part of every tiffin",
    ratio: "aspect-[4/5] lg:aspect-square",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: image grid + stats */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative"
          >
            {/* 2x2 image grid */}
            <div className="grid grid-cols-2 gap-4">
              {aboutImages.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ duration: 0.25 }}
                  className={`relative rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(28,15,15,0.10)] ${item.ratio}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 45vw, 22vw"
                    className="object-cover"
                  />
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
              <p className="font-display text-3xl font-bold">20+</p>
              <p className="text-cream/80 text-sm font-medium">Meals / Day & Growing</p>
            </motion.div>
          </motion.div>

          {/* Right: text */}
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

            <p className="text-medium-text text-base md:text-lg leading-relaxed mb-4">
              Some things never change: the smell of fresh rotis, the comfort of
              dal-chawal after a long day. Lakshmi Rasoi began with one simple
              belief: nobody in Hisar should have to miss ghar ka khana just
              because life got busy.
            </p>
            <p className="text-medium-text text-base leading-relaxed mb-6">
              Today we cook for students away from home, busy professionals,
              PG residents tired of mess food, and families who want a reliable,
              hygienic kitchen they can trust every day.
            </p>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {values.map((val, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="flex items-start gap-3 p-3.5 bg-card-bg border border-border rounded-2xl"
                >
                  <span className="text-2xl flex-shrink-0" aria-hidden="true">{val.icon}</span>
                  <div>
                    <p className="font-bold text-warm-text text-sm mb-0.5">{val.title}</p>
                    <p className="text-light-text text-sm">{val.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-4 pt-5 border-t border-border">
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
