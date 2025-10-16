# Solar System 3D Visualization

## Overview

An interactive 3D solar system visualization built with React Three Fiber. Users can explore planets, view detailed information, compare celestial bodies, and interact with a real-time 3D model of our solar system. The application features orbital mechanics, asteroid belts, moons, and educational content about each planet.

## Recent Changes (October 16, 2025)

### Phase 2 Enhancements - Completed
- **Asteroid Belt**: Added 2000 particle-based asteroids orbiting between Mars and Jupiter with gentle rotation
- **Dwarf Planets**: Added Pluto and Ceres with complete scientific data and clickable info panels
- **Axial Tilt**: Implemented accurate planet axial tilts (Mercury 0.03°, Earth 23.4°, Uranus 97.8°, etc.)
- **Moon Systems**: Added major moons for gas giants:
  - Jupiter: Io, Europa, Ganymede, Callisto
  - Saturn: Titan, Rhea, Iapetus
  - Uranus: Titania, Oberon
  - Neptune: Triton
- **Comparison Mode**: Built side-by-side planet comparison UI with tabular data display (supports up to 3 planets)
- **Visual Enhancement**: Upgraded to meshStandardMaterial with metalness and roughness for improved lighting

### Components Added
- `AsteroidBelt.tsx`: Particle system for asteroid belt visualization
- `Moon.tsx`: Reusable moon component with orbital animation
- `ComparisonMode.tsx`: Interactive planet comparison UI with responsive table layout

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Core Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**3D Rendering Stack**: 
- React Three Fiber (@react-three/fiber) for declarative 3D scene management
- Three.js for WebGL rendering
- Drei (@react-three/drei) for common 3D utilities (OrbitControls, Html overlays)
- Post-processing effects (@react-three/postprocessing) for visual enhancements
- GLSL shader support via vite-plugin-glsl

**State Management**: 
- Zustand stores for global state management with three main stores:
  - `useSolarSystem`: Manages planet selection, pause state, and animation speed
  - `useGame`: Controls application phase transitions (ready/playing/ended)
  - `useAudio`: Handles sound effects and background music with mute controls
- State organization separates concerns (solar system state, game flow, audio)

**UI Component Library**: 
- Radix UI primitives for accessible, unstyled components
- shadcn/ui component patterns
- TailwindCSS for styling with custom design tokens
- Responsive design using custom `useIsMobile` hook

**Data Architecture**:
- Static planet data stored in `client/src/data/planetData.ts`
- TypeScript interfaces define planet properties (size, orbit, rotation, facts, moons)
- Shared types between components ensure consistency

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js

**Build Process**:
- Client: Vite bundles React application to `dist/public`
- Server: esbuild bundles Express server to `dist/index.js` with ESM format
- Development: tsx for running TypeScript directly with hot reload

**Storage Layer**:
- In-memory storage implementation (`MemStorage`) following the `IStorage` interface
- Storage abstraction allows future database integration without route changes
- Current implementation stores users in a Map structure
- User schema defined with Drizzle ORM in `shared/schema.ts`

**Middleware Stack**:
- JSON and URL-encoded body parsing
- Request/response logging with timing for API routes
- Error handling middleware for standardized error responses
- Vite development middleware (dev only) for HMR and asset serving

**Route Organization**:
- Routes registered in `server/routes.ts`
- All application routes prefixed with `/api`
- HTTP server creation uses Node's built-in `http` module
- Static file serving handled by Vite (dev) or Express static (production)

### Data Storage Solutions

**Current Implementation**: In-memory storage using JavaScript Map for rapid prototyping

**Database Ready**: 
- Drizzle ORM configured for PostgreSQL with schema in `shared/schema.ts`
- Migration support configured via `drizzle.config.ts`
- Neon serverless driver ready for PostgreSQL connection
- Environment variable `DATABASE_URL` required for database connection

**Schema Design**:
- Users table with id (serial), username (unique text), password (text)
- Zod validation schemas generated from Drizzle schemas for runtime validation
- Type-safe insert and select operations using TypeScript inference

### External Dependencies

**Database Services**:
- Neon Serverless PostgreSQL (@neondatabase/serverless) configured but not actively used
- Connection string expected via `DATABASE_URL` environment variable
- Drizzle Kit for schema migrations when database is connected

**Development Tools**:
- Vite with React plugin for fast development builds
- @replit/vite-plugin-runtime-error-modal for enhanced error display
- TypeScript strict mode with path aliases (@/* for client, @shared/* for shared code)

**UI Libraries**:
- Complete Radix UI component suite for accessible primitives
- Lucide React for iconography
- TailwindCSS with PostCSS for styling pipeline
- Class Variance Authority (CVA) for component variant management

**3D Graphics**:
- Three.js ecosystem (fiber, drei, postprocessing)
- GLSL shader compilation support
- Support for 3D model formats (.gltf, .glb) and audio files (.mp3, .ogg, .wav)

**State & Data Fetching**:
- TanStack Query (@tanstack/react-query) configured for server state management
- Query client with custom fetch functions and 401 handling
- Infinite stale time configured (no automatic refetching)
- Credentials included in all API requests for session management

**Typography**:
- Inter font family (@fontsource/inter) loaded for consistent typography