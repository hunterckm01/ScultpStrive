import { useEffect, useState } from "react";

export const JourneyPath = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 800 400"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(16 76% 58%)" stopOpacity="0.3" />
          <stop offset="50%" stopColor="hsl(158 25% 45%)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="hsl(16 76% 58%)" stopOpacity="0.3" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Main flowing path */}
      <path
        d="M-50,200 Q150,100 300,200 T600,180 T900,220"
        fill="none"
        stroke="url(#pathGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        filter="url(#glow)"
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          strokeDasharray: 1500,
          strokeDashoffset: isVisible ? 0 : 1500,
          transition: "stroke-dashoffset 3s ease-out, opacity 0.5s ease-out",
        }}
      />
      
      {/* Secondary flowing path */}
      <path
        d="M-50,250 Q200,300 350,220 T650,280 T900,200"
        fill="none"
        stroke="url(#pathGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        filter="url(#glow)"
        opacity="0.5"
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-50" : "opacity-0"
        }`}
        style={{
          strokeDasharray: 1500,
          strokeDashoffset: isVisible ? 0 : 1500,
          transition: "stroke-dashoffset 3.5s ease-out 0.3s, opacity 0.5s ease-out",
        }}
      />

      {/* Milestone dots */}
      {[
        { cx: 150, cy: 150, delay: "0.5s" },
        { cx: 400, cy: 200, delay: "1s" },
        { cx: 650, cy: 180, delay: "1.5s" },
      ].map((dot, i) => (
        <circle
          key={i}
          cx={dot.cx}
          cy={dot.cy}
          r="8"
          fill="hsl(16 76% 58%)"
          filter="url(#glow)"
          className={`transition-all duration-500 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
          style={{
            transformOrigin: `${dot.cx}px ${dot.cy}px`,
            transitionDelay: dot.delay,
          }}
        />
      ))}
    </svg>
  );
};
