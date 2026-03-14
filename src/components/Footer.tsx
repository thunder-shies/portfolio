import { Instagram, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-12 border-t border-black/10 dark:border-white/10 mt-32 relative z-10 bg-inherit"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="font-mono text-2xl font-bold tracking-tighter md:flex-1">
          HEIDI_LUI<span className="text-electric-blue">.</span>
        </div>
        <div className="flex gap-8 justify-center">
          <a href="mailto:heidi.hklui@gmail.com" aria-label="Email" className="hover:text-electric-blue transition-colors hover-target">
            <Mail size={20} />
          </a>
          <a href="https://www.instagram.com/tai.hoidi/" aria-label="Instagram" className="hover:text-electric-blue transition-colors hover-target">
            <Instagram size={20} />
          </a>
          <a href="https://github.com/thunder-shies" aria-label="GitHub" className="hover:text-electric-blue transition-colors hover-target">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/heidi-hklui/" aria-label="LinkedIn" className="hover:text-electric-blue transition-colors hover-target">
            <Linkedin size={20} />
          </a>
        </div>
        <div className="font-mono text-[10px] tracking-widest opacity-50 uppercase md:flex-1 md:text-right">
          © {new Date().getFullYear()} ALL RIGHTS RESERVED.
        </div>
      </div>
    </motion.footer>
  );
}
