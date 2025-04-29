import React, { useState } from "react"; // useState import
import TextComponent from "./TextComponent";
import CheckboxComponent from "./CheckboxComponent";
import ButtonComponent from "./ButtonComponent";

import "../App.css"; // App.css import

function TodoList({ filteredTasks, toggleTask, editTask, deleteTask, activeCount }) {
  // TodoList 컴포넌트 내에서 편집 중인 항목과 입력 값을 관리하는 상태 추가
  const [editingTaskId, setEditingTaskId] = useState(null); // null이면 편집 중인 항목 없음
  const [editingTextValue, setEditingTextValue] = useState("");

  // Edit 버튼 클릭 시 호출될 함수
  const handleEditClick = (task) => {
    setEditingTaskId(task.id); // 편집 모드로 전환, 해당 task의 ID 저장
    setEditingTextValue(task.name); // 입력 필드에 현재 task 이름 설정
  };

  // Save 버튼 클릭 시 호출될 함수
  const handleSaveClick = (id) => {
    const trimmedText = editingTextValue.trim(); // 앞뒤 공백 제거
    if (trimmedText) { // 빈 문자열이 아닐 때만 저장
      editTask(id, trimmedText); // App.jsx의 editTask 함수 호출
      setEditingTaskId(null); // 편집 모드 종료
      setEditingTextValue(""); // 입력 필드 초기화
    } else {
      // 빈 문자열 입력 시 처리 (예: 원래 이름으로 되돌리고 모드 종료)
      alert("Task name cannot be empty. Editing cancelled.");
      setEditingTaskId(null);
      setEditingTextValue("");
    }
  };

  // Cancel 버튼 클릭 시 호출될 함수
  const handleCancelClick = () => {
    setEditingTaskId(null); // 편집 모드 종료
    setEditingTextValue(""); // 입력 필드 초기화
  };

  return (
    <div className="todo-list">
      <div className="tasks-remaining">
        {/* activeCount는 App.jsx에서 displayTaskCount 상태를 받아옴 */}
        <TextComponent
          text={`${activeCount} task${activeCount !== 1 ? "s" : ""} remaining`}
        />
      </div>
      <div className="task-list">
        {filteredTasks.map((task) => (
          // 각 task 항목에 대해 렌더링
          <div key={task.id} className={`task-item ${editingTaskId === task.id ? 'editing' : ''}`}>
            {editingTaskId === task.id ? (
              // 👇 현재 task가 편집 중인 항목일 때 UI 렌더링
              <>
                 {/* "New name for [원래 이름]" 라벨 */}
                 <div className="edit-label"> {/* 스타일을 위한 클래스 */}
                    <TextComponent text={`New name for ${task.name}`} />
                 </div>

                {/* 입력 필드 */}
                <input
                  type="text"
                  value={editingTextValue}
                  onChange={(e) => setEditingTextValue(e.target.value)}
                  className="edit-input" // 스타일을 위한 클래스
                  autoFocus // 편집 모드 진입 시 자동으로 포커스
                  onKeyPress={(e) => { // Enter 키로 저장
                    if (e.key === 'Enter') {
                      handleSaveClick(task.id); // 현재 task ID를 전달
                    }
                  }}
                />

                {/* Cancel/Save 버튼 */}
                <div className="task-actions"> {/* 기존 task-actions 클래스 재사용 */}
                   {/* 버튼 순서: Cancel, Save */}
                   <ButtonComponent label="Cancel" onClick={handleCancelClick} className="cancel-button" /> {/* 클래스 추가 */}
                   <ButtonComponent label="Save" onClick={() => handleSaveClick(task.id)} className="save-button" /> {/* 현재 task ID를 전달 */}
                </div>
              </>
            ) : (
              // 👇 현재 task가 편집 중이 아닐 때 기본 UI 렌더링
              <>
                <div className="task-row">
                  <CheckboxComponent
                    isChecked={task.completed}
                    onChange={() => toggleTask(task.id)} // task.id 전달
                  />
                  <span className={`task-name ${task.completed ? 'completed' : ''}`}> {/* 완료된 할 일에 스타일 적용 */}
                     <TextComponent text={task.name} />
                  </span>
                </div>
                <div className="task-actions">
                  {/* Edit 클릭 시 handleEditClick 호출 */}
                  <ButtonComponent label="Edit" onClick={() => handleEditClick(task)} /> {/* task 객체 전체 전달 */}
                  <ButtonComponent label="Delete" onClick={() => deleteTask(task.id)} /> {/* task.id 전달 */}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;