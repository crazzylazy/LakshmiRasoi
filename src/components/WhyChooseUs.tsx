"use client";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const features = [
  {
    emoji: "🔥",
    title: "Freshly Cooked Daily",
    description: "No reheating, no pre-cooking. Every meal is prepared fresh each morning and evening.",
    color: "#FEF3DC",
    accent: "#C77B0A",
  },
  {
    emoji: "🏠",
    title: "Homemade Taste",
    description: "Recipes passed down through generations — simple, authentic, and deeply satisfying.",
    color: "#FDF0F0",
    accent: "#7B1C1C",
  },
  {
    emoji: "🧼",
    title: "Hygienic Preparation",
    description: "Prepared in a clean, food-safe kitchen with strict hygiene standards every single day.",
    color: "#E8F5EE",
    accent: "#2D6A4F",
  },
  {
    emoji: "💰",
    title: "Affordable Plans",
    description: "Flexible monthly and weekly plans designed to be easy on your pocket.",
    color: "#FEF3DC",
    accent: "#C77B0A",
  },
  {
    emoji: "⏰",
    title: "Timely Delivery",
    description: "Punctual deliveries so your meal arrives hot and on time, every day.",
    color: "#FDF0F0",
    accent: "#7B1C1C",
  },
  {
    emoji: "🎛️",
    title: "Custom Preferences",
    description: "We accommodate dietary needs — jain, no onion-garlic, low spice, and more.",
    color: "#E8F5EE",
    accent: "#2D6A4F",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(199,123,10,0.08) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(123,28,28,0.06) 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          badge="Why Choose Us"
          title="Food made with intention,<br/>served with care."
          subtitle="We believe good food is the foundation of a good day. Here's what makes Lakshmi Rasoi different."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group p-6 bg-card-bg border border-border rounded-3xl shadow-sm hover:shadow-[0_12px_40px_rgba(28,15,15,0.10)] transition-all duration-300 cursor-default"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300"
                style={{ background: feat.color }}
              >
                {feat.emoji}
              </div>

              <h3 className="font-display font-bold text-warm-text text-lg mb-2">
                {feat.title}
              </h3>
              <p className="text-light-text text-sm leading-relaxed">
                {feat.description}
              </p>

              {/* Accent line */}
              <div
                className="mt-5 h-0.5 w-0 group-hover:w-12 rounded-full transition-all duration-500"
                style={{ background: feat.accent }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
