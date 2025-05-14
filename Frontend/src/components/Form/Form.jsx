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
import { useDispatch } from "react-redux";
import { addEmployee } from "../../Redux/Slices/employeesSlice";

function Form({ onSuccess }) {
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const dispatch = useDispatch();
  const [countryid] = useState("US");
  const [stateid, setStateid] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    department: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployee(formData));

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
        <InputField id="firstName" label="First Name" onChange={handleChange} />
        <InputField id="lastName" label="Last Name" onChange={handleChange} />
        {/* Input Date */}
        <div className="formGroup">
          <label className="labelPicker">Date of Birth</label>
          <DatePicker
            selected={dateOfBirth}
            onChange={(date) => {
              setDateOfBirth(date);
              setFormData((prevData) => ({
                ...prevData,
                dateOfBirth: date.toISOString(),
              }));
            }}
            id="dateOfBirth"
            dateFormat="dd/MM/yyyy"
            className="inputPicker"
            required
          />
        </div>
        <div className="formGroup">
          <label className="labelPicker">Start Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              setFormData((prevData) => ({
                ...prevData,
                startDate: date.toISOString(), // convertit la date en text pour la stocker dans redux
              }));
            }}
            id="startDate"
            dateFormat="dd/MM/yyyy"
            className="inputPicker"
            required
          />
        </div>
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
          onChange={handleChange}
        />
        {/* Adress */}
        <FieldSet legend="Adress">
          <InputField id="street" label="Street" onChange={handleChange} />
          <InputField id="city" label="City" onChange={handleChange} />
          <StateSelect
            countryid={countryid}
            stateid={stateid}
            placeholder="Select State"
            onChange={(e) => {
              setStateid(e.id);
              setFormData((prevData) => ({
                ...prevData,
                state: e.name,
              }));
            }}
          />
          <InputField
            id="zipCode"
            label="Zip code"
            type="number"
            onChange={handleChange}
          />
        </FieldSet>

        <button className="save" type="submit">
          Save
        </button>
      </form>
    </section>
  );
}

export default Form;
