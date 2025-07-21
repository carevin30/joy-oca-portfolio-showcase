import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "bg-light-blue border-primary-blue",
      skills: [
        "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Vue.js", 
        "Tailwind CSS", "Bootstrap", "Responsive Design"
      ]
    },
    {
      title: "Backend",
      color: "bg-light-green border-primary-green",
      skills: [
        "Node.js", "Express.js", "Python", "PHP", "MySQL", "PostgreSQL", 
        "MongoDB", "REST APIs", "GraphQL"
      ]
    },
    {
      title: "Tools & Technologies",
      color: "bg-light-purple border-primary-purple",
      skills: [
        "Git", "GitHub", "VS Code", "Docker", "AWS", "Firebase", 
        "Webpack", "npm", "Postman"
      ]
    },
    {
      title: "Currently Learning",
      color: "bg-gradient-accent border-primary",
      skills: [
        "Next.js", "React Native", "Machine Learning", "DevOps", 
        "Kubernetes", "Microservices"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`${category.color} border-2 shadow-soft hover:shadow-medium transition-all duration-300`}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-white/80 text-foreground hover:bg-white transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-card rounded-full px-8 py-4 shadow-soft">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary-green rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Always learning</span>
            </div>
            <div className="w-px h-6 bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary-blue rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Open to new challenges</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;