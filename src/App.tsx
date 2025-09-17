import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { FlyingDrone } from "./components/flying-drone";
import { AnimatedBackground } from "./components/animated-background";
import { SkillsDetail } from "./components/skills-detail";
import { HobbiesPage } from "./components/hobbies-page";
import { ProjectDetail } from "./components/project-detail";

export type PageState = 'home' | 'skills-detail' | 'hobbies' | 'project-detail';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageState>('home');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Set the document title
  useEffect(() => {
    document.title = "Khisa's Web Portfolio";
  }, []);

  const handlePageChange = (page: PageState, projectData?: any) => {
    if (page === 'project-detail' && projectData) {
      setSelectedProject(projectData);
    }
    setCurrentPage(page);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'skills-detail':
        return <SkillsDetail onBack={() => setCurrentPage('home')} />;
      case 'hobbies':
        return <HobbiesPage onBack={() => setCurrentPage('home')} />;
      case 'project-detail':
        return <ProjectDetail project={selectedProject} onBack={() => setCurrentPage('home')} />;
      default:
        return (
          <main>
            <Hero />
            <About onViewHobbies={() => setCurrentPage('hobbies')} />
            <Projects onProjectClick={handlePageChange} />
            <Skills onViewAllSkills={() => setCurrentPage('skills-detail')} />
            <Contact />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <FlyingDrone />
      <div className="relative z-10">
        <Navigation currentPage={currentPage} onPageChange={() => setCurrentPage('home')} />
        {renderContent()}
        {currentPage === 'home' && <Footer />}
      </div>
    </div>
  );
}