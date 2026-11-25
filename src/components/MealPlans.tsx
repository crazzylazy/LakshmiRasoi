"use client";
import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Check, ChevronDown } from "lucide-react";
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
  className = "",
  disabled = false,
}: {
  pressed: boolean;
  onClick: () => void;
  children: React.ReactNode;
  id: string;
  className?: string;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      id={id}
      aria-pressed={pressed}
      onClick={onClick}
      disabled={disabled}
      className={`flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-start text-center sm:text-left gap-x-2 gap-y-0.5 rounded-2xl border-[1.5px] px-2.5 sm:px-4 py-2.5 text-sm font-bold transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-saffron ${
        pressed
          ? "bg-maroon border-maroon text-white shadow-[0_8px_18px_rgba(123,28,28,0.25)]"
          : disabled
            ? "bg-white/60 border-border text-light-text cursor-not-allowed"
            : "bg-white border-border text-warm-text hover:border-saffron"
      } ${className}`}
    >
      {children}
    </button>
  );
}

function Group({
  label,
  id,
  children,
  mobileCols,
  mobileNote,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
  mobileCols: string; // grid columns used on phones, e.g. "grid-cols-3"
  mobileNote?: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="flex items-center justify-between gap-2">
        <span id={id} className="text-xs font-extrabold tracking-[0.12em] uppercase text-light-text">
          {label}
        </span>
        {mobileNote && (
          <span className="sm:hidden text-[10px] font-extrabold rounded-full px-2 py-0.5 bg-forest-pale text-forest">
            {mobileNote}
          </span>
        )}
      </span>
      <div role="group" aria-labelledby={id} className={`grid ${mobileCols} gap-2 sm:flex sm:flex-wrap`}>
        {children}
      </div>
    </div>
  );
}

