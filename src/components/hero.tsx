import { Button } from "./ui/button";
import { ArrowDown, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const [currentText, setCurrentText] = useState(0);
    const textSequence = [
    "Creative",
    "An AI creator", 
    "An Electrical Engineer",
    "An UAS builder",
    "Engineering a better world"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentText((prev) => (prev + 1) % textSequence.length);
    }, 3000); // Change every 2 seconds forever

    return () => clearTimeout(timer);
  }, [currentText, textSequence.length]);


  // Photo placeholder component
  const PhotoPlaceholder = () => (
    <div
      className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-2xl transform scale-110"></div>
      <div className="relative w-full h-full rounded-full border-4 border-white shadow-lg overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
        <ImageWithFallback
          src={`${import.meta.env.BASE_URL}Photos/ProfilePic.png`}
          alt="Hi, I am Khisa"
          className="w-full h-full object-cover"
        />
        {/* Colorful border overlay */}
        <div className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-primary via-secondary to-accent opacity-60"></div>
      </div>
    </div>
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
                  <a href="https://www.linkedin.com/in/khisaleelebrun/" aria-label="LinkedIn">
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