function CalendarGrid({ date }) {
  const month = date.getMonth();
  const year = date.getFullYear();

  const totalDays = new Date(year, month + 1, 0).getDate();

  const firstDay = new Date(year, month, 1).getDay();
  const daysBefore = firstDay === 0 ? 6 : firstDay - 1;

  const daysInMonth = [];
  // Ajout des jours vides avant le début du mois
  for (let i = 1; i <= daysBefore; i++) {
    daysInMonth.push(null);
  }
  // Remplissage des jours avant le début du mois
  for (let i = 1; i <= totalDays; i++) {
    daysInMonth.push(i);
  }

  return (
    <>
      {/* Jours du mois */}
      {daysInMonth.map((day, index) => (
        <div
          key={index}
          style={{ fontSize: "12px", color: "#627031", fontWeight: "bold" }}
        >
          {day || ""}
        </div>
      ))}
    </>
  );
}

export default CalendarGrid;
