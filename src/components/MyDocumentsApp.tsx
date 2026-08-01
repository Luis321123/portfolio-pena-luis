import WindowsDialog from "@/components/Animates/WindowsDialog"

import GitHubIcon from "@/assets/icons/githubpixel.svg";
import LinkedInIcon from "@/assets/icons/linkedinPixel.svg";
import BackIcon from "@/assets/icons/Back.png";
import ForwardIcon from "@/assets/icons/forward.png";
import FolderIcon from "@/assets/icons/documents.png";
import webIcon from "@/assets/icons/web.png";
import newIcon from "@/assets/icons/new.png";
import Goicon from "@/assets/icons/Go.png";
import UpIcon from "@/assets/icons/up.png";
import PdfIcon from "@/assets/icons/PDF.ico";
import FigmaIcon from "@/assets/icons/figma.png";
import IllustratorIcon from "@/assets/icons/illustrator.webp";
import PhotoshopIcon from "@/assets/icons/photoshop.png";


import { useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useTranslation } from "react-i18next";

const photoList = [
  "0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg",
  "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg", "10.jpeg", "11.jpeg",
  "12.jpeg", "13.jpeg", "14.jpeg", "15.jpeg", "16.jpeg", "17.jpeg",
  "18.jpeg", "19.jpeg", "20.jpeg", "21.jpeg", "23.jpeg", "24.jpeg",
  "25.jpeg", "26.jpeg", "27.jpeg", "28.jpeg", "29.jpeg", "30.jpeg",
  "40.jpeg", "41.jpeg", "42.jpeg", "43.jpeg", "44.jpeg",
];

interface MyDocumentsAppProps {
  onOpenImageViewer?: (src: string) => void;
}

type Folder = "root" | "viajes";

