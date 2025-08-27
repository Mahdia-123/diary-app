import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import StudentsDetails from "./pages/StudentsDetails";
import TeachersDetails from "./pages/TeachersDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ paddingTop: "100px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/students/:id" element={<StudentsDetails />} />
          <Route path="/teachers/:id" element={<TeachersDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
