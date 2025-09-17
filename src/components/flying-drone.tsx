import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function FlyingDrone() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Offset the drone position so it appears slightly behind and above the cursor
      setMousePosition({
        x: event.clientX - 40, // Center the drone horizontally
        y: event.clientY - 60, // Position drone above the cursor
      });
      
      // Make the drone visible when mouse moves
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    // Add event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed z-50 pointer-events-none"
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
        mass: 1,
      }}
    >
      <motion.div
        animate={{
          rotate: [0, 2, -2, 1, -1, 0],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        {/* Drone Body */}
        <svg
          width="80"
          height="60"
          viewBox="0 0 80 60"
          className="drop-shadow-lg"
        >
          {/* Main body */}
          <ellipse
            cx="40"
            cy="30"
            rx="12"
            ry="6"
            fill="url(#droneGradient)"
            stroke="#333"
            strokeWidth="1"
          />
          
          {/* Arms */}
          <line x1="20" y1="30" x2="60" y2="30" stroke="#444" strokeWidth="3" strokeLinecap="round" />
          <line x1="40" y1="15" x2="40" y2="45" stroke="#444" strokeWidth="3" strokeLinecap="round" />
          
          {/* Propellers */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 0.1, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "20px 20px" }}
          >
            <ellipse cx="20" cy="20" rx="8" ry="2" fill="rgba(99, 102, 241, 0.3)" />
            <ellipse cx="20" cy="20" rx="2" ry="8" fill="rgba(99, 102, 241, 0.3)" />
          </motion.g>
          
          <motion.g
            animate={{ rotate: -360 }}
            transition={{ duration: 0.1, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "60px 20px" }}
          >
            <ellipse cx="60" cy="20" rx="8" ry="2" fill="rgba(99, 102, 241, 0.3)" />
            <ellipse cx="60" cy="20" rx="2" ry="8" fill="rgba(99, 102, 241, 0.3)" />
          </motion.g>
          
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 0.1, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "20px 40px" }}
          >
            <ellipse cx="20" cy="40" rx="8" ry="2" fill="rgba(99, 102, 241, 0.3)" />
            <ellipse cx="20" cy="40" rx="2" ry="8" fill="rgba(99, 102, 241, 0.3)" />
          </motion.g>
          
          <motion.g
            animate={{ rotate: -360 }}
            transition={{ duration: 0.1, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "60px 40px" }}
          >
            <ellipse cx="60" cy="40" rx="8" ry="2" fill="rgba(99, 102, 241, 0.3)" />
            <ellipse cx="60" cy="40" rx="2" ry="8" fill="rgba(99, 102, 241, 0.3)" />
          </motion.g>
          
          {/* LED lights */}
          <motion.circle
            cx="35"
            cy="30"
            r="2"
            fill="#00ff00"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <motion.circle
            cx="45"
            cy="30"
            r="2"
            fill="#ff0000"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          
          <defs>
            <linearGradient id="droneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </motion.div>
  );
}