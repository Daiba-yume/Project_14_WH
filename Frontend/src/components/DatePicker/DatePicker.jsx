import { useState } from "react";
import CalendarHeader from "../Calendar/CalendarHeader";
import CalendarGrid from "../Calendar/CalendarGrid";
import "./DatePicker.scss";
import CalendarNav from "../Calendar/CalendarNav";

function PickerDate() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentdate, setCurrentDate] = useState(new Date());
  const [inputValue, setInputValue] = useState("");

  const locale = "fr-FR"; // par défaut français "fr-Fr", sinon switch en anglais "en-US"

  const minAge = 18;
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - minAge);

  return (
    <>
      <div>
        <input
          onClick={() => setIsOpen(!isOpen)}
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
                minDate={minDate}
                onSelectDate={(date) => {
                  setCurrentDate(date);
                  setInputValue(date.toLocaleDateString());
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
