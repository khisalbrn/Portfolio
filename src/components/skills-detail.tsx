import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowLeft, Code, Brain, Zap, Cpu, Database, Globe, Wrench, BookOpen, CheckCircle, Clock, Award } from "lucide-react";

interface SkillsDetailProps {
  onBack: () => void;
}

export function SkillsDetail({ onBack }: SkillsDetailProps) {
  const skillCategories = [
    // ── Existing categories (enhanced) ──────────────────────────────────────────
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6 text-primary" />,
      skills: [
        { name: "Python", description: "Advanced ML/AI development, automation" },
        { name: "C", description: "Low-level programming, bare-metal/RTOS" },
        { name: "C++", description: "Embedded systems, real-time applications" },
        { name: "C#", description: ".NET apps, cross-platform tooling" },
        { name: "Java", description: "General purpose, Android ecosystem" },
        { name: "JavaScript/TypeScript", description: "Full-stack web, Node.js" },
        { name: "HTML / JSX / TSX", description: "Modern front-end development" },
        { name: ".NET Framework / MAUI", description: "Cross-platform app development" },
        { name: "MATLAB", description: "Modeling, control, data analysis" },
        { name: "Verilog/VHDL", description: "FPGA design, digital logic" },
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6 text-primary" />,
      skills: [
        { name: "TensorFlow / PyTorch", description: "Deep learning model dev" },
        { name: "Computer Vision", description: "OpenCV, image processing" },
        { name: "YOLOv8 / Roboflow", description: "Object detection pipelines" },
        { name: "Deep Learning", description: "CNNs, Transformers" },
        { name: "Reinforcement Learning", description: "Q-learning, policy gradients" },
        { name: "NLP", description: "BERT/GPT, text analysis" },
        { name: "Edge AI", description: "Quantization, optimization" },
        { name: "MLOps", description: "Deployment, monitoring, versioning" },
        { name: "Pixel→World Conversion", description: "X–Y to real-world mapping" }
      ]
    },
    {
      title: "Electrical Engineering",
      icon: <Zap className="w-6 h-6 text-primary" />,
      skills: [
        { name: "Circuit Design", description: "Analog/digital design" },
        { name: "PCB Layout", description: "High-speed, multi-layer (KiCad, Altium)" },
        { name: "Simulation", description: "LTspice, signal integrity" },
        { name: "FPGA Tooling", description: "Vivado; Basys 3 (Artix-7)" },
        { name: "Power Electronics", description: "Converters, motor drives" },
        { name: "Signal Processing", description: "Filters, DSP, spectral analysis" },
      ]
    },
    {
      title: "Drone Technologies",
      icon: <Cpu className="w-6 h-6 text-primary" />,
      skills: [
        { name: "Flight Control", description: "PID tuning, stability control" },
        { name: "Autonomous Navigation", description: "Path planning, avoidance" },
        { name: "Sensor Fusion", description: "IMU, GPS, camera integration" },
        { name: "PX4 / ArduPilot", description: "Open-source stacks" },
        { name: "Betaflight", description: "Racing/freestyle configuration" },
        { name: "Ground Control", description: "QGroundControl, Mission Planner" },
        { name: "Mission Planning", description: "Waypoints, task automation" },
        { name: "GPS Integration", description: "GNSS for autonomy" }
      ]
    },
    {
      title: "Development Tools & Frameworks",
      icon: <Wrench className="w-6 h-6 text-primary" />,
      skills: [
        { name: "Git / GitHub", description: "Version control, workflows" },
        { name: "CI/CD", description: "GitHub Actions, pipelines" },
        { name: "Linux/Unix", description: "Shell, sysadmin, scripting" },
        { name: "Docker / Kubernetes", description: "Containerization, orchestration" },
        { name: "React / Next.js", description: "Modern web apps" },
        { name: "Ionic / React Native", description: "Mobile & hybrid apps" },
        { name: "Electron", description: "Desktop cross-platform" },
        { name: "Vite / Tailwind CSS", description: "Tooling, styling" },
        { name: "Altium / KiCad", description: "PCB CAD toolchains" },
        { name: "SolidWorks", description: "3D modeling & mech design" }
      ]
    },
    {
      title: "Databases & Analytics",
      icon: <Database className="w-6 h-6 text-primary" />,
      skills: [
        { name: "SQL / PostgreSQL", description: "Schema design, tuning" },
        { name: "MongoDB", description: "Document databases" },
        { name: "Time-Series DBs", description: "InfluxDB for sensors" },
        { name: "Data Viz", description: "Matplotlib, Plotly, D3.js" },
      ]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-6 h-6 text-primary" />,
      skills: [
        { name: "Node.js", description: "APIs, services" },
        { name: "REST / GraphQL", description: "API design & integration" },
        { name: "WebRTC", description: "Real-time comms" },
        { name: "WebGL", description: "3D graphics" }
      ]
    },
    {
      title: "Certifications & Standards",
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      skills: [
        { name: "FAA Part 107", status: "Training", description: "Commercial drone pilot" },
        { name: "IPC/IEEE/NEC", status: "Working Knowledge", description: "Design & safety standards" },
      ]
    },

    // ── New categories added from your list ─────────────────────────────────────
    {
      title: "Embedded Systems & RTOS",
      icon: <Cpu className="w-6 h-6 text-primary" />,
      skills: [
        { name: "Microcontrollers", description: "Arduino, Raspberry Pi" },
        { name: "FPGA SoCs", description: "Artix-7 (Basys 3)" },
        { name: "RTOS Apps", description: "Real-time tasks for robotics" },
        { name: "Low-level Debugging", description: "ASM/C, interfaces, timing" },
        { name: "Power Management", description: "Sleep states, regulators" },
        { name: "Sensor Integration", description: "I2C/SPI/UART peripherals" }
      ]
    },
    {
      title: "Control Systems & Automation",
      icon: <Zap className="w-6 h-6 text-primary" />,
      skills: [
        { name: "Control Theory", description: "Feedback/loop stability" },
        { name: "PID Tuning", description: "Servos, BLDC, H-bridges" },
        { name: "Actuation", description: "Servo control, motor drivers" },
        { name: "MATLAB/Simulink", description: "Modeling & control design" }
      ]
    },
    {
      title: "Communications & Networking",
      icon: <Globe className="w-6 h-6 text-primary" />,
      skills: [
        { name: "Protocols", description: "TCP/UDP/IP, MAC basics" },
        { name: "Latency Analysis", description: "Timing, throughput, QoS" },
        { name: "Telemetry", description: "UAV links, ground stations" }
      ]
    },
    {
      title: "Power & Energy Systems",
      icon: <Zap className="w-6 h-6 text-primary" />,
      skills: [
        { name: "Photovoltaics (PV)", description: "Cells, MPPT, load matching" },
        { name: "Grid Integration", description: "Inverters, power quality" },
        { name: "Battery Systems", description: "Sizing, safety, BMS (basics)" }
      ]
    },
    {
      title: "Documentation & Productivity",
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      skills: [
        { name: "Technical Docs", description: "Specs, reports, test plans" },
        { name: "Office Suites", description: "Word/Docs, PowerPoint/Slides" },
        { name: "Data Sheets & CAD", description: "Excel/Sheets, Canva briefs" }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Wrench className="w-6 h-6 text-primary" />,
      skills: [
        { name: "Team Coordination", description: "Lab supervision, mentoring" },
        { name: "Planning & Iteration", description: "Test→learn→refine cycles" },
        { name: "Communication", description: "Clear, concise, visual" },
        { name: "Organization & Prioritization", description: "Fast-paced contexts" },
        { name: "Quality & Detail", description: "QA mindset, consistency" },
        { name: "Problem Solving", description: "Creative, critical thinking" },
        { name: "Adaptability", description: "Calm under changing needs" }
      ]
    },
    {
      title: "Spoken Languages",
      icon: <Globe className="w-6 h-6 text-primary" />,
      skills: [
        { name: "French", description: "Fluent (CLEP 80)" },
        { name: "English", description: "Fluent (TOEFL 117)" },
        { name: "Spanish", description: "Intermediate" }
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
        {/* <div className="mt-12 grid md:grid-cols-3 gap-6">
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
        </div> */}
      </div>
    </div>
  );
}