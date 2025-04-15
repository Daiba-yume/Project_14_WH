function InputField({ id, label, type = "text" }) {
  return (
    <>
      <label>{label}</label>
      <input id={id} type={type}></input>
    </>
  );
}

export default InputField;
