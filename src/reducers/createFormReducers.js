import { FORM_CREATE_FAIL , FORM_CREATE_REQUEST , FORM_CREATE_SUCCESS } from "../constants/createForm.js";

export const createFormReducer = (state = {} , action) => {
    switch(action.type) {
        case FORM_CREATE_REQUEST:
            return {
                loading: true
            }
        case FORM_CREATE_SUCCESS:
                return {
                    loading: false,
                  form: action.payload       
        }
        case FORM_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload
    }
    default:
        return state
    }
}