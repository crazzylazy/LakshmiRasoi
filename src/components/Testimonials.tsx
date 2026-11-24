"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Star, MessageCircle } from "lucide-react";
import { GOOGLE, WHATSAPP_MESSAGES, waLink } from "@/lib/site";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

const steps = [
  {
    num: "1",
    text: "Scan the QR code or click the button below",
    color: "bg-[#4285F4]",
  },
  {
    num: "2",
    text: "Sign in with your Google account",
    color: "bg-[#34A853]",
  },
  {
    num: "3",
    text: "Share your honest experience. It helps others in Hisar",
    color: "bg-[#EA4335]",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-cream overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center gap-2 bg-saffron-pale border border-saffron/25 text-saffron text-xs font-bold px-4 py-1.5 rounded-full tracking-[0.15em] uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
            Reviews
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-warm-text leading-[1.1] mb-4">
            Find us on <span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span>
          </h2>
          <p className="text-medium-text text-base md:text-lg max-w-xl mx-auto">
            We&apos;re verified on Google Business. Read what our customers say, or share your own experience after your first tiffin.
          </p>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-card-bg border border-border rounded-3xl shadow-[0_8px_40px_rgba(28,15,15,0.08)] overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

            {/* Left: QR + Google badge */}
            <div className="flex flex-col items-center justify-center p-8 md:p-10 border-b md:border-b-0 md:border-r border-border bg-parchment">
              {/* Official Google Business Profile QR sticker */}
              <div className="w-full max-w-[260px] bg-white rounded-3xl p-3 shadow-[0_8px_32px_rgba(28,15,15,0.12)] mb-4">
                <Image
                  src="/images/google-qr-hd.png"
                  alt={`Google QR code: scan to open ${GOOGLE.businessName} on Google`}
                  width={2350}
                  height={2623}
                  unoptimized
                  className="w-full h-auto"
                />
              </div>

              <p className="text-light-text text-xs text-center font-medium">Scan with your phone camera</p>

              {/* Stars */}
              <div className="flex items-center gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                ))}
                <span className="ml-1 text-sm font-bold text-warm-text">5.0</span>
                <span className="text-light-text text-xs ml-1">on Google</span>
              </div>
            </div>

            {/* Right: steps + CTAs */}
            <div className="flex flex-col justify-center p-8 md:p-12">
              <h3 className="font-display text-2xl font-bold text-warm-text mb-2">
                Tried our tiffin?
              </h3>
              <p className="text-medium-text text-sm mb-8 leading-relaxed">
                Your review helps other families in Hisar find honest, homemade food. Takes just 30 seconds.
              </p>

              {/* Steps */}
              <div className="flex flex-col gap-4 mb-8">
                {steps.map((s) => (
                  <div key={s.num} className="flex items-start gap-3">
                    <span className={`w-6 h-6 rounded-full ${s.color} text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      {s.num}
                    </span>
                    <p className="text-medium-text text-sm">{s.text}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={GOOGLE.reviewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-maroon hover:bg-maroon-light text-cream font-bold px-6 py-3 rounded-full text-sm transition-all duration-200 hover:shadow-[0_8px_24px_rgba(123,28,28,0.3)] hover:-translate-y-0.5"
                >
                  <GoogleIcon />
                  Leave a Review
                </a>
                <a
                  href={waLink(WHATSAPP_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border-2 border-border hover:border-saffron text-medium-text hover:text-saffron font-semibold px-6 py-3 rounded-full text-sm transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  Ask us anything
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 flex items-center justify-center gap-3 text-center"
        >
          <span className="hidden sm:block h-px w-12 bg-border" />
          <p className="text-medium-text text-sm font-semibold flex items-center gap-2">
            <ExternalLink className="w-3.5 h-3.5" />
            Verified on Google Business · Hisar, Haryana
          </p>
          <span className="hidden sm:block h-px w-12 bg-border" />
        </motion.div>

      </div>
    </section>
  );
}
