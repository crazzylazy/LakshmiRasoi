"use client";
import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin, Clock } from "lucide-react";

const WHATSAPP_NUMBER = "917988267228";
const PHONE_NUMBER = "+91 79882 67228";
const WHATSAPP_MSG = encodeURIComponent("Hello! I'd like to start my daily meal plan today.");

const contactDetails = [
  {
    icon: Phone,
    label: "Call Us",
    value: PHONE_NUMBER,
    href: `tel:${PHONE_NUMBER}`,
    color: "rgba(255,255,255,0.15)",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "111SF, Marvel City, SEC-1, Hisar, Haryana – 125001",
    href: "https://maps.google.com/maps?q=29.235105629799417,75.77704615506661",
    color: "rgba(255,255,255,0.15)",
  },
  {
    icon: Clock,
    label: "Service Hours",
    value: "Mon–Sat, 8 AM – 9 PM",
    href: null,
    color: "rgba(255,255,255,0.15)",
  },
];

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #5A1010 0%, #7B1C1C 40%, #9B2626 100%)",
      }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(199,123,10,0.2) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.15em] uppercase mb-5 bg-white/15 text-saffron-pale border border-white/20">
            Get Started Today
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-5">
            Start your daily
            <br />
            <span className="text-saffron-light">meal plan today.</span>
          </h2>
          <p className="text-cream/70 text-lg max-w-xl mx-auto">
            Fresh, homemade meals await you. Reach out on WhatsApp or give us a
            call — we&apos;re happy to answer any questions.
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold px-8 py-4 rounded-full text-sm transition-all duration-200 hover:shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Order on WhatsApp
          </a>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center gap-2.5 bg-white/15 backdrop-blur-sm hover:bg-white/25 border border-white/30 text-cream font-bold px-8 py-4 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </motion.div>

        {/* Contact info cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {contactDetails.map((detail, i) => {
            const Icon = detail.icon;
            const content = (
              <div className="flex items-center gap-3 p-5 rounded-2xl border border-white/15 bg-white/10 hover:bg-white/15 transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-cream" />
                </div>
                <div>
                  <p className="text-cream/60 text-xs font-semibold uppercase tracking-wide">{detail.label}</p>
                  <p className="text-cream text-sm font-semibold mt-0.5">{detail.value}</p>
                </div>
              </div>
            );

            return detail.href ? (
              <a key={i} href={detail.href} target={detail.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                {content}
              </a>
            ) : (
              <div key={i}>{content}</div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
