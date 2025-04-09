const Button = ({ children, onClick, className = '', ...props }) => {
  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button
