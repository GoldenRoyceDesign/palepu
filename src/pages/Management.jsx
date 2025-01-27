import React from 'react'
import md from '../assets/gopal.png'

const Management = () => {
  return (
    <>
      <section>
        <div className='management'></div>

        <div className='text-center mt-5 manage-cont'>
          <p>OUR MANAGEMENT</p>
          <h1 className='mt-4'><strong>Meet the People Behind <br></br>
            PalepuPharma</strong></h1>
        </div>

        <div className='container mt-5 mb-5'>
          <div className='row'>
            <div className='col-md-3'>
              <img src={md} alt='MD-Image' className='img-fluid' />
              <h4 className='mt-4'> Mr. P S Gopal​</h4>
              <p className='text-primary'>Managing Director</p>
            </div>
            <div className='col-md-3'>
              <img src={md} alt='MD-Image' className='img-fluid' />
              <h4 className='mt-4'> Mr. P S Gopal​</h4>
              <p className='text-primary'>Managing Director</p>
            </div>
            <div className='col-md-3'>
              <img src={md} alt='MD-Image' className='img-fluid' />
              <h4 className='mt-4'> Mr. P S Gopal​</h4>
              <p className='text-primary'>Managing Director</p>
            </div>
            <div className='col-md-3'>
              <img src={md} alt='MD-Image' className='img-fluid' />
              <h4 className='mt-4'> Mr. P S Gopal​</h4>
              <p className='text-primary'>Managing Director</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container mt-5 mb-5'>
          <div className='row'>
            <div className='col-md-8'>
              <h1> Mr. P S Gopal​</h1>
              <p className='text-primary'>Managing Director</p>
              <p className='mt-5'>Mr P. S. Gopal is a Bachelor of commerce from Vivekananda College,
                Chennai. He started his working career under
                the mentorship of his father and founder of Palepu & Co., Mr. V.S. Palepu.</p>
              <p className='mt-4'>Under his tenure, Palepu has grown immensely with the establishment of
                5 Branches and 4 associate companies, making
                the company one of the largest distributors in the state of Tamil Nadu.</p>
            </div>
            <div className='col-md-3'>
              <img src={md} alt='MD-Image' className='img-fluid' />
            </div>
          </div>
          <p>He is a veteran committee member of the All India Organisation of Chemists and Druggists (AIOCD) & Tamil Nadu Chemist
            & Druggist Associaion (TNCDA) and was actively involved in the negotiation between the Pharmaceutical Manufacturer and
            Trade associates.</p>
          <p>He successfully initiated the historic tie-up with Apollo, to supply pharmaceutical products to their Hospitals and Pharmacies.</p>
        </div>
      </section>
    </>
  )
}

export default Management