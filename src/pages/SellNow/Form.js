import { Step, Steps, useSteps } from "chakra-ui-steps"
import { Flex, Button,Contents, Container,Heading } from '@chakra-ui/react'
import Productdetails from "./Productdetails/Productdetails"
import PersonalDetails from "./Personaldetail/PersonalDetails"
import Category from '../SellNow/Category';
import { useState,useRef } from "react";
import { Helmet } from 'react-helmet';
import validate from "./validation";
import {useDispatch, useSelector} from 'react-redux';
import {createForm} from "../../actions/createFromActions.js";
import axios from "axios";
import Footer from "../Footer/Footer";
import Thankyou from '../../Image/Thankyou.svg';

const Form = ({handlecheckbox}) => {

  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const[category, setCategory] = useState("")
  console.log(category)

  const[brand , setBrand] = useState("")
  const[model , setModel] = useState("")
  const[refrence , setRefrence] = useState("")
  const[year , setYear] = useState("")
  const[size , setSize] = useState("")
  // const[accessories , setAccessories] = useState({
  //   checkbox:[]
  //   // response:[]
  // })
  const[accessories , setAccessories] = useState([])
  const [box , setBox] = useState("")
  const [bill , setBill] = useState("")
  const [paper, setPaper] = useState("")
  const [range, setRange] = useState("")
  console.log({accessories})

  const[description , setDescription] = useState("")
  const[uploadbill , setUploadbill] = useState(null)
  const[uploadimage , setUploadimage] = useState("")
  const[check , setCheck] = useState(false)
  // console.log({check})

  const[name , setName] = useState("")
  const[email , setEmail] = useState("")
  const[message , setMessage] = useState("")
  const[prefferedTime , setTime] = useState("")
  const[contactNo , setContact] = useState("")

  const[values , setValues] = useState("")

  const imageRef = useRef();

  const submit = (e) =>{
    window.location.reload(false);
  }

  const { nextStep, prevStep, reset, activeStep } = useSteps({initialStep: 0,})
 
 const getData = (e) =>{
    e.preventDefault();

    const formDate = new FormData();
  
    formDate.append('photo', uploadbill);
    formDate.append('photo1', uploadimage);

    const config = {
      headers:{
        'content-type' : "multipart/form-data",
      }
    }
    const url = 'http://localhost:5051/api/form/upload';
    axios.post(url, formDate, config).then((Response)=>{
      alert("Image upload")
    }).catch((err)=>{
      console.log('error',err)
    })

  const fetch = async () => {
  const datass = {category , brand , model , refrence , year , size , accessories , description, uploadbill, uploadimage , name , email , contactNo , prefferedTime ,message , range}
  const {data} = await axios.post(`http://localhost:5051/api/form`, datass)
  console.log(data)
  }
  fetch()
  // dispatch(createForm(category , brand , model , refrence , year , size , accessories , description, uploadbill, uploadimage , name , email , contactNo , prefferedTime ,message , range))
  console.log("clicked")
}
  const formm = {category , brand , model , refrence , year , size , accessories , description, uploadbill, uploadimage , name , email , contactNo , prefferedTime ,message , range}
console.log(formm)


  return (
    <>
    <Helmet>
            <title>Buy/Sell</title>
    </Helmet>
    <form onSubmit={getData}  enctype="multipart/form-data" style={{width:"100%"}} >
    <Flex flexDir="column" width="100%">
    
      <Steps labelOrientation="vertical" activeStep={activeStep}>
       
          <Step label={"Category"} key={1}>
            <Category
            nextStep={nextStep} 
            setCategory={setCategory}
            category={category}
            />    
          </Step>

          <Step label={"Product Details"} key={2}>   
            <Productdetails
           
            brand={brand} setBrand={setBrand}
            model={model}  setModel={setModel}
            refrence={refrence} setRefrence={setRefrence}
            year={year} setYear={setYear}
            size={size} setSize={setSize}
            accessories={accessories} setAccessories={setAccessories}
            // box={box} setBox={setBox}
            // bill={bill} setBill={setBill}
            // paper={paper} setPaper={setPaper}
            range={range} setRange={setRange}
            description={description} setDescription={setDescription}
            uploadbill={uploadbill} setUploadbill={setUploadbill}
            uploadimage={uploadimage} setUploadimage={setUploadimage}
            check={check} setCheck={setCheck}
            />
          </Step>

          <Step label={"Personal Details"} key={3}>
            <PersonalDetails
            name={name} setName={setName}
            email={email} setEmail={setEmail}
            message={message} setMessage={setMessage}
            contact={contactNo} setContact={setContact}
            prefferedTime={prefferedTime} setTime={setTime}
            values={values} setValues={setValues}
            />
          </Step>
     
      </Steps>

      {activeStep === 3 ? (
        <Flex px={4} py={4} width="100%" flexDirection="column">
           
          <img src={Thankyou} className="thankyou"></img>
          <Button mx="auto" mt={6} size="sm" onClick={() => {submit()}} className="another_btn" type="submit">
            Sell Another Product
         
          </Button>
        </Flex>
      ) : (
        <Flex width="100%" justify="flex-end">
          {activeStep == 1 || activeStep == 2?(
          <>
          <Button
          isDisabled={activeStep === 0}
          mr={4}
          onClick={prevStep}
          size="sm"
          variant="ghost"
          className="prev-btn"
           >
            Prev
          </Button>
          {/* <button type="submit">Done</button> */}
          
          {activeStep ? 
            (
              <Button size="sm" onClick={nextStep} 
              //  isDisabled={!name || !email || !contact || !time || !message} 
              className="next-btn">          
              {activeStep === 3 - 1 ? "Submit" : <button className="nextss" >Next</button>}                         
              </Button>
            )
            :  
            (    
            <Button size="sm" onClick={nextStep} 
                // isDisabled={!brand || !model || !refrence || !year || !size || !description || !uploadbill || !uploadimage  } 
                className="next-btn">          
                {activeStep === 3 - 1 ? "Submit" : <button className="nextss" >Next</button>}                         
            </Button>
            )
            }              
{/*            
            <Button size="sm" onClick={nextStep}
            //  isDisabled={!brand || !model || !refrence || !year || !size || !description || !uploadbill || !uploadimage  } 
                className="next-btn">          
              {activeStep === 3 - 1 ? "Submit" : "Next"}                         
            </Button> */}

            {/* {activeStep ?(
              <>
               <Button size="sm" onClick={nextStep} className="next-btn">          
              {activeStep === 3 - 1 ? <button onClick={(e) => getData(e,category,model,brand,refrence,name,year,
                size,value,range,description,uploadbill,uploadimage,name,email,contact,time,message)} type="submit">Submit</button> : "Next"}                         
            </Button></>
             ) :
             (
              <>
              <Button size="sm" onClick={nextStep} className="next-btn">          
              {activeStep === 3 - 1 ? "Finish" : "Next"}                         
            </Button>
              </>
            )} */}
            
            </>
          ):
          (
            <></>
          )
          }
          
        </Flex>
      )}
    </Flex>
    </form>
    <Footer/>
    </>
  )
}

export default Form;