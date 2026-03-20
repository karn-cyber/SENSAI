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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    // Array to hold preloaded images to prevent garbage collection
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        img.src = getFrameUrl(i);
        images.push(img);
        
        // Initial setup on the first frame to size the canvas
        if (i === 0) {
            img.onload = () => {
                if (canvasRef.current) {
                    const canvas = canvasRef.current;
                    const ctx = canvas.getContext('2d');
                    // Match the intrinsic size of the frame
                    canvas.width = img.naturalWidth || img.width;
                    canvas.height = img.naturalHeight || img.height;
                    ctx?.drawImage(img, 0, 0);
                }
            };
        }
    }
    
    imagesRef.current = images;

    const frameSequence = { frame: 0 };
    
    const scrollTrigger = ScrollTrigger.create({
        trigger: "#sequence-spacer",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5, // 0.5 sec drag effect for story mode
        animation: gsap.to(frameSequence, {
            frame: FRAME_COUNT - 1,
            snap: "frame",
            ease: "none",
            onUpdate: () => {
                if (canvasRef.current && imagesRef.current.length > 0) {
                    const ctx = canvasRef.current.getContext('2d');
                    const img = imagesRef.current[Math.round(frameSequence.frame)];
                    
                    // Proceed only if the frame is fully loaded and decodeable
                    if (img && img.complete && img.naturalHeight !== 0) {
                         // Fallback resize if first image onload was skipped/late or dimensions don't match
                         if (canvasRef.current.width !== img.naturalWidth && img.naturalWidth > 0) {
                             canvasRef.current.width = img.naturalWidth;
                             canvasRef.current.height = img.naturalHeight;
                         }
                         
                         if (canvasRef.current.width > 0) {
                             ctx?.drawImage(img, 0, 0);
                         }
                    }
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
        
        {/* Placeholder image that renders instantly without blocking JS parsing */}
        <img 
          src={getFrameUrl(0)}
          alt="SENSAI Product Overview"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ 
            filter: 'contrast(1.1) brightness(0.95)' 
          }}
        />
        
        {/* Hardware-accelerated canvas for smooth high-framerate sequence scrubbing */}
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover z-10"
          style={{ 
            filter: 'contrast(1.1) brightness(0.95)'
          }}
        />
    </div>
  );
};
