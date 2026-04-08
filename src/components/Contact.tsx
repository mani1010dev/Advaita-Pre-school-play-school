import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", age: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent! 🎉", description: "We'll get back to you soon." });
    setForm({ name: "", phone: "", age: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground">
            Get In <span className="text-gradient">Touch</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 space-y-4"
          >
            <Input
              placeholder="Parent Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="rounded-xl bg-background font-body"
              required
            />
            <Input
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="rounded-xl bg-background font-body"
              required
            />
            <Input
              placeholder="Child's Age"
              value={form.age}
              onChange={(e) => setForm({ ...form, age: e.target.value })}
              className="rounded-xl bg-background font-body"
            />
            <Textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="rounded-xl bg-background font-body min-h-[100px]"
            />
            <Button type="submit" className="rounded-full w-full font-body font-bold">
              <Send className="w-4 h-4 mr-2" /> Send Message
            </Button>
          </motion.form>

          {/* Quick actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5 flex flex-col justify-center"
          >
            <a
              href="tel:+919500055350"
              className="glass-card p-6 flex items-center gap-4 hover:shadow-glow transition-shadow group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-foreground">Call Us</h4>
                <p className="text-sm font-body text-muted-foreground">+91 95000 55350</p>
              </div>
            </a>

            <a
              href="https://wa.me/919500055350"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 flex items-center gap-4 hover:shadow-glow transition-shadow group"
            >
              <div className="w-12 h-12 rounded-full bg-mint/30 flex items-center justify-center group-hover:bg-mint/50 transition-colors">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-foreground">WhatsApp</h4>
                <p className="text-sm font-body text-muted-foreground">Chat with us instantly</p>
              </div>
            </a>

            <div className="glass-card p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-sunshine/30 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-foreground">Visit Us</h4>
                <p className="text-sm font-body text-muted-foreground">block Q, 1/2, Lakshmi St, 2nd Ext, above Cheap and best saloon, Villivakkam, Chennai, Tamil Nadu 600049</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
