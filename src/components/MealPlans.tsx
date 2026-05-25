"use client";
import { motion } from "framer-motion";
import { MessageCircle, Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const WHATSAPP_NUMBER = "917988267228";

const plans = [
  {
    id: "trial",
    name: "Trial Tiffin",
    emoji: "🎁",
    tagline: "Try before you commit",
    description: "Perfect for first-timers. Sample our home-cooked food with no obligations.",
    items: ["2 Roti or Rice", "1 Sabzi or Dal / Kadhi", "Salad or Pickle"],
    price: "Starting from ₹59",
    period: "per meal",
    popular: false,
    theme: { card: "#FFFBF4", badge: "#FEF3DC", badgeText: "#C77B0A", btn: "border-maroon text-maroon" },
  },
  {
    id: "lunch",
    name: "Lunch Tiffin",
    emoji: "☀️",
    tagline: "Midday nourishment",
    description: "A balanced, wholesome lunch delivered fresh every weekday.",
    items: ["4 Roti or Rice", "1 Sabzi", "Salad", "Seasonal special"],
    price: "Starting from ₹2,999",
    period: "per month",
    popular: false,
    theme: { card: "#FFFBF4", badge: "#FEF3DC", badgeText: "#C77B0A", btn: "border-maroon text-maroon" },
  },
  {
    id: "dinner",
    name: "Dinner Tiffin",
    emoji: "🌙",
    tagline: "End your day right",
    description: "Warm, comforting dinner prepared daily with love and fresh ingredients.",
    items: ["4 Roti or Rice", "1 Sabzi or Dal / Kadhi", "Pickle / Salad", "Sweet occasionally"],
    price: "Starting from ₹2,999",
    period: "per month",
    popular: true,
    theme: { card: "#7B1C1C", badge: "rgba(255,255,255,0.15)", badgeText: "#FEF3DC", btn: "border-white text-white hover:bg-white hover:text-maroon" },
  },
  {
    id: "both",
    name: "Lunch + Dinner",
    emoji: "🍱",
    tagline: "Full day covered",
    description: "Our most popular combo — healthy meals morning and evening.",
    items: ["Full Lunch Tiffin", "Full Dinner Tiffin", "Priority delivery", "Flexible timing"],
    price: "Starting from ₹5,799",
    period: "per month",
    popular: false,
    theme: { card: "#FFFBF4", badge: "#FEF3DC", badgeText: "#C77B0A", btn: "border-maroon text-maroon" },
  },
  {
    id: "monthly",
    name: "Monthly Meal Plan",
    emoji: "📅",
    tagline: "Best value — save more",
    description: "Full 30-day plan with rotating menu, priority support, and maximum savings.",
    items: ["All meals included", "30-day rotating menu", "Custom preferences", "Priority support", "Free trial day"],
    price: "Starting from ₹5,999",
    period: "per month",
    popular: false,
    theme: { card: "#FEF3DC", badge: "rgba(199,123,10,0.15)", badgeText: "#C77B0A", btn: "border-maroon text-maroon" },
  },
];

function PlanCard({ plan, index }: { plan: (typeof plans)[0]; index: number }) {
  const isLight = plan.popular;
  const msg = encodeURIComponent(`Hello! I'm interested in the ${plan.name} plan.`);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="relative flex flex-col rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(28,15,15,0.10)] border border-border"
      style={{ background: plan.theme.card }}
    >
      {plan.popular && (
        <div className="absolute top-4 right-4 bg-saffron text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider uppercase shadow-sm">
          Most Popular
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start gap-3 mb-4">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
            style={{ background: plan.theme.badge }}
          >
            {plan.emoji}
          </div>
          <div>
            <h3
              className={`font-display font-bold text-lg leading-tight ${isLight ? "text-cream" : "text-warm-text"}`}
            >
              {plan.name}
            </h3>
            <p
              className="text-xs font-semibold mt-0.5"
              style={{ color: plan.theme.badgeText }}
            >
              {plan.tagline}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className={`text-sm leading-relaxed mb-5 ${isLight ? "text-cream/75" : "text-medium-text"}`}>
          {plan.description}
        </p>

        {/* Items */}
        <ul className="flex flex-col gap-2 mb-6 flex-1">
          {plan.items.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm">
              <Check
                className="w-3.5 h-3.5 flex-shrink-0"
                style={{ color: plan.theme.badgeText }}
              />
              <span className={isLight ? "text-cream/85" : "text-medium-text"}>{item}</span>
            </li>
          ))}
        </ul>

        {/* Price */}
        <div className={`mb-5 pb-5 border-b ${isLight ? "border-white/20" : "border-border"}`}>
          <p className={`font-display font-bold text-2xl ${isLight ? "text-cream" : "text-warm-text"}`}>
            {plan.price}
          </p>
          <p className={`text-xs ${isLight ? "text-cream/60" : "text-light-text"}`}>{plan.period}</p>
        </div>

        {/* CTA */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 border-2 font-bold text-sm px-5 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 ${plan.theme.btn} ${
            isLight
              ? "border-white/50 text-white hover:bg-white hover:text-maroon"
              : "border-maroon text-maroon hover:bg-maroon hover:text-cream"
          }`}
        >
          <MessageCircle className="w-4 h-4" />
          Enquire Now
        </a>
      </div>
    </motion.div>
  );
}

export default function MealPlans() {
  return (
    <section id="plans" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Meal Plans"
          title="Simple plans, wholesome meals"
          subtitle="Choose a plan that fits your schedule and appetite. All meals are freshly prepared daily with no preservatives."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {plans.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-light-text text-sm mt-8"
        >
          * Prices vary based on location and plan duration. Contact us for exact pricing.
        </motion.p>
      </div>
    </section>
  );
}
