import { Toaster } from "react-hot-toast";
import { Header } from "./components";
import { HomePage, AboutPage, ProjectPage, ContactPage } from "./pages";

const App = () => {
  return (
    <div 
      className="window" 
      style={{ 
        width: "100vw", 
        height: "100vh", 
        margin: 0, 
        padding: 0,
        boxSizing: "border-box",
        position: "fixed", 
        top: 0,
        left: 0,
        overflow: "auto"
      }}
    >
      <div className="title-bar">
        <div className="title-bar-text">My porfolio.exe</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" />
        </div>
      </div>

      <div className="window-body xp-scrollbar" style={{ margin: 0, padding: 0 }}>
        <Toaster />
        <Header />
        <HomePage />
        <AboutPage />
        <ProjectPage />
        <ContactPage />
      </div>
    </div>
  );
};

export default App;