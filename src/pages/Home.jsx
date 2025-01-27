import React from 'react'
import CustomCarousel from '../component/CustomCarousel'
import order from '../assets/order.png'
import about from '../assets/about.png'
import missionvision from '../assets/mission&vision.png'
// import product from '../assets/product.png'
// import company from '../assets/company.png'
// import customer from '../assets/customer.png'
// import staffs from '../assets/staffs.png'
// import branches from '../assets/branches.png'
// import CountUp from "react-countup";
// import { InView } from "react-intersection-observer";
import center1 from '../assets/center1.png'
// import center2 from '../assets/center2.png'
import center3 from '../assets/center3.png'
// import center4 from '../assets/center4.png'
import center5 from '../assets/center5.png'
import company1 from '../assets/company1.png'
import company2 from '../assets/company2.png'
import company3 from '../assets/company3.png'
import company4 from '../assets/company4.png'
// import Testimonials from '../component/Testimonials'
import Reviews from '../component/Reviews'

const Home = () => {
  return (
    <>
      <section>
        <CustomCarousel />
      </section>

      <section>
        <div className='home mt-4 mb-4 ms-5 me-5'>
          <div className='row'>
            <div className='col-md-6 p-3 home-order-col d-flex justify-content-center align-items-center'>
              <div className='d-flex justify-content-center align-items-center'>
                <div>
                  <img src={order} alt='order-image' className='img-fluid' />
                </div>
                <div className='d-flex flex-column'>
                  <h4>Order with Prescription</h4>
                  <p>Upload prescription and we will deliver your medicines</p>
                  <button className='btn-custom' style={{ width: 'fit-content' }}>ORDER NOW</button>
                </div>
              </div>
            </div>

            <div className='col-md-6 d-flex justify-content-around align-items-center border p-3 home-order-col2'>
              <div className='d-flex flex-column'>
                <ul>
                  <li><strong>Our Premises</strong></li>
                  <p className='mt-2'>7500 sq.ft fully covered Air condition</p>
                </ul>
                <ul>
                  <li><strong>Stock Maintain Level</strong></li>
                  <p className='mt-2'>More than 7 crores</p>
                </ul>
              </div>

              <div className='d-flex flex-column'>
                <ul>
                  <li><strong>Staffs</strong></li>
                  <p className='mt-2'>More than 100</p>
                </ul>
                <ul>
                  <li><strong>Stocklist</strong></li>
                  <p className='mt-2'>More than 250</p>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container about mt-5'>
          <div className='row'>
            <div className='col-md-6 d-flex flex-column gap-3'>
              <h2>Palepu Pharma Distributors Private Limited
                (formerly known as Palepu & Co.), </h2>
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
              <img src={missionvision} alt='missionvision-image' className='img-fluid w-50' />
            </div>
          </div>
        </div>
      </section>

      <section className="text-center statics pt-5 pb-5">
        <div className="container">
          <p>Statistics</p>
          <h2 style={{ fontWeight: "bold" }}>Service in the Cause of Medicine and Humanity.</h2>

          <div className="row d-flex justify-content-center align-items-center mt-5">
            {/* Product Count */}
            {/* <div className="col-md-2">
              <img src={product} alt="product" className="img-fluid" />
              <h3 className="mt-5">
                <InView triggerOnce={false}>
                  {({ inView, ref }) => (
                    <span ref={ref}>
                      {inView ? <CountUp end={22000} duration={2} separator="," suffix="+" /> : "0"}
                    </span>
                  )}
                </InView>
              </h3>
              <p>Products Available</p>
            </div>

            
            <div className="col-md-2">
              <img src={company} alt="company" className="img-fluid" />
              <h3 className="mt-5">
                <InView triggerOnce={false}>
                  {({ inView, ref }) => (
                    <span ref={ref}>
                      {inView ? <CountUp end={300} duration={2} separator="," suffix="+" /> : "0"}
                    </span>
                  )}
                </InView>
              </h3>
              <p>Companies</p>
            </div>

            
            <div className="col-md-2">
              <img src={customer} alt="customer" className="img-fluid" />
              <h3 className="mt-5">
                <InView triggerOnce={false}>
                  {({ inView, ref }) => (
                    <span ref={ref}>
                      {inView ? <CountUp end={100} duration={2} separator="," suffix="+" /> : "0"}
                    </span>
                  )}
                </InView>
              </h3>
              <p>Customers</p>
            </div>

            
            <div className="col-md-2">
              <img src={staffs} alt="staffs" className="img-fluid" />
              <h3 className="mt-5">
                <InView triggerOnce={false}>
                  {({ inView, ref }) => (
                    <span ref={ref}>
                      {inView ? <CountUp end={800} duration={2} separator="," suffix="+" /> : "0"}
                    </span>
                  )}
                </InView>
              </h3>
              <p>Staffs</p>
            </div>

            
            <div className="col-md-2">
              <img src={branches} alt="branches" className="img-fluid" />
              <h3 className="mt-5">
                <InView triggerOnce={false}>
                  {({ inView, ref }) => (
                    <span ref={ref}>
                      {inView ? <CountUp end={6} duration={2} separator="," suffix="+" /> : "0"}
                    </span>
                  )}
                </InView>
              </h3>
              <p>Branches</p>
            </div> */}

            <p>The relevant section of Cicero as printed in the source is reproduced below with fragments used in Lorem ipsum highlighted. Letters in brackets were added to Lorem ipsum and
              were not present in the source text: The relevant section of Cicero as printed in the source is reproduced below with fragments used in Lorem ipsum highlighted. Letters in brackets were
              were not present in the source text: The relevant section of Cicero as printed in the source is reproduced below with fragments used in Lorem ipsum highlighted. Letters in brackets were added
              added to Lorem ipsum and</p>

          </div>
        </div>
      </section>

      <section className='container mt-5 ps-5 pe-5'>
        <h1>Our track record speaks for itself. Many<br></br>
          individuals have chosen <span style={{ color: '#A09F9F' }}>our medical center<br></br>
            and have positive, trans formative<br></br>
            experiences.</span></h1>


        <div className='row mt-5'>
          <div className='col-md-6'>
            <div className='d-flex flex-column gap-5 mb-3'>
              <img src={center1} alt='medical-center-image' className='img-fluid' />
              <div className='mb-3'>
                <Reviews />
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <img src={center3} alt='medical-center-image' className='img-fluid mb-3' />
            <div className='mb-3'>
              <Reviews />
            </div>
            <img src={center5} alt='medical-center-image' className='img-fluid mb-3' />
          </div>
        </div>
      </section>

      {/* <section className='mt-5 mb-5'>
        <h2 className='text-center mb-5'><strong>Our Trusted Clients</strong></h2>
        <Testimonials />
      </section> */}

      <section className='container mt-5 mb-5'>
        <h1 className='text-center' style={{ color: '#327DC0' }}><strong>Palepu Group Companies*</strong></h1>

        <div className='mt-5'>
          <div className='row'>
            <div className='col-md-3'>
              <div className='d-flex flex-column justify-content-center align-items-center gap-4'>
                <img src={company1} alt='sponser-image' className='img-fluid' style={{ height: '140px' }} />
                <button className='btn-custom'>OPEN LINK</button>
              </div>
            </div>

            <div className='col-md-3'>
              <div className='d-flex flex-column justify-content-center align-items-center gap-4'>
                <img src={company2} alt='sponser-image' className='img-fluid' style={{ height: '140px' }} />
                <button className='btn-custom'>OPEN LINK</button>
              </div>
            </div>

            <div className='col-md-3'>
              <div className='d-flex flex-column justify-content-center align-items-center gap-4'>
                <img src={company4} alt='sponser-image' className='img-fluid' style={{ height: '140px' }} />
                <button className='btn-custom'>OPEN LINK</button>
              </div>
            </div>

            <div className='col-md-3'>
              <div className='d-flex flex-column justify-content-center align-items-center gap-4'>
                <img src={company3} alt='sponser-image' className='img-fluid' style={{ height: '140px' }} />
                <button className='btn-custom'>OPEN LINK</button>
              </div>
            </div>
          </div>

          <div className='text-center mt-4'>
            <p>Among Top 3 procurers for the largest 20 companies</p>
          </div>

        </div>
      </section>
    </>

  )
}

export default Home