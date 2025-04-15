import React from "react";
import { Link } from "react-router-dom";
import Form from "../Form/Form";

function Home() {
  return (
    <section>
      <Link to="/employee" className="employee">
        View Current Employees
      </Link>
      <Form />
    </section>
  );
}

export default Home;
