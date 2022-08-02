import axios from "axios";
import { FORM_CREATE_FAIL , FORM_CREATE_REQUEST , FORM_CREATE_SUCCESS } from "../constants/createForm";
import thunk from "redux-thunk"

export const createForm = (category , brand , model , refrence , year , size , accessories , description, uploadbill, uploadimage , name , email , contactNo , prefferedTime ,message , range) => async (dispatch , getState) => {
    try {
        dispatch({
            type: FORM_CREATE_REQUEST
        })
           
        const { userLogin: {userInfo} } = getState()
        const config = {
            headers:{
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.post(`http://localhost:5051/api/form`, {category , brand , model , refrence , year , size , accessories , description, uploadbill, uploadimage , name , email , contactNo , prefferedTime ,message , range} )

        dispatch({
            type: FORM_CREATE_SUCCESS,
            payload: data
        })
        console.log(data);
    } catch(error){ 
        dispatch({
            type: FORM_CREATE_FAIL,
            payload: 
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}