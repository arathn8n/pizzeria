import React, { useContext, useState } from 'react'
import { NavLink } from "react-router-dom"
import './navbar.css'
import MyContext from '../MyContextTotal'
const Navbar = (props) => {
  const {token, setToken} = useContext(MyContext)

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Pizzeria Mamma Mia!</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              Home
            </NavLink>
            {/* si es diferente a true entonces que muestre esto */}
            {!token && <NavLink to="/register" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>register</NavLink>}
            
            {!token && <NavLink to="/login" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>login</NavLink>}
            
            {/* si es true entonces muestra esto */}
            {token && <NavLink to="/profile" className='nav-link'>perfil</NavLink>}
            {token && <NavLink to="/logout" className='nav-link'>Logout</NavLink>}
            <a className="nav-link" href="#">🛒total: {props.total}</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar