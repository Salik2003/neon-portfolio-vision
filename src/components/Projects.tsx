import { useEffect, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import TiltCard from "./TiltCard"; // Ensure this path is correct based on where you saved Step 2

const projects = [
  {
    title: "Spotify Data Visualizer",
    description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.",
    image: "https://sm.pcmag.com/t/pcmag_me/review/s/spotify/spotify_wc7u.1200.png",
    technologies: ["React", "Node.js", "Spotify API", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
    reverse: false,
  },
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js. Includes product listings, a shopping cart, user authentication, and secure payment integration with Stripe.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITiUDIxOHORHKvxMsniK1j8Bwfpmd0sLROg&s",
    technologies: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    liveLink: "#",
    githubLink: "#",
    reverse: true,
  },
  {
    title: "AI Image Generator",
    description: "An application that uses OpenAI's DALL-E API to generate images from text descriptions. Users can create an account to save their generated images and share them.",
    image: "https://www.zabala.eu/wp-content/uploads/2023/11/Artificial-intelligente-and-consultancy-1200x675.jpg",
    technologies: ["React", "OpenAI API", "MongoDB", "Express"],
    liveLink: "#",
    githubLink: "#",
    reverse: false,
  },
];

const Projects = () => {
  // Logic to trigger animations on scroll
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section) => observerRef.current.observe(section));

    return () => observerRef.current.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 relative bg-[#0a0a0a] overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-24 text-center md:text-left fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full md:mx-0 mx-auto" />
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                project.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-12 lg:gap-20 fade-in-section`}
            >
              
              {/* 3D Tilt Image Card */}
              <div className="flex-1 w-full perspective-1000">
                <TiltCard className="w-full">
                  <div className="relative rounded-2xl overflow-hidden border border-zinc-800 group shadow-2xl shadow-purple-900/20">
                    <div className="aspect-video bg-zinc-900 flex items-center justify-center overflow-hidden relative">
                       <img 
                         src={project.image} 
                         alt={project.title}
                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                       />
                       <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                    </div>
                  </div>
                </TiltCard>
              </div>

              {/* Project Info */}
              <div className="flex-1 w-full">
                <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 group/card hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10">
                  
                  <p className="text-purple-400 text-sm font-mono tracking-wider mb-3 uppercase">Featured Project</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{project.title}</h3>
                  
                  <div className="p-4 rounded-xl bg-zinc-950/50 border border-zinc-800 mb-6 group-hover/card:border-purple-500/20 transition-colors">
                    <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-xs font-mono px-3 py-1 rounded-full bg-purple-900/20 text-purple-300 border border-purple-700/30">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a href={project.liveLink} className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 hover:scale-105 transition-all shadow-lg shadow-purple-600/20">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                    <a href={project.githubLink} className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-700 text-gray-300 hover:text-white hover:border-white hover:bg-white/5 transition-all">
                      <Github size={18} /> Code
                    </a>
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

export default Projects;