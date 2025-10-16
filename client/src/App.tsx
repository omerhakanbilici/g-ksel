import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { OrbitControls, Html } from "@react-three/drei";
import { SolarSystem } from "./components/SolarSystem";
import { PlanetInfo } from "./components/PlanetInfo";
import { Starfield } from "./components/Starfield";
import { useSolarSystem } from "./lib/stores/useSolarSystem";
import { useIsMobile } from "./hooks/use-is-mobile";
import "@fontsource/inter";

function App() {
  const { selectedPlanet } = useSolarSystem();
  const isMobile = useIsMobile();

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', background: '#000' }}>
      <Canvas
        shadows
        camera={{
          position: [0, 50, 150],
          fov: 45,
          near: 0.1,
          far: 2000
        }}
        gl={{
          antialias: true,
          powerPreference: "high-performance"
        }}
      >
        <color attach="background" args={["#000000"]} />
        
        {/* Lighting */}
        <ambientLight intensity={0.1} />
        <pointLight position={[0, 0, 0]} intensity={2} color="#FDB813" />
        
        <Suspense fallback={
          <Html center>
            <div className="text-white text-xl">Loading Solar System...</div>
          </Html>
        }>
          <Starfield />
          <SolarSystem />
        </Suspense>
        
        {/* Camera Controls */}
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={20}
          maxDistance={500}
          autoRotate={false}
          autoRotateSpeed={0.5}
          enableDamping={true}
          dampingFactor={0.05}
          rotateSpeed={isMobile ? 0.5 : 1}
          zoomSpeed={isMobile ? 0.5 : 1}
          panSpeed={isMobile ? 0.5 : 1}
        />
      </Canvas>

      {/* UI Overlay */}
      {selectedPlanet && <PlanetInfo />}
      
      {/* Title */}
      <div className="absolute top-4 left-4 z-10">
        <h1 className="text-white text-2xl md:text-3xl font-bold">
          Interactive Solar System
        </h1>
        <p className="text-gray-300 text-sm md:text-base mt-1">
          Click on planets to explore
        </p>
      </div>

      {/* Controls Info */}
      <div className="absolute bottom-4 left-4 z-10 text-white text-xs md:text-sm">
        <div className="bg-black bg-opacity-50 p-2 rounded">
          <p>🖱️ Drag to rotate • 🔍 Scroll to zoom • ⌨️ Right-click + drag to pan</p>
          {isMobile && <p>📱 Pinch to zoom • Touch and drag to rotate</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
