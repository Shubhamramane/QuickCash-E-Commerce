import React, { useState } from 'react'
import './Landing.css';
import { ImArrowRight2 } from 'react-icons/im';
import Sell from '../Image/Sell.svg';
import Watch from '../Image/Watch.svg';
import Laptop from '../Image/Laptop.svg';
import Bag from '../Image/Bag.svg';
import NFT from '../Image/nft.svg';
import Check from '../Image/Check.svg';
import Circle from '../Image/Circle.svg';
import { Container } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import Envelop from '../Image/Envelop.svg'
import ImageSlider from './Carousel'
import { SlideData } from "./SliderData";
import Enquire from '../Image/Image.svg';
import Assess from '../Image/Image11.svg';
import Collect from '../Image/image22.svg';
import Group from '../Image/Group.svg';
import { BsPlusLg } from 'react-icons/bs';
import WhatsApp from "../Image/WhatsApp.png";

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import Sliders from './Sliders';

const LandPage = () => {

  const [shows, setShows] = useState(true);

  return (
    <div>
      <Box className='background_img'>
      <h1 className='how-it-work'>How it works</h1>
        <Container maxW='container.xl'>
         <Box className='img-how-it-works'>
          <Box className='work-conent'  width={["100%","50%"]}>           
            <Box display="flex" >
              <Box ms={6}>
              <img src={Enquire} style={{height:"130px", width:"100%"}}></img>
              </Box>           
              <Box mt={7} ms={7} width={["100%"]}>
                <h1 className='mt-3 work-h1' >Enquire</h1>
                <p className='ms-5'>Provide details of your asset</p>
              </Box>
            </Box>
            
            <Box display="flex">
              <Box ms={5}>
              <img src={Assess} style={{height:"130px",width:"100%"}}></img>
              </Box>
              <Box mt={7} ms={8}>
                <h1 className='mt-3 work-h1' >Assess</h1>
                <p className=' '>Your device will be assessed for condition</p>
              </Box>
            </Box>

            <Box display="flex">
            <Box ms={5}>
              <img src={Collect} style={{height:"130px",width:"100%"}}></img>
            </Box>
            <Box mt={7} ms={7}>
              <h1 className='mt-3 ms-4 work-h1' >Collect your cash</h1>
              <p className=' ms-4'>Visit the nearest store or use our home </p>
            </Box>
            </Box>
          </Box>
          <Box className='group'>
            <img src={Group} style={{height:"250px"}}></img>
          </Box>
          <Box className='video'>
            <iframe className='you-tude' width="530" height="280" src="https://www.youtube.com/embed/8exM6VUgZFA" title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture" allowfullscreen></iframe>
          </Box>
        </Box> 
        
        </Container>        
      </Box>
      
      {/* <Sliders/> */}

        <Box w="100%" p={4} color="white">
        <ImageSlider/>
        </Box>

        <Container maxW='container.xl' style={{marginBottom:"40px" , marginTop:"50px"}}>
        <Box className='subscribe_img' display="flex">
          
            <Box className='envelop_box'>
            <Image src={Envelop} className="envelop_img"/>
            </Box>

            <Box>
            <h1 className='subscribe_h1'>Subscribe to Newsletter and Our Offers</h1>
            <div className='email_field d-flex'>
                <input placeholder='Your work email address' className='email_input'/>
                <button className='send_btn'>Send</button>
            </div>
            </Box>
        </Box>
        </Container>

        <a
        className="webwhat"
        href="https://api.whatsapp.com/send?phone=+971563641641"
      >
        <img
          title="Whatsapp for Startups"
          src={WhatsApp}
          alt="Whats app"
          style={{
            height: "7%",
            position: "fixed",
            bottom: "15px",
            left: "10px",
            zIndex: 9999999,
            width: "auto",
          }}
        />{" "}
      </a>
    </div>
  )
}

export default LandPage;