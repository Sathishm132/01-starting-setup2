import React from 'react'
import "./Menuoptions.css"

function Menuoption(props) {
  return (
    <div className="menuoption justify-content-between justify-content-center">
        <div className='d-flex'>    <i className={`${props.icon}`}></i>
        <div> <h4>{props.title}</h4></div></div>
       
    
       
        <p>{props.number}</p>
    </div>
  )
}

export default Menuoption