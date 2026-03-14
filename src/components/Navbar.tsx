import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Navbar({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: (d: boolean) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const baseUrl = import.meta.env.BASE_URL;

  const navLinks = [
    { name: 'WORK', href: `${baseUrl}#work`, type: 'anchor' },
    { name: 'ARCHIVE', href: '/archive', type: 'link' },
    { name: 'ABOUT', href: `${baseUrl}#about`, type: 'anchor' },
    { name: 'CV', href: 'https://docs.google.com/document/d/1mKtNHiRMuRVgGDX0XrZ9ZtONT63UmVom_Av7DALWqjc/', type: 'external' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 text-[var(--text-color)]"
      >
        <Link to="/" className="font-mono text-xl font-bold tracking-tighter hover-target cursor-pointer z-50">
          HEIDI_LUI<span className="text-electric-blue">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            link.type === 'link' ? (
              <Link key={link.name} to={link.href} className="font-mono text-sm hover:text-electric-blue transition-colors hover-target">
                {link.name}
              </Link>
            ) : (
              <a 
                key={link.name} 
                href={link.href} 
                target={link.type === 'external' ? "_blank" : undefined}
                rel={link.type === 'external' ? "noopener noreferrer" : undefined}
                className="font-mono text-sm hover:text-electric-blue transition-colors hover-target"
              >
                {link.name}
              </a>
            )
          ))}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border border-black/20 dark:border-white/20 hover:border-electric-blue hover:text-electric-blue transition-colors hover-target"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4 z-50">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border border-black/20 dark:border-white/20 hover:text-electric-blue transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button 
            onClick={toggleMenu}
            className="p-2 hover:text-electric-blue transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-[var(--bg-color)] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                {link.type === 'link' ? (
                  <Link 
                    to={link.href} 
                    onClick={toggleMenu}
                    className="font-mono text-4xl font-bold tracking-tighter hover:text-electric-blue transition-colors"
                  >
                    {link.name}<span className="text-electric-blue">()</span>
                  </Link>
                ) : (
                  <a 
                    href={link.href} 
                    onClick={toggleMenu}
                    target={link.type === 'external' ? "_blank" : undefined}
                    rel={link.type === 'external' ? "noopener noreferrer" : undefined}
                    className="font-mono text-4xl font-bold tracking-tighter hover:text-electric-blue transition-colors"
                  >
                    {link.name}<span className="text-electric-blue">()</span>
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
