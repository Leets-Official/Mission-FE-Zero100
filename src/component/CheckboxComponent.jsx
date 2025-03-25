import React from "react";

function CheckboxComponent({ checked, onChange }) {
  return <input type="checkbox" checked={checked} onChange={onChange} />;
}

export default CheckboxComponent;