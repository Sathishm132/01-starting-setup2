import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import EmailList from '../component/EmailList'
import MailNavbar from '../component/MailNavbar'
import SideMenu from '../component/SideMenu'
import { mailaction } from '../Store/MailSlice'

const Inbox = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    const fetch=async()=>{
      const response= await axios.get("https://crud-12e65-default-rtdb.asia-southeast1.firebasedatabase.app/mail.json")
    let fetchdata=[]
    for(let key in response.data){
       fetchdata.push({...response.data[key],id:key})
  
       }
       dispatch(mailaction.repalcemail(fetchdata))
      }
       
       
    fetch()
  },[])
  return (
    <>
    <MailNavbar/>
    <SideMenu/>
   
    </>
  )
}

export default Inbox