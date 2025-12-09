import { useEffect, useState } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "I'm a Software Engineer.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        index = 0;
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      {/* Background glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] gradient-purple-radial opacity-50" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Avatar */}
          <div className="relative fade-in-left">
            <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 border border-primary/30 flex items-center justify-center relative">
              <div className="absolute inset-4 rounded-full bg-card border border-primary/20 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center">
                  <span className="text-6xl lg:text-8xl">👨‍💻</span>
                </div>
              </div>
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full border border-primary/50 animate-pulse" />
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left flex-1 max-w-2xl">
            <p className="text-muted-foreground text-sm md:text-base mb-2 fade-in-up delay-100">
              Hello —
            </p>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-space font-medium text-foreground mb-2 fade-in-up delay-200">
              A Designer who
            </h2>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-space font-medium mb-6 fade-in-up delay-300">
              Judges a book by its{" "}
              <span className="text-primary neon-glow">Cover...</span>
            </h2>

            <div className="mb-4 fade-in-up delay-400">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-space font-bold text-foreground">
                {displayText}
                <span className="typing-cursor text-primary" />
              </h1>
            </div>

            <p className="text-muted-foreground text-sm md:text-base mb-8 fade-in-up delay-500">
              Currently, I'm a Software Engineer at{" "}
              <span className="text-primary neon-glow-sm">Facebook</span>.
            </p>

            {/* Bio */}
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed fade-in-up delay-600">
              A self-taught UI/UX designer, functioning in the industry for 3+ years now. 
              I make meaningful and delightful digital products that create an equilibrium 
              between user needs and business goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
