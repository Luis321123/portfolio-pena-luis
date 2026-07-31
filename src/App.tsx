import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { Header, StartMenu, Window } from "./components";
import NotepadApp from "./components/NotepadApp";
import MyDocumentsApp from "./components/MyDocumentsApp";
import MyComputerApp from "./components/MyComputerApp";
import AresPlayer from "./components/AresPlayer";
import { HomePage, AboutPage, ProjectPage, ContactPage } from "./pages";
import { Taskbar } from "./components/Taskbar";
import DesktopIcons from "./components/DesktopIcons";
import MenuHamburguer from "./components/PrimitiveElements/MenuHamburguer";
import Navbar from "./components/PrimitiveElements/Navbar";
import XpWallpaper from "@/assets/xp-bliss.jpg";

const App = () => {
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isWoWOpen, setIsWoWOpen] = useState(false);
  const [isMinesweeperOpen, setIsMinesweeperOpen] = useState(false);
  const [isNotepadOpen, setIsNotepadOpen] = useState(false);
  const [isNotepadMinimized, setIsNotepadMinimized] = useState(false);
  const [isMyDocumentsOpen, setIsMyDocumentsOpen] = useState(false);
  const [isMyDocumentsMinimized, setIsMyDocumentsMinimized] = useState(false);
  const [isMyPcOpen, setIsMyPcOpen] = useState(false);
  const [isMyPcMinimized, setIsMyPcMinimized] = useState(false);
  const [isAresOpen, setIsAresOpen] = useState(false);
  const [isAresMinimized, setIsAresMinimized] = useState(false);
  const [isPaintOpen, setIsPaintOpen] = useState(false);
  const [isPaintMinimized, setIsPaintMinimized] = useState(false);
  const [viewerImage, setViewerImage] = useState<string | null>(null);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(true);
  const [isPortfolioMinimized, setIsPortfolioMinimized] = useState(false);
  const [isPortfolioMaximized, setIsPortfolioMaximized] = useState(true);

  const handleStartMenuClick = () => setIsStartMenuOpen((prev) => !prev);

  const handlePortfolioClose = () => {
    setIsPortfolioOpen(false);
    setIsPortfolioMinimized(false);
    setIsPortfolioMaximized(false);
  };

  const handlePortfolioOpen = () => {
    setIsPortfolioOpen(true);
    setIsPortfolioMinimized(false);
    setIsPortfolioMaximized(true);
  };

  const handlePortfolioClick = () => {
    if (!isPortfolioOpen) {
      handlePortfolioOpen();
      return;
    }
    setIsPortfolioMinimized((prev) => !prev);
  };

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

      <DesktopIcons
        onOpenPortfolio={handlePortfolioOpen}
        onOpenNotepadApp={() => setIsNotepadOpen(true)}
        onOpenMyDocuments={() => setIsMyDocumentsOpen(true)}
        onOpenMyPc={() => setIsMyPcOpen(true)}
        onOpenAres={() => {
          setIsAresOpen(true);
          setIsAresMinimized(false);
        }}
        onOpenPaint={() => {
          setIsPaintOpen(true);
          setIsPaintMinimized(false);
        }}
      />

      <Window
        isOpen={isPortfolioOpen}
        onClose={handlePortfolioClose}
        title="explorer - My Portfolio"
        initialWidth={900}
        initialHeight={600}
        scrollable
        isMinimized={isPortfolioMinimized}
        onMinimize={() => setIsPortfolioMinimized(true)}
        isMaximized={isPortfolioMaximized}
        onMaximizeChange={setIsPortfolioMaximized}
      >
        <Toaster />
        <Header />

        <div id="window-scroll-container" className="xp-scrollbar" style={{ margin: 0, padding: 0, flex: 1, overflow: "auto", minHeight: 0 }}>
          <div
            style={{
              position: "sticky",
              top: 8,
              zIndex: 999999,
              display: "flex",
              justifyContent: "flex-end",
              height: 0,
              overflow: "visible",
              paddingRight: 8,
              pointerEvents: "none",
            }}
          >
            <MenuHamburguer isChecked={isChecked} setIsChecked={setIsChecked} />
          </div>
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
        {isChecked && <Navbar isOpen={isChecked} setIsOpen={setIsChecked} />}
      </Window>

      <StartMenu
        isOpen={isStartMenuOpen}
        onClose={() => setIsStartMenuOpen(false)}
        onOpenWoW={() => setIsWoWOpen(true)}
        onOpenPortfolio={handlePortfolioOpen}
        onOpenMinesweeper={() => setIsMinesweeperOpen(true)}
        onOpenNotepadApp={() => setIsNotepadOpen(true)}
        onOpenMyDocuments={() => setIsMyDocumentsOpen(true)}
        onOpenAres={() => {
          setIsAresOpen(true);
          setIsAresMinimized(false);
        }}
        onOpenPaint={() => {
          setIsPaintOpen(true);
          setIsPaintMinimized(false);
        }}
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

      <Window
        isOpen={isMinesweeperOpen}
        onClose={() => setIsMinesweeperOpen(false)}
        title="Minesweeper"
        initialWidth={560}
        initialHeight={440}
      >
        <iframe
          src="/minesweeper/index.html"
          style={{ width: "100%", height: "100%", border: "none" }}
          title="Minesweeper"
        />
      </Window>

      <Window
        isOpen={isNotepadOpen}
        onClose={() => setIsNotepadOpen(false)}
        title="Untitled - Notepad"
        initialWidth={800}
        initialHeight={600}
        isMinimized={isNotepadMinimized}
        onMinimize={() => setIsNotepadMinimized(true)}
      >
        <NotepadApp />
      </Window>

      <Window
        isOpen={isMyDocumentsOpen}
        onClose={() => setIsMyDocumentsOpen(false)}
        title="Mis documentos"
        initialWidth={750}
        initialHeight={520}
        isMinimized={isMyDocumentsMinimized}
        onMinimize={() => setIsMyDocumentsMinimized(true)}
      >
        <MyDocumentsApp onOpenImageViewer={setViewerImage} />
      </Window>

      <Window
        isOpen={isMyPcOpen}
        onClose={() => setIsMyPcOpen(false)}
        title="My PC"
        initialWidth={760}
        initialHeight={520}
        isMinimized={isMyPcMinimized}
        onMinimize={() => setIsMyPcMinimized(true)}
      >
        <MyComputerApp />
      </Window>

      <Window
        isOpen={isAresOpen}
        onClose={() => setIsAresOpen(false)}
        title="Ares Galaxy - Reproductor"
        initialWidth={640}
        initialHeight={460}
        isMinimized={isAresMinimized}
        onMinimize={() => setIsAresMinimized(true)}
      >
        <AresPlayer />
      </Window>

      <Window
        isOpen={isPaintOpen}
        onClose={() => setIsPaintOpen(false)}
        title="untitled - Paint"
        initialWidth={900}
        initialHeight={600}
        isMinimized={isPaintMinimized}
        onMinimize={() => setIsPaintMinimized(true)}
      >
        <iframe
          src="https://jspaint.app"
          style={{ width: "100%", height: "100%", border: "none" }}
          title="Paint"
          allowFullScreen
        />
      </Window>

      <Window
        isOpen={!!viewerImage}
        onClose={() => setViewerImage(null)}
        title="Visor de imágenes"
        initialWidth={700}
        initialHeight={550}
      >
        {viewerImage && (
          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#000", padding: 8, boxSizing: "border-box" }}>
            <img
              src={viewerImage}
              alt=""
              style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
            />
          </div>
        )}
      </Window>

      <Taskbar
        onStartMenuClick={handleStartMenuClick}
        isWoWOpen={isWoWOpen}
        onWowClick={() => setIsWoWOpen((prev) => !prev)}
        isMinesweeperOpen={isMinesweeperOpen}
        onMinesweeperClick={() => setIsMinesweeperOpen((prev) => !prev)}
        isNotepadOpen={isNotepadOpen}
        isNotepadMinimized={isNotepadMinimized}
        onNotepadClick={() => setIsNotepadMinimized((prev) => !prev)}
        isMyDocumentsOpen={isMyDocumentsOpen}
        isMyDocumentsMinimized={isMyDocumentsMinimized}
        onMyDocumentsClick={() => setIsMyDocumentsMinimized((prev) => !prev)}
        isPortfolioOpen={isPortfolioOpen}
        isPortfolioMinimized={isPortfolioMinimized}
        onPortfolioClick={handlePortfolioClick}
        isMyPcOpen={isMyPcOpen}
        isMyPcMinimized={isMyPcMinimized}
        onMyPcClick={() => setIsMyPcMinimized((prev) => !prev)}
        onAresClick={() => {
          if (!isAresOpen) {
            setIsAresOpen(true);
            setIsAresMinimized(false);
            return;
          }
          setIsAresMinimized((prev) => !prev);
        }}
        isAresOpen={isAresOpen}
        isAresMinimized={isAresMinimized}
        isPaintOpen={isPaintOpen}
        isPaintMinimized={isPaintMinimized}
        onPaintClick={() => {
          if (!isPaintOpen) {
            setIsPaintOpen(true);
            setIsPaintMinimized(false);
            return;
          }
          setIsPaintMinimized((prev) => !prev);
        }}
      />
    </>
  );
};

export default App;
