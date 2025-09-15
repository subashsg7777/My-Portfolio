import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ShoppingCart, Gavel, Calendar, Star } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "G_MART",
      subtitle: "React Based E-Commerce Site",
      description: "Built a full-stack e-commerce platform using the MERN stack, allowing users to add products, search by name, and manage their carts with a smooth and responsive UI. Implemented key features like user authentication, product reviews with star ratings, and category-based filtering, making the shopping experience more intuitive and user-friendly.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "TailwindCSS", "JWT Auth"],
      status: "2024 - Present",
      icon: <ShoppingCart className="w-6 h-6" />,
      color: "primary",
      features: [
        "User Authentication",
        "Product Management",
        "Shopping Cart",
        "Search Functionality",
        "Product Reviews",
        "Star Ratings",
        "Category Filtering"
      ]
    },
    {
      title: "SERVIFY",
      subtitle: "MERN Based Auction Site",
      description: "Developed and contributed to 'Servify,' a MERN-based bidding platform that connects clients with skilled professionals through real-time bidding, automated notifications. Implemented key features such as user authentication, project posting, real-time bidding, OTP verification, and email notifications.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Socket.io", "OTP", "Email API"],
      status: "2025 - Present",
      icon: <Gavel className="w-6 h-6" />,
      color: "secondary",
      features: [
        "Real-time Bidding",
        "User Authentication", 
        "Project Posting",
        "OTP Verification",
        "Email Notifications",
        "Professional Matching",
        "Automated Notifications"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real-world applications built with modern technologies
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="glass-card hover:shadow-card transition-all duration-300 fade-in-up overflow-hidden group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  
                  {/* Project Content */}
                  <div className="p-8 lg:p-12">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 rounded-lg bg-${project.color}/20`}>
                          <div className={`text-${project.color}`}>
                            {project.icon}
                          </div>
                        </div>
                        <div>
                          <CardTitle className="text-2xl lg:text-3xl font-bold">
                            {project.title}
                          </CardTitle>
                          <p className="text-muted-foreground mt-1">{project.subtitle}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <Badge variant="outline" className="border-primary/30 text-primary">
                          {project.status}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="p-0">
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="secondary"
                              className="bg-muted/50 hover:bg-primary/20 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button variant="hero" className="group">
                          <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          Live Demo
                        </Button>
                        <Button variant="glow">
                          <Github className="w-4 h-4" />
                          Source Code
                        </Button>
                      </div>
                    </CardContent>
                  </div>

                  {/* Features List */}
                  <div className="bg-muted/30 p-8 lg:p-12 flex flex-col justify-center">
                    <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                      <Star className="w-5 h-5 text-primary" />
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, featureIndex) => (
                        <li 
                          key={feature}
                          className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors"
                          style={{ animationDelay: `${(index * 0.2) + (featureIndex * 0.1)}s` }}
                        >
                          <div className="w-2 h-2 bg-gradient-primary rounded-full flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-16 fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Card className="glass-card max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">More Projects Coming Soon</h3>
                <p className="text-muted-foreground mb-6">
                  I'm constantly working on new projects and experimenting with different technologies. 
                  Stay tuned for more exciting developments!
                </p>
                <Button variant="glow">
                  <Github className="w-4 h-4" />
                  View All on GitHub
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;