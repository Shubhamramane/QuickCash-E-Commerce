import React,{useState} from 'react'
import Nav from '../../components/Nav';
import { Input } from '@chakra-ui/input'
import { Container } from 'react-bootstrap';
import './AddProduct.css';
import { Helmet } from 'react-helmet';
import axios from "axios";

const AddProduct = () => {

  const [name,setName] = useState('wdf')
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState('')
    const [countInStock,setCountInStock] = useState('')
    const [Url1,setUrl1] = useState('')
    const [Url2,setUrl2] = useState('')
    const [Url3,setUrl3] = useState('')

    const [Images,setImages] = useState([])
    const [sizes,setSizes] = useState([])

    const [Sselected,setSselected] = useState(false)
    const [Mselected,setMselected] = useState(false)
    const [Lselected,setLselected] = useState(false)
    const [XLselected,setXLselected] = useState(false)

    const [message,setMessage] = useState(null) 

  const addproduct = (e) =>{
    e.preventDefault();

    const fetch = async () => {
      const datass = {name , description , price , countInStock , Url1 , Url2 , Url3 }
      const {data} = await axios.post(`http://localhost:5051/api/product`, datass)
      console.log(data)
      }
      fetch()
  }

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
        <form onSubmit={addproduct}  enctype="multipart/form-data">
        <label>Name :</label>
        <Input  ></Input><br/><br/>
        <label>Price :</label>
        <Input value={price} onchange={e =>setPrice(e.target.value)}></Input><br/><br/>
        <label>countInStock :</label>
        <Input value={countInStock} onchange={e => setCountInStock(e.target.value)}></Input><br/><br/>
        <label>Description :</label>
        <Input value={description} onchange={e => setDescription(e.target.value)}></Input><br/><br/>
        <label>Sizes :</label>
        <label className='ml-5'>S</label><input value="Small" onChange={() => setSselected("Small")} type="checkbox" className='ml-5'></input>
        <label className='ml-5'>M</label><input value="Medium" onChange={() => setMselected("Medium")} type="checkbox" className='ml-5'></input>
        <label className='ml-5'>L</label><input value="Large" onChange={() => setLselected("Large")} type="checkbox" className='ml-5'></input>
        <label className='ml-5'>XL</label><input value="Xlarge" onChange={() => setXLselected("Xlarge")} type="checkbox" className='ml-5'></input><br/><br/>
        <label>Urls for images:</label>
        <Input onchange={() =>  setUrl1(Url1.images[0])}></Input><br/><br/>
        <Input onchange={() =>  setUrl2(Url2.images[1])}></Input><br/><br/>
        <Input onchange={() =>  setUrl3(Url3.images[2])}></Input><br/>
        <button className='product_add_btn' type='submit'>Submit</button>
        </form>
        </div>
      </Container>
    </div>
  )
}

export default AddProduct