'use client'

import { motion } from "framer-motion";

export function Cube3D({ className = "" }: { className?: string }) {
  return (
    <div className={`perspective-1000 ${className}`}>
      <motion.div
        className="relative w-32 h-32"
        style={{ transformStyle: "preserve-3d" }}
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Front */}
        <div className="absolute w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 backdrop-blur-sm" style={{ transform: "translateZ(64px)" }} />
        
        {/* Back */}
        <div className="absolute w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 backdrop-blur-sm" style={{ transform: "translateZ(-64px) rotateY(180deg)" }} />
        
        {/* Right */}
        <div className="absolute w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 backdrop-blur-sm" style={{ transform: "rotateY(90deg) translateZ(64px)" }} />
        
        {/* Left */}
        <div className="absolute w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm" style={{ transform: "rotateY(-90deg) translateZ(64px)" }} />
        
        {/* Top */}
        <div className="absolute w-full h-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 backdrop-blur-sm" style={{ transform: "rotateX(90deg) translateZ(64px)" }} />
        
        {/* Bottom */}
        <div className="absolute w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm" style={{ transform: "rotateX(-90deg) translateZ(64px)" }} />
      </motion.div>
    </div>
  );
}
