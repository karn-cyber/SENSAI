import { useEffect, useRef, useState } from 'react';
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
  
  const [progress, setProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';

    // Array to hold preloaded images to prevent garbage collection
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        img.src = getFrameUrl(i);
        images.push(img);
        
        const handleLoadOrError = () => {
            loadedCount++;
            setProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
            // Trigger completion when all frames are resolved
            if (loadedCount === FRAME_COUNT) {
                 setTimeout(() => {
                     if (loaderRef.current) {
                         gsap.to(loaderRef.current, {
                             opacity: 0,
                             duration: 1.0,
                             ease: "power2.inOut",
                             onComplete: () => {
                                 setLoadingComplete(true);
                                 document.body.style.overflow = '';
                             }
                         });
                     } else {
                         setLoadingComplete(true);
                         document.body.style.overflow = '';
                     }
                 }, 500); // 500ms delay to let the user see "100%"
            }
        };

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
                handleLoadOrError();
            };
            img.onerror = () => handleLoadOrError();
        } else {
            img.onload = () => handleLoadOrError();
            img.onerror = () => handleLoadOrError();
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
        document.body.style.overflow = '';
        scrollTrigger.kill();
    };
  }, []);

  return (
    <>
      {/* Loading Overlay */}
      {!loadingComplete && (
        <div ref={loaderRef} className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-8 max-w-sm w-full px-6">
                <div className="flex flex-col items-center gap-2 text-center">
                    <h1 className="text-white text-sm tracking-[0.3em] font-light uppercase opacity-80">
                      Awakening Perception
                    </h1>
                    <p className="text-gray-500 text-[10px] tracking-widest uppercase mb-4 opacity-50">
                      Translating the world...
                    </p>
                </div>
                
                {/* Minimalist Progress Bar */}
                <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
                    <div 
                      className="absolute top-0 left-0 h-full bg-white transition-all duration-300 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                </div>
                <div className="text-white/40 text-[10px] uppercase tracking-widest animate-pulse">
                    {progress}%
                </div>
            </div>
        </div>
      )}

      {/* Main Canvas Container */}
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
    </>
  );
};
