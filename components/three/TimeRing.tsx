"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function TimeRing() {
  const groupRef = useRef<THREE.Group>(null);

  const ringGeometry = useMemo(() => new THREE.TorusGeometry(2, 0.05, 16, 100), []);
  const innerRingGeometry = useMemo(() => new THREE.TorusGeometry(1.5, 0.03, 16, 80), []);
  const dotGeometry = useMemo(() => new THREE.SphereGeometry(0.08, 16, 16), []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  const dots = useMemo(() => {
    const items = [];
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      items.push({
        position: [Math.cos(angle) * 2, Math.sin(angle) * 2, 0] as [number, number, number],
        color: i % 3 === 0 ? "#22d3ee" : "#8b5cf6",
      });
    }
    return items;
  }, []);

  return (
    <group ref={groupRef}>
      <mesh geometry={ringGeometry}>
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={0.5}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
      <mesh geometry={innerRingGeometry} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={0.4}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
      {dots.map((dot, i) => (
        <mesh key={i} position={dot.position} geometry={dotGeometry}>
          <meshStandardMaterial
            color={dot.color}
            emissive={dot.color}
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}
      <mesh>
        <octahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#8b5cf6"
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.9}
          wireframe
        />
      </mesh>
    </group>
  );
}
