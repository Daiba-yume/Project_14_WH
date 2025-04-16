import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Employee from "./components/Employee/Employee";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
