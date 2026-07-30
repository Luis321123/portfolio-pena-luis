import { useState } from "react";

interface CalendarXPProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendarXP = ({ isOpen, onClose }: CalendarXPProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  if (!isOpen) return null;

  const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  const daysOfWeek = ["L", "M", "M", "J", "V", "S", "D"];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const firstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleSelectDate = (day: number) => {
    setSelectedDate(new Date(year, month, day));
  };

  const isToday = (day: number) => {
    const today = new Date();
    return today.getDate() === day && 
           today.getMonth() === month && 
           today.getFullYear() === year;
  };

  const isSelected = (day: number) => {
    return selectedDate.getDate() === day && 
           selectedDate.getMonth() === month && 
           selectedDate.getFullYear() === year;
  };

  const days = [];
  
  for (let i = firstDay - 1; i >= 0; i--) {
    days.push({ day: daysInPrevMonth - i, isCurrentMonth: false });
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push({ day: i, isCurrentMonth: true });
  }

  const remainingDays = 42 - days.length;
  for (let i = 1; i <= remainingDays; i++) {
    days.push({ day: i, isCurrentMonth: false });
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: 44,
        right: 8,
        width: 210, 
        background: "#d4d0c8",
        border: "2px solid #0a2454",
        borderRadius: "4px 4px 0 0",
        boxShadow: "4px 4px 12px rgba(0,0,0,0.4)",
        zIndex: 99999998,
        fontFamily: "Tahoma, Segoe UI, sans-serif",
        userSelect: "none",
        padding: "4px 6px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2px 4px",
          marginBottom: "2px",
        }}
      >
        <button
          onClick={handlePrevMonth}
          style={{
            background: "transparent",
            border: "1px solid #a6a49f",
            borderRadius: "2px",
            padding: "0 6px",
            cursor: "pointer",
            fontSize: "12px",
            fontWeight: "bold",
            color: "#1a1a1a",
            height: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          ◄
        </button>
        
        <span style={{ fontSize: "12px", fontWeight: "bold", color: "#1a1a1a" }}>
          {months[month]} {year}
        </span>
        
        <button
          onClick={handleNextMonth}
          style={{
            background: "transparent",
            border: "1px solid #a6a49f",
            borderRadius: "2px",
            padding: "0 6px",
            cursor: "pointer",
            fontSize: "12px",
            fontWeight: "bold",
            color: "#1a1a1a",
            height: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          ►
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "1px",
          marginBottom: "1px",
        }}
      >
        {daysOfWeek.map((day, index) => (
          <div
            key={index}
            style={{
              textAlign: "center",
              fontSize: "10px",
              fontWeight: "bold",
              color: "#1a1a1a",
              padding: "1px 0",
              background: "#e8e4dc",
            }}
          >
            {day}
          </div>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "1px",
        }}
      >
        {days.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              if (item.isCurrentMonth) {
                handleSelectDate(item.day);
              }
            }}
            style={{
              textAlign: "center",
              padding: "3px 0",
              fontSize: "11px",
              cursor: item.isCurrentMonth ? "pointer" : "default",
              background: !item.isCurrentMonth 
                ? "#e8e4dc" 
                : isToday(item.day)
                ? "#245edb"
                : isSelected(item.day)
                ? "#3a7bd5"
                : "white",
              color: !item.isCurrentMonth 
                ? "#999" 
                : isToday(item.day) || isSelected(item.day)
                ? "white"
                : "#1a1a1a",
              borderRadius: "2px",
              fontWeight: isToday(item.day) ? "bold" : "normal",
            }}
            onMouseEnter={(e) => {
              if (item.isCurrentMonth && !isToday(item.day) && !isSelected(item.day)) {
                e.currentTarget.style.background = "#e8e4dc";
              }
            }}
            onMouseLeave={(e) => {
              if (item.isCurrentMonth && !isToday(item.day) && !isSelected(item.day)) {
                e.currentTarget.style.background = "white";
              }
            }}
          >
            {item.day}
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "4px",
          paddingTop: "4px",
          borderTop: "1px solid #a6a49f",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "10px", color: "#1a1a1a" }}>
          {selectedDate.toLocaleDateString("es-ES", {
            weekday: "short",
            day: "numeric",
            month: "short",
          })}
        </span>
        <button
          onClick={onClose}
          style={{
            background: "transparent",
            border: "1px solid #a6a49f",
            borderRadius: "2px",
            padding: "0 8px",
            cursor: "pointer",
            fontSize: "10px",
            color: "#1a1a1a",
            height: "18px",
            display: "flex",
            alignItems: "center",
          }}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default CalendarXP;