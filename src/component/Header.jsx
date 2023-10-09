import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 text-white" to="/">GoFood</Link>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2">
        <li className="nav-item">
          <Link className="nav-link active fs-5 text-white" aria-current="page" to="/">Home</Link>
        </li>
        {/* {(localStorage.getItem("authToken"))? */}
        <li className="nav-item">
          <Link className="nav-link active fs-5 text-white" aria-current="page" to="/">My Order</Link>
        </li>
        
        </ul>
       <div className='d-flex'>
          <Link className="btn bg-white text-success mx-1" to="login">Login</Link>
          <Link className="btn bg-white text-success mx-1" to="signup">Signup</Link>
        
       </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header