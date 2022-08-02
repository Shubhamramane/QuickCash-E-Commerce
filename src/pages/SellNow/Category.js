import React from 'react'
import Cardscg from '../../components/Cardscg';
import { Step, Steps, useSteps } from "chakra-ui-steps"
import { Box  } from "@chakra-ui/react"
import './Category.css';
import Footer from '../Footer/Footer';
// import { useHistory } from "react-router-dom";

const Category = ({nextStep,setCategory}) => {

  // const history = useHistory();
  // const routeChange = () =>{ 
  //   let path = `newPath`; 
  //   history.push("/productdetails");
  // }
  return (
    <div>
        <Box  w='100%' display="flex">                    
            <Box w='100%' className='cards1234' height={{
              base: '100%', // 0-48em
              md: '50%', // 48em-80em,
              xl: '25%', // 80em+
            }}onClick={ () => { 
             nextStep() ;
             setCategory("Luxury Watch")}} value="Luxury Watch">
            <h1>Luxury Watch</h1>
            </Box>
            <Box  w='100%' className='cards1234' height={{
              base: '100%', // 0-48em
              md: '50%', // 48em-80em,
              xl: '25%', // 80em+
            }}onClick={() => {nextStep()
             setCategory("Luxury Bag")}} value="Luxury Bag">
            <h1>Luxury Bag</h1>
            </Box>
            <Box  w='100%' className='cards1234' height={{
              base: '100%', // 0-48em
              md: '50%', // 48em-80em,
              xl: '25%', // 80em+
            }} onClick={() => {nextStep()
              setCategory("Electronics")}}>
            <h1>Electronics</h1>
            </Box>
            <Box  w='100%' className='cards1234' height={{
              base: '100%', // 0-48em
              md: '50%', // 48em-80em,
              xl: '25%', // 80em+
            }} onClick={() => {nextStep()
              setCategory("Digital Assets")}}>
              <h1>Digital Assets</h1>
            </Box>
        </Box>

        {/* <Footer/> */}
    </div>
  )
}

export default Category;