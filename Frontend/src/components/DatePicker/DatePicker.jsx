import { useState } from "react";
import CalendarHeader from "../Calendar/CalendarHeader";
import CalendarGrid from "../Calendar/CalendarGrid";
import "./DatePicker.scss";
import CalendarNav from "../Calendar/CalendarNav";

function PickerDate({
  minAge = null,
  navLabelStyle = {},
  selectStyle = {},
  weekDaysStyle = {},
  daysColor = "#627031",
}) {
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
          <div className="calendarContainer">
            <CalendarNav
              date={currentdate}
              setDate={setCurrentDate}
              navLabelStyle={navLabelStyle}
              selectStyle={selectStyle}
            />
            <div className="calendarGrid">
              <CalendarHeader locale={locale} weekDaysStyle={weekDaysStyle} />
              <CalendarGrid
                locale={locale}
                date={currentdate}
                onSelectDate={handleSelectDate}
                daysColor={daysColor}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default PickerDate;
