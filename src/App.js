import Nav from './components/Nav'
import Home from './pages/Home'
import Productdetails from './pages/SellNow/Productdetails/Productdetails'
import Shop from './pages/Shop'
import PersonalDetails from './pages/SellNow/Personaldetail/PersonalDetails'
import Productpage from './pages/Product/Productpage'
import Cartpage from './pages/Cart/Cartpage'
import Footer from './pages/Footer/Footer'
import LoginScreen from './pages/Login/LoginScreen'
import React, {useState,useEffect} from 'react'
import {BrowserRouter as Router , Switch ,Route } from 'react-router-dom'
import { ChakraProvider } from "@chakra-ui/react"
import ScrollIntoView from "./components/Scrollintoview";
import FadeLoader from "react-spinners/FadeLoader";
import RegisterScreen from './components/RegisterScreen'
import ProfileScreen from './components/ProfileScreen'
import Checkout from "./pages/checkout/Checkout";
import Placeorder from './pages/placeorder/Placeorder'
import Order from './pages/Order/Order'
import Users from './pages/Userslist/Users'
import NotFoundPage from './components/Notfoundpage'
import Edituser from './pages/Useredit/Edituser'
import Products from './pages/products/products'
import Editproduct from './pages/Editproduct/Editproduct'
import Orders from './pages/Orders/Orders';
import Form from "./pages/SellNow/Form"
import Steper from './pages/SellNow/Steper';
import Newstepper from './components/SellNow/Stepper';
import Loader from './Loader';
import Range from './pages/Range/Range';
import RangeSlider from './pages/SellNow/Productdetails/RangeSlider'
import Maintenance from './components/Maintenance';
import LandingPage1 from './components/LandingPage1'
import LandingPage2 from './components/LandingPage2'
import Forgot from './pages/Forgot/Forgot'
import ResetPassword from './pages/ResetPassword.js/ResetPassword'
import Emailer from './Form'
import Validform from './pages/SellNow/validform'
import Show from './show'
import Edit from './pages/EditProducts/Edit'
import UserEdit from './pages/EditUsers/User'
import EditForm from './pages/EditForm/EditForm'
import AddProduct from './pages/AddProduct/AddProduct'

 const App = () => { 
  const  [loading,setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout( ()=> {
      setLoading(false)
    },3000)

  }, [])

  return (
    <div className = 'main'>
<ChakraProvider>
       <Router>
         <ScrollIntoView>
         {loading ?   
            <div className='loading'>
                 <FadeLoader color={"#1F34E9"}  loading={loading} size={40} className="loader"/>
                 {/* <Loader/> */}
            </div>
          :
         <>
            <Nav/>
            <Switch>
            <Route path="/" exact component={Home}/>  
            <Route path="/home" exact component={Home}/>  
            {/* <Route path="/" exact component={LandingPage2}/>  */}
            <Route path="/show1" component={Show}/> 
            {/* <Route path="/nav" component={Nav}/>   */}
            <Route path="/emailer" component={Emailer}/>  
            <Route path="/valid" component={Validform}/> 
            {/* <Route path="/landingpage" exact component={LandingPage1}/>  */}
           
            <Route path="/maintenance" component={Maintenance}/>
            <Route path="/range" component={RangeSlider}/>
            <Route path="/loader" component={Loader}/>
            <Route path='/range' component={Range}/>
            <Route path="/newstepper" component={Newstepper}/>
            <Route path="/productdetails" exact component={Productdetails}/>               
            <Route path="/shop" component={Shop}/>
            <Route path="/personaldetails" component={PersonalDetails}/>
            <Route path="/sellnow" component={Steper}/>
            <Route path="/product/:id" component={Productpage}/>
            <Route path="/cart/:id?" component={Cartpage}/>
            <Route path="/login" component={LoginScreen}/>
            <Route path="/register" component={RegisterScreen}/>
            <Route path="/forgot" component={Forgot}/>
            <Route path="/reset" component={ResetPassword}/>
            <Route path="/profile" component={ProfileScreen}/>
            <Route path="/shipping" component={Checkout}/>
            <Route path="/placeorder" component={Placeorder}/>
            <Route path="/order/:id" component={Order}/>
            <Route path="/admin/userlist" component={Users}/>
            <Route path="/admin/productlist" component={Products}/>
            <Route path="/admin/orderlist" component={Orders}/>
            <Route path="/search/:keyword" component={Shop}/>
            <Route path="/form" component={Form} />
            <Route path="/admin/user/:id/edit" component={Edituser}/>
            <Route path="/admin/product/:id/edit" component={Editproduct}/>
            <Route path="/admin/addproduct" component={AddProduct}/>
            <Route path="/admin/:id/editproduct" component={Edit}/>
            <Route path="/edituser" component={UserEdit}/>
            <Route path="/editform" component={EditForm}/>

            {/* <Route path="/personal" exact component={Personal}/> */}
            <Route component={NotFoundPage} />
            </Switch>
            {/* <Footer/> */}
          </>
         }
        </ScrollIntoView>
      </Router>
   </ChakraProvider>
    </div>
     
    
  )
}
export default App;
