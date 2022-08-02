import React,{useState,useEffect} from 'react';
import Nav from '../../components/Nav';
import { Input } from '@chakra-ui/input'
import { Container } from 'react-bootstrap';
import './EditProducts.css';
import { Helmet } from 'react-helmet';
import {useDispatch, useSelector} from 'react-redux'
import { PRODUCT_UPDATE_RESET } from '../../constants/productConstants';
import {listProductDetails,UpdateProduct} from '../../actions/productActions'

const Edit = ({match,history}) => {

  const productId = match.params.id
  const [name,setName] = useState('')
  const [description,setdescription] = useState('')
  const [price,setprice] = useState(0)
  const [countInStock,setcountInStock] = useState(0)
  const [Url1,setUrl1] = useState('')
  const [Url2,setUrl2] = useState('')
  const [Url3,setUrl3] = useState('')

  const [Images,setImages] = useState([])
  const [sizes,setsizes] = useState([])
  const [category,setcategory] = useState([])
  const [Menselected,setMenselected] = useState(false)
  const [Womenselected,setWomenselected] = useState(false)
  const [Bagselected,setBagselected] = useState(false)
  const [Watchesselected,setWatchesselected] = useState(false)
  const [Shoesselected,setShoesselected] = useState(false)
  const [Jacketselected,setJacketselected] = useState(false)

  const [Sselected,setSselected] = useState(false)
  const [Mselected,setMselected] = useState(false)
  const [Lselected,setLselected] = useState(false)
  const [XLselected,setXLselected] = useState(false)

  const [message,setMessage] = useState(null) 

  const dispatch = useDispatch()

  const productDetails = useSelector(state => state.productDetails)
  
    const { loading,error, product } = productDetails

    const productUpdate = useSelector(state => state.productUpdate)
  
    const { loading:lodingUpdate,error:errorUpdate, success:successUpdate } = productUpdate

    useEffect(() => {

      if(successUpdate){
          dispatch({type : PRODUCT_UPDATE_RESET})
          history.push('/admin/productlist')
      }
      else{
          if(!product.name || product._id !== productId){
              dispatch(listProductDetails(productId))
            }else{
              setName(product.name)
              setprice(product.price)
              setdescription(product.description)
              setUrl1(product.images[0])
              setUrl2(product.images[1])
              setUrl3(product.images[2])
              setcategory(product.category)
              setsizes(product.sizes)
              setcountInStock(product.countInStock)
              setBagselected(category.includes("Bag"))
              setJacketselected(category.includes("Jacket"))
              setShoesselected(category.includes("Shoes"))
              setMenselected(category.includes("Men"))
              setWomenselected(category.includes("Women"))
              setWatchesselected(category.includes("Watches"))
              setSselected(sizes.includes('S'))
              setLselected(sizes.includes('L'))
              setMselected(sizes.includes('M'))
              setXLselected(sizes.includes('XL'))

            }
      }

    
     
      return () => {
      }
  }, [dispatch,productId,history,product,category,successUpdate])

  const submitHandler = (e) => {
    Images.push(Url1)
    Images.push(Url2)
    Images.push(Url3)


    e.preventDefault()
    dispatch(UpdateProduct({
        _id: productId,
        name,
        price,
        Images,
        category,
        sizes,
        countInStock,
        description

    }))
    
}
const checkboxhandler = (D) =>{
    let index = sizes.indexOf(D)
    if(index> -1){ 
        sizes.splice(index,1)
        console.log(sizes)
    }
    else{
        sizes.push(D)
        console.log(sizes)



    }
}

const checkboxhandlercg = (D) =>{
    
        let index = category.indexOf(D)
    if(index> -1){ 
        category.splice(index,1)

    }
    else{
        category.push(D)


    }
}

  return (
    <div>
      <Helmet>
        <title>Edit Product</title>
      </Helmet>
      <Nav/>
      <Container>
      <div className='editproduct'>
        <h1 className='product_h1'>Edit Product </h1>
        {/* <hr/> */}
        <form onSubmit={submitHandler}>
        <label>Name :</label>
        <Input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}></Input><br/>
        <label>Price :</label>
        <Input type="text" value={price} placeholder="Enter price" onChange={(e) => setprice(e.target.value)}></Input><br/>
        <label>countInStock :</label>
        <Input type="text" value={countInStock} placeholder="Enter price" onChange={(e) => setcountInStock(e.target.value)} ></Input><br/>
        <label>Description :</label>
        <Input value={description}  placeholder="Enter price" onChange={(e) => setdescription(e.target.value)}></Input><br/><br/>
        <label>Sizes :</label>
        <label className='ml-5'>S</label><input  type="checkbox" className='ml-5' onChange = {() =>{checkboxhandler('S') ; setSselected(!Sselected)}} isChecked = {Sselected}></input>
        <label className='ml-5'>M</label><input  type="checkbox" className='ml-5' onChange = {() =>{checkboxhandler('M') ; setMselected(!Mselected)}} isChecked = {Mselected}></input>
        <label className='ml-5'>L</label><input  type="checkbox" className='ml-5' onChange = {() =>{checkboxhandler('L') ; setLselected(!Lselected)}} isChecked = {Lselected}></input>
        <label className='ml-5'>XL</label><input  type="checkbox" className='ml-5' onChange = {() =>{checkboxhandler('XL') ; setXLselected(!XLselected)}} isChecked = {XLselected}></input><br/><br/>
        <label>Urls for images:</label>
        <Input  value={Url1} onChange = {(e)=>{setUrl1(e.target.value)}}></Input><br/><br/>
        <Input  value={Url2} onChange = {(e)=>{setUrl2(e.target.value)}}></Input><br/><br/>
        <Input  value={Url3} onChange = {(e)=>{setUrl3(e.target.value)}}></Input>
        <button className='product_edit_btn' type='submit'>Submit</button>
        </form>
      </div>
      </Container>
    </div>
  )
}

export default Edit