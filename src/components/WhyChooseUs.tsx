"use client";
import { motion } from "framer-motion";
import { Check, X, MessageCircle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { WHATSAPP_MESSAGES, waLink } from "@/lib/site";

// What a Lakshmi Rasoi tiffin gives you
const withUs = [
  "Cooked fresh, every meal",
  "Desi ghee roti, home recipes",
  "Your spice level: low, medium or high",
  "From ₹81 a meal on a plan",
  "0 minutes of your time",
  "Lunch at your door by 1:30 PM",
];

// The everyday problems with the other options, in the same order
const theUsual = [
  "Mess food is often reheated",
  "Apps serve oily restaurant food",
  "One spice level for everyone",
  "Apps cost more, plus fees",
  "Cooking takes 1 to 2 hours a day",
  "Mess timings you have to follow",
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-cream relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(199,123,10,0.08) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          badge="Why Choose Us"
          title="Ghar ka khana, without cooking it yourself"
          subtitle="How a Lakshmi Rasoi tiffin compares with a mess, delivery apps or cooking yourself."
        />

        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_auto_1fr] gap-0 md:gap-5 items-stretch">
          {/* With us */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative overflow-hidden bg-maroon text-cream rounded-3xl p-5 sm:p-7 flex flex-col gap-4 shadow-[0_20px_44px_rgba(123,28,28,0.3)]"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 w-48 h-48 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(232,150,13,0.3), transparent 70%)" }}
            />
            <h3 className="relative font-display font-bold text-xl sm:text-2xl flex items-center gap-2.5">
              <span aria-hidden="true">🍱</span> Lakshmi Rasoi
            </h3>
            <ul className="relative flex flex-col gap-2.5 sm:gap-3">
              {withUs.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm sm:text-[15px] font-medium leading-snug">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#A6E3C2]" strokeWidth={3.5} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* VS badge */}
          <div className="relative z-10 flex items-center justify-center -my-4 md:my-0" aria-hidden="true">
            <span className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-saffron text-white font-display font-bold text-base flex items-center justify-center shadow-[0_6px_16px_rgba(199,123,10,0.4)] ring-4 ring-cream">
              VS
            </span>
          </div>

          {/* The usual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="bg-card-bg border border-border rounded-3xl p-5 sm:p-7 flex flex-col gap-4"
          >
            <h3 className="font-display font-bold text-lg sm:text-xl text-medium-text">Mess, apps or cooking</h3>
            <ul className="flex flex-col gap-2.5 sm:gap-3">
              {theUsual.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm sm:text-[15px] text-medium-text leading-snug">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#B4553F]/10 flex items-center justify-center flex-shrink-0">
                    <X className="w-3 h-3 text-[#B4553F]" strokeWidth={3.5} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center"
        >
          <a
            href={waLink(WHATSAPP_MESSAGES.trial)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-maroon hover:bg-maroon-dark text-cream text-sm font-bold px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-[0_8px_20px_rgba(123,28,28,0.25)]"
          >
            <MessageCircle className="w-4 h-4" />
            Try one tiffin for ₹59
          </a>
          <p className="text-medium-text text-sm">No commitment. See the difference yourself.</p>
        </motion.div>
      </div>
    </section>
  );
}
