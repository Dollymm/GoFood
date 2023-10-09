import React, { useState } from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  const [first, setFirst] = useState({ name: "", email: "", password: "",geolocation:"" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/creatuser', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: first.name, email: first.email, password: first.password, location: first.geolocation }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
  
      if (json.success) {
        alert("Enter valid Credentials");
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
 
  const onChange=(event)=>{
    setFirst({...first,[event.target.name]:event.target.value})
  }
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={first.name} onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email 
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={first.email} onChange={onChange}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={first.password} onChange={onChange}
              id="passwordInput"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              address
            </label>
            <input
              type="text"
              className="form-control"
              name="geolocation"
              value={first.geolocation} onChange={onChange}
              id="geoloactionInput"
            />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-danger">
            i am a new user
          </Link>
        </form>
      </div>
    </>
  );
};

export default Signup;
