import React, { useState } from 'react'
import { Image } from "@chakra-ui/react"
import { Helmet } from 'react-helmet';
import { Checkbox, FormControl, Select, FormLabel, Box, Container, FormHelperText, FormErrorMessage } from '@chakra-ui/react'
import cover from './cover.jpg'
import { Input, InputGroup, InputLeftElement, Textarea, Button } from "@chakra-ui/react"
import { BsEnvelope, GiPositionMarker, HiOutlinePhone } from 'react-icons/all'
import { FaArrowRight } from 'react-icons/fa';
import './personaldetails.css';
import { Form } from 'react-final-form'
import PhoneInput from 'react-phone-number-input'

const PersonalDetails = ({ name, setName, email, setEmail, contactNo, setContact,
    message, setMessage, prefferedContactTime, setTime, values, setValues }) => {


    const [input, setInput] = useState('')

    // const handleInputChange = (e) => setInput(e.target.value)

    const onSubmit = async values => {
        // await sleep(300);
        // window.alert(JSON.stringify(values, 0, 2));
    };

    // const isError = input === name

    // const nones10 = () =>{
    //     if(document.getElementById("name").value.length == 0){
    //         document.getElementById("none10").style.display = "block";
    //     }
    //     else if(document.getElementById("name").value.length == 1){
    //         document.getElementById("none10").style.display = "none";
    //     }
    // }

    // const nones11 = () =>{
    //     if(document.getElementById("email").value.length == 0){
    //         document.getElementById("none11").style.display = "block";
    //     }
    //     else if(document.getElementById("email").value.length == 1){
    //         document.getElementById("none11").style.display = "none";
    //     }
    // }

    // const nones12 = () =>{
    //     if(document.getElementById("contact").value.length == 0){
    //         document.getElementById("none12").style.display = "block";
    //     }
    //     else if(document.getElementById("contact").value.length == 1){
    //         document.getElementById("none12").style.display = "none";
    //     }
    // }

    // const nones13 = () =>{
    //     if(document.getElementById("time").value.length == 0){
    //         document.getElementById("none13").style.display = "block";
    //     }
    //     else if(document.getElementById("time").value.length == 1){
    //         document.getElementById("none13").style.display = "none";
    //     }
    // }

    // const nones14 = () =>{
    //     if(document.getElementById("message").value.length == 0){
    //         document.getElementById("none14").style.display = "block";
    //     }
    //     else if(document.getElementById("message").value.length == 1){
    //         document.getElementById("none14").style.display = "none";
    //     }
    // }

    // const [value , setValue] = useState()

    return (

        <div className="personaldetails">
            <Helmet>
                <title>PersonalDetails</title>
            </Helmet>

            <div className='personalDetails'>
            <form>
                <Container maxW='container.lg'>
                    <FormControl>
                        <Box display="flex" w='100%'>
                            <Box w='100%' display="flex">

                                <Box mt={2}>
                                    <FormLabel htmlFor='Name' value={name}><h4>Name</h4></FormLabel>
                                </Box>
                                <Box>
                                    <Input id='name' value={name} onChange={e => setName(e.target.value)} required type="text" placeholder='Enter Your Full Name' />
                                    {/* <p id='none10' style={{color:"red",marginLeft:"10px"}}>Name is Required</p> */}
                                </Box>

                            </Box>

                            <Box w='100%' display='flex'>
                                <Box mt={2}>
                                    <FormLabel htmlFor='Email' value={email}><h4>Email ID</h4></FormLabel>
                                </Box>
                                <Box>
                                    <Input id='email' value={email} required onChange={e => setEmail(e.target.value)} type="email" placeholder='Enter Your Email ID' />
                                    {/* <p id='none11' style={{color:"red",marginLeft:"10px"}}>Email is Required</p> */}
                                </Box>
                            </Box>

                            <Box w='100%' display='flex'>
                                <Box mt={2}>
                                    <FormLabel value={contactNo}><h4>Contact No</h4></FormLabel>
                                </Box>
                                <Box>
                                    {/* <Input id='contact' value={contactNo} required onChange={e => {setContact(e.target.value);nones12()}} type="number" placeholder='Enter Your Contact No' /> */}
                                    <PhoneInput
                                        international
                                        defaultCountry="AE"
                                        value={contactNo}
                                        required
                                        onChange={setContact}/>

                                    {/* <p id='none12' style={{color:"red",marginLeft:"10px"}}>Number is Required</p> */}
                                </Box>
                            </Box>
                        </Box>
                    </FormControl>
                </Container>

                <Container maxW='container.lg' mt="3">

                    <Box display='flex'>
                        <Box w='100%' display='flex'>
                            <Box mt={2}>
                                <FormLabel htmlFor='time' value={prefferedContactTime}><h4>Preferred Contact Time</h4></FormLabel>
                            </Box>
                            <Box>
                                <Select value={prefferedContactTime} required onChange={e => setTime(e.target.value)} id='time' placeholder='Select Time' style={{ paddingRight: "90px" }}>
                                    <option value="10-11 AM">10-11 AM</option>
                                    <option value="12-01 PM">12-01 PM</option>
                                </Select>
                                {/* <p id='none13' style={{color:"red",marginLeft:"10px"}}>Time is Required</p> */}
                            </Box>
                            <Box ms={7} mt={2}>
                                <FormLabel value={message}><h4>Message</h4></FormLabel>
                            </Box>
                            <Box>
                                <Textarea id='message' value={message} required className='textareas' onChange={e => setMessage(e.target.value)} placeholder='Type Your Message' />
                                {/* <p id='none14' style={{color:"red",marginLeft:"10px"}}>Message is Required</p> */}
                            </Box>
                        </Box>

                    </Box>
                
                </Container>
              
            </form>
            </div>
            {/* <Footer/> */}
        </div>
    )
}

export default PersonalDetails;
