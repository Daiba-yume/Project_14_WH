import InputField from "../../utils/Input/InputField";
import SelectField from "../../utils/Select/SelectField";
import { Link } from "react-router-dom";
import "./Form.scss";
import FieldSet from "../../utils/Field/FieldSet";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../Redux/Slices/employeesSlice";
import states from "../../data/states.json";
import DatePicker from "datepicker-wh-react";

function Form({ onSuccess }) {
  const [dateOfBirth, setDateOfBirth] = useState(null);
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
      <h1 className="titleEmployee">Create Employee</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="rowInput">
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
        </div>
        <div className="rowInput">
          {/* Input Date */}
          <div className="formGroup">
            <label className="labelPicker" htmlFor="dateOfBirth">
              Date of Birth
            </label>
            <DatePicker
              navLabelStyle={{ color: "#1a4301" }}
              selectStyle={{ backgroundColor: "#adc178" }}
              weekDaysStyle={{ color: "#424a26" }}
              daysColor="#627031"
              minAge={18}
              value={dateOfBirth}
              onChange={(date) => {
                setDateOfBirth(date);
                setFormData((prev) => ({
                  ...prev,
                  dateOfBirth: date.toLocaleDateString(),
                }));
              }}
              required
            />
          </div>
          <div className="formGroup">
            <label className="labelPicker" htmlFor="startDate">
              Start Date
            </label>
            <DatePicker
              navLabelStyle={{ color: "#1a4301" }}
              selectStyle={{ backgroundColor: "#adc178" }}
              weekDaysStyle={{ color: "#424a26" }}
              daysColor="#627031"
              value={startDate}
              onChange={(date) => {
                setStartDate(date);
                setFormData((prevData) => ({
                  ...prevData,
                  startDate: date.toLocaleDateString(),
                }));
              }}
              className="inputPicker"
              required
            />
          </div>
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
