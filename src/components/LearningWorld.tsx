import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, BookOpen, Palette, Music } from "lucide-react";

const classes = [
  {
    title: "Play Group",
    icon: Users,
    age: "1.5 – 2.5 years",
    color: "bg-peach",
    activities: ["Sensory play", "Motor skills", "Social interaction"],
    methods: ["Free play", "Guided exploration", "Music sessions"],
    description: "First steps into a world of wonder and discovery.",
  },
  {
    title: "Nursery",
    icon: BookOpen,
    age: "2.5 – 3.5 years",
    color: "bg-sky/20",
    activities: ["Storytelling", "Art activities", "Number games"],
    methods: ["Theme-based learning", "Circle time", "Nature walks"],
    description: "Building foundations through stories and creativity.",
  },
  {
    title: "LKG",
    icon: Palette,
    age: "3.5 – 4.5 years",
    color: "bg-mint/40",
    activities: ["Reading readiness", "Writing practice", "Science fun"],
    methods: ["Phonics approach", "Hands-on experiments", "Group projects"],
    description: "Preparing young minds for structured learning.",
  },
  {
    title: "UKG",
    icon: Music,
    age: "4.5 – 5.5 years",
    color: "bg-sunshine/40",
    activities: ["Advanced reading", "Math concepts", "Creative writing"],
    methods: ["Project-based learning", "Peer teaching", "Digital literacy"],
    description: "Confident learners ready for primary school.",
  },
];

const LearningWorld = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="learning" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground">
            Explore Our <span className="text-gradient">Learning World</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-lg max-w-lg mx-auto">
            Tailored programs for every stage of early development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {classes.map((cls, i) => {
            const Icon = cls.icon;
            const isActive = active === i;
            return (
              <motion.div
                key={cls.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActive(isActive ? null : i)}
                className={`cursor-pointer rounded-3xl p-6 transition-all duration-300 border-2 ${
                  isActive
                    ? "border-primary shadow-glow"
                    : "border-transparent hover:border-border"
                } ${cls.color}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-background/80 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-foreground">{cls.title}</h3>
                    <span className="text-xs font-body text-muted-foreground">{cls.age}</span>
                  </div>
                </div>

                <p className="text-sm font-body text-muted-foreground mb-3">{cls.description}</p>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 border-t border-border/50 space-y-3">
                        <div>
                          <h4 className="text-xs font-heading font-bold text-foreground uppercase tracking-wider mb-1">
                            Activities
                          </h4>
                          <ul className="space-y-1">
                            {cls.activities.map((a) => (
                              <li key={a} className="text-sm font-body text-muted-foreground flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-xs font-heading font-bold text-foreground uppercase tracking-wider mb-1">
                            Learning Methods
                          </h4>
                          <ul className="space-y-1">
                            {cls.methods.map((m) => (
                              <li key={m} className="text-sm font-body text-muted-foreground flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-sunshine" />
                                {m}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LearningWorld;
