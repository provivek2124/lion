import React, { useState, useContext, useEffect } from 'react';
import AuthContext from "../../context/auth/authContext";
import { withRouter } from 'react-router';
import "./login.css";

const Login = (props) => {
    const {loginUser, userAuth, errors,clearError} = useContext(AuthContext)

    useEffect(() => {
      if (userAuth) {
        props.history.push('/admin-dashboard')
        clearError()
      } else {
        clearError()
      }
      // eslint-disable-next-line
    }, [userAuth, props.history])

    const [user, setUser] = useState({
    email: '',
    password: ''
  })
  
  const { email, password } = user

  const onchange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })

    clearError()
  }
  const onsubmit = e => {
    e.preventDefault()
    loginUser({email,password})

    clearError()
    
  }
  return (
    <div className="login">
      <h2 className="title">Login</h2>
      <form onSubmit={onsubmit} className="formcontainer">
        <input type="email" name="email" placeholder="Email" value={email} onChange={onchange} />
        <br/>
        <input type="password" name="password" placeholder="Password" value={password} onChange={onchange} required />
        <br/>
        <input type="submit" value="Login" className="btn-primary" />
      </form>
      <div className="question">
         {errors!== null && <button className="danger">
            {errors.msg? errors.msg:errors.error[0].msg}
           <span onClick={ () => clearError()}>X</span>
           </button>} 
        
        
      </div>
    </div>
  )
}
export default withRouter(Login);
