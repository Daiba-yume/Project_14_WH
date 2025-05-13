import { Link } from "react-router-dom";
import "./EmployeeList.scss";

function EmployeeList() {
  return (
    <section className="container">
      <h1>All Employees</h1>
      <Link to="/employee" className="employee">
        Employee
      </Link>
    </section>
  );
}

export default EmployeeList;
