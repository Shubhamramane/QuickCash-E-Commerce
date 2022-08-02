import React,{useRef,useEffect, useState} from 'react'
import { Helmet } from 'react-helmet';
import {Container} from '@chakra-ui/react'
import HashLoader from "react-spinners/HashLoader";
import { FaArrowRight } from 'react-icons/fa';
import './Productdetails.css'
import { Checkbox,FormControl,Select,FormLabel,Textarea,Button,Box,Input } from '@chakra-ui/react'
import RangeSlide from './RangeSlider';
import Horizontal from '../../Range/Range'
import Footer from '../../Footer/Footer';

const Productdetails = ({model , setModel , refrence , setRefrence, brand, setBrand, year,
    setYear, size, setSize , accessories, setAccessories, description, setDescription, uploadbill, range, setRange,
    setUploadbill, uploadimage, setUploadimage,check,setCheck,value}) => {


// const handlecheckbox = e =>{
//     const{value, checked} = e.target;
//     const{checkbox} = accessories;
//     // setAccessories(e.target.value)
//     console.log({value})

//     if(checked){
//         setAccessories({
//             checkbox:[...checkbox,value],
//             // response:[...checkbox,value]
//         })
//     }
// }

// const [userInfo, setuserInfo] = useState({
//     file:[],
// })

// const UploadImage = e =>{
//     setUploadimage({
//         ...userInfo,
//         file:e.target.files[0],
//      })
// }

const UploadBill = e =>{
    setUploadbill(e.target.files[0])
}

const UploadImage = e =>{
    setUploadimage(e.target.files[0])
}


// const nones1 = () =>{
//     if(document.getElementById("brand").value.length == 0){
//         document.getElementById("none1").style.display = "block";
//     }
//     else if(document.getElementById("brand").value.length == 1){
//         document.getElementById("none1").style.display = "none";
//     }
// }
// const nones2 = () =>{
//     if(document.getElementById("model").value.length == 0){
//         document.getElementById("none2").style.display = "block";
//     }
//     else if(document.getElementById("model").value.length == 1){
//         document.getElementById("none2").style.display = "none";
//     }
// }
// const nones3 = () =>{
//     if(document.getElementById("number").value.length == 0){
//         document.getElementById("none3").style.display = "block";
//     }
//     else if(document.getElementById("number").value.length == 1){
//         document.getElementById("none3").style.display = "none";
//     }
// }
// const nones4 = () =>{
//     if(document.getElementById("year").value.length == 0){
//         document.getElementById("none4").style.display = "block";
//     }
//     else if(document.getElementById("year").value.length == 1){
//         document.getElementById("none4").style.display = "none";
//     }
// }
// const nones5 = () =>{
//     if(document.getElementById("size").value.length == 0){
//         document.getElementById("none5").style.display = "block";
//     }
//     else if(document.getElementById("size").value.length == 1){
//         document.getElementById("none5").style.display = "none";
//     }
// }
// const nones6 = () =>{
//     document.getElementById("none6").style.display = "none"
// }
// const nones7 = () =>{
//     if(document.getElementById("description").value.length == 0){
//         document.getElementById("none7").style.display = "block";
//     }
//     else if(document.getElementById("description").value.length == 1){
//         document.getElementById("none7").style.display = "none";
//     }
// }
// const nones8 = () =>{
//     if(document.getElementById("myFile").value.length == 1){
//         document.getElementById("none8").style.display = "block";
//     }
//     // else if(document.getElementById("myFile").value.length == 1){
//     //     document.getElementById("none8").style.display = "none";
//     //     alert("em")
//     // }
// }
// const nones9 = () =>{
//     document.getElementById("none9").style.display = "none";
// }

    return (   
        <>
        <Helmet>
            <title>Productdetails</title>
        </Helmet>

        <div className='productdetails'>
        <FormControl autoComplete='on'>
        <Container maxW='container.lg'>
            <Box  className='product-box'> 
               <Box w='100%' className='product-box'>

                    <Box mt={2}>
                    <FormLabel value={brand}  htmlFor='brand'><h4>Brand</h4></FormLabel>
                    </Box>
                    <Box>
                    <Select value={brand}  id='brand' style={{paddingRight:"30px"}} placeholder='Select Brand' 
                    onChange={e => setBrand(e.target.value)} name="brand"
                    >
                        <option value="Titan Watch">Titan Watch</option>
                        <option value="Fastrack Watch">Fastrack Watch</option>
                        <option value="Diesel Watch">Diesel Watch</option>
                        <option value="Fastrack Watch">Fastrack Watch</option>
                        <option value="Amazfit Watch">Amazfit Watch</option>
                        <option value="BOAT Watch">BOAT Watch</option>
                        <option value="Noise Watch">Noise Watch</option>
                        <option value="Tommy Watch">Tommy Watch</option>
                        <option value="Elliza Donatein Bags">Elliza Donatein Bags</option>
                        <option value="Allen Solly Bags">Allen Solly Bags</option>
                        {/* <option value="11">Lino Perros Bags</option>
                        <option value="12">Ceriz Bags</option>
                        <option value="13">Lavie Bags</option> */}
                        {/* <option>Guess Bags</option>
                        <option>Sumsang Electronic</option>
                        <option>Iphone Electronic</option>
                        <option>Nokia Electronic</option>
                        <option>Vivo Electronic</option>
                        <option>Oppo Electronic</option>
                        <option>One Plus Electronic</option>
                        <option>Digital Camera Electronic</option>
                        <option>Digital Video Camera</option> */}
                    </Select>
                   
                    </Box>                   
               </Box>
               

               <Box w='100%' className='product-box'>
    
                    <Box mt={2}>
                    <FormLabel value={model} htmlFor='model'><h4>Model</h4></FormLabel>
                    </Box>
                    <Box>
                    <Select  id='model' style={{paddingRight:"100px"}} placeholder='Select model'
                    value={model} onChange={e => setModel(e.target.value)} name='model'
                    >
                        <option>1</option>
                        <option>2</option>
                    </Select>
                    
                    </Box>               
     
               </Box>

               <Box w='100%' className='product-box'>
                    <Box>
                    <FormLabel value={refrence} style={{width:"88px"}} className="ref-nos"><h4>Reference Model no</h4></FormLabel>
                    </Box>
                    <Box>
                    <Input  id="number" type="number" placeholder='Enter Reference Model No.' className='ref-no'
                    value={refrence} onChange={e => setRefrence(e.target.value)}
                     />
                    
                    </Box> 
               </Box>
            </Box>
        </Container>

        <Container maxW='container.lg'>

        <Box className='display-flexx'>
            <Box w='100%' display='flex'>
                <Box mt={2}>
                <FormLabel value={year} htmlFor='year'><h4>Select Year</h4></FormLabel>
                </Box>
                <Box>
                <Select value={year}  id='year' placeholder='Select year' style={{paddingRight:"100px"}}
                 onChange={e => setYear(e.target.value)}
                 >
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                </Select>
 
                </Box>
            </Box>
            <Box w='100%' display='flex'>
                <Box mt={2}>
                <FormLabel value={size}><h4>Size</h4></FormLabel>
                </Box>
                <Box>
                <Input  id="size"  type="text" placeholder='Enter Size'
                value={size} onChange={e => setSize(e.target.value)}
                />
               
                </Box>  
            </Box>
            <Box w='100%' display='flex'>
                <Box mt={2}>
                </Box>
                <Box>              
                </Box>  
            </Box>

        </Box>
        </Container>

        <Container maxW='container.lg' mt="10">
            <Box className='range'>
            <h4 className='select-days'>Select No. of Days</h4>
            
            <Horizontal  range={range} setRange={setRange}  />
            </Box>
           
        </Container>
        {/* <RangeSlide/> */}
        <Container maxW='container.lg'>
            <Box w='100%' display='flex'>
                <Box w='100%' display='flex'>
                    <Box>
                    <FormLabel><h4>Accessories</h4></FormLabel>
                    </Box>
                    <Box style={{marginLeft:"10px"}}>
                    <Checkbox  className='boxx' value={accessories} onChange={() => setAccessories("Box")} type="checkbox" 
                    >Box</Checkbox><br/>
                    <Checkbox  className='bills'  value={accessories} onChange={() => setAccessories("Bill")} type="checkbox" 
                    >Bill</Checkbox><br/>
                    <Checkbox  className='warrenty'  value={accessories} onChange={() => setAccessories("Paper")} type="checkbox" 
                    >Paper/Warrenty Card</Checkbox>
                    </Box>    
                </Box>
                <Box w='100%' display='flex' className='description'>
                    <Box>
                    <FormLabel value={description}><h4>Add Description</h4></FormLabel>
                    </Box>
                    <Box>
                    <Textarea value={description}  id='description' className='textareas' placeholder='Add Description' onChange={e => setDescription(e.target.value)}
                   />
                   
                    </Box>
                </Box>
              
            </Box>
        </Container>

        <Container maxW='container.lg'>
            <Box w='100%' display='flex'>
                <Box w='100%' display='flex'>
                    <Box mt={3}>
                    <FormLabel><h4>Upload Bills</h4></FormLabel>
                    </Box>
                    <Box className='file-upload'>
                    <input type="file" id="myFile" name="photo" onChange={UploadBill}
                    />
                   
                    </Box>

                    <Box mt={3} ms={8}>
                    <FormLabel><h4>Upload Images</h4></FormLabel>
                    </Box>
                    <Box className='file-upload'>
                    <input type="file" id="myFile" name="photo1" onChange={UploadImage}/>                 
       
                    </Box>                   
                </Box>
            </Box>
        </Container>

        <Container maxW='container.lg' mt={8}>
            <Checkbox required onChange={e => setCheck(e.target.value)} checked={value} value={check} className='checkboxx'><h5 style={{fontSize:"16px" }}>CLICK HERE TO AGREE TO OUR <span style={{color:"blue" ,fontWeight:"bold"}}>PRIVACY POLICY, TERMS & CONDITIONS</span> AND RECEIVE OUR NOTIFICATIONS</h5></Checkbox>
        </Container>
        {/* style={{visibility:"hidden"}} */}
        </FormControl>
        </div>
        </>
    
    )
}

export default Productdetails;
