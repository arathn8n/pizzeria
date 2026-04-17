import React from 'react'
const Navbar = () => {
  const total = 0;
  const token = false;

  const logueado = true;

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Pizzeria Mamma Mia!</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        {logueado ? <a className="nav-link" href="#">🔓Profile</a> : <a className="nav-link" href="#">🚪Register</a>}
        {logueado ? <a className="nav-link" href="#">🔓Logout</a> : <a className="nav-link" href="#">🚪Login</a>}
        <a className="nav-link" href="#">🛒total: {total}</a>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar