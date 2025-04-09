import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border: 3px solid black;
  border-radius: 4px;

  @media (max-width: 480px) {
    font-size: 0.875rem;
    padding: 0.75rem;
  }
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
