import "./SelectField.scss";
function SelectField({ id, label, option }) {
  return (
    <div className="inputWrapper">
      <label>{label}</label>
      <select id={id}>
        {option.map((opt, i) => (
          <option key={i}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;
