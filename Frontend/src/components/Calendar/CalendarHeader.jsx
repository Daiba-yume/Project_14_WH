import "../DatePicker/DatePicker.scss";

function CalendarHeader({ locale = "fr-FR", weekDaysStyle = {} }) {
  const daysFR = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
  const daysEN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fry", "Sat"];
  const days = locale.startsWith("fr") ? daysFR : daysEN;
  return (
    <>
      {/* Jours de la semaine */}
      {days.map((day) => (
        <div className="weekDays" key={day} style={weekDaysStyle}>
          {day}
        </div>
      ))}
    </>
  );
}

export default CalendarHeader;
