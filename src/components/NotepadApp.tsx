import { useState } from "react";
import { useTranslation } from "react-i18next";

const NotepadApp = () => {
  const { t } = useTranslation();
  const [text, setText] = useState(t("notepad.greeting"))

  return (
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      style={{
        width: "100%",
        height: "100%",
        border: "none",
        outline: "none",
        resize: "none",
        padding: 8,
        fontFamily: "Consolas, 'Courier New', monospace",
        fontSize: 13,
        lineHeight: 1.4,
        boxSizing: "border-box",
      }}
    />
  );
};

export default NotepadApp;
