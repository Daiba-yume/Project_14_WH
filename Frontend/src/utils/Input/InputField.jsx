import "./InputField.scss";
function InputField({ id, label, name, type = "text", value, onChange }) {
  return (
    <div className="inputWrapper">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        required
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
}

export default InputField;
