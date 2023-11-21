import React from 'react'
import { FaHouzz, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import BorderAllIcon from '@mui/icons-material/BorderAll';
import PersonIcon from '@mui/icons-material/Person';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const About = () => {
  return (
    <>
      <section className='about-1'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className='text-white text-center'>A FEW WORDS ABOUT</p>
              <h1 className='text-white text-center'>Our Firm</h1>
              <h4 className='text-white text-center'>Award Winning Interior Design Firm in New York</h4>
            </div>
          </div>
        </div>
      </section>
      <section className='about-2 pt-5 mt-5'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-sm-12 col-lg-6">
              <p className='text-dark pt-5'>INTERIOR DESIGNER. CO-FOUNDER</p>
              <h2>Keith Keller</h2>
              <p className='text-dark'>Totam cillum molestie a dolore alias diamlorem corrupti. Exercitationem iure. Risus maxime mollis molestias exercitation nascetur non repudiandae sit voluptates velit praesentium! Netus natus dicta nibh condimentum porta congue platea cras lacinia pretium, explicabo qui praesent duis minima hendrerit. Voluptas illum duis voluptas dignissimos saepe suspendisse veritati.</p>
              <p className='text-dark py-3'>Maxime suscipit odit nihil, adipiscing odio ipsa mollit sagittis nostra egestas pariatur porttitor feugiat cras class porttitor.</p>
              <h5>Get In Touch</h5>
              <div className='d-flex py-3 px-2 icons'>
                <span><FaHouzz /></span>
                <span className='ms-3'><FaFacebookF /></span>
                <span className='ms-3'><FaTwitter /></span>
                <span className='ms-3'><FaInstagram /></span>
              </div>

            </div>
            <div className="col-sm-12 col-lg-6">
              <div className='pic-1 text-center'>
                <img src="my-website/images/7.jpg" alt="" />

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='about-3 py-5 '>
        <div className="container-xxl">
          <div className="row">
            <div className="col-sm-12 col-lg-3 text-center wrapper-1 my-5 ">
              <BorderAllIcon className='mx-5 icons mb-5 mt-4' />
              <h2 className=' fw-bold'>352</h2>
              <p className='text-dark mb-5'>PROJECTS COMPLETED</p>
            </div>
            <div className="col-sm-12 col-lg-3 text-center wrapper-1 my-5">
              <PersonIcon className='mx-5 icons mb-5 mt-4' />
              <h2 className=' fw-bold'>120+</h2>
              <p className='text-dark mb-5'>HAPPY CUSTOMERS</p>    </div>
            <div className="col-sm-12 col-lg-3 text-center wrapper-1 my-5">
              <EmojiEventsIcon className='mx-5 icons mb-5 mt-4' />
              <h2 className=' fw-bold'>12</h2>
              <p className='text-dark mb-5'>AWARDS RECEIVED</p>    </div>
            <div className="col-sm-12 col-lg-3 text-center wrapper-1 my-5">
              <BusinessCenterIcon className='mx-5 icons mb-5 mt-4' />
              <h2 className=' fw-bold'>15</h2>
              <p className='text-dark mb-5 pb-5'>YEARS IN SERVICE</p>
            </div>
          </div>
        </div>


      </section>
      <section className='about-4 pt-5'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 ">
              <h2 className='mb-4'>Meet Our Team</h2>
              <p>A descriptive paragraph that tells clients how good you are and proves that you are the best choice.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='about-5'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-sm-12 col-lg-4 wrapper mb-5 my-5">
              <img src="my-website/images/image-07 (1).jpg" alt="" />
              <h3>Sam Smith</h3>
              <p>Lead Interior Designer</p>
            </div>
            <div className="col-sm-12 col-lg-4 mb-5 my-5">
              <img src="my-website/images/image-09.jpg" alt="" />
              <h3>Diane Banks</h3>
              <p>Interior Decorator</p>
            </div>
            <div className="col-sm-12 col-lg-4 mb-5 my-5">
              <img src="my-website/images/image-11.jpg" alt="" />
              <h3>Mike Straut</h3>
              <p>Interior Designer</p>
            </div>
          </div>
        </div>
      </section>
      <section className='hero-header-7 py-5 mt-5'>
        <div className="row">
          <div className="col-sm-6 col-md-2 col-lg-2 col-xl-2 mt-3 mx-auto text-center">
            <img className="text-dark img-fluid" src="my-website/images/logo-5.svg" alt="" />
          </div>
          <div className="col-sm-6 col-md-2 col-lg-2 col-xl-2 mt-3 mx-auto text-center">
            <img className="text-dark img-fluid" src="my-website/images/logo-3.svg" alt="" />
          </div>
          <div className="col-sm-6 col-md-2 col-lg-2 col-xl-2 mt-3 mx-auto text-center">
            <img className="text-dark img-fluid" src="my-website/images/logo-4.svg" alt="" />
          </div>
          <div className="col-sm-6 col-md-2 col-lg-2 col-xl-2 mt-3 mx-auto text-center">
            <img className="text-dark img-fluid" src="my-website/images/logo-2.svg" alt="" />
          </div>
          <div className="col-sm-6 col-md-2 col-lg-2 col-xl-2 mt-3 mx-auto text-center">
            <img className="text-dark img-fluid" src="my-website/images/logo-1.svg" alt="" />
          </div>
        </div>
      </section>
    </>


  )
}

export default About
