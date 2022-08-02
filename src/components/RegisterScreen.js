import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Image} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import avatarRegister from '../Image/avatarRegister.svg'
import login from '../actions/userActions'
import { Helmet } from 'react-helmet';
import addUs from '../Image/registrationpage.svg'
import wave from '../Image/Greenwave.svg';
import {register} from '../actions/userActions'
import { FaUserAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import Nav from '../components/Nav';

import {
  Button, Input
} from "@chakra-ui/react"
import Footer from '../pages/Footer/Footer'

const RegisterScreen = ({location, history}) => {
    const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const [message,setMessage] = useState("") 

  const dispatch = useDispatch()

  const userRegister = useSelector(state => state.userRegister)

  const { error, userInfo } = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/home'

  useEffect(() => {
    if(userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if(password == confirmPassword){
      setMessage('Password match')
    }
    if(password !== confirmPassword){
        setMessage('Password does not match')
    }   
    else{
        dispatch(register(name, email, password))
    }
  }
  console.log(submitHandler)

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
  
  
  inputs.forEach(inputa => {
    inputa.addEventListener("focus", addcl);
    inputa.addEventListener("blur", remcl);
  });
  
    return (
      <>
        <div className="registerSc">
          <Helmet>
            <title>
              Register
            </title>
          </Helmet>
          {/* <Nav/> */}
          	<Image className="wave" />

            <div className="containera">
              
		<div className="imga">
			<Image src={addUs} />
		</div>
		<div className="login-content">
			<form onSubmit={submitHandler} id="landing_form">
				<Image src={avatarRegister} />
				{error && <h4 className='mt-5'>{error}</h4>}
                <div className="input-div zz">
                  <div className="i">
           		   	  <FaUserAlt/>
           		    </div>
                  <div className="div">          		   		
           		   		<input type="text" value={name} className="inputa" placeholder="Enter name"  onChange={(e) => setName(e.target.value)}/>
           		    </div>           		   
           		  </div>

           		<div className="input-div one">
           		   <div className="i">
           		   	<FaEnvelope/>
           		   </div>
           		   <div className="div">          		   		
           		   		<input type="email" pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" value={email} className="inputa" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
           		   </div>
           		</div>

           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<FaLock/>
           		   </div>
           		   <div className="div">           		    	  
           		    	<input type="password" value={password} className="inputa" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/>
            	   </div>
            	</div>

              <div className="input-div pass">
           		   <div className="i"> 
                    <FaLock/>
           		   </div>
           		   <div className="div">           		    	
           		    	<input type="password" value={confirmPassword} className="inputa" placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)}/>
            	   </div>
            	</div>
                {message && <h4 id='pass_submit_btn'>{message}</h4>}
                <input type="submit" className="btna2" value="Sign up"/>
                <br />
                Already Have an Account? {' '}
            	<Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Login</Link>
            </form>
        </div>
    </div>
    
    </div>
    <Footer/>
    </>
    )
}

export default RegisterScreen
