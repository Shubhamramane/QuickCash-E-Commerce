import React from 'react'
import Nav from '../../components/Nav';
import { Input } from '@chakra-ui/input'
import { Container } from 'react-bootstrap';
import './EditForm.css';
import { Helmet } from 'react-helmet';

const EditForm = () => {
  return (
    <div>
    <Helmet>
        <title>Edit Form</title>
      </Helmet>
      <Nav/>
      <Container>
      <div className='editform'>
        <h1 className='form_h1'>Edit Form </h1>
        {/* <hr/> */}
        <label>Name :</label>
        <Input></Input><br/>
        <label>Email :</label>
        <Input></Input><br/>
        <label>Contact :</label>
        <Input></Input><br/>
        <label>Preferred Time :</label>
        <Input></Input><br/>
        <label>Message :</label>
        <Input></Input><br/>
        <label>Category :</label>
        <Input></Input>
        <label>Model :</label>
        <Input></Input><br/>
        <label>Brand :</label>
        <Input></Input><br/>
        <label>Size :</label>
        <Input></Input><br/>
        <label>Refrence Number :</label>
        <Input></Input>
        <label>Select Year :</label>
        <Input></Input><br/>
        <label>Description :</label>
        <Input></Input><br/>
        <label>UploadBills:</label>
        <Input></Input>
        <label>Upload Image :</label>
        <Input></Input><br/>
        <button className='form_edit_btn'>Submit</button>  
        </div>
      </Container>
    </div>
  )
}

export default EditForm