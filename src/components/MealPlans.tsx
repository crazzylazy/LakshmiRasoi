"use client";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { waLink } from "@/lib/site";

type Meal = "lunch" | "dinner" | "both";
type Duration = "trial" | "day" | "d20" | "d26" | "d30";
type Spice = "Regular" | "Low spice" | "Medium spice" | "High spice";
type Start = "Tomorrow" | "Next Monday";

const TRIAL_PRICE = 59;
const DAY_PRICE = 100; // one full tiffin, per meal
const PLAN_DISCOUNT = 0.1; // 10% off every multi-day plan

const discounted = (n: number) => Math.round(n * (1 - PLAN_DISCOUNT));

const MEALS: { id: Meal; label: string; icon: string; name: string }[] = [
  { id: "lunch", label: "Lunch", icon: "☀️", name: "Lunch" },
  { id: "dinner", label: "Dinner", icon: "🌙", name: "Dinner" },
  { id: "both", label: "Both", icon: "🍱", name: "Lunch + Dinner" },
];

const DURATIONS: {
  id: Exclude<Duration, "trial" | "day">;
  days: number;
  label: string;
  detail: string;
  price: { single: number; both: number };
}[] = [
  { id: "d20", days: 20, label: "20 days", detail: "Mon to Fri", price: { single: 1999, both: 3599 } },
  { id: "d26", days: 26, label: "26 days", detail: "Mon to Sat", price: { single: 2599, both: 4699 } },
  { id: "d30", days: 30, label: "30 days", detail: "Full month", price: { single: 2999, both: 5399 } },
];

const SPICES: Spice[] = ["Regular", "Low spice", "Medium spice", "High spice"];
const STARTS: Start[] = ["Tomorrow", "Next Monday"];

const TIFFIN_ITEMS: Record<Meal | "trial", string[]> = {
  trial: ["2 Roti or Rice", "1 Sabzi or Dal / Kadhi", "Salad or Pickle"],
  lunch: ["4 Roti or Rice", "1 Sabzi", "Salad", "Seasonal special"],
  dinner: ["4 Roti or Rice", "1 Sabzi or Dal / Kadhi", "Pickle / Salad", "Sweet occasionally"],
  both: ["Full lunch tiffin", "Full dinner tiffin", "Priority delivery", "Same spice level for both"],
};

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

function Option({
  pressed,
  onClick,
  children,
  id,
}: {
  pressed: boolean;
  onClick: () => void;
  children: React.ReactNode;
  id: string;
}) {
  return (
    <button
      type="button"
      id={id}
      aria-pressed={pressed}
      onClick={onClick}
      className={`flex items-center gap-2 rounded-2xl border-[1.5px] px-4 py-2.5 text-sm font-bold transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saffron ${
        pressed
          ? "bg-maroon border-maroon text-white shadow-[0_8px_18px_rgba(123,28,28,0.25)]"
          : "bg-white border-border text-warm-text hover:border-saffron"
      }`}
    >
      {children}
    </button>
  );
}

function Group({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <span id={id} className="text-xs font-extrabold tracking-[0.12em] uppercase text-light-text">
        {label}
      </span>
      <div role="group" aria-labelledby={id} className="flex flex-wrap gap-2">
        {children}
      </div>
    </div>
  );
}

