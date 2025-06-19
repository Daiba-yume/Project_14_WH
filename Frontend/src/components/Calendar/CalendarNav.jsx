import { TbArrowLeftToArc, TbArrowRightToArc } from "react-icons/tb";
function CalendarNav({ date, setDate, navStyle = {}, navLabelStyle = {} }) {
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

  return (
    <div
      style={{
        ...navStyle,
      }}
    >
      <div>
        <TbArrowLeftToArc onClick={goToPreviousMonth} size={20} />
      </div>
      <span style={{ ...navLabelStyle }}>
        {month.charAt(0).toUpperCase() + month.slice(1)} {year}
      </span>
      <div>
        <TbArrowRightToArc onClick={goToNextMonth} size={20} />
      </div>
    </div>
  );
}

export default CalendarNav;
