import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface AuroraParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  angle: number;
  pulse: number;
}

interface FlowingLine {
  id: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
  opacity: number;
  thickness: number;
}

export function AnimatedBackground() {
  const [auroraParticles, setAuroraParticles] = useState<AuroraParticle[]>([]);
  const [flowingLines, setFlowingLines] = useState<FlowingLine[]>([]);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Vibrant light theme colors - colorful but professional
  const colors = [
    '#0066ff', // Vibrant Electric Blue
    '#00d084', // Vibrant Emerald
    '#ff6b47', // Vibrant Coral
    '#9c27b0', // Purple Accent
    '#00bcd4', // Info Cyan
    '#ff9800', // Orange
    '#e91e63', // Pink
  ];

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);

    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  useEffect(() => {
    if (windowSize.width === 0) return;

    // Generate aurora particles
    const newAuroraParticles: AuroraParticle[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * windowSize.width,
      y: Math.random() * windowSize.height,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 0.2 + 0.05,
      angle: Math.random() * Math.PI * 2,
      pulse: Math.random() * Math.PI * 2,
    }));

    // Generate flowing lines
    const newFlowingLines: FlowingLine[] = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x1: Math.random() * windowSize.width,
      y1: Math.random() * windowSize.height,
      x2: Math.random() * windowSize.width,
      y2: Math.random() * windowSize.height,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.3 + 0.1,
      thickness: Math.random() * 2 + 1,
    }));

    setAuroraParticles(newAuroraParticles);
    setFlowingLines(newFlowingLines);
  }, [windowSize]);

  useEffect(() => {
    const animateAuroraParticles = () => {
      setAuroraParticles(prevParticles =>
        prevParticles.map(particle => {
          let newX = particle.x + Math.cos(particle.angle) * particle.speed;
          let newY = particle.y + Math.sin(particle.angle) * particle.speed;
          let newAngle = particle.angle;
          let newPulse = particle.pulse + 0.05;

          // Gentle bounce with floating behavior
          if (newX <= 0 || newX >= windowSize.width) {
            newAngle = Math.PI - particle.angle + (Math.random() - 0.5) * 0.2;
            newX = Math.max(0, Math.min(windowSize.width, newX));
          }
          if (newY <= 0 || newY >= windowSize.height) {
            newAngle = -particle.angle + (Math.random() - 0.5) * 0.2;
            newY = Math.max(0, Math.min(windowSize.height, newY));
          }

          return {
            ...particle,
            x: newX,
            y: newY,
            angle: newAngle,
            pulse: newPulse,
          };
        })
      );
    };

    const interval = setInterval(animateAuroraParticles, 60);
    return () => clearInterval(interval);
  }, [windowSize]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Vibrant Light Gradient Waves */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 1200px 900px at 15% 25%, rgba(0, 102, 255, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse 900px 1200px at 85% 75%, rgba(0, 208, 132, 0.06) 0%, transparent 60%),
            radial-gradient(ellipse 1400px 700px at 50% 95%, rgba(255, 107, 71, 0.05) 0%, transparent 60%)
          `,
        }}
        animate={{
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Flowing Aurora Particles */}
      {auroraParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: particle.x,
            top: particle.y,
          }}
        >
          <motion.div
            className="rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              background: `radial-gradient(circle, ${particle.color} 0%, ${particle.color}60 40%, transparent 70%)`,
              boxShadow: `0 0 ${particle.size * 3}px ${particle.color}40`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.id * 0.3,
            }}
          />
        </motion.div>
      ))}

      {/* Organic Neural Network Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-40">
        {flowingLines.map((line) => (
          <motion.g key={line.id}>
            <motion.path
              d={`M ${line.x1} ${line.y1} Q ${(line.x1 + line.x2) / 2 + Math.sin(line.id) * 100} ${(line.y1 + line.y2) / 2} ${line.x2} ${line.y2}`}
              stroke={line.color}
              strokeWidth={line.thickness}
              fill="none"
              opacity={line.opacity}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: line.id * 0.5,
              }}
            />
            {/* Glowing trail */}
            <motion.path
              d={`M ${line.x1} ${line.y1} Q ${(line.x1 + line.x2) / 2 + Math.sin(line.id) * 100} ${(line.y1 + line.y2) / 2} ${line.x2} ${line.y2}`}
              stroke={line.color}
              strokeWidth={line.thickness * 3}
              fill="none"
              opacity={line.opacity * 0.3}
              strokeLinecap="round"
              filter="blur(3px)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: line.id * 0.5,
              }}
            />
          </motion.g>
        ))}
      </svg>

      {/* Floating Ethereal Orbs */}
      {Array.from({ length: 6 }, (_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute"
          style={{
            width: 60 + Math.random() * 40,
            height: 60 + Math.random() * 40,
            background: `radial-gradient(circle, ${colors[i % colors.length]}20 0%, ${colors[i % colors.length]}10 30%, transparent 70%)`,
            borderRadius: '50%',
            filter: 'blur(1px)',
          }}
          animate={{
            x: [
              Math.random() * windowSize.width,
              Math.random() * windowSize.width,
              Math.random() * windowSize.width,
              Math.random() * windowSize.width,
            ],
            y: [
              Math.random() * windowSize.height,
              Math.random() * windowSize.height,
              Math.random() * windowSize.height,
              Math.random() * windowSize.height,
            ],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}

      {/* Subtle Professional Grid Pattern */}
      <motion.div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(0, 102, 255, 0.2) 1px, transparent 0),
            linear-gradient(rgba(226, 232, 240, 0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(226, 232, 240, 0.6) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 80px 80px, 80px 80px',
        }}
        animate={{
          backgroundPosition: [
            '0px 0px, 0px 0px, 0px 0px',
            '40px 40px, 80px 80px, 80px 80px'
          ],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Organic Data Flow Streams */}
      {Array.from({ length: 3 }, (_, i) => (
        <motion.div
          key={`stream-${i}`}
          className="absolute"
          style={{
            width: '2px',
            height: '100px',
            background: `linear-gradient(180deg, transparent 0%, ${colors[i % colors.length]}60 50%, transparent 100%)`,
            borderRadius: '1px',
          }}
          animate={{
            x: ['-10px', `${windowSize.width + 10}px`],
            y: [
              Math.random() * windowSize.height,
              Math.random() * windowSize.height,
            ],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            ease: "linear",
            delay: i * 5,
          }}
        />
      ))}

      {/* Pulsing Tech Nodes */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute"
          style={{
            left: `${15 + (i * 12)}%`,
            top: `${20 + Math.sin(i) * 40}%`,
          }}
        >
          <motion.div
            className="w-4 h-4 rounded-full relative"
            style={{
              background: `radial-gradient(circle, ${colors[i % colors.length]} 0%, ${colors[i % colors.length]}80 40%, transparent 100%)`,
              boxShadow: `0 0 20px ${colors[i % colors.length]}60`,
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          >
            {/* Ripple effect */}
            <motion.div
              className="absolute inset-0 rounded-full border border-current"
              animate={{
                scale: [1, 2.5],
                opacity: [0.6, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Colorful Light Sweep */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, transparent 0%, rgba(0, 102, 255, 0.12) 30%, rgba(0, 208, 132, 0.08) 50%, rgba(255, 107, 71, 0.06) 70%, transparent 100%)',
          height: '250px',
          filter: 'blur(50px)',
        }}
        animate={{
          y: ['-250px', `${windowSize.height + 250}px`],
          opacity: [0, 0.7, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}