import { useTranslation } from "react-i18next";
import { changeLanguage } from "@/i18n";

const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const current = i18n.language.startsWith("en") ? "en" : "es";

  const toggle = () => {
    changeLanguage(current === "en" ? "es" : "en");
  };

  return (
    <button
      onClick={toggle}
      title={i18n.t("languageSwitch.title")}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        padding: "1px 8px",
        background: "transparent",
        border: "1px solid transparent",
        borderRadius: 3,
        cursor: "pointer",
        fontSize: 10,
        fontFamily: "Tahoma, sans-serif",
        color: "#000",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#d5e5f7";
        e.currentTarget.style.borderColor = "#316ac5";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.borderColor = "transparent";
      }}
    >
      <span style={{ fontWeight: "bold" }}>{current === "en" ? "EN" : "ES"}</span>
      <span style={{ opacity: 0.6 }}>|</span>
      <span>{i18n.t("languageSwitch.label")}</span>
    </button>
  );
};

export default LanguageSwitch;
