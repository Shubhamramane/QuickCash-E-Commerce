import React, {useState, useEffect,useRef} from 'react'
import {Link} from 'react-router-dom'
import {Form, Image} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import avatarRegister from '../../components/img/avatarRegister.svg'
import addUs from '../../components/img/new.svg'
import wave from '../../components/img/wavev.png'
import { Helmet } from 'react-helmet';
import {getUserDetails, updateUserProfile} from '../../actions/userActions'
import {listMyOrders } from '../../actions/orderActions'
import { FaLock } from "react-icons/fa";
import './reset.css'

const ResetPassword = ({location, history}) => {
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
    if(password !== confirmPassword){
        setMessage('Password does not match')
    }
    else if(password == confirmPassword){
      setMessage('')
      dispatch(updateUserProfile({ id:user._id, name, email, password }))
        console.log("its working")
        history.push('/login')
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
 



    return (
    <div className="registerSc">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <Image className="wave" src={wave}/>
      <div className="containera">
              
		<div className="imga">
			<Image src={addUs} />
		</div>
    <div className = 'rightinfoss'>
   
    <>
		<div className= 'login-content'>
			<form onSubmit={submitHandler} id="landing_form">
				<Image src={avatarRegister} />
				{error && <h4>{error}</h4>}
                {success && <h4>Profile Updated</h4>}

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
                {message && <h4 className = 'Message'>{message}</h4>}
                <input type="submit" className="btna2" value="Submit"/>
               
            	
                
              
            </form>
        </div>
        
    </>
      </div>
    </div>
        </div>
    )
}

export default ResetPassword;
