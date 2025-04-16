import { Link } from "react-router-dom";

function EmployeeList() {
  return (
    <section>
      <div>Employee</div>
      <Link to="/employee" className="employee">
        Home
      </Link>
    </section>
  );
}

export default EmployeeList;
