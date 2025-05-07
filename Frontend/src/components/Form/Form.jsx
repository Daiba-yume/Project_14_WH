import InputField from "../../utils/Input/InputField";
import SelectField from "../../utils/Select/SelectField";
import { Link } from "react-router-dom";
import "./Form.scss";
import FieldSet from "../../utils/Field/FieldSet";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { StateSelect, CitySelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
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
        {/* Input Date */}
        <div className="formGroup">
          <label className="labelPicker">Date of Birth</label>
          <DatePicker
            selected={dateOfBirth}
            onChange={(date) => setDateOfBirth(date)}
            id="dateOfBirth"
            dateFormat="MM/dd/yyyy"
            className="inputPicker"
            required
          />
        </div>
        <div className="formGroup">
          <label className="labelPicker">Start Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            id="startDate"
            dateFormat="MM/dd/yyyy"
            className="inputPicker"
            required
          />
        </div>
        {/* Adress */}
        <FieldSet legend="Adress">
          <InputField id="street" label="Street" />
          <CitySelect placeHolder="Select City" />
          <StateSelect placeHolder="Select Sate" />
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
