import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, Group } from "three";

interface MoonProps {
  size: number;
  distance: number;
  orbitSpeed: number;
  color: string;
  name: string;
}

export function Moon({ size, distance, orbitSpeed, color, name }: MoonProps) {
  const groupRef = useRef<Group>(null);
  const moonRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * orbitSpeed;
    }
    
    if (moonRef.current) {
      moonRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={moonRef} position={[distance, 0, 0]}>
        <sphereGeometry args={[size, 12, 12]} />
        <meshStandardMaterial 
          color={color}
          metalness={0.2}
          roughness={0.8}
        />
      </mesh>
    </group>
  );
}
