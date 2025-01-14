"use client";

import { motion } from "framer-motion";
import { CircuitBoard, Brain, Cpu, Wifi, Shield } from "lucide-react";
import { useEffect, useState } from "react";

const floatingIcons = [
  { Icon: CircuitBoard, color: "text-blue-600", size: 40 },
  { Icon: Cpu, color: "text-purple-600", size: 40 },
  { Icon: Wifi, color: "text-green-600", size: 40 },
  { Icon: Shield, color: "text-red-600", size: 40 },
  { Icon: Brain, color: "text-blue-600", size: 40 },
  { Icon: Cpu, color: "text-purple-600", size: 40 },
  { Icon: Wifi, color: "text-green-600", size: 40 },
  { Icon: Shield, color: "text-red-600", size: 40 },
  { Icon: CircuitBoard, color: "tex6-blue-600", size: 24 },
  { Icon: Cpu, color: "text-purple-600", size: 40 },
  { Icon: Wifi, color: "text-green-600", size: 40 },
  { Icon: Shield, color: "text-red-600", size: 40 },
  { Icon: Brain, color: "text-blue-600", size: 40 },
  { Icon: Cpu, color: "text-purple-600", size: 40 },
  { Icon: Wifi, color: "text-green-600", size: 40 },
  { Icon: Shield, color: "text-red-600", size: 40 },
  { Icon: Cpu, color: "text-purple-600", size: 40 },
  { Icon: Wifi, color: "text-green-600", size: 40 },
  { Icon: Shield, color: "text-red-600", size: 40 },
  { Icon: Brain, color: "text-blue-600", size: 40 },
  { Icon: Cpu, color: "text-purple-600", size: 40 },
  { Icon: Wifi, color: "text-green-600", size: 40 },
  { Icon: Shield, color: "text-red-600", size: 40 },
  { Icon: CircuitBoard, color: "text-blue-600", size: 40 },
  { Icon: CircuitBoard, color: "text-blue-600", size: 40 },
  { Icon: Cpu, color: "text-purple-600", size: 40 },
  { Icon: Wifi, color: "text-green-600", size: 40 },
  { Icon: Shield, color: "text-red-600", size: 40 },
  { Icon: Brain, color: "text-blue-600", size: 40 },
  { Icon: Cpu, color: "text-purple-600", size: 40 },
  { Icon: Wifi, color: "text-green-600", size: 40 },
  { Icon: Shield, color: "text-red-600", size: 40 },
  { Icon: CircuitBoard, color: "tex6-blue-600", size: 24 },
  { Icon: Cpu, color: "text-purple-600", size: 40 },
  { Icon: Wifi, color: "text-green-600", size: 40 },
  { Icon: Shield, color: "text-red-600", size: 40 },
  { Icon: Brain, color: "text-blue-600", size: 40 },
  { Icon: Cpu, color: "text-purple-600", size: 40 },
  { Icon: Wifi, color: "text-green-600", size: 40 },
  { Icon: Shield, color: "text-red-600", size: 40 },
  { Icon: Cpu, color: "text-purple-600", size: 40 },
  { Icon: Wifi, color: "text-green-600", size: 40 },
  { Icon: Shield, color: "text-red-600", size: 40 },
  { Icon: Brain, color: "text-blue-600", size: 40 },
  { Icon: Cpu, color: "text-purple-600", size: 40 },
  { Icon: Wifi, color: "text-green-600", size: 40 },
  { Icon: Shield, color: "text-red-600", size: 40 },
  { Icon: CircuitBoard, color: "text-blue-600", size: 40 },
  { Icon: CircuitBoard, color: "text-blue-600", size: 40 },
  { Icon: Cpu, color: "text-purple-600", size: 40 },
  { Icon: Wifi, color: "text-green-600", size: 40 },
  { Icon: Shield, color: "text-red-600", size: 40 },
  { Icon: Brain, color: "text-blue-600", size: 40 },
  { Icon: Cpu, color: "text-purple-600", size: 40 },
  { Icon: Wifi, color: "text-green-600", size: 40 },
  { Icon: Shield, color: "text-red-600", size: 40 },
  { Icon: CircuitBoard, color: "tex6-blue-600", size: 24 },
  { Icon: Cpu, color: "text-purple-600", size: 40 },
  { Icon: Wifi, color: "text-green-600", size: 40 },
  { Icon: Shield, color: "text-red-600", size: 40 },
  { Icon: Brain, color: "text-blue-600", size: 40 },
  { Icon: Cpu, color: "text-purple-600", size: 40 },
  { Icon: Wifi, color: "text-green-600", size: 40 },
  { Icon: Shield, color: "text-red-600", size: 40 },
  { Icon: Cpu, color: "text-purple-600", size: 40 },
  { Icon: Wifi, color: "text-green-600", size: 40 },
  { Icon: Shield, color: "text-red-600", size: 40 },
  { Icon: Brain, color: "text-blue-600", size: 40 },
  { Icon: Cpu, color: "text-purple-600", size: 40 },
  { Icon: Wifi, color: "text-green-600", size: 40 },
  { Icon: Shield, color: "text-red-600", size: 40 },
  { Icon: CircuitBoard, color: "text-blue-600", size: 40 },
];

export default function FloatingElements() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  if (windowSize.width === 0 || windowSize.height === 0) {
    // Prevent rendering until window dimensions are available
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingIcons.map((item, index) => {
        const Icon = item.Icon;
        return (
          <motion.div
            key={index}
            className={`absolute ${item.color}`}
            initial={{
              x: Math.random() * windowSize.width,
              y: Math.random() * windowSize.height,
              opacity: 0,
            }}
            animate={{
              x: [
                Math.random() * windowSize.width,
                Math.random() * windowSize.width,
                Math.random() * windowSize.width,
              ],
              y: [
                Math.random() * windowSize.height,
                Math.random() * windowSize.height,
                Math.random() * windowSize.height,
              ],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Icon size={item.size} />
          </motion.div>
        );
      })}
    </div>
  );
}
