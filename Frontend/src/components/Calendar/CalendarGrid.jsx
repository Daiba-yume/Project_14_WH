function CalendarGrid() {
  const daysInMonth = [];
  for (let i = 1; i <= 30; i++) {
    daysInMonth.push(i);
  }
  return (
    <>
      {/* Jours du mois */}
      {daysInMonth.map((day) => (
        <div style={{ fontSize: "12px", color: "#627031", fontWeight: "bold" }}>
          {day}
        </div>
      ))}
    </>
  );
}

export default CalendarGrid;
