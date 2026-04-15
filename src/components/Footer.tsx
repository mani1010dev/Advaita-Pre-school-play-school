import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-10 px-4 border-t border-border bg-card">
    <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <img 
          src="/play logo.png" 
          alt="Advaita Playschool Logo" 
          className="h-12 w-auto object-contain"
        />
        <span className="font-heading font-bold text-foreground">Advaita Pre School</span>
      </div>
      <p className="text-sm font-body text-muted-foreground flex items-center gap-1">
        Made with <Heart className="w-4 h-4 text-peach fill-peach" /> for little learners
      </p>
      <p className="text-xs font-body text-muted-foreground">© 2026 Advaita Pre school & play school. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
