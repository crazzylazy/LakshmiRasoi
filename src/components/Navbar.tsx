"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { SITE, WHATSAPP_MESSAGES, waLink } from "@/lib/site";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Meal Plans", href: "#plans" },
  { label: "Menu", href: "#menu" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md shadow-[0_2px_24px_rgba(28,15,15,0.08)] border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNav("#home"); }}
              className="flex items-center gap-2.5 group"
            >
              <Image
                src="/images/logo-mark.png"
                alt=""
                width={203}
                height={189}
                priority
                className="w-auto h-10 md:h-12 group-hover:scale-105 transition-transform duration-200"
              />
              <div className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold text-warm-text tracking-tight">Lakshmi Rasoi</span>
                <span className="text-[11px] text-medium-text font-semibold mt-0.5">{SITE.tagline} <span className="text-maroon" aria-hidden="true">♥</span></span>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7" aria-label="Primary">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  className="text-sm font-semibold text-medium-text hover:text-maroon transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-saffron after:transition-all after:duration-200 hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <a
              href={waLink(WHATSAPP_MESSAGES.order)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 bg-maroon hover:bg-maroon-light text-cream text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-[0_4px_16px_rgba(123,28,28,0.35)] hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              Order on WhatsApp
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-cream-dark hover:bg-border transition-colors duration-200"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="w-5 h-5 text-warm-text" /> : <Menu className="w-5 h-5 text-warm-text" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-16 left-0 right-0 z-40 bg-parchment border-b border-border shadow-[0_8px_32px_rgba(28,15,15,0.12)] lg:hidden max-h-[calc(100dvh-4rem)] overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-1">
              {[{ label: "Home", href: "#home" }, ...navLinks, { label: "Service Area", href: "#area" }].map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  className="py-3 px-4 rounded-xl text-base font-semibold text-warm-text hover:bg-cream-dark hover:text-maroon transition-all duration-150"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-4 pt-4 border-t border-border">
                <a
                  href={waLink(WHATSAPP_MESSAGES.order)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-maroon text-cream text-sm font-bold px-5 py-3.5 rounded-xl hover:bg-maroon-light transition-colors duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  Order on WhatsApp
                </a>
                <a
                  href={SITE.phoneHref}
                  className="mt-2 flex items-center justify-center gap-2 border-2 border-maroon text-maroon text-sm font-bold px-5 py-3 rounded-xl hover:bg-maroon hover:text-cream transition-colors duration-200"
                >
                  Call {SITE.phoneDisplay}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
