import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { useSolarSystem } from "../lib/stores/useSolarSystem";

export function CameraController() {
  const { camera } = useThree();
  const { selectedPlanet } = useSolarSystem();
  const targetPosition = useRef(new Vector3());
  const targetLookAt = useRef(new Vector3());

  useFrame(() => {
    if (selectedPlanet) {
      // Calculate desired camera position based on selected planet
      const distance = selectedPlanet.distance;
      const planetSize = selectedPlanet.size;
      
      // Position camera at an angle to show the planet nicely
      targetPosition.current.set(
        distance * 1.5,
        planetSize * 3,
        distance * 0.8
      );
      
      targetLookAt.current.set(distance, 0, 0);
      
      // Smoothly move camera
      camera.position.lerp(targetPosition.current, 0.02);
      camera.lookAt(targetLookAt.current);
    }
  });

  return null;
}
