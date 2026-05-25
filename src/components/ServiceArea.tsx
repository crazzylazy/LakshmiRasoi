"use client";
import { motion } from "framer-motion";
import { MapPin, MessageCircle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const areas = [
  { label: "Nearby Offices", icon: "🏢" },
  { label: "Hostels & PGs", icon: "🏠" },
  { label: "Residential Societies", icon: "🏘️" },
  { label: "Co-working Spaces", icon: "💼" },
  { label: "College Campuses", icon: "🎓" },
  { label: "Individual Homes", icon: "🏡" },
];

const serviceNotes = [
  { icon: "⏰", title: "Lunch Delivery", time: "12:00 PM – 1:30 PM" },
  { icon: "🌙", title: "Dinner Delivery", time: "7:30 PM – 9:00 PM" },
  { icon: "📅", title: "Service Days", time: "Monday – Saturday" },
  { icon: "📍", title: "Delivery Area", time: "Within 5 km radius" },
];

const WHATSAPP_NUMBER = "917988267228";
const WHATSAPP_MSG = encodeURIComponent("Hello! Can you check delivery availability in my area?");

export default function ServiceArea() {
  return (
    <section className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Service Area"
          title="We deliver to your<br/>neighbourhood."
          subtitle="Contact us to confirm delivery availability in your specific area. We're growing fast!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — areas + notes */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display font-bold text-xl text-warm-text mb-5">
                Areas We Serve
              </h3>
              <div className="flex flex-wrap gap-3 mb-8">
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

              <div className="p-5 bg-saffron-pale border border-saffron/20 rounded-2xl flex items-start gap-3">
                <MapPin className="w-5 h-5 text-saffron flex-shrink-0 mt-0.5" />
                <p className="text-saffron-light text-sm leading-relaxed font-medium">
                  Contact us on WhatsApp to check delivery availability in your exact
                  locality. We&apos;re expanding our coverage area regularly!
                </p>
              </div>
            </motion.div>

            {/* Service timing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8"
            >
              <h3 className="font-display font-bold text-xl text-warm-text mb-5">
                Service Timings
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {serviceNotes.map((note) => (
                  <div
                    key={note.title}
                    className="flex items-start gap-3 p-4 bg-card-bg border border-border rounded-2xl"
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
          </div>

          {/* Right — Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Address label */}
            <div className="flex items-start gap-2.5 mb-3 px-1">
              <MapPin className="w-4 h-4 text-saffron flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-warm-text text-sm">111SF, Marvel City, SEC-1</p>
                <p className="text-light-text text-xs">Hisar, Haryana – 125001</p>
              </div>
            </div>

            {/* Real Google Maps embed */}
            <div className="relative rounded-3xl overflow-hidden shadow-[0_12px_48px_rgba(28,15,15,0.12)] border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d306.0160143774167!2d75.77704615506661!3d29.235105629799417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1779692951066!5m2!1sen!2sin"
                width="100%"
                height="360"
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
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2.5 bg-forest text-cream font-bold text-sm px-6 py-3.5 rounded-2xl w-full hover:bg-forest-light transition-all duration-200 shadow-[0_4px_16px_rgba(45,106,79,0.3)]"
            >
              <MessageCircle className="w-4 h-4" />
              Check Delivery in Your Area
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
