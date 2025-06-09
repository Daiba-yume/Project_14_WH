import { useState } from "react";
import CalendarHeader from "../Calendar/CalendarHeader";
import CalendarGrid from "../Calendar/CalendarGrid";
import "./DatePicker.scss";

function PickerDate() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <input onClick={() => setIsOpen(!isOpen)} className="inputCal" />
      {isOpen && (
        <div
          style={{
            position: "absolute",
            display: "grid",
            gridTemplateColumns: "repeat(7,30px",
            gap: "5px",
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginTop: "5px",
            backgroundColor: "white",
            zIndex: 1,
            textAlign: "center",
          }}
        >
          <CalendarHeader />
          <CalendarGrid />
        </div>
      )}
    </div>
  );
}

export default PickerDate;
