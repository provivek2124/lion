import React from 'react';
import Login from "../../components/login/login";
import Header from "../../components/header/header.component";

function LoginPage() {
    return (
        <div className="container">
            <Header/>
            <Login/> 
        </div>
    )
}

export default LoginPage;
