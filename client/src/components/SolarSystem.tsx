import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";
import { Sun } from "./Sun";
import { Planet } from "./Planet";
import { AsteroidBelt } from "./AsteroidBelt";
import { planetData } from "../data/planetData";

export function SolarSystem() {
  const systemRef = useRef<Group>(null);

  useFrame((state, delta) => {
    // Optional: Slowly rotate the entire system for a dynamic feel
    if (systemRef.current) {
      systemRef.current.rotation.y += delta * 0.01;
    }
  });

  return (
    <group ref={systemRef}>
      {/* Sun at the center */}
      <Sun />
      
      {/* Asteroid Belt */}
      <AsteroidBelt />
      
      {/* Planets */}
      {planetData.map((planet) => (
        <Planet
          key={planet.name}
          planetData={planet}
        />
      ))}
    </group>
  );
}
