import InputField from "../../utils/Input/InputField";
import SelectField from "../../utils/Select/SelectField";
import { Link } from "react-router-dom";
import "./Form.scss";
import FieldSet from "../../utils/Field/FieldSet";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../Redux/Slices/employeesSlice";
import states from "../../data/states.json";
import PickerDate from "../DatePicker/DatePicker";

function Form({ onSuccess }) {
  // const [dateOfBirth, setDateOfBirth] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const dispatch = useDispatch();

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
        <Link to="/employeeList" className="allEmployee">
          See All Employees
        </Link>
      </div>
      <h2 className="titleEmployee">Create Employee</h2>
      <form className="form" onSubmit={handleSubmit}>
        <InputField
          id="firstName"
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <InputField
          id="lastName"
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        {/* Input Date */}
        <div className="formGroup">
          <label className="labelPicker" htmlFor="dateOfBirth">
            Date of Birth
          </label>
          <PickerDate
            minAge={18}
            value={formData.dateOfBirth}
            onChange={(date) =>
              setFormData((prev) => ({ ...prev, dateOfBirth: date }))
            }
            required
          />
          {/* <DatePicker
            selected={dateOfBirth}
            onChange={(date) => {
              setDateOfBirth(date);
              setFormData((prevData) => ({
                ...prevData,
                dateOfBirth: date.toLocaleDateString(),
              }));
            }}
            id="dateOfBirth"
            name="dateOfBirth"
            dateFormat="dd/MM/yyyy"
            className="inputPicker"
            required
          /> */}
        </div>
        <div className="formGroup">
          <label className="labelPicker" htmlFor="startDate">
            Start Date
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              setFormData((prevData) => ({
                ...prevData,
                startDate: date.toLocaleDateString(),
              }));
            }}
            id="startDate"
            name="startDate"
            dateFormat="dd/MM/yyyy"
            className="inputPicker"
            required
          />
        </div>
        <SelectField
          id="department"
          label="Department"
          name="department"
          value={formData.department}
          placeholder="Select Department"
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
          <InputField
            id="street"
            label="Street"
            name="street"
            value={formData.street}
            onChange={handleChange}
          />
          <InputField
            id="city"
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          <SelectField
            id="state"
            label="State"
            name="state"
            placeholder="Select State"
            value={formData.state}
            onChange={handleChange}
            options={states.map((state) => state.name)}
            required
          />
          <InputField
            id="zipCode"
            label="Zip code"
            name="zipCode"
            value={formData.zipCode}
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
