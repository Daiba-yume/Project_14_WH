import "../DatePicker.scss";

import { TbArrowLeftToArc, TbArrowRightToArc } from "react-icons/tb";
function CalendarNav({ date, setDate, navLabelStyle = {}, selectStyle = {} }) {
  const month = date.toLocaleString("fr-FR", { month: "long" });
  const year = date.getFullYear();

  const goToPreviousMonth = () => {
    const newDate = new Date(date);
    newDate.setMonth(date.getMonth() - 1);
    setDate(newDate);
  };

  const goToNextMonth = () => {
    const newDate = new Date(date);
    newDate.setMonth(date.getMonth() + 1);
    setDate(newDate);
  };

  const currentYear = new Date().getFullYear();
  const years = [];
  for (let y = currentYear; y >= currentYear - 60; y--) {
    years.push(y);
  }

  return (
    <div className="navStyle">
      <div
        role="button"
        tabIndex={0}
        aria-label="Mois précédent"
        onClick={goToPreviousMonth}
        onKeyDown={(e) => {
          if (e.key === "Enter") goToPreviousMonth();
        }}
      >
        <TbArrowLeftToArc size={20} />
      </div>
      <span className="navLabelStyle" style={navLabelStyle}>
        {month.charAt(0).toUpperCase() + month.slice(1)}
      </span>
      <select
        className="selectStyle"
        style={selectStyle}
        aria-label="Sélectionner l'année"
        value={year}
        onChange={(e) => {
          const newYear = Number(e.target.value);
          const newDate = new Date(date);
          newDate.setFullYear(newYear);
          setDate(newDate);
        }}
      >
        {years.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
      <div
        role="button"
        tabIndex={0}
        aria-label="Mois suivant"
        onClick={goToNextMonth}
        onKeyDown={(e) => {
          if (e.key === "Enter") goToNextMonth();
        }}
      >
        <TbArrowRightToArc size={20} />
      </div>
    </div>
  );
}

export default CalendarNav;
