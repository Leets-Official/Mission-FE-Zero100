import { useState } from 'react'
import styled from 'styled-components'
import Button from './Common/Button'

const ButtonGroup = styled.div`
  display: flex;
  gap: 1px;
  width: 60%;
  margin: 0 auto;
`

export default function Category({ onClick }) {
  const [selected, setSelected] = useState('') // 현재 선택된 버튼 상태

  const handleClick = (category) => {
    setSelected(category) // 상태 업데이트
    onClick(category) // 부모에게 전달
  }

  return (
    <ButtonGroup>
      <Button
        onClick={() => handleClick('all')}
        isSelected={selected === 'all'}
      >
        All
      </Button>
      <Button
        onClick={() => handleClick('active')}
        isSelected={selected === 'active'}
      >
        Active
      </Button>
      <Button
        onClick={() => handleClick('completed')}
        isSelected={selected === 'completed'}
      >
        Completed
      </Button>
    </ButtonGroup>
  )
}
