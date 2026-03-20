import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const AssemblySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(containerRef.current, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: document.body,
          start: "85% top", 
          end: "bottom bottom",
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-20 flex flex-col justify-end pb-24 md:pb-32">
      <div ref={containerRef} className="mx-auto flex flex-col items-center gap-8 pointer-events-auto w-[90%] md:w-auto">
        <div className="glass px-10 py-10 rounded-3xl border border-white/10 bg-black/60 backdrop-blur-2xl text-center max-w-lg shadow-2xl shadow-[0_0_80px_rgba(255,255,255,0.05)] transition-transform hover:scale-[1.02] duration-700">
          <h2 className="text-4xl font-light text-white mb-4 tracking-tight">The Final Assembly</h2>
          <p className="text-gray-400 text-sm mb-10 leading-relaxed font-light">
            Components magnetically pulling together toward a central axis. High-tension energy, perfectly aligned for final assembly. Sensai is ready to guide you.
          </p>
          <button className="w-full bg-white text-black font-semibold text-sm tracking-widest uppercase py-5 rounded-xl hover:bg-gray-200 transition-all active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
            Order Yours
          </button>
        </div>
      </div>
    </div>
  );
};
