function ButtonComponent({ label, onClick, type }) {
 
  const buttonClass = type === "add" ? "add-button-container" : "";

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
}

export default ButtonComponent;