function CalendarHeader() {
  const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

  return (
    <>
      {/* Jours de la semaine */}
      {days.map((day) => (
        <div
          key={day}
          style={{
            fontWeight: "bold",
            fontSize: "13px",
            color: "#424a26",
          }}
        >
          {day}
        </div>
      ))}
    </>
  );
}

export default CalendarHeader;
