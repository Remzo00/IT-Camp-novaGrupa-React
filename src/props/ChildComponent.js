import React, { useState } from "react";

const ChildComponent = ({onusernameChange}) => {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleButtonClick = () => {
        onusernameChange(inputValue)
    }
  
    return (
      <div>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={handleButtonClick}>Update username</button>
      </div>
    );
}

export default ChildComponent