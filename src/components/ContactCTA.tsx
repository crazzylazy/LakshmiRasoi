"use client";
import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin, Clock, Check } from "lucide-react";

import { SITE, WHATSAPP_MESSAGES, waLink } from "@/lib/site";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

const points = [
  "Trial tiffin for ₹59, no commitment",
  "Delivered hot within 3 km of Marvel City",
  "Plans from ₹1,799 with 10% off",
];

export default function ContactCTA() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl px-6 py-10 sm:px-10 md:px-14 md:py-14 shadow-[0_24px_60px_rgba(123,28,28,0.3)]"
          style={{ background: "linear-gradient(120deg, #5A1010 0%, #7B1C1C 55%, #9B2626 100%)" }}
        >
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(232,150,13,0.28), transparent 70%)" }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-12 items-center">
            {/* Left: headline + actions */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
              <h2 className="font-display text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold text-cream leading-tight">
                Start with a trial
                <br />
                <span className="text-saffron-light">tiffin today.</span>
              </h2>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <a
                  href={waLink(WHATSAPP_MESSAGES.trial)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold px-6 py-3 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  Order Trial on WhatsApp
                </a>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center gap-2 bg-white text-maroon hover:bg-saffron-pale font-bold px-6 py-3 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Middle: why now + contact details */}
            <div className="flex flex-col gap-5 text-cream">
              <p className="font-bold text-lg leading-snug">One meal is all it takes. Your first tiffin can arrive at the next meal slot.</p>
              <ul className="flex flex-col gap-2.5">
                {points.map((point) => (
                  <li key={point} className="flex items-center gap-2.5 text-sm text-cream/90">
                    <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-saffron-light" strokeWidth={3} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-white/15 flex flex-col gap-2 text-sm text-cream/80">
                <a href={SITE.phoneHref} className="inline-flex items-center gap-2 hover:text-cream transition-colors">
                  <Phone className="w-4 h-4 text-saffron-light flex-shrink-0" />
                  <span className="font-semibold text-cream">{SITE.phoneDisplay}</span>
                </a>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2 hover:text-cream transition-colors"
                >
                  <MapPin className="w-4 h-4 text-saffron-light flex-shrink-0 mt-0.5" />
                  {SITE.address}
                </a>
                <p className="inline-flex items-center gap-2">
                  <Clock className="w-4 h-4 text-saffron-light flex-shrink-0" />
                  Mon to Sat, 8 AM to 9 PM
                </p>
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-cream transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-saffron-light flex-shrink-0" />
                  Follow us on Instagram <span className="font-semibold text-cream">{SITE.instagramHandle}</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
