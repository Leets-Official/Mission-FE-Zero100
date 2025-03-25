import React from "react";

function InputComponent({ value, onChange, placeholder }) {
  return <input value={value} onChange={onChange} placeholder={placeholder} />;
}

export default InputComponent;