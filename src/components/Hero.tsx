import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-accent px-6 py-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              May Liecel Joy Oca
            </h1>
            <h2 className="text-2xl lg:text-3xl text-muted-foreground font-medium">
              IT Student & Developer
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Passionate about creating innovative solutions through code. 
              Currently pursuing my degree in Information Technology with a focus on 
              web development and software engineering.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
            <Button variant="outline" size="lg" className="hover:bg-primary-blue hover:text-white transition-all duration-300">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </div>
          
          <div className="flex items-center gap-6 pt-4">
            <a href="#" className="text-muted-foreground hover:text-primary-blue transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary-purple transition-colors">
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="flex justify-center animate-slide-in">
          <div className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-medium animate-float">
              <img 
                src="/lovable-uploads/5b2d38f3-2508-4b10-a1a9-4a350bf87a9a.png"
                alt="May Liecel Joy Oca"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-primary rounded-full opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;