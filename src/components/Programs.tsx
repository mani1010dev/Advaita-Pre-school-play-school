import { motion } from "framer-motion";
import { Blocks, BookOpen, Palette, Music, Leaf, Sparkles } from "lucide-react";

const programs = [
  { icon: Blocks, title: "Play-Based Learning", desc: "Learning through creative play and exploration", color: "bg-peach" },
  { icon: BookOpen, title: "Activity-Based Curriculum", desc: "Hands-on activities that build real skills", color: "bg-sky/20" },
  { icon: Sparkles, title: "Storytelling", desc: "Imaginative stories that spark curiosity", color: "bg-lavender" },
  { icon: Palette, title: "Art & Craft", desc: "Express creativity through colors and shapes", color: "bg-sunshine/40" },
  { icon: Music, title: "Music & Dance", desc: "Rhythm, movement, and joyful expression", color: "bg-mint/40" },
  { icon: Leaf, title: "Nature Discovery", desc: "Connecting children with the natural world", color: "bg-cream-dark" },
];

const Programs = () => (
  <section id="programs" className="py-20 px-4 bg-muted/30">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground">
          Our <span className="text-gradient">Programs</span>
        </h2>
        <p className="mt-4 text-muted-foreground font-body text-lg max-w-lg mx-auto">
          A holistic approach to early childhood development
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((prog, i) => {
          const Icon = prog.icon;
          return (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`rounded-3xl p-8 ${prog.color} border border-border/30 group cursor-default`}
            >
              <div className="w-14 h-14 rounded-2xl bg-background/80 flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{prog.title}</h3>
              <p className="text-sm font-body text-muted-foreground">{prog.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Programs;
