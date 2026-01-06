import { useEffect, useRef, useState } from 'react';

interface Node {
  id: number;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  radius: number;
  pulseOffset: number;
  connections: number[];
}

interface AnimatedNeuralNetworkProps {
  className?: string;
}

const AnimatedNeuralNetwork = ({ className = '' }: AnimatedNeuralNetworkProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [scrollProgress, setScrollProgress] = useState(0);
  const nodesRef = useRef<Node[]>([]);
  const timeRef = useRef(0);

  // Initialize nodes
  useEffect(() => {
    const generateNodes = (): Node[] => {
      const nodes: Node[] = [];
      const numNodes = 35;
      
      for (let i = 0; i < numNodes; i++) {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        nodes.push({
          id: i,
          x,
          y,
          baseX: x,
          baseY: y,
          radius: 3 + Math.random() * 4,
          pulseOffset: Math.random() * Math.PI * 2,
          connections: [],
        });
      }

      // Create connections between nearby nodes
      nodes.forEach((node, i) => {
        nodes.forEach((other, j) => {
          if (i !== j) {
            const dx = node.x - other.x;
            const dy = node.y - other.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 25 && node.connections.length < 4) {
              node.connections.push(j);
            }
          }
        });
      });

      return nodes;
    };

    nodesRef.current = generateNodes();
  }, []);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      timeRef.current += 0.016;
      const time = timeRef.current;
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      const nodes = nodesRef.current;
      
      // Update node positions based on scroll and time
      nodes.forEach((node) => {
        const scrollEffect = scrollProgress * 30;
        const waveX = Math.sin(time * 0.5 + node.pulseOffset) * 3;
        const waveY = Math.cos(time * 0.3 + node.pulseOffset) * 3;
        
        node.x = node.baseX + waveX + (scrollProgress * 5 * Math.sin(node.id));
        node.y = node.baseY + waveY - (scrollEffect * 0.5 * (node.id % 5 === 0 ? 1 : 0.3));
      });

      // Draw connections with animated pulse
      nodes.forEach((node) => {
        const nodeX = (node.x / 100) * width;
        const nodeY = (node.y / 100) * height;

        node.connections.forEach((connIndex) => {
          const other = nodes[connIndex];
          const otherX = (other.x / 100) * width;
          const otherY = (other.y / 100) * height;

          const dx = otherX - nodeX;
          const dy = otherY - nodeY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Animated data flow along connections
          const flowProgress = ((time * 0.5 + node.pulseOffset) % 1);
          const flowX = nodeX + dx * flowProgress;
          const flowY = nodeY + dy * flowProgress;

          // Connection line with gradient
          const gradient = ctx.createLinearGradient(nodeX, nodeY, otherX, otherY);
          const alpha = 0.15 + scrollProgress * 0.25 + Math.sin(time + node.pulseOffset) * 0.1;
          gradient.addColorStop(0, `hsla(190, 100%, 50%, ${alpha})`);
          gradient.addColorStop(0.5, `hsla(240, 100%, 60%, ${alpha})`);
          gradient.addColorStop(1, `hsla(280, 100%, 65%, ${alpha})`);

          ctx.beginPath();
          ctx.moveTo(nodeX, nodeY);
          ctx.lineTo(otherX, otherY);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1 + scrollProgress * 1.5;
          ctx.stroke();

          // Data flow particle
          const particleAlpha = 0.6 + scrollProgress * 0.4;
          const particleRadius = 2 + scrollProgress * 2;
          ctx.beginPath();
          ctx.arc(flowX, flowY, particleRadius, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(190, 100%, 70%, ${particleAlpha})`;
          ctx.fill();
        });
      });

      // Draw nodes with glow effect
      nodes.forEach((node) => {
        const x = (node.x / 100) * width;
        const y = (node.y / 100) * height;
        const pulseScale = 1 + Math.sin(time * 2 + node.pulseOffset) * 0.3;
        const radius = node.radius * pulseScale * (1 + scrollProgress * 0.5);
        
        // Outer glow
        const glowRadius = radius * 4;
        const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
        const glowAlpha = 0.2 + scrollProgress * 0.3 + Math.sin(time + node.pulseOffset) * 0.1;
        glowGradient.addColorStop(0, `hsla(190, 100%, 60%, ${glowAlpha})`);
        glowGradient.addColorStop(0.5, `hsla(280, 100%, 65%, ${glowAlpha * 0.5})`);
        glowGradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();

        // Core node
        const coreGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        const coreAlpha = 0.7 + scrollProgress * 0.3;
        coreGradient.addColorStop(0, `hsla(190, 100%, 80%, ${coreAlpha})`);
        coreGradient.addColorStop(0.6, `hsla(190, 100%, 60%, ${coreAlpha * 0.8})`);
        coreGradient.addColorStop(1, `hsla(280, 100%, 65%, ${coreAlpha * 0.5})`);

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = coreGradient;
        ctx.fill();

        // Bright center
        ctx.beginPath();
        ctx.arc(x, y, radius * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(190, 100%, 90%, ${coreAlpha})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [scrollProgress]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none -z-5 ${className}`}
      style={{ opacity: 0.2 }}
    />
  );
};

export default AnimatedNeuralNetwork;
