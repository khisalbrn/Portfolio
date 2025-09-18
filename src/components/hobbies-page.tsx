import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowLeft, Footprints, Pin, Heart, Scissors, Waves, Droplet, Camera, Mountain, Music, Book, Gamepad2, Palette, Wrench, Plane } from "lucide-react";

interface HobbiesPageProps {
  onBack: () => void;
}

export function HobbiesPage({ onBack }: HobbiesPageProps) {
  const hobbies = [
    {
      title: "Running & Half-Marathon Training",
      icon: <Footprints className="w-6 h-6 text-primary" />,
      image: `${import.meta.env.BASE_URL}Photos/Running.jpg`,
      description: "I am currently training for a half marathon after recovering from a knee injury. ",
      skills: ["Endurance", "Discipline", "Injury-Smart Programming", "Recovery Protocols"],
      achievements: ["Consistent Mileage Post-Injury", "5K & 10K PRs", "Half-Marathon Training"],
      timeCommitment: "8–10 hours/week"
    },
    {
      title: "Embroidery",
      icon: <Pin className="w-6 h-6 text-primary" />,
      image: `${import.meta.env.BASE_URL}Photos/Embroidery.PNG`,
      description: "I love turning clothing into meaningful pieces with custom designs, it’s creative, and meditative.",
      skills: ["Pattern Transfer", "Stitch Techniques", "Color Selection", "Patience & Precision"],
      achievements: ["Custom Denim & Tees", "Gift Pieces", "Upcycled Wardrobe Details"],
      timeCommitment: "2–3 hours/week"
    },
    {
      title: "Yoga & Mobility",
      icon: <Heart className="w-6 h-6 text-primary" />,
      image: `${import.meta.env.BASE_URL}Photos/Yoga.jpg`,
      description: "Yoga pairs perfectly with running, prevents injuries, and clears my mind. It’s as much about focus as it is about flexibility.",
      skills: ["Mobility", "Breathwork", "Balance", "Mindfulness"],
      achievements: ["Daily Flows", "Integrated Pre/Post Run Practices", "Family Tradition"],
      timeCommitment: "5+ hours/week"
    },
    {
      title: "Reading",
      icon: <Book className="w-6 h-6 text-primary" />,
      image: `${import.meta.env.BASE_URL}Photos/Reading.PNG`,
      description: "I’m a constant reader, from science fiction that sparks imagination to technical books that sharpen my engineering skills. Reading fuels both my creativity and curiosity.",
      skills: ["Critical Thinking", "Research", "Trend Awareness", "Creative Inspiration"],
      achievements: ["50+ Books/Year", "Technical Paper Reviews", "Active Book Club Member"],
      timeCommitment: "7+ hours/week"
    },
    {
      title: "Crochet",
      icon: <Scissors className="w-6 h-6 text-primary" />,
      image: `${import.meta.env.BASE_URL}Photos/Crochet.jpg`,
      description: "Crochet lets me slow down and create something tangible. I enjoy making cozy wearables and gifts for friends—it’s hands-on creativity that brings comfort and joy.",
      skills: ["Pattern Reading", "Handcrafting", "Design Creativity", "Attention to Detail"],
      achievements: ["Handmade Scarves & Tops", "Gift Projects", "Experimenting with Patterns"],
      timeCommitment: "3–4 hours/week"
    },
    {
      title: "Painting & Drawing",
      icon: <Palette className="w-6 h-6 text-primary" />,
      image: `${import.meta.env.BASE_URL}Photos/Watercolor.PNG`,
      description: "Painting and drawing give me a way to express ideas visually and unwind.",
      skills: ["Sketching", "Color Theory", "Creative Expression", "Observation"],
      achievements: ["Personal Art Collection", "Custom Gifts", "Experimentation with Mediums"],
      timeCommitment: "4–5 hours/week"
    },
    {
      title: "Surfing & Ocean Sports",
      icon: <Waves className="w-6 h-6 text-primary" />,
      image: `${import.meta.env.BASE_URL}Photos/Surf.jpg`,
      description: "I have been surfing since childhood and now I love to surf when I can or go to artificial waves like the one in Waco, TX.",
      skills: ["Balance", "Wave Reading", "Focus", "Resilience"],
      achievements: ["Consistent Surf Sessions", "Improved Wave Timing", "Ocean Fitness"],
      timeCommitment: "6+ hours/week"
    },
    {
      title: "Swimming",
      icon: <Droplet className="w-6 h-6 text-primary" />,
      image: `${import.meta.env.BASE_URL}Photos/Swim.PNG`,
      description: "I picked up swimming to complement my running and improve overall fitness. It’s a low-impact way to build endurance and strength while giving my joints a break.",
      skills: ["Endurance", "Breathing Technique", "Full-Body Strength", "Mental Reset"],
      achievements: ["Consistent Training", "Cross-Training for Running", "Improved Speed & Form"],
      timeCommitment: "1-3 hours/week"
    }

  ];

  const personalValues = [
    "Lifelong Learning",
    "Creative Problem Solving",
    "Work-Life Balance", 
    "Community Building",
    "Environmental Sustainability",
    "Innovation & Experimentation"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/3 to-primary/5">
      {/* Header */}
      <div className="bg-background/80 backdrop-blur-md border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 py-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="text-primary hover:text-accent hover:bg-primary/10 transition-all duration-300"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Portfolio
            </Button>
            <div className="flex-1">
              <h1 className="text-2xl font-bold">Personal Interests & Hobbies</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        

        {/* Hobbies Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {hobbies.map((hobby, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-primary/20 bg-gradient-to-br from-card to-primary/3">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback
                  src={hobby.image}
                  alt={hobby.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 bg-primary/20 backdrop-blur-sm rounded-lg">
                      {hobby.icon}
                    </div>
                    <Badge variant="secondary" className="bg-background/20 backdrop-blur-sm text-foreground">
                      {hobby.timeCommitment}
                    </Badge>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{hobby.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {hobby.description}
                </p>
                
                <div>
                  <h4 className="font-medium text-sm mb-2 text-primary">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {hobby.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs border-primary/30 text-primary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-sm mb-2 text-accent">Notable Achievements:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {hobby.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Personal Values */}
        <Card className="border-primary/20 bg-gradient-to-br from-card to-accent/5">
          <CardHeader>
            <CardTitle className="text-center">Personal Values & Philosophy</CardTitle>
            <p className="text-center text-muted-foreground">The principles that guide both my personal and professional life</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {personalValues.map((value, index) => (
                <div key={index} className="text-center p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="font-medium text-primary">{value}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                These values shape how I approach engineering challenges, collaborate with teams, and contribute to the 
                broader tech community. I believe that well-rounded engineers bring diverse perspectives that lead to 
                more innovative and human-centered solutions.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}