export default function MealPlans() {
  const [mealChoice, setMeal] = useState<Meal>("lunch");
  const [duration, setDuration] = useState<Duration>("d26");
  // The trial is a single meal, so "Both" never applies to it
  const meal: Meal = duration === "trial" && mealChoice === "both" ? "lunch" : mealChoice;
  const [spice, setSpice] = useState<Spice>("Regular");
  const [start, setStart] = useState<Start>("Tomorrow");
  const [showMessage, setShowMessage] = useState(false);
  const [area, setArea] = useState("");
  const [areaError, setAreaError] = useState(false);
  const areaRef = useRef<HTMLInputElement>(null);
  const hasArea = area.trim().length > 0;

  // Area is required: without it, point the user to the box instead of opening WhatsApp
  const onSend = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (hasArea) return;
    e.preventDefault();
    setAreaError(true);
    areaRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    areaRef.current?.focus({ preventScroll: true });
  };

  const plan = useMemo(() => {
    const mealInfo = MEALS.find((m) => m.id === meal)!;
    const mealsPerDay = meal === "both" ? 2 : 1;

    if (duration === "trial") {
      return {
        title: `${mealInfo.name} · Trial`,
        price: TRIAL_PRICE,
        listPrice: null as number | null,
        unit: "one meal · first-time trial",
        perMeal: null as number | null,
        items: TIFFIN_ITEMS.trial,
        message:
          `Hello Lakshmi Rasoi! I'd like to try one trial tiffin (${inr(TRIAL_PRICE)}) for ${mealInfo.name.toLowerCase()}.
` +
          `Spice: ${spice}
Start: ${start}
My area: ${area.trim()}`,
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
My area: ${area.trim()}`,
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
My area: ${area.trim()}`,
    };
  }, [meal, duration, spice, start, area]);

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
          <div className="bg-card-bg border border-border rounded-3xl p-4 sm:p-7 flex flex-col gap-5 shadow-[0_8px_32px_rgba(28,15,15,0.08)] min-w-0">
            <Group label="Which meals?" id="plan-meal" mobileCols="grid-cols-3">
              {MEALS.map((m) => (
                <Option
                  key={m.id}
                  id={`plan-meal-${m.id}`}
                  pressed={meal === m.id}
                  onClick={() => setMeal(m.id)}
                  disabled={m.id === "both" && duration === "trial"}
                >
                  <span aria-hidden="true">{m.icon}</span>
                  {m.label}
                  {m.id === "both" && (
                    <span
                      className={`w-full sm:w-auto text-[10px] sm:text-[11px] font-semibold ${
                        duration === "trial" ? "text-light-text" : meal === "both" ? "text-saffron-pale" : "text-forest"
                      }`}
                    >
                      {duration === "trial" ? "not for trial" : `save up to ${inr(maxBothSaving)}`}
                    </span>
                  )}
                </Option>
              ))}
            </Group>

            <Group label="How many days?" id="plan-days" mobileCols="grid-cols-6" mobileNote="10% OFF ON PLANS">
              {DURATIONS.map((d) => {
                const list = meal === "both" ? d.price.both : d.price.single;
                const on = duration === d.id;
                return (
                  <Option key={d.id} id={`plan-days-${d.id}`} pressed={on} onClick={() => setDuration(d.id)} className="col-span-2">
                    <span className="flex flex-col items-center sm:items-start leading-tight">
                      <span className="flex items-center gap-1.5">
                        {d.label}
                        <span className={`hidden sm:inline text-[10px] font-extrabold rounded-full px-1.5 py-0.5 ${on ? "bg-saffron text-white" : "bg-forest-pale text-forest"}`}>
                          10% OFF
                        </span>
                      </span>
                      <span className={`text-[11px] font-medium ${on ? "text-white/75" : "text-light-text"}`}>
                        {d.detail}
                        <span className="hidden sm:inline"> · </span>
                        <span className="block sm:inline">
                          <s className="opacity-70">{inr(list)}</s> {inr(discounted(list))}
                        </span>
                      </span>
                    </span>
                  </Option>
                );
              })}
              <Option id="plan-days-day" pressed={duration === "day"} onClick={() => setDuration("day")} className="col-span-3">
                <span className="flex flex-col items-center sm:items-start leading-tight">
                  <span>1 day</span>
                  <span className={`text-[11px] font-medium ${duration === "day" ? "text-white/75" : "text-light-text"}`}>
                    Full tiffin · {inr(DAY_PRICE)} per meal
                  </span>
                </span>
              </Option>
              <Option id="plan-days-trial" pressed={duration === "trial"} onClick={() => {
                  setDuration("trial");
                  setMeal((m) => (m === "both" ? "lunch" : m));
                }}
                className="col-span-3"
              >
                <span className="flex flex-col items-center sm:items-start leading-tight">
                  <span>Trial</span>
                  <span className={`text-[11px] font-medium ${duration === "trial" ? "text-white/75" : "text-light-text"}`}>
                    First time · 1 meal {inr(TRIAL_PRICE)}
                  </span>
                </span>
              </Option>
            </Group>

            <Group label="Spice level" id="plan-spice" mobileCols="grid-cols-2">
              {SPICES.map((s) => (
                <Option key={s} id={`plan-spice-${s.split(" ")[0].toLowerCase()}`} pressed={spice === s} onClick={() => setSpice(s)}>
                  {s}
                </Option>
              ))}
            </Group>

            <Group label="Start from" id="plan-start" mobileCols="grid-cols-2">
              {STARTS.map((s) => (
                <Option key={s} id={`plan-start-${s === "Tomorrow" ? "tomorrow" : "monday"}`} pressed={start === s} onClick={() => setStart(s)}>
                  {s}
                </Option>
              ))}
            </Group>

            <div className="flex flex-col gap-3">
              <label htmlFor="plan-area" className="text-xs font-extrabold tracking-[0.12em] uppercase text-light-text">
                Your area <span className="text-maroon" aria-hidden="true">*</span>
              </label>
              <input
                ref={areaRef}
                id="plan-area"
                type="text"
                required
                aria-required="true"
                aria-invalid={areaError}
                aria-describedby={areaError ? "plan-area-error" : undefined}
                value={area}
                onChange={(e) => {
                  setArea(e.target.value);
                  if (e.target.value.trim()) setAreaError(false);
                }}
                maxLength={120}
                autoComplete="street-address"
                placeholder="e.g. Marvel City or OM College hostel"
                className={`w-full rounded-2xl border-[1.5px] bg-white px-4 py-2.5 text-sm font-semibold text-warm-text placeholder:font-medium placeholder:text-light-text focus:outline-none focus:ring-2 ${
                  areaError
                    ? "border-[#B4553F] focus:border-[#B4553F] focus:ring-[#B4553F]/20"
                    : "border-border focus:border-saffron focus:ring-saffron/20"
                }`}
              />
              {areaError && (
                <p id="plan-area-error" role="alert" className="-mt-1.5 text-xs font-semibold text-[#B4553F]">
                  Please enter your area so we can confirm delivery.
                </p>
              )}
            </div>
          </div>

          {/* Phones: compact summary that sticks to the bottom of the screen while choosing,
              so the price, what's in the box and the Send button stay in view */}
          <div
            className="md:hidden sticky z-30 bottom-[max(0.75rem,env(safe-area-inset-bottom))] bg-maroon text-white rounded-3xl p-4 flex flex-col gap-2.5 shadow-[0_-8px_32px_rgba(28,15,15,0.28),0_16px_40px_rgba(123,28,28,0.3)]"
            aria-live="polite"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <span className="text-[10px] font-extrabold tracking-[0.12em] uppercase text-saffron-light">Your plan</span>
                <h3 className="font-display font-bold text-lg text-cream leading-tight">{plan.title}</h3>
                <p className="text-[11px] text-cream/70 mt-0.5">{plan.unit}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="font-display font-extrabold text-3xl leading-none tabular-nums">{inr(plan.price)}</p>
                {plan.listPrice !== null && (
                  <p className="text-[11px] text-cream/60 mt-1">
                    <s>{inr(plan.listPrice)}</s>{" "}
                    <span className="font-bold text-saffron-light">save {inr(plan.listPrice - plan.price)}</span>
                  </p>
                )}
                {plan.perMeal !== null && <p className="text-[11px] text-cream/70">≈ {inr(plan.perMeal)} per meal</p>}
              </div>
            </div>

            <p className="text-xs text-cream/85 leading-snug">
              <span className="font-bold text-saffron-light">In the box: </span>
              {plan.items.join(" · ")}
            </p>

            <button
              type="button"
              onClick={() => setShowMessage((v) => !v)}
              aria-expanded={showMessage}
              className="self-start inline-flex items-center gap-1 text-[11px] font-semibold text-cream/75 hover:text-cream"
            >
              {showMessage ? "Hide message" : "See the WhatsApp message"}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showMessage ? "rotate-180" : ""}`} />
            </button>
            {showMessage && (
              <p className="bg-[#DCF8C6] text-[#14301f] text-xs leading-relaxed rounded-2xl rounded-bl-md px-3.5 py-2.5 whitespace-pre-line">
                {plan.message}
              </p>
            )}

            <a
              href={waLink(plan.message)}
              onClick={onSend}
              aria-disabled={!hasArea}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold text-sm px-5 py-3 rounded-full active:scale-[0.98] transition-transform"
            >
              <MessageCircle className="w-4 h-4" />
              Send on WhatsApp
            </a>
            {!hasArea && (
              <p className="relative -mt-1 text-center text-[11px] font-medium text-cream/70">Add your area above to send</p>
            )}
          </div>

          {/* Summary (tablet and desktop) */}
          <div
            className="hidden md:flex relative overflow-hidden bg-maroon text-white rounded-3xl p-6 sm:p-7 flex-col gap-4 shadow-[0_24px_50px_rgba(123,28,28,0.3)] min-w-0"
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
              onClick={onSend}
              aria-disabled={!hasArea}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center gap-2 bg-white text-maroon font-bold text-sm px-5 py-3.5 rounded-full transition-all duration-200 hover:bg-saffron-pale hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              Send on WhatsApp
            </a>
            {!hasArea && (
              <p className="relative -mt-1 text-center text-[11px] font-medium text-cream/70">Add your area above to send</p>
            )}
          </div>
        </motion.div>

        <p className="text-center text-light-text text-xs mt-4">
          * Prices may vary slightly based on location and customisation. Message us for exact pricing for your area.
        </p>
      </div>
    </section>
  );
}
