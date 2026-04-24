// =============================================
// App.jsx — Main application entry
// Assembles all sections and global UI layers
// =============================================
import { useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';

function App() {
  // Disable default cursor on desktop for the custom glow effect
  useEffect(() => {
    document.title = 'Madhavan M | Developer Portfolio';
  }, []);

  return (
    // Outermost wrapper — establishes stacking context
    <div className="relative min-h-screen w-full overflow-x-hidden flex flex-col items-center" style={{ background: 'var(--bg-primary)' }}>
      {/* ── Layer 0: Animated particle canvas (fixed, z-0) ── */}
      <ParticleBackground />

      {/* ── Layer 0: Noise texture overlay ── */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* ── Layer 0: Mouse cursor radial glow ── */}
      <CursorGlow />

      {/* ── Layer 1: Global ambient background blobs ── */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto h-full relative">
          {/* Top-left purple blob */}
          <div
            className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(108,99,255,0.15) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />
          {/* Bottom-right cyan blob */}
          <div
            className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />
          {/* Center pink accent */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-10"
            style={{
              background: 'radial-gradient(ellipse, rgba(255,101,132,0.08) 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />
        </div>
      </div>

      {/* ── Layer 2: Navigation ── */}
      <Navbar />

      {/* ── Layer 2: Page content ── */}
      <main className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* 1. Hero */}
        <Hero />

        <SectionDivider />

        {/* 2. About */}
        <About />

        <SectionDivider />

        {/* 3. Skills */}
        <Skills />

        <SectionDivider />

        {/* 4. Projects */}
        <Projects />

        <SectionDivider />

        {/* 5. Journey / Timeline */}
        <Journey />

        <SectionDivider />

        {/* 6. Contact */}
        <Contact />
      </main>

      {/* ── Layer 2: Footer ── */}
      <Footer />
    </div>
  );
}

export default App;
