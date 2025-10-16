import { useMemo } from "react";
import * as THREE from "three";

export function Starfield() {
  const starsGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const starCount = 3000;
    
    const positions = new Float32Array(starCount * 3);
    
    for (let i = 0; i < starCount; i++) {
      // Create stars in a large sphere around the solar system
      const radius = 800 + Math.random() * 500;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  return (
    <points geometry={starsGeometry}>
      <pointsMaterial
        color="#ffffff"
        size={2}
        sizeAttenuation={true}
      />
    </points>
  );
}
