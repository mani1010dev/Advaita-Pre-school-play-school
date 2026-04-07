import { motion } from "framer-motion";
import { FileText, School, CheckCircle } from "lucide-react";

const steps = [
  { icon: FileText, title: "Fill Form", desc: "Complete the online admission form with your child's details", num: "01" },
  { icon: School, title: "Visit School", desc: "Schedule a campus visit and meet our teachers", num: "02" },
  { icon: CheckCircle, title: "Confirm Admission", desc: "Complete enrollment and welcome your child aboard!", num: "03" },
];

const Admission = () => (
  <section id="admission" className="py-20 px-4">
    <div className="container mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground">
          <span className="text-gradient">Admission</span> Process
        </h2>
        <p className="mt-4 text-muted-foreground font-body text-lg">Simple steps to join our family</p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-6 items-stretch">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex-1 glass-card p-8 text-center relative"
            >
              <span className="absolute top-4 right-4 text-5xl font-heading font-extrabold text-primary/10">
                {step.num}
              </span>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{step.title}</h3>
              <p className="text-sm font-body text-muted-foreground">{step.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Admission;
