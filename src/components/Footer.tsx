"use client";
import Image from "next/image";
import { MessageCircle, Phone, MapPin } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
import { SITE, WHATSAPP_MESSAGES, waLink } from "@/lib/site";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Meal Plans", href: "#plans" },
  { label: "Daily Menu", href: "#menu" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Service Area", href: "#area" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const handleNav = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer
      className="pt-16 pb-8 max-md:pb-24"
      style={{ background: "#1C0F0F" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/images/logo-mark-light.png"
                alt=""
                width={203}
                height={189}
                className="w-auto h-12"
              />
              <div>
                <p className="font-display font-bold text-cream text-lg leading-tight">Lakshmi Rasoi</p>
                <p className="text-cream/70 text-xs font-semibold mt-0.5">{SITE.tagline} <span className="text-saffron-light" aria-hidden="true">♥</span></p>
              </div>
            </div>
            <p className="text-cream/50 text-sm leading-relaxed max-w-xs mb-6">
              Fresh, hygienic, home-cooked tiffins delivered daily near Marvel City, Hisar,
              for students, professionals and families who miss ghar ka khana.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href={waLink(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-9 h-9 rounded-full bg-[#25D366]/15 hover:bg-[#25D366] border border-[#25D366]/30 flex items-center justify-center transition-all duration-200 group"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-white" />
              </a>
              <a
                href={SITE.phoneHref}
                aria-label="Call Lakshmi Rasoi"
                className="w-9 h-9 rounded-full bg-saffron/15 hover:bg-saffron border border-saffron/30 flex items-center justify-center transition-all duration-200 group"
              >
                <Phone className="w-4 h-4 text-saffron group-hover:text-white" />
              </a>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lakshmi Rasoi on Instagram"
                title={`Instagram ${SITE.instagramHandle}`}
                className="w-9 h-9 rounded-full bg-[#E1306C]/15 hover:bg-[#E1306C] border border-[#E1306C]/30 flex items-center justify-center transition-all duration-200 group"
              >
                <InstagramIcon className="w-4 h-4 text-[#F06292] group-hover:text-white" />
              </a>
              {/* Facebook placeholder: update when the page goes live */}
              <a
                href="#"
                aria-label="Facebook (coming soon)"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-full bg-cream/10 hover:bg-cream/20 border border-cream/20 flex items-center justify-center transition-all duration-200"
                title="Facebook (coming soon)"
              >
                <FacebookIcon className="w-4 h-4 text-cream/60" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-cream font-bold text-sm mb-5 tracking-wider uppercase">Quick Links</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
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
                <a href={SITE.phoneHref} className="text-cream/75 hover:text-cream text-sm transition-colors">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <p className="text-cream/40 text-xs uppercase tracking-wide mb-1">WhatsApp</p>
                <a
                  href={waLink(WHATSAPP_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:text-[#20BD5A] text-sm transition-colors"
                >
                  Message us on WhatsApp
                </a>
              </li>
              <li>
                <p className="text-cream/40 text-xs uppercase tracking-wide mb-1">Address</p>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/60 hover:text-cream text-sm transition-colors inline-flex items-start gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-saffron" />
                  <span>111SF, Marvel City, SEC-1,<br />Hisar, Haryana – 125001</span>
                </a>
              </li>
              <li>
                <p className="text-cream/40 text-xs uppercase tracking-wide mb-1">Hours</p>
                <p className="text-cream/60 text-sm">Mon – Sat, 8 AM – 9 PM</p>
                <p className="text-cream/40 text-xs mt-1">Lunch 12:00–1:30 PM · Dinner 7:30–9:00 PM</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 text-xs">
            © {new Date().getFullYear()} Lakshmi Rasoi, Hisar. All rights reserved.
          </p>
          <p className="text-cream/20 text-xs">
            Made with ❤️ for home food lovers
          </p>
        </div>
      </div>
    </footer>
  );
}
