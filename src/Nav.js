import React from 'react'
import { Link } from 'react-router-dom';
import './All.css'
const Nav = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
    <Link className="navbar-brand fw-bold font-Size" href="#8">VKart</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active fs-3" aria-current="page" to='/' >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-3" to='/product'>Product</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-3" to='/blogs'>Blogs</Link>
        </li>
      </ul>
      <div className='buttons'>
            <Link  className="btn btn-outline-dark disabled mt-0 m-lg-1 fs-6">Login</Link>
            <Link  className="btn btn-outline-dark disabled mt-0 m-lg-1 fs-6">Register</Link>
            <Link  className="btn btn-outline-dark disabled mt-0 m-lg-1 fs-6">Cart</Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav;