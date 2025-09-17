import { Button } from "./ui/button";
import { ArrowDown, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const [currentText, setCurrentText] = useState(0);
  const textSequence = [
    "Creative",
    "AI creator", 
    "electrical engineer",
    "UAS builder",
    "Engineering a better world"
  ];

  useEffect(() => {
    if (currentText < textSequence.length - 1) {
      const timer = setTimeout(() => {
        setCurrentText(currentText + 1);
      }, 2000); // Change every 2 seconds, but stay on last one
      return () => clearTimeout(timer);
    }
  }, [currentText, textSequence.length]);

  // Photo placeholder component
  const PhotoPlaceholder = () => (
    <motion.div
      className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-2xl transform scale-110"></div>
      <div className="relative w-full h-full rounded-full border-4 border-white shadow-lg overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1573495804669-ec82ad00f327?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGVuZ2luZWVyJTIwdGVjaHxlbnwxfHx8fDE3NTc0MzI1OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Khisa - Professional Engineer"
          className="w-full h-full object-cover"
        />
        {/* Colorful border overlay */}
        <div className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-primary via-secondary to-accent opacity-60"></div>
      </div>
      {/* Floating colorful elements */}
      <motion.div 
        className="absolute -top-8 -right-8 w-6 h-6 bg-primary rounded-full shadow-lg"
        animate={{ 
          y: [0, -10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          delay: 0
        }}
      />
      <motion.div 
        className="absolute -bottom-6 -left-6 w-4 h-4 bg-secondary rounded-full shadow-lg"
        animate={{ 
          y: [0, 10, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          delay: 0.5
        }}
      />
      <motion.div 
        className="absolute top-6 right-4 w-3 h-3 bg-accent rounded-full shadow-lg"
        animate={{ 
          x: [0, 5, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          delay: 1
        }}
      />
    </motion.div>
  );

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <PhotoPlaceholder />
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <motion.div 
                  className="text-xl sm:text-2xl text-muted-foreground font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <span className="text-primary font-semibold">Khisa.is(</span>
                  <motion.span
                    key={currentText}
                    className="text-accent font-semibold"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    "{textSequence[currentText]}"
                  </motion.span>
                  <span className="text-primary font-semibold">)</span>
                </motion.div>
              </div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <span className="text-foreground">Engineering a</span>
                <br />
                <span className="text-custom-blue">
                  better world
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                AI-powered drone systems and electrical engineering solutions that push the boundaries of autonomous technology
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary-hover hover:to-accent-deep text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" 
                asChild
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105" 
                asChild
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center lg:items-start space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <div className="flex justify-center lg:justify-start space-x-6">
                <Button variant="ghost" size="sm" className="text-primary hover:text-accent hover:bg-primary/10 transition-all duration-300" asChild>
                  <a href="#" aria-label="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="text-primary hover:text-accent hover:bg-primary/10 transition-all duration-300" asChild>
                  <a href="mailto:lebrunkhisalee@gmail.com" aria-label="Email">
                    <Mail size={20} />
                  </a>
                </Button>
              </div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Button variant="ghost" size="sm" className="text-primary hover:text-accent hover:bg-primary/10 transition-all duration-300" asChild>
                  <a href="#about" aria-label="Scroll to about section">
                    <ArrowDown size={24} />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}