import InputField from "../../utils/Input/InputField";
import SelectField from "../../utils/Select/SelectField";
import { Link } from "react-router-dom";
import "./Form.scss";
import FieldSet from "../../utils/Field/FieldSet";

function Form({ onSuccess }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSuccess) {
      onSuccess();
    }
  };
  return (
    <div className="formContainer">
      <h1>HRnet</h1>
      <Link to="/employeeList" className="employeeList">
        View Current Employees
      </Link>
      <h2>Create Employee</h2>
      <form className="form" onSubmit={handleSubmit}>
        <InputField id="firstName" label="First Name" />
        <InputField id="lastName" label="Last Name" />
        <InputField id="dateOfBirth" label="Date Of Birth" type="date" />
        <InputField id="startDate" label="Start Date" type="date" />

        <FieldSet legend="Adress">
          <InputField id="street" label="Street" />
          <InputField id="city" label="City" />
          <SelectField id="state" label="State" />
          <InputField id="zip-code" label="Zip code" type="number" />
        </FieldSet>

        <SelectField
          id="department"
          label="Department"
          options={[
            "Sales",
            "Marketing",
            "Engineering",
            "Human Ressources",
            "Legal",
          ]}
        />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Form;
