import React, { useEffect } from 'react'
import md from '../assets/gopal.png'
import team from '../assets/team.png'
import AOS from "aos";
import "aos/dist/aos.css";
import Chatbot from '../component/Chatbot';

const Management = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <>
      <section>
        <div className='management text-center manage-cont'>
          <h1 className='fw-bold' data-aos="zoom-in">OUR MANAGEMENT</h1>
        </div>

        <div className='text-center mt-5' data-aos="fade-right">
          <h1 className='mt-4 fw-bold'> Meet the People Behind <br></br>
            Palepu Pharma</h1>
          <h4 className='fw-bold mt-3' data-aos="zoom-in">AT PALEPU PHARMA,</h4>
          <p data-aos="zoom-out">EXCELLENCE STARTS AT THE TOP <br></br>
            and shows up in everything we do</p>
        </div>

        <div className='container mt-5 mb-5 managing-director'>
          <div className='row'>
            <div className='col-md-3 team-member' data-aos="fade-up">
              <div className="image-container">
                <img src={team} alt='MD-Image' className='img-fluid' />
                <div className="overlay">
                  <a href='/' target='_blank'>
                    <span className="overlay-text">READ BIO</span></a>
                </div>
              </div>
              <h4 className='mt-4'><strong> Mr. P S Gopal​</strong></h4>
              <p className='text-primary'>Managing Director</p>
            </div>
            <div className='col-md-3 team-member' data-aos="fade-down">
              <div className="image-container">
                <img src={team} alt='MD-Image' className='img-fluid' />
                <div className="overlay">
                  <a href='/' target='_blank'>
                    <span className="overlay-text">READ BIO</span></a>
                </div>
              </div>
              <h4 className='mt-4'><strong> Mr. P S Gopal</strong>​</h4>
              <p className='text-primary'>Managing Director</p>
            </div>
            <div className='col-md-3 team-member' data-aos="fade-up">
              <div className="image-container">
                <img src={team} alt='MD-Image' className='img-fluid' />
                <div className="overlay">
                  <a href='/' target='_blank'>
                    <span className="overlay-text">READ BIO</span></a>
                </div>
              </div>
              <h4 className='mt-4'><strong> Mr. P S Gopal</strong>​</h4>
              <p className='text-primary'>Managing Director</p>
            </div>
            <div className='col-md-3 team-member' data-aos="fade-down">
              <div className="image-container">
                <img src={team} alt='MD-Image' className='img-fluid' />
                <div className="overlay">
                  <a href='/' target='_blank'>
                    <span className="overlay-text">READ BIO</span></a>
                </div>
              </div>
              <h4 className='mt-4'><strong> Mr. P S Gopal</strong>​</h4>
              <p className='text-primary'>Managing Director</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container mt-5 mb-5'>
          <h3 className='fw-bold'>BRANCH MANAGERS</h3>
          <div className='row mt-4'>
            <div className='col-md-3 team-member' data-aos="fade-up">
              <div className="image-container">
                <img src={team} alt='MD-Image' className='img-fluid' />
                <div className="overlay">
                  <a href='/' target='_blank'>
                    <span className="overlay-text">READ BIO</span></a>
                </div>
              </div>
              <h4 className='mt-4'><strong> Mr. P S Gopal​</strong></h4>
              <p className='text-primary'>Managing Director</p>
            </div>
            <div className='col-md-3 team-member' data-aos="fade-down">
              <div className="image-container">
                <img src={team} alt='MD-Image' className='img-fluid' />
                <div className="overlay">
                  <a href='/' target='_blank'>
                    <span className="overlay-text">READ BIO</span></a>
                </div>
              </div>
              <h4 className='mt-4'><strong> Mr. P S Gopal</strong>​</h4>
              <p className='text-primary'>Managing Director</p>
            </div>
            <div className='col-md-3 team-member' data-aos="fade-up">
              <div className="image-container">
                <img src={team} alt='MD-Image' className='img-fluid' />
                <div className="overlay">
                  <a href='/' target='_blank'>
                    <span className="overlay-text">READ BIO</span></a>
                </div>
              </div>
              <h4 className='mt-4'><strong> Mr. P S Gopal</strong>​</h4>
              <p className='text-primary'>Managing Director</p>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className='container mt-5 mb-5'>
          <h3 className='fw-bold'>OUR STAFFS</h3>
          <div className='row mt-4'>
            <div className='col-md-3 team-member' data-aos="fade-up">
              <div className="image-container">
                <img src={team} alt='MD-Image' className='img-fluid' />
                <div className="overlay">
                  <a href='/' target='_blank'>
                    <span className="overlay-text">READ BIO</span></a>
                </div>
              </div>
              <h4 className='mt-4'><strong> Mr. P S Gopal​</strong></h4>
              <p className='text-primary'>Managing Director</p>
            </div>
            <div className='col-md-3 team-member' data-aos="fade-down">
              <div className="image-container">
                <img src={team} alt='MD-Image' className='img-fluid' />
                <div className="overlay">
                  <a href='/' target='_blank'>
                    <span className="overlay-text">READ BIO</span></a>
                </div>
              </div>
              <h4 className='mt-4'><strong> Mr. P S Gopal</strong>​</h4>
              <p className='text-primary'>Managing Director</p>
            </div>
            <div className='col-md-3 team-member' data-aos="fade-up">
              <div className="image-container">
                <img src={team} alt='MD-Image' className='img-fluid' />
                <div className="overlay">
                  <a href='/' target='_blank'>
                    <span className="overlay-text">READ BIO</span></a>
                </div>
              </div>
              <h4 className='mt-4'><strong> Mr. P S Gopal</strong>​</h4>
              <p className='text-primary'>Managing Director</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container mt-5 mb-5'>
          <div className='row'>
            <div className='col-md-8' data-aos="zoom-in-right">
              <h3><strong> Mr. P S Gopal</strong>​</h3>
              <p className='text-primary'>Managing Director</p>
              <p className='mt-5'>Mr P. S. Gopal is a Bachelor of commerce from Vivekananda College,
                Chennai. He started his working career under
                the mentorship of his father and founder of Palepu & Co., Mr. V.S. Palepu.</p>
              <p className='mt-4'>Under his tenure, Palepu has grown immensely with the establishment of
                5 Branches and 4 associate companies, making
                the company one of the largest distributors in the state of Tamil Nadu.</p>
            </div>
            <div className='col-md-3 mb-3' data-aos="zoom-in-up">
              <img src={md} alt='MD-Image' className='img-fluid' />
            </div>
          </div>
          <p data-aos="zoom-in-right">He is a veteran committee member of the All India Organisation of Chemists and Druggists (AIOCD) & Tamil Nadu Chemist
            & Druggist Associaion (TNCDA) and was actively involved in the negotiation between the Pharmaceutical Manufacturer and
            Trade associates.</p>
          <p data-aos="zoom-in-right">He successfully initiated the historic tie-up with Apollo, to supply pharmaceutical products to their Hospitals and Pharmacies.</p>
        </div>
      </section>

      <Chatbot />
    </>
  )
}

export default Management