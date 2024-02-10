import React, { useState } from 'react'
import axios from "axios";
import toast from "react-hot-toast";
// import defaultavatar from "../../assets/default-avatar.png";
import { NavLink, useNavigate } from "react-router-dom";
import "./style.css"
import './Register.css'

const Register = () => {
  const defaultavatar = "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
  let navigate = useNavigate();
  const [gender, setGender] = useState('');
  const [file, setFile] = useState();
  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: "",
    password: "",
    confPass: "",
    profile: new File([], ""),
  });
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
    setUser({ ...user, [e.target.name]: e.target.files[0] });
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handleSignup = async () => {
    const toastId = toast.loading("Loading...");
    if (
      user.name &&
      user.email &&
      user.password &&
      user.confPass &&
      user.gender &&
      user.profile
    ) {
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
      if (user.password === user.confPass) {
        if (user.password.length >= 8 && user.password.length <= 15) {
          if (
            /^(?=.*\d)(?=.*[A-Z])(?!.*[^a-zA-Z0-9@#$^+=])/.test(user.password)
          ) {
            const formdata = new FormData();
            formdata.append("profile", user.profile);
            formdata.append("name", user.name);
            formdata.append("email", user.email);
            formdata.append("password", user.password);
            formdata.append("confPass", user.confPass);
            formdata.append("gender", user.gender);

            const { data } = await axios.post("/api/user/signup", formdata, {
              headers: { "Content-Type": "multipart/form-data" },
            });
            if (data.status === "success") {
              toast.dismiss(toastId);
              toast.success(data.message, {
                duration: 4000,
                position: "top-right",
              });
              navigate("/signin");
            } else {
              toast.dismiss(toastId);
              toast.error(data.message, {
                duration: 4000,
                position: "top-right",
              });
              navigate("/signup");
            }
          } else {
            toast.dismiss(toastId);
            toast.error(
              "Password must contain 1 capital letter and 1 number :-( ",
              {
                duration: 2000,
                position: "top-right",
              }
            );
          }
        } else {
          toast.dismiss(toastId);
          toast.error(
            "Password length must be greater than 8 and less than 15 :-( ",
            {
              duration: 2000,
              position: "top-right",
            }
          );
        }
      } else {
        toast.dismiss(toastId);
        toast.error("Password and Confirm Password does not match :-( ", {
          duration: 2000,
          position: "top-right",
        });
      }
    } else {
      toast.dismiss(toastId);
      toast.error("Please fill all the fields :-( ", {
        duration: 2000,
        position: "top-right",
      });
    }
    setUser({
      name: "",
      email: "",
      password: "",
      confPass: "",
      profile: new File([], ""),
    });
  };

  return (
    <div>
       <div className="wrapper">
    <form action="">
      <h1>register</h1>

      {/* check usertype  */}
      <div className="logo-s">
          <div>
            <label className="l" htmlFor="profile">
              <img
                className="user_img"
                src={file ? file : defaultavatar}
                alt=""
                style={{ alignSelf: "center" }}
              />
            </label>
            <input
              className="file"
              accept="image/*"
              id="profile"
              name="profile"
              type="file"
              onChange={onUpload}
              style={{ display: "none" }}
            />
          </div>
        </div>

      <div className="input-box">
        
        <select id="cars" name="cars">
           <option value="lender">Lender</option>
           <option value="borrower">Borrower</option>
        </select>
        <i className='bx bxs-user'></i>
      </div>


      {/* ends */}
      <div className="input-box">
        <input type="text" placeholder="Name" required />
        <i className='bx bxs-user'></i>
      </div>
      <div className="input-box">
        <input type="email" placeholder="email" required />
        <i className='bx bxs-user'></i>
      </div>
      <div className="input-box">
        <input type="Number" placeholder="Number" required />
        <i className='bx bxs-lock-alt' ></i>
      </div>
      <div className="input-box">
        <input type="password" placeholder="Password" required />
        <i className='bx bxs-lock-alt' ></i>
      </div>
      <div className="input-box">
        <input type="password" placeholder="Confirm-Password" required />
        <i className='bx bxs-lock-alt' ></i>
      </div>
      <div style={{
        margin:'2rem',
        display:'flex',
        justifyContent:'space-evenly'
      }}>
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={gender === 'male'}
          onChange={handleGenderChange}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={gender === 'female'}
          onChange={handleGenderChange}
        />
        Female
      </label>
     
    </div>
      <div className="remember-forgot">
        <label><input type="checkbox" />Remember Me</label>
        <a href="#">Forgot Password</a>
      </div>
      <button type="submit" className="btn">Register</button>
      <div className="register-link">
        <p> have an account? <a href="#">Login</a></p>
      </div>
    </form>
  </div>
    </div>
  )
}

export default Register
