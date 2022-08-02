import React from 'react'
import ProductsC from '../components/ProductsC';
import  "./Shop.css";
import { Helmet } from 'react-helmet';
import Footer from './Footer/Footer';
import Nav from '../components/Nav'

const Shop = () => {
    return (
        <>
        <div className = 'shoppage'>
            <Helmet>
                <title>Marketplace</title>
            </Helmet>
            {/* <Nav/> */}
            <ProductsC />
            <Footer/>
        </div>
        </>
    )
}

export default Shop
