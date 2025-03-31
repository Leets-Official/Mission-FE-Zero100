import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 1rem;
  font-size: 1rem;
  border: 2px solid #333;
  border-radius: 4px;
`;

function Input({ value, onChange, placeholder }) {
  return (
    <StyledInput
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default Input;
