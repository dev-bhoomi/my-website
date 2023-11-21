import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import { FaHouzz, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import { Link } from 'react-router-dom'

const Contact = () => {

  const containerStyle = {
    width: '100%',
    height: '450px',
  };

  const center = {
    lat: 26.20610530981087,
    lng: 78.19924867123794,
  };
  return (
    <>
      <section className='contact-1'>
        <div className="container-xxl ">
          <div className="row">
            <div className="col-12">
              <p className='text-white text-center'>GET IN TOUCH</p>
              <h1 className='text-white text-center my-3'>Contact Us</h1>
              <h3 className='text-white text-center'>We Love to Hear from You!</h3>
            </div>
          </div>
        </div>
      </section>
       <section className='contact-2 my-5 py-5'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <div className='px-2 my-5'>
                <img src="my-website/images/about-owners-1.jpg" alt="" className='w-100 h-100' />
              </div>
            </div>
            <div className="col-sm-12 col-md-4 ">
              <div className='my-5 px-5'>
                <div className='cardbody'>
                  <h2 className='text-dark'>Let's Discuss About Your Spaces!​</h2>
                  <p className='child-1 text-dark'>A descriptive paragraph that tells clients how good you are and proves that you are the best choice that they’ve made.</p>
                  <p className='child-1 text-dark'>This paragraph is also for those who are looking out for a reliable interior design firm.</p>
                  <ul className=' px-sm-4 mx-sm-3 my-sm-3 py-2'>
                  <li><p className='text-dark'>NY Interior Design Firm of The Year - 2020</p></li>
                  <li><p className='text-dark'>US Best Interior Firm - 2020</p></li>
                  <li><p className='text-dark'>International Design Awards Nominee - 2019</p></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className='my-5 mx-5'>
                <form action="">
                  <input type="text" className='form-control' name="fname" placeholder='Name' autoComplete='on' /><br />
                  <input type="email" className='form-control' placeholder='Email' autoComplete='on' /><br />
                  <input type="Phone No" className='form-control' placeholder='Phone No' autoComplete='on' /><br />
                  <input type="Subject" className='form-control' placeholder='Subject' autoComplete='on' /><br />
                  <textarea name="" id="" cols="20" rows="7" className='form-control' autoComplete='on' /><br />
                  <Link className='btn btn-light px-sm-3 me-2'>Submit</Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
<section className='contact-3 my-5 py-5'>
        <div className="container-xxl">
          <div className='d-lg-flex'>
            <div>
              <h1>Contact Details</h1><br />
              <p className='text-dark'>You can use a few enticing words and flaunt your capabilities that will <span><br /></span>attract future clients and encourage them to hire you right away.</p>
            </div>
            <div className='ms-auto pe-3'>
              <div className='d-flex pt-lg-5 mt-5 '>
                <span className='mx-2 icons'><FaHouzz /></span>
                <span className='mx-2 icons'><FaFacebookF /></span>
                <span className='mx-2 icons'><FaTwitter /></span>
                <span className='mx-2 icons'><FaInstagram /></span>
              </div>
            </div>

          </div>

          <div className="row">
            <div className="col-sm-12 col-lg-4">

              <div className='member d-flex my-5 py-5 mx-4'>
                <div className='teampic text-start ms-3 '>
                  <span className='icon'><LocationOnIcon /></span>
                </div>
                <div className='teamName'>
                  <h3 className='text-dark fw-bold'>Address</h3>
                  <p className='text-dark'>Bhoomi vikas bank moth</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">

              <div className='member d-flex my-5 py-5 mx-4'>
                <div className='teampic text-start ms-3 '>
                  <span className='icon'><EmailIcon /></span>
                </div>
                <div className='teamName'>
                  <h3 className='text-dark fw-bold'>Email Us</h3>
                  <p className='text-dark'>bhoomigupta912536@gmail.com</p>
                </div>
              </div>
            </div>


            <div className="col-sm-12 col-lg-4">

              <div className='member d-flex my-5 py-5 mx-4'>
                <div className='teampic text-start ms-3 '>
                  <span className='icon'><CallIcon /></span>
                </div>
                <div className='teamName'>
                  <h3 className='text-dark fw-bold'>Call Us</h3>
                  <p className='text-dark'>969-644-9572</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
<section className='contact-3 mt-5 pt-5'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div class="map">
                <LoadScript googleMapsApiKey="YOUR_API_KEY">
                  <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
                    <Marker position={center} />
                  </GoogleMap>
                </LoadScript>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default Contact
