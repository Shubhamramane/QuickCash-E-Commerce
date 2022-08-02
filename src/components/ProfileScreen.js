import React, {useState, useEffect,useRef} from 'react'
import {Link} from 'react-router-dom'
import {Form, Image} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import avatarRegister from '../Image/avatarRegister.svg'
import addUs from '../Image/registrationpage.svg'
import wave from '../Image/Greenwave.svg'
import { Helmet } from 'react-helmet';
import {getUserDetails, updateUserProfile} from '../actions/userActions'
import {listMyOrders } from '../actions/orderActions'
import { IoIosArrowDown } from 'react-icons/all';
import FadeLoader from "react-spinners/FadeLoader";
import { FaUserAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import Nav from '../components/Nav';

import {
  Button, Input, Table,  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react"
import { AiOutlineEdit } from 'react-icons/ai'
import Footer from '../pages/Footer/Footer'

const ProfileScreen = ({location, history}) => {
  const [name,setName] = useState('')
  const [ShowOrders,setShowOrders] = useState(false)

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const [message,setMessage] = useState(null) 
  const [isEditablename,setisEditablename] = useState(false) 
  const [isEditableemail,setisEditableemail] = useState(false) 

  const nameinput = useRef(null)
  const emailinput = useRef(null)

  const dispatch = useDispatch()

  const userDetails = useSelector(state => state.userDetails)

  const { error, user } = userDetails


  const userLogin = useSelector(state => state.userLogin)

  const {userInfo } = userLogin



  const userUpdateProfile = useSelector(state => state.userUpdateProfile)

  const {success } = userUpdateProfile

  const orderMylist = useSelector(state => state.orderMylist)

  const { loading:loadingOrders,error:errorOrders,orders } = orderMylist

  useEffect(() => {
    if(!userInfo) {
      history.push('/login')
    }else{
        if(!user.name)
        {
            dispatch(getUserDetails('profile'))
            dispatch(listMyOrders())
            
        }else{
            setName(user.name)
            setEmail(user.email)
            
        }
    }
  }, [dispatch, history, userInfo, user])

  const submitHandler = (e) => {
    e.preventDefault()
    if(password == confirmPassword){
      setMessage('Password match')
    }
    if(password !== confirmPassword){
        setMessage('Password does not match')
    }
   
    else{
        dispatch(updateUserProfile({ id:user._id, name, email, password }))
        console.log("its working")
    }   
  }
  const inputs = document.querySelectorAll(".inputa");


  function addcl(){
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
  }
  
  function remcl(){
    let parent = this.parentNode.parentNode;
    if(this.value == ""){
      parent.classList.remove("focus");
    }
  }
  
  const nameinputfocus = () =>{
    setisEditablename(!isEditablename)
    if(isEditablename){
      nameinput.current.focus()        
    }else{

    }
  }
  
  inputs.forEach(inputa => {
    inputa.addEventListener("focus", addcl);
    inputa.addEventListener("blur", remcl);
  });
  const handelshow = ()=>{

  }



    return (
    <>
    <div className="registerSc">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      {/* <Nav/> */}
      <Image className="wave" />
      <div className="containera">
              
		<div className="imga">
			<Image src={addUs} />
		</div>
    <div className = 'rightinfos'>
    <div className = 'showbtn' onClick = {()=>setShowOrders(!ShowOrders)}>{ShowOrders ? 'Show my infos' :'Show my orders'} <IoIosArrowDown /></div>
    <>
    {!ShowOrders ? 
		<div className= 'login-content'>
			<form onSubmit={submitHandler} id="landing_form">
				<Image src={avatarRegister} />
				{error && <h4>Profile not Updated</h4>}
                {success && <h4>Profile Updated</h4>}
                
                <div className="input-div">
                       <div className="i">
           		   		<FaUserAlt/>
           		   </div>
                   <div className="div">
           		   		
           		   		<input type="text" value={name} readOnly = {isEditablename} ref = {nameinput} className="inputa" placeholder="Enter name"  onChange={(e) => setName(e.target.value)}/>
           		   </div>

           		   
           		</div>
               <AiOutlineEdit size ='26' className = 'edit' onClick = {nameinputfocus}/>



           		<div className="input-div">
                       

           		   <div className="i">
           		   		<FaEnvelope/>
           		   </div>
           		   <div className="div">
           		   		
           		   		<input type="text" value={email} readOnly = {isEditableemail} ref = {emailinput} className="inputa" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
           		   </div>
                  
           		</div>
               <AiOutlineEdit size ='26' className = 'edit' onClick = {()=>{setisEditableemail(!isEditableemail)
              emailinput.current.focus()
              }}/>
           		<div className="input-div">
           		   <div className="i"> 
           		    	<FaLock/>
           		   </div>
           		   <div className="div">
           		    	
           		    	<input type="password" value={password} required className="inputa" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/>
            	   </div>
            	</div>


                <div className="input-div">
           		   <div className="i"> 
           		    	<FaLock/>
           		   </div>
           		   <div className="div">
           		    	
           		    	<input type="password" value={confirmPassword} className="inputa" placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)}/>
            	   </div>
            	</div>
                {message && <h4 style={{color:"red",fontWeight:"bold",paddingTop:"5px"}} className = 'Message'>{message}</h4>}
                <input type="submit" className="btna2" value="Update"/>
            </form>
        </div>
         :
         <div className = 'tableorder'>
           {loadingOrders ? <div className='loading'>
                          <FadeLoader   color={"#1F34E9"}  loading={loadingOrders} size={40} />
                     </div>  : errorOrders ? <h1>{errorOrders}</h1>
                     :
                     <Table size="sm">
                       <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>DATE</Th>
                            <Th>TOTAL</Th>
                            <Th>PAID</Th>
                            <Th>DELIVERED</Th>
                            <Th></Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {orders.map(order=>(    
                        <Tr key = {order._id}>
                          <Td>{order._id}</Td>
                          <Td>{order.createdAt.substring(0,10)}</Td>
                          <Td>{order.totalPrice}</Td>
                          <Td>{order.isPaid ? order.paidAt.substring(0,10) : 'Not Paid Yet'}</Td>
                          <Td>{order.isDelivered ? order.deliveredAt.substring(0,10) : 'Not Yet'}</Td>
                          <Td>
                            <Link to ={ `/order/${order._id}`}>
                            <Button size="xs">DETAILS</Button>
                            </Link>
                          </Td>
                        </Tr>
                        ))}
                      </Tbody>
                     </Table>
                     }
         </div>
         }
        </>
      </div>
    </div>
    </div>
    <Footer/>
    </>
    )
}

export default ProfileScreen
