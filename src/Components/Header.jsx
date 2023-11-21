import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <header className="header-top-strip p-0">
        <div className="container-xxl">
          <nav className='navbar navbar-expand-lg navbar-light px-lg- py-3 py-lg-0'>
            <Link className='navbar-brand link logo fw-bolder fs-5 p-0 text-white'>INTERIOR<span><br /></span>SOLUTION</Link>
            <div class="ast-button-wrap">
              <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                <span className='navbar-toggler-icon spans'></span>
              </button>
            </div>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto py-0 pe-4">
                <li className='nav-item'>
                  <Link className='nav-link text-white ' to="/">Home</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link text-white' to="portfolio">Portfolio</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link  text-white' to="about">About</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link  text-white' to="testimonials">Testimonials</Link>
                </li>
                <li className='nav-item p-0'>
                  <Link className='nav-link text-white' to="contact">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        </header>
    </>
  )
}

export default Header
