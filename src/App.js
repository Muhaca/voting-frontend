import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TabelData from "./pages/TabelData";
import Login from "./components/Login";
import Added from "./pages/Added";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />

        <Route path="/" element={<Dashboard />} />
        <Route path="/data" element={<TabelData />} />
        <Route path="/add" element={<Added />} />
      </Routes>
    </Router>
  );
}

export default App;
