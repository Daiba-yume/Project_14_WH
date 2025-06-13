import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
function CalendarNav({ date, setDate }) {
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
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "20px",
        padding: "10px 20px 0px",
      }}
    >
      <div>
        <AiOutlineDoubleLeft onClick={goToPreviousMonth} />
      </div>
      <span
        label="monthLabel"
        style={{ fontWeight: "bold", textAlign: "center", color: "#1a4301" }}
      >
        {month.charAt(0).toUpperCase() + month.slice(1)} {year}
      </span>
      <div>
        <AiOutlineDoubleRight onClick={goToNextMonth} />
      </div>
    </div>
  );
}

export default CalendarNav;
