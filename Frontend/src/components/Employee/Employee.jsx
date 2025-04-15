import React from "react";
import { Link } from "react-router-dom";

function Employee() {
  return (
    <section>
      <div>Employee</div>
      <Link to="/" className="home">
        Home
      </Link>
    </section>
  );
}

export default Employee;
