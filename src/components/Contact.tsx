import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bavagevinod604@gmail.com",
      href: "mailto:bavagevinod604@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6303608901",
      href: "tel:+916303608901",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/vinod-bavage-5375a8380",
      href: "https://linkedin.com/in/vinod-bavage-5375a8380",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/vinodbavage31",
      href: "https://github.com/vinodbavage31",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
            <p className="text-muted-foreground text-lg">
              Let's discuss how I can contribute to your next project
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              {contactInfo.map((item) => (
                <Card
                  key={item.label}
                  className="p-4 hover:shadow-[var(--shadow-soft)] transition-all duration-300 border-2 hover:border-primary/50"
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 bg-[image:var(--gradient-primary)] rounded-lg group-hover:scale-110 transition-transform">
                      <item.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <Card className="p-6 border-2 animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[image:var(--gradient-primary)] hover:shadow-[var(--shadow-glow)] transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
