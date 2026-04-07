import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const categories = ["All", "Classroom", "Activities", "Events", "Celebrations"];

const galleryItems = [
  { src: "/images/gallery/gallery-1.jpg", cat: "Classroom", alt: "Little stars in the classroom" },
  { src: "/images/gallery/gallery-2.jpg", cat: "Activities", alt: "Kids enjoying group activities" },
  { src: "/images/gallery/gallery-3.jpg", cat: "Events", alt: "School event celebration" },
  { src: "/images/gallery/gallery-4.jpg", cat: "Celebrations", alt: "A joyful celebration at school" },
  { src: "/images/gallery/gallery-5.jpg", cat: "Classroom", alt: "Learning and growing together" },
  { src: "/images/gallery/gallery-6.jpg", cat: "Activities", alt: "Creative playtime" },
  { src: "/images/gallery/gallery-7.jpg", cat: "Events", alt: "Special school day event" },
  { src: "/images/gallery/gallery-8.jpg", cat: "Celebrations", alt: "Festive mood at school" },
  { src: "/images/gallery/gallery-9.jpg", cat: "Activities", alt: "Outdoor fun and learning" },
];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = filter === "All" ? galleryItems : galleryItems.filter((g) => g.cat === filter);

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground">
            Our <span className="text-gradient">Gallery</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-lg">Moments of joy and learning</p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-body font-semibold transition-all ${
                filter === cat
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-muted text-muted-foreground hover:bg-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={() => setLightbox(item.src)}
                className="rounded-2xl overflow-hidden cursor-pointer group aspect-[3/2]"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4"
              onClick={() => setLightbox(null)}
            >
              <button className="absolute top-6 right-6 text-background" onClick={() => setLightbox(null)}>
                <X size={32} />
              </button>
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                src={lightbox}
                alt="Gallery preview"
                className="max-w-full max-h-[85vh] rounded-2xl object-contain"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
