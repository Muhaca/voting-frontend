import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import TabelData from "./components/TabelData";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />

        <Route path="/" element={<Dashboard />} />
        <Route path="/data" element={<TabelData />} />
      </Routes>
    </Router>
    // <div>
    //   <MainAppBar />
    //   <MainLayout>
    //     <Dashboard />
    //   </MainLayout>
    // </div>
  );
}

export default App;
