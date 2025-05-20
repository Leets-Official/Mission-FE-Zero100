// src/component/ButtonComponent.jsx
import React from "react";

function ButtonComponent({
  children,      // 버튼 내부에 표시될 내용 (텍스트, 아이콘 등)
  onClick,       // 클릭 시 실행될 함수
  className = "", // CSS 클래스 (기본값 빈 문자열)
  type = "button", // 버튼 타입 (기본값 "button")
  disabled = false, // 비활성화 여부 (기본값 false)
  ...restProps     // 그 외 HTML button 속성들 (예: aria-label)
}) {
  return (
    <button
      type={type}
      onClick={onClick} // ★★★ 여기가 핵심입니다. props로 받은 onClick 함수를 그대로 전달합니다.
      className={className}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default ButtonComponent;