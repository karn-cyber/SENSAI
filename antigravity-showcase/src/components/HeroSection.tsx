import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Fade out as user scrolls down
    gsap.to(containerRef.current, {
      opacity: 0,
      y: -100,
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "10% top",
        scrub: true,
      }
    });
  }, []);

  return (
    <div ref={containerRef} className="h-screen w-full flex flex-col items-center justify-center pointer-events-none pt-20">
      <h1 ref={textRef} className="text-transparent bg-clip-text bg-gradient-to-b from-white/90 to-white/10 text-[12vw] font-bold tracking-tighter uppercase leading-none mix-blend-overlay drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]">
        SENSAI
      </h1>
      
      <div className="absolute bottom-32 flex flex-col items-center gap-6">
        <p className="text-white/70 text-sm tracking-[0.3em] uppercase font-medium text-center max-w-md leading-relaxed">
          The World, Translated. <br/>
          <span className="text-white/40 text-xs">wearable intelligence for the blind</span>
        </p>
        <div className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent animate-pulse" />
      </div>

      <div className="absolute left-16 top-1/3 flex flex-col gap-12 hidden lg:flex text-right opacity-90">
          <div>
            <div className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Perception</div>
            <div className="text-white tracking-wide text-xl font-light">Spatial Radar mapped</div>
          </div>
          <div>
            <div className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Interaction</div>
            <div className="text-white tracking-wide text-xl font-light">Intuitive Haptics</div>
          </div>
      </div>
    </div>
  );
};
