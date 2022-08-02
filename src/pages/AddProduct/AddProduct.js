import React from 'react'
import Nav from '../../components/Nav';
import { Input } from '@chakra-ui/input'
import { Container } from 'react-bootstrap';
import './AddProduct.css';
import { Helmet } from 'react-helmet';

const AddProduct = () => {
  return (
    <div>
        <Helmet>
        <title>Add Product</title>
      </Helmet>
      <Nav/>
      <Container>
      <div className='addproduct'>
        <h1 className='product_h1'>Add Product </h1>
        {/* <hr/> */}
        <label>Name :</label>
        <Input></Input><br/><br/>
        <label>Price :</label>
        <Input></Input><br/><br/>
        <label>countInStock :</label>
        <Input></Input><br/><br/>
        <label>Description :</label>
        <Input></Input><br/><br/>
        <label>Sizes :</label>
        <label className='ml-5'>S</label><input  type="checkbox" className='ml-5'></input>
        <label className='ml-5'>M</label><input  type="checkbox" className='ml-5'></input>
        <label className='ml-5'>L</label><input  type="checkbox" className='ml-5'></input>
        <label className='ml-5'>XL</label><input  type="checkbox" className='ml-5'></input><br/><br/>
        <label>Urls for images:</label>
        <Input></Input><br/><br/>
        <Input></Input><br/><br/>
        <Input></Input><br/>
        <button className='product_add_btn'>Submit</button>
        </div>
      </Container>
    </div>
  )
}

export default AddProduct