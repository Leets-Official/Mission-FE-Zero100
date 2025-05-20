// src/component/TodoList.jsx
import React from 'react'; // useState는 TodoComponent로 이동했으므로 여기선 필요 없을 수 있음
import TodoComponent from './TodoComponent'; // 방금 만든 TodoComponent를 import
import TextComponent from './TextComponent';

import '../App.css';

function TodoList({ filteredTasks, toggleTask, editTask, deleteTask, activeCount }) {
  // TodoList 내의 편집 관련 상태는 TodoComponent로 이동했습니다.
  // const [editingTaskId, setEditingTaskId] = useState(null);
  // const [editingTextValue, setEditingTextValue] = useState("");

  // 핸들러 함수들도 TodoComponent로 이동했습니다.
  // const handleEditClick = (task) => { ... };
  // const handleSaveClick = (id) => { ... };
  // const handleCancelClick = () => { ... };

  // 만약 filteredTasks가 비어있을 때 메시지를 표시하고 싶다면
  if (!filteredTasks || filteredTasks.length === 0) {
    return (
      <div className="todo-list empty">
        <div className="tasks-remaining">
          <TextComponent text="No tasks yet!" />
        </div>
      </div>
    );
  }

  return (
    <div className="todo-list">
      <div className="tasks-remaining">
        <TextComponent
          text={`${activeCount} task${activeCount !== 1 ? 's' : ''} remaining`}
        />
      </div>
      <div className="task-list">
        {filteredTasks.map((task) => (
          // 각 task에 대해 TodoComponent를 렌더링하고 필요한 props 전달
          <TodoComponent
            key={task.id} // 각 자식 요소는 고유한 key prop을 가져야 함
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;