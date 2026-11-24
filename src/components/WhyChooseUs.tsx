"use client";
import { motion } from "framer-motion";
import { Check, X, MessageCircle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { WHATSAPP_MESSAGES, waLink } from "@/lib/site";

type Tone = "yes" | "no" | "meh";
type Cell = { text: string; tone: Tone };

const columns = [
  { key: "us", label: "Lakshmi Rasoi", emoji: "🍱" },
  { key: "mess", label: "PG / hostel mess", emoji: "🏢" },
  { key: "apps", label: "Food delivery apps", emoji: "🛵" },
  { key: "self", label: "Cooking yourself", emoji: "🍳" },
] as const;

const others = columns.slice(1);

const rows: { label: string; us: Cell; mess: Cell; apps: Cell; self: Cell }[] = [
  {
    label: "Cooked fresh that day",
    us: { text: "Every meal", tone: "yes" },
    mess: { text: "Often reheated", tone: "meh" },
    apps: { text: "Depends", tone: "meh" },
    self: { text: "Yes", tone: "yes" },
  },
  {
    label: "Tastes like home",
    us: { text: "Desi ghee roti, home recipes", tone: "yes" },
    mess: { text: "No", tone: "no" },
    apps: { text: "Restaurant style", tone: "no" },
    self: { text: "Yes", tone: "yes" },
  },
  {
    label: "Your spice level",
    us: { text: "Low, medium or high", tone: "yes" },
    mess: { text: "No", tone: "no" },
    apps: { text: "Sometimes", tone: "meh" },
    self: { text: "Yes", tone: "yes" },
  },
  {
    label: "Price per meal",
    us: { text: "From ₹81 on a plan", tone: "yes" },
    mess: { text: "Low", tone: "meh" },
    apps: { text: "High, plus fees", tone: "no" },
    self: { text: "Low, plus gas", tone: "meh" },
  },
  {
    label: "Your time each day",
    us: { text: "0 minutes", tone: "yes" },
    mess: { text: "Fixed mess timings", tone: "meh" },
    apps: { text: "Order and wait", tone: "meh" },
    self: { text: "1 to 2 hours", tone: "no" },
  },
  {
    label: "Delivered on time",
    us: { text: "Lunch by 1:30 PM", tone: "yes" },
    mess: { text: "Not delivered", tone: "meh" },
    apps: { text: "Varies", tone: "meh" },
    self: { text: "Not needed", tone: "meh" },
  },
];

function Mark({ cell, onDark = false }: { cell: Cell; onDark?: boolean }) {
  if (cell.tone === "yes") {
    return (
      <span className="inline-flex items-center gap-1.5">
        <Check className={`w-4 h-4 flex-shrink-0 ${onDark ? "text-[#A6E3C2]" : "text-forest"}`} strokeWidth={3} aria-hidden="true" />
        <span>{cell.text}</span>
      </span>
    );
  }
  if (cell.tone === "no") {
    return (
      <span className="inline-flex items-center gap-1.5 text-[#B4553F] font-semibold">
        <X className="w-4 h-4 flex-shrink-0" strokeWidth={3} aria-hidden="true" />
        <span>{cell.text}</span>
      </span>
    );
  }
  return <span className="text-light-text">{cell.text}</span>;
}

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-cream relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(199,123,10,0.08) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          badge="Why Choose Us"
          title="Ghar ka khana, without cooking it yourself"
          subtitle="Here's how a Lakshmi Rasoi tiffin compares with the other ways people in Hisar eat every day."
        />

        {/* Desktop / tablet: comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="hidden md:block bg-card-bg border border-border rounded-3xl shadow-[0_12px_40px_rgba(28,15,15,0.08)] px-4 pb-4"
        >
          <table className="w-full border-collapse text-sm">
            <caption className="sr-only">How Lakshmi Rasoi compares with a mess, delivery apps and cooking yourself</caption>
            <thead>
              <tr>
                <th scope="col" className="w-[22%]" />
                {columns.map((c) =>
                  c.key === "us" ? (
                    <th
                      key={c.key}
                      scope="col"
                      className="bg-maroon text-cream rounded-t-2xl px-4 pt-4 pb-3 font-display text-lg font-bold w-[24%]"
                    >
                      <span className="block text-2xl mb-1" aria-hidden="true">{c.emoji}</span>
                      {c.label}
                    </th>
                  ) : (
                    <th key={c.key} scope="col" className="px-4 pt-6 pb-3 font-bold text-medium-text align-bottom">
                      <span className="block text-2xl mb-1" aria-hidden="true">{c.emoji}</span>
                      {c.label}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => {
                const last = i === rows.length - 1;
                return (
                  <tr key={row.label} className={last ? "" : "border-b border-border"}>
                    <th scope="row" className="text-left font-bold text-warm-text px-3 py-3.5">
                      {row.label}
                    </th>
                    <td
                      className={`bg-maroon text-cream font-bold text-center px-4 py-3.5 ${
                        last ? "rounded-b-2xl" : "border-b border-white/10"
                      }`}
                    >
                      <Mark cell={row.us} onDark />
                    </td>
                    {others.map((c) => (
                      <td key={c.key} className="text-center px-4 py-3.5 text-medium-text">
                        <Mark cell={row[c.key]} />
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile: one card per row */}
        <div className="md:hidden flex flex-col gap-3">
          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="bg-card-bg border border-border rounded-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between gap-3 bg-maroon text-cream px-4 py-3">
                <span className="text-xs font-bold tracking-wide uppercase text-cream/70">{row.label}</span>
                <span className="text-sm font-bold text-right">
                  <Mark cell={row.us} onDark />
                </span>
              </div>
              <dl className="grid grid-cols-3 divide-x divide-border text-xs">
                {others.map((c) => (
                  <div key={c.key} className="px-2.5 py-2.5 flex flex-col gap-1">
                    <dt className="text-[10px] font-bold uppercase tracking-wide text-light-text">{c.label}</dt>
                    <dd className="m-0 text-medium-text">
                      <Mark cell={row[c.key]} />
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-center"
        >
          <a
            href={waLink(WHATSAPP_MESSAGES.trial)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-maroon hover:bg-maroon-dark text-cream text-sm font-bold px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-[0_8px_20px_rgba(123,28,28,0.25)]"
          >
            <MessageCircle className="w-4 h-4" />
            Try one tiffin for ₹59
          </a>
          <p className="text-medium-text text-sm">No commitment. See the difference yourself.</p>
        </motion.div>
      </div>
    </section>
  );
}
