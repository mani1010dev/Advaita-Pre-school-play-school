import { motion } from "framer-motion";
import { Sun, Palette, TreePine, BookOpen, Heart } from "lucide-react";

const timeline = [
  { icon: Sun, time: "8:30 AM", title: "Good Morning!", desc: "Warm welcome circle with songs and greetings", color: "bg-sunshine/40" },
  { icon: BookOpen, time: "9:30 AM", title: "Learning Time", desc: "Interactive lessons with stories and phonics", color: "bg-sky/20" },
  { icon: Palette, time: "10:30 AM", title: "Creative Hour", desc: "Art, craft, and imaginative free play", color: "bg-peach" },
  { icon: TreePine, time: "11:30 AM", title: "Outdoor Play", desc: "Garden time, sports, and nature exploration", color: "bg-mint/40" },
  { icon: Heart, time: "12:30 PM", title: "Happy Goodbye", desc: "Recap, smiles, and see you tomorrow!", color: "bg-lavender" },
];

const DayAtSchool = () => (
  <section className="py-20 px-4">
    <div className="container mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground">
          A Day at <span className="text-gradient">Advaita</span>
        </h2>
        <p className="mt-4 text-muted-foreground font-body text-lg">Follow a typical day of joy and learning</p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />

        {timeline.map((item, i) => {
          const Icon = item.icon;
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex items-start gap-4 mb-10 md:mb-14 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              } ml-14 md:ml-0`}
            >
              {/* Dot */}
              <div className="absolute left-[-2rem] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 top-2" />

              {/* Card */}
              <div className={`md:w-[calc(50%-2rem)] ${isLeft ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
                <div className={`${item.color} rounded-2xl p-6 inline-block text-left`}>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="text-xs font-body font-bold text-muted-foreground">{item.time}</span>
                  </div>
                  <h3 className="font-heading font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm font-body text-muted-foreground mt-1">{item.desc}</p>
                </div>
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default DayAtSchool;
