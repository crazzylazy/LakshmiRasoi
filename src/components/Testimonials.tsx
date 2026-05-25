"use client";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    location: "Working professional",
    quote:
      "Feels just like home food. After moving cities for work, I was struggling to find good food. Lakshmi Rasoi has been a lifesaver — the dal and roti remind me of my mom's cooking.",
    rating: 5,
    avatar: "PS",
    color: "#FDF0F0",
    avatarBg: "#7B1C1C",
  },
  {
    name: "Rahul Mehta",
    role: "College Student",
    location: "Hostel resident",
    quote:
      "Perfect for daily office lunch. As a hostel student, mess food gets boring fast. The rotating menu here is amazing — I actually look forward to meal times now!",
    rating: 5,
    avatar: "RM",
    color: "#E8F5EE",
    avatarBg: "#2D6A4F",
  },
  {
    name: "Anita Patel",
    role: "Homemaker",
    location: "Residential area",
    quote:
      "Fresh, simple, and always on time. I subscribed for my elderly parents and they absolutely love it. The food is light, nutritious, and delivered exactly when promised.",
    rating: 5,
    avatar: "AP",
    color: "#FEF3DC",
    avatarBg: "#C77B0A",
  },
  {
    name: "Vikram Singh",
    role: "Gym Trainer",
    location: "Nearby resident",
    quote:
      "High protein, low oil — they customised my meals perfectly. Great for fitness folks who still want Indian food. The dal is excellent and portions are just right.",
    rating: 5,
    avatar: "VS",
    color: "#FDF0F0",
    avatarBg: "#7B1C1C",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Testimonials"
          title="Loved by families,<br/>praised by professionals."
          subtitle="Real words from real customers who have made Lakshmi Rasoi part of their daily life."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className="relative flex flex-col p-6 rounded-3xl border border-border shadow-sm hover:shadow-[0_12px_40px_rgba(28,15,15,0.09)] transition-all duration-300 overflow-hidden"
              style={{ background: t.color }}
            >
              {/* Quote icon */}
              <Quote
                className="absolute top-4 right-4 w-8 h-8 opacity-10"
                style={{ color: t.avatarBg }}
              />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <span key={j} className="text-saffron text-sm">★</span>
                ))}
              </div>

              {/* Quote text */}
              <p className="text-warm-text text-sm leading-relaxed flex-1 mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-cream flex-shrink-0"
                  style={{ background: t.avatarBg }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-warm-text text-sm">{t.name}</p>
                  <p className="text-light-text text-xs">{t.role} · {t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
