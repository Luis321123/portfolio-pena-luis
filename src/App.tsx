import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { Header, StartMenu, Window } from "./components";
import { HomePage, AboutPage, ProjectPage, ContactPage } from "./pages";
import WindowManager from "./components/WindowsManager";
import { Taskbar } from "./components/Taskbar";
import XpWallpaper from "@/assets/xp-bliss.jpg";

const App = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(true);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [isWoWOpen, setIsWoWOpen] = useState(false);

  const handleTaskbarClick = () => setIsMinimized((prev) => !prev);
  const handleStartMenuClick = () => setIsStartMenuOpen((prev) => !prev);

  return (
    <>
      <div
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${XpWallpaper})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />

      <WindowManager
  isOpen={!isMinimized}
  onClose={() => setIsMinimized(true)}
  title="My porfolio.exe"
  initialWidth={900}
  initialHeight={600}
  isMaximized={isMaximized}
  onMaximizeChange={setIsMaximized}
  scrollContainerId="window-scroll-container"
>
        <Toaster />
        <Header />
        
        <div id="window-scroll-container" className="window-body xp-scrollbar" style={{ margin: 0, padding: 0, flex: 1, overflow: "auto" }}>
    
    <section id="/" className="scroll-mt-20">
      <HomePage />
    </section>
    
    <section id="about" className="scroll-mt-20">
      <AboutPage />
    </section>
    
    <section id="projects" className="scroll-mt-20">
      <ProjectPage />
    </section>
    
    <section id="contact" className="scroll-mt-20">
      <ContactPage />
    </section>
    
  </div>
        
      </WindowManager>

      <StartMenu
        isOpen={isStartMenuOpen}
        onClose={() => setIsStartMenuOpen(false)}
        onOpenWoW={() => setIsWoWOpen(true)}
      />

      <Window
        isOpen={isWoWOpen}
        onClose={() => setIsWoWOpen(false)}
        title="World of Warcraft"
        initialWidth={800}
        initialHeight={500}
      >
        <iframe
          src="/wow/index.html"
          style={{ width: "100%", height: "100%", border: "none" }}
          title="World of Warcraft Login Screen"
        />
      </Window>

      <Taskbar 
      isMinimized={isMinimized} 
       onTaskbarClick={handleTaskbarClick}
       onStartMenuClick={handleStartMenuClick}
       isWoWOpen={isWoWOpen}
       onWowClick={() => setIsWoWOpen(prev => !prev)} />
    </>
  );
};

export default App;