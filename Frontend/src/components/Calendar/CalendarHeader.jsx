function CalendarHeader({ weekDaysStyle = {} }) {
  const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

  return (
    <>
      {/* Jours de la semaine */}
      {days.map((day) => (
        <div
          key={day}
          style={{
            ...weekDaysStyle,
          }}
        >
          {day}
        </div>
      ))}
    </>
  );
}

export default CalendarHeader;
