import React from 'react'
import bannnerSlider1 from "../../assets/Gaz_bottle.png"
import bannnerSlider2 from '../../assets/station_img.png';
import { Fade } from "react-slideshow-image";

const fadeImages = [bannnerSlider1,bannnerSlider2];
  const properties = {
    duration: 500,
    transitionDuration: 2500,
    infinite: true,
    indicators: false,
    arrows: false,
    pauseOnHover: true    
  }

export default function LandingPage() {
  return (
    <div className='top-banner-slideshow'>
        <div style={{width:'100%',height:'100%',zIndex:1,position:'absolute',top:'-10px',bottom:0,left:0,backgroundColor:'rgba(0, 0, 0, 0.3)' }}></div>

        <div className='d-flex flex-column justify-content-center align-items-center px-5' id='letTopInSlide'>
      <h2 style={{color:'#e11736'}} className='text-center' >Why Gaz Contribution</h2>
    <h6 style={{color:'#095c91'}} className='text-center mb-5'>We concern about all side to use our online Service. Trust me. Actually you'll love it!</h6>

      </div>
        
        
        <div id='rightBottomInSlide'>
<h2 style={{color:'#fff'}}  >Our Service</h2>
<h6 style={{color:'green'}} className='mb-5'>Gaz Contribution is our possibility to reach everyone</h6>
</div>


        <Fade  {...properties}  >
        <div className="each-fade" >
          <img src={bannnerSlider1}  alt=''/>
        </div>
        <div className="each-fade">
          <img src={fadeImages[1]} alt='' />
        </div>        
      </Fade>




        
    </div>
  )
}
