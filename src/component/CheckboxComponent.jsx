import React from "react";

function CheckboxComponent({ isChecked, onChange }) {
  return <input type="checkbox" checked={isChecked} onChange={onChange} />;
}

export default CheckboxComponent;
