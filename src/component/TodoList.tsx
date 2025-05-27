import styled from "styled-components";
import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  isEditing: boolean;
}

interface TodoListProps{
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  activeCategory: "All" | "Active" | "Completed" ;
}

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledText = styled.h2`
  align-self: flex-start;
  margin-left: 200px;
`;

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border: 2px solid black;
  background-color: white;
  position: relative;
  margin-right: 10px;

  &:checked::after {
    content: '';
    position: absolute;
    top: 5px;
    left: 12px;
    width: 8px;
    height: 16px;
    border: solid black;
    border-width: 0 4px 4px 0;
    transform: rotate(45deg);
  };
`;

const StyledButton = styled.button`
  padding: 7px 80px;
  font-size: 14px;
  border: none;
  border-radius: 0px;
  margin: 5px;
`;

const EditButton = styled(StyledButton)`
  background-color: white;
  border: 1px solid black;
`;

const DeleteButton = styled(StyledButton)`
  background-color: #d9534f;
  color: white;
`;

const SaveButton = styled(StyledButton)`
  background-color: black;
  color: white;
  `;

const CancelButton = styled(StyledButton)`
  background-color: white;
  border: 1px, solid, black;
  color: black;
  `;

const TaskItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const TaskTop = styled.div`
  display: flex;
  align-items: center;
`;

const TaskActions = styled.div`
  display: flex;
  margin-top: 5px;
`;

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos, activeCategory }) => {
    const [editTexts, setEditTexts] = useState<Record<number, string>>({});

    const handleDelete = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const handleToggleComplete = (id: number) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const handleEdit = (id: number, currentText: string) => {
      setEditTexts(prev => ({...prev, [id]:currentText}));
      setTodos(
        todos.map(todo => 
          todo.id === id ? {...todo, isEditing: true}: todo
        )
      );
    };

    const handleSave =(id: number) => {
      setTodos(
        todos.map(todo =>
          todo.id === id
          ? { ...todo, text: editTexts[id], isEditing: false }
          : todo
        )
      );
      setEditTexts(prev => {
        const newEditTexts = { ...prev };
        delete newEditTexts[id];
        return newEditTexts;
      });
    };

    const handleCancel = (id: number) => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, isEditing: false } : todo
        )
      );
      setEditTexts(prev => {
        const newEditTexts = { ...prev };
        delete newEditTexts[id];
        return newEditTexts;
      });
    };

    const handleEditChange = (id: number, newText: string) => {
      setEditTexts(prev => ({ ...prev, [id]: newText }));
    };

    const filteredTodos = todos.filter(todo => {
        if (activeCategory === "Active") return !todo.completed;
        if (activeCategory === "Completed") return todo.completed;
        return true;
    });

    return (
        <TodoListContainer>
            <StyledText>{todos.filter(todo => !todo.completed).length} tasks remaining</StyledText>
            <div className="task-list">
                {filteredTodos.map(todo => (
                    <TaskItem key={todo.id}>
                      {todo.isEditing ? (
                        <>
                          <TaskTop style={{ flexDirection: "column", alignItems:"flex-start"}}>
                            <div style={{marginBottom: "8px", fontWeight:"bold"}}>
                              New name for <span style={{color: "#555"}}>{todo.text}</span>
                            </div>

                            <input
                              type="text"
                              value={editTexts[todo.id] || ''}
                              onChange={(e) => handleEditChange(todo.id, e.target.value)}
                              style={{ width: "400px", padding: "8px", fontSize: "16px" }}
                            />
                          </TaskTop>

                          <TaskActions>
                            <CancelButton onClick={() => handleCancel(todo.id)}>Cancel</CancelButton>
                            <SaveButton onClick={() => handleSave(todo.id)}>Save</SaveButton>
                          </TaskActions>
                        </>
                      ) : (
                        <>
                        <TaskTop>
                            <StyledCheckbox
                                checked={todo.completed}
                                onChange={() => handleToggleComplete(todo.id)}
                            />
                            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                                {todo.text}
                            </span>
                        </TaskTop>
                        <TaskActions>
                            <EditButton onClick={() => handleEdit(todo.id, todo.text)}>Edit</EditButton>
                            <DeleteButton onClick={() => handleDelete(todo.id)}>Delete</DeleteButton>
                        </TaskActions>
                        </>
                      )}                       
                    </TaskItem>
                ))}
            </div>
        </TodoListContainer>
    );
};

export default TodoList;

