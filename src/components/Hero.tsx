import { useRef } from "react";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

/* ───── floating pastel shapes (rainbow palette) ───── */
const shapes = [
  { size: 70, x: "6%", y: "15%", color: "rainbow-red", delay: 0 },
  { size: 55, x: "90%", y: "10%", color: "rainbow-orange", delay: 1.2 },
  { size: 45, x: "80%", y: "60%", color: "sunshine", delay: 0.6 },
  { size: 60, x: "12%", y: "72%", color: "lavender", delay: 1.8 },
  { size: 35, x: "50%", y: "6%", color: "mint", delay: 0.3 },
  { size: 30, x: "94%", y: "38%", color: "sky", delay: 2.2 },
  { size: 40, x: "35%", y: "75%", color: "rose", delay: 1.0 },
];

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 120]);
  const overlayOpacity = useTransform(scrollY, [0, 400], [0.15, 0.55]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left - rect.width / 2) / rect.width);
    mouseY.set((e.clientY - rect.top - rect.height / 2) / rect.height);
  };

  const parallaxX = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);
  const parallaxY = useTransform(mouseY, [-0.5, 0.5], [-4, 4]);

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Background image with parallax ── */}
      <motion.div
        style={{ x: parallaxX, y: parallaxY, translateY: bgY }}
        className="absolute inset-[-5%]"
      >
        <img
          src={heroBg}
          alt="Children playing together with building blocks in a pastel wonderland"
          className="w-full h-full object-cover scale-110"
          width={1920}
          height={1080}
        />
      </motion.div>

      {/* ── Soft gradient overlays (pastel tints) ── */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-[hsl(200_30%_97%/0.5)] via-transparent to-[hsl(200_30%_97%/0.75)]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(200_30%_97%/0.45)] via-transparent to-transparent" />

      {/* ── Floating pastel shapes ── */}
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            background: `radial-gradient(circle, hsl(var(--${s.color}) / 0.3), hsl(var(--${s.color}) / 0.05))`,
            border: `1px solid hsl(var(--${s.color}) / 0.2)`,
            backdropFilter: "blur(2px)",
          }}
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.06, 1],
            rotate: [0, 6, 0],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            delay: s.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ── Hero content ── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-body font-semibold bg-[hsl(var(--sunshine)/0.25)] text-[hsl(var(--accent-foreground))] border border-[hsl(var(--sunshine)/0.35)] backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[hsl(var(--sunshine))]" />
              Admissions Open 2026–27
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 font-heading font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-8xl leading-[1.1] tracking-tight"
          >
            <span className="text-[#E91E63] drop-shadow-sm">Advaita</span>
            <br />
            <span className="text-[#1A56DB] drop-shadow-sm">Pre School</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-6 text-xl md:text-2xl text-foreground/80 font-body font-bold max-w-lg mx-auto leading-relaxed italic border-y border-[hsl(var(--sky)/0.3)] py-3"
          >
            Excellence in early years
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              asChild
              className="group rounded-full text-base font-body font-bold px-8 shadow-glow hover:shadow-[0_0_50px_-8px_hsl(var(--sky)/0.45)] transition-shadow duration-500"
            >
              <a href="#contact">
                Enroll Now
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="rounded-full text-base font-body font-bold px-8 border-[hsl(var(--sky))]/40 text-foreground hover:bg-[hsl(var(--sky))]/10 hover:border-[hsl(var(--sky))]/60 backdrop-blur-sm transition-all duration-300"
            >
              <a href="#contact">Book a Visit</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom wave transition ── */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" className="w-full fill-background" preserveAspectRatio="none">
          <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,30 1440,60 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
