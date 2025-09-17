import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-accent/20 via-secondary/25 to-primary/10 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Interested in collaborating on AI, drone technology, or electrical engineering projects? Let's connect!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="hover:shadow-xl transition-all duration-300 border-primary/20 bg-gradient-to-br from-card to-accent/10">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Feel free to reach out through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>lebrunkhisalee@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+1 (806) 500-4785</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300 border-primary/20 bg-gradient-to-br from-card to-secondary/20">
              <CardHeader>
                <CardTitle>Connect Online</CardTitle>
                <CardDescription>Follow my work and connect professionally</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="https://www.linkedin.com/in/khisaleelebrun/" className="flex items-center space-x-3">
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn Profile</span>
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <Card className="hover:shadow-xl transition-all duration-300 border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>I'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              <form 
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const firstName = formData.get('first-name');
                  const lastName = formData.get('last-name');
                  const email = formData.get('email');
                  const subject = formData.get('subject');
                  const message = formData.get('message');
                  
                  const mailto = `mailto:lebrunkhisalee@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(`From: ${firstName} ${lastName} (${email})\n\n${message}`)}`;
                  window.location.href = mailto;
                }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" name="first-name" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" name="last-name" placeholder="Doe" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" placeholder="Project Collaboration Opportunity" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or collaboration idea..."
                    className="min-h-32"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary-deep text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}