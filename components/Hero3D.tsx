"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function SmartHome() {
  return (
    <group>
      {/* House base */}
      <mesh position={[0, -1, 0]} castShadow>
        <boxGeometry args={[3, 2, 3]} />
        <meshStandardMaterial color="#64748b" />
      </mesh>
      
      {/* Roof */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <coneGeometry args={[2.5, 2, 4]} />
        <meshStandardMaterial color="#475569" />
      </mesh>
      
      {/* IoT devices represented as floating spheres */}
      <group position={[0, 0, 0]}>
        {[...Array(5)].map((_, i) => (
          <mesh
            key={i}
            position={[
              Math.sin(i * (Math.PI * 2) / 5) * 2,
              Math.cos(i * Math.PI) * 0.5 + 1,
              Math.cos(i * (Math.PI * 2) / 5) * 2
            ]}
          >
            <sphereGeometry args={[0.2, 16, 16]} />
            <meshStandardMaterial
              color="#3b82f6"
              emissive="#60a5fa"
              emissiveIntensity={0.5}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}

export default function Hero3D() {
  return (
    <section className="h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [5, 5, 5], fov: 45 }}
          shadows
        >
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
          />
          <Suspense fallback={null}>
            <SmartHome />
            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={1}
            />
          </Suspense>
          <color attach="background" args={['#f8fafc']} />
        </Canvas>
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              Welcome to the Future of Living
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your home into an intelligent ecosystem with our cutting-edge IoT solutions
            </p>
            <div className="flex justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="text-lg px-8">
                  Get Started
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}