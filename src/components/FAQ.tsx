"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { WHATSAPP_MESSAGES, waLink } from "@/lib/site";
import { faqs } from "@/lib/faqs";

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        open
          ? "bg-card-bg border-saffron/40 shadow-[0_8px_28px_rgba(199,123,10,0.10)]"
          : "bg-card-bg border-border hover:border-saffron/30"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
      >
        <span className="font-bold text-warm-text text-sm md:text-base">{faq.q}</span>
        <span
          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            open ? "bg-saffron text-white rotate-180" : "bg-saffron-pale text-saffron"
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <p className="px-5 pb-4 text-medium-text text-sm leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="FAQ"
          title="Questions? We've<br/>got answers."
          subtitle="Everything you need to know before your first tiffin. Still curious? Ask us anything on WhatsApp."
        />

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-center"
        >
          <a
            href={waLink(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-saffron hover:text-maroon font-bold text-sm transition-colors duration-200"
          >
            <MessageCircle className="w-4 h-4" />
            Have another question? Chat with us →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
