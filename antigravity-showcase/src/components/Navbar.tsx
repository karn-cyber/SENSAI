export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-black"></div>
          </div>
          <span className="font-semibold text-lg tracking-wider">ANTIGRAVITY</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Overview</a>
          <a href="#" className="hover:text-white transition-colors">Tech Specs</a>
          <a href="#" className="hover:text-white transition-colors">Design</a>
        </div>

        <div>
          <button className="bg-white text-black px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold hover:bg-gray-200 transition-colors">
            Order Yours
          </button>
        </div>
      </div>
    </nav>
  );
};
