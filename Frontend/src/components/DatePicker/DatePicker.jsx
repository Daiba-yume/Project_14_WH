import { useState } from "react";

function DatePicker() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <input onClick={() => setIsOpen(!isOpen)} />
      {isOpen && <div>calendrier</div>}
    </div>
  );
}

export default DatePicker;
