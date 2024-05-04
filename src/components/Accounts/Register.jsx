import { faKey, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { socialMedia } from '../../assets/constant'

function Register() {
  return (
    <div className='signup-container py-5' style={{backgroundColor:'rgba(0,0,0,0.8)'}}>
      <div  className='form-container d-flex px-5 py-5  my-5 flex-sm-wrap container' style={{boxShadow:'0px 8px 13px #c0e'}}>
        <div className='part part-left flex-fill' style={{borderTop:'10px solid #000',borderTopLeftRadius:'15px',position:'relative',borderBottomLeftRadius:'15px',width:'48%'}}>
          <div className=' px-5 py-5 pl-1' style={{backgroundColor:'rgba(0,0,255,0.9)',position:'absolute',left:0,top:0,width:'100%',height:'100%'}}>



          <img src="" alt="Logo" /><br />
<p style={{fontSize:'25px',lineHeight:'20px'}}>
  Providde Your<br />
  <small style={{fontSize:'14px'}}>Login Id & Password</small>
</p>
<br />

<header>
  <h4 className='text-light'> Keep your credintials secretly.  </h4>

</header>
<br />
<p className='text-light'>
  Hello There.<br/>
  You are just one step away to get your own account
</p>
<br />
<p className='text-light'>Do you already have an account?</p>
<p>

     <NavLink className="btn fw-bold text-light" style={{background:'inherit',border:'2px solid #fff',borderRadius:'50px',paddingRight:'30px',paddingLeft:'30px'}}  
            
        to="/sign-in"> Sign in here
        </NavLink>
        
</p>


 {/*  closed here */}
        </div>

           
          </div>
          
          

        <div className='part part-right flex-fill px-5 py-5 bg-light pl-1' style={{borderTop:'10px solid #000',borderTopRightRadius:'15px',borderBottomRightRadius:'15px',width:'48%'}}>
          <p>
            <h4>Create Account</h4></p>
            <p>Its Completely Free</p>

            <form action="" method="post">

              <div className='form-group'>
              <label for="email">Email</label>
              <div class="input-group mb-3">
                <input  className='form-control' id='email' type="text" placeholder='Ex:njinfo@gmail.com' />
                <span class="input-group-text"> <FontAwesomeIcon icon={faUser} /> </span>               
              </div>

              </div>

              <div className='form-group'>
              <label for="passord">Password</label>
              <div class="input-group mb-3">
                <input  className='form-control' id='password' type="password" />
                <span class="input-group-text"> <FontAwesomeIcon icon={faKey} /> </span>               
              </div>
              </div>

              <div className='form-group'>
              <label for="passord">Confirm Password</label>
              <div class="input-group mb-3">
                <input  className='form-control' id='password' type="password" />
                <span class="input-group-text"> <FontAwesomeIcon icon={faKey} /> </span>               
              </div>

              <div style={{float:'left'}}><input type="checkbox" name="" id="" /> Show</div>
              <div style={{float:'right',marginTop:'-2px'}}> <a className='btn text-danger' href="www.hh.com">Forgot Pasword</a></div>

              </div>
              <br />
              <button style={{clear:'both',borderRadius:'50px'}} className='btn btn-primary flex-fill fw-bold w-100' type="submit">Sign Up</button>


              <br />
              <br />
             



              <div className='text-center' >
                <p>Would you proceed to our social media? use below links</p>
              
             </div>





             
             



            </form>
          
            <div className='bg-dark social_icon py-2 d-flex flex-row  justify-content-center mt-6'>

        {socialMedia.map((social, index) =>(
          <a href='www.i.com'> 
        <img
        key={social.id}
         src={social.icon} 
         alt={social.id}
         className={`
         ${index !== socialMedia.length -1 ? 'mx-2': 'mr-0'}`} />
         </a>
         
      ))}
        </div>

        </div>

  
      </div>


    </div>
  )
}
export default Register