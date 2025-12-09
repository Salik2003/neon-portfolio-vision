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
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-2xl md:text-3xl font-space font-semibold text-foreground mb-4">
            Skills & Technologies
          </h2>
        </div>

        {/* Orbiting Icons Container */}
        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
          {/* Center Element */}
          <div className="absolute w-24 h-24 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center z-10">
            <span className="text-primary font-space font-bold text-3xl neon-glow">I</span>
          </div>

          {/* Orbit rings */}
          <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-primary/10" />
          <div className="absolute w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full border border-primary/20" />

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
                  className="w-14 h-14 rounded-xl bg-card border border-primary/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer float group"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    boxShadow: `0 0 20px ${skill.color}30`,
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

        {/* Mobile/Tablet Grid Layout */}
        <div className="md:hidden grid grid-cols-5 gap-4 mt-8">
          {skills.map((skill, index) => (
            <div
              key={`mobile-${skill.name}`}
              className="w-14 h-14 rounded-xl bg-card border border-primary/30 flex items-center justify-center mx-auto float cursor-pointer hover:bg-primary/20 transition-all duration-300"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                boxShadow: `0 0 15px ${skill.color}30`,
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
