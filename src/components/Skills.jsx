import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code2, 
  Database, 
  Palette, 
  Server, 
  Globe, 
  Wrench,
  Monitor,
  Smartphone
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Monitor className="w-6 h-6" />,
      color: "text-primary",
      skills: [
        { name: "React", level: 90, color: "bg-primary" },
        { name: "JavaScript", level: 85, color: "bg-primary" },
        { name: "TailwindCSS", level: 88, color: "bg-primary" },
        { name: "HTML/CSS", level: 92, color: "bg-primary" },
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      color: "text-secondary",
      skills: [
        { name: "Node.js", level: 75, color: "bg-secondary" },
        { name: "Express.js", level: 80, color: "bg-secondary" },
        { name: "MongoDB", level: 78, color: "bg-secondary" },
        { name: "Python", level: 70, color: "bg-secondary" },
      ]
    },
    {
      title: "Tools & Others",
      icon: <Wrench className="w-6 h-6" />,
      color: "text-accent",
      skills: [
        { name: "Git/GitHub", level: 85, color: "bg-accent" },
        { name: "Network Management", level: 75, color: "bg-accent" },
        { name: "Problem Solving", level: 88, color: "bg-accent" },
        { name: "Team Collaboration", level: 90, color: "bg-accent" },
      ]
    }
  ];

  const technologies = [
    "React", "JavaScript", "TypeScript", "Node.js", "Express.js", 
    "MongoDB", "TailwindCSS", "Python", "Git", "GitHub", 
    "HTML5", "CSS3", "REST APIs", "JWT Auth", "Responsive Design"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Categories */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title} 
                className="glass-card hover:shadow-card transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2 rounded-lg ${category.color.replace('text-', 'bg-')}/20`}>
                      <div className={category.color}>
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technology Stack */}
          <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Card className="glass-card">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Technology Stack</h3>
                  <p className="text-muted-foreground">
                    Technologies I work with on a regular basis
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3 justify-center">
                  {technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="px-4 py-2 text-sm font-medium bg-muted/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Learning Journey */}
          <div className="mt-16 text-center fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Card className="glass-card max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">Continuous Learning</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I'm constantly exploring new technologies and best practices. Currently deepening 
                  my knowledge in advanced React patterns, microservices architecture, and cloud deployment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;