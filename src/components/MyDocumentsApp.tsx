import WindowsDialog from "@/components/Animates/WindowsDialog"

import GitHubIcon from "@/assets/icons/githubpixel.svg";
import LinkedInIcon from "@/assets/icons/linkedinPixel.svg";
import BackIcon from "@/assets/icons/back.png";
import ForwardIcon from "@/assets/icons/forward.png";
import FolderIcon from "@/assets/icons/documents.png";
import webIcon from "@/assets/icons/web.png";
import newIcon from "@/assets/icons/new.png";
import Goicon from "@/assets/icons/Go.png";
import UpIcon from "@/assets/icons/Up.png";
import PdfIcon from "@/assets/icons/pdf.ico";
import FigmaIcon from "@/assets/icons/figma.png";
import IllustratorIcon from "@/assets/icons/illustrator.webp";
import PhotoshopIcon from "@/assets/icons/photoshop.png";


import { useState } from "react";

const MyDocumentsApp = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handlePdfClick = () => {
    setIsDialogOpen(true);
  };

  const handleConfirm = () => {
    window.open("/Luis-Peña.pdf", "_blank");
    setIsDialogOpen(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", fontFamily: "Tahoma, sans-serif", fontSize: 12 }}>
      <WindowsDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onConfirm={handleConfirm}
        title="Done"
        message="This will open a new external window; are you sure you want to leave?"
        icon="question"
      />

      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        padding: "0px 5px", 
        background: "linear-gradient(to bottom, #f0f0f0 0%, #d4d0c8 100%)", 
        borderBottom: "1px solid #a7abb3" 
      }}>
        <div style={{ display: "flex", flexDirection: "row", gap: 5, marginBottom: 6 }}>
          <span style={{ fontSize: 11, color: "#000", cursor: "pointer", padding: "2px 4px" }}>File</span>
          <span style={{ fontSize: 11, color: "#000", cursor: "pointer", padding: "2px 4px" }}>Edit</span>
          <span style={{ fontSize: 11, color: "#000", cursor: "pointer", padding: "2px 4px" }}>View</span>
          <span style={{ fontSize: 11, color: "#000", cursor: "pointer", padding: "2px 4px" }}>Favorites</span>
          <span style={{ fontSize: 11, color: "#000", cursor: "pointer", padding: "2px 4px" }}>Tools</span>
          <span style={{ fontSize: 11, color: "#000", cursor: "pointer", padding: "2px 4px" }}>Help</span>
        </div>

        {/* Primera fila: Botones Back, Forward y Up */}
        <div style={{ display: "flex", gap: 2, marginBottom: 4 }}>
          {/* Botón Back */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <button style={{ width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #a7abb3", background: "#fff", cursor: "pointer", opacity: 0.5, padding: 0 }} disabled>
              <img src={BackIcon} alt="back" style={{ width: 16, height: 16 }} />
            </button>
            <span style={{ fontSize: 9, color: "#555", marginTop: 1 }}>Back</span>
          </div>
          
          {/* Botón Forward */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <button style={{ width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #a7abb3", borderRadius: 0, background: "#fff", cursor: "pointer", opacity: 0.5, padding: 0 }} disabled>
              <img src={ForwardIcon} alt="forward" style={{ width: 16, height: 16 }} />
            </button>
            <span style={{ fontSize: 9, color: "#555", marginTop: 1 }}>Forward</span>
          </div>

          {/* Botón Up */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <button style={{ width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #a7abb3", borderRadius: 0, background: "#fff", cursor: "pointer", opacity: 0.5, padding: 0 }} disabled>
              <img src={UpIcon} alt="up" style={{ width: 16, height: 16 }} />
            </button>
            <span style={{ fontSize: 9, color: "#555", marginTop: 1 }}>Up</span>
          </div>
        </div>

        {/* Segunda fila: Barra de direcciones */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ fontSize: 10, color: "#555" }}>Address</span>
          <div style={{ display: "flex", alignItems: "center", gap: 4, flex: 1, border: "1px solid #3a6ea5", borderRadius: 0, background: "#fff", padding: "1px 4px" }}>
            <img src={FolderIcon} alt="folder" style={{ width: 16, height: 16, marginRight: 2 }} />
            <span style={{ fontSize: 11, color: "#000", marginLeft: 4 }}>C:\Documents and Settings\Mitch\Mis documentos</span>
            <span style={{ 
              fontSize: 10, 
              color: "#0055ff",
              marginLeft: "auto",
              cursor: "pointer",
              fontWeight: "bold"
            }}>▼</span>
          </div>
          <img src={Goicon} alt="go" style={{ width: 16, height: 16, cursor: "pointer" }} />
          <span style={{ fontSize: 11, color: "#000" }}>Go</span>
        </div>
      </div>

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* Left panel */}
        <div style={{ width: 180, background: "linear-gradient(to bottom, #d4e4fc 0%, #b5cef4 100%)", borderRight: "1px solid #a7abb3", display: "flex", flexDirection: "column", gap: 0, flexShrink: 0 }}>
          {/* File and Folder Tasks */}
          <div style={{ padding: "10px 8px 6px 8px" }}>
            <div style={{ color: "#215dc6", fontWeight: "bold", fontSize: 11, marginBottom: 6, letterSpacing: -0.2 }}>
              file task and folder
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ color: "#0046d5", fontSize: 11, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
                <img src={newIcon} alt="" style={{ width: 16, height: 16 }} />
                Create new folder
              </span>
              <span style={{ color: "#0046d5", fontSize: 11, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
                <img src={webIcon} alt="" style={{ width: 16, height: 16 }} />
                publish on the web
              </span>
            </div>
          </div>

          <div style={{ height: 1, background: "#a7abb3", margin: "0 8px" }} />

          {/* Other Places / Social Links */}
          <div style={{ padding: "8px 8px 6px 8px" }}>
            <div style={{ color: "#215dc6", fontWeight: "bold", fontSize: 11, marginBottom: 6, letterSpacing: -0.2 }}>
              other sites
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <a href="https://github.com/Luis321123" target="_blank" rel="noopener noreferrer" style={{ color: "#0046d5", fontSize: 11, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                <img src={GitHubIcon} alt="" style={{ width: 16, height: 16 }} />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/luis-pe%C3%B1a-b76a51151/" target="_blank" rel="noopener noreferrer" style={{ color: "#0046d5", fontSize: 11, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                <img src={LinkedInIcon} alt="" style={{ width: 16, height: 16 }} />
                LinkedIn
              </a>
            </div>
          </div>

          <div style={{ height: 1, background: "#a7abb3", margin: "0 8px" }} />

          {/* Details */}
          <div style={{ padding: "8px 8px 6px 8px" }}>
            <div style={{ color: "#215dc6", fontWeight: "bold", fontSize: 11, marginBottom: 6, letterSpacing: -0.2 }}>
              Hidden Skills
            </div>
            <div style={{ fontSize: 10, color: "#333", display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <img src={FigmaIcon} alt="Figma" style={{ width: 16, height: 16 }} />
                <div>Figma</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <img src={PhotoshopIcon} alt="Photoshop" style={{ width: 16, height: 16 }} />
                <div>Photoshop</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <img src={IllustratorIcon} alt="Illustrator" style={{ width: 16, height: 16 }} />
                <div>Illustrator</div>
              </div>
              <div style={{ marginTop: 110 }}>30/07/2026</div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, background: "#fff", padding: 8, display: "flex", flexDirection: "column", gap: 4, overflow: "auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignContent: "flex-start" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, width: 72, cursor: "pointer", padding: 4 }} onClick={() => window.open("https://github.com/Luis321123", "_blank")}>
              <img src={FolderIcon} alt="folder" style={{ width: 48, height: 48, imageRendering: "pixelated" }} draggable={false} />
              <span style={{ fontSize: 11, color: "#000", textAlign: "center", wordBreak: "break-word", lineHeight: 1.2 }}>My photos</span>
            </div>

            {/* My Resume PDF */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, width: 72, cursor: "pointer", padding: 4 }} onClick={handlePdfClick}>
              <img src={PdfIcon} alt="pdf" style={{ width: 48, height: 48 }} draggable={false} />
              <span style={{ fontSize: 11, color: "#000", textAlign: "center", wordBreak: "break-word", lineHeight: 1.2 }}>My Resume</span>
            </div>
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div style={{ display: "flex", alignItems: "center", padding: "2px 8px", background: "#ece9d8", borderTop: "1px solid #a7abb3", fontSize: 11, color: "#333" }}>
        2 objetos
      </div>
    </div>
  );
};

export default MyDocumentsApp;