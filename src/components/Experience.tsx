import { ExternalLink } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "BytechSol LLC",
    logo: "/logo.svg",
    linkedin: "https://www.linkedin.com/company/bytechsol/",
    title: "Full Stack Developer",
    type: "Full-time",
    duration: "Oct 2025 – Present",
    location: "Karachi East",
    mode: "On-site",
    skills: ["Software Infrastructure", "Node.js", "React"],
    delay: "delay-100",
  },
  {
    id: 2,
    company: "BytechSol LLC",
    logo: "/logo.svg",
    linkedin: "https://www.linkedin.com/company/bytechsol/",
    title: "React Developer",
    type: "Internship",
    duration: "Jul 2025 – Sep 2025",
    location: "Karachi",
    mode: "On-site",
    skills: ["React.js", "JavaScript", "Tailwind"],
    delay: "delay-200",
  },
  {
    id: 3,
    company: "XPACE TECHNOLOGIES",
    logo: "/xp.jpg",
    linkedin: "https://www.linkedin.com/company/xpace-technologies/",
    title: "Frontend Developer",
    type: "Internship",
    duration: "Aug 2024 – Sep 2024",
    location: "Karachi",
    mode: "On-site",
    skills: ["Frontend", "CSS", "UI Design"],
    delay: "delay-300",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-[#0a0a0a] overflow-hidden">

      {/* 1. Background Grid (Matches About Section) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* 2. Side Glow for Separation */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-purple-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              // CHANGED: Replaced bg-black with a dark purplish gradient
              className={`group relative p-6 rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-purple-950/30 border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 hover:translate-y-[-4px] fade-in-up ${exp.delay}`}
            >
              {/* Card Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">

                {/* Header: Logo & Role */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-4">
                    {/* Company Logo */}
                    <div className="w-12 h-12 rounded-lg overflow-hidden border border-zinc-700 group-hover:border-purple-500/50 transition-colors bg-white flex items-center justify-center">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Role Title */}
                    <div>
                      <h3 className="text-lg font-bold text-white leading-tight group-hover:text-purple-400 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm mt-1">
                        <a
                          href={exp.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="text-zinc-400 hover:text-white flex items-center gap-1 transition-colors hover:underline"
                        >
                          {exp.company}
                          <ExternalLink size={12} className="opacity-70" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details: Date & Type */}
                <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 mb-6 border-b border-zinc-800 pb-4">
                  <span className="bg-zinc-800 text-zinc-300 px-2 py-1 rounded">
                    {exp.type}
                  </span>
                  <span>{exp.duration}</span>
                </div>

                {/* Skills Tags (Pushed to bottom) */}
                <div className="mt-auto">
                   <p className="text-xs text-zinc-500 mb-2 uppercase tracking-wider font-semibold">Technologies</p>
                   <div className="flex flex-wrap gap-2">
                     {exp.skills.map((skill, i) => (
                       <span
                        key={i}
                        className="text-xs px-2 py-1 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20"
                       >
                         {skill}
                       </span>
                     ))}
                   </div>
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