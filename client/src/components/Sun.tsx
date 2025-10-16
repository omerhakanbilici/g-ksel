import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import * as THREE from "three";

export function Sun() {
  const sunRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (sunRef.current) {
      sunRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <mesh ref={sunRef} position={[0, 0, 0]}>
      <sphereGeometry args={[5, 32, 32]} />
      <meshBasicMaterial 
        color="#FDB813"
        emissive="#FDB813"
        emissiveIntensity={0.5}
      />
      {/* Sun glow effect */}
      <mesh>
        <sphereGeometry args={[6, 32, 32]} />
        <meshBasicMaterial
          color="#FDB813"
          transparent
          opacity={0.2}
        />
      </mesh>
    </mesh>
  );
}
