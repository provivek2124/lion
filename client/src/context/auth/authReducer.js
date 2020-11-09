import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS, SET_ERROR
  } from '../../types'
  
  export default (state, { type, payload }) => {
    switch (type) {
      // case USER_LOADED:
      //   return {
      //     ...state,
      //     isAuthencated: true,
      //     user: payload,
      //     loading: false,
      //     error: null
      //   }
      
      
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
         localStorage.setItem('token', payload.token)
        return {
          ...state,
          userAuth: true,
          // ...payload,
          // isAuthencated: true,
          // loading: false,
           errors: null
        }
      case REGISTER_FAIL:
      case LOGIN_FAIL:
      case AUTH_ERROR:
      case LOGOUT:
        localStorage.removeItem('token')
        return {
          ...state,
          // token: null,
          // isAuthencated: null,
          // user: null,
          // loading: false,
          userAuth: null,
          errors:payload
        }
        

      case CLEAR_ERRORS:
        return {
          ...state,
          errors: null
        }


        case SET_ERROR:
          return {
            ...state,
            errors: payload
          }





      default:
        return state
    }
  }