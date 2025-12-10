import { Mail, Instagram, Github, Linkedin, Facebook, Download, Briefcase } from "lucide-react";

const socialLinks = [
  { 
    icon: Github, 
    href: "https://github.com/Salik2003", 
    label: "GitHub", 
    // Removed 'group-hover:' so colors are always visible
    color: "text-white", 
    bg: "bg-white/10",
    border: "border-white/20"
  },
  { 
    icon: Linkedin, 
    href: "https://linkedin.com", 
    label: "LinkedIn", 
    color: "text-[#0077b5]", 
    bg: "bg-[#0077b5]/10",
    border: "border-[#0077b5]/20"
  },
  { 
    icon: Briefcase, 
    href: "https://upwork.com", 
    label: "Upwork", 
    color: "text-[#14a800]", 
    bg: "bg-[#14a800]/10",
    border: "border-[#14a800]/20"
  },
  { 
    icon: Instagram, 
    href: "https://instagram.com", 
    label: "Instagram", 
    color: "text-[#E1306C]", 
    bg: "bg-[#E1306C]/10",
    border: "border-[#E1306C]/20"
  },
  { 
    icon: Facebook, 
    href: "https://facebook.com", 
    label: "Facebook", 
    color: "text-[#1877F2]", 
    bg: "bg-[#1877F2]/10",
    border: "border-[#1877F2]/20"
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative bg-[#0a0a0a] overflow-hidden">
      
      {/* 1. Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* 2. Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Main Card Content */}
        <div className="max-w-3xl mx-auto text-center">
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 fade-in-up tracking-tight">
            Let's work together.
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-10 fade-in-up delay-100">
            Creating user-friendly and delightful digital products is my passion. 
            If you have a project in mind or just want to say hi, feel free to reach out!
          </p>

          {/* Buttons Area */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 fade-in-up delay-200">
            {/* Download Resume Button */}
            <a
              href="/resume.pdf" // Replace with actual path
              download
              className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <Download size={18} />
              Download Resume
            </a>
            
            {/* Email Button */}
            <a
              href="mailto:salikhusnaq@gmail.com"
              className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-purple-500/50 transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <Mail size={18} />
              Say Hello
            </a>
          </div>

          {/* Social Links Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 fade-in-up delay-300">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                // UPDATED: Now applying colors directly (removed group-hover logic)
                className={`group w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110 ${social.bg} ${social.border}`}
                aria-label={social.label}
              >
                <social.icon className={`w-5 h-5 transition-colors duration-300 ${social.color}`} />
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            Designed & Built by 
            <span className="text-purple-400 font-medium">Salik Husnaq</span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;