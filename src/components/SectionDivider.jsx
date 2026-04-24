// Section divider with gradient line and decorative dots
const SectionDivider = () => (
  <div className="relative z-10 flex items-center justify-center py-4 w-full">
    <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(108,99,255,0.3), transparent)' }} />
    <div className="flex items-center gap-2 mx-4">
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#6c63ff' }} />
      <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'linear-gradient(135deg, #6c63ff, #00d4ff)' }} />
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#00d4ff' }} />
    </div>
    <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(0,212,255,0.3), transparent)' }} />
  </div>
);

export default SectionDivider;
