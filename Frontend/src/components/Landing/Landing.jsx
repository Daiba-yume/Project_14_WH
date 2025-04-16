import { Link } from "react-router-dom";
import "./Landing.scss";

function Landing() {
  return (
    <section className="container">
      <h1>Bienvenue sur Wealth Health</h1>
      <p> Cliquez sur le bouton pour créez un employee</p>
      <div className="button">
        <Link to="/home">
          <button>Create Employee</button>
        </Link>
      </div>
    </section>
  );
}

export default Landing;
