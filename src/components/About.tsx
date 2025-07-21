import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, Lightbulb, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Education",
      description: "Pursuing Bachelor's in Information Technology"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Development",
      description: "Full-stack web development enthusiast"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation",
      description: "Problem solver with creative solutions"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Goals",
      description: "Building impactful software applications"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a dedicated IT student with a passion for technology and innovation. 
            My journey in computer science has equipped me with strong analytical skills 
            and a deep understanding of modern development practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <Card key={index} className="border-0 bg-card shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4 text-white">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-light-blue rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">My Journey</h3>
              <p className="text-muted-foreground mb-4">
                Started my programming journey with curiosity about how websites work. 
                Now I'm developing full-stack applications and constantly learning new technologies 
                to stay current with industry trends.
              </p>
              <p className="text-muted-foreground">
                I believe in writing clean, efficient code and creating user experiences that 
                make a difference. Always eager to collaborate on exciting projects and 
                contribute to open-source communities.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-green rounded-full"></div>
                <span className="text-foreground">Problem-solving mindset</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                <span className="text-foreground">Continuous learning approach</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-purple rounded-full"></div>
                <span className="text-foreground">Team collaboration skills</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-green rounded-full"></div>
                <span className="text-foreground">Attention to detail</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;