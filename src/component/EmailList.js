import React from 'react'
import { useSelector } from 'react-redux'
import Emailcard from './Emailcard'
import "./Emaillist.css"

const EmailList = () => {

  const inbox=useSelector(state=>state.inboxmail);
  const inboxlist=inbox.map((mail)=>(<div className='emailcard' ><Emailcard title={mail.title} 
    description={mail.content}
    id={mail.id}
    read={mail.read}/></div>))
  return (
    <div className='emaillist  '>
    
      <div className='mt-2 bg-light py-2 position-static'>
        <ul>
        
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  

 
          <p>chwod</p>
          <p>chwod</p>
          <p>chwod</p>
          
          <p>chwod</p>
          </ul>
         
      </div>
      <div>
      {inboxlist}
      
      </div>
     
      
    </div>
        
  )
}

export default EmailList