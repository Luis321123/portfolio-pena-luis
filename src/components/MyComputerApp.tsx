import ImageProfile from "@/assets/Yo.jpeg";
import ComputerIcon from "@/assets/icons/mypc.png";
import EmailIcon from "@/assets/icons/eplorerIcon/Email.png";
import GitHubIcon from "@/assets/icons/githubpixel.svg";
import LinkedinIcon from "@/assets/icons/linkedinPixel.svg";
import WSIcon from "@/assets/icons/whatsapp.svg";
import PdfIcon from "@/assets/icons/PDF.ico";
import BehanceIcon from "@/assets/icons/behance.png";
import { useIsMobile } from "@/hooks/useIsMobile";

const PERSONAL_INFO = [
  {
    id: "email",
    label: "luis123321@gmail.com",
    icon: EmailIcon,
    href: "mailto:luis123321@gmail.com",
  },
  {
    id: "github",
    label: "@Luis321123",
    icon: GitHubIcon,
    href: "https://github.com/Luis321123",
  },
  {
    id: "linkedin",
    label: "Luis Peña",
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/luis-pe%C3%B1a-b76a51151/",
  },
  {
    id: "whatsapp",
    label: "+58 4127483611",
    icon: WSIcon,
    href: "tel:+584127483611",
  },
  {
    id: "cv",
    label: "Mi CV",
    icon: PdfIcon,
    href: "/Luis-Pena.pdf",
  },
];

const linkStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 6,
  padding: "4px 6px",
  fontSize: 11,
  fontFamily: "Tahoma, sans-serif",
  color: "#000",
  textDecoration: "none",
  borderRadius: 2,
};

const MyComputerApp = () => {
  const isMobile = useIsMobile(768);

  return (
    <div style={{ width: "100%", height: "100%", display: "flex", background: "#ece9d8", overflow: "auto" }}>
      <div
        style={{
          width: isMobile ? "42%" : "38%",
          minWidth: isMobile ? 120 : 180,
          maxWidth: isMobile ? 160 : undefined,
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(to bottom, #d4e4fc 0%, #b5cef4 100%)",
          borderRight: "1px solid #a7abb3",
        }}
      >
        <div style={{ padding: "12px 10px 6px", textAlign: "center" }}>
          <img src={ComputerIcon} alt="My PC" style={{ width: 40, height: 40 }} />
          <div style={{ fontSize: 13, fontWeight: "bold", fontFamily: "Tahoma, sans-serif", color: "#003399", marginTop: 4 }}>
            Luis Peña
          </div>
          <div style={{ fontSize: 10, fontFamily: "Tahoma, sans-serif", color: "#333" }}>
            Software developer(and designer)
          </div>
        </div>

        <div style={{ margin: "6px 8px" }}>
          <div style={{ fontSize: 11, fontWeight: "bold", fontFamily: "Tahoma, sans-serif", color: "#003399", padding: "2px 4px" }}>
            Contact
          </div>
          {PERSONAL_INFO.map((item) => (
            <a key={item.id} href={item.href} target="_blank" rel="noopener noreferrer" style={linkStyle}>
              <img src={item.icon} alt={item.label} style={{ width: 16, height: 16, flexShrink: 0 }} />
              <span style={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>{item.label}</span>
            </a>
          ))}
        </div>

        <div style={{ height: 1, background: "#a7abb3", margin: "0 8px" }} />

        <div style={{ margin: "6px 8px" }}>
          <div style={{ fontSize: 11, fontWeight: "bold", fontFamily: "Tahoma, sans-serif", color: "#003399", padding: "2px 4px" }}>
            Quick links
          </div>
          {[
            { label: "GitHub", icon: GitHubIcon, href: "https://github.com/Luis321123" },
            { label: "LinkedIn", icon: LinkedinIcon, href: "https://www.linkedin.com/in/luis-pe%C3%B1a-b76a51151/" },
            { label: "Descargar CV", icon: PdfIcon, href: "/Luis-Pena.pdf" },
            { label: "Behance", icon: BehanceIcon, href: "https://www.behance.net/louispea" },
          ].map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" style={linkStyle}>
              <img src={item.icon} alt={item.label} style={{ width: 16, height: 16, flexShrink: 0 }} />
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        <div style={{ height: 1, background: "#a7abb3", margin: "0 8px" }} />

        <div style={{ margin: "6px 8px", fontSize: 10, fontFamily: "Tahoma, sans-serif", color: "#333", lineHeight: 1.5 }}>
          <div style={{ fontWeight: "bold", color: "#003399" }}>System</div>
          <div>C:\Documents and Settings\Luis</div>
          <div>processor: AMD Software Dev x2</div>
          <div>RAM: coffe with no limits</div>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, padding: 16 }}>
        <div
          style={{
            padding: 6,
            background: "#fff",
            border: "1px solid #7f9db9",
            borderTop: "2px solid #7f9db9",
            borderLeft: "2px solid #7f9db9",
            boxShadow: "2px 2px 6px rgba(0,0,0,0.35)",
          }}
        >
          <img
            src={ImageProfile}
            alt="Luis Peña"
            style={{ display: "block", maxWidth: "min(55vw, 320px)", maxHeight: "55vh", objectFit: "cover" }}
          />
        </div>
        <div style={{ textAlign: "center", fontFamily: "Tahoma, sans-serif" }}>
          <div style={{ fontSize: 16, fontWeight: "bold", color: "#003399" }}>Luis Mario Peña</div>
          <div style={{ fontSize: 11, color: "#333" }}>welcome to my pc</div>
        </div>
      </div>
    </div>
  );
};

export default MyComputerApp;
