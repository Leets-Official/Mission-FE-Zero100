import Button from './Button.jsx'
import styled from 'styled-components'

const ButtonGroup = styled.div`
  display: flex;
  gap: 1px;
  width: 60%;
  margin: 0 auto;
`
//justify-content:center (자식 요소 가로 정렬)
// margin: 0 auto로 부모 요소를 중앙 배치 시켜두면 justify-content 안써도 될듯

export default function Category({ onClick }) {
  return (
    <ButtonGroup>
      <Button onClick={() => onClick('all')}>All</Button>
      <Button onClick={() => onClick('active')}>Active</Button>
      <Button onClick={() => onClick('completed')}>Completed</Button>
    </ButtonGroup>
  )
}
