import { useTodo } from "../contexts/TodoContext";
import Todo from "./Todo";
import styled from "styled-components";

const Title = styled.h2`
  margin-bottom: 1rem; 
`;

const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

function TodoList() {
  const { filteredTasks } = useTodo();

  const remainingTasks = filteredTasks.filter((task) => !task.completed).length;

  return (
    <div>
      <Title>{remainingTasks} tasks remaining</Title>
      <ListWrapper>
        {filteredTasks.map((task) => (
          <Todo key={task.id} task={task} />
        ))}
      </ListWrapper>
    </div>
  );
}

export default TodoList;