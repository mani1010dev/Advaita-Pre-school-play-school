import { useRef } from "react";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Star, Heart, BookOpen } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

/* ───── stat badges ───── */
const stats = [
  { icon: Star, label: "Years of Trust", value: "10+" },
  { icon: Heart, label: "Happy Families", value: "500+" },
  { icon: BookOpen, label: "Learning Programs", value: "25+" },
];

/* ───── floating decorative shapes (CSS-only, no emojis) ───── */
const shapes = [
  { size: 80, x: "8%", y: "18%", color: "sky", delay: 0 },
  { size: 60, x: "88%", y: "12%", color: "mint", delay: 1.2 },
  { size: 50, x: "78%", y: "65%", color: "sunshine", delay: 0.6 },
  { size: 70, x: "15%", y: "70%", color: "lavender", delay: 1.8 },
  { size: 40, x: "45%", y: "8%", color: "peach", delay: 0.3 },
  { size: 35, x: "92%", y: "40%", color: "sky", delay: 2.2 },
];

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 150]);
  const overlayOpacity = useTransform(scrollY, [0, 400], [0.35, 0.7]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left - rect.width / 2) / rect.width);
    mouseY.set((e.clientY - rect.top - rect.height / 2) / rect.height);
  };

  const parallaxX = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);
  const parallaxY = useTransform(mouseY, [-0.5, 0.5], [-6, 6]);

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
          alt="Modern, sunlit early learning classroom"
          className="w-full h-full object-cover scale-110"
          width={1920}
          height={1080}
        />
      </motion.div>

      {/* ── Gradient overlays ── */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))]/60 via-[hsl(var(--background))]/30 to-[hsl(var(--background))]/80"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--background))]/50 via-transparent to-transparent" />

      {/* ── Floating geometric shapes ── */}
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            background: `radial-gradient(circle, hsl(var(--${s.color}) / 0.25), hsl(var(--${s.color}) / 0.05))`,
            border: `1px solid hsl(var(--${s.color}) / 0.15)`,
            backdropFilter: "blur(2px)",
          }}
          animate={{
            y: [0, -18, 0],
            scale: [1, 1.08, 1],
            rotate: [0, 8, 0],
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
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          {/* Left column – text */}
          <div className="text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-body font-semibold bg-[hsl(var(--sunshine))]/20 text-[hsl(var(--accent-foreground))] border border-[hsl(var(--sunshine))]/30 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-[hsl(var(--sunshine))]" />
                Admissions Open 2026–27
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-6 font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-7xl text-foreground leading-[1.1] tracking-tight"
            >
              Where Little Minds
              <br />
              <span className="text-gradient">Grow & Shine</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-5 text-lg md:text-xl text-muted-foreground font-body max-w-lg leading-relaxed"
            >
              A safe, joyful space for your child to learn, explore, and grow
              through play-based early education designed by experts.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="group rounded-full text-base font-body font-bold px-8 shadow-glow hover:shadow-[0_0_50px_-8px_hsl(var(--sky)/0.4)] transition-shadow duration-500"
              >
                Enroll Now
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full text-base font-body font-bold px-8 border-[hsl(var(--sky))]/40 text-foreground hover:bg-[hsl(var(--sky))]/10 hover:border-[hsl(var(--sky))]/60 backdrop-blur-sm transition-all duration-300"
              >
                Book a Visit
              </Button>
            </motion.div>
          </div>

          {/* Right column – stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="hidden lg:flex flex-col gap-5"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
                className="group relative flex items-center gap-5 p-5 rounded-2xl bg-[hsl(var(--card))]/70 backdrop-blur-md border border-[hsl(var(--border))]/60 shadow-soft hover:shadow-glow hover:border-[hsl(var(--sky))]/30 transition-all duration-500 cursor-default"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(var(--sky))]/15 to-[hsl(var(--mint))]/15 flex items-center justify-center border border-[hsl(var(--sky))]/10 group-hover:scale-105 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-[hsl(var(--sky))]" />
                </div>
                <div>
                  <p className="text-2xl font-heading font-extrabold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm font-body text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="lg:hidden mt-12 grid grid-cols-3 gap-3"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center p-4 rounded-2xl bg-[hsl(var(--card))]/70 backdrop-blur-md border border-[hsl(var(--border))]/60"
            >
              <stat.icon className="w-5 h-5 text-[hsl(var(--sky))] mb-2" />
              <p className="text-xl font-heading font-extrabold text-foreground">
                {stat.value}
              </p>
              <p className="text-xs font-body text-muted-foreground text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
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
