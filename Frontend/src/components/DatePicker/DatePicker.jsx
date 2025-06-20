import { useState } from "react";
import CalendarHeader from "../Calendar/CalendarHeader";
import CalendarGrid from "../Calendar/CalendarGrid";
import "./DatePicker.scss";
import CalendarNav from "../Calendar/CalendarNav";

function PickerDate({ minAge = null }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentdate, setCurrentDate] = useState(new Date());
  const [inputValue, setInputValue] = useState("");

  const locale = "fr-FR"; // par défaut français "fr-Fr", sinon switch en anglais "en-US"

  const minDate =
    minAge !== null
      ? new Date(new Date().setFullYear(new Date().getFullYear() - minAge))
      : null;

  const handleSelectDate = (date) => {
    if (minDate && date > minDate) {
      alert(`Vous devez avoir au moins ${minAge} ans.`);
      return;
    }
    setCurrentDate(date);
    setInputValue(date.toLocaleDateString(locale));
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <input
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              setIsOpen(!isOpen);
            }
          }}
          className="inputCal"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="jj/mm/aaaa"
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
              date={currentdate}
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
              selectStyle={{
                backgroundColor: "#adc178",
                borderRadius: "5px",
                border: "none",
                padding: "5px",
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
                locale={locale}
                weekDaysStyle={{
                  fontWeight: "bold",
                  fontSize: "13px",
                  color: "#424a26",
                }}
              />
              <CalendarGrid
                locale={locale}
                date={currentdate}
                onSelectDate={handleSelectDate}
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
