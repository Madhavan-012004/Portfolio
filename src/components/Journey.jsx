// Journey / Experience Timeline section
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { GraduationCap, Code2, Brain, Briefcase, Rocket, Star } from 'lucide-react';
import { SectionHeading } from './About';

const timelineEvents = [
  {
    year: '2020',
    icon: GraduationCap,
    title: 'SSLC — Secondary School',
    place: 'SRIRAM VIDHYAMANDHIR',
    description: 'Completed secondary education with 70% aggregate. Developed an early interest in technology.',
    color: '#ffd166',
    type: 'Education',
  },
  {
    year: '2022',
    icon: GraduationCap,
    title: 'HSC — Higher Secondary',
    place: 'SRIRAM VIDHYAMANDHIR',
    description: 'Specialized in Science & Mathematics with 78% aggregate. Began exploring software development.',
    color: '#6c63ff',
    type: 'Education',
  },
  {
    year: '2022 - 2026',
    icon: Code2,
    title: 'B.Tech — Information Technology',
    place: 'Vel Tech High Tech Engineering College',
    description: 'Pursuing engineering degree with a current GPA of 8.94. Deep diving into AI and ML.',
    color: '#00d4ff',
    type: 'Current Education',
  },
  {
    year: 'March 2024',
    icon: Star,
    title: '1st Prize — Elite Challenge',
    place: 'MIT Campus, Anna University',
    description: 'Won the India Engineers Elite Challenge 2024 organized by ISA South India Section at MIT Department of Instrumentation.',
    color: '#ff6584',
    type: 'Award',
  },
  {
    year: 'Dec 2024 - Jan 2025',
    icon: Briefcase,
    title: 'AI Researcher — Internship',
    place: 'Logic Focus',
    description: 'Hands-on experience as an AI Researcher, focusing on practical implementation of intelligent systems.',
    color: '#00d464',
    type: 'Work',
  },
  {
    year: 'Feb 2025',
    icon: Rocket,
    title: 'IISC Bangalore Workshop',
    place: 'Pravega, IISC',
    description: 'Participated in a 2-day intensive technical workshop conducted by Pravega at the Indian Institute of Science.',
    color: '#a5a0ff',
    type: 'Learning',
  },
];

const typeColors = {
  Education: '#ffd166',
  Project: '#6c63ff',
  Learning: '#00d4ff',
  Achievement: '#ff6584',
  Work: '#00d464',
  Current: '#a5a0ff',
};

// Single timeline event
const TimelineItem = ({ event, index, isLeft }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const Icon = event.icon;

  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-6 mb-10 ${isLeft ? 'md:flex-row-reverse md:text-right' : 'md:flex-row'}`}
    >
      {/* Spacer for alternate layout */}
      <div className="hidden md:block flex-1" />

      {/* Icon node */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay: index * 0.1, type: 'spring', stiffness: 300 }}
        className="relative z-10 flex-shrink-0"
      >
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{
            background: `${event.color}22`,
            border: `2px solid ${event.color}60`,
            boxShadow: `0 0 20px ${event.color}33`,
          }}
        >
          <Icon size={20} style={{ color: event.color }} />
        </div>
      </motion.div>

      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: index * 0.1 + 0.1, duration: 0.5 }}
        className="flex-1 glass rounded-2xl p-5 card-hover"
        style={{
          borderLeft: isLeft ? 'none' : `2px solid ${event.color}50`,
          borderRight: isLeft ? `2px solid ${event.color}50` : 'none',
        }}
      >
        <div className={`flex items-center gap-2 mb-1 flex-wrap ${isLeft ? 'md:justify-end' : ''}`}>
          <span
            className="text-xs px-2.5 py-0.5 rounded-full font-medium"
            style={{ background: `${event.color}18`, color: event.color, border: `1px solid ${event.color}30` }}
          >
            {event.type}
          </span>
          <span className="text-xs font-mono text-gray-500">{event.year}</span>
        </div>
        <h3 className="text-base font-semibold text-white mb-0.5" style={{ fontFamily: 'Space Grotesk' }}>
          {event.title}
        </h3>
        <p className="text-xs mb-2 font-medium" style={{ color: event.color }}>📍 {event.place}</p>
        <p className="text-gray-400 text-sm leading-relaxed">{event.description}</p>
      </motion.div>
    </div>
  );
};

const Journey = () => {
  return (
    <section id="journey" className="section-padding relative z-10">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 20% 60%, rgba(108,99,255,0.04) 0%, transparent 70%)' }}
      />

      <div className="w-full relative">
        <SectionHeading
          number="// 04"
          title="My Journey"
          subtitle="The path that shaped me — from curious student to AI & full-stack builder."
        />

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical center line */}
          <div
            className="hidden md:block absolute left-1/2 top-4 bottom-0 w-1 rounded-full shadow-[0_0_10px_rgba(108,99,255,0.4)]"
            style={{ background: 'linear-gradient(to bottom, transparent, #6c63ff80, #00d4ff80, transparent)', transform: 'translateX(-50%)' }}
          />

          {/* Events */}
          {timelineEvents.map((event, i) => (
            <TimelineItem
              key={event.title}
              event={event}
              index={i}
              isLeft={i % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
