import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

const VideoTour = () => {
  return (
    <section className="py-24 px-4 bg-muted/20 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-rose/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sky/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-body font-semibold bg-rose/10 text-rose border border-rose/20 mb-4"
          >
            <PlayCircle className="w-4 h-4" />
            Campus Tour
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-extrabold mb-4"
          >
            A Glimpse of our <span className="text-gradient">Academy</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground font-body max-w-2xl mx-auto"
          >
            Step inside Advaita Pre School and experience the joy, creativity, and nurturing environment we offer every day.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_-12px_hsl(var(--rainbow-red)/0.25)] border-[8px] border-white/60 backdrop-blur-sm"
        >
          <video 
            className="w-full h-auto aspect-video object-cover"
            controls
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/hero-bg.png" // Using the beautiful hero bg as a fallback poster
          >
            <source src="/campus_tour.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoTour;
