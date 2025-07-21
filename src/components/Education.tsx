import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "University Name",
      location: "City, Country",
      period: "2022 - 2026",
      status: "Current",
      description: "Focus on software development, database management, and system analysis",
      achievements: ["Dean's List", "Programming Excellence Award", "Web Development Certificate"]
    },
    {
      degree: "Senior High School - ICT Strand",
      institution: "Previous School Name",
      location: "City, Country", 
      period: "2020 - 2022",
      status: "Completed",
      description: "Specialized in Information and Communications Technology",
      achievements: ["With Honors", "Best Capstone Project", "Computer Programming Competition Winner"]
    }
  ];

  const certifications = [
    "Responsive Web Design - freeCodeCamp",
    "JavaScript Algorithms and Data Structures",
    "Front End Development Libraries",
    "APIs and Microservices"
  ];

  return (
    <section id="education" className="py-20 px-6 bg-light-green">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My academic journey and continuous learning through various certifications and courses
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {educationData.map((edu, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h3>
                    <p className="text-lg text-primary-blue font-medium">{edu.institution}</p>
                  </div>
                  <Badge 
                    variant={edu.status === "Current" ? "default" : "secondary"}
                    className={edu.status === "Current" ? "bg-primary-green text-white" : "bg-muted text-foreground"}
                  >
                    {edu.status}
                  </Badge>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {edu.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {edu.location}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{edu.description}</p>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <Badge key={achIndex} variant="outline" className="text-xs">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-soft">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Online Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-light-blue rounded-lg">
                <div className="w-2 h-2 bg-primary-blue rounded-full flex-shrink-0"></div>
                <span className="text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;