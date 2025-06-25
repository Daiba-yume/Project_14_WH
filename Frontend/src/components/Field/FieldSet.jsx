import "./FieldSet.scss";

const FieldSet = ({ legend, children }) => {
  return (
    <fieldset className="fieldset">
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
};

export default FieldSet;
