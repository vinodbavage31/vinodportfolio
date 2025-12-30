import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/vinodbavage31",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/vinodbavage",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:bavagevinod604@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Vinod Bavage</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Data Scientist & ML Engineer passionate about building intelligent solutions 
              that solve real-world problems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-2.5 rounded-lg bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Vinod Bavage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;