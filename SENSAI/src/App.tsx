import { Navbar } from './components/Navbar';
import { SequenceCanvas } from './components/SequenceCanvas';
import { HeroSection } from './components/HeroSection';
import { ExplodedSection } from './components/ExplodedSection';
import { AssemblySection } from './components/AssemblySection';
import { StorySection } from './components/StorySection';
import { OrderSection } from './components/OrderSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="relative selection:bg-neon selection:text-white font-sans text-white">
      <Navbar />
      
      {/* Background animation over scroll */}
      <SequenceCanvas />

      {/* The scrollable space for the story-mode scrubbing. 
          1000vh height gives enough space to smoothly scrub all 178 frames. 
      */}
      <div id="sequence-spacer" style={{ height: '1000vh', position: 'relative', zIndex: 10 }}>
        <HeroSection />
      </div>

      <ExplodedSection />
      <AssemblySection />
      
      {/* Story Mode takes over normal scroll document flow */}
      <StorySection />
      
      <OrderSection />
      <Footer />
    </main>
  )
}

export default App
