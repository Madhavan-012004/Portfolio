// Footer component
import { motion } from 'framer-motion';
import { Code2, Heart, GitFork, Globe, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative z-10 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #6c63ff, #00d4ff)' }}
            >
              <Code2 size={18} className="text-white" />
            </div>
            <div>
              <p className="font-bold text-white" style={{ fontFamily: 'Space Grotesk' }}>MADHAVAN M</p>
              <p className="text-xs text-gray-500">Junior Software Developer</p>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm flex items-center gap-1.5">
            Built with{' '}
            <Heart size={13} className="text-pink-500 fill-pink-500" />
            {' '}using React &amp; Tailwind CSS — © {new Date().getFullYear()}
          </p>

          {/* Social + Back to top */}
          <div className="flex items-center gap-3">
            {[
              { icon: GitFork, href: 'https://github.com/', label: 'GitHub' },
              { icon: Globe, href: 'https://linkedin.com/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:madhavan@example.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:text-white transition-colors"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={16} />
              </motion.a>
            ))}

            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors ml-2"
              style={{ background: 'rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.3)' }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
        </div>

        {/* Bottom micro-line */}
        <div className="mt-4 pt-6 border-t text-center" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
          <p className="text-xs text-gray-600 font-mono">
            // Designed & Developed by{' '}
            <span style={{ color: '#6c63ff' }}>MADHAVAN M</span> · Chennai, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
