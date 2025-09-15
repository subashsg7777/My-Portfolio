import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            
            {/* Brand & Description */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold gradient-text">SUB.A</h3>
              <p className="text-muted-foreground leading-relaxed">
                Full-stack developer passionate about creating impactful 
                digital experiences with modern technologies.
              </p>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Get in Touch</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>subashsg7777@gmail.com</p>
                <p>+91 9342479768</p>
                <p>Chennai, Tamil Nadu</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              © {currentYear} Subasha. Made with <Heart className="w-4 h-4 text-red-500" /> using React & TailwindCSS
            </p>
            
            <Button 
              variant="ghost" 
              size="icon"
              onClick={scrollToTop}
              className="hover:text-primary"
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;