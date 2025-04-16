import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Landing from "./pages/Landing/Landing";
import EmployeeList from "./pages/Employee/EmployeeList";
import Employee from "./pages/Home/Employee";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/employeeList" element={<EmployeeList />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
