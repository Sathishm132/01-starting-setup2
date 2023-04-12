import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import EmailList from './EmailList'
import Menuoption from './Menuoption'
import "./SideMenu.css"

const SideMenu = () => {
  const navigate=useNavigate()
  const clickhandler=()=>{
    navigate("/ComposeMail")

  }
  return (
    <div>
      <div className='row'>
        <div className='col-auto col-sm-2 d-fex flex-col justify-content-between min-vh-100 bg-light '>
        <Button onClick={clickhandler} className='mt-3 ms-3'>+compose</Button>
        <Menuoption 
        title={"Inbox"}
        number={20}
        icon={"bi bi-inbox"}/>
        <Menuoption
        title={"sent"}
        icon={"bi bi-send"}></Menuoption>
        <Menuoption title={"stared"}
        icon={"bi bi-star"}/>
        <Menuoption title={"spam"}
        icon={"bi bi-exclamation-octagon"}
        />
        </div>
        <div className='col sm-6 d-flex p-fixed'>
          <EmailList/>
          

        </div>
      
      </div>
        
    </div>
  )
}

export default SideMenu