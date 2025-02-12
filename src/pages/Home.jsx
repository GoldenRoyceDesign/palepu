import React from 'react'
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

const Home = () => {
  return (
    <>
      <section>
        <CustomCarousel />
      </section>

      <section>
        <div className='container about mt-5'>
          <div className='row'>
            <div className='col-md-6 d-flex flex-column gap-3'>
              <h2><strong>Palepu Pharma Distributors Private Limited</strong>
                <span style={{ fontSize: '16px' }}> (formerly known as Palepu & Co.),</span> </h2>
              <p>is one of the largest distributors in the state of Tamil Nadu. Dealing with more
                than 22,000+ products, from 400+ Pharmaceutical Companies, both
                Multinational and Indian, and serving 5000+ customers in both Retail and
                Hospital-based pharmacies</p>
              <p>
                Mr. V. S. Palepu, who was lauded as a visionary during his time in the pharma
                fraternity, began his foray into pharmaceutical distribution with his collaboration
                with Mr. Nebling of Hoechst Pharmaceuticals, Germany who encouraged him to
                be a distributor for the company. This marked the humble beginning of Palepu &
                Co. in Tamil Nadu. Under his tenure, Palepu has grown immensely with the
                establishment of 5 Branches and tying up with 4 associate companies, making
                the company one of the largest distributors in the state of Tamil Nadu.</p>
              <p><strong>From Day 1 of our business in 1960 till date, with six decades passed, we still follow the same mantra:</strong></p>
            </div>
            <div className='col-md-6 d-flex justify-content-center align-items-center'>
              <img src={about} alt='about-image' className='img-fluid' />
            </div>
          </div>
        </div>
      </section>


      <section className='home-counter'>
        <div className="stats-container">
          <div className="content">
            <div className="row align-items-center">
              {/* Left Side */}
              <div className="col-md-5 text-white text-start d-flex flex-column gap-5 sec-text">
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
              <div className="col-md-2 text-center">
                <img src={centerlogo} alt="Company Logo" className="center-logo" />
              </div>

              {/* Right Side */}
              <div className="col-md-5 text-white text-end d-flex flex-column gap-5 sec-text">
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
              <h2>We are Palepu Pharma</h2>
              <div className='border rounded-2 p-3 mt-4 mb-4'>
                <h5>MISSION</h5>
                <p>We source directly from manufacturers, selling only to
                  licensed pharmacies or hospitals, ensuring transparency
                  and efficient supply chain operations.</p>
              </div>
              <div className='border rounded-2 p-3 mb-4'>
                <h5>VISION</h5>
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
            <div className='col-md-6 d-flex justify-content-center align-items-center'>
              <img src={missionvision} alt='missionvision-image' className='img-fluid w-75' />
            </div>
          </div>
        </div>
      </section>


      <section>
        <Testimonials />
      </section>

      

      

      <section className='container mt-5 mb-5'>
        <h1 className='text-center'><strong>Palepu Group Companies*</strong></h1>

        <div className='mt-5'>

        <div className='text-center mb-5'>
            <p>Among Top 3 procurers for the largest 20 companies</p>
          </div>

          <div className='row'>
            <div className='col-md-3 mb-4'>
              <div className='d-flex flex-column justify-content-center align-items-center gap-4'>
                <img src={company1} alt='sponser-image' className='img-fluid' style={{ height: '140px' }} />
                <button className='company-btn ps-4 pe-4'>OPEN LINK</button>
              </div>
            </div>

            <div className='col-md-3 mb-4'>
              <div className='d-flex flex-column justify-content-center align-items-center gap-4'>
                <img src={company2} alt='sponser-image' className='img-fluid' style={{ height: '140px' }} />
                <button className='company-btn ps-4 pe-4'>OPEN LINK</button>
              </div>
            </div>

            <div className='col-md-3 mb-4'>
              <div className='d-flex flex-column justify-content-center align-items-center gap-4'>
                <img src={company4} alt='sponser-image' className='img-fluid' style={{ height: '140px' }} />
                <button className='company-btn ps-4 pe-4'>OPEN LINK</button>
              </div>
            </div>

            <div className='col-md-3 mb-4'>
              <div className='d-flex flex-column justify-content-center align-items-center gap-4'>
                <img src={company3} alt='sponser-image' className='img-fluid' style={{ height: '140px' }} />
                <button className='company-btn ps-4 pe-4'>OPEN LINK</button>
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