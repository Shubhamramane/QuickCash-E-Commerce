import React from 'react';
import { Formik } from 'formik';
import { Input,InputGroup, InputLeftElement, Textarea,Button , Box,FormLabel,Select,FormControl,Container } from "@chakra-ui/react"
const Validform = () => {

    const onSubmit = (e) => {
        // preventDefault(false)
    }
    return(
        
            <form onSubmit={onSubmit}>
                <Container maxW='container.lg'>
               name <Input type="text"  required></Input>

                </Container>

                <button type='submit' >
                    send
                </button>
            </form>
         
 
    )};

export default Validform;