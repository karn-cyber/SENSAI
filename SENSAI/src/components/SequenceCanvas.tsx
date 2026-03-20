import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 178;
const getFrameUrl = (index: number) => {
  // Use import.meta.env.BASE_URL to robustly resolve public assets in Vite
  const baseUrl = import.meta.env.BASE_URL.endsWith('/') 
    ? import.meta.env.BASE_URL 
    : import.meta.env.BASE_URL + '/';
  return `${baseUrl}FinalFrames/ezgif-frame-${String(index + 1).padStart(3, '0')}.jpg`;
};

export const SequenceCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Silently preload in background so we don't block the UI
    for (let i = 1; i < FRAME_COUNT; i++) {
        const img = new Image();
        img.src = getFrameUrl(i);
    }

    const frameSequence = { frame: 0 };
    
    const scrollTrigger = ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5, // 0.5 sec drag effect for story mode
        animation: gsap.to(frameSequence, {
            frame: FRAME_COUNT - 1,
            snap: "frame",
            ease: "none",
            onUpdate: () => {
                if (imgRef.current) {
                    imgRef.current.src = getFrameUrl(Math.round(frameSequence.frame));
                }
            }
        })
    });

    return () => {
        scrollTrigger.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed top-0 left-0 w-full h-full z-0 bg-black flex items-center justify-center overflow-hidden pointer-events-none">
        {/* Render instantly without JS blocking */}
        <img 
          ref={imgRef}
          src={getFrameUrl(0)}
          alt="SENSAI Product Overview"
          className="w-full h-full object-cover"
          style={{ 
            filter: 'contrast(1.1) brightness(0.95)' // Slight adjustment for deep matte black integration
          }}
        />
    </div>
  );
};
