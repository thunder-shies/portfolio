import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="scan-line"></div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center z-10 px-4"
      >
        <h1 className="font-mono text-5xl md:text-8xl font-extrabold mb-4 tracking-tighter relative group cursor-default">
          <span className="absolute -inset-4 blur-xl bg-electric-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></span>
          <span className="relative block">ARTS_TECH</span>
          <span className="relative block text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-gray-800 dark:to-gray-200">
            STUDENT
          </span>
        </h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-sans text-lg md:text-xl max-w-lg mx-auto opacity-70 mt-8"
        >
          Exploring creative intersections of art, technology, and interactive experiences.
        </motion.p>
      </motion.div>

      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-current"></div>
      </motion.div>
    </section>
  );
}
