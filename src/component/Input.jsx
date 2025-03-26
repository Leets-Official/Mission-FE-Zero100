import PropTypes from 'prop-types'

export default function Input({ value, onChange }) {
  return <input type="text" value={value} onChange={onChange} />
}

Input.propTypes = {
  value: PropTypes.string.isRequired, // value는 문자열이고 필수값
  onChange: PropTypes.func.isRequired, // onChange는 함수이고 필수값
}
