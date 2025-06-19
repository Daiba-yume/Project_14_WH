import { useState } from "react";
import CalendarHeader from "../Calendar/CalendarHeader";
import CalendarGrid from "../Calendar/CalendarGrid";
import "./DatePicker.scss";
import CalendarNav from "../Calendar/CalendarNav";

function PickerDate() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentdate, setCurrentDate] = useState(null);

  const displayDate = currentdate || new Date();

  const minAge = 18;
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - minAge);

  return (
    <>
      <div>
        <input
          onClick={() => setIsOpen(!isOpen)}
          className="inputCal"
          value={currentdate ? currentdate.toLocaleDateString() : ""}
          readOnly
        />
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
            <CalendarNav
              date={displayDate}
              setDate={setCurrentDate}
              navStyle={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "20px",
                padding: "10px 20px 0px",
              }}
              navLabelStyle={{
                fontWeight: "bold",
                textAlign: "center",
                color: "#1a4301",
              }}
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(7,30px)",
                gap: "5px",
                padding: "12px",
              }}
            >
              <CalendarHeader
                weekDaysStyle={{
                  fontWeight: "bold",
                  fontSize: "13px",
                  color: "#424a26",
                }}
              />
              <CalendarGrid
                date={displayDate}
                minDate={minDate}
                onSelectDate={(selectedDate) => {
                  setCurrentDate(selectedDate);
                  setIsOpen(false);
                }}
                daysStyle={{
                  fontSize: "12px",
                  color: "#627031",
                  fontWeight: "bold",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default PickerDate;
