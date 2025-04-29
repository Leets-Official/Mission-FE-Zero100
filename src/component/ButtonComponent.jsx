import React from "react";

function ButtonComponent({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

export default ButtonComponent;