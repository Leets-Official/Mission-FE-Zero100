import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledInput = styled.input`
  width: 80%;
  height: 70px;
  font-size: 16px;
  padding: 15px;
  margin: 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
`

export default function Input({ value, onChange }) {
  return <StyledInput type="text" value={value} onChange={onChange} />
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
