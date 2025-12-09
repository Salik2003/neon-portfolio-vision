import { Mail, Instagram, Github } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Mail, href: "mailto:ibrahimmemon2001@gmail.com", label: "Email" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-space font-semibold text-foreground mb-6 fade-in-up">
            Contact
          </h2>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 fade-in-up delay-100">
            I'm currently looking for any new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </p>

          <a
            href="mailto:ibrahimmemon2001@gmail.com"
            className="inline-block text-primary hover:underline text-lg font-medium mb-12 neon-glow-sm fade-in-up delay-200"
          >
            ibrahimmemon2001@gmail.com
          </a>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 fade-in-up delay-300">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-card border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 hover-scale group transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:icon-glow transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-24">
        <div className="text-center border-t border-border/50 pt-8">
          <p className="text-muted-foreground text-sm">
            Designed & Built by{" "}
            <span className="text-primary">Ibrahim Memon</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
