import { useSolarSystem } from "../lib/stores/useSolarSystem";
import { useIsMobile } from "../hooks/use-is-mobile";
import { X } from "lucide-react";

export function PlanetInfo() {
  const { selectedPlanet, setSelectedPlanet } = useSolarSystem();
  const isMobile = useIsMobile();

  if (!selectedPlanet) return null;

  return (
    <div 
      className={`
        absolute z-20 bg-black bg-opacity-90 text-white rounded-lg p-4 md:p-6
        ${isMobile 
          ? 'bottom-4 left-4 right-4 max-h-60 overflow-y-auto' 
          : 'top-20 right-4 w-80 max-h-96 overflow-y-auto'
        }
      `}
    >
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl md:text-2xl font-bold" style={{ color: selectedPlanet.color }}>
          {selectedPlanet.name}
        </h2>
        <button 
          onClick={() => setSelectedPlanet(null)}
          className="text-gray-400 hover:text-white p-1"
        >
          <X size={20} />
        </button>
      </div>

      <div className="space-y-3 text-sm md:text-base">
        <div>
          <h3 className="font-semibold text-gray-300 mb-1">Overview</h3>
          <p className="text-gray-100 leading-relaxed">{selectedPlanet.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <h4 className="font-semibold text-gray-300">Diameter</h4>
            <p>{selectedPlanet.facts.diameter}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-300">Distance from Sun</h4>
            <p>{selectedPlanet.facts.distanceFromSun}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-300">Day Length</h4>
            <p>{selectedPlanet.facts.dayLength}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-300">Year Length</h4>
            <p>{selectedPlanet.facts.yearLength}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-300">Moons</h4>
            <p>{selectedPlanet.facts.moons}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-300">Temperature</h4>
            <p>{selectedPlanet.facts.temperature}</p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-300 mb-1">Composition</h4>
          <p className="text-gray-100">{selectedPlanet.facts.composition}</p>
        </div>

        {selectedPlanet.facts.funFact && (
          <div>
            <h4 className="font-semibold text-gray-300 mb-1">Fun Fact</h4>
            <p className="text-gray-100 italic">{selectedPlanet.facts.funFact}</p>
          </div>
        )}
      </div>
    </div>
  );
}
