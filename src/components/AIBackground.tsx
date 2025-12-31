const AIBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient orbs */}
      <div className="absolute top-0 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-20 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      
      {/* Neural network grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.02] dark:opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="neural-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="1.5" fill="currentColor" className="text-primary" />
            <line x1="30" y1="30" x2="60" y2="0" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
            <line x1="30" y1="30" x2="60" y2="60" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
            <line x1="30" y1="30" x2="0" y2="60" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#neural-grid)" />
      </svg>

      {/* Floating particles */}
      <div className="absolute top-20 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float" />
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-accent/40 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-20 left-1/2 w-2 h-2 bg-primary/25 rounded-full animate-float" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default AIBackground;
