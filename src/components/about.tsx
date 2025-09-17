import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Cpu, Zap, Target, Heart, GraduationCap, Award, Clock, CheckCircle } from "lucide-react";

interface AboutProps {
  onViewHobbies: () => void;
}

export function About({ onViewHobbies }: AboutProps) {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-background via-secondary/10 to-accent/20 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Passionate electrical engineer specializing in
            AI-driven autonomous systems and drone
            technology. I combine cutting-edge machine
            learning with robust electrical engineering
            principles to create intelligent solutions for
            real-world challenges.
          </p>
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="lg"
              onClick={onViewHobbies}
              className="border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Heart size={20} />
              Personal Interests
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-primary bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-soft rounded-lg flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">
                AI & Machine Learning
              </h3>
              <p className="text-muted-foreground">
                Developing intelligent algorithms for autonomous
                navigation, computer vision, and predictive
                analytics
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-secondary bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary-soft rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">
                Drone Systems
              </h3>
              <p className="text-muted-foreground">
                Designing and building autonomous drone
                platforms with advanced flight control and
                mission planning
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-accent bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-soft rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">
                Electrical Engineering
              </h3>
              <p className="text-muted-foreground">
                Circuit design, power systems, and embedded
                electronics for high-performance applications
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Certifications & Education Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Certifications & Education
          </h3>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-info bg-white shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-info to-purple-accent">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Bachelor's Degree</span>
                  <Badge variant="default" className="bg-info text-white">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Obtained
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-warning bg-white shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-warning to-yellow-accent">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  Licenses
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">International Driving License</span>
                  <Badge variant="default" className="bg-secondary text-white">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Licensed
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-accent bg-white shadow-lg lg:col-span-1 md:col-span-2 md:mx-auto md:max-w-md lg:max-w-none">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-accent to-pink-accent">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  In Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Part 107 UAS Certificate</span>
                  <Badge variant="outline" className="border-warning text-warning">
                    <Clock className="w-3 h-3 mr-1" />
                    Training
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">FE (Fundamentals of Engineering)</span>
                  <Badge variant="outline" className="border-warning text-warning">
                    <Clock className="w-3 h-3 mr-1" />
                    Training
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}