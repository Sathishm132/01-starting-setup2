import axios from 'axios'
import React from 'react'

function Request(object,mydata) {
    
    if(object.method==="get"){
        const fetch =async()=>{
            try{
                const response= await axios.get(`https://crud-12e65-default-rtdb.asia-southeast1.firebasedatabase.app/${object.directory}.json`)
                if(!response.statusText==='ok'){
                    
                    throw  new Error("requestd failed")
                   
                }
                console.log(response.data)
               
              await  mydata(response.data)
                
            }catch(err){
                console.log(err)
            }
            
           
   
    }
    return{
        fetch
    }    

    
}
}

export default Request