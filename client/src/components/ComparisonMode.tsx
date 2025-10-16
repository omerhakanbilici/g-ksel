import { useState } from "react";
import { planetData } from "../data/planetData";
import { X } from "lucide-react";
import { useIsMobile } from "../hooks/use-is-mobile";

export function ComparisonMode() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlanets, setSelectedPlanets] = useState<string[]>([]);
  const isMobile = useIsMobile();

  const togglePlanet = (planetName: string) => {
    if (selectedPlanets.includes(planetName)) {
      setSelectedPlanets(selectedPlanets.filter(p => p !== planetName));
    } else if (selectedPlanets.length < 3) {
      setSelectedPlanets([...selectedPlanets, planetName]);
    }
  };

  const getSelectedPlanetsData = () => {
    return planetData.filter(p => selectedPlanets.includes(p.name));
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="absolute top-20 right-4 z-10 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm md:text-base transition-colors"
      >
        Compare Planets
      </button>
    );
  }

  return (
    <div className={`absolute z-20 bg-black bg-opacity-95 text-white rounded-lg p-4 ${
      isMobile ? 'top-16 left-2 right-2 max-h-[70vh] overflow-y-auto' : 'top-4 right-4 w-96 max-h-[80vh] overflow-y-auto'
    }`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Compare Planets</h2>
        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
          <X size={20} />
        </button>
      </div>

      <p className="text-sm text-gray-300 mb-4">
        Select up to 3 planets to compare (click on planet names below)
      </p>

      <div className="mb-4">
        <h3 className="text-sm font-semibold mb-2">Select Planets:</h3>
        <div className="flex flex-wrap gap-2">
          {planetData.map((planet) => (
            <button
              key={planet.name}
              onClick={() => togglePlanet(planet.name)}
              disabled={!selectedPlanets.includes(planet.name) && selectedPlanets.length >= 3}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedPlanets.includes(planet.name)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              } ${!selectedPlanets.includes(planet.name) && selectedPlanets.length >= 3 ? 'opacity-50 cursor-not-allowed' : ''}`}
              style={{
                backgroundColor: selectedPlanets.includes(planet.name) ? planet.color : undefined
              }}
            >
              {planet.name}
            </button>
          ))}
        </div>
      </div>

      {selectedPlanets.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-2">Side-by-Side Comparison</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 text-gray-400">Property</th>
                  {getSelectedPlanetsData().map((planet) => (
                    <th key={planet.name} className="text-center py-2" style={{ color: planet.color }}>
                      {planet.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-2 text-gray-400">Diameter</td>
                  {getSelectedPlanetsData().map((planet) => (
                    <td key={planet.name} className="text-center py-2">{planet.facts.diameter}</td>
                  ))}
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2 text-gray-400">Distance from Sun</td>
                  {getSelectedPlanetsData().map((planet) => (
                    <td key={planet.name} className="text-center py-2">{planet.facts.distanceFromSun}</td>
                  ))}
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2 text-gray-400">Day Length</td>
                  {getSelectedPlanetsData().map((planet) => (
                    <td key={planet.name} className="text-center py-2">{planet.facts.dayLength}</td>
                  ))}
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2 text-gray-400">Year Length</td>
                  {getSelectedPlanetsData().map((planet) => (
                    <td key={planet.name} className="text-center py-2">{planet.facts.yearLength}</td>
                  ))}
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2 text-gray-400">Moons</td>
                  {getSelectedPlanetsData().map((planet) => (
                    <td key={planet.name} className="text-center py-2">{planet.facts.moons}</td>
                  ))}
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2 text-gray-400">Temperature</td>
                  {getSelectedPlanetsData().map((planet) => (
                    <td key={planet.name} className="text-center py-2">{planet.facts.temperature}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
