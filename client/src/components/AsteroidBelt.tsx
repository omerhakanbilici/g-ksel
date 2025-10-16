import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Points } from "three";

export function AsteroidBelt() {
  const pointsRef = useRef<Points>(null);
  
  const [positions, rotationSpeeds] = useMemo(() => {
    const count = 2000;
    const posArray = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    
    // Asteroid belt is between Mars (50) and Jupiter (75)
    const innerRadius = 55;
    const outerRadius = 70;
    
    for (let i = 0; i < count; i++) {
      const radius = innerRadius + Math.random() * (outerRadius - innerRadius);
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * 0.2; // Slight vertical variation
      
      posArray[i * 3] = radius * Math.cos(theta);
      posArray[i * 3 + 1] = phi * 3;
      posArray[i * 3 + 2] = radius * Math.sin(theta);
      
      speeds[i] = 0.01 + Math.random() * 0.02;
    }
    
    return [posArray, speeds];
  }, []);

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geom;
  }, [positions]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        color="#8B7355"
        size={0.3}
        sizeAttenuation={true}
        transparent
        opacity={0.8}
      />
    </points>
  );
}
