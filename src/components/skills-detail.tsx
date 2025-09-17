import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowLeft, Code, Brain, Zap, Cpu, Database, Globe, Wrench, BookOpen, CheckCircle, Clock, Award } from "lucide-react";

interface SkillsDetailProps {
  onBack: () => void;
}

export function SkillsDetail({ onBack }: SkillsDetailProps) {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6 text-primary" />,
      skills: [
        { name: "Python", description: "Advanced ML/AI development, automation" },
        { name: "C/C++", description: "Embedded systems, real-time applications" },
        { name: "MATLAB", description: "Signal processing, algorithm development" },
        { name: "JavaScript/TypeScript", description: "Full-stack web development, Node.js" },
        { name: "Verilog/VHDL", description: "FPGA development, digital design" },
        { name: "Rust", description: "Systems programming, performance optimization" },
        { name: "Go", description: "Microservices, concurrent programming" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6 text-primary" />,
      skills: [
        { name: "TensorFlow/PyTorch", description: "Deep learning model development" },
        { name: "Computer Vision", description: "OpenCV, image processing, object detection" },
        { name: "Deep Learning", description: "CNN, RNN, Transformer architectures" },
        { name: "Reinforcement Learning", description: "Q-learning, policy gradients, multi-agent" },
        { name: "Natural Language Processing", description: "BERT, GPT, text analysis" },
        { name: "MLOps", description: "Model deployment, monitoring, versioning" },
        { name: "Edge AI", description: "Model optimization, quantization" }
      ]
    },
    {
      title: "Electrical Engineering",
      icon: <Zap className="w-6 h-6 text-primary" />,
      skills: [
        { name: "Circuit Design", description: "Analog/digital circuit design" },
        { name: "PCB Layout", description: "Multi-layer boards, high-speed design" },
        { name: "Power Electronics", description: "Switching converters, motor drives" },
        { name: "Signal Processing", description: "DSP, filtering, spectral analysis" },
        { name: "EMI/EMC Design", description: "Compliance testing, shielding" },
        { name: "RF Engineering", description: "Antenna design, wireless systems" },
        { name: "FPGA Development", description: "Xilinx, Intel, hardware acceleration" }
      ]
    },
    {
      title: "Drone Technologies",
      icon: <Cpu className="w-6 h-6 text-primary" />,
      skills: [
        { name: "Flight Control Systems", description: "PID tuning, stability control" },
        { name: "Autonomous Navigation", description: "Path planning, obstacle avoidance" },
        { name: "ROS/ROS2", description: "Robotics middleware, distributed systems" },
        { name: "PX4/ArduPilot", description: "Open-source flight stacks" },
        { name: "SLAM", description: "Simultaneous localization and mapping" },
        { name: "Sensor Fusion", description: "IMU, GPS, camera integration" },
        { name: "Mission Planning", description: "Waypoint navigation, task automation" }
      ]
    },
    {
      title: "Development Tools & Frameworks",
      icon: <Wrench className="w-6 h-6 text-primary" />,
      skills: [
        { name: "Git/GitHub", description: "Version control, collaborative development" },
        { name: "Docker/Kubernetes", description: "Containerization, orchestration" },
        { name: "Linux/Unix", description: "System administration, scripting" },
        { name: "AWS/GCP", description: "Cloud computing, serverless" },
        { name: "CI/CD Pipelines", description: "Jenkins, GitHub Actions" },
        { name: "Altium Designer", description: "Professional PCB design" },
        { name: "SolidWorks", description: "Mechanical design, 3D modeling" }
      ]
    },
    {
      title: "Databases & Analytics",
      icon: <Database className="w-6 h-6 text-primary" />,
      skills: [
        { name: "SQL/PostgreSQL", description: "Database design, optimization" },
        { name: "MongoDB", description: "NoSQL, document databases" },
        { name: "Time Series DBs", description: "InfluxDB, sensor data storage" },
        { name: "Data Visualization", description: "Matplotlib, Plotly, D3.js" },
        { name: "Big Data Tools", description: "Apache Spark, Hadoop" }
      ]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-6 h-6 text-primary" />,
      skills: [
        { name: "React/Next.js", description: "Modern web applications" },
        { name: "Node.js", description: "Backend development, APIs" },
        { name: "REST/GraphQL APIs", description: "API design and development" },
        { name: "WebRTC", description: "Real-time communication" },
        { name: "WebGL", description: "3D graphics, visualization" }
      ]
    },
    {
      title: "Certifications & Standards",
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      skills: [
        { name: "FCC Part 107", status: "Licensed", description: "Commercial drone pilot license" },
        { name: "IPC Standards", status: "Obtained", description: "PCB design and manufacturing" },
        { name: "ISO 9001", status: "Training", description: "Quality management systems" },
        { name: "Agile/Scrum", description: "Project management methodologies" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/3 to-accent/5">
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
              <h1 className="text-2xl font-bold">Complete Skills Portfolio</h1>
              <p className="text-muted-foreground">Comprehensive overview of technical expertise and experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="border-primary/20 bg-gradient-to-br from-card via-card to-primary/5">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {category.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {category.skills.length} skills
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3 p-4 bg-white rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{skill.name}</h4>
                          {skill.status && (
                            <Badge 
                              variant={skill.status === "Licensed" ? "default" : skill.status === "Obtained" ? "secondary" : "outline"}
                              className={`text-xs mt-2 flex items-center gap-1 w-fit ${
                                skill.status === "Licensed" ? "bg-secondary text-white" :
                                skill.status === "Obtained" ? "bg-info text-white" :
                                "border-warning text-warning"
                              }`}
                            >
                              {skill.status === "Licensed" ? <Award className="w-3 h-3" /> :
                               skill.status === "Obtained" ? <CheckCircle className="w-3 h-3" /> :
                               <Clock className="w-3 h-3" />}
                              {skill.status}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="text-center border-l-4 border-l-primary bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Technical Skills</div>
            </CardContent>
          </Card>
          <Card className="text-center border-l-4 border-l-secondary bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-secondary">8</div>
              <div className="text-sm text-muted-foreground">Skill Categories</div>
            </CardContent>
          </Card>
          <Card className="text-center border-l-4 border-l-accent bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-accent">3</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}