// Sticky glassmorphic navbar with mobile hamburger menu
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-7xl z-50 md:top-6 transition-all duration-500"
      >
        <div 
          className={`w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between transition-all duration-500 ${
            scrolled 
              ? 'py-3 md:rounded-2xl' 
              : 'py-5 md:py-4 md:rounded-2xl'
          }`}
          style={{
            background: scrolled 
              ? 'rgba(5, 8, 22, 0.75)' 
              : (window.innerWidth >= 768 ? 'rgba(255, 255, 255, 0.02)' : 'transparent'),
            backdropFilter: scrolled || window.innerWidth >= 768 ? 'blur(20px)' : 'none',
            WebkitBackdropFilter: scrolled || window.innerWidth >= 768 ? 'blur(20px)' : 'none',
            border: scrolled 
              ? '1px solid rgba(255, 255, 255, 0.08)' 
              : (window.innerWidth >= 768 ? '1px solid rgba(255, 255, 255, 0.04)' : '1px solid transparent'),
            borderBottom: !scrolled && window.innerWidth < 768 ? 'none' : undefined,
            boxShadow: scrolled ? '0 20px 40px -10px rgba(0,0,0,0.5)' : 'none',
          }}
        >
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #6c63ff, #00d4ff)' }}
            >
              <Code2 size={18} className="text-white" />
            </div>
            <span className="font-bold text-lg" style={{ fontFamily: 'Space Grotesk' }}>
              MADHAVAN M
            </span>
          </motion.a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map(({ label, href }) => {
              const id = href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <li key={label}>
                  <button
                    onClick={() => handleNavClick(href)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg"
                        style={{ background: 'rgba(108, 99, 255, 0.15)', border: '1px solid rgba(108, 99, 255, 0.3)' }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="hidden md:inline-flex btn-primary text-sm py-2 px-5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg transition-colors"
              style={{ background: 'rgba(255,255,255,0.05)' }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-4 right-4 z-40 rounded-2xl p-6 glass-strong"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => handleNavClick(href)}
                    className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li className="mt-2">
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="btn-primary w-full justify-center"
                >
                  Hire Me
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
