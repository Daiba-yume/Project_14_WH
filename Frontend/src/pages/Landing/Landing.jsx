import { Link } from "react-router-dom";
import "./Landing.scss";

function Landing() {
  return (
    <section className="container">
      <h1>Welcome to HRnet</h1>
      <p>
        <em>Click here to create an employee</em>
      </p>

      <div className="button">
        <Link to="/employee">
          <button>Create Employee</button>
        </Link>
      </div>
    </section>
  );
}

export default Landing;
