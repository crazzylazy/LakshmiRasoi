"use client";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const menuItems = [
  {
    emoji: "🫓",
    name: "Roti / Chapati",
    description: "Soft, freshly made wheat rotis — 2 to 3 per serving.",
    category: "Bread",
    color: "#FEF3DC",
    accent: "#C77B0A",
  },
  {
    emoji: "🍚",
    name: "Steamed Rice",
    description: "Fluffy basmati or regular rice, perfectly cooked.",
    category: "Grain",
    color: "#E8F5EE",
    accent: "#2D6A4F",
  },
  {
    emoji: "🍲",
    name: "Dal",
    description: "Rotating dal varieties — toor, moong, masoor — tempered fresh.",
    category: "Protein",
    color: "#FDF0F0",
    accent: "#7B1C1C",
  },
  {
    emoji: "🥘",
    name: "Seasonal Sabzi",
    description: "Freshly cooked vegetable curry using market-fresh produce.",
    category: "Vegetable",
    color: "#FEF3DC",
    accent: "#C77B0A",
  },
  {
    emoji: "🥗",
    name: "Salad / Pickle",
    description: "Sliced cucumber, carrot or homemade pickle for crunch.",
    category: "Side",
    color: "#E8F5EE",
    accent: "#2D6A4F",
  },
  {
    emoji: "✨",
    name: "Weekly Special",
    description: "A surprise dish — biryani, kheer, or a regional favourite.",
    category: "Special",
    color: "#FDF0F0",
    accent: "#7B1C1C",
  },
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function DailyMenu() {
  return (
    <section id="menu" className="py-20 md:py-28 bg-parchment overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Daily Menu"
          title="What's on your plate today"
          subtitle="Every meal is freshly prepared each morning. Our menu rotates daily to keep it interesting and nutritionally diverse."
        />

        {/* Day selector — decorative */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-2 flex-wrap mb-14"
        >
          {days.map((day, i) => (
            <div
              key={day}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                i === 0
                  ? "bg-maroon text-cream border-maroon shadow-[0_4px_12px_rgba(123,28,28,0.3)]"
                  : "bg-card-bg border-border text-medium-text hover:border-saffron hover:text-saffron cursor-pointer"
              }`}
            >
              {day}
            </div>
          ))}
        </motion.div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="flex items-start gap-4 p-5 bg-card-bg border border-border rounded-2xl shadow-sm hover:shadow-[0_8px_24px_rgba(28,15,15,0.08)] transition-all duration-200"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 shadow-sm"
                style={{ background: item.color }}
              >
                {item.emoji}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-bold text-warm-text text-base">{item.name}</h3>
                  <span
                    className="text-[10px] font-bold px-2.5 py-0.5 rounded-full flex-shrink-0"
                    style={{ background: item.color, color: item.accent }}
                  >
                    {item.category}
                  </span>
                </div>
                <p className="text-light-text text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 p-5 bg-saffron-pale border border-saffron/20 rounded-2xl text-center"
        >
          <p className="text-saffron font-semibold text-sm">
            🌟 Menu rotates daily. Special items added on weekends & festivals.
            <a
              href="https://wa.me/917988267228?text=Can%20I%20get%20today%27s%20menu%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="underline ml-1 hover:text-maroon transition-colors"
            >
              Ask us today&apos;s menu
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
