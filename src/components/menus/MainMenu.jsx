import React from 'react'
import {NavLink} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faDollyBox } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faUserPen } from '@fortawesome/free-solid-svg-icons'




export default function MainMenu() {
  return (
    <nav className="navbar navbar-expand-lg" style={{marginTop:'0px',paddingTop:'0px'}}>
     <div className='container-fluid' style={{paddingLeft:'50px'}}> 

     <NavLink className="nav-link fw-bold" 
           
        to="/">
        &nbsp;
         Fuel Logo
        </NavLink>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button> 
     <div className="collapse navbar-collapse" id="navbarNav"> 
     <ul className="navbar-nav"> 
    
     </ul> 
     
     </div> 

     <div className="collapse navbar-collapse justify-content-end" id="navbarNav"> 
     <ul className="navbar-nav"> 
    <li className="nav-item">
      <NavLink className="nav-link fw-bold" 
        style={({isActive})=>{
          return isActive ? {backgroundColor:'rgba(0, 0, 255, 0.3)'}:{color:'#000'}
        }}         
        to="/"><FontAwesomeIcon icon={faHome} />
        &nbsp;
         Home
        </NavLink>
      </li> 
      
      
      <li className="nav-item"> <a className="nav-link fw-bold" href="www.in.rw">About Us</a> </li> 
      <li className="nav-item"> <a className="nav-link fw-bold" href="www.in.rw">Membership</a> </li> 
     <li className="nav-item"> <a className="nav-link fw-bold" href="www.in.rw">Services</a> </li> 
     <li className="nav-item"> <a className="nav-link fw-bold" href="www.in.rw">Contact Us</a> </li> 
     <li className="nav-item"> <a className="nav-link fw-bold mx-3" href="www.in.rw"><FontAwesomeIcon icon={faDollyBox} /><span style={{color:'#ccc'}}>0</span> </a> </li> 

     
     <li className="nav-item"><div className='login'>
     <NavLink className="nav-link fw-bold" 
        style={({isActive})=>{
          return isActive ? {backgroundColor:'rgba(0, 0, 255, 0.3)'}:{color:'#000'}
        }}         
        to="/sign-in"> &nbsp;&nbsp;<FontAwesomeIcon icon={faUserCircle} />  &nbsp;Sign in 
         </NavLink>
        </div>
        </li>
      
        <li className="nav-item"><div className='register'>
     <NavLink className="nav-link fw-bold" 
        style={({isActive})=>{
          return isActive ? {backgroundColor:'rgba(0, 0, 255, 0.3)'}:{color:'#000'}
        }}         
        to="/sign-up"> &nbsp;&nbsp;<FontAwesomeIcon icon={faUserPen} />  &nbsp;Register 
        </NavLink>
        </div>
        </li>
      
     </ul> 
     
     </div> 



     </div> 
     </nav> 
  )
}
