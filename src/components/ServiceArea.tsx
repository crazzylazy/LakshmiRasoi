"use client";
import { motion } from "framer-motion";
import { MapPin, MessageCircle, Phone, PartyPopper } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SITE, WHATSAPP_MESSAGES, waLink } from "@/lib/site";

const areas = [
  { label: "Marvel City", icon: "📍" },
  { label: "OM College", icon: "🎓" },
  { label: "Hostels & PGs nearby", icon: "🏠" },
  { label: "Offices nearby", icon: "🏢" },
  { label: "Homes within 3 km", icon: "🏡" },
];

const serviceNotes = [
  { icon: "⏰", title: "Lunch Delivery", time: "12:00 PM – 1:30 PM" },
  { icon: "🌙", title: "Dinner Delivery", time: "7:30 PM – 9:00 PM" },
  { icon: "📅", title: "Service Days", time: "Mon to Sat · Sunday on 30-day plan" },
  { icon: "📍", title: "Delivery Area", time: "Within 3 km of Marvel City" },
];

export default function ServiceArea() {
  return (
    <section id="area" className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Service Area"
          title="Delivering near Marvel City &amp; OM College."
          subtitle="We deliver within a 3 km radius of our kitchen in Marvel City, Sector 1, Hisar."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          {/* Left: areas + notes */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display font-bold text-xl text-warm-text mb-4">
                Areas We Serve
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {areas.map((area, i) => (
                  <motion.div
                    key={area.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 bg-card-bg border border-border rounded-full px-4 py-2.5 text-sm font-semibold text-warm-text shadow-sm hover:border-saffron hover:shadow-[0_4px_16px_rgba(199,123,10,0.15)] transition-all duration-200 cursor-default"
                  >
                    <span>{area.icon}</span>
                    {area.label}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Service timing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6"
            >
              <h3 className="font-display font-bold text-xl text-warm-text mb-4">
                Service Timings
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {serviceNotes.map((note) => (
                  <div
                    key={note.title}
                    className="flex items-start gap-3 px-4 py-3 bg-card-bg border border-border rounded-2xl"
                  >
                    <span className="text-xl flex-shrink-0">{note.icon}</span>
                    <div>
                      <p className="font-bold text-warm-text text-xs">{note.title}</p>
                      <p className="text-medium-text text-xs mt-0.5">{note.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Special orders */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 p-5 bg-maroon text-cream rounded-2xl flex flex-col gap-4 shadow-[0_12px_32px_rgba(123,28,28,0.25)]"
            >
              <div className="flex items-start gap-3">
                <span className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                  <PartyPopper className="w-5 h-5 text-saffron-light" />
                </span>
                <div>
                  <h3 className="font-display font-bold text-lg">Special orders</h3>
                  <p className="text-cream/80 text-sm leading-relaxed mt-1">
                    Function, party or bulk order? Call us and we&apos;ll prepare it.
                    Charges depend on your requirement.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center gap-2 bg-white text-maroon font-bold text-sm px-5 py-2.5 rounded-full hover:bg-saffron-pale transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  Call {SITE.phoneDisplay}
                </a>
                <a
                  href={waLink(WHATSAPP_MESSAGES.specialOrder)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-white/40 text-cream font-bold text-sm px-5 py-2.5 rounded-full hover:bg-white/10 transition-colors duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp us
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col"
          >
            {/* Address label: clickable, opens Google Maps */}
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 mb-3 px-1 group"
            >
              <MapPin className="w-4 h-4 text-saffron flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-warm-text text-sm group-hover:text-maroon transition-colors">111SF, Marvel City, SEC-1</p>
                <p className="text-light-text text-xs">Hisar, Haryana – 125001 · <span className="text-saffron font-semibold">Open in Maps</span></p>
              </div>
            </a>

            {/* Real Google Maps embed */}
            <div className="relative flex-1 min-h-[300px] rounded-3xl overflow-hidden shadow-[0_12px_48px_rgba(28,15,15,0.12)] border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d306.0160143774167!2d75.77704615506661!3d29.235105629799417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1779692951066!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lakshmi Rasoi Location"
              />
            </div>

            {/* CTA below map */}
            <motion.a
              whileHover={{ y: -2, scale: 1.01 }}
              href={waLink(WHATSAPP_MESSAGES.deliveryCheck)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2.5 bg-forest text-cream font-bold text-sm px-6 py-3.5 rounded-2xl w-full hover:bg-forest-light transition-all duration-200 shadow-[0_4px_16px_rgba(45,106,79,0.3)]"
            >
              <MessageCircle className="w-4 h-4" />
              Not sure? Check delivery on WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
