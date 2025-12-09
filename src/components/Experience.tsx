import { Smartphone, Layers, Code, Palette } from "lucide-react";

const experiences = [
  {
    icon: Smartphone,
    title: "CIB on the Mobile",
    description: "Product design for a mobile banking app",
    delay: "delay-100",
  },
  {
    icon: Layers,
    title: "CIB on the Mobile",
    description: "Product design for a mobile banking app",
    delay: "delay-200",
  },
  {
    icon: Code,
    title: "CIB on the Mobile",
    description: "Product design for a mobile banking app",
    delay: "delay-300",
  },
  {
    icon: Palette,
    title: "CIB on the Mobile",
    description: "Product design for a mobile banking app",
    delay: "delay-400",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-space font-semibold text-foreground mb-12 fade-in-up">
          Work Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group gradient-card rounded-2xl p-6 border border-primary/20 card-glow hover:card-glow-hover hover-scale cursor-pointer fade-in-up ${exp.delay}`}
            >
              <div className="flex items-start gap-4">
                {/* 3D Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                  <exp.icon className="w-7 h-7 text-primary icon-glow" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-space font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {exp.description}
                  </p>
                  <button className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
                    Learn More
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
