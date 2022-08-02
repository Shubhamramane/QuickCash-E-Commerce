import React from 'react'
import { Link } from 'react-router-dom'
import{Card,Button} from 'react-bootstrap';


const Cardscg = ({title}) => {
    return (

        <div className="cardscg">
            <h1>{title}</h1>
            <Link to ='/sellnow' className="ShopNowcg">Sell Now</Link>
        </div>


    )
}

export default Cardscg;
