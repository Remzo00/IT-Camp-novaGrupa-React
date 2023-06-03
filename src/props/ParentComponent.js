import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
    const [username, setUsername] = useState('')

    const handleUsername = (newUsername) => {
        setUsername(newUsername)
    }

  return (
    <div>
        <h2>Username: {username}</h2>
        <ChildComponent onusernameChange={handleUsername} />
    </div>
  );
} 

export default ParentComponent