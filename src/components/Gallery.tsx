"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { X, ZoomIn } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const galleryItems = [
  {
    src: "/images/menu-dal-thali.png",
    alt: "Lakshmi Rasoi lunch thali: Dal, Chawal, Roti with Desi Ghee, Aloo Gobi Ki Sabji and Salad",
    fallback: "linear-gradient(145deg, #FEF3DC 0%, #FADDAA 100%)",
    label: "Dal Thali",
    size: "tall",
  },
  {
    src: "/images/menu-bhindi.png",
    alt: "Lakshmi Rasoi menu: Roti with Desi Ghee, Bhindi Ki Sabji, Dal and Salad",
    fallback: "linear-gradient(145deg, #E8F5EE 0%, #C8EDDA 100%)",
    label: "Bhindi Ki Sabji",
    size: "normal",
  },
  {
    src: "/images/menu-chole-thali.png",
    alt: "Lakshmi Rasoi menu: Roti, Chole Ki Sabji, Rayata and Achar",
    fallback: "linear-gradient(145deg, #FDF0F0 0%, #F8C4C4 100%)",
    label: "Chole Ki Sabji",
    size: "tall",
  },
  {
    src: "/images/menu-kale-chane.png",
    alt: "Lakshmi Rasoi lunch: Kale Chane, Aloo Gobhi Sabzi, Roti with Desi Ghee and Salad",
    fallback: "linear-gradient(145deg, #FEF3DC 0%, #FADDAA 100%)",
    label: "Kale Chane",
    size: "wide",
  },
  {
    src: "/images/menu-tori.png",
    alt: "Lakshmi Rasoi lunch: Roti with Desi Ghee, Tori Ki Sabji and Salad",
    fallback: "linear-gradient(145deg, #E8F5EE 0%, #C8EDDA 100%)",
    label: "Tori Ki Sabji",
    size: "normal",
  },
  {
    src: "/images/menu-dinner.png",
    alt: "Lakshmi Rasoi dinner thali: Daal, Chawal, Aloo Gobhi Ki Sabji, Roti with Desi Ghee and Salad",
    fallback: "linear-gradient(145deg, #FDF0F0 0%, #F8C4C4 100%)",
    label: "Dinner Thali",
    size: "tall",
  },
  {
    src: "/images/menu-chole-masala.png",
    alt: "Lakshmi Rasoi lunch: Roti with Desi Ghee, Chole Masala and Salad",
    fallback: "linear-gradient(145deg, #F5EDD8 0%, #EDD5B8 100%)",
    label: "Chole Masala",
    size: "normal",
  },
  {
    src: "/images/menu-petha.png",
    alt: "Lakshmi Rasoi lunch: Roti with Desi Ghee, Pethe Ki Sabji and Salad",
    fallback: "linear-gradient(145deg, #FEF3DC 0%, #FADDAA 100%)",
    label: "Pethe Ki Sabji",
    size: "normal",
  },
];

function Lightbox({ item, onClose }: { item: (typeof galleryItems)[0]; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white transition-all duration-200"
          aria-label="Close preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image container: stop click from bubbling to backdrop */}
        <motion.div
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.88, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative max-w-2xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={800}
            height={800}
            className="w-full h-auto object-contain"
            priority
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-4 pt-10">
            <span className="text-white font-bold text-base">{item.label}</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function GalleryCard({
  item,
  index,
  onClick,
}: {
  item: (typeof galleryItems)[0];
  index: number;
  onClick: () => void;
}) {
  const [imgError, setImgError] = useState(false);
  const height = item.size === "tall" ? 280 : item.size === "wide" ? 160 : 200;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      onClick={onClick}
      className="group relative break-inside-avoid rounded-2xl overflow-hidden cursor-pointer shadow-[0_4px_20px_rgba(28,15,15,0.08)] hover:shadow-[0_12px_40px_rgba(28,15,15,0.16)] transition-all duration-300"
      style={{ height }}
    >
      {!imgError ? (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 768px) 45vw, (max-width: 1024px) 30vw, 23vw"
          onError={() => setImgError(true)}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full" style={{ background: item.fallback }} />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Zoom icon on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
          <ZoomIn className="w-5 h-5 text-white" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 px-4 pb-3 pt-6">
        <span className="inline-block bg-white/90 backdrop-blur-sm text-warm-text text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
          {item.label}
        </span>
      </div>

      <div className="absolute inset-0 bg-warm-text/0 group-hover:bg-warm-text/20 transition-all duration-300" />
    </motion.div>
  );
}

export default function Gallery() {
  const [selected, setSelected] = useState<(typeof galleryItems)[0] | null>(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Gallery"
          title="Every meal, a little<br/>work of art."
          subtitle="A peek into our daily kitchen: fresh, hygienic, and full of love."
        />

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryItems.map((item, i) => (
            <GalleryCard key={i} item={item} index={i} onClick={() => setSelected(item)} />
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

      {selected && <Lightbox item={selected} onClose={close} />}
    </section>
  );
}
