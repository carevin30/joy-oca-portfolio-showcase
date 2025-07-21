import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "may.oca@email.com",
      href: "mailto:may.oca@email.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+63 XXX XXX XXXX",
      href: "tel:+63XXXXXXXXX"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Philippines",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      href: "#",
      color: "hover:text-foreground"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn", 
      href: "#",
      color: "hover:text-primary-blue"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      href: "#",
      color: "hover:text-primary-green"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-medium">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      First Name
                    </label>
                    <Input placeholder="Your first name" className="border-border focus:ring-primary" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Last Name
                    </label>
                    <Input placeholder="Your last name" className="border-border focus:ring-primary" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input type="email" placeholder="your.email@example.com" className="border-border focus:ring-primary" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Subject
                  </label>
                  <Input placeholder="What's this about?" className="border-border focus:ring-primary" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project or just say hello!"
                    rows={5}
                    className="border-border focus:ring-primary resize-none"
                  />
                </div>
                <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300" size="lg">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 p-4 bg-light-blue rounded-lg hover:bg-primary-blue hover:text-white transition-all duration-300 group"
                  >
                    <div className="text-primary-blue group-hover:text-white">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground group-hover:text-white/80">
                        {item.label}
                      </p>
                      <p className="font-medium text-foreground group-hover:text-white">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-3 bg-light-purple rounded-lg text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-medium`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-accent p-6 rounded-xl">
              <h4 className="text-lg font-semibold mb-2 text-foreground">Let's Collaborate!</h4>
              <p className="text-muted-foreground mb-4">
                I'm always excited to work on new projects and meet fellow developers. 
                Whether you have a project in mind or just want to connect, feel free to reach out!
              </p>
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-primary-green rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-primary-blue rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-primary-purple rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;