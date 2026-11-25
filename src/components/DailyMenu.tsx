"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { WHATSAPP_MESSAGES, waLink } from "@/lib/site";

// What every tiffin contains. Two slots stay the same; two change daily.
const tiffinSlots = [
  {
    img: "/images/slot-roti.jpg",
    name: "4 Roti",
    desc: "Fresh wheat roti with desi ghee, made just before packing.",
    fixed: true,
  },
  {
    img: "/images/slot-sabzi.jpg",
    name: "Sabzi",
    desc: "Seasonal vegetables from Hisar mandis. Aloo gobhi today, bhindi tomorrow.",
    fixed: false,
  },
  {
    img: "/images/slot-dal.jpg",
    name: "Dal or Chawal",
    desc: "Dal tadka, kadhi, chole or kale chane, with rice on the side.",
    fixed: false,
  },
  {
    img: "/images/slot-salad.jpg",
    name: "Salad or Achar",
    desc: "Cucumber, tomato and onion, or homemade achar or raita.",
    fixed: true,
  },
];

// Dishes taken from real menu cards shared on WhatsApp
const recentDishes: { name: string; img?: string }[] = [
  { name: "Aloo Gobhi", img: "/images/hero-thali.jpg" },
  { name: "Chole", img: "/images/hero-chole.jpg" },
  { name: "Bhindi", img: "/images/hero-bhindi.jpg" },
  { name: "Kale Chane", img: "/images/hero-chane.jpg" },
  { name: "Dal Tadka" },
  { name: "Tori" },
  { name: "Petha" },
  { name: "Rayata" },
  { name: "Chole Masala" },
];

export default function DailyMenu() {

  return (
    <section id="menu" className="py-20 md:py-28 bg-parchment overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Daily Menu"
          title="New dishes every day. Same full thali."
          subtitle="The sabzi and dal change daily, so you never eat the same thing twice in a row. What's in the box never changes."
        />

        {/* What's always in the tiffin */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {tiffinSlots.map((slot, i) => (
            <motion.div
              key={slot.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
              className={`flex flex-col items-center text-center sm:items-start sm:text-left gap-2 sm:gap-2.5 p-3.5 sm:p-5 bg-card-bg rounded-2xl ${
                slot.fixed ? "border border-border" : "border-[1.5px] border-dashed border-saffron"
              }`}
            >
              <span className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-[3px] border-white shadow-[0_6px_16px_rgba(28,15,15,0.15)]">
                <Image src={slot.img} alt="" fill sizes="64px" className="object-cover" />
              </span>
              <span
                className={`sm:self-start text-[10px] sm:text-[11px] font-extrabold tracking-[0.08em] uppercase rounded-full px-2.5 py-0.5 ${
                  slot.fixed ? "bg-forest-pale text-forest" : "bg-saffron-pale text-saffron"
                }`}
              >
                {slot.fixed ? "Every day" : "Changes daily"}
              </span>
              <h3 className="font-display font-bold text-base sm:text-xl text-warm-text leading-tight">{slot.name}</h3>
              <p className="hidden sm:block text-medium-text text-sm leading-relaxed">{slot.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Dishes from recent menus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-4 sm:mt-6 p-4 sm:p-6 bg-card-bg border border-border rounded-2xl flex flex-col gap-3 sm:gap-4"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-display font-bold text-lg text-warm-text">Dishes from our recent menus</h3>
            <span className="text-light-text text-xs">Taken from the menus we sent on WhatsApp</span>
          </div>
          <ul className="flex flex-wrap gap-1.5 sm:gap-2">
            {recentDishes.map((dish) => (
              <li
                key={dish.name}
                className={`inline-flex items-center gap-1.5 sm:gap-2 bg-white border border-border rounded-full text-xs sm:text-sm font-semibold text-warm-text py-1 pr-3 sm:pr-3.5 ${
                  dish.img ? "pl-1" : "pl-3 sm:pl-3.5"
                }`}
              >
                {dish.img && (
                  <span className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden flex-shrink-0">
                    <Image src={dish.img} alt="" fill sizes="28px" className="object-cover" />
                  </span>
                )}
                {dish.name}
              </li>
            ))}
            <li className="inline-flex items-center border border-dashed border-border rounded-full text-xs sm:text-sm font-semibold text-light-text px-3 sm:px-3.5 py-1">
              + something new every day
            </li>
          </ul>
        </motion.div>

        {/* Today's menu CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center"
        >
          <a
            href={waLink(WHATSAPP_MESSAGES.todaysMenu)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white text-sm font-bold px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4" />
            Get today&apos;s menu on WhatsApp
          </a>
          <p className="text-medium-text text-sm">We share it every morning.</p>
        </motion.div>
      </div>
    </section>
  );
}
