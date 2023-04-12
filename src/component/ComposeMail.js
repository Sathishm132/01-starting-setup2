import axios from 'axios';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import React, { useRef, useState } from 'react'
import { Button, Container, Form, InputGroup } from 'react-bootstrap'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useNavigate } from 'react-router';

const ComposeMail = () => {
  const navigate=useNavigate()

 let editorState = EditorState.createEmpty();
  const [description, setDescription] = useState(editorState);
    const onEditorStateChange = (editorState) => {
        setDescription(editorState);
      }
    const email=useRef();
  const title=useRef()
  const clickhandler=(e)=>{
    e.preventDefault();
    const draft={
      mail:email.current.value,
      title:title.current.value,
      content:draftToHtml(convertToRaw(description.getCurrentContent())),
      read:false
    
    }
    axios.post("https://crud-12e65-default-rtdb.asia-southeast1.firebasedatabase.app/mail.json",draft).then(()=>{
      navigate("/")
    })
}
  return (
    <Container>
    <Form>
  <InputGroup size="sm" className="mb-3 mt-5">
    <InputGroup.Text id="inputGroup-sizing-sm">To</InputGroup.Text>
    <Form.Control required
     ref={email}
      aria-label="To"
      aria-describedby="inputGroup-sizing-sm"
    />
  </InputGroup>
  <InputGroup size="sm" className="mb-3 ">
    <InputGroup.Text id="inputGroup-sizing-sm">subject</InputGroup.Text>
    <Form.Control
    ref={title}
    required
      aria-label="To"
      aria-describedby="inputGroup-sizing-sm"
    />
  </InputGroup>
  <Editor
  editorState={description}
  toolbarClassName="toolbarClassName"
  wrapperClassName="wrapperClassName"
  editorClassName="editorClassName"
  onEditorStateChange={onEditorStateChange}
/>
<Button onClick={clickhandler}>send</Button>
<Button className='px-2 ms-4' onClick={()=>{navigate("/")}}>cancel</Button>
  </Form>
  </Container>
  )
}

export default ComposeMail;