// Skills section with animated progress bars and categorized skill cards
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionHeading } from './About';

const skillCategories = [
  {
    category: 'AI & ML',
    color: '#ff6584',
    icon: '🧠',
    skills: [
      { name: 'Machine Learning', level: 85 },
      { name: 'Computer Vision', level: 88 },
      { name: 'OpenCV', level: 90 },
      { name: 'PyTorch / TensorFlow', level: 75 },
    ],
  },
  {
    category: 'Languages',
    color: '#6c63ff',
    icon: '💻',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'C++', level: 80 },
      { name: 'Java', level: 75 },
      { name: 'MySQL', level: 82 },
    ],
  },
  {
    category: 'Web Development',
    color: '#00d4ff',
    icon: '🌐',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'HTML5 / CSS3', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'Frontend UX', level: 82 },
    ],
  },
  {
    category: 'Other Tech',
    color: '#ffd166',
    icon: '🔧',
    skills: [
      { name: 'IOT', level: 78 },
      { name: 'Raspberry Pi', level: 85 },
      { name: 'Git / GitHub', level: 88 },
      { name: 'Linux / CLI', level: 75 },
    ],
  },
];

// Technology badge cloud
const techBadges = [
  { label: 'Python', bg: '#3776ab', fg: '#fff' },
  { label: 'C++', bg: '#004482', fg: '#fff' },
  { label: 'Java', bg: '#007396', fg: '#fff' },
  { label: 'React.js', bg: '#61dafb', fg: '#000' },
  { label: 'OpenCV', bg: '#5c3d00', fg: '#ff0' },
  { label: 'TensorFlow', bg: '#ff6f00', fg: '#fff' },
  { label: 'PyTorch', bg: '#ee4c2c', fg: '#fff' },
  { label: 'IOT', bg: '#00d4ff', fg: '#fff' },
  { label: 'MySQL', bg: '#00758f', fg: '#fff' },
  { label: 'HTML5', bg: '#e34f26', fg: '#fff' },
  { label: 'CSS3', bg: '#1572b6', fg: '#fff' },
  { label: 'Git', bg: '#f05032', fg: '#fff' },
];

// Animated progress bar
const SkillBar = ({ name, level, color, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.4, 0, 0.2, 1] }}
          style={{
            background: `linear-gradient(90deg, ${color}cc, ${color})`,
          }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section id="skills" className="section-padding relative z-10">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(108,99,255,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="w-full relative">
        <SectionHeading
          number="// 02"
          title="Skills & Stack"
          subtitle="Technologies I work with to build fast, intelligent, and scalable products."
        />

        {/* Skill category cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
              whileHover={{ y: -6 }}
              onHoverStart={() => setActiveCategory(cat.category)}
              onHoverEnd={() => setActiveCategory(null)}
              className="glass rounded-2xl p-6 card-hover cursor-default"
              style={{
                borderTop: `2px solid ${activeCategory === cat.category ? cat.color : 'transparent'}`,
                transition: 'border-color 0.3s ease, transform 0.4s ease, box-shadow 0.4s ease',
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-semibold text-base" style={{ color: cat.color }}>{cat.category}</h3>
              </div>
              {cat.skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={cat.color}
                  delay={catIdx * 0.1 + i * 0.1}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech badge cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm mb-6 font-mono">// Tech Badges</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map(({ label, bg, fg }, i) => (
              <motion.span
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-4 py-1.5 rounded-full text-sm font-semibold cursor-default"
                style={{ background: bg + '22', color: bg, border: `1px solid ${bg}44` }}
              >
                {label}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
