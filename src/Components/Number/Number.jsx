import React, { useEffect } from 'react';
import './Number.css'
import line2 from '../../assets/line-2.png'
import line3 from '../../assets/line-3.png'
import 'aos/dist/aos.css';
import AOS from 'aos';

const Number = () => {
  return (
    
    <div className="number container" data-aos="fade-right">
      <div className='elementN'>
      <div className="element-inner">
      <div className="tbox">
      <h1>15M+</h1>
      <p>Downloads Worldwide</p>
      </div>
      <img src={line2} alt="" />
      <div className="tbox">
      <h1>200+</h1>
      <p>Software Products</p>
      </div>
      <img src={line2} alt="" />
      <div className="tbox">
      <h1>70+</h1>
      <p>Team Members</p>
      </div>
      <img src={line2} alt="" />
      <div className="tbox">
      <h1>2010</h1>
      <p>Year Founded</p>
      </div>
      </div>
    </div>
    <hr />
    </div>
    
  )
}

export default Number