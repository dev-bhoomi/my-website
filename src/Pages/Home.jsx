import React from 'react'
import { Link } from 'react-router-dom'
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
const Home = () => {
  return (
    <>
      <section className='hero-header'>
        <div className="container-xxl  ">
          <div className="row text-white g-5">
            <div className="col-md-6 col-sm-12 text-lg-start">
              <div className='hero-1 my-5 py-5'>
                <p >🏆5th Consistent Award Winning Year!</p>
                <h1 className='display-3 mb-4'>Modern Design Solutions</h1>
                <p className='mb-4 pb-2'>A descriptive paragraph that tells clients how good you are and proves that you are the best choice.</p>
                <Link className='btn btn-light py-sm-3 px-sm-3 me-2'>See Our Projects</Link>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 text-center text-lg-end hero-2">
              <div className='pray'>
                <img src="my-website/images/1.jpg" alt="couch" />

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='hero-header1'>
        <div className="container-xxl">
          <div className="row text-center">
            <div className="col-sm-12 my-5 py-5">
              <h3>Interior Design Doesn't Have to Be <span><br /></span>Expensive or Complicated! It Should Be <span><br /></span>Smart & User Friendly</h3>
            </div>
          </div>
        </div>
      </section>
      <section className='hero-header-2'>
        <div className="container-xxl">
          <div className="row text-center">
            <div className="col-sm-12 col-md-6">
              <div className='px-2 my-5 shadow-l'>
                <img src="my-website/images/about-owners-1.jpg" alt="" />
              </div>
              <span>Interior Solutions Owner & Co-Owner</span>
            </div>
            <div className="col-sm-12 col-md-6 text-lg-start d-flex flex-column justify-content-center child">
              <div className='my-4 px-5 mt-5'>
                <div className='cardbody'>
                  <p className='text-dark'>ESTABLISHED MMXVIII</p>
                  <h2 className='text-dark'>Interior Design Firm Based in New York​</h2>
                  <p className='child-1'>A descriptive paragraph that tells clients how good you are and proves that you are the best choice that they’ve made. This paragraph is also for those who are looking out for a reliable interior design firm.</p>
                  <p className='child-1'>You can use a few enticing words and flaunt your capabilities that will attract future clients and encourage them to hire you right away.</p>
                  <Link className='btn btn-dark py-sm-2 px-sm-4 mx-3 my-5 text-dark'>Know more</Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='hero-header-3'>
        <div className="container-xxl">
          <div className="banner py-5 my-5">
            <img src="/my-website/images/2.jpg" alt="couch" />
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className='wrapper-text '>
                <h6 className='text-dark  text-center text-lg-start mx-3 mt-3 px-3 pt-4'>OUR RECENT</h6>
                <h3 className='text-dark text-center text-lg-start px-3 mx-3 mt-1 pt-1'>Award Winning Projects</h3>
                <p className='text-dark text-center text-lg-start px-3 mx-3 mt-3 pt-2'>A descriptive paragraph that tells clients how good you are and proves that you are the best choice that they’ve made.</p>
                <p className='text-dark text-center text-lg-start px-3 mx-3 mt-3 pt-2'>This paragraph is also for those who are looking out for a reliable interior design firm.</p>
                <div></div>
                <ul className=' text-center text-lg-start px-sm-4 mx-sm-3 my-sm-3 py-2'>
                  <li><p className='text-dark'>NY Interior Design Firm of The Year - 2020</p></li>
                  <li><p className='text-dark'>US Best Interior Firm - 2020</p></li>
                  <li><p className='text-dark'>International Design Awards Nominee - 2019</p></li>
                  <Link className='btn btn-dark py-sm-2 px-sm-4 mx-3 my-5 text-dark'>Know more</Link>

                </ul>


              </div>
            </div>
          </div>

        </div>
      </section>
      <section className="hero-header-4 pt-5 mt-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 mt-5 py-4 text-center">
              <p className='text-dark'>EVERY SPACE COUNT</p>
              <h2>Why Choose Us</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center py-2 my-2">
            <span><EventAvailableIcon /></span>
            <h3 className='pt-4 mt-4'>Building Planning</h3>
            <p className='text-dark'>This is a short description elaborating the service you have mentioned above.</p>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center py-2 my-2">
            <span ><SquareFootIcon /></span>
            <h3 className='pt-4 mt-4'>Renovating Space</h3>
            <p className='text-dark '>This is a short description elaborating the service you have mentioned above.</p>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center py-2 my-2">
            <span><ViewInArIcon /></span>
            <h3 className='pt-4 mt-4'>Interior Space</h3>
            <p className='text-dark'>This is a short description elaborating the service you have mentioned above.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center py-2 my-2">
            <span><HomeIcon /></span>
            <h3 className='pt-3 mt-4'>Real Estates</h3>
            <p className='text-dark'>This is a short description elaborating the service you have mentioned above.</p>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center py-2 my-2">
            <span ><ApartmentIcon /></span>
            <h3 className='pt-4 mt-4'>Small Offices</h3>
            <p className='text-dark '>This is a short description elaborating the service you have mentioned above.</p>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center py-2 my-2">
            <span><BusinessCenterIcon /></span>
            <h3 className='pt-4 mt-4'>Free Consultation</h3>
            <p className='text-dark pb-5 mb-5'>This is a short description elaborating the service you have mentioned above.</p>
          </div>
        </div>
      </section>
<section className='hero-header-5 pt-5'>
        <div className='container-xxl'>
          <div className="row">
            <div className='col-lg-6 col-sm-12 text-sm-center text-lg-start py-3 '>
              <p className='fw-bold text-dark'>TESTIMONIALS</p>
              <h2 className='text-dark'>What Our Clients Say</h2>
              <p className='text-dark pb-5'>This is a short description elaborating the service you have mentioned above.​</p>


              <div className='pt-5 member'>
                <div className='member-info text-start'>
                <p className='text-dark px-3'>"Aptent mus quisque porttitor convallis tempora eaque blandit phasellus perspiciatis lectus, exercitationem Porttitor consectetur fugit ligula officiis rhoncus litora deserunt ratione curae beatae! Augue faucibu"
                </p>
                </div>
                  <div className='detail d-flex'>
                  <div className='teampic text-start ms-3 '>
                <img src="/my-website/images/michellep.jpg" alt="team1" className='img-fluid' />
                </div>
                <div className='teamName'>
                  <p className='text-dark fw-bold'>Michelle P.</p>
                </div>
                  </div>
                </div>
            </div>


            
            <div className='section-head col-lg-6 col-sm-12 text-sm-center text-lg-start mb-5 pb-5 pt-3'>
            <div className='pt-5 member mb-5'>
              <div className='member-info text-start'>
              <p className='text-dark hero px-3'>"Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis dolor. Similique at tellus magna Adipisci facilisis optio incidunt, corrupti minus nibh sequi convallis magnam neque gravida vel consequatur mi iaculis magnis felis eleifend laboriosam explicabo fuga. Earum fugiat cillum harum!"</p>
              </div>
              <div className='detail d-flex'>
                  <div className='teampic text-start ms-3 '>
                <img src="/my-website/images/smit.jpg" alt="team1" className='img-fluid' />
                </div>
                <div className='teamName'>
                  <p className='text-dark fw-bold'>Smith T.</p>
                </div>
                  </div>
              </div>




              <div className='member'>
              <div className='member-info text-start'>
                <p className='text-dark hero2 px-3 pt-4'>" Aptent mus quisque porttitor convallis tempora eaque blandit phasellus perspiciatis lectus, exercitationem."</p>
              </div>
              <div className='detail d-flex'>
                  <div className='teampic text-start ms-3 '>
                <img src="/my-website/images/johnny.jpg" alt="team1" className='img-fluid' />
                </div>
                <div className='teamName'>
                  <p className='text-dark fw-bold'>John J.</p>
                </div>
                  </div>
              </div>
            </div>

          </div>

        </div>

      </section>

 <section className='hero-header-6 pb-2 pt-5'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className='text-dark text-center'>Best Ranked By</h3>
            </div>
          </div>
        </div>
      </section>
      <section className='hero-header-7 pb-5'>
        <div className="row">
          <div className="col-sm-6 col-md-2 col-lg-2 col-xl-2 mt-3 mx-auto text-center">
            <img className="text-dark img-fluid" src="/my-website/images/logo-5.svg" alt="" />
          </div>
          <div className="col-sm-6 col-md-2 col-lg-2 col-xl-2 mt-3 mx-auto text-center">
            <img className="text-dark img-fluid" src="/my-website/images/logo-3.svg" alt="" />
          </div>
          <div className="col-sm-6 col-md-2 col-lg-2 col-xl-2 mt-3 mx-auto text-center">
            <img className="text-dark img-fluid" src="/my-website/images/logo-4.svg" alt="" />
          </div>
          <div className="col-sm-6 col-md-2 col-lg-2 col-xl-2 mt-3 mx-auto text-center">
            <img className="text-dark img-fluid" src="/my-website/images/logo-2.svg" alt="" />
          </div>
          <div className="col-sm-6 col-md-2 col-lg-2 col-xl-2 mt-3 mx-auto text-center">
            <img className="text-dark img-fluid" src="/my-website/images/logo-1.svg" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
