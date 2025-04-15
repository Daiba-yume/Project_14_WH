import InputField from "../../utils/Input/InputField";
import SelectField from "../../utils/Select/SelectField";
import { Link } from "react-router-dom";
import "./Form.scss";

function Form() {
  return (
    <form className="form">
      <Link to="/employee" className="employee">
        View Current Employees
      </Link>
      <h2>Create Employee</h2>

      <InputField id="firstName" label="First Name" />
      <InputField id="lastName" label="Last Name" />
      <InputField id="dateOfBirth" label="Date Of Birth" type="date" />
      <InputField id="startDate" label="Start Date" type="date" />

      <SelectField
        id="department"
        label="Department"
        option={[
          "Sales",
          "Marketing",
          "Engineering",
          "Human Ressources",
          "Legal",
        ]}
      />

      <button type="submit">Save</button>
    </form>
  );
}

export default Form;
