import InputField from "../../utils/Input/InputField";
import SelectField from "../../utils/Select/SelectField";
import { Link } from "react-router-dom";
import "./Form.scss";
import FieldSet from "../../utils/Field/FieldSet";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

function Form({ onSuccess }) {
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [startDate, setStartDate] = useState(null);
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
        <div className="formGroup formField">
          <label className="labelPicker">Date of Birth</label>
          <DatePicker
            selected={dateOfBirth}
            onChange={(date) => setDateOfBirth(date)}
            id="dateOfBirth"
            dateFormat="MM/dd/yyyy"
            className="inputPicker"
          />
        </div>

        <div className="formGroup formField">
          <label className="labelPicker">Start Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            id="startDate"
            dateFormat="MM/dd/yyyy"
            className="inputPicker"
          />
        </div>

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

        <button className="save" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default Form;
