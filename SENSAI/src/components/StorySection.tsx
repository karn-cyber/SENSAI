import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const StorySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef1 = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Fade in text blocks on scroll
    [textRef1.current, textRef2.current].forEach((elem) => {
      if (!elem) return;
      gsap.fromTo(elem,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elem,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} className="relative z-20 bg-black text-white w-full flex flex-col items-center">
      {/* Seamless Top Transition border */}
      <div className="w-full h-32 bg-gradient-to-b from-transparent to-black" style={{ marginTop: '-8rem' }}></div>

      {/* Video Introduction Header */}
      <div className="w-full max-w-6xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">
          Redefining Human Awareness
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl font-light leading-relaxed mb-16">
          SENSAI is an AI-powered, clavicle-mounted wearable designed to enhance spatial awareness for visually impaired individuals. By seamlessly integrating with the human body, it acts as an intuitive sensory interface—translating the surrounding environment into meaningful haptic and audio feedback.
        </p>

        {/* Video Block */}
        <div className="w-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(255,255,255,0.05)] relative group cursor-pointer transition-transform hover:scale-[1.01] duration-700">
          <video 
            ref={videoRef}
            src="/assets/Transition_assembled_to_202603201535.mp4" 
            className="w-full aspect-video object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
          />
        </div>
      </div>

      {/* Two Column Feature #1 */}
      <div className="w-full max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div ref={textRef1} className="order-2 md:order-1 flex flex-col gap-6">
          <h3 className="text-3xl font-light tracking-wide text-white">
            Unparalleled Perception
          </h3>
          <p className="text-gray-400 font-light leading-relaxed">
            Equipped with stereo cameras and advanced depth sensing, SENSAI continuous interprets real-world surroundings in real time. Its intelligent onboard processing ensures low-latency performance and complete privacy, eliminating the need for cloud dependency.
          </p>
          <ul className="space-y-4 mt-4">
            <li className="flex items-center gap-4 border-b border-white/10 pb-4">
              <span className="w-2 h-2 rounded-full bg-neon shadow-[0_0_8px_rgba(176,38,255,0.8)]"></span>
              <span className="text-sm tracking-wider uppercase text-gray-300">Stereo Depth Sensing</span>
            </li>
            <li className="flex items-center gap-4 border-b border-white/10 pb-4">
              <span className="w-2 h-2 rounded-full bg-neon shadow-[0_0_8px_rgba(176,38,255,0.8)]"></span>
              <span className="text-sm tracking-wider uppercase text-gray-300">Local AI Processing</span>
            </li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <img 
            src="/assets/Whisk_b051d4f1e9b9f6b8a084e59825b94775dr.png" 
            alt="Sensai Stereo Cameras" 
            className="w-full h-auto rounded-3xl opacity-90 hover:opacity-100 transition-opacity duration-500"
          />
        </div>
      </div>

      {/* Two Column Feature #2 */}
      <div className="w-full max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <img 
            src="/assets/Whisk_e3654499207dc3bb0a84311da8c5ad65dr.png" 
            alt="Sensai Ergonomic Design" 
            className="w-full h-auto rounded-3xl drop-shadow-[0_0_50px_rgba(255,255,255,0.05)] opacity-90 hover:opacity-100 transition-opacity duration-500"
          />
        </div>
        <div ref={textRef2} className="flex flex-col gap-6 ml-0 md:ml-12">
          <h3 className="text-3xl font-light tracking-wide text-white">
            Anatomically Ergonomic
          </h3>
          <p className="text-gray-400 font-light leading-relaxed">
            Designed to rest comfortably along the clavicle without obstructing movement or daily activities. The device communicates information through subtle vibrations and bone-conduction audio, enabling users to perceive obstacles naturally and confidently.
          </p>
          <p className="text-gray-400 font-light leading-relaxed italic border-l-2 border-white/20 pl-4 mt-4">
           "More than an assistive device, SENSAI is a step toward independence—empowering individuals to move with confidence, awareness, and dignity."
          </p>
        </div>
      </div>

      {/* Final Footer CTA */}
      <div className="w-full border-t border-white/10 mt-12 py-32 flex flex-col items-center">
        <h2 className="text-3xl font-light mb-8">Ready to step forward?</h2>
        <a href="#order" className="inline-block bg-white text-black px-12 py-4 rounded-full text-sm tracking-[0.2em] font-medium hover:bg-gray-200 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          ORDER YOUR SENSAI
        </a>
      </div>

    </section>
  );
};
