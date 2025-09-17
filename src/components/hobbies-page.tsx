import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowLeft, Camera, Mountain, Music, Book, Gamepad2, Palette, Wrench, Plane } from "lucide-react";

interface HobbiesPageProps {
  onBack: () => void;
}

export function HobbiesPage({ onBack }: HobbiesPageProps) {
  const hobbies = [
    {
      title: "Drone Racing & Aerial Photography",
      icon: <Plane className="w-6 h-6 text-primary" />,
      image: "https://images.unsplash.com/photo-1508444845599-5c89863b1c44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMHJhY2luZyUyMGZwdnxlbnwxfHx8fDE3NTcxNzg0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Beyond professional drone work, I'm passionate about FPV racing and capturing stunning aerial footage. Racing drones has taught me precision control and quick decision-making under pressure.",
      skills: ["FPV Flying", "Aerial Cinematography", "Custom Builds", "Racing Strategies"],
      achievements: ["Local Racing League Champion 2023", "500+ Hours FPV Flight Time", "Custom Racing Drone Designs"],
      timeCommitment: "10+ hours/week"
    },
    {
      title: "Electronics Tinkering & Maker Projects",
      icon: <Wrench className="w-6 h-6 text-primary" />,
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMHRpbmtlcmluZyUyMG1ha2VyJTIwcHJvamVjdHN8ZW58MXx8fHwxNzU3MTc4NDQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Love building random gadgets and automation projects for home and friends. From smart home devices to robotic pets, I enjoy turning wild ideas into working prototypes.",
      skills: ["Arduino/Raspberry Pi", "Home Automation", "3D Printing", "IoT Development"],
      achievements: ["Smart Mirror v3.0", "Automated Plant Watering System", "Custom LED Art Installations"],
      timeCommitment: "8+ hours/week"
    },
    {
      title: "Photography & Digital Art",
      icon: <Camera className="w-6 h-6 text-primary" />,
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMGNhbWVyYSUyMGFydGlzdGljfGVufDF8fHx8MTc1NzE3ODQ0MHww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Capturing the world through both traditional and computational photography. I love experimenting with long exposures, macro photography, and creating digital art that blends technology with creativity.",
      skills: ["Portrait Photography", "Landscape Photography", "Photo Editing", "Digital Art"],
      achievements: ["Photography Exhibition Participant", "1000+ Instagram Followers", "Freelance Photo Work"],
      timeCommitment: "6+ hours/week"
    },
    {
      title: "Rock Climbing & Mountaineering",
      icon: <Mountain className="w-6 h-6 text-primary" />,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlciUyMHJvY2slMjBjbGltYmluZyUyMG1vdW50YWluZWVyaW5nfGVufDF8fHx8MTc1NzE3ODQ0MHww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Rock climbing has taught me problem-solving under pressure and systematic thinking - skills that directly translate to engineering challenges. Plus, it's a great way to disconnect from screens!",
      skills: ["Sport Climbing", "Bouldering", "Route Finding", "Risk Assessment"],
      achievements: ["5.11a Lead Climbing", "Multi-pitch Alpine Routes", "Climbing Mentor to 10+ People"],
      timeCommitment: "12+ hours/week"
    },
    {
      title: "Music Production & Sound Design",
      icon: <Music className="w-6 h-6 text-primary" />,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y3Rpb24lMjBzdHVkaW8lMjBzb3VuZCUyMGRlc2lnbnxlbnwxfHx8fDE3NTcxNzg0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Creating electronic music and sound design combines my love for technology with artistic expression. The precision required in mixing mirrors the attention to detail needed in engineering.",
      skills: ["Electronic Music Production", "Sound Synthesis", "Audio Engineering", "Live Performance"],
      achievements: ["Released 2 EPs on Spotify", "Local DJ Performances", "Custom Audio Hardware Builds"],
      timeCommitment: "5+ hours/week"
    },
    {
      title: "Gaming & Competitive Esports",
      icon: <Gamepad2 className="w-6 h-6 text-primary" />,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBlc3BvcnRzJTIwY29tcGV0aXRpdmV8ZW58MXx8fHwxNzU3MTc4NDQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Strategic gaming has sharpened my analytical thinking and quick decision-making abilities. I particularly enjoy games that require resource management and long-term planning.",
      skills: ["Strategic Thinking", "Team Coordination", "Quick Decision Making", "Performance Analysis"],
      achievements: ["Diamond Rank in Competitive Games", "Local Tournament Participant", "Gaming Community Leader"],
      timeCommitment: "8+ hours/week"
    },
    {
      title: "Science Fiction & Technical Reading",
      icon: <Book className="w-6 h-6 text-primary" />,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwZmljdGlvbiUyMGJvb2tzJTIwcmVhZGluZ3xlbnwxfHx8fDE3NTcxNzg0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Voracious reader of sci-fi and technical literature. Science fiction often inspires my engineering projects, while technical reading keeps me updated on emerging technologies.",
      skills: ["Technical Research", "Critical Analysis", "Trend Identification", "Creative Inspiration"],
      achievements: ["50+ Books/Year Reading Goal", "Technical Paper Reviews", "Book Club Organizer"],
      timeCommitment: "7+ hours/week"
    },
    {
      title: "Digital Art & UI/UX Design",
      icon: <Palette className="w-6 h-6 text-primary" />,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwVUklMjBVWCUyMGRlc2lnbnxlbnwxfHx8fDE3NTcxNzg0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Creating digital interfaces and artwork helps me understand user experience from an engineer's perspective. This hobby directly improves my ability to design intuitive technical systems.",
      skills: ["UI/UX Design", "Digital Illustration", "User Research", "Design Systems"],
      achievements: ["Freelance Design Projects", "Open Source UI Contributions", "Design Challenge Winner"],
      timeCommitment: "4+ hours/week"
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
              <p className="text-muted-foreground">The passions that fuel creativity and balance in my engineering journey</p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="mb-8 border-primary/20 bg-gradient-to-br from-card to-accent/5">
          <CardContent className="pt-6">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-xl font-semibold mb-4 text-primary">Beyond the Engineering World</h2>
              <p className="text-muted-foreground leading-relaxed">
                My hobbies aren't just ways to unwind—they're integral to who I am as an engineer. From the precision required in 
                rock climbing to the creative problem-solving in music production, each pursuit brings unique perspectives that 
                enhance my technical work. These activities keep me balanced, inspired, and constantly learning new approaches to 
                challenges both in and out of the lab.
              </p>
            </div>
          </CardContent>
        </Card>

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