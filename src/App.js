import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TabelData from "./pages/TabelData";
import Login from "./components/Login";
import Added from "./pages/Added";
import Error400 from "./pages/errors/400";
import Error403 from "./pages/errors/403";
import Error404 from "./pages/errors/404";
import ErrorConnection from "./pages/errors/ErrorConnection";
import ErrorLayout from "./layouts/ErrorLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* ErrorLayout */}
        <Route element={<ErrorLayout> <Outlet /> </ErrorLayout>}>
          <Route path="/*" element={<Error404 />} />
          <Route path="/error-400" element={<Error400 />} />
          <Route path="/error-403" element={<Error403 />} />
          <Route path="/error-404" element={<Error404 />} />
          <Route path="/error-conection" element={<ErrorConnection />} />
        </Route>


        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/data" element={<TabelData />} />
        <Route exact path="/add" element={<Added />} />
      </Routes>
    </Router>
  );
}

export default App;
