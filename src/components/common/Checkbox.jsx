import styled from 'styled-components';

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  width: 20px;
  height: 20px;
  accent-color: black;
  cursor: pointer;
`;

const Checkbox = (props) => <StyledCheckbox {...props} />;

export default Checkbox;
