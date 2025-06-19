function CalendarGrid({ date, minDate, onSelectDate, daysStyle = {} }) {
  const month = date.getMonth();
  const year = date.getFullYear();

  const totalDays = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const firstDay = new Date(year, month, 1).getDay();
  const daysBefore = firstDay === 0 ? 6 : firstDay - 1;

  const generateDays = () => {
    const days = [];
    // jours du mois précédent
    for (let i = daysInPrevMonth - daysBefore + 1; i <= daysInPrevMonth; i++) {
      days.push({ day: i, currentMonth: false });
    }
    // jours du mois courant
    for (let i = 1; i <= totalDays; i++) {
      days.push({ day: i, currentMonth: true });
    }

    const totalCells = 42;
    const daysAfter = totalCells - days.length;
    // jours du mois suivant
    for (let i = 1; i <= daysAfter; i++) {
      days.push({ day: i, currentMonth: false });
    }
    return days;
  };

  const daysInMonth = generateDays();

  return (
    <>
      {/* Jours du mois */}
      {daysInMonth.map(({ day, currentMonth }, index) => {
        const isTooYoung = currentMonth && new Date(year, month, day) > minDate;
        const grayStyle = {
          opacity: currentMonth ? 1 : 0.4,
          cursor: currentMonth && !isTooYoung ? "pointer" : "default",
        };
        return (
          <div
            key={index}
            onClick={() => {
              if (!isTooYoung && currentMonth) {
                onSelectDate(new Date(year, month, day));
              }
            }}
            style={{ ...daysStyle, ...grayStyle }}
          >
            {day}
          </div>
        );
      })}
    </>
  );
}

export default CalendarGrid;
