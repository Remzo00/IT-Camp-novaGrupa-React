import React, { useState } from "react";

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const login = () => {
        setIsLoggedIn(true)
    }

    const logout = () => {
        setIsLoggedIn(false)
    }
    
    return(
        <div>
            {isLoggedIn ? (
                <h1>Dobrodosli</h1>
            ):(
                <button onClick={login}>Prijavi se</button>
            )}

            {isLoggedIn && <button onClick={logout}>odjavi se</button>}
        </div>
    )
}

export default Login