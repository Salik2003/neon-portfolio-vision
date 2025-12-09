const projects = [
  {
    title: "Example Project",
    description:
      "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "/placeholder.svg",
    reverse: false,
  },
  {
    title: "Example Project",
    description:
      "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "/placeholder.svg",
    reverse: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-space font-semibold text-foreground mb-16 fade-in-up">
          Featured Projects
        </h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                project.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-8 lg:gap-16`}
            >
              {/* Project Image */}
              <div
                className={`flex-1 w-full fade-in-${
                  project.reverse ? "right" : "left"
                }`}
              >
                <div className="relative rounded-2xl overflow-hidden border border-primary/20 card-glow group">
                  <div className="aspect-video bg-gradient-to-br from-card to-secondary flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-background/50 rounded-lg border border-primary/10 flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">Project Preview</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Project Info Card */}
              <div
                className={`flex-1 w-full fade-in-${
                  project.reverse ? "left" : "right"
                }`}
              >
                <div className="gradient-card rounded-2xl p-8 border border-primary/20 card-glow hover:card-glow-hover transition-all duration-300">
                  <p className="text-primary text-sm font-medium mb-2 neon-glow-sm">
                    Featured Project
                  </p>
                  <h3 className="text-2xl font-space font-semibold text-foreground mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* Tech dots */}
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary pulse-glow" />
                    <div className="w-2 h-2 rounded-full bg-primary/60" />
                    <div className="w-2 h-2 rounded-full bg-primary/40" />
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
