import { Navbar } from './components/Navbar';
import { SequenceCanvas } from './components/SequenceCanvas';
import { HeroSection } from './components/HeroSection';
import { ExplodedSection } from './components/ExplodedSection';
import { AssemblySection } from './components/AssemblySection';

function App() {
  return (
    <main className="relative selection:bg-neon selection:text-white font-sans text-white">
      <Navbar />
      
      {/* Background animation over scroll */}
      <SequenceCanvas />

      {/* The scrollable space for the story-mode scrubbing. 
          600vh height gives enough space to smoothly scroll 40 frames. 
      */}
      <div style={{ height: '600vh', position: 'relative', zIndex: 10 }}>
        <HeroSection />
      </div>

      <ExplodedSection />
      <AssemblySection />
    </main>
  )
}

export default App
