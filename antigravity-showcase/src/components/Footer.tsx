import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black text-gray-400 border-t border-white/10 pt-16 pb-8 relative z-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
            </div>
            <span className="font-semibold text-lg text-white tracking-wider">SENS.ai</span>
          </div>
          <p className="text-sm font-light leading-relaxed">
            Redefining human awareness through spatial intelligence and intuitive haptic design.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-white font-medium mb-2 tracking-wide uppercase text-xs">Product</h4>
          <a href="#" className="text-sm hover:text-white transition-colors">Overview</a>
          <a href="#" className="text-sm hover:text-white transition-colors">Tech Specs</a>
          <a href="#" className="text-sm hover:text-white transition-colors">Accessibility</a>
          <a href="#" className="text-sm hover:text-white transition-colors">Buy</a>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-white font-medium mb-2 tracking-wide uppercase text-xs">Support</h4>
          <a href="#" className="text-sm hover:text-white transition-colors">Help Center</a>
          <a href="#" className="text-sm hover:text-white transition-colors">Setup Guide</a>
          <a href="#" className="text-sm hover:text-white transition-colors">Warranty</a>
          <a href="#" className="text-sm hover:text-white transition-colors">Contact Us</a>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-white font-medium mb-2 tracking-wide uppercase text-xs">Company</h4>
          <a href="#" className="text-sm hover:text-white transition-colors">About</a>
          <a href="#" className="text-sm hover:text-white transition-colors">Careers</a>
          <a href="#" className="text-sm hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-sm hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-light">
        <p>&copy; {new Date().getFullYear()} SENSAI Technologies. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
};
