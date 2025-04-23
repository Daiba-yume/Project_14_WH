import "./SelectField.scss";
function SelectField({ id, label, options = [] }) {
  return (
    <div className="inputWrapper">
      <label>{label}</label>
      <select id={id}>
        {options.map((opt, i) => (
          <option key={i}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;
