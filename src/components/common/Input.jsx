const Input = ({ placeholder = '내용을 입력해주세요.', ...props }) => {
  return <input placeholder={placeholder} {...props} />;
};

export default Input;