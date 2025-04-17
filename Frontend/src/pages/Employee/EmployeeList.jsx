import { Link } from "react-router-dom";
import "./EmployeeList.scss";

function EmployeeList() {
  return (
    <section className="container">
      <h1>Current Employees</h1>
      <Link to="/employee" className="employee">
        Employee
      </Link>
    </section>
  );
}

export default EmployeeList;
