import React,{useState,useEffect} from 'react'
import { FaEnvelope } from "react-icons/fa";
import avatarRegister from '../../components/img/avatarRegister.svg';
import addUs from '../../components/img/new.svg'
import wave from '../../components/img/wavev.png'
import {Form, Image} from 'react-bootstrap'
import { Helmet } from 'react-helmet';
const Forgot = ({history}) => {

    const [email,setEmail] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        if(email == email){
          history.push("/reset")
        }
        else{
          history.push("/register")
        }
        }
        
      console.log(submitHandler)

  return (
    <div className="registerSc">
          <Helmet>
            <title>
              Forgot
            </title>
          </Helmet>
          	<Image className="wave" src={wave} />

            <div className="containera">
              
		<div className="imga">
			<Image src={addUs} />
		</div>
		<div className="login-content">
			<form onSubmit={submitHandler} id="landing_form">
				<Image src={avatarRegister} />
           		<div className="input-div one">
           		   <div className="i">
           		   	<FaEnvelope/>
           		   </div>
           		   <div className="div">          		   		
           		   		<input type="email" required pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" 
                      value={email} className="inputa" placeholder="Enter email" 
                      onChange={(e) => setEmail(e.target.value)} />
           		   </div>
           		</div>
                <input type="submit" className="btna2" value="Submit"/>
               
            </form>
        </div>
    </div>
</div>
  )
}

export default Forgot