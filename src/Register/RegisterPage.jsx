import { useState } from "react";
import PropTypes from "prop-types";
//
import "./RegisterPage.css";
// import LoginPage from "../Login/LogInPage";

const RegisterPage = ({ setIsLogin }) => {
  const [regUsername, setRegUsername] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  //   const navigate = useNavigate();
  async function handleRegister(e) {
    e.preventDefault();
    if (
      firstname !== null &&
      lastname !== null &&
      email !== null &&
      regUsername !== null &&
      regPassword !== null
    ) {
      //   const requestData =
      console.log("inside register");
      try {
        const response = await fetch("https://localhost:7286/api/Auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            email: email,
            username: regUsername,
            password: regPassword,
            profilePicutre: "",
          }),
        });
        if (response.ok) {
          setIsLogin(true);

          console.log("successfully registered");
          // alert("success!");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="auth-register-con">
      <h1 className="text-3xl font-bold mb-2">Register</h1>
      <form className="auth-register-from" onSubmit={(e) => handleRegister(e)}>
        <div className="register-input-div">
          <label>Firstname</label>
          <input
            placeholder="Enter Firstname..."
            className="register-input"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="register-input-div">
          <label>Lastname</label>
          <input
            placeholder="Enter Lastname..."
            className="register-input"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="register-input-div">
          <label>Username</label>
          <input
            placeholder="Enter Username..."
            className="register-input"
            value={regUsername}
            onChange={(e) => setRegUsername(e.target.value)}
          />
        </div>
        <div className="register-input-div">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Email..."
            className="register-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="register-input-div">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password..."
            className="register-input"
            value={regPassword}
            onChange={(e) => setRegPassword(e.target.value)}
          />
        </div>
        <button className="register-submit-button" type="submit">
          <p className="register-submit-text">Register</p>
        </button>
      </form>
      {/* <a onClick={() => setIsLogin(true)}>Dont have an account? Register.</a> */}
    </div>
  );
};

RegisterPage.propTypes = {
  setIsLogin: PropTypes.func.isRequired,
};

export default RegisterPage;
