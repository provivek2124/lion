import React, { useReducer } from 'react'
import axios from 'axios'
import authReducer from './authReducer'
import AuthContext from './authContext'
import setAuthToken from '../../utils/setAuthtoken'
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
  CLEAR_ERRORS,
  SET_ERROR
} from '../../types'


const AuthState = (props) => {
  
  const initialState = {
    userAuth: null,
    errors:null
  }

  const  [state, dispatch] = useReducer(authReducer,initialState)


//Register User
const registerUser = async userData => {
  const config = {
    header: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.post("/registeradminlion", userData, config)
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data.error
    })
  }
}

//login user

const loginUser = async userData => {
  const config = {
    header: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.post('/auth', userData, config)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    })
    // loadUser()
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data
    })
  }
}


//logout user

const logout = () => {
  dispatch({
    type: LOGOUT,
    
  })
}




const setError = (err) => {
  dispatch({
    type: SET_ERROR,
    payload: [{ msg: err }]
  })
}


const clearError = () => {
  dispatch({
    type: CLEAR_ERRORS,
    
  })
}



  return(
    <AuthContext.Provider value={{
      userAuth: state.userAuth,
      errors: state.errors,
      registerUser,
      loginUser,
      setError,
      clearError,
      logout

    }}>

    {props.children}

    </AuthContext.Provider>
  )

}

export default AuthState;