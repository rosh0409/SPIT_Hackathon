import React from 'react'
import "./style.css"

const Register = () => {
  return (
    <div>
       <div className="wrapper">
    <form action="">
      <h1>register</h1>

      {/* check usertype  */}

      <div className="input-box">
        
        <select id="cars" name="cars">
           <option value="lender">Lender</option>
           <option value="borrower">Borrower</option>
        </select>
        <i className='bx bxs-user'></i>
      </div>


      {/* ends */}
      <div className="input-box">
        <input type="text" placeholder="Username" required />
        <i className='bx bxs-user'></i>
      </div>
      <div className="input-box">
        <input type="email" placeholder="email" required />
        <i className='bx bxs-user'></i>
      </div>
      <div className="input-box">
        <input type="password" placeholder="Password" required />
        <i className='bx bxs-lock-alt' ></i>
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
