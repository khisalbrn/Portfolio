import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowLeft, ExternalLink, Calendar, Users, Target, Zap, CheckCircle } from "lucide-react";

interface ProjectDetailProps {
  project: any;
  onBack: () => void;
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-primary/3 to-accent/5 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Button onClick={onBack} className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
            Return to Portfolio
          </Button>
        </div>
      </div>
    );
  }

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
              <h1 className="text-2xl font-bold">{project.title}</h1>

            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="aspect-[21/9] relative overflow-hidden">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-8 left-8 right-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="bg-background/20 backdrop-blur-sm text-foreground">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Overview */}
            <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Project Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.fullDescription}
                </p>
                
                 <div className="space-y-2">
                    <h4 className="font-medium text-primary flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Key Objectives
                    </h4>
                    <div className="space-y-2">
                      {project.keyObjectives.map((keyObjective, index) => (
                      <div key={index} className="border-l-4 border-primary/30 pl-4">
                        <div className="font-medium text-primary mb-2">{keyObjective}</div>
                      </div>
                    ))}
                     </div> 
                   
                  </div>
                  
                
              </CardContent>
            </Card>

            {/* Challenges & Solutions */}
            <Card className="border-primary/20 bg-gradient-to-br from-card to-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Challenges & Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
              <div className="space-y-6">
                {project.challenges.map((challenge: string, i: number) => {
                  const solution = project.solutions?.[i]; // pair by index
                  return (
                    <div key={i} className="border-l-4 border-primary/30 pl-4">
                      <h4 className="font-medium text-primary mb-2">
                        Challenge: {challenge}
                      </h4>

                      {solution ? (
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium text-primary/80">Solution:</span> {solution}
                        </p>
                      ) : (
                        <p className="text-sm text-muted-foreground italic">
                          No matching solution provided.
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>

            </Card>

            {/* Results & Impact */}
            <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Results & Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.results.map((result, index) => (
                    <div key={index} className="text-center p-4 bg-accent/5 rounded-lg border border-accent/20">
                      <div className="font-semibold text-accent">{result}</div>
                    </div>
                  ))}
                </div>
                
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <Card className="border-primary/20 bg-gradient-to-br from-card to-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Project Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-primary mb-1">Duration</h4>
                  <p className="text-sm text-muted-foreground">{project.duration}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-primary mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-primary/30 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

               
                
              </CardContent>
            </Card>

            {/* Team Members */}
            <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Team Members
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {project.teammates.map((teammate, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg border border-border shadow-sm">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-md">
                        <span className="text-lg font-semibold text-white">
                          {teammate.split(' ').map(name => name[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-base">{teammate.split(' - ')[0]}</p>
                        <p className="text-sm text-muted-foreground">{teammate.split(' - ')[1]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            
          </div>
        </div>
      </div>
    </div>
  );
}