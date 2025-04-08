import Text from './Text'
import styled from 'styled-components'
import Todo from './Todo'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const TodoList = ({ todos }) => {
  return (
    <Container>
      <Text style={{ fontWeight: 'bold', fontSize: '20px' }}>3 tasks remaining</Text>
      <List>
        {todos.map((todo) => (
          <Todo key={todo.id} id={todo.id} label={todo.label} isChecked={todo.checked} />
        ))}
      </List>
    </Container>
  )
}

export default TodoList
