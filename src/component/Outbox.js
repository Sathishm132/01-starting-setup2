import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { mailaction } from '../Store/MailSlice'
import Emailcard from './Emailcard'

const Outbox = () => {
   const dispatch=useDispatch()
   const outbox=useSelector(state=>state.outbox)
    useEffect(()=>{
        const fetch=async()=>{
            const response= await axios.get(`https://crud-12e65-default-rtdb.asia-southeast1.firebasedatabase.app/sendmail.json`)
          let fetchdata=[]
          for(let key in response.data){
             fetchdata.push({...response.data[key],id:key})
        
             }
             dispatch(mailaction.replaceoutemail(fetchdata))
            }
             
             
          fetch()
        
    },[])
    const outboxlist=outbox.map((mail)=>(<div className='emailcard' ><Emailcard title={mail.title} 
    description={mail.content}
    id={mail.id}
    read={mail.read}
    email={mail.mail}
    /></div>))
    
  return (
    <div>{
        outboxlist}</div>
  )
}

export default Outbox