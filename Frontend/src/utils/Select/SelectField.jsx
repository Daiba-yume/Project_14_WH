function SelectField({ id, label, option }) {
  return (
    <>
      <label>{label}</label>
      <select id={id}>
        {option.map((opt, i) => (
          <option key={i}>{opt}</option>
        ))}
      </select>
    </>
  );
}

export default SelectField;
