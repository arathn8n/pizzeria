import React from 'react'
import { Link } from "react-router-dom"
const Navbar = () => {
  const total = 0;
  const token = false;


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Pizzeria Mamma Mia!</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to="/" className='nav-link'>
          Home
        </Link>
        <Link to="/register" className='nav-link'>
          register
        </Link>
        <Link to="/login" className='nav-link'>
          login
        </Link>
        {/* {token ? <a className="nav-link" href="#">🔓Logout</a> : <a className="nav-link" href="#">🚪Login</a>} */}
        <a className="nav-link" href="#">🛒total: {total}</a>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar