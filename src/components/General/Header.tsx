import { Fragment, useEffect, useRef, useState } from "react";
import { scroller } from "react-scroll";
import BackIcon from "@/assets/icons/Back.png";
import ForwardIcon from "@/assets/icons/forward.png";
import UpIcon from "@/assets/icons/up.png";
import GoIcon from "@/assets/icons/Go.png";
import FolderIcon from "@/assets/icons/explorer.ico";
import StopIcon from "@/assets/icons/eplorerIcon/IE Stop.png";
import RefreshIcon from "@/assets/icons/eplorerIcon/IE Refresh.png";
import HomeIcon from "@/assets/icons/home.png";
import FavoritesIcon from "@/assets/icons/eplorerIcon/Favorites.png";
import SearchIcon from "@/assets/icons/search.png";
import HistoryIcon from "@/assets/icons/eplorerIcon/IE History.png";
import EmailIcon from "@/assets/icons/eplorerIcon/Email.png";
import PrinterIcon from "@/assets/icons/eplorerIcon/Printer.png";
import MessengerIcon from "@/assets/icons/eplorerIcon/Windows Messenger.png";
import DiscussIcon from "@/assets/icons/eplorerIcon/IE Discuss.png";




const MENU_ITEMS = ["File", "Edit", "View", "Favorites", "Tools", "Help"];

const xpButtonStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 2,
  padding: "1px 4px",
  background: "transparent",
  border: "1px solid transparent",
  borderRadius: 3,
  cursor: "pointer",
  fontSize: 10,
  fontFamily: "Tahoma, sans-serif",
  color: "#000",
};


const Header = () => {
  const [currentSection, setCurrentSection] = useState("/");
  const [backStack, setBackStack] = useState<string[]>([]);
  const [forwardStack, setForwardStack] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const lastSectionRef = useRef("/");

  const navigateTo = (id: string) => {
    if (id === currentSection) {
      return;
    }
    setBackStack((prev) => [...prev, currentSection]);
    setForwardStack([]);
    setCurrentSection(id);
    lastSectionRef.current = id;
  };

  const goBack = () => {
    if (backStack.length === 0) return;
    const target = backStack[backStack.length - 1];
    setBackStack((prev) => prev.slice(0, -1));
    setForwardStack((prev) => [...prev, currentSection]);
    setCurrentSection(target);
    lastSectionRef.current = target;
  };

  const goForward = () => {
    if (forwardStack.length === 0) return;
    const target = forwardStack[forwardStack.length - 1];
    setForwardStack((prev) => prev.slice(0, -1));
    setBackStack((prev) => [...prev, currentSection]);
    setCurrentSection(target);
    lastSectionRef.current = target;
  };

  const toolbarButtons = [
    { icon: BackIcon, alt: "back", label: "Back", onClick: goBack, disabled: backStack.length === 0, dropdown: true },
    { icon: ForwardIcon, alt: "forward", onClick: goForward, disabled: forwardStack.length === 0, dropdown: true },
    { icon: UpIcon, alt: "up", onClick: () => navigateTo("/") },
    { icon: StopIcon, alt: "stop", onClick: () => navigateTo(currentSection) },
    { icon: RefreshIcon, alt: "refresh", onClick: () => navigateTo(currentSection) },
    { icon: HomeIcon, alt: "home", onClick: () => navigateTo("/") },
    { icon: SearchIcon, alt: "search", label: "Search", onClick: () => navigateTo("contact") },
    { icon: FavoritesIcon, alt: "favorites", label: "Favorites", onClick: () => navigateTo("contact") },
    { icon: HistoryIcon, alt: "history", onClick: () => navigateTo("contact") },
    { icon: EmailIcon, alt: "email", onClick: () => navigateTo("contact"), dropdown: true },
    { icon: PrinterIcon, alt: "print", onClick: () => navigateTo("contact") },
    { icon: MessengerIcon, alt: "messenger", onClick: () => navigateTo("contact") },
    { icon: DiscussIcon, alt: "discuss", onClick: () => navigateTo("contact") },
  ];

  const toolbarGroups: typeof toolbarButtons[] = [];
  for (let i = 0; i < toolbarButtons.length; i += 3) {
    toolbarGroups.push(toolbarButtons.slice(i, i + 3));
  }

  return (
    <div
      style={{
        width: "100%",
        flexShrink: 0,
        zIndex: 999,
        fontFamily: "Tahoma, sans-serif",
        background: "linear-gradient(to bottom, #f0f0f0 0%, #d4d0c8 100%)",
        borderBottom: "1px solid #a7abb3",
      }}
    >
      {/* Menu bar */}
      <div style={{ display: "flex", gap: 2, padding: "1px 4px" }}>
        {MENU_ITEMS.map((item) => (
          <span
            key={item}
            style={{
              fontSize: 10,
              color: "#000",
              cursor: "pointer",
              padding: "1px 6px",
              borderRadius: 2,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#316ac5";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#000";
            }}
          >
            {item}
          </span>
        ))}
      </div>

      {/* Toolbar row: groups of 3 icons, spread across the screen */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", gap: 4, padding: "1px 4px", borderBottom: "1px solid #dcdcdc" }}>
        {toolbarGroups.map((group, groupIndex) => (
          <Fragment key={groupIndex}>
            {groupIndex > 0 && <div style={{ width: 1, height: 16, background: "#c0c0c0", margin: "0 4px" }} />}
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              {group.map((btn) => (
                <button
                  key={btn.alt}
                  onClick={btn.onClick}
                  disabled={btn.disabled}
                  style={{
                    ...xpButtonStyle,
                    opacity: btn.disabled ? 0.4 : 1,
                    cursor: btn.disabled ? "default" : "pointer",
                  }}
                  onMouseEnter={(e) => {
                    if (btn.disabled) return;
                    e.currentTarget.style.background = "#d5e5f7";
                  }}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <img src={btn.icon} alt={btn.alt} style={{ width: 16, height: 16 }} />
                  {btn.label && <span style={{ fontSize: 10 }}>{btn.label}</span>}
                  {btn.dropdown && <span style={{ fontSize: 7 }}>▼</span>}
                </button>
              ))}
            </div>
          </Fragment>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "2px 6px", borderBottom: "1px solid #a7abb3" }}>
        <span style={{ fontSize: 10, color: "#000" }}>Address</span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            flex: 1,
            border: "1px solid #7f9db9",
            background: "#fff",
            padding: "1px 4px",
            height: 18,
            borderRadius: 1,
          }}
        >
          <img src={FolderIcon} alt="folder" style={{ width: 14, height: 14 }} />
          <span style={{ fontSize: 10, color: "#000", flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {currentSection === "/" ? "https://portfolio-pena-luis-puce.vercel.app/" : currentSection}
          </span>
          <span style={{ fontSize: 9, color: "#000", cursor: "pointer" }}>▼</span>
        </div>

        <button
          onClick={() => navigateTo(currentSection)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            height: 18,
            padding: "0 6px",
            background: "linear-gradient(to bottom, #eaffea 0%, #7fc97f 100%)",
            border: "1px solid #4a934a",
            borderRadius: 2,
            cursor: "pointer",
            fontSize: 10,
            fontWeight: "bold",
            fontFamily: "Tahoma, sans-serif",
            color: "#000",
          }}
        >
          <img src={GoIcon} alt="go" style={{ width: 12, height: 12 }} />
          Go
        </button>

        <span style={{ fontSize: 10, color: "#000", marginLeft: 4, cursor: "pointer" }}>Links »</span>
      </div>
    </div>
  );
};

export default Header;