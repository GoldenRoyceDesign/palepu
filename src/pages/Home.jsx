import React, { useEffect } from 'react'
import CustomCarousel from '../component/CustomCarousel'
import about from '../assets/about.png'
import missionvision from '../assets/mission&vision.png'
import company1 from '../assets/company1.png'
import company2 from '../assets/company2.png'
import company3 from '../assets/company3.png'
import company4 from '../assets/company4.png'
import WhatsAppButton from '../component/WhatsAppButton'
import centerlogo from '../assets/center-logo.png'
import Testimonials from '../component/Testimonials'
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <>
      <section>
        <CustomCarousel />
      </section>

      <section style={{background: '#dfe9f3'}}>
        <div className='container about pt-5'>
          <div className='row'>
            <div className='col-md-6 d-flex flex-column gap-3'>
              <h2 data-aos="fade-right"><strong>Palepu Pharma Distributors Private Limited</strong>
                <span style={{ fontSize: '16px' }}> (formerly known as Palepu & Co.),</span> </h2>
              <p data-aos="fade-right">is one of the largest distributors in the state of Tamil Nadu. Dealing with more
                than 22,000+ products, from 400+ Pharmaceutical Companies, both
                Multinational and Indian, and serving 5000+ customers in both Retail and
                Hospital-based pharmacies</p>
              <p data-aos="fade-right">
                Mr. V. S. Palepu, who was lauded as a visionary during his time in the pharma
                fraternity, began his foray into pharmaceutical distribution with his collaboration
                with Mr. Nebling of Hoechst Pharmaceuticals, Germany who encouraged him to
                be a distributor for the company. This marked the humble beginning of Palepu &
                Co. in Tamil Nadu. Under his tenure, Palepu has grown immensely with the
                establishment of 5 Branches and tying up with 4 associate companies, making
                the company one of the largest distributors in the state of Tamil Nadu.</p>
              <p data-aos="fade-right"><strong>From Day 1 of our business in 1960 till date, with six decades passed, we still follow the same mantra:</strong></p>
            </div>
            <div className='col-md-6 d-flex justify-content-center align-items-center'  data-aos="fade-up">
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
              <div className="col-md-5 text-white text-start d-flex flex-column gap-5 sec-text" data-aos="zoom-in-down">
                <div>
                  <h4>7 Locations</h4>
                  <p>Quis id sapiente voluptatem quo sint reprehenderit eos illo sequi.</p>
                </div>
                <div>
                  <h4>200+ Salesmen</h4>
                  <p>Quis id sapiente voluptatem quo sint reprehenderit eos illo sequi.</p>
                </div>
              </div>

              {/* Center Logo */}
              <div className="col-md-2 text-center" data-aos="zoom-in">
                <img src={centerlogo} alt="Company Logo" className="center-logo" />
              </div>

              {/* Right Side */}
              <div className="col-md-5 text-white text-end d-flex flex-column gap-5 sec-text" data-aos="zoom-in-up">
                <div>
                  <h4>500+ Staffs</h4>
                  <p>Quis id sapiente voluptatem quo sint reprehenderit eos illo sequi.</p>
                </div>
                <div>
                  <h4>10,000+ Pharmacies</h4>
                  <p>Quis id sapiente voluptatem quo sint reprehenderit eos illo sequi.</p>
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
              <h2 data-aos="fade-right">We are Palepu Pharma</h2>
              <div className='border rounded-2 p-3 mt-4 mb-4' data-aos="zoom-in-right">
                <h5 className='fw-bold'>MISSION</h5>
                <p>We source directly from manufacturers, selling only to
                  licensed pharmacies or hospitals, ensuring transparency
                  and efficient supply chain operations.</p>
              </div>
              <div className='border rounded-2 p-3 mb-4' data-aos="zoom-in-right">
                <h5 className='fw-bold'>VISION</h5>
                <p>We source directly from manufacturers, selling only to
                  licensed pharmacies or hospitals, ensuring transparency
                  and efficient supply chain operations.</p>
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
        <h1 className='text-center' data-aos="fade-right"><strong>Palepu Group Companies*</strong></h1>

        <div className='mt-5'>

        <div className='text-center mb-5'>
            <p>Among Top 3 procurers for the largest 20 companies</p>
          </div>

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

      <section>
        <WhatsAppButton />
      </section>
    </>

  )
}

export default Home