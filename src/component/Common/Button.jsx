import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = styled.button`
  padding: 5px 3px;
  margin: 5px 3px;
  width: 80%;
  height: 35px;
  background-color: white;
  color: black;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: #dcdcdc;
    border: 1px solid black;
    text-decoration: underline;
  }
`

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default Button
