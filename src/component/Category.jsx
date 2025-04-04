import Button from './Common/Button'
import styled from 'styled-components'

const ButtonGroup = styled.div`
  display: flex;
  gap: 1px;
  width: 60%;
  margin: 0 auto;
`

export default function Category({ onClick }) {
  return (
    <ButtonGroup>
      <Button onClick={() => onClick('all')}>All</Button>
      <Button onClick={() => onClick('active')}>Active</Button>
      <Button onClick={() => onClick('completed')}>Completed</Button>
    </ButtonGroup>
  )
}
