// Projects section with filter tabs and glassmorphic cards
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, GitFork, Utensils, Eye, Keyboard, ShieldCheck, Database, Activity } from 'lucide-react';
import { SectionHeading } from './About';

const FILTERS = ['All', 'AI', 'Cyber', 'Tools'];

const projects = [
  {
    id: 1,
    title: 'Restaurant Billing & POS System',
    subtitle: 'Petpooja-like complete POS solution',
    description:
      'A full-featured restaurant management & billing system with real-time order tracking, KOT generation, table management, and live reporting dashboard.',
    tags: ['Web'],
    tech: ['React.js', 'Laravel', 'MySQL', 'WebSocket'],
    icon: Utensils,
    gradient: 'from-orange-500/20 to-pink-500/20',
    accentColor: '#ff6584',
    github: 'https://github.com/madhavan-012004',
    live: null,
    features: ['Real-time KOT', 'Table Management', 'Custom Billing', 'Multi-role Auth'],
    status: 'Production Ready',
  },
  {
    id: 2,
    title: 'Blindness Assistive Audio Vision',
    subtitle: 'Raspberry Pi Powered Real-time Aid',
    description:
      'Developed a vision system for visually impaired users using Raspberry Pi and camera. Features real-time object detection and voice guidance.',
    tags: ['AI', 'Tools'],
    tech: ['C++', 'Python', 'OpenCV', 'ML', 'TTS'],
    icon: Eye,
    gradient: 'from-blue-500/20 to-cyan-500/20',
    accentColor: '#00d4ff',
    github: 'https://github.com/madhavan-012004',
    live: null,
    features: ['Object Detection', 'Text Reading', 'Voice Guidance', 'Real-time'],
    status: 'Research Project',
  },
  {
    id: 3,
    title: 'MediLive — AI Health Monitoring',
    subtitle: 'IoT & Vision Powered Healthcare',
    description:
      'Intelligent system integrating IoT and NLP to monitor patient vitals. Features hands-free interaction via voice and gesture recognition.',
    tags: ['AI'],
    tech: ['Python', 'TensorFlow', 'OpenCV', 'Raspberry Pi'],
    icon: Activity,
    gradient: 'from-green-500/20 to-emerald-500/20',
    accentColor: '#00d464',
    github: 'https://github.com/madhavan-012004',
    live: null,
    features: ['Vitals Monitoring', 'Gesture Control', 'Voice Assistance', 'IoT Sensors'],
    status: 'Demo Ready',
  },
  {
    id: 4,
    title: 'Virtual AI Keyboard',
    subtitle: 'Hand-tracking gesture-based keyboard',
    description:
      'A touchless virtual keyboard using computer vision (MediaPipe) that detects finger gestures in real-time to simulate keypresses.',
    tags: ['AI', 'Tools'],
    tech: ['Python', 'OpenCV', 'MediaPipe', 'C++'],
    icon: Keyboard,
    gradient: 'from-purple-500/20 to-violet-500/20',
    accentColor: '#6c63ff',
    github: 'https://github.com/madhavan-012004',
    live: null,
    features: ['Gesture Typing', 'Real-time Tracking', 'Touchless UX', 'High FPS'],
    status: 'Demo Ready',
  },
  {
    id: 5,
    title: 'AI Iris Recognition System',
    subtitle: 'Real vs Fake Iris Detection',
    description:
      'An AI-powered biometric system using deep learning to distinguish genuine iris patterns from printed/fake ones with liveness detection.',
    tags: ['AI'],
    tech: ['Python', 'OpenCV', 'C++', 'NumPy', 'ML'],
    icon: Eye,
    gradient: 'from-cyan-500/20 to-blue-500/20',
    accentColor: '#00d4ff',
    github: 'https://github.com/madhavan-012004',
    live: null,
    features: ['Liveness Detection', 'Real-time', 'High Accuracy', 'Anti-Spoof'],
    status: 'Research Project',
  },
  {
    id: 6,
    title: 'Effective Malware Detection',
    subtitle: 'Cybersecurity Activity Prevention',
    description:
      'Advanced threat prevention system protecting networks using signature-based detection and PyTorch deep learning models.',
    tags: ['Cyber', 'Tools'],
    tech: ['Python', 'PyTorch', 'Deep Learning'],
    icon: ShieldCheck,
    gradient: 'from-red-500/20 to-orange-500/20',
    accentColor: '#ff6584',
    github: 'https://github.com/madhavan-012004',
    live: null,
    features: ['Malware Detection', 'Threat Prevention', 'Signature Tracking'],
    status: 'Research Project',
  },
  {
    id: 7,
    title: 'SQLGetterSetter',
    subtitle: 'API Query Optimization Metaclass',
    description:
      'A Pythonic metaclass that enables seamless SQL record handling by converting records into Python objects for API efficiency.',
    tags: ['Tools'],
    tech: ['Python', 'MySQL', 'Metaprogramming'],
    icon: Database,
    gradient: 'from-indigo-500/20 to-purple-500/20',
    accentColor: '#a5a0ff',
    github: 'https://github.com/madhavan-012004',
    live: null,
    features: ['Query Optimization', 'Data Encapsulation', 'Auto-mapping'],
    status: 'Demo Ready',
  },
];

