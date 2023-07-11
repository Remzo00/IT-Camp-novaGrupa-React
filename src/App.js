import React, { useState } from 'react';
import './App.css';
import Login from './LoginPage';
import Profile from './ProfilePage';
import { LoginContext } from './context/LoginContext';
//Redux
function App() {
  const [username, setUsername] = useState("")
  const [showProfile, setShowProfile] = useState(false)
    return (
    <div>
      <LoginContext.Provider value={{username, setUsername, setShowProfile}}>
          {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
