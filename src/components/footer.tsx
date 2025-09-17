import { Button } from "./ui/button";
import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-2 text-muted-foreground">Engineering Portfolio</h3>
            <p className="text-sm text-muted-foreground/80">
              © 2025 All rights reserved. Built with passion for AI and drone technology.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary transition-colors duration-300" asChild>
              <a href="https://www.linkedin.com/in/khisaleelebrun/" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary transition-colors duration-300" asChild>
              <a href="mailto:lebrunkhisalee@gmail.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}