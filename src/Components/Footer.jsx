import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <>
<footer className='hero-header-1 pb-4 pt-5 text-white'>
  <div className="container-xxl">
        <div className="row text-center">
          <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 mt-3 mx-auto">
          <h4 className='fw-bold'>INTERIOR<span><br /></span>SOLUTION</h4>
          <p>A descriptive paragraph that tells clients how good you are and proves that you are the best choice.</p>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 mt-3 mx-auto">
          <h5 className=' fw-bold'>Our Company</h5>
          <p><Link className='text-white text-decoration-none' to="/">About Us</Link></p>
          <p>
          <Link className='text-white text-decoration-none' to="portfolio">Portfolio</Link>
          </p>
          <p>
          <Link className='text-white text-decoration-none' to="testimonials">Testimonials</Link>
          </p>
          <p>
          <Link className='text-white text-decoration-none' to="contact">Contact</Link>
           </p>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 mt-3 mx-auto">
          <h5 className=' fw-bold'>Get In Touch</h5>
          <p><Link className='text-white text-decoration-none' to="">Linkedin</Link></p>
          <p>
          <Link className='text-white text-decoration-none' to="">Facebook</Link>
          </p>
          <p>
          <Link className='text-white text-decoration-none' to="">Yelp</Link>
          </p>
          <p>
          <Link className='text-white text-decoration-none' to="">Houzz</Link>
           </p>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 mt-3 mx-auto">
          <h5 className=' fw-bold'>Contact Info</h5>
          <p><Link className='text-white text-decoration-none' to="">123 Fifth Avenue, Lane no 17, New</Link></p>
          <p>
          <Link className='text-white text-decoration-none' to="">York NY 688101.</Link>
          </p>
          <p>
          <Link className='text-white text-decoration-none' to="">123-456-7890/91​</Link>
          </p>
          <p>
          <Link className='text-white text-decoration-none' to="">contact@example.com</Link>
           </p>
          </div>
        </div>
      </div>
</footer>
<footer className='hero-header-2 pb-4 pt-5 text-white'>
  <div className='container-xxl'>
        <div className="row text-center">
          <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 mt-3 mx-auto">
          <p className='  fw-bold abr'>Copyright © 2023 Interior Design Firm</p>
          </div>
          <div className="col-sm-6  col-md-6 col-lg-6 col-xl-6 mt-3 mx-auto">
          <p className=' fw-bold abr-1'>Powered by Interior Design Firm</p>
          </div>
        </div>
      </div>
</footer>
   </>
  )
}

export default Footer
