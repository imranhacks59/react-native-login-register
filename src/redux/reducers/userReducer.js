import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/userConstants";

const initialState ={
    isAuthenticated: false,
  };

export const userReducer=(state=initialState,action)=>{
    switch(action.type){
     case USER_LOGIN_REQUEST:
     case USER_REGISTER_REQUEST:    
     return{
        loading:true,
        isAuthenticated:false
     }
 
     case USER_LOGIN_SUCCESS:
     case USER_REGISTER_SUCCESS:
         return{
             ...state,
             loading:false,
             isAuthenticated:true,
             message:action.payload,
             error:null
         }
     case USER_REGISTER_FAIL:    
     case USER_LOGIN_FAIL:
         return{
             ...state,
             loading:false,
             isAuthenticated:false,
             user:null,
             error:action.payload
         }
     case USER_LOGOUT_SUCCESS:
        return{
            loading:false,
            user:null,
            isAuthenticated:false,
            error:null,
            message:null
        }      
     default:
       return state;    
    }
 }
