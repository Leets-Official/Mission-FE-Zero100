import React from "react";

// props 객체에서 className도 받아옵니다.
function ButtonComponent({ label, onClick, className }) {
  // 받은 className을 <button> 요소의 className 속성에 적용합니다.
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
}

export default ButtonComponent;