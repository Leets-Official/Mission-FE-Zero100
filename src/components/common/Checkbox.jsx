import styled from 'styled-components'

//체크박스
const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  -webkit-appearance: none; /* Safari 지원용 */
  width: 40px;
  height: 40px;
  border: 2px solid black;
  border-radius: 0; /* 정사각형 */
  cursor: pointer;
  position: relative;
  margin-left: 0.3rem;

  &:checked::after {
    content: '✔';
    position: absolute;
    font-size: 30px;
    top: 0;
    left: 4px;
    color: black;
  }
`

const Checkbox = (props) => <StyledCheckbox {...props} />

export default Checkbox
