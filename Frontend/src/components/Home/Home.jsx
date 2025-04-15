import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <Link to="/employee" className="employee">
        View Current Employees
      </Link>
      <div>Create Employee </div>
    </section>
  );
}

export default Home;
