import React from 'react'
import { socialMedia } from '../../assets/constant/index';

export default function Footer() {
  return (
    <>
    <section id='footer' style={{position:'relative'}}>
      <div style={{width:'100%',height:'100%',zIndex:1,position:'absolute',top:'0',bottom:0,left:0,backgroundColor:'rgba(0, 0, 0, 0.8)' }}></div> 

      <div className='container d-flex justify-content-between align-items-center flex-wrap py-4'>
        <div style={{zIndex:1}}>
            <img src="" alt="Fuel Logo" />

            <p className='text-light' style={{fontSize:'20px'}}>
                A new way to make agreements<br /> easy, reliable and secure.

            </p>
        </div>
        <div style={{zIndex:1}} >
        <h4 className='text-light'>Useful Links</h4>
        <ul className='list-unstyled'>
            <li className='mb-2'><a href="http://w.in">About Us</a></li>
            <li className='mb-2'><a href="http://w.in">Services</a></li>
            <li className='mb-2'><a href="http://w.in">Get Membership</a></li>
            <li className='mb-2'><a href="http://w.in">How it Works</a></li>
            <li className='mb-2'><a href="http://w.in">Terms & Services</a></li>
        </ul> 
    
        </div>

        <div style={{zIndex:1}}>
        <h4 className='text-light'>Community</h4>

<ul className='list-unstyled'>
            <li className='mb-2'><a href="http://w.in">Help Center</a></li>
            <li className='mb-2'><a href="http://w.in">Services</a></li>
            <li className='mb-2'><a href="http://w.in">Get Membership</a></li>
            <li className='mb-2'><a href="http://w.in">How it Works</a></li>
            <li className='mb-2'><a href="http://w.in">Terms & Services</a></li>
        </ul>
        </div>
        <div style={{zIndex:1}}>
        <h4 className='text-light'>Partners</h4>

<ul className='list-unstyled'>
            <li className='mb-2'><a href="http://w.in">Our Partners</a></li>
            <li className='mb-2'><a href="http://w.in">Services</a></li>
            <li className='mb-2'><a href="http://w.in">Get Membership</a></li>
            <li className='mb-2'><a href="http://w.in">How it Works</a></li>
            <li className='mb-2'><a href="http://w.in">Terms & Services</a></li>
        </ul>

        </div>


      </div>

    </section>

    <section className='px-5 py-2 d-flex justify-content-around' style={{backgroundColor:"#444"}}>
        <div className='copy-right'>
        <i className='text-light'> &copy;copy right { new Date().getFullYear()}
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     All rights reserved by company name</i>
        </div>

        <div className='social_icon d-flex flex-row mt-6'>

        {socialMedia.map((social, index) =>(
        <img
        key={social.id}
         src={social.icon} 
         alt={social.id}
         className={`
         ${index !== socialMedia.length -1 ? 'mx-2': 'mr-0'}`} />
         
      ))}
        </div>
    
    </section>
    </>
  )
}
