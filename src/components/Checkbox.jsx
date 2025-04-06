import styled from 'styled-components';

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  width: 24px;
  height: 24px;
  border: 2px solid #333;
  border-radius: 4px;
  display: grid;
  place-content: center;
  cursor: pointer;

  &:checked {
    background-color: black;
  }

  &:checked::before {
    content: '✔';
    color: white;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
    font-size: 14px;
  }
`;

function Checkbox({ checked, onChange }) {
  return <StyledCheckbox checked={checked} onChange={onChange} />;
}

export default Checkbox;
