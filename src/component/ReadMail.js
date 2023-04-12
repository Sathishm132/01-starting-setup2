import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

function ReadMail() {
    let{id}=useParams()
    
    const inbox=useSelector(state=>state.inboxmail);
   const message=inbox.find(item=>item.id===id);
  return (
    <div className='mt-5'>
        <Container>
        <Card>
      <Card.Header>
      <Button variant="primary">back</Button>
      <Button variant="primary" className='ms-4 px-3'>delete</Button>
        text message</Card.Header>
      <Card.Body>
        <Card.Title>{message.title}</Card.Title>
        <Card.Text>
        <p dangerouslySetInnerHTML={{ __html: message.content }} />
        </Card.Text>
      
      </Card.Body>
    </Card>
        </Container>
    </div>
  )
}

export default ReadMail