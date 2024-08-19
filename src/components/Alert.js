import React from 'react'

export default function Alert(props) {
  return (
    
  
    <div className="alert-box">
    {  // bcz of props.alert was java script
   props.alert &&  <div className="alert alert-success alert-dismissible fade show" style={{backgroundColor: '#80cb80'}} role="alert">
    <strong>{props.alert.type}</strong>:{props.alert.msg}
  </div>

    }

  </div>
   
  )
}