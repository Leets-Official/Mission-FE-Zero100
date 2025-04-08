import styled from 'styled-components'
import Todo from '../Todo/Todo'

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 60%;
  margin: 0 auto;
`

const TaskCount = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
  color: rgba(29, 23, 22, 0.82);
`

const TodoList = ({ tasks, onToggle, onDelete }) => {
  return (
    <ListContainer>
      <TaskCount>{tasks.length} tasks remaining</TaskCount>
      {tasks.map((task) => (
        <Todo
          key={task.id}
          task={task.label}
          id={task.id}
          isChecked={task.isChecked}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ListContainer>
  )
}

export default TodoList
