import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleSignin = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Loading...");
    if (user.email && user.password) {
      if (
        // eslint-disable-next-line
        !/^[A-Za-z0-9](([a-zA-Z0-9,=\.!\-#|\$%\^&\*\+/\?_`\{\}~]+)*)@(?:[0-9a-zA-Z-]+\.)+[a-zA-Z]{2,9}$/.test(
          user.email
        )
      ) {
        toast.dismiss(toastId);
        setUser({ ...user, email: "" });
        return toast.error("please enter a valid email", {
          duration: 4000,
          position: "top-right",
        });
      }
      const { data } = await axios.post("http://localhost:8000/api/user", user);
      console.log(data);
      if (data.status === "success") {
        toast.dismiss(toastId);
        toast.success(data.message, {
          duration: 4000,
          position: "top-right",
        });
        sessionStorage.setItem("auth", true);
        // disptach(authActions.login());
        if (data.type === "lender") {
          navigate("/signin");
        }
        if (data.type === "borrower") {
          navigate("/dash");
        }
      } else {
        toast.dismiss(toastId);
        toast.error(data.message, {
          duration: 4000,
          position: "top-right",
        });
        navigate("/signin");
      }
    } else {
      toast.dismiss(toastId);
      toast.error("Please fill all the fields :-( ", {
        duration: 2000,
        position: "bottom-right",
      });
    }
    setUser({
      email: "",
      password: "",
    });
  };
  return (
    <>
      <div className="wrapper">
        <form method="post">
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              required
              name="email"
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, [e.target.name]: e.target.value });
              }}
            />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
              value={user.password}
              onChange={(e) => {
                setUser({ ...user, [e.target.name]: e.target.value });
              }}
            />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>
            <a href="#">Forgot Password</a>
          </div>
          <button onClick={handleSignin} className="btn">
            Login
          </button>
          <div className="register-link">
            <p>
              Dont have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
