// About Me section with personal story, quick stats, and interest badges
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Globe, Cpu, Rocket } from 'lucide-react';

const stats = [
  { value: '3+', label: 'Years Coding' },
  { value: '10+', label: 'Projects Built' },
  { value: '8+', label: 'Technologies' },
  { value: '3', label: 'AI Projects' },
];

const interests = [
  { icon: Brain, label: 'Artificial Intelligence', color: '#6c63ff' },
  { icon: Cpu, label: 'Computer Vision', color: '#00d4ff' },
  { icon: Globe, label: 'Full Stack Web', color: '#ff6584' },
  { icon: Rocket, label: 'Product Development', color: '#ffd166' },
];

// Reusable section heading component
const SectionHeading = ({ number, title, subtitle }) => (
  <div className="text-center mb-16">
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-sm font-mono mb-2"
      style={{ color: '#6c63ff' }}
    >
      {number}
    </motion.p>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="section-title gradient-text"
    >
      {title}
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="section-subtitle text-base md:text-lg"
    >
      {subtitle}
    </motion.p>
  </div>
);

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative z-10">
      <div className="w-full">
        <SectionHeading
          number="// 01"
          title="About Me"
          subtitle="The story behind the code — who I am and what drives me."
        />

        <div className="flex flex-col gap-12 items-center w-full">
          {/* Left — Story */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-5 text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
              <p>
                I&apos;m an <span className="text-white font-semibold">IT student</span> with a strong passion for 
                <span className="gradient-text font-semibold"> AI and Machine Learning</span>, and a good foundation in 
                <span className="text-white"> OpenCV and C++</span>. I enjoy creating smart solutions that make technology more efficient and user-friendly.
              </p>
              <p>
                I&apos;m eager to find opportunities where I can grow, collaborate with experts, and work on innovative 
                <span style={{ color: '#00d4ff' }}> AI projects</span> while building my skills as a developer. 
                My goal is to push the boundaries of what&apos;s possible at the intersection of 
                <span style={{ color: '#ff6584' }}> Computer Vision</span> and real-world impact.
              </p>
            </div>

            {/* Interest chips */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {interests.map(({ icon: Icon, label, color }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium glass"
                  style={{ color }}
                >
                  <Icon size={14} style={{ color }} />
                  {label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full"
          >
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.04, y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass rounded-2xl p-6 text-center card-hover gradient-border"
              >
                <p
                  className="text-4xl font-bold mb-1"
                  style={{
                    fontFamily: 'Space Grotesk',
                    background: 'linear-gradient(135deg, #6c63ff, #00d4ff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {value}
                </p>
                <p className="text-gray-400 text-sm">{label}</p>
              </motion.div>
            ))}

            {/* Quote card spanning full width */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="col-span-2 md:col-span-4 glass rounded-2xl p-5 text-center"
              style={{ borderTop: '3px solid #6c63ff' }}
            >
              <p className="text-gray-300 text-sm italic leading-relaxed">
                &ldquo;Code is poetry. I write it to build products, not just programs — to solve real problems
                with intelligent, elegant solutions.&rdquo;
              </p>
              <p className="text-gray-500 text-xs mt-2 font-mono">— Madhavan M</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { SectionHeading };
export default About;
