import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const ExplodedSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(containerRef.current, 
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: document.body,
          start: "25% top", 
          end: "45% top",
          scrub: true,
        }
      }
    );

    gsap.to(containerRef.current, {
      opacity: 0,
      scale: 1.05,
      scrollTrigger: {
        trigger: document.body,
        start: "60% top",
        end: "80% top",
        scrub: true,
      }
    });

  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full flex items-center justify-between p-8 md:p-24 pointer-events-none z-10">
      
      {/* Left Spec Panel */}
      <div className="flex flex-col gap-6 max-w-sm glass p-8 rounded-3xl hidden md:flex border border-white/10 backdrop-blur-xl bg-black/40 shadow-2xl shadow-white/5">
        <h3 className="text-2xl font-light tracking-wide text-white">Unprecedented Vision</h3>
        <p className="text-gray-400 text-sm leading-relaxed font-light">
          Sensai processes the surrounding environment in milliseconds. Its advanced sensor array detects obstacles, recognizes faces, and reads text—delivered via instant haptic feedback.
        </p>
        <div className="h-px w-full bg-gradient-to-r from-white/30 to-transparent" />
        <ul className="text-xs text-white/70 uppercase tracking-[0.2em] space-y-3 font-medium">
          <li>120° Field of View</li>
          <li>Sub-millimeter LiDAR</li>
          <li>Edge AI Processing</li>
        </ul>
      </div>

      {/* Right Spec callouts */}
      <div className="flex flex-col gap-40 max-w-xs text-right hidden lg:flex">
        <div className="relative">
          <div className="absolute right-full top-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-l from-white/40 to-transparent mr-6" />
          <h4 className="text-white font-medium text-xl tracking-wide">Computer Vision</h4>
          <p className="text-gray-500 text-xs mt-2 uppercase tracking-widest">Real-time Scene Analysis</p>
        </div>
        <div className="relative">
          <div className="absolute right-full top-1/2 -translate-y-1/2 w-48 h-px bg-gradient-to-l from-white/40 to-transparent mr-6" />
          <h4 className="font-medium text-xl text-white tracking-wide">Spatial Radar</h4>
          <p className="text-gray-500 text-xs mt-2 uppercase tracking-widest">Dynamic Pathfinding</p>
        </div>
      </div>
    </div>
  );
};
