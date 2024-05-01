import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"




export default function TopMenu() {
  return (
    <div>
      <div className='topmenu_block d-flex align-items-center' style={{width:'80%',margin:'0 0 0 100px'}}>
        <ul className='list-unstyled list-inline'>
          <li className='list-inline-item'>
          <FontAwesomeIcon icon={faPhone} />
          &nbsp; <i>+250783930299</i>
          </li>

          <li className='list-inline-item'>
          <FontAwesomeIcon icon={faEnvelope} />
          &nbsp; <i> info.gazstation@yahoo.com</i>
          </li>

        </ul>

        
        <ul className='list-unstyled list-inline mx-5'>
          <li className='list-inline-item'>
            <i>Follow Us</i>&nbsp;&nbsp;

            <a href="http://facebook.com">
            <FontAwesomeIcon icon={faFacebook} /> 
            </a>
                   
          </li>

          <li className='list-inline-item'>
            <a href="http://twitter.com">
            <FontAwesomeIcon icon={faTwitter} />
            </a>          
          </li>

          <li className='list-inline-item'>
            <a href="http://linkedin.com">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
            
          </li>

          <li className='list-inline-item'>
            <a href="https://wa.me/25783930299">
            <FontAwesomeIcon icon={faWhatsapp} />
            </a>          
          </li>

        </ul>
        
      
        
        </div>
        <hr color='#ccc'/>
        
    </div>
  )
}
