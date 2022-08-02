import React from 'react'
import { Helmet } from 'react-helmet';
import './Edituser.css';
import Nav from '../../components/Nav';
import { Input } from '@chakra-ui/input'
import { Container } from 'react-bootstrap';
import { Button } from '@chakra-ui/react';

const UserEdit = () => {
  return (
    <div>
    <Helmet>
    <title>Edit User</title>
    </Helmet>
    <Nav/>
      <Container>
      <div className='edituser'>
        <h1 className='user_h1'>Edit User </h1>
        {/* <hr/> */}
        <label>Name :</label>
        <Input></Input><br/>
        <label>Email :</label>
        <Input></Input><br/>
        <button className='user_edit_btn'>Submit</button>
        </div>
      </Container>
    </div>
  )
}

export default UserEdit;