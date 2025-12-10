import { useEffect, useState } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Full Stack Developer.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        // Optional loop: un-comment below to make it loop endlessly
        // index = 0; 
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0a] pt-32 pb-20"
    >
      {/* Custom CSS for the subtle float animation */}
      <style>{`
        @keyframes subtle-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-subtle-float {
          animation: subtle-float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Ambient Glows */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            
            <h2 className="text-gray-400 text-lg md:text-xl font-medium mb-2 fade-in-up">
              Hello, Myself
            </h2>

            {/* Main Name - High Importance */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight fade-in-up delay-100">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400">
                Salik Husnaq
              </span>
            </h1>

            {/* Typewriter Line - REDUCED FONT SIZE to fit on one line */}
            <div className="h-10 md:h-12 mb-6 fade-in-up delay-200">
              <span className="text-xl md:text-3xl lg:text-4xl font-semibold text-gray-200">
                I'm a {displayText}
              </span>
              <span className="animate-pulse text-purple-400 text-xl md:text-3xl lg:text-4xl">|</span>
            </div>

            <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed fade-in-up delay-300">
              Specializing in building scalable, user-friendly applications using React, TypeScript, and modern UI frameworks. I blend technical expertise with design to create seamless digital experiences.
            </p>

            {/* Tech Stack (Visual Filler) */}
            <div className="flex flex-col items-center lg:items-start gap-3 fade-in-up delay-400">
                <span className="text-sm font-mono text-purple-400/80 tracking-widest uppercase">Tech Stack</span>
                <div className="flex gap-4">
                  <div className="px-4 py-2 rounded-md bg-white/5 border border-white/10 text-gray-300 text-sm font-mono hover:border-purple-500/50 transition-colors">React</div>
                  <div className="px-4 py-2 rounded-md bg-white/5 border border-white/10 text-gray-300 text-sm font-mono hover:border-purple-500/50 transition-colors">TypeScript</div>
                  <div className="px-4 py-2 rounded-md bg-white/5 border border-white/10 text-gray-300 text-sm font-mono hover:border-purple-500/50 transition-colors">Node.js</div>
                  <div className="px-4 py-2 rounded-md bg-white/5 border border-white/10 text-gray-300 text-sm font-mono hover:border-purple-500/50 transition-colors">Tailwind</div>
                </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Image */}
          <div className="flex-1 flex justify-center lg:justify-end relative fade-in-left">
             {/* Glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-purple-500/20 blur-3xl rounded-full" />
            
            {/* The Image - Subtle Float Animation */}
<div className="relative w-56 h-56 lg:w-[400px] lg:h-[400px] animate-subtle-float">
  <img
    src="/bitmoji.png"
    alt="Salik Husnaq"
    // Added 'rounded-tl-[3rem]' (top-left) and 'rounded-br-[3rem]' (bottom-right) for the creative border effect.
    // Removed 'object-contain' and added 'object-cover' for better filling of the new shape.
    className="w-full h-full object-cover rounded-tl-[3rem] rounded-br-[3rem] drop-shadow-[0_10px_20px_rgba(168,85,247,0.25)]"
  />
</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;