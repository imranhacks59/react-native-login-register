import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/userConstants";



export const userLogin=()=>async(dispatch)=>{
    try {
        dispatch({
            type:USER_LOGIN_REQUEST
        });
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:'user login successfully'
        })
    } catch (error) {
        dispatch({
            type:USER_LOGIN_FAIL,
            payload:error?.response
        })
    }
}

export const userRegister=()=>async(dispatch)=>{
    try {
        dispatch({
            type:USER_REGISTER_REQUEST
        });
        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload:'user registered successfully'
        })
        
    } catch (error) {
        dispatch({
            type:USER_REGISTER_FAIL,
            payload:error?.response
        })
    }
}

export const logout=()=>async(dispatch)=>{
    dispatch({
        type:USER_LOGOUT_SUCCESS,
        message:'logout'
    })
}