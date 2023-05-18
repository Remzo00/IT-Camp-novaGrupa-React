import React from "react";
import './input.css';

function Input({ type }) {
  return (
    <div>
      <input type={type} />
    </div>
  );
}

export default Input;