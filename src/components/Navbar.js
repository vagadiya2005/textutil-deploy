import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

//import React, { Component } from 'react'



// type  "rfc" to import react based component

export default function Navbar(props) {





  return (
    <div>

    
   <nav className={`navbar navbar-expand-lg navbar-${props.mode}`} >
   <div className="container-fluid">
     <a className="navbar-brand" href="/">{props.title}</a>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">  
           <Link className="nav-link active" aria-current="page" to="/">{props.homesection}</Link>
         </li>
         <li className="nav-item">
          
         </li>
         <li className="nav-item dropdown">
           
           
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="/about">{props.abouttext}</Link>
         </li>
       </ul>
       <div class="form-check form-switch">
       <input className="form-check-input text-line" onClick={props.webmode} style={{cursor:'pointer'}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
       <label className="form-check-label" cursor='pointer' for="flexSwitchCheckDefault" style={{cursor:'pointer'}}>Enable Dark Mode</label>
     </div>
     </div>
   </div>
 </nav>
    
      
    </div>
  )
}

 Navbar.propTypes = {
    
    title: PropTypes.string.isRequired,
    homesection: PropTypes.string.isRequired,
    abouttext: PropTypes.string.isRequired
}

Navbar.defaultProps ={

title: "TextUtils",
abouttext: "link"

};