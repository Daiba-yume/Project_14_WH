import "./InputField.scss";
function InputField({ id, label, type = "text" }) {
  return (
    <div className="inputWrapper">
      <label>{label}</label>
      <input id={id} type={type}></input>
    </div>
  );
}

export default InputField;
