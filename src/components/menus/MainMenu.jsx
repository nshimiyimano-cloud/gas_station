import React from 'react'

export default function MainMenu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <div className="container-fluid"> 
     <a className="navbar-brand" href="www.in.rw">My App</a> 
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button> 
     <div className="collapse navbar-collapse" id="navbarNav"> <ul className="navbar-nav"> 
    <li className="nav-item"> <a className="nav-link active" aria-current="page" href="www.in.rw">Home</a>
     </li> <li className="nav-item"> <a className="nav-link" href="www.in.rw">About</a> </li> 
     <li className="nav-item"> <a className="nav-link" href="www.in.rw">Contact</a> </li> 
     </ul> 
     </div> 
     </div> 
     </nav> 
  )
}
