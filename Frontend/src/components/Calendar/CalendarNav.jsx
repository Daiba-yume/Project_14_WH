import { TbArrowBadgeLeft, TbArrowBadgeRight } from "react-icons/tb";
function CalendarNav() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "20px",
        padding: "0 10px",
      }}
    >
      <div>
        <TbArrowBadgeLeft />
      </div>
      <span
        label="monthLabel"
        style={{ fontWeight: "bold", textAlign: "center", color: "#1a4301" }}
      >
        Juin 2025
      </span>
      <div>
        <TbArrowBadgeRight />
      </div>
    </div>
  );
}

export default CalendarNav;
