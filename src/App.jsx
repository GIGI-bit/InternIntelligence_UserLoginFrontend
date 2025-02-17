import { Route, Routes } from "react-router-dom";
import AuthPage from "./Auth/AuthPage";
import DashboardPage from "./Dashboard/DashboardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
