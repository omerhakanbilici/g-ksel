import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Mesh, Group, Vector3 } from "three";
import * as THREE from "three";
import { useSolarSystem } from "../lib/stores/useSolarSystem";
import { PlanetData } from "../data/planetData";

interface PlanetProps {
  planetData: PlanetData;
}

export function Planet({ planetData }: PlanetProps) {
  const groupRef = useRef<Group>(null);
  const planetRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { setSelectedPlanet, selectedPlanet } = useSolarSystem();
  const { camera } = useThree();

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Orbital rotation around the sun
      groupRef.current.rotation.y += delta * planetData.orbitSpeed;
    }
    
    if (planetRef.current) {
      // Planet self-rotation
      planetRef.current.rotation.y += delta * planetData.rotationSpeed;
    }
  });

  const handleClick = (event: any) => {
    event.stopPropagation();
    setSelectedPlanet(planetData);
    
    // Focus camera on planet
    if (groupRef.current) {
      const planetPosition = new Vector3();
      groupRef.current.children[0].getWorldPosition(planetPosition);
      
      // Calculate camera position relative to planet
      const cameraDistance = Math.max(planetData.size * 8, 15);
      const cameraOffset = planetPosition.clone().normalize().multiplyScalar(cameraDistance);
      cameraOffset.add(planetPosition);
      
      // Smooth camera transition (basic)
      camera.position.lerp(cameraOffset, 0.1);
      camera.lookAt(planetPosition);
    }
  };

  return (
    <group ref={groupRef}>
      <group position={[planetData.distance, 0, 0]}>
        {/* Orbit visualization */}
        <mesh position={[-planetData.distance, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[planetData.distance - 0.1, planetData.distance + 0.1, 64]} />
          <meshBasicMaterial 
            color="#444444" 
            transparent 
            opacity={selectedPlanet?.name === planetData.name ? 0.3 : 0.1} 
            side={THREE.DoubleSide}
          />
        </mesh>
        
        {/* Planet */}
        <mesh
          ref={planetRef}
          onClick={handleClick}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          scale={hovered ? 1.2 : 1}
        >
          <sphereGeometry args={[planetData.size, 16, 16]} />
          <meshLambertMaterial 
            color={planetData.color}
            emissive={planetData.color}
            emissiveIntensity={selectedPlanet?.name === planetData.name ? 0.2 : 0}
          />
        </mesh>

        {/* Planet label */}
        {(hovered || selectedPlanet?.name === planetData.name) && (
          <mesh position={[0, planetData.size + 2, 0]}>
            <planeGeometry args={[planetData.name.length * 0.8, 1.2]} />
            <meshBasicMaterial 
              color="#000000"
              transparent
              opacity={0.8}
            />
          </mesh>
        )}
      </group>
    </group>
  );
}
