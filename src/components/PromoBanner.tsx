"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_MESSAGES, waLink } from "@/lib/site";

export default function PromoBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section ref={ref} className="overflow-hidden relative">
      {/* Parallax image wrapper */}
      <motion.div style={{ y }} className="relative">
        <Image
          src="/images/promo-banner.png"
          alt="Ghar Jaisa Swaad, Roz Garma-Garam – Lakshmi Rasoi, tiffin service in Hisar"
          width={1920}
          height={720}
          sizes="100vw"
          className="w-full h-auto block"
        />

        {/* Subtle vignette for depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.06) 0%, transparent 15%, transparent 85%, rgba(0,0,0,0.08) 100%)",
          }}
        />
      </motion.div>

      {/* Floating CTA chip over the banner */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden sm:flex"
      >
        <a
          href={waLink(WHATSAPP_MESSAGES.order)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold px-6 py-3 rounded-full text-sm shadow-[0_8px_32px_rgba(37,211,102,0.5)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] transition-all duration-200 hover:-translate-y-0.5"
        >
          <MessageCircle className="w-4 h-4" />
          Order Your Tiffin Today
        </a>
      </motion.div>
    </section>
  );
}
