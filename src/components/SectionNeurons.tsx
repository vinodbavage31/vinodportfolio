import { useEffect, useRef } from 'react';

interface SectionNeuronsProps {
  isVisible: boolean;
  scrollProgress: number;
  variant?: 'top' | 'bottom' | 'full';
  className?: string;
}

const SectionNeurons = ({ isVisible, scrollProgress, variant = 'full', className = '' }: SectionNeuronsProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  const nodes = [
    { cx: 10, cy: 20, r: 4 },
    { cx: 25, cy: 45, r: 5 },
    { cx: 15, cy: 70, r: 3 },
    { cx: 40, cy: 15, r: 4 },
    { cx: 50, cy: 50, r: 6 },
    { cx: 45, cy: 85, r: 4 },
    { cx: 70, cy: 25, r: 5 },
    { cx: 75, cy: 60, r: 4 },
    { cx: 65, cy: 90, r: 3 },
    { cx: 90, cy: 35, r: 4 },
    { cx: 85, cy: 75, r: 5 },
    { cx: 95, cy: 50, r: 3 },
  ];

  const connections = [
    [0, 1], [1, 2], [0, 3], [3, 4], [4, 5],
    [1, 4], [4, 7], [6, 7], [7, 8], [3, 6],
    [6, 9], [9, 11], [7, 10], [10, 11], [4, 6],
    [5, 8], [8, 10], [2, 5],
  ];

  const glowIntensity = isVisible ? 0.6 + scrollProgress * 0.4 : 0.2;
  const lineOpacity = isVisible ? 0.3 + scrollProgress * 0.4 : 0.1;
  const nodeScale = isVisible ? 1 + scrollProgress * 0.3 : 0.8;

  return (
    <svg
      ref={svgRef}
      className={`absolute pointer-events-none ${className}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{
        width: '100%',
        height: variant === 'full' ? '100%' : '200px',
        top: variant === 'bottom' ? 'auto' : 0,
        bottom: variant === 'top' ? 'auto' : 0,
        opacity: isVisible ? 1 : 0.3,
        transition: 'opacity 0.8s ease-out',
      }}
    >
      <defs>
        <linearGradient id="neuron-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(190 100% 50%)" />
          <stop offset="50%" stopColor="hsl(240 100% 60%)" />
          <stop offset="100%" stopColor="hsl(280 100% 65%)" />
        </linearGradient>
        <filter id="neuron-glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="strong-glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Animated connection lines */}
      {connections.map(([from, to], index) => {
        const fromNode = nodes[from];
        const toNode = nodes[to];
        const animationDelay = index * 0.15;
        
        return (
          <g key={`conn-${index}`}>
            <line
              x1={fromNode.cx}
              y1={fromNode.cy}
              x2={toNode.cx}
              y2={toNode.cy}
              stroke="url(#neuron-line-gradient)"
              strokeWidth={isVisible ? 0.8 + scrollProgress : 0.3}
              strokeOpacity={lineOpacity}
              filter="url(#neuron-glow)"
              style={{
                transition: 'all 0.6s ease-out',
                transitionDelay: `${animationDelay}s`,
              }}
            />
            {/* Data flow particle */}
            <circle r={isVisible ? 1.5 + scrollProgress : 0.5} fill="hsl(190 100% 70%)" filter="url(#strong-glow)">
              <animateMotion
                dur={`${2 + index * 0.2}s`}
                repeatCount="indefinite"
                path={`M${fromNode.cx},${fromNode.cy} L${toNode.cx},${toNode.cy}`}
              />
              <animate
                attributeName="opacity"
                values={`${lineOpacity * 0.5};${lineOpacity};${lineOpacity * 0.5}`}
                dur="1s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        );
      })}

      {/* Nodes with pulse animation */}
      {nodes.map((node, index) => {
        const animationDelay = index * 0.1;
        const pulseDuration = 2 + (index % 3);
        
        return (
          <g key={`node-${index}`}>
            {/* Outer glow ring */}
            <circle
              cx={node.cx}
              cy={node.cy}
              r={node.r * 3 * nodeScale}
              fill="none"
              stroke="hsl(190 100% 50%)"
              strokeWidth="0.3"
              strokeOpacity={glowIntensity * 0.3}
              filter="url(#strong-glow)"
              style={{
                transform: `scale(${nodeScale})`,
                transformOrigin: `${node.cx}% ${node.cy}%`,
                transition: 'all 0.6s ease-out',
                transitionDelay: `${animationDelay}s`,
              }}
            >
              <animate
                attributeName="r"
                values={`${node.r * 2};${node.r * 4};${node.r * 2}`}
                dur={`${pulseDuration}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-opacity"
                values={`${glowIntensity * 0.2};${glowIntensity * 0.5};${glowIntensity * 0.2}`}
                dur={`${pulseDuration}s`}
                repeatCount="indefinite"
              />
            </circle>
            
            {/* Main node */}
            <circle
              cx={node.cx}
              cy={node.cy}
              r={node.r * nodeScale}
              fill={index % 2 === 0 ? 'hsl(190 100% 60%)' : 'hsl(280 100% 65%)'}
              fillOpacity={glowIntensity}
              filter="url(#strong-glow)"
              style={{
                transform: `scale(${nodeScale})`,
                transformOrigin: `${node.cx}% ${node.cy}%`,
                transition: 'all 0.6s ease-out',
                transitionDelay: `${animationDelay}s`,
              }}
            >
              <animate
                attributeName="fill-opacity"
                values={`${glowIntensity * 0.7};${glowIntensity};${glowIntensity * 0.7}`}
                dur={`${pulseDuration}s`}
                repeatCount="indefinite"
              />
            </circle>

            {/* Bright core */}
            <circle
              cx={node.cx}
              cy={node.cy}
              r={node.r * 0.4 * nodeScale}
              fill="white"
              fillOpacity={glowIntensity * 0.9}
              style={{
                transition: 'all 0.6s ease-out',
                transitionDelay: `${animationDelay}s`,
              }}
            />
          </g>
        );
      })}
    </svg>
  );
};

export default SectionNeurons;
