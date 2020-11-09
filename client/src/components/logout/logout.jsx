import React,{useContext}  from 'react';
import AuthContext from "../../context/auth/authContext";
import "./logout.css";
import Button from 'react-bootstrap/Button';


function Logout() {
    const{logout, clearError} = useContext(AuthContext)

    const onLogout = () =>{
        logout()
        clearError()

    }

    return (
        <div>
            <Button variant="danger" className="bfloat-right" onClick={onLogout}>Logout</Button>
            
        </div>
    )
}

export default Logout

