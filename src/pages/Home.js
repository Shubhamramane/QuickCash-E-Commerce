import React,{useState,useEffect} from 'react'
import Slider from '../components/Slider'
import Cardscg from '../components/Cardscg'
import CgDiv from '../components/CgDiv'
import ProductsC from '../components/ProductsC'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'
import LandingPage from '../components/LandingPage'
import Footer from '../pages/Footer/Footer';
import MarketPlace from '../components/MarketPlace'
import Nav from '../components/Nav'

const Home = () => {
 
    return (
        <>
        <Helmet>
            <title>Quick Cash</title>
        </Helmet>
             <div>
                 {/* <Nav/> */}
                <Slider/>
                 <div className="cards">                    
                        <Cardscg title='Luxury Watch'/>
                        <Cardscg title='Luxury Bag'/>
                        <Cardscg title='Electronics'/> 
                        <Cardscg title='Digital Assets'/>                                      
                 </div>
                
                {/* <ProductsC/> */}
                {/* <MarketPlace/> */}
                <LandingPage/>
                <Footer/>
        </div>
        </>
    )
}

export default Home;
