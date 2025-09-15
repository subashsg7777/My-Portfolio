import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send,
  MessageSquare
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 9342479768",
      href: "tel:+919342479768",
      color: "primary"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "subashsg7777@gmail.com", 
      href: "mailto:subashsg7777@gmail.com",
      color: "secondary"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Chennai, Tamil Nadu",
      href: "#",
      color: "accent"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "#",
      color: "hover:text-foreground"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn", 
      href: "#",
      color: "hover:text-primary"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      href: "mailto:subashsg7777@gmail.com",
      color: "hover:text-secondary"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss opportunities, collaborations, or just have a tech chat!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8 fade-in-up">
              <Card className="glass-card">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold">Let's Connect</h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    I'm always interested in hearing about new opportunities, 
                    whether it's a freelance project, full-time position, or just 
                    a conversation about technology and development.
                  </p>

                  {/* Contact Methods */}
                  <div className="space-y-4 mb-8">
                    {contactInfo.map((contact) => (
                      <a
                        key={contact.label}
                        href={contact.href}
                        className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 group"
                      >
                        <div className={`p-2 bg-${contact.color}/20 rounded-lg group-hover:scale-110 transition-transform`}>
                          <div className={`text-${contact.color}`}>
                            {contact.icon}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{contact.label}</p>
                          <p className="font-medium text-foreground">{contact.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                    <div className="flex gap-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          className={`p-3 bg-muted/30 rounded-lg text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110`}
                          title={social.label}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Availability Status */}
              <Card className="glass-card">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <Badge variant="outline" className="border-green-500/30 text-green-400">
                      Available for Work
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">
                    Currently open to full-time opportunities and interesting freelance projects.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Card className="glass-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          First Name
                        </label>
                        <Input 
                          placeholder="Your first name"
                          className="glass-card border-border/30 focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Last Name
                        </label>
                        <Input 
                          placeholder="Your last name"
                          className="glass-card border-border/30 focus:border-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email
                      </label>
                      <Input 
                        type="email"
                        placeholder="your.email@example.com"
                        className="glass-card border-border/30 focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Subject
                      </label>
                      <Input 
                        placeholder="What's this about?"
                        className="glass-card border-border/30 focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Message
                      </label>
                      <Textarea 
                        placeholder="Tell me about your project or opportunity..."
                        rows={5}
                        className="glass-card border-border/30 focus:border-primary resize-none"
                      />
                    </div>

                    <Button variant="hero" size="lg" className="w-full group">
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;