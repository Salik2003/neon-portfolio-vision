import { 
  Figma, 
  Code2, 
  Palette, 
  Layout, 
  Smartphone,
  Globe,
  Database,
  GitBranch,
  Zap,
  Box
} from "lucide-react";

const skills = [
  { icon: Figma, name: "Figma" },
  { icon: Code2, name: "React" },
  { icon: Palette, name: "Design" },
  { icon: Layout, name: "UI/UX" },
  { icon: Smartphone, name: "Mobile" },
  { icon: Globe, name: "Web" },
  { icon: Database, name: "Backend" },
  { icon: GitBranch, name: "Git" },
  { icon: Zap, name: "Fast" },
  { icon: Box, name: "3D" },
];

const Skills = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            I'm currently looking to join a{" "}
            <span className="text-primary neon-glow-sm">cross-functional</span> team
            that values improving people's lives through accessible design
          </p>
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
            const mdRadius = index % 2 === 0 ? 180 : 240;
            
            return (
              <div
                key={skill.name}
                className="absolute transition-all duration-500"
                style={{
                  transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
                }}
              >
                <div 
                  className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-card border border-primary/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer float group"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <skill.icon className="w-6 h-6 text-primary/80 group-hover:text-primary group-hover:icon-glow transition-all duration-300" />
                </div>
              </div>
            );
          })}

          {/* Static positioned icons for mobile fallback */}
          <div className="md:hidden grid grid-cols-5 gap-4 absolute -bottom-20 left-0 right-0">
            {skills.slice(0, 10).map((skill, index) => (
              <div
                key={`mobile-${skill.name}`}
                className="w-12 h-12 rounded-xl bg-card border border-primary/30 flex items-center justify-center mx-auto float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <skill.icon className="w-5 h-5 text-primary/80" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
