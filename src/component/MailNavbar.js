
import React from 'react'
import { Button, Container, Form, NavLink, Navbar } from 'react-bootstrap'




const MailNavbar = () => {
  const signin=localStorage.getItem("token")
  return (
    <>
 <Navbar className='bg-light d-flex justify-content-around' >
    <div className=' m-2'>
        
    <i class="bi bi-list"></i>
   
    
    </div>
    <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
    <Navbar.Collapse className="justify-content-center">
    <Form className='d-flex'>
    
    <Form.Control
      type="search"
      placeholder="Search"
      className="me-2"
      aria-label="Search"
    />
    <Button variant="outline-success">Search</Button>


</Form>   
         
        </Navbar.Collapse>
   
   
    

       
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end m-2">
            
          <Navbar.Text>
        {!signin&&<NavLink>login</NavLink>}
        {signin&&<NavLink>logout</NavLink>}
          </Navbar.Text>
        </Navbar.Collapse>
       
    </Navbar>

    </>
  )
}

export default MailNavbar