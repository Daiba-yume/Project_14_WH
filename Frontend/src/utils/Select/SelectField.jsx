import "./SelectField.scss";
function SelectField({
  id,
  label,
  name,
  options = [],
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="inputWrapper">
      <label>{label}</label>
      <select id={id} name={name} required value={value} onChange={onChange}>
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((opt, i) => (
          <option key={i}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;
