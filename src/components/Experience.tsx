import { Briefcase, Code, Layout } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    company: "BytechSol LLC",
    title: "Full Stack Developer",
    type: "Full-time",
    duration: "Oct 2025 – Present (3 mos)",
    location: "Karachi East District, Sindh, Pakistan",
    mode: "On-site",
    skills: "Software Infrastructure, Node.js, +7 skills",
    delay: "delay-100",
  },
  {
    icon: Code,
    company: "BytechSol LLC",
    title: "React Developer",
    type: "Internship",
    duration: "Jul 2025 – Sep 2025 (3 mos)",
    location: "Karachi, Sindh, Pakistan",
    mode: "On-site",
    skills: "React.js, JavaScript, +10 skills",
    delay: "delay-200",
  },
  {
    icon: Layout,
    company: "XPACE TECHNOLOGIES (Pvt) Ltd",
    title: "Frontend Developer",
    type: "Internship",
    duration: "Aug 2024 – Sep 2024 (2 mos)",
    location: "Karachi, Sindh, Pakistan",
    mode: "On-site",
    skills: "Front-End Development, CSS, +3 skills",
    delay: "delay-300",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-space font-semibold text-foreground mb-12 fade-in-up">
          Work Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group gradient-card rounded-2xl p-6 border border-primary/20 card-glow hover:card-glow-hover hover-scale cursor-pointer fade-in-up ${exp.delay}`}
            >
              <div className="flex flex-col gap-4">
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                  <exp.icon className="w-7 h-7 text-primary icon-glow" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                      {exp.type}
                    </span>
                    <span className="text-xs text-muted-foreground">{exp.mode}</span>
                  </div>
                  
                  <h3 className="text-lg font-space font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {exp.title}
                  </h3>
                  
                  <p className="text-primary text-sm font-medium mb-2">
                    {exp.company}
                  </p>
                  
                  <p className="text-muted-foreground text-xs mb-1">
                    {exp.duration}
                  </p>
                  
                  <p className="text-muted-foreground text-xs mb-3">
                    📍 {exp.location}
                  </p>
                  
                  <p className="text-muted-foreground text-xs">
                    <span className="text-foreground/70">Skills:</span> {exp.skills}
                  </p>
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
