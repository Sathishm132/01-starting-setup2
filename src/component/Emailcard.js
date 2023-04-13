import React from 'react'
import './Emailcard.css'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { mailaction } from '../Store/MailSlice'

const Emailcard = (props) => {
  const inbox=useSelector(state=>state.inboxmail);
  
  let me=props.email.replace(/[^a-zA-Z ]/g, "");
  let updatedinbox=[...inbox]
  const dispatch=useDispatch()
  
  
  const navigate=useNavigate()
  const deletehandler=()=>{
   updatedinbox=updatedinbox.filter(item=>item.id!==props.id)
    dispatch(mailaction.repalcemail(updatedinbox))
    axios.delete(`https://crud-12e65-default-rtdb.asia-southeast1.firebasedatabase.app/${me}/${props.id}.json`)
    axios.delete()
  }
  const clickhandler=()=>{
    const element=inbox.find(item=>item.id===props.id)
  const index=inbox.findIndex(item=>item.id===props.id)
  let updateditem={...element,read:true}
  updatedinbox[index]=updateditem
    axios.put(`https://crud-12e65-default-rtdb.asia-southeast1.firebasedatabase.app/${me}/${props.id}.json`,updateditem)
    dispatch(mailaction.repalcemail(updatedinbox))
    console.log(updatedinbox)

navigate(`/${props.id}`)

  }
  return (
    <div className='d-flex  py-1    justify-content-between' >
     
       
          <div className='d-flex px-2 text-align-center py-2  '>
          <Form.Check className='py-1'
            type={'checkbox'}
            id={`default-checkbox`}
            
          />
          <i className="bi bi-star"></i>
          <div onClick={clickhandler}>
          <p className='px-2'>{props.title}</p>
          {!props.read&& <p><span class="badge rounded-pill bg-primary">new</span></p>}
          <p dangerouslySetInnerHTML={{ __html: props.description }} />
          </div>
          
         
          </div>
          
       
          <div className='py-2 justify-content-center text-align-center px-4'>        
          <i onClick={deletehandler} class="bi bi-trash3"></i>
          <i class="bi bi-clock-history"></i>
          <i class="bi bi-envelope-open"></i></div>
  

        
    </div>
  )
}

export default Emailcard

