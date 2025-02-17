import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();
  function handleLogOut() {
    localStorage.setItem("token", "");
    navigate("/");
  }
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Welcome To Dashboard!</h1>
      <button onClick={() => handleLogOut()}>Log Out</button>
    </div>
  );
};

export default DashboardPage;
