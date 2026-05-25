"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=800&fit=crop&q=85",
    fallback: "linear-gradient(145deg, #F5EDD8 0%, #EDD5B8 100%)",
    label: "Fresh Lunch Tiffin",
    size: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=500&fit=crop&q=85",
    fallback: "linear-gradient(145deg, #E8F5EE 0%, #C8EDDA 100%)",
    label: "Fresh Salad",
    size: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1546833999-b9f581b1888e?w=600&h=500&fit=crop&q=85",
    fallback: "linear-gradient(145deg, #FDF0F0 0%, #F8C4C4 100%)",
    label: "Dal Tadka",
    size: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1565557623262-b51ff2a7c3f5?w=800&h=400&fit=crop&q=85",
    fallback: "linear-gradient(145deg, #FEF3DC 0%, #FADDAA 100%)",
    label: "Soft Rotis",
    size: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=600&h=500&fit=crop&q=85",
    fallback: "linear-gradient(145deg, #F5EDD8 0%, #EDD5B8 100%)",
    label: "Steamed Rice",
    size: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=600&h=800&fit=crop&q=85",
    fallback: "linear-gradient(145deg, #FDF0F0 0%, #F8C4C4 100%)",
    label: "Homemade Dinner",
    size: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&h=500&fit=crop&q=85",
    fallback: "linear-gradient(145deg, #E8F5EE 0%, #C8EDDA 100%)",
    label: "Balanced Meal",
    size: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&h=500&fit=crop&q=85",
    fallback: "linear-gradient(145deg, #FEF3DC 0%, #FADDAA 100%)",
    label: "Daily Preparation",
    size: "normal",
  },
];

function GalleryCard({ item, index }: { item: (typeof galleryItems)[0]; index: number }) {
  const [imgError, setImgError] = useState(false);
  const height = item.size === "tall" ? 280 : item.size === "wide" ? 160 : 200;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      className="group relative break-inside-avoid rounded-2xl overflow-hidden cursor-pointer shadow-[0_4px_20px_rgba(28,15,15,0.08)] hover:shadow-[0_12px_40px_rgba(28,15,15,0.16)] transition-all duration-300"
      style={{ height }}
    >
      {/* Image or fallback gradient */}
      {!imgError ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.src}
          alt={item.label}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div
          className="w-full h-full"
          style={{ background: item.fallback }}
        />
      )}

      {/* Permanent subtle gradient overlay at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Label — always visible at bottom */}
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-3 pt-6">
        <span className="inline-block bg-white/90 backdrop-blur-sm text-warm-text text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
          {item.label}
        </span>
      </div>

      {/* Hover overlay — extra darkening */}
      <div className="absolute inset-0 bg-warm-text/0 group-hover:bg-warm-text/20 transition-all duration-300" />
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Gallery"
          title="Every meal, a little<br/>work of art."
          subtitle="A peek into our daily kitchen — fresh, hygienic, and full of love."
        />

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryItems.map((item, i) => (
            <GalleryCard key={i} item={item} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-light-text text-sm mt-10"
        >
          📸 Real meals, prepared fresh daily at our kitchen in Hisar.
        </motion.p>
      </div>
    </section>
  );
}
