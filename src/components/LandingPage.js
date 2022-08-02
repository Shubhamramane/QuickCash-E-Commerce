import React, { useState } from 'react'
import './Landing.css';
import { ImArrowRight2 } from 'react-icons/im';
import Sell from '../Image/Sell.svg';
import Watch from '../Image/Watch.svg';
import Laptop from '../Image/Laptop.svg';
import Bag from '../Image/Bag.svg';
import NFT from '../Image/nft.svg';
// import Check from '../Image/Check.svg';
import Check from '../Image/circle-check.svg';
// import Circle from '../Image/Circle.svg';
import Circle from '../Image/Vector.svg';
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

const LandingPage = () => {

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
      
      <div className='views'>
        <Container maxW='container.xl'>
        <Box className='views_dflex'>
          <Box className="card_left">
            <Box display='flex'>
              <Box className='card1' maxW='sm' borderWidth='2px' height="200px" width="180px" borderRadius='xl' overflow='hidden' backgroundColor="white">
              <h1 className='veiws_color1'>70k+</h1> 
              <p style={{textAlign:"center"}}>We have more than customers</p>        
              </Box>
              <Box className='card2' maxW='sm' borderWidth='2px' height="200px" width="180px" borderRadius='xl' overflow='hidden' backgroundColor="white" >
              <h1 className='veiws_color2'>100+</h1> 
              <p style={{textAlign:"center"}}>Services we have completed</p>  
              </Box>
            </Box>
          
            <Box display='flex' className='card-top'>
              <Box className='card4' maxW='sm' borderWidth='2px' height="200px" width="180px" borderRadius='xl' backgroundColor="white" overflow='hidden'>
              <h1 className='veiws_color2'>100M+</h1> 
              <p style={{textAlign:"center"}}>People who one happy because of our service</p>       
              </Box>
              <Box className='card3' maxW='sm' borderWidth='2px' height="200px" width="180px" borderRadius='xl' overflow='hidden' backgroundColor="white" >
              <h1 className='veiws_color1'>200+</h1> 
              <p style={{textAlign:"center"}}>Support form world-renowned companies</p>       
              </Box>
            </Box>
          </Box>

          <Box>
            <h3 className="Customer_satisfaction">Customer satisfaction is our first priority</h3>
            <p className="Customer_satisfaction_p">We serve many customers, ranging from small businesses, medium entrepreneus to world 
                renowned companies. Their satisfaction is our pleasure. We strive to provide the best 
                service by.
            </p>
            <Box className="check_and_text">
              <Box>
              <img src={Check} className="check_img"></img>
              <img src={Check} className="check_img"></img>
              <img src={Check} className="check_img"></img>
              <img src={Check} className="check_img"></img>
              <img src={Check} className="check_img"></img>
              </Box>

              <Box className='contentss'>
              <small className='contentss'>Provide idea support from our creative team</small><br/><br/>
              <small className='contentss'>Provide attractive and professional design services</small><br/><br/>
              <small className='contentss'>Support for service 24 hours a week</small><br/><br/>
              <small className='contentss'>Helping our customers to grow their business</small><br/><br/>
              <small className='contentss'>Provide support to market products through online marketplace</small>
              </Box>
            </Box>
          
          </Box>
        </Box>
        </Container>
      </div>

      <Sliders/>

        <Box w="100%" p={4} color="white">
        <ImageSlider/>
        </Box>

      <Box style={{marginBottom:"40px"}}>
          <Image src={Circle} className="circle_right"></Image>
          <h4 className='frequently_h4'>Frequently Ask Option</h4>
          <div>
            <div className='frequently_h1'>
            <span>Some of our frequently asked questions</span>
            <span>
            <button className='click_show' onClick={() => setShows((s)=>!s)}><BsPlusLg style={{fontSize:"25px"}}/></button>
            </span>
            </div>
            
          </div>

       <Box style={{display:shows? "none": "block"}}>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  Section 1 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  Section 2 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  Section 2 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  Section 2 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  Section 2 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        </Box>       
      </Box>

        <Container maxW='container.xl' style={{marginBottom:"40px"}}>
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

export default LandingPage;