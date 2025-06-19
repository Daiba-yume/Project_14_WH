function CalendarGrid({ date, minDate, onSelectDate }) {
  const month = date.getMonth();
  const year = date.getFullYear();

  const totalDays = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const firstDay = new Date(year, month, 1).getDay();
  const daysBefore = firstDay === 0 ? 6 : firstDay - 1;

  const daysInMonth = [];
  // jours du mois précédent
  for (let i = daysInPrevMonth - daysBefore + 1; i <= daysInPrevMonth; i++) {
    daysInMonth.push({ day: i, currentMonth: false });
  }
  // jours du mois courant
  for (let i = 1; i <= totalDays; i++) {
    daysInMonth.push({ day: i, currentMonth: true });
  }

  const totalCells = 42;
  const daysAfter = totalCells - daysInMonth.length;
  // jours du mois suivant
  for (let i = 1; i <= daysAfter; i++) {
    daysInMonth.push({ day: i, currentMonth: false });
  }
  return (
    <>
      {/* Jours du mois */}
      {daysInMonth.map(({ day, currentMonth }, index) => {
        const isTooYoung = currentMonth && new Date(year, month, day) > minDate;
        return (
          <div
            key={index}
            onClick={() => {
              if (!isTooYoung && currentMonth) {
                onSelectDate(new Date(year, month, day));
              }
            }}
            style={{
              fontSize: "12px",
              color: "#627031",
              fontWeight: "bold",
              cursor: currentMonth && !isTooYoung ? "pointer" : "default",
              opacity: currentMonth ? 1 : 0.4,
            }}
          >
            {day || ""}
          </div>
        );
      })}
    </>
  );
}

export default CalendarGrid;
