import React, { useState } from "react";
import './Signup.css';


import axios from "axios";
import Home from "../Clublogos/Clublogo";
import NavBar from "../Navbar/Navbar";
function Register() {
  const [FormData, setFormData] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/register/",
        FormData
      );
      console.log("Registration successful", response.data);
    } catch (error) {
      console.log("Registration Failed", error);
    }
  };

  return (
       <><div><Home />

          <NavBar />
      </div><div className="signup-container">
              <h2 className="signup-head">Sign Up</h2>

              <form onSubmit={handleSubmit}>
                  <div>
                      <label>Username</label>
                      <input className="input-1"
                          type="username"
                          placeholder=""
                          name="username"
                          onChange={handleChange} />
                  </div>
                  <div>
                      <label>Email address</label>
                      <input className="input-2"
                          type="email"
                          placeholder=""
                          name="email"
                          onChange={handleChange} />
                  </div>
                  <div>
                      <label>FirstName</label>
                      <input className="input-3"
                          type="first_name"
                          placeholder=""
                          name="first_name"
                          onChange={handleChange} />
                  </div>
                  <div>
                      <label>LastName</label>
                      <input className="input-4"
                          type="last_name"
                          placeholder=""
                          name="last_name"
                          onChange={handleChange} />
                  </div>
                  <div>
                      <label>Password</label>
                      <input className="input-5"
                          type="password"
                          placeholder=""
                          name="password"
                          onChange={handleChange} />
                  </div>
                  <div>
                      <button type="submit">Submit</button>
                  </div>
              </form>
          </div></>
  );
}

export default Register;