"use client";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";


const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Meal Plans", href: "#plans" },
  { label: "Daily Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const WHATSAPP_NUMBER = "917988267228";
const PHONE_NUMBER = "+91 79882 67228";

const handleNav = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer
      className="pt-16 pb-8"
      style={{ background: "#1C0F0F" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-maroon flex items-center justify-center shadow-[0_4px_12px_rgba(123,28,28,0.4)]">
                <span className="text-cream text-sm font-display font-bold leading-none">LR</span>
              </div>
              <div>
                <p className="font-display font-bold text-cream text-lg leading-tight">Lakshmi Rasoi</p>
                <p className="text-saffron text-[10px] font-semibold tracking-[0.15em] uppercase">Daily Tiffin & Meal Service</p>
              </div>
            </div>
            <p className="text-cream/50 text-sm leading-relaxed max-w-xs mb-6">
              Fresh homemade meals prepared with care, delivered to your door
              daily. Taste the warmth of a home kitchen.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366]/15 hover:bg-[#25D366] border border-[#25D366]/30 flex items-center justify-center transition-all duration-200 group"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-white" />
              </a>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="w-9 h-9 rounded-full bg-saffron/15 hover:bg-saffron border border-saffron/30 flex items-center justify-center transition-all duration-200 group"
              >
                <Phone className="w-4 h-4 text-saffron group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-cream font-bold text-sm mb-5 tracking-wider uppercase">Quick Links</p>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                    className="text-cream/50 hover:text-saffron text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-cream font-bold text-sm mb-5 tracking-wider uppercase">Contact</p>
            <ul className="flex flex-col gap-4">
              <li>
                <p className="text-cream/40 text-xs uppercase tracking-wide mb-1">Phone</p>
                <a href={`tel:${PHONE_NUMBER}`} className="text-cream/75 hover:text-cream text-sm transition-colors">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <p className="text-cream/40 text-xs uppercase tracking-wide mb-1">WhatsApp</p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:text-[#20BD5A] text-sm transition-colors"
                >
                  Message us on WhatsApp
                </a>
              </li>
              <li>
                <p className="text-cream/40 text-xs uppercase tracking-wide mb-1">Address</p>
                <p className="text-cream/60 text-sm">111SF, Marvel City, SEC-1,<br />Hisar, Haryana – 125001</p>
              </li>
              <li>
                <p className="text-cream/40 text-xs uppercase tracking-wide mb-1">Hours</p>
                <p className="text-cream/60 text-sm">Mon – Sat, 8 AM – 9 PM</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 text-xs">
            © {new Date().getFullYear()} Lakshmi Rasoi. All rights reserved.
          </p>
          <p className="text-cream/20 text-xs">
            Made with ❤️ for home food lovers
          </p>
        </div>
      </div>
    </footer>
  );
}
