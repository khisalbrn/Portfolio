import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

interface SkillsProps {
  onViewAllSkills: () => void;
}

export function Skills({ onViewAllSkills }: SkillsProps) {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      color: "primary",
      skills: [
        { name: "Python", description: "Advanced algorithms & AI development" },
        { name: "C/C++", description: "Embedded systems & performance optimization" },
        { name: "MATLAB", description: "Signal processing & mathematical modeling" },
        { name: "JavaScript", description: "Full-stack web development" },
        { name: "Verilog/VHDL", description: "FPGA design & hardware description" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: "🧠",
      color: "secondary",
      skills: [
        { name: "TensorFlow/PyTorch", description: "Deep learning framework mastery" },
        { name: "Computer Vision", description: "Image processing & object detection" },
        { name: "Deep Learning", description: "Neural networks & model optimization" },
        { name: "Reinforcement Learning", description: "Autonomous decision making" },
        { name: "Natural Language Processing", description: "Text analysis & language models" }
      ]
    },
    {
      title: "Electrical Engineering",
      icon: "⚡",
      color: "accent",
      skills: [
        { name: "Circuit Design", description: "Analog & digital circuit architecture" },
        { name: "PCB Layout", description: "Multi-layer board design & routing" },
        { name: "Power Electronics", description: "Switching power supplies & converters" },
        { name: "Signal Processing", description: "DSP algorithms & filter design" },
        { name: "EMI/EMC Design", description: "Electromagnetic compatibility" }
      ]
    },
    {
      title: "Drone Technologies",
      icon: "🚁",
      color: "info",
      skills: [
        { name: "Flight Control Systems", description: "Autopilot design & tuning" },
        { name: "Autonomous Navigation", description: "Path planning & obstacle avoidance" },
        { name: "ROS/ROS2", description: "Robotic middleware & communication" },
        { name: "PX4/ArduPilot", description: "Open-source flight stack development" },
        { name: "SLAM", description: "Simultaneous localization & mapping" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning electrical engineering, AI, and autonomous systems
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-l-4 border-l-primary bg-white shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-xl font-bold">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${
                    category.color === 'primary' ? 'from-primary to-primary-soft' :
                    category.color === 'secondary' ? 'from-secondary to-secondary-soft' :
                    category.color === 'accent' ? 'from-accent to-accent-soft' :
                    'from-info to-purple-accent'
                  }`}>
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    {category.title}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group p-4 rounded-xl bg-gradient-to-r from-muted/30 to-background border border-border/50 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-lg">
                        {skill.name}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            onClick={onViewAllSkills}
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary-deep text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            size="lg"
          >
            <ExternalLink className="mr-2" size={20} />
            View Complete Skills Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}