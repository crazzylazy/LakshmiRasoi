"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const WHATSAPP_NUMBER = "917988267228";
const WHATSAPP_MSG = encodeURIComponent("Hello! I'd like to know more about Lakshmi Rasoi.");

export default function FloatingWhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip bubble */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.92 }}
            transition={{ duration: 0.2 }}
            className="bg-white text-warm-text text-xs font-semibold px-4 py-2.5 rounded-2xl shadow-[0_8px_32px_rgba(28,15,15,0.15)] border border-border whitespace-nowrap"
          >
            💬 Chat with us on WhatsApp!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Nudge tooltip — shown on load, dismissable */}
      <AnimatePresence>
        {!dismissed && !hovered && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ delay: 3, duration: 0.4 }}
            className="relative flex items-center gap-2 bg-white text-warm-text text-xs font-semibold px-3 py-2 rounded-2xl shadow-[0_4px_20px_rgba(28,15,15,0.12)] border border-border"
          >
            <span>Order now on WhatsApp!</span>
            <button
              onClick={() => setDismissed(true)}
              className="ml-1 text-light-text hover:text-warm-text transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-3 h-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.5)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.6)] transition-shadow duration-200"
        aria-label="Contact on WhatsApp"
      >
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"
          style={{ animationDuration: "2.5s" }}
        />
        <MessageCircle className="w-7 h-7 text-white relative z-10" />
      </motion.a>
    </div>
  );
}
