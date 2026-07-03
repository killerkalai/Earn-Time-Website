"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { TimeRing } from "./TimeRing";
import { FloatingShape } from "./FloatingShape";
import { Particles } from "./Particles";

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#22d3ee" />
      <TimeRing />
      <FloatingShape position={[-3, 1, -2]} color="#8b5cf6" scale={0.5} />
      <FloatingShape position={[3, -1, -3]} color="#22d3ee" scale={0.4} />
      <FloatingShape position={[2, 2, -4]} color="#7c3aed" scale={0.3} />
      <Particles count={150} />
    </>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