export default function MealPlans() {
  const [meal, setMeal] = useState<Meal>("lunch");
  const [duration, setDuration] = useState<Duration>("d26");
  const [spice, setSpice] = useState<Spice>("Regular");
  const [start, setStart] = useState<Start>("Tomorrow");

  const plan = useMemo(() => {
    const mealInfo = MEALS.find((m) => m.id === meal)!;
    const mealsPerDay = meal === "both" ? 2 : 1;

    if (duration === "trial") {
      return {
        title: `${mealInfo.name} · Trial`,
        price: TRIAL_PRICE,
        listPrice: null as number | null,
        unit: "per meal · first-time trial",
        perMeal: null as number | null,
        items: TIFFIN_ITEMS.trial,
        message:
          `Hello Lakshmi Rasoi! I'd like to try a trial tiffin (${inr(TRIAL_PRICE)} per meal) for ${mealInfo.name.toLowerCase()}.
` +
          `Spice: ${spice}
Start: ${start}
My area: `,
      };
    }

    if (duration === "day") {
      const price = DAY_PRICE * mealsPerDay;
      return {
        title: `${mealInfo.name} · 1 day`,
        price,
        listPrice: null,
        unit: meal === "both" ? `1 day · ${inr(DAY_PRICE)} per meal` : "1 day · full tiffin",
        perMeal: null,
        items: TIFFIN_ITEMS[meal],
        message:
          `Hello Lakshmi Rasoi! I'd like a 1-day ${mealInfo.name} tiffin, ${inr(price)}.
` +
          `Spice: ${spice}
Start: ${start}
My area: `,
      };
    }

    const d = DURATIONS.find((x) => x.id === duration)!;
    const listPrice = meal === "both" ? d.price.both : d.price.single;
    const price = discounted(listPrice);
    return {
      title: `${mealInfo.name} · ${d.label}`,
      price,
      listPrice,
      unit: `${d.days} days · ${d.detail}`,
      perMeal: Math.round(price / (d.days * mealsPerDay)),
      items: TIFFIN_ITEMS[meal],
      message:
        `Hello Lakshmi Rasoi! I'd like the ${mealInfo.name} plan: ${d.label} (${d.detail}), ${inr(price)} after 10% off.
` +
        `Spice: ${spice}
Start: ${start}
My area: `,
    };
  }, [meal, duration, spice, start]);

  const maxBothSaving = Math.max(
    ...DURATIONS.map((d) => discounted(d.price.single) * 2 - discounted(d.price.both)),
  );

  return (
    <section id="plans" className="py-20 md:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Meal Plans"
          title="Build your tiffin plan"
          subtitle="Order for one day, or save 10% on any 20, 26 or 30-day plan."
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-5 lg:gap-6"
        >
          {/* Controls */}
          <div className="bg-card-bg border border-border rounded-3xl p-6 sm:p-7 flex flex-col gap-5 shadow-[0_8px_32px_rgba(28,15,15,0.08)] min-w-0">
            <Group label="Which meals?" id="plan-meal">
              {MEALS.map((m) => (
                <Option key={m.id} id={`plan-meal-${m.id}`} pressed={meal === m.id} onClick={() => setMeal(m.id)}>
                  <span aria-hidden="true">{m.icon}</span>
                  {m.label}
                  {m.id === "both" && (
                    <span className={`text-[11px] font-semibold ${meal === "both" ? "text-saffron-pale" : "text-forest"}`}>
                      save up to {inr(maxBothSaving)}
                    </span>
                  )}
                </Option>
              ))}
            </Group>

            <Group label="How many days?" id="plan-days">
              {DURATIONS.map((d) => {
                const list = meal === "both" ? d.price.both : d.price.single;
                const on = duration === d.id;
                return (
                  <Option key={d.id} id={`plan-days-${d.id}`} pressed={on} onClick={() => setDuration(d.id)}>
                    <span className="flex flex-col items-start leading-tight text-left">
                      <span className="flex items-center gap-1.5">
                        {d.label}
                        <span className={`text-[10px] font-extrabold rounded-full px-1.5 py-0.5 ${on ? "bg-saffron text-white" : "bg-forest-pale text-forest"}`}>
                          10% OFF
                        </span>
                      </span>
                      <span className={`text-[11px] font-medium ${on ? "text-white/75" : "text-light-text"}`}>
                        {d.detail} · <s className="opacity-70">{inr(list)}</s> {inr(discounted(list))}
                      </span>
                    </span>
                  </Option>
                );
              })}
              <Option id="plan-days-day" pressed={duration === "day"} onClick={() => setDuration("day")}>
                <span className="flex flex-col items-start leading-tight text-left">
                  <span>1 day</span>
                  <span className={`text-[11px] font-medium ${duration === "day" ? "text-white/75" : "text-light-text"}`}>
                    Full tiffin · {inr(DAY_PRICE)} per meal
                  </span>
                </span>
              </Option>
              <Option id="plan-days-trial" pressed={duration === "trial"} onClick={() => setDuration("trial")}>
                <span className="flex flex-col items-start leading-tight text-left">
                  <span>Trial</span>
                  <span className={`text-[11px] font-medium ${duration === "trial" ? "text-white/75" : "text-light-text"}`}>
                    First time · {inr(TRIAL_PRICE)} per meal
                  </span>
                </span>
              </Option>
            </Group>

            <Group label="Spice level" id="plan-spice">
              {SPICES.map((s) => (
                <Option key={s} id={`plan-spice-${s.split(" ")[0].toLowerCase()}`} pressed={spice === s} onClick={() => setSpice(s)}>
                  {s}
                </Option>
              ))}
            </Group>

            <Group label="Start from" id="plan-start">
              {STARTS.map((s) => (
                <Option key={s} id={`plan-start-${s === "Tomorrow" ? "tomorrow" : "monday"}`} pressed={start === s} onClick={() => setStart(s)}>
                  {s}
                </Option>
              ))}
            </Group>
          </div>

          {/* Summary */}
          <div
            className="relative overflow-hidden bg-maroon text-white rounded-3xl p-6 sm:p-7 flex flex-col gap-4 shadow-[0_24px_50px_rgba(123,28,28,0.3)] min-w-0"
            aria-live="polite"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 w-56 h-56 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(232,150,13,0.35), transparent 70%)" }}
            />

            <div className="relative flex flex-col gap-1">
              <span className="text-xs font-extrabold tracking-[0.12em] uppercase text-saffron-light">Your plan</span>
              <h3 className="font-display font-bold text-2xl text-cream">{plan.title}</h3>
            </div>

            <div className="relative">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.p
                  key={plan.price}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="font-display font-extrabold text-5xl leading-none tabular-nums"
                >
                  {inr(plan.price)}
                </motion.p>
              </AnimatePresence>
              {plan.listPrice !== null && (
                <p className="text-sm text-cream/60 mt-2">
                  <s>{inr(plan.listPrice)}</s>
                </p>
              )}
              <p className="text-sm text-cream/75 mt-1">{plan.unit}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {plan.perMeal !== null && (
                  <span className="text-xs font-bold bg-white/15 rounded-full px-3 py-1">≈ {inr(plan.perMeal)} per meal</span>
                )}
                {plan.listPrice !== null && (
                  <span className="text-xs font-bold bg-saffron text-white rounded-full px-3 py-1">
                    10% off · You save {inr(plan.listPrice - plan.price)}
                  </span>
                )}
                {duration === "trial" && (
                  <span className="text-xs font-bold bg-white/15 rounded-full px-3 py-1">No commitment</span>
                )}
              </div>
            </div>

            <ul className="relative grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-cream/90">
              {plan.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 flex-shrink-0 text-saffron-light" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="relative flex flex-col gap-2 mt-auto">
              <span className="text-[11px] font-semibold text-cream/70">Message we&apos;ll send on WhatsApp:</span>
              <p className="bg-[#DCF8C6] text-[#14301f] text-[13px] leading-relaxed rounded-2xl rounded-bl-md px-4 py-3 whitespace-pre-line">
                {plan.message}
              </p>
            </div>

            <a
              href={waLink(plan.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center gap-2 bg-white text-maroon font-bold text-sm px-5 py-3.5 rounded-full transition-all duration-200 hover:bg-saffron-pale hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              Send on WhatsApp
            </a>
          </div>
        </motion.div>

        <p className="text-center text-light-text text-xs mt-4">
          * Prices may vary slightly based on location and customisation. Message us for exact pricing for your area.
        </p>
      </div>
    </section>
  );
}
