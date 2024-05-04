import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faHandsHelping, faHourglass, faPhone, faTimes } from '@fortawesome/free-solid-svg-icons'

export default function MemberShip() {
  return (
    <section style={{background:'#f4f4f4',marginTop:'-10px',paddingBottom:'150px'}}>
        <div className="" >

        <div className='pink-block text-center pt-5' style={{height:'300px',width:'100%',backgroundColor:'rgba(0,0,255,0.3)'}}>
            <h3 className='text-light my-3'>Ready to get started?</h3>
            <p>n days unlimited free trial. No contract or credit card required</p>

            <h4>Membership Levels</h4>


       </div>
      <div className='membership-block text-center'>

        <div className='container bg-light pt-5 pb-5 d-flex flex-row flex-wrap justify-content-around align-items-center membership-box' style={{boxShadow:'3px 8px 12px #ccc',marginTop:'-50px'}}>
          
          <div className='card pb-5 text-center' style={{width:'18em',marginBottom:'5em'}}>
            <header className='bg-dark py-2'><b className='text-light'>Bronze</b></header>
            <div className='currency py-4'>
               <h4> $0<small> <sub>/Month</sub></small></h4>
            </div>
            <hr style={{borderWidth:'3px',width:'90%',borderColor:'#ccc',margin:'10px auto'}}/>

            <ul className='list-unstyled'>
              <li><FontAwesomeIcon icon={faCheck} /> &nbsp;one</li>
              <li><FontAwesomeIcon icon={faCheck} /> &nbsp;two</li>
              <li><FontAwesomeIcon icon={faTimes} /> &nbsp;three</li>
              <li><FontAwesomeIcon icon={faTimes} /> &nbsp;four</li>
              <li><FontAwesomeIcon icon={faTimes} /> &nbsp;Five</li>

            </ul>


        
           <a style={{width:'94%',margin:'auto'}} className='btn btn-info rounded-0 text-light fw-bold' href="http://getstarted" target="_blank" rel="noopener noreferrer">Get Started</a>

          </div>




          <div className='card pb-5 text-center' style={{width:'18em',marginBottom:'5em'}}>
            <header className='bg-dark py-2'><b className='text-light'>Silver</b></header>
            <div className='currency py-4'>
               <h4> $30<small> <sub>/Month</sub></small></h4>
            </div>
            <hr style={{borderWidth:'3px',width:'90%',borderColor:'#ccc',margin:'10px auto'}}/>

            <ul className='list-unstyled'>
              <li><FontAwesomeIcon icon={faCheck} /> &nbsp;one</li>
              <li><FontAwesomeIcon icon={faCheck} /> &nbsp;two</li>
              <li><FontAwesomeIcon icon={faCheck} /> &nbsp;three</li>
              <li><FontAwesomeIcon icon={faCheck} /> &nbsp;four</li>
              <li><FontAwesomeIcon icon={faTimes} /> &nbsp;Five</li>

            </ul>


        
           <a style={{width:'94%',margin:'auto'}} className='btn btn-info rounded-0 text-light fw-bold' href="http://getstarted" target="_blank" rel="noopener noreferrer">Get Started</a>

          </div>


          <div className='card pb-5 text-center' style={{width:'18em',marginBottom:'5em',position:'relative',overflow:'hidden'}}>
            <span className='text-center fw-bold py-1' style={{backgroundColor:'green',position:'absolute',transform:'rotate(-35deg)',left:'-27px',top:'20px',width:'57%'}}>Best Price</span>
            <header className='bg-dark py-2'><b className='text-light'>Diamond</b></header>
            <div className='currency py-4'>
               <h4> $90<small> <sub>/Month</sub></small></h4>
            </div>
            <hr style={{borderWidth:'3px',width:'90%',borderColor:'#ccc',margin:'10px auto'}}/>

            <ul className='list-unstyled'>
              <li><FontAwesomeIcon icon={faCheck} /> &nbsp;one</li>
              <li><FontAwesomeIcon icon={faCheck} /> &nbsp;two</li>
              <li><FontAwesomeIcon icon={faCheck} /> &nbsp;three</li>
              <li><FontAwesomeIcon icon={faCheck} /> &nbsp;four</li>
              <li><FontAwesomeIcon icon={faCheck} /> &nbsp;Five</li>

            </ul>


        
           <a style={{width:'94%',margin:'auto'}} className='btn btn-info rounded-0 text-light fw-bold' href="http://getstarted" target="_blank" rel="noopener noreferrer">Get Started</a>

          </div>          
     </div>

</div>


<div className="services d-flex flex-wrap container" style={{marginTop:'-50px'}}>

  <div className="service-item fw-bold d-flex flex-fill align-items-center bg-dark" style={{height:'100px',borderTopLeftRadius:'45%',borderBottomLeftRadius:'45%'}}>
    <div className='icon bg-light d-flex justify-content-center align-items-center mx-3' style={{borderRadius:'50%',width:'40px',height:'40px'}}><FontAwesomeIcon style={{color:'red'}} icon={faHandsHelping} /></div>
    <div className='desc text-light f-bold'>
      <span style={{color:'red'}}>24/7</span> Road Help Service

    </div>
  </div>

  <div className="service-item d-flex flex-fill align-items-center fw-bold" style={{backgroundColor:'green',height:'100px'}}>
  <div className='icon bg-light d-flex justify-content-center align-items-center mx-3' style={{borderRadius:'50%',width:'50px',height:'50px'}}>
  <FontAwesomeIcon style={{color:'red'}} icon={faPhone} />
  </div>

    <div className='desc'>
    <p>
      Call Now to get Help<br />
     <span className='text-light'> +250 078-39-30-299</span>
    </p>
    </div>
    
    </div>

  <div className="service-item fw-bold d-flex flex-fill align-items-center bg-dark" style={{height:'100px',borderTopRightRadius:'45%',borderBottomRightRadius:'45%'}}>
    <div className='icon bg-light d-flex justify-content-center align-items-center mx-3' style={{borderRadius:'50%',width:'50px',height:'50px'}}><FontAwesomeIcon style={{color:'red'}} icon={faHourglass} /></div>
    <div className='desc text-light f-bold'>
      Arrival Time :  <span style={{color:'red'}}>40 min</span>

    </div>
  </div>
</div>




</div>        


    </section>
  )
}
