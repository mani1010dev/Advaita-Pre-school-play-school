import { useEffect } from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

const instagramPosts = [
  "https://www.instagram.com/p/Cx-t2Tkycgc/",
  "https://www.instagram.com/p/Cxp_9X7rcz7/",
  "https://www.instagram.com/p/Cxt9FadMKUH/",
  "https://www.instagram.com/p/Cx4P5hQvZJM/",
];

const SocialHub = () => {
  useEffect(() => {
    // 1. Add script if not exists
    const scriptId = "instagram-embed-script";
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // 2. Process embeds after they're in the DOM
    const interval = setInterval(() => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-4 bg-cream/30 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-body font-semibold bg-sky/10 text-sky border border-sky/20 mb-4"
          >
            <Instagram className="w-4 h-4" />
            Live from Instagram
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            See Our <span className="text-gradient">Daily Magic</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground font-body max-w-2xl mx-auto"
          >
            Real moments from our classrooms and play areas. 
            Follow us to keep up with our little stars.
          </motion.p>
        </div>

        {/* Live Embeds Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {instagramPosts.map((url, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex justify-center"
            >
              <blockquote 
                className="instagram-media w-full" 
                data-instgrm-captioned 
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{ 
                  background: "#FFF", 
                  border: "0", 
                  borderRadius: "16px", 
                  boxShadow: "0 10px 40px -10px hsl(var(--sky) / 0.2)", 
                  margin: "0 auto", 
                  maxWidth: "350px", 
                  minWidth: "326px", 
                  padding: "0", 
                  width: "100%" 
                }}
              >
                <div style={{ padding: "16px" }}>
                  <a href={url} target="_blank" rel="noopener noreferrer" style={{ background: "#FFFFFF", lineHeight: "0", textAlign: "center", textDecoration: "none", width: "100%" }}>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                      <div style={{ backgroundColor: "#F4F4F4", borderRadius: "50%", height: "40px", marginRight: "14px", width: "40px" }}></div>
                      <div style={{ display: "flex", flexDirection: "column", flexGrow: "1", justifyContent: "center" }}>
                        <div style={{ backgroundColor: "#F4F4F4", borderRadius: "4px", height: "14px", marginBottom: "6px", width: "100px" }}></div>
                        <div style={{ backgroundColor: "#F4F4F4", borderRadius: "4px", height: "14px", width: "60px" }}></div>
                      </div>
                    </div>
                    <div style={{ padding: "19% 0" }}></div>
                    <div style={{ color: "#3897f0", fontFamily: "Arial,sans-serif", fontSize: "14px", fontWeight: 550, lineHeight: "18px" }}>View this post on Instagram</div>
                  </a>
                </div>
              </blockquote>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button 
            asChild
            size="lg"
            className="rounded-full font-body font-bold px-12 shadow-soft hover:shadow-glow transition-all duration-300"
          >
            <a 
              href="https://www.instagram.com/advaita_dance_studio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Follow Our Official Profile
              <Instagram className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialHub;
