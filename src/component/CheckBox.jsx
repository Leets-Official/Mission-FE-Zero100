import styled from 'styled-components'

const StyledCheckBox = styled.input.attrs({ type: 'checkbox' })`
  width: 25px;
  height: 25px;
  appearance: none;
  border: 1.5px solid;
  cursor: pointer;
  border-radius: 0;
  margin-left: 0;

  &:checked {
    background-color: white;
    position: relative;
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 7px;
    width: 6px;
    height: 11px;
    border: solid #333;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`

const CheckBox = ({ isChecked, onChange, id }) => {
  return <StyledCheckBox type='checkbox' id={id} checked={isChecked} onChange={onChange} />
}

export default CheckBox
