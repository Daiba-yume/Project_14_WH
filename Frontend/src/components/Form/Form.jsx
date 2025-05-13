import InputField from "../../utils/Input/InputField";
import SelectField from "../../utils/Select/SelectField";
import { Link } from "react-router-dom";
import "./Form.scss";
import FieldSet from "../../utils/Field/FieldSet";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { StateSelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import { useState } from "react";

function Form({ onSuccess }) {
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [startDate, setStartDate] = useState(null);

  const [countryid] = useState("US");
  const [stateid, setStateid] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSuccess) {
      onSuccess();
    }
  };
  return (
    <section className="formContainer">
      <div className="titleContainer">
        <h1>HRnet</h1>
        <Link to="/employeeList" className="employeeList">
          See All Employees
        </Link>
      </div>
      <h2 className="titleEmployee">Create Employee</h2>
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
          <InputField id="city" label="City" />
          <StateSelect
            countryid={countryid}
            stateid={stateid}
            placeHolder="Select Sate"
            onChange={(e) => {
              setStateid(e.id);
            }}
          />
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
    </section>
  );
}

export default Form;
