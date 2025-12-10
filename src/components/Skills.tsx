const skills = [
  { name: "React", color: "#61DAFB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "JavaScript", color: "#F7DF1E", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", color: "#3178C6", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", color: "#339933", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "CSS", color: "#1572B6", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "HTML", color: "#E34F26", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "GitHub", color: "#ffffff", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Git", color: "#F05032", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Figma", color: "#F24E1E", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "MongoDB", color: "#47A248", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
];

const Skills = () => {
  return (
    <section className="py-24 relative bg-[#0a0a0a] overflow-hidden">
      
      {/* 1. Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* 2. DUAL GLOW EFFECTS */}
      {/* Left: Purple Glow (Classic Theme) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Right: Yellow Glow (New Accent) */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          {/* Divider: Gradient from Purple (Left) to Yellow (Right) */}
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-yellow-500 rounded-full mx-auto" />
        </div>

        {/* Orbiting Icons Container */}
        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
          
          {/* Center Element - Yellow/Purple Hybrid */}
          <div className="absolute w-24 h-24 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center z-10 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-400 font-bold text-3xl">I</span>
          </div>

          {/* Orbit rings - Neutral with slight glow */}
          <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-white/5" />
          <div className="absolute w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full border border-white/10" />

          {/* Orbiting Icons */}
          {skills.map((skill, index) => {
            const angle = (index * 360) / skills.length;
            const radius = index % 2 === 0 ? 150 : 200;
            
            return (
              <div
                key={skill.name}
                className="absolute transition-all duration-500 hidden md:block"
                style={{
                  transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
                }}
              >
                <div 
                  className="w-14 h-14 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center hover:bg-zinc-800 hover:border-yellow-500/50 transition-all duration-300 cursor-pointer float group relative"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    boxShadow: `0 0 20px ${skill.color}15`, 
                  }}
                  title={skill.name}
                >
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                    style={{ filter: skill.name === "GitHub" ? "invert(1)" : "none" }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden grid grid-cols-5 gap-4 mt-8">
          {skills.map((skill, index) => (
            <div
              key={`mobile-${skill.name}`}
              className="w-14 h-14 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center mx-auto float cursor-pointer hover:border-yellow-500/50 transition-all duration-300"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                boxShadow: `0 0 15px ${skill.color}15`,
              }}
              title={skill.name}
            >
              <img 
                src={skill.icon} 
                alt={skill.name}
                className="w-7 h-7"
                style={{ filter: skill.name === "GitHub" ? "invert(1)" : "none" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;