const statusColors = {
  'Production Ready': { bg: 'rgba(0,212,100,0.1)', text: '#00d464', border: 'rgba(0,212,100,0.3)' },
  'Research Project': { bg: 'rgba(0,212,255,0.1)', text: '#00d4ff', border: 'rgba(0,212,255,0.3)' },
  'Demo Ready': { bg: 'rgba(108,99,255,0.1)', text: '#a5a0ff', border: 'rgba(108,99,255,0.3)' },
};

const ProjectCard = ({ project }) => {
  const Icon = project.icon;
  const statusStyle = statusColors[project.status];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -8 }}
      className="glass rounded-2xl overflow-hidden group cursor-default"
      style={{
        boxShadow: '0 4px 30px rgba(0,0,0,0.2)',
        transition: 'box-shadow 0.4s ease, transform 0.4s ease',
      }}
    >
      {/* Card top gradient bar */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${project.accentColor}, transparent)` }}
      />

      <div className="p-7">
        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${project.accentColor}22, ${project.accentColor}44)` }}
          >
            <Icon size={22} style={{ color: project.accentColor }} />
          </div>
          {/* Status badge */}
          <span
            className="text-xs font-medium px-3 py-1 rounded-full"
            style={{ background: statusStyle.bg, color: statusStyle.text, border: `1px solid ${statusStyle.border}` }}
          >
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-lg font-bold mb-1 group-hover:gradient-text transition-all"
          style={{ fontFamily: 'Space Grotesk', color: '#fff' }}
        >
          {project.title}
        </h3>
        <p className="text-xs font-medium mb-3" style={{ color: project.accentColor }}>
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Feature chips */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.features.map(f => (
            <span
              key={f}
              className="text-xs px-2.5 py-1 rounded-full"
              style={{
                background: `${project.accentColor}12`,
                border: `1px solid ${project.accentColor}30`,
                color: project.accentColor,
              }}
            >
              ✓ {f}
            </span>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map(t => (
            <span key={t} className="text-xs px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/8">
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl transition-all duration-200"
            style={{ background: 'rgba(255,255,255,0.05)', color: '#ccc', border: '1px solid rgba(255,255,255,0.1)' }}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(108,99,255,0.15)', borderColor: 'rgba(108,99,255,0.4)', color: '#fff' }}
            whileTap={{ scale: 0.97 }}
          >
            <GitFork size={15} />
            GitHub
          </motion.a>
          {project.live ? (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl"
              style={{ background: `${project.accentColor}22`, color: project.accentColor, border: `1px solid ${project.accentColor}40` }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <ExternalLink size={15} />
              Live Demo
            </motion.a>
          ) : (
            <span
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-xl text-gray-600"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px dashed rgba(255,255,255,0.08)' }}
            >
              <ExternalLink size={15} />
              Demo Soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(activeFilter));

  return (
    <section id="projects" className="section-padding relative z-10">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 80% 50%, rgba(0,212,255,0.04) 0%, transparent 70%)' }}
      />

      <div className="w-full relative">
        <SectionHeading
          number="// 03"
          title="Featured Projects"
          subtitle="Real-world products I've built — from AI systems to full-stack applications."
        />

        {/* Filter tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {FILTERS.map((filter) => (
            <motion.button
              key={filter}
              id={`filter-${filter.toLowerCase()}`}
              onClick={() => setActiveFilter(filter)}
              className="relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                color: activeFilter === filter ? '#fff' : '#888',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {activeFilter === filter && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full"
                  style={{ background: 'linear-gradient(135deg, #6c63ff, #00d4ff)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{filter}</span>
            </motion.button>
          ))}
        </div>

        {/* Project cards */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* More projects note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-10"
        >
          More projects on{' '}
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">
            GitHub →
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default Projects;
