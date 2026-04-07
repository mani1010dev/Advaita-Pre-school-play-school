import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck, Building2, Heart, BookOpen } from "lucide-react";

const reasons = [
  { icon: GraduationCap, title: "Experienced Teachers", desc: "Qualified educators who nurture every child's potential" },
  { icon: ShieldCheck, title: "Safe Environment", desc: "CCTV monitored, child-proofed, secure campus" },
  { icon: Building2, title: "Modern Infrastructure", desc: "Child-friendly spaces designed for exploration" },
  { icon: Heart, title: "Personal Attention", desc: "Low student-teacher ratio for individual care" },
  { icon: BookOpen, title: "Modern Methods", desc: "Research-backed, play-based learning curriculum" },
];

const WhyChooseUs = () => (
  <section id="why-us" className="py-20 px-4 bg-muted/30">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground">
          Why Choose <span className="text-gradient">Advaita</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => {
          const Icon = r.icon;
          return (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 text-center hover:shadow-glow transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{r.title}</h3>
              <p className="text-sm font-body text-muted-foreground">{r.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
