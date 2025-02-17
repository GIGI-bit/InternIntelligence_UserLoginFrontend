import { useState } from "react";
import "./AuthPage.css";
// import React from "react";
// import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animation from "../assets/animation.json";
import LoginPage from "../Login/LogInPage";
import RegisterPage from "../Register/RegisterPage";

const AuthPage = () => {
  // const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="main-div">
      <div className="auth-container">
        <div className="auth-card-div">
          <div className="auth-img-container">
            <Lottie
              animationData={animation}
              loop={true}
              autoplay={true}
              className="auth-lottie"
              style={{ width: "40vw", height: "30vh" }}
            />
          </div>
          <div className="auth-form-container">
            {isLogin ? (
              <div>
                <LoginPage></LoginPage>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => setIsLogin(false)}
                >
                  Dont have an account? Register.
                </a>
              </div>
            ) : (
              <div>
                <RegisterPage setIsLogin={setIsLogin}></RegisterPage>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => setIsLogin(true)}
                >
                  Dont have an account? Register.
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
