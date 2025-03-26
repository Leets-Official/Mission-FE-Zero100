import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyleCheckbox = styled.input`
  transform: scale(2);
  margin: 10px;
  cursor: pointer;
`

export default function Checkbox({ checked, onChange }) {
  return <StyleCheckbox type="checkbox" checked={checked} onChange={onChange} />
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired, // checked는 boolean이고 필수값
  onChange: PropTypes.func.isRequired, // onChange는 함수이고 필수값
}
