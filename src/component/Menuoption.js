import React from 'react'
import { useDispatch } from 'react-redux'
import { mailaction } from '../Store/MailSlice'
import "./Menuoptions.css"

function Menuoption(props) {
  const dispatch=useDispatch()
  const clickhandler=()=>{
    dispatch(mailaction.mailtype(props.title))


  }
  return (
    <div className="menuoption justify-content-between justify-content-center" onClick={clickhandler}>
        <div className='d-flex'>    <i className={`${props.icon}`}></i>
        <div> <h4>{props.title}</h4></div></div>
       
    
       
        <p>{props.number}</p>
    </div>
  )
}

export default Menuoption