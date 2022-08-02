// import React,{useEffect, useState} from 'react'
// import { Helmet } from 'react-helmet';
// import {Container} from '@chakra-ui/react'
// import HashLoader from "react-spinners/HashLoader";
// import './PersonalDetails.css'
// import { Checkbox, FormControl,Select,FormLabel,Textarea,Button,Box,Input } from '@chakra-ui/react'

// const Personal = () => {
 
//   const [input, setInput] = useState('')

//   const handleInputChange = (e) => setInput(e.target.value)

//   const isError = input === ''

//     return (
//         <>
//         <Helmet>
//             <title>PersonalDetails</title>
//         </Helmet>

//         <div className='personalDetails'>
//         <Container maxW='container.xl'>
//             <Box display="flex"  w='100%'> 
//                <Box w='100%' display="flex">
//                     <Box>
//                     <FormLabel htmlFor='country'>Brand</FormLabel>
//                     </Box>
//                     <Box>
//                     <Select id='country' placeholder='Select brand'>
//                         <option>United Arab Emirates</option>
//                         <option>Nigeria</option>
//                     </Select>
//                     </Box>
//                </Box>

//                <Box w='100%' display='flex'>
//                 <FormControl isInvalid={isError}>
//                     <Box>
//                     <FormLabel htmlFor='email'>Email</FormLabel>
//                     </Box>
//                     <Box>
//                     <Input
//                         id='email'
//                         type='email'
//                         value={input}
//                         onChange={handleInputChange}
//                     />
//                     {!isError ? (
//                         <FormHelperText>
//                         Enter the email you'd like to receive the newsletter on.
//                         </FormHelperText>
//                     ) : (
//                         <FormErrorMessage>Email is required.</FormErrorMessage>
//                     )}
//                     </Box>
//                     </FormControl>               
//                </Box>

//                <Box w='100%' display='flex'>
//                     <Box>
//                     <FormLabel>Reference Model no</FormLabel>
//                     </Box>
//                     <Box>
//                     <Input type="number" placeholder='Enter Reference Model No.' />
//                     </Box> 
//                </Box>
//             </Box>
//         </Container>

//         <Container maxW='container.md' mt="10">
//         {/* <FormControl> */}
//         {/* <Box> */}
//         <Box display='flex'>
//             <Box w='100%' display='flex'>
//                 <Box>
//                 <FormLabel htmlFor='country'>Select Year</FormLabel>
//                 </Box>
//                 <Box>
//                 <Select id='country' placeholder='Select year'>
//                 <option>United Arab Emirates</option>
//                 <option>Nigeria</option>
//                 </Select>
//                 </Box>
//             </Box>
//             <Box w='100%' display='flex'>
//                 <Box>
//                 <FormLabel>Size</FormLabel>
//                 </Box>
//                 <Box>
//                 <Input type="text" placeholder='Size' />
//                 </Box>  
//             </Box>
//         </Box>
//         {/* </FormControl> */}
//         </Container>

//         <Container maxW='container.md' mt="10">
//             <Box w='100%' display='flex'>
//                 <Box w='100%' display='flex'>
//                     <Box>
//                     <FormLabel>Accessories</FormLabel>
//                     </Box>
//                     <Box>
//                     <Checkbox >Box</Checkbox><br/>
//                     <Checkbox >Bill</Checkbox><br/>
//                     <Checkbox >Paper/Warrenty Card</Checkbox>
//                     </Box>    
//                 </Box>
//                 <Box w='100%' display='flex'>
//                     <Box>
//                     <FormLabel>Add Description</FormLabel>
//                     </Box>
//                     <Box>
//                     <Textarea placeholder='Here is a sample placeholder' />
//                     </Box>
//                 </Box>
//             </Box>
//         </Container>

//         <Container maxW='container.lg' mt="10">
//             <Box w='100%' display='flex'>
//                 <Box w='100%' display='flex'>
//                     <Box>
//                     <FormLabel>Upload Bills</FormLabel>
//                     </Box>
//                     <Box>
//                     <input type="file" id="myFile" name="filename"/>
//                     </Box>

//                     <Box>
//                     <FormLabel>Upload Images</FormLabel>
//                     </Box>
//                     <Box>
//                     <input type="file" id="myFile" name="filename"/>
//                     </Box>                   
//                 </Box>
//             </Box>
//         </Container>
            
//         <Container maxW='container.lg' mt="10">
//             <Checkbox >CLICK HERE TO AGREE TO OUR PRIVACY POLICY, TERMS & CONDITIONS AND RECEIVE OUR NOTIFICATIONS</Checkbox>
//         </Container>
            
//         <Button colorScheme='blue' className='continue-btn'>Continue</Button>   

//         </div>
//         </>
    
//     )
// }

// export default Personal;
