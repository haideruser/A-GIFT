
import React from 'react';
import FallingParticles from './FallingParticles';

const GiftContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fffcf5] flex flex-col relative overflow-hidden">
      {/* Background Ambience */}
      <FallingParticles />
      
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-orange-100/30 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-red-100/30 rounded-full blur-[100px] -z-0"></div>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 relative z-20">
        <div className="max-w-3xl w-full text-center space-y-12">
          
          {/* Header Section */}
          <header className="space-y-4 animate-float">
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
              For You, Autumn
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-amber-900 leading-tight">
              A little gift for the girl who carries <span className="text-orange-600 italic">Autumn</span> as her nickname.
            </h1>
          </header>

          {/* Body Section */}
          <div className="space-y-10 py-10">
            <div className="relative">
              {/* Decorative Quotation Mark */}
              <div className="absolute -top-10 -left-4 text-8xl text-orange-100 font-serif select-none">"</div>
              
              <div className="space-y-6 relative z-10">
                <p className="text-xl md:text-2xl text-amber-800 font-medium leading-relaxed">
                  Just a small effort to bring smile on your face.
                </p>
                <p className="text-2xl md:text-3xl font-romantic text-red-700 leading-relaxed">
                  I hope your day is as beautiful as you are.
                </p>
              </div>

              <div className="absolute -bottom-10 -right-4 text-8xl text-orange-100 font-serif rotate-180 select-none">"</div>
            </div>

            <div className="mt-12">
              <p className="text-amber-900/60 font-medium text-lg italic animate-pulse">
                Is pa bohot time laga yar 😂
              </p>
            </div>
            
            {/* Romantic Graphic */}
            <div className="flex justify-center mt-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-red-200 rounded-full blur-xl scale-75 group-hover:scale-110 transition-transform duration-700 opacity-60"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500 animate-bounce relative z-10" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="relative z-20 py-12 px-6 bg-gradient-to-t from-orange-50/80 to-transparent border-t border-orange-100/50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-2xl font-romantic text-amber-900 font-bold tracking-wide">
            Thinking of you!
          </p>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto"></div>
          <p className="text-amber-800/70 font-medium tracking-widest text-sm uppercase">
            Created by <span className="text-orange-600 font-bold">Haider</span> for the one he loves
          </p>
        </div>
      </footer>
      
      {/* Corner Decorations */}
      <div className="fixed top-0 left-0 pointer-events-none opacity-40 md:opacity-100">
        <svg width="200" height="200" viewBox="0 0 200 200" className="text-amber-200">
          <path d="M0,0 Q100,0 100,100 Q100,200 0,200" fill="currentColor" opacity="0.2"/>
          <circle cx="40" cy="40" r="4" fill="currentColor" />
          <circle cx="80" cy="20" r="3" fill="currentColor" />
          <circle cx="20" cy="80" r="5" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
};

export default GiftContent;
