import PropTypes from 'prop-types'
import { useState } from 'react'
import styled from 'styled-components'

const HiddenCheckbox = styled.input`
  display: none;
`

const StyleCheckbox = styled.label`
  position: relative;
  width: 20px;
  height: 20px;
  border: 2px solid black;

  //가상 요소 생성
  &::after {
    content: ${({ isChecked }) => (isChecked ? "'✔️'" : '""')};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* 가운데 정렬 */
    font-size: 15px;
  }
`

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`

export default function Checkbox({ isChecked, onChange, id }) {
  return (
    <div>
      <CheckboxContainer>
        <HiddenCheckbox
          type="checkbox"
          id={id}
          checked={isChecked}
          onChange={onChange}
        />
        <StyleCheckbox htmlFor={id} isChecked={isChecked} />
      </CheckboxContainer>
    </div>
  )
}

Checkbox.propTypes = {
  isChecked: PropTypes.bool.isRequired, // checked는 boolean이고 필수값
  onChange: PropTypes.func.isRequired, // onChange는 함수이고 필수값
  id: PropTypes.string.isRequired,
}
