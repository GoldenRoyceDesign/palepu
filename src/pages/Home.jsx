import React, { useEffect } from 'react'
import CustomCarousel from '../component/CustomCarousel'
import about from '../assets/about.png'
import missionvision from '../assets/mission&vision.png'
import company1 from '../assets/company1.png'
import company2 from '../assets/company2.png'
import company3 from '../assets/company3.png'
import company4 from '../assets/company4.png'
// import WhatsAppButton from '../component/WhatsAppButton'
import centerlogo from '../assets/center-logo.png'
import Testimonials from '../component/Testimonials'
import AOS from "aos";
import "aos/dist/aos.css";
import Chatbot from '../component/Chatbot'

const Home = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <>
      <section>
        <CustomCarousel />
      </section>

      <section style={{ background: '#dfe9f3' }} id='home'>
        <div className='container about pt-5 pb-5'>
          <div className='row'>
            <div className='col-md-6 d-flex flex-column gap-3 mb-4'>
              <h2 data-aos="fade-right"><strong>Palepu Pharma Distributors Private Limited</strong>
                <span style={{ fontSize: '16px' }}> (formerly known as Palepu & Co.),</span> </h2>
              <p data-aos="fade-right">stands as a trusted name in the pharmaceutical distribution landscape, proudly serving as one of the largest and most reliable distributors in the state of Tamil Nadu. With decades of experience and a steadfast commitment to excellence, we have built a legacy of delivering high-quality pharmaceutical products to healthcare providers, pharmacies, and patients across the region.</p>
              <p data-aos="fade-right">
              As a cornerstone of the healthcare ecosystem, we specialize in the seamless distribution of a wide range of medicines, healthcare products, and medical supplies. Our extensive network, state-of-the-art infrastructure, and unwavering focus on customer satisfaction have positioned us as a preferred partner for leading pharmaceutical manufacturers and healthcare institutions.</p>
              <p data-aos="fade-right"><strong>At Palepu Pharma, we are driven by a mission to ensure the timely and efficient delivery of life-saving medications, empowering healthcare professionals to provide the best possible care to their patients. Our dedication to quality, reliability, and innovation continues to fuel our growth, making us a pivotal player in the pharmaceutical distribution industry.</strong></p>
            </div>
            <div className='col-md-6 d-flex justify-content-center align-items-center' data-aos="fade-up">
              <img src={about} alt='about-image' className='img-fluid w-75' />
            </div>
          </div>
        </div>
      </section>


      <section className='home-counter'>
        <div className="stats-container">
          <div className="content">
            <div className="row align-items-center">
              {/* Left Side */}
              <div className="col-md-5 text-white text-start d-flex flex-column justify-content-center align-items-center sec-text" data-aos="zoom-in-down">
                <div>
                  <h4>Extensive Network</h4>
                  <p>Serving Tamil Nadu through 7 strategically positioned distribution centres.</p>
                </div>
                <div>
                  <h4>Comprehensive Coverage</h4>
                  <p>A team of 200+ sales representatives ensuring widespread market reach.</p>
                </div>
              </div>

              {/* Center Logo */}
              <div className="col-md-2 text-center d-flex flex-column justify-content-center align-items-center" data-aos="zoom-in">
                <img src={centerlogo} alt="Company Logo" className="center-logo" />
              </div>

              {/* Right Side */}
              <div className="col-md-5 text-white text-end d-flex flex-column justify-content-center align-items-center sec-text" data-aos="zoom-in-up">
                <div>
                  <h4>Dedicated Support</h4>
                  <p>Over 500 skilled employees committed to seamless service.</p>
                </div>
                <div>
                  <h4>Trusted Partner</h4>
                  <p>Distributing to 10,000+ pharmacies, ensuring reliable supply.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className='container mt-5 mission'>
          <div className='row'>
            <div className='col-md-6 mb-4'>
              <h2 data-aos="fade-right">What We Stand For</h2>
              <div className='border rounded-2 p-3 mt-4 mb-4' data-aos="zoom-in-right">
                <h5 className='fw-bold'>MISSION</h5>
                <p>To ensure the seamless and reliable distribution of pharmaceuticals fostering strong partnerships with pharmacies and healthcare providers to enhance patient well-being.</p>
              </div>
              <div className='border rounded-2 p-3 mb-4' data-aos="zoom-in-right">
                <h5 className='fw-bold'>VISION</h5>
                <p>To be the most trusted and respected pharmaceutical distributor in Tamil Nadu, recognized for our unwavering commitment to excellence and innovation in healthcare logistics.</p>
              </div>
              {/* <div className='border rounded-2 p-3 mb-4'>
                <h5>VALUES</h5>
                <p>We source directly from manufacturers, selling only to
                  licensed pharmacies or hospitals, ensuring transparency
                  and efficient supply chain operations.</p>
              </div> */}
            </div>
            <div className='col-md-6 d-flex justify-content-center align-items-center' data-aos="zoom-in-up">
              <img src={missionvision} alt='missionvision-image' className='img-fluid w-75' />
            </div>
          </div>
        </div>
      </section>


      <section>
        <Testimonials />
      </section>





      <section className='container mt-5 mb-5'>
        <h1 className='text-center' data-aos="fade-right"><strong>Our Subsidiaries</strong></h1>

        <div className='mt-5'>

          <div className='row'>
            <div className='col-md-3 mb-4 p-4' data-aos="fade-up" id='partner'>
              <div className='d-flex flex-column justify-content-center align-items-center gap-4'>
                <img src={company1} alt='sponser-image' className='img-fluid' style={{ height: '140px' }} />
                <a href='https://shanbalajipharma.com/' target='_blank' rel="noreferrer">
                  <button className='company-btn ps-4 pe-4'>OPEN LINK</button></a>
              </div>
            </div>

            <div className='col-md-3 mb-4 p-4' data-aos="fade-down" id='partner'>
              <div className='d-flex flex-column justify-content-center align-items-center gap-4'>
                <img src={company2} alt='sponser-image' className='img-fluid' style={{ height: '140px' }} />
                <a href='https://www.lphpharma.com/' target='_blank' rel="noreferrer">
                  <button className='company-btn ps-4 pe-4'>OPEN LINK</button></a>
              </div>
            </div>

            <div className='col-md-3 mb-4 p-4' data-aos="fade-up" id='partner'>
              <div className='d-flex flex-column justify-content-center align-items-center gap-4'>
                <img src={company4} alt='sponser-image' className='img-fluid' style={{ height: '140px' }} />
                <a href='https://ammanpharma.in/' target='_blank' rel="noreferrer">
                  <button className='company-btn ps-4 pe-4'>OPEN LINK</button></a>
              </div>
            </div>

            <div className='col-md-3 mb-4 p-4' data-aos="fade-down" id='partner'>
              <div className='d-flex flex-column justify-content-center align-items-center gap-4'>
                <img src={company3} alt='sponser-image' className='img-fluid' style={{ height: '140px' }} />
                <a href='https://www.medihauxe.com/' target='_blank' rel="noreferrer">
                  <button className='company-btn ps-4 pe-4'>OPEN LINK</button></a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* <section>
        <WhatsAppButton />
      </section> */}


      <Chatbot />
    </>

  )
}

export default Home