const MyDocumentsApp = ({ onOpenImageViewer }: MyDocumentsAppProps) => {
  const { t } = useTranslation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentFolder, setCurrentFolder] = useState<Folder>("root");
  const [folderHistory, setFolderHistory] = useState<Folder[]>([]);
  const isMobile = useIsMobile(768);

  const handlePdfClick = () => {
    setIsDialogOpen(true);
  };

  const handleConfirm = () => {
    window.open("/Luis-Pena.pdf", "_blank");
    setIsDialogOpen(false);
  };

  const navigateTo = (folder: Folder) => {
    setFolderHistory((prev) => [...prev, currentFolder]);
    setCurrentFolder(folder);
  };

  const navigateUp = () => {
    if (folderHistory.length > 0) {
      const prev = folderHistory[folderHistory.length - 1];
      setFolderHistory((prevHistory) => prevHistory.slice(0, -1));
      setCurrentFolder(prev);
    }
  };

  const canGoUp = folderHistory.length > 0;

  const getAddress = () => {
    switch (currentFolder) {
      case "viajes":
        return t("myDocuments.pathViajes");
      default:
        return t("myDocuments.pathRoot");
    }
  };

  const getItemCount = () => {
    switch (currentFolder) {
      case "viajes":
        return t("myDocuments.items", { count: photoList.length });
      default:
        return t("myDocuments.itemsTwo", { count: 2 });
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", fontFamily: "Tahoma, sans-serif", fontSize: 12 }}>
      <WindowsDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onConfirm={handleConfirm}
        title={t("myDocuments.done")}
        message={t("myDocuments.confirmLeave")}
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
          <span style={{ fontSize: 11, color: "#000", cursor: "pointer", padding: "2px 4px" }}>{t("myDocuments.file")}</span>
          <span style={{ fontSize: 11, color: "#000", cursor: "pointer", padding: "2px 4px" }}>{t("myDocuments.edit")}</span>
          <span style={{ fontSize: 11, color: "#000", cursor: "pointer", padding: "2px 4px" }}>{t("myDocuments.view")}</span>
          <span style={{ fontSize: 11, color: "#000", cursor: "pointer", padding: "2px 4px" }}>{t("myDocuments.favorites")}</span>
          <span style={{ fontSize: 11, color: "#000", cursor: "pointer", padding: "2px 4px" }}>{t("myDocuments.tools")}</span>
          <span style={{ fontSize: 11, color: "#000", cursor: "pointer", padding: "2px 4px" }}>{t("myDocuments.help")}</span>
        </div>

        {/* Primera fila: Botones Back, Forward y Up */}
        <div style={{ display: "flex", gap: 2, marginBottom: 4 }}>
          {/* Botón Back */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <button style={{ width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #a7abb3", background: "#fff", cursor: "pointer", opacity: 0.5, padding: 0 }} disabled>
              <img src={BackIcon} alt="back" style={{ width: 16, height: 16 }} />
            </button>
            <span style={{ fontSize: 9, color: "#555", marginTop: 1 }}>{t("myDocuments.back")}</span>
          </div>
          
          {/* Botón Forward */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <button style={{ width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #a7abb3", borderRadius: 0, background: "#fff", cursor: "pointer", opacity: 0.5, padding: 0 }} disabled>
              <img src={ForwardIcon} alt="forward" style={{ width: 16, height: 16 }} />
            </button>
            <span style={{ fontSize: 9, color: "#555", marginTop: 1 }}>{t("myDocuments.forward")}</span>
          </div>

          {/* Botón Up */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <button 
              onClick={canGoUp ? navigateUp : undefined}
              style={{ 
                width: 22, 
                height: 22, 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                border: "1px solid #a7abb3", 
                borderRadius: 0, 
                background: canGoUp ? "#fff" : "#f0f0f0", 
                cursor: canGoUp ? "pointer" : "default", 
                opacity: canGoUp ? 1 : 0.5, 
                padding: 0 
              }}
            >
              <img src={UpIcon} alt="up" style={{ width: 16, height: 16 }} />
            </button>
            <span style={{ fontSize: 9, color: "#555", marginTop: 1 }}>{t("myDocuments.up")}</span>
          </div>
        </div>

        {/* Segunda fila: Barra de direcciones */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ fontSize: 10, color: "#555" }}>{t("myDocuments.address")}</span>
          <div style={{ display: "flex", alignItems: "center", gap: 4, flex: 1, minWidth: 0, border: "1px solid #3a6ea5", borderRadius: 0, background: "#fff", padding: "1px 4px" }}>
            <img src={FolderIcon} alt="folder" style={{ width: 16, height: 16, marginRight: 2 }} />
            <span style={{ fontSize: 11, color: "#000", marginLeft: 4, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1, minWidth: 0 }}>{getAddress()}</span>
            <span style={{ 
              fontSize: 10, 
              color: "#0055ff",
              marginLeft: "auto",
              cursor: "pointer",
              fontWeight: "bold"
            }}>▼</span>
          </div>
          <img src={Goicon} alt="go" style={{ width: 16, height: 16, cursor: "pointer" }} />
          <span style={{ fontSize: 11, color: "#000" }}>{t("myDocuments.go")}</span>
        </div>
      </div>

      <div style={{ display: "flex", flex: 1, overflow: "hidden", minHeight: 0 }}>
        {/* Left panel */}
        <div style={{ width: isMobile ? 110 : 180, background: "linear-gradient(to bottom, #d4e4fc 0%, #b5cef4 100%)", borderRight: "1px solid #a7abb3", display: "flex", flexDirection: "column", gap: 0, flexShrink: 0 }}>
          {/* File and Folder Tasks */}
          <div style={{ padding: "10px 8px 6px 8px" }}>
            <div style={{ color: "#215dc6", fontWeight: "bold", fontSize: 11, marginBottom: 6, letterSpacing: -0.2 }}>
              {t("myDocuments.fileTask")}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ color: "#0046d5", fontSize: 11, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
                <img src={newIcon} alt="" style={{ width: 16, height: 16 }} />
                {t("myDocuments.createFolder")}
              </span>
              <span style={{ color: "#0046d5", fontSize: 11, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
                <img src={webIcon} alt="" style={{ width: 16, height: 16 }} />
                {t("myDocuments.publish")}
              </span>
            </div>
          </div>

          <div style={{ height: 1, background: "#a7abb3", margin: "0 8px" }} />

          {/* Other Places / Social Links */}
          <div style={{ padding: "8px 8px 6px 8px" }}>
            <div style={{ color: "#215dc6", fontWeight: "bold", fontSize: 11, marginBottom: 6, letterSpacing: -0.2 }}>
              {t("myDocuments.otherSites")}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <a href="https://github.com/Luis321123" target="_blank" rel="noopener noreferrer" style={{ color: "#0046d5", fontSize: 11, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                <img src={GitHubIcon} alt="" style={{ width: 16, height: 16 }} />
                {t("myDocuments.github")}
              </a>
              <a href="https://www.linkedin.com/in/luis-pe%C3%B1a-b76a51151/" target="_blank" rel="noopener noreferrer" style={{ color: "#0046d5", fontSize: 11, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                <img src={LinkedInIcon} alt="" style={{ width: 16, height: 16 }} />
                {t("myDocuments.linkedin")}
              </a>
            </div>
          </div>

          <div style={{ height: 1, background: "#a7abb3", margin: "0 8px" }} />

          {/* Details */}
          <div style={{ padding: "8px 8px 6px 8px" }}>
            <div style={{ color: "#215dc6", fontWeight: "bold", fontSize: 11, marginBottom: 6, letterSpacing: -0.2 }}>
              {t("myDocuments.hiddenSkills")}
            </div>
            <div style={{ fontSize: 10, color: "#333", display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <img src={FigmaIcon} alt="Figma" style={{ width: 16, height: 16 }} />
                <div>{t("myDocuments.figma")}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <img src={PhotoshopIcon} alt="Photoshop" style={{ width: 16, height: 16 }} />
                <div>{t("myDocuments.photoshop")}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <img src={IllustratorIcon} alt="Illustrator" style={{ width: 16, height: 16 }} />
                <div>{t("myDocuments.illustrator")}</div>
              </div>
              <div style={{ marginTop: 100 }}>30/07/2026</div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, background: "#fff", padding: 8, display: "flex", flexDirection: "column", gap: 4, overflow: "auto" }}>
          {currentFolder === "root" && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignContent: "flex-start" }}>
              {/* My photos folder */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, width: 72, cursor: "pointer", padding: 4 }} onClick={() => navigateTo("viajes")}>
                <img src={FolderIcon} alt="folder" style={{ width: 48, height: 48, imageRendering: "pixelated" }} draggable={false} />
                <span style={{ fontSize: 11, color: "#000", textAlign: "center", wordBreak: "break-word", lineHeight: 1.2 }}>{t("myDocuments.travel")}</span>
              </div>

              {/* My Resume PDF */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, width: 72, cursor: "pointer", padding: 4 }} onClick={handlePdfClick}>
                <img src={PdfIcon} alt="pdf" style={{ width: 48, height: 48 }} draggable={false} />
                <span style={{ fontSize: 11, color: "#000", textAlign: "center", wordBreak: "break-word", lineHeight: 1.2 }}>{t("myDocuments.myResume")}</span>
              </div>
            </div>
          )}

          {currentFolder === "viajes" && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignContent: "flex-start" }}>
              {photoList.map((photo) => (
                <div
                  key={photo}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, width: 100, cursor: "pointer", padding: 4 }}
                  onDoubleClick={() => onOpenImageViewer?.(`/viajes/${photo}`)}
                >
                  <img
                    src={`/viajes/${photo}`}
                    alt={photo}
                    style={{ width: 80, height: 80, objectFit: "cover", border: "1px solid #a7abb3" }}
                    draggable={false}
                  />
                  <span style={{ fontSize: 10, color: "#000", textAlign: "center", wordBreak: "break-word", lineHeight: 1.2 }}>{photo}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Status bar */}
      <div style={{ display: "flex", alignItems: "center", padding: "4px 10px", background: "#ece9d8", borderTop: "1px solid #a7abb3", fontSize: 11, color: "#333" }}>
        {getItemCount()}
      </div>
    </div>
  );
};

export default MyDocumentsApp;