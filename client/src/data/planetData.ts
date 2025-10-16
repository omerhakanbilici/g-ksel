export interface PlanetFacts {
  diameter: string;
  distanceFromSun: string;
  dayLength: string;
  yearLength: string;
  moons: string;
  temperature: string;
  composition: string;
  funFact?: string;
}

export interface MoonData {
  name: string;
  size: number;
  distance: number;
  orbitSpeed: number;
  color: string;
}

export interface PlanetData {
  name: string;
  size: number; // Relative size for 3D rendering
  distance: number; // Distance from sun in 3D space
  color: string;
  orbitSpeed: number; // How fast it orbits the sun
  rotationSpeed: number; // How fast it rotates on its axis
  axialTilt: number; // Axial tilt in degrees
  description: string;
  facts: PlanetFacts;
  moons?: MoonData[];
}

export const planetData: PlanetData[] = [
  {
    name: "Mercury",
    size: 0.8,
    distance: 15,
    color: "#8C7853",
    orbitSpeed: 0.24,
    rotationSpeed: 0.02,
    axialTilt: 0.03,
    description: "The smallest planet and closest to the Sun. Mercury has extreme temperature variations and no atmosphere.",
    facts: {
      diameter: "4,879 km",
      distanceFromSun: "58 million km",
      dayLength: "176 Earth days",
      yearLength: "88 Earth days",
      moons: "0",
      temperature: "-173°C to 427°C",
      composition: "Iron core, silicate mantle and crust",
      funFact: "Mercury has water ice at its poles despite being so close to the Sun!"
    }
  },
  {
    name: "Venus",
    size: 1.5,
    distance: 25,
    color: "#FFC649",
    orbitSpeed: 0.18,
    rotationSpeed: -0.01, // Negative because Venus rotates backwards
    axialTilt: 177.4,
    description: "The hottest planet in our solar system with a thick, toxic atmosphere that traps heat.",
    facts: {
      diameter: "12,104 km",
      distanceFromSun: "108 million km",
      dayLength: "243 Earth days",
      yearLength: "225 Earth days",
      moons: "0",
      temperature: "462°C average",
      composition: "Iron core, rocky mantle, thick CO2 atmosphere",
      funFact: "Venus rotates backwards and has days longer than its years!"
    }
  },
  {
    name: "Earth",
    size: 1.6,
    distance: 35,
    color: "#6B93D6",
    orbitSpeed: 0.15,
    rotationSpeed: 0.1,
    axialTilt: 23.4,
    description: "Our home planet, the only known world with life. Earth has liquid water, oxygen, and a protective atmosphere.",
    facts: {
      diameter: "12,756 km",
      distanceFromSun: "150 million km",
      dayLength: "24 hours",
      yearLength: "365.25 days",
      moons: "1 (The Moon)",
      temperature: "-88°C to 58°C",
      composition: "Iron core, silicate mantle, water oceans, nitrogen-oxygen atmosphere",
      funFact: "Earth is the only planet not named after a Roman god or goddess!"
    }
  },
  {
    name: "Mars",
    size: 1.1,
    distance: 50,
    color: "#C1440E",
    orbitSpeed: 0.12,
    rotationSpeed: 0.09,
    axialTilt: 25.2,
    description: "The Red Planet has the largest volcano in the solar system and evidence of ancient water flows.",
    facts: {
      diameter: "6,792 km",
      distanceFromSun: "228 million km",
      dayLength: "24.6 hours",
      yearLength: "687 Earth days",
      moons: "2 (Phobos and Deimos)",
      temperature: "-87°C to -5°C",
      composition: "Iron core, basaltic mantle, thin CO2 atmosphere",
      funFact: "Mars has the largest volcano in the solar system - Olympus Mons!"
    }
  },
  {
    name: "Jupiter",
    size: 4.5,
    distance: 75,
    color: "#D8CA9D",
    orbitSpeed: 0.08,
    rotationSpeed: 0.15,
    axialTilt: 3.1,
    description: "The largest planet in our solar system, a gas giant with a Great Red Spot storm and many moons.",
    facts: {
      diameter: "142,984 km",
      distanceFromSun: "778 million km",
      dayLength: "9.9 hours",
      yearLength: "12 Earth years",
      moons: "95 known moons",
      temperature: "-108°C average",
      composition: "Hydrogen and helium gas with rocky core",
      funFact: "Jupiter's Great Red Spot is a storm larger than Earth that has raged for centuries!"
    },
    moons: [
      { name: "Io", size: 0.3, distance: 6, orbitSpeed: 0.8, color: "#F4D03F" },
      { name: "Europa", size: 0.25, distance: 8, orbitSpeed: 0.6, color: "#E8DAEF" },
      { name: "Ganymede", size: 0.35, distance: 10, orbitSpeed: 0.4, color: "#BDC3C7" },
      { name: "Callisto", size: 0.3, distance: 12, orbitSpeed: 0.3, color: "#95A5A6" }
    ]
  },
  {
    name: "Saturn",
    size: 3.8,
    distance: 100,
    color: "#FAD5A5",
    orbitSpeed: 0.06,
    rotationSpeed: 0.12,
    axialTilt: 26.7,
    description: "Famous for its spectacular ring system, Saturn is a gas giant less dense than water.",
    facts: {
      diameter: "120,536 km",
      distanceFromSun: "1.4 billion km",
      dayLength: "10.7 hours",
      yearLength: "29 Earth years",
      moons: "146 known moons",
      temperature: "-139°C average",
      composition: "Hydrogen and helium gas with rocky core",
      funFact: "Saturn is less dense than water - it would float in a giant bathtub!"
    },
    moons: [
      { name: "Titan", size: 0.4, distance: 7, orbitSpeed: 0.5, color: "#E67E22" },
      { name: "Rhea", size: 0.2, distance: 9, orbitSpeed: 0.35, color: "#D5D8DC" },
      { name: "Iapetus", size: 0.18, distance: 11, orbitSpeed: 0.25, color: "#566573" }
    ]
  },
  {
    name: "Uranus",
    size: 2.5,
    distance: 125,
    color: "#4FD0E7",
    orbitSpeed: 0.04,
    rotationSpeed: 0.08,
    axialTilt: 97.8,
    description: "An ice giant that rotates on its side, Uranus has a unique tilted axis and faint rings.",
    facts: {
      diameter: "51,118 km",
      distanceFromSun: "2.9 billion km",
      dayLength: "17.2 hours",
      yearLength: "84 Earth years",
      moons: "27 known moons",
      temperature: "-197°C average",
      composition: "Water, methane and ammonia ices with rocky core",
      funFact: "Uranus rotates on its side, possibly due to a collision with an Earth-sized object!"
    },
    moons: [
      { name: "Titania", size: 0.2, distance: 5, orbitSpeed: 0.4, color: "#85C1E2" },
      { name: "Oberon", size: 0.19, distance: 6.5, orbitSpeed: 0.3, color: "#A3C1DA" }
    ]
  },
  {
    name: "Neptune",
    size: 2.4,
    distance: 150,
    color: "#4B70DD",
    orbitSpeed: 0.03,
    rotationSpeed: 0.09,
    axialTilt: 28.3,
    description: "The windiest planet with supersonic winds, Neptune is the farthest planet from the Sun.",
    facts: {
      diameter: "49,528 km",
      distanceFromSun: "4.5 billion km",
      dayLength: "16.1 hours",
      yearLength: "165 Earth years",
      moons: "16 known moons",
      temperature: "-201°C average",
      composition: "Water, methane and ammonia ices with rocky core",
      funFact: "Neptune has the fastest winds in the solar system, reaching up to 2,100 km/h!"
    },
    moons: [
      { name: "Triton", size: 0.25, distance: 5, orbitSpeed: -0.5, color: "#7FB3D5" }
    ]
  },
  {
    name: "Pluto",
    size: 0.6,
    distance: 180,
    color: "#C9A57B",
    orbitSpeed: 0.02,
    rotationSpeed: 0.05,
    axialTilt: 122.5,
    description: "Once considered the ninth planet, Pluto is now classified as a dwarf planet in the Kuiper Belt.",
    facts: {
      diameter: "2,376 km",
      distanceFromSun: "5.9 billion km",
      dayLength: "153 hours",
      yearLength: "248 Earth years",
      moons: "5 (Charon, Styx, Nix, Kerberos, Hydra)",
      temperature: "-223°C average",
      composition: "Ice and rock, frozen nitrogen surface",
      funFact: "Pluto's largest moon Charon is so big that Pluto and Charon orbit each other!"
    }
  },
  {
    name: "Ceres",
    size: 0.5,
    distance: 62,
    color: "#A8A8A8",
    orbitSpeed: 0.1,
    rotationSpeed: 0.12,
    axialTilt: 4.0,
    description: "The largest object in the asteroid belt, Ceres is a dwarf planet that may have a subsurface ocean.",
    facts: {
      diameter: "940 km",
      distanceFromSun: "414 million km",
      dayLength: "9 hours",
      yearLength: "4.6 Earth years",
      moons: "0",
      temperature: "-105°C average",
      composition: "Rock and ice with possible subsurface ocean",
      funFact: "Ceres contains about one-third of all the mass in the asteroid belt!"
    }
  }
];
