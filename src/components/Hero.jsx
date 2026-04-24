// Hero section with typing effect, animated intro, and CTA buttons
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, GitFork, Globe, Mail, Download, Sparkles, MapPin } from 'lucide-react';

// Strings to cycle through in the typing animation
const ROLES = [
  'Junior Software Developer',
  'AI & Full Stack Enthusiast',
  'Computer Vision Builder',
  'React & Laravel Developer',
  'Real-World Product Creator',
];

// Reusable animated counter
const useTypewriter = (words, typingSpeed = 80, deletingSpeed = 40, pauseMs = 2000) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pauseMs);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex(i => i + 1);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseMs]);

  return text;
};

const Hero = () => {
  const typedText = useTypewriter(ROLES);
  const heroRef = useRef(null);

  // Parallax tilt on mouse move
  useEffect(() => {
    const handleMove = (e) => {
      const card = document.getElementById('hero-avatar-card');
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / 25;
      const dy = (e.clientY - cy) / 25;
      card.style.transform = `perspective(600px) rotateY(${dx}deg) rotateX(${-dy}deg)`;
    };
    const resetCard = () => {
      const card = document.getElementById('hero-avatar-card');
      if (card) card.style.transform = 'perspective(600px) rotateY(0) rotateX(0)';
    };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseleave', resetCard);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseleave', resetCard);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: '80px' }}
    >
      {/* Radial glow blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-6 pb-24">
        {/* Avatar card - now on top and centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="flex justify-center items-center mb-12"
        >
          <div
            id="hero-avatar-card"
            className="relative"
            style={{ transition: 'transform 0.15s ease', transformStyle: 'preserve-3d' }}
          >
            {/* Outer ring animation */}
            <div
              className="absolute inset-[-20px] rounded-full animate-spin-slow pointer-events-none"
              style={{
                background: 'conic-gradient(from 0deg, #6c63ff, #00d4ff, #ff6584, #6c63ff)',
                WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #fff 0)',
                mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #fff 0)',
              }}
            />
            {/* Avatar circle */}
            <div
              className="w-48 h-48 md:w-72 md:h-72 rounded-full flex items-center justify-center text-6xl md:text-8xl select-none"
              style={{
                background: 'linear-gradient(135deg, rgba(108,99,255,0.2), rgba(0,212,255,0.2))',
                border: '2px solid rgba(165,160,255,0.3)',
                boxShadow: '0 0 60px rgba(108,99,255,0.3), inset 0 0 40px rgba(0,0,0,0.3)',
              }}
            >
              👨‍💻
            </div>

            {/* Floating stat cards - adjusted for centered layout */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute -left-12 top-4 glass rounded-2xl px-3 py-2 scale-75 md:scale-100"
            >
              <p className="text-xs text-gray-400 mb-0.5">Projects Built</p>
              <p className="text-xl md:text-2xl font-bold gradient-text">10+</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -right-12 bottom-8 glass rounded-2xl px-3 py-2 scale-75 md:scale-100"
            >
              <p className="text-xs text-gray-400 mb-0.5">Tech Stack</p>
              <p className="text-xl md:text-2xl font-bold" style={{ color: '#00d4ff' }}>8+</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Text content - now centered below avatar */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          animate="visible"
          className="flex flex-col items-center max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
            <span
              className="flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium"
              style={{ background: 'rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.3)', color: '#a5a0ff' }}
            >
              <Sparkles size={14} />
              Available for opportunities 🚀
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p variants={itemVariants} className="text-gray-400 text-lg mb-2 font-medium">
            Hi there, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-bold leading-tight tracking-tight mb-4"
            style={{
              fontFamily: 'Space Grotesk',
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              color: '#ffffff',
              textShadow: '0 4px 30px rgba(255,255,255,0.2)'
            }}
          >
            MADHAVAN M
          </motion.h1>

          {/* Typing role */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-2 mb-6 min-h-[2rem]">
            <span className="text-gray-400 text-lg">I&apos;m a&nbsp;</span>
            <span
              className="text-xl md:text-2xl font-semibold"
              style={{ color: '#00d4ff', fontFamily: 'JetBrains Mono' }}
            >
              {typedText}
              <span
                className="inline-block w-[3px] h-[1em] ml-1 animate-pulse"
                style={{ backgroundColor: '#00d4ff', verticalAlign: 'text-bottom' }}
              />
            </span>
          </motion.div>

          {/* Location */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 text-gray-400 mb-6 text-sm">
            <MapPin size={14} style={{ color: '#ff6584' }} />
            Chennai, India
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl text-balance mx-auto"
          >
            Building real-world products at the intersection of{' '}
            <span className="font-semibold text-white">AI</span>,{' '}
            <span className="font-semibold text-white">Computer Vision</span>, and{' '}
            <span className="font-semibold text-white">Full Stack Web</span> development.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-10">
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-primary px-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail size={16} />
              Get in Touch
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download="Madhavan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline px-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={16} />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-6">
            {[
              { icon: GitFork, href: 'https://github.com/madhavan-012004', label: 'GitHub' },
              { icon: Globe, href: 'https://linkedin.com/in/madhavan01', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:madhavanm.0108@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-12 h-12 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                whileHover={{ scale: 1.15, y: -2, borderColor: 'rgba(108,99,255,0.5)', backgroundColor: 'rgba(108,99,255,0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 cursor-pointer z-20"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
