"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { SITE, WHATSAPP_MESSAGES, waLink } from "@/lib/site";

export default function StickyMobileCTA() {
  const [scrolled, setScrolled] = useState(false);
  const [inPlans, setInPlans] = useState(false);

  useEffect(() => {
    // Appear after the user scrolls past the hero
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Step aside in the plan builder: it has its own sticky Send button there
    const plans = document.getElementById("plans");
    if (!plans) return;
    const io = new IntersectionObserver(([entry]) => setInPlans(entry.isIntersecting), {
      rootMargin: "-30% 0px -30% 0px",
    });
    io.observe(plans);
    return () => io.disconnect();
  }, []);

  const visible = scrolled && !inPlans;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          exit={{ y: 80 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card-bg/95 backdrop-blur-md border-t border-border shadow-[0_-4px_24px_rgba(28,15,15,0.12)] px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
        >
          <div className="flex gap-3">
            <a
              href={waLink(WHATSAPP_MESSAGES.order)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold text-sm px-4 py-3 rounded-xl shadow-[0_4px_16px_rgba(37,211,102,0.35)] active:scale-[0.98] transition-transform"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href={SITE.phoneHref}
              className="flex-1 flex items-center justify-center gap-2 bg-maroon text-cream font-bold text-sm px-4 py-3 rounded-xl shadow-[0_4px_16px_rgba(123,28,28,0.35)] active:scale-[0.98] transition-transform"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
