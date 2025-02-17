import "./LogInPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function handleLogin(e) {
    e.preventDefault();
    if (username !== null && password !== null) {
      try {
        var requestData = { username: username, password: password };
        const response = await fetch("https://localhost:7286/api/Auth/signin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestData),
        });
        console.log(response);
        if (response.ok) {
          var data = await response.json();
          localStorage.setItem("token", data.token);
          navigate("/dashboard");
          console.log(data.token);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <div className="login-div">
      <h1 className="text-3xl font-bold mb-2">Log In</h1>
      <p className="text-gray-500 mb-6">
        Enter your email and password to log in.
      </p>

      <form className="login-form" onSubmit={(e) => handleLogin(e)}>
        <div className="login-input-div">
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
            type="text"
            placeholder="Enter your username"
          />
        </div>

        <div className="login-input-div">
          <label className="block mt-4 text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            className="login-input"
          />
        </div>

        <button type="submit" className="login-submit-button">
          <p className="login-submit-text">Sign In</p>
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
