import axios from 'axios'

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import MailNavbar from '../component/MailNavbar'
import SideMenu from '../component/SideMenu'
import Request from '../hooks/Request'
import { mailaction } from '../Store/MailSlice'

const Inbox = () => {
  const dispatch=useDispatch();
  const me=localStorage.getItem("email").replace(/[^a-zA-Z ]/g, "");
  const[data,setData]=useState([])
 
  
  const mydata=(taskobg)=>{
    let fetchdata=[]
        for(let key in taskobg){
           fetchdata.push({...taskobg[key],id:key})
      
           }
           dispatch(mailaction.repalcemail(fetchdata));
  }
  const {fetch}=Request({method:"get",directory:me,},mydata);

  
  useEffect(()=>{
   
    
   
    fetch()
   
    console.log(data)
    setInterval(()=>{
    
         

  },2000)
    
  },[])
  return (
    <>
    <MailNavbar/>
    <SideMenu/>

   
    </>
  )
}

export default Inbox