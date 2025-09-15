import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A passionate developer on a journey to create impactful digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Profile Summary */}
            <div className="space-y-6 fade-in-up">
              <Card className="glass-card hover:shadow-card transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Profile Summary</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a passionate frontend developer with a strong foundation in React, JavaScript, 
                    and Tailwind CSS. I have hands-on experience building MERN stack projects, including 
                    an e-commerce platform with features like user authentication, product management, 
                    and search functionality.
                  </p>
                  <br />
                  <p className="text-muted-foreground leading-relaxed">
                    I'd like to keep learning, growing, and contributing as a member of a team where 
                    my skills may come together for great experiences. I look forward to an opportunity 
                    where I can grow in skill and make impact as a developer.
                  </p>
                </CardContent>
              </Card>

              {/* Languages */}
              <Card className="glass-card hover:shadow-card transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Languages</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-foreground">English</span>
                      <Badge variant="secondary">Intermediate</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-foreground">Tamil</span>
                      <Badge variant="secondary">Fluent</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Education & Details */}
            <div className="space-y-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
              
              {/* Education */}
              <Card className="glass-card hover:shadow-card transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-primary">Education</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">B.Tech Computer Science Engineering</h4>
                      <p className="text-muted-foreground">Dr.MGR University, Chennai</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>2022 - 2026</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>Chennai</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="mt-2 border-primary/30 text-primary">
                        Currently 4th Year
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="glass-card hover:shadow-card transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Contact Information</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>5/94 Dwaraka nagar, Manali new Town, Chennai-600103</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Memberships */}
              <Card className="glass-card hover:shadow-card transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-secondary/20 rounded-lg">
                      <Award className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-primary">Memberships</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-foreground font-medium">National Society for Professional Education</p>
                    </div>
                    <div>
                      <p className="text-foreground font-medium">Institute For Educational Research and Publication</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;