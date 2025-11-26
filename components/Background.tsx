
import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-dark overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none scale-[1.5]">
         <iframe 
            className="w-full h-full object-cover"
            src="https://www.youtube.com/embed/XHSGNiFeSMY?autoplay=1&mute=1&controls=0&loop=1&playlist=XHSGNiFeSMY&showinfo=0&rel=0&iv_load_policy=3&disablekb=1" 
            title="Background Video" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
      </div>
      
      {/* Dark Overlay to make text readable */}
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] opacity-30" />
    </div>
  );
};

export default Background;
