import { useState } from "react";
import CalendarHeader from "../Calendar/CalendarHeader";
import CalendarGrid from "../Calendar/CalendarGrid";
import "./DatePicker.scss";
import CalendarNav from "../Calendar/CalendarNav";

function PickerDate() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentdate, setCurrentDate] = useState(new Date());

  return (
    <div>
      <input onClick={() => setIsOpen(!isOpen)} className="inputCal" />
      {isOpen && (
        <div
          style={{
            position: "absolute",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginTop: "5px",
            backgroundColor: "white",
            zIndex: 1,
            textAlign: "center",
          }}
        >
          <CalendarNav date={currentdate} setDate={setCurrentDate} />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7,30px)",
              gap: "5px",
              padding: "12px",
            }}
          >
            <CalendarHeader />
            <CalendarGrid />
          </div>
        </div>
      )}
    </div>
  );
}

export default PickerDate;
