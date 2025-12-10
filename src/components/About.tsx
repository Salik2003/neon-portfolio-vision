import { Code2, Globe, Cpu, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Purple Orb (Left side - kept as is) */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* NEW: Greenish Orb (Moved to Top-Right) */}
      {/* Changed 'bottom-0' to 'top-0' */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-green-500 rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* LEFT COLUMN: The Text */}
          <div className="flex-1 text-gray-400 text-lg leading-relaxed space-y-6 fade-in-up delay-100">
            <p>
              As a <span className="text-white font-semibold">Full Stack Developer</span>, 
              I build web applications with a focus on both the front end and back end. 
              Most of my work revolves around creating clean, responsive, and user-friendly 
              interfaces that make complex ideas simple and engaging.
            </p>
            <p>
              I enjoy working with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-green-400 font-semibold">React, JavaScript, TypeScript</span>, 
              and modern UI frameworks like Bootstrap and Tailwind to bring designs to life. 
              Along the way, I’ve worked on API integrations, state management, and performance 
              optimization—basically making sure apps not only look good but also work efficiently.
            </p>
            <p>
              Outside of just coding, I like collaborating with teams, learning new tools, 
              and keeping up with the latest trends in web development. For me, building 
              applications isn’t just about writing code; it’s about creating experiences 
              that people enjoy using.
            </p>
          </div>

          {/* RIGHT COLUMN: Visual Highlights */}
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 fade-in-up delay-200">
            
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-purple-500/30 transition-colors group">
              <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                <Code2 className="text-purple-400" size={20} />
              </div>
              <h3 className="text-white font-semibold mb-2">Modern Tech</h3>
              <p className="text-sm text-gray-500">React, TypeScript, & Modern UI Frameworks</p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/30 transition-colors group">
              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                <Globe className="text-blue-400" size={20} />
              </div>
              <h3 className="text-white font-semibold mb-2">Full Stack</h3>
              <p className="text-sm text-gray-500">Seamless Frontend & Backend Integration</p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-pink-500/30 transition-colors group">
              <div className="w-10 h-10 bg-pink-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-pink-500/20 transition-colors">
                <Cpu className="text-pink-400" size={20} />
              </div>
              <h3 className="text-white font-semibold mb-2">Performance</h3>
              <p className="text-sm text-gray-500">Optimization & State Management</p>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-green-500/30 transition-colors group">
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                <Users className="text-green-400" size={20} />
              </div>
              <h3 className="text-white font-semibold mb-2">Collaboration</h3>
              <p className="text-sm text-gray-500">Teamwork & Continuous Learning</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;