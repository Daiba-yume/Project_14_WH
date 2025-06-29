import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Suspense, lazy } from "react";
// Charge le composant uniquement quand il est affiché (chargement à la demande)
const Landing = lazy(() => import("./pages/Landing/Landing"));
const Employee = lazy(() => import("./pages/Home/Employee"));
const EmployeeList = lazy(() => import("./pages/Employee/EmployeeList"));
function App() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/employeeList" element={<EmployeeList />} />
        </Routes>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
