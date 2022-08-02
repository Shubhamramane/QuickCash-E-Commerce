import {React,useEffect,useState}  from 'react'
import {IoIosArrowForward,IoIosArrowBack} from 'react-icons/all'
import { Link } from 'react-router-dom';
import ShopNowBtn from './ShopNowBtn'
import { ImArrowRight2 } from 'react-icons/im';

const ImageSlider = () => {
     const SliderData = [
        {
            title: 'We are serious about providing our best services to all the customers we help, Customers satisfaction is our number one priority.',
            subtitle :'Robert Fox'
        },
        {
            title: 'Find The Best Outfit',
            subtitle :'With 30% Off'
        },
        {
 
            title: 'The Best Shoes',
            subtitle :'Comfort For your long day'
        },
        {
 
            title: 'Next Season Is here',
            subtitle :'Enjoy your summer with us.'
        }
      ];
    const [current, setCurrent] = useState(0);
    const length = SliderData.length;
    const [auto,setauto] = useState(true);
    const intervaltime = 6000;
    let slideinterval;
    const nextslide = () =>{
        clearInterval(slideinterval);
        slideinterval = setInterval(nextslide,intervaltime);
        setTimeout(()=>setCurrent(current === length - 1 ? 0 : current + 1))
 
    }
    const prevslide = () =>{
        clearInterval(slideinterval);
        slideinterval = setInterval(nextslide,intervaltime);
        setTimeout(()=>setCurrent(current === 0 ? length - 1 : current - 1))         
   }
   useEffect(()=>{
     setauto(true)
    if(auto){
      slideinterval = setInterval(nextslide,intervaltime);
      }
    return ()=>{ 
      setauto(false);
      clearInterval(slideinterval);
    }
   })
 
    return (
        <>
        {/* <h1>fdghrfj</h1> */}
        </>
    )
}
 
export default ImageSlider;