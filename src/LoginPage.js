import React, { useContext, useState } from "react";
import { LoginContext } from "./context/LoginContext";

const Login = () => {
    const { setUsername, setShowProfile } = useContext(LoginContext)
    return(
        <>
            <input
                type="text"
                placeholder="username"
                onChange={(e) => {
                    setUsername(e.target.value)
                }}
            />
            <input type="password" placeholder="password" />
            <button onClick={() => {setShowProfile(true)}}>Login</button>
        </>
    )
}

export default Login