// Contact section with form, social links, and location card
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, GitFork, Globe, Link, Send, MessageSquare, Phone } from 'lucide-react';
import { SectionHeading } from './About';

const socialLinks = [
  {
    icon: Mail,
    label: 'Email',
    handle: 'madhavanm.0108@gmail.com',
    href: 'mailto:madhavanm.0108@gmail.com',
    color: '#ff6584',
    bg: 'rgba(255,101,132,0.12)',
  },
  {
    icon: Phone,
    label: 'Phone',
    handle: '+91 97100 82916',
    href: 'tel:+919710082916',
    color: '#00d464',
    bg: 'rgba(0,212,100,0.12)',
  },
  {
    icon: GitFork,
    label: 'GitHub',
    handle: '@madhavan-012004',
    href: 'https://github.com/madhavan-012004',
    color: '#fff',
    bg: 'rgba(255,255,255,0.08)',
  },
  {
    icon: Globe,
    label: 'LinkedIn',
    handle: '/in/madhavan01',
    href: 'https://linkedin.com/in/madhavan01',
    color: '#0a66c2',
    bg: 'rgba(10,102,194,0.12)',
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async send (replace with your handler / EmailJS / backend)
    await new Promise(res => setTimeout(res, 1500));
    setLoading(false);
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section id="contact" className="section-padding relative z-10">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 80%, rgba(108,99,255,0.06) 0%, transparent 70%)' }}
      />

      <div className="w-full relative">
        <SectionHeading
          number="// 05"
          title="Get in Touch"
          subtitle="Have an opportunity, project, or just want to chat? I'd love to hear from you."
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — Info + social */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Availability card */}
            <div
              className="glass rounded-2xl p-6 mb-8"
              style={{ borderLeft: '3px solid #00d464' }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 font-semibold text-sm">Open to Opportunities</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Currently available for full-time roles, freelance projects, and collaborations in AI or full-stack development.
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 mb-8 text-gray-400">
              <MapPin size={18} style={{ color: '#ff6584' }} />
              <span>Chennai, Tamil Nadu, India 🇮🇳</span>
            </div>

            {/* Social Links */}
            <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-widest">Connect with me</h3>
            <div className="space-y-3">
              {socialLinks.map(({ icon: Icon, label, handle, href, color, bg }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 py-3 px-4 rounded-xl transition-all duration-300 group"
                  style={{ background: bg, border: '1px solid rgba(255,255,255,0.06)' }}
                  whileHover={{ x: 6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}18` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{label}</p>
                    <p className="text-xs text-gray-500">{handle}</p>
                  </div>
                  <Send size={14} className="ml-auto text-gray-600 group-hover:text-gray-400 transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 space-y-5"
            >
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare size={20} style={{ color: '#6c63ff' }} />
                <h3 className="font-semibold text-white" style={{ fontFamily: 'Space Grotesk' }}>
                  Send a Message
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-500 mb-1.5 font-medium">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1.5 font-medium">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@email.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-1.5 font-medium">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Job opportunity / Project collaboration"
                  className="form-input"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-1.5 font-medium">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or opportunity..."
                  className="form-input"
                />
              </div>

              {/* Status message */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-xl text-sm text-green-400"
                  style={{ background: 'rgba(0,212,100,0.1)', border: '1px solid rgba(0,212,100,0.3)' }}
                >
                  ✅ Message sent! I'll get back to you soon.
                </motion.div>
              )}

              <motion.button
                id="contact-submit"
                type="submit"
                disabled={loading}
                className="btn-primary w-full justify-center"
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
              >
                {loading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
