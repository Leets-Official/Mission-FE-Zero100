import styled from 'styled-components';

const StyledCheckbox = styled.input`
  width: 24px;
  height: 24px;
  border-radius: 2px;
`;

function Checkbox({ checked, onChange }) {
  return (
    <StyledCheckbox type="checkbox" checked={checked} onChange={onChange} />
  );
}

export default Checkbox;
