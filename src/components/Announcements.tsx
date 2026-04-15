import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const posters = [
  { src: "/posters/poster1.jpg", alt: "Advaita Poster 1" },
  { src: "/posters/poster2.jpg", alt: "Advaita Poster 2" },
  { src: "/posters/poster3.jpg", alt: "Advaita Poster 3" },
];

const Announcements = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-body font-semibold bg-lavender/40 text-rose border border-lavender/60 mb-4">
            <Sparkles className="w-4 h-4" />
            Latest Updates
          </div>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground">
            Announcements & <span className="text-gradient">Events</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-lg max-w-lg mx-auto">
            Stay up to date with the latest happenings at our Pre School
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posters.map((poster, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative rounded-3xl overflow-hidden glass-card p-2 group"
            >
              <div className="rounded-2xl overflow-hidden aspect-[3/4] relative bg-muted/20">
                <img
                  src={poster.src}
                  alt={poster.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Announcements;
