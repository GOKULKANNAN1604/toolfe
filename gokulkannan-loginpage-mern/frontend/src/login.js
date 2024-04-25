// Loginpage.js

import React, { useState } from "react";
import axios from "axios";

function Loginpage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleCreate = () => {
    axios
      .post("http://localhost:8000/api/names", { name, password })
      .then((response) => {
        console.log("Response:", response);
        console.log("Data stored successfully");
        alert("Data stored successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error occurred: " + error.message); 
      });
  };
  

  return (
    <>
      <div style={{ height: "100vh", display: "flex" }}>
        <div style={{ width: "50%", padding: "20px", marginTop: "70px" }}>

          <h1>Login</h1>
          <h2>Enter your account details</h2>

          <div style={{ marginBottom: "20px" }}>
            <input
              type="text"
              placeholder="Enter your username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ padding: "5px",width: "40%",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                padding: "5px", width: "40%",
               
              }}
            />
          </div>

          <a href="/" style={{ textDecoration: "none" }}>
            Forgot password?
          </a>
          <br />
          <br></br>
          <button
            type="submit"
            onClick={handleCreate}
            style={{
              backgroundColor: "blue", padding: "15px", color: "white",borderRadius: "10px",border: "none", cursor: "pointer",width: "220px",}}>Login
          </button>
          <br />
          <label style={{ marginLeft: "100px" }}>or</label>
          <br />

          <button
            type="submit"
            style={{
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              cursor: "pointer",
              width: "220px",
            }}
          >
            Create an account
          </button>
        </div>
        
        <div style={{ width: "50%" }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwVnVSU-Am41rnnY06Uyq5knwA899PuWBtBB6e7gIr-g&s"
            alt="login"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </>
  );
}

export default Loginpage;
