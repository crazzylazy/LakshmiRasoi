"use client";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className={`${centered ? "text-center" : ""} mb-12 md:mb-16`}
    >
      {badge && (
        <span
          className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.15em] uppercase mb-4 ${
            light
              ? "bg-white/20 text-white"
              : "bg-saffron-pale text-saffron border border-saffron/20"
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] ${
          light ? "text-white" : "text-warm-text"
        }`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/75" : "text-medium-text"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
