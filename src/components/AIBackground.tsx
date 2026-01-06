const AIBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-background">
      {/* Main mesh gradient */}
      <div className="absolute inset-0 bg-[image:var(--gradient-mesh)]" />
      
      {/* Large glowing orbs - enhanced visibility */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-accent/15 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
      
      {/* Animated data streams */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse" />
      <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }} />

      {/* Subtle scanlines */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ 
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(190 100% 50% / 0.1) 2px, hsl(190 100% 50% / 0.1) 4px)' 
      }} />
    </div>
  );
};

export default AIBackground;
