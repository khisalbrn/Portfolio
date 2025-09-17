import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Filter } from "lucide-react";
import { PageState } from "../App";
import { useState } from "react";

interface ProjectsProps {
  onProjectClick: (page: PageState, project: any) => void;
}

export function Projects({ onProjectClick }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const projects = [
    {
      id: 1,
      title: "AI-Powered Autonomous Drone",
      description: "Developed a fully autonomous drone system using computer vision and machine learning for real-time obstacle avoidance and path planning.",
      fullDescription: "This project involved designing and implementing a complete autonomous drone platform capable of real-time navigation in complex environments. The system integrates computer vision algorithms with deep learning models to achieve 95% obstacle detection accuracy. Key innovations include adaptive path planning, dynamic risk assessment, and real-time decision making in GPS-denied environments.",
      image: "https://images.unsplash.com/photo-1738748140319-b07cd28c41d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMHF1YWRjb3B0ZXIlMjBmbHlpbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NzA5NjIyMXww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Python", "TensorFlow", "OpenCV", "ROS", "C++"],
      teammates: ["Sarah Chen - AI Specialist", "Marcus Rodriguez - Flight Systems"],
      demo: "#",
      duration: "8 months",
      challenges: ["Real-time processing constraints", "Weather adaptability", "Battery optimization"],
      results: ["95% obstacle detection accuracy", "40% improved battery efficiency", "Successfully tested in 15+ environments"],
      category: "ai"
    },
    {
      id: 2,
      title: "Smart Circuit Board Design",
      description: "Designed and manufactured custom PCBs for drone flight controllers with advanced sensor integration and power management systems.",
      fullDescription: "Custom PCB development project focused on creating highly integrated flight controller boards for professional drone applications. The design features advanced power management, multi-layer routing optimization, and comprehensive EMI/EMC compliance. The board integrates 15+ sensors while maintaining a compact form factor of 45mm x 35mm.",
      image: "https://images.unsplash.com/photo-1727119313390-9e7737d8fc1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwZW5naW5lZXJpbmclMjBjaXJjdWl0JTIwYm9hcmR8ZW58MXx8fHwxNzU3MDIwMjUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Altium Designer", "KiCad", "SMD", "EMI/EMC", "Power Electronics"],
      teammates: ["Dr. Jennifer Wang - Hardware Lead", "Alex Thompson - Test Engineer"],
      demo: "#",
      duration: "6 months",
      challenges: ["Miniaturization constraints", "Thermal management", "Signal integrity"],
      results: ["30% size reduction", "99.8% reliability rating", "FCC/CE compliance achieved"],
      category: "electrical"
    },
    {
      id: 3,
      title: "Neural Network Vision System",
      description: "Implemented deep learning models for real-time object detection and tracking in drone applications with 95% accuracy.",
      fullDescription: "Advanced computer vision system utilizing state-of-the-art neural networks for real-time object detection, classification, and tracking. The system processes 4K video streams at 60fps while maintaining high accuracy across diverse environmental conditions. Optimized for edge computing deployment on NVIDIA Jetson platforms.",
      image: "https://images.unsplash.com/photo-1641312874336-6279a832a3dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjByb2JvdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU3MDAyODQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["PyTorch", "YOLO", "Edge Computing", "NVIDIA Jetson", "CUDA"],
      teammates: ["Lisa Park - ML Engineer", "Roberto Silva - Computer Vision"],
      demo: "#",
      duration: "10 months",
      challenges: ["Real-time processing", "Model optimization", "Hardware limitations"],
      results: ["95% detection accuracy", "60fps real-time processing", "40% model compression achieved"],
      category: "ai"
    },
    {
      id: 4,
      title: "Autonomous Navigation System",
      description: "Built a comprehensive navigation system combining GPS, IMU, and visual odometry for precise autonomous flight in GPS-denied environments.",
      fullDescription: "Comprehensive autonomous navigation solution integrating multiple sensor modalities for robust flight control in challenging environments. The system combines GPS, IMU, visual odometry, and LiDAR data using advanced sensor fusion algorithms to maintain precise positioning even in GPS-denied areas.",
      image: "https://images.unsplash.com/photo-1511333122491-991715e06289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbm9tb3VzJTIwZHJvbmUlMjBuYXZpZ2F0aW9ufGVufDF8fHx8MTc1NzA5NjIyMnww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["SLAM", "Kalman Filter", "PX4", "MAVLink", "Sensor Fusion"],
      teammates: ["Michael Chen - Navigation Systems", "Emma Davis - Sensor Integration"],
      demo: "#",
      duration: "12 months",
      challenges: ["Sensor fusion complexity", "Indoor navigation", "Real-time constraints"],
      results: ["±10cm positioning accuracy", "100% GPS-denied navigation", "15+ successful missions"],
      category: "drone"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'ai', label: 'AI Projects', count: projects.filter(p => p.category === 'ai').length },
    { id: 'drone', label: 'Drone Projects', count: projects.filter(p => p.category === 'drone').length },
    { id: 'electrical', label: 'Electrical Projects', count: projects.filter(p => p.category === 'electrical').length },
    { id: '3d', label: '3D Models', count: projects.filter(p => p.category === '3d').length },
    { id: 'applications', label: 'Applications', count: projects.filter(p => p.category === 'applications').length }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-secondary/30 via-accent/20 to-primary/10 relative">
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-accent/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore my latest work in AI, drone technology, and electrical engineering
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Filter className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-primary">Filter by Category</h3>
          </div>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={`transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg"
                    : "border-primary/30 text-primary hover:bg-primary/10 hover:border-primary"
                }`}
              >
                {category.label}
                <Badge 
                  variant="secondary" 
                  className={`ml-2 ${
                    selectedCategory === category.id
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid - Responsive Flex Layout */}
        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] min-w-[320px] max-w-[400px] overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-primary/20 bg-gradient-to-br from-card to-accent/5 cursor-pointer group flex flex-col"
              onClick={() => onProjectClick('project-detail', project)}
            >
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">Click to view full details</p>
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <CardHeader className="flex-1">
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="secondary" className="bg-muted/50 text-muted-foreground">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground transition-all duration-300 flex-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.demo, '_blank');
                      }}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View Demo
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              <Filter className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-semibold mb-2">No projects found</h3>
              <p>No projects match the selected category. Try selecting a different filter.</p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setSelectedCategory('all')}
              className="border-primary/30 text-primary hover:bg-primary/10"
            >
              Show All Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}