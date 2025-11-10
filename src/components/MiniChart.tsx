const MiniChart = () => {
  return (
    <svg
      width="100%"
      height="60"
      viewBox="0 0 140 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-fade-in"
    >
      <defs>
        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      
      {/* Gradient fill area */}
      <path
        d="M 0 50 L 0 35 Q 20 25, 35 30 T 70 20 T 105 25 T 140 15 L 140 50 Z"
        fill="url(#chartGradient)"
        className="animate-slide-up"
        style={{ animationDuration: "0.8s" }}
      />
      
      {/* Line */}
      <path
        d="M 0 35 Q 20 25, 35 30 T 70 20 T 105 25 T 140 15"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        className="animate-fade-in"
        style={{ 
          animationDuration: "1s",
          strokeDasharray: "400",
          strokeDashoffset: "400",
          animation: "dash 1.5s ease-in-out forwards"
        }}
      />
      
      {/* Dots */}
      <circle cx="35" cy="30" r="4" fill="hsl(var(--primary))" className="animate-fade-in" style={{ animationDelay: "0.5s" }} />
      <circle cx="70" cy="20" r="4" fill="hsl(var(--primary))" className="animate-fade-in" style={{ animationDelay: "0.7s" }} />
      <circle cx="105" cy="25" r="4" fill="hsl(var(--primary))" className="animate-fade-in" style={{ animationDelay: "0.9s" }} />
      <circle cx="140" cy="15" r="5" fill="hsl(var(--primary))" className="animate-fade-in" style={{ animationDelay: "1.1s" }}>
        <animate
          attributeName="r"
          values="5;7;5"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </svg>
  );
};

export { MiniChart };
