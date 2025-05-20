// src/component/TodoComponent.jsx
import React, { useState } from 'react';
import CheckboxComponent from './CheckboxComponent'; // CheckboxComponent가 있다고 가정
import ButtonComponent from './ButtonComponent';   // ButtonComponent 사용
import TextComponent from './TextComponent';     // TextComponent가 있다고 가정 (선택 사항)

// CSS 클래스명을 위한 별도 파일 또는 App.css에 정의된 클래스 사용
// import './TodoComponent.css'; // 만약 TodoComponent.css 파일이 있다면

function TodoComponent({ task, toggleTask, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(task.name);

  const handleEdit = () => {
    console.log("TodoComponent: handleEdit for task:", task);
    setIsEditing(true);
    setEditedName(task.name); // 수정 시작 시 현재 이름으로 입력 필드 초기화
  };

  const handleSave = () => {
    console.log("TodoComponent: handleSave for task id:", task.id, "new name:", editedName);
    if (editedName.trim()) {
      editTask(task.id, editedName.trim()); // App.jsx의 editTask 호출
      setIsEditing(false);
    } else {
      alert("Task name cannot be empty.");
      // 선택: 빈 값일 경우 원래 이름으로 되돌리거나, 수정 모드 유지 등
      // setEditedName(task.name);
      // setIsEditing(false);
    }
  };

  const handleCancel = () => {
    console.log("TodoComponent: handleCancel for task:", task);
    setIsEditing(false);
    setEditedName(task.name); // 취소 시 원래 이름으로 복원
  };

  const handleNameChange = (e) => {
    setEditedName(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <div className={`task-item ${isEditing ? 'editing' : ''} ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        // --- 수정 모드 UI ---
        <>
          <div className="edit-label">
            {/* TextComponent가 있다면 사용, 없다면 일반 span/p 태그 사용 */}
            {TextComponent ? <TextComponent text={`New name for ${task.name}`} /> : <span>New name for {task.name}</span>}
          </div>
          <input
            type="text"
            value={editedName}
            onChange={handleNameChange}
            onKeyPress={handleKeyPress}
            className="edit-input" // App.css 또는 TodoComponent.css에 스타일 정의
            autoFocus
          />
          <div className="task-actions">
            <ButtonComponent onClick={handleCancel} className="cancel-button">
              Cancel
            </ButtonComponent>
            <ButtonComponent onClick={handleSave} className="save-button">
              Save
            </ButtonComponent>
          </div>
        </>
      ) : (
        // --- 일반 모드 UI ---
        <>
          <div className="task-row">
            {/* CheckboxComponent가 있다고 가정 */}
            <CheckboxComponent
              isChecked={task.completed}
              onChange={() => toggleTask(task.id)} // App.jsx의 toggleTask 호출
            />
            <span
              className="task-name" // App.css 또는 TodoComponent.css에 스타일 정의
              onClick={() => !isEditing && toggleTask(task.id)} // 텍스트 클릭으로도 토글 (수정 중 아닐 때만)
            >
              {/* TextComponent가 있다면 사용, 없다면 그냥 텍스트 표시 */}
              {TextComponent ? <TextComponent text={task.name} /> : task.name}
            </span>
          </div>
          <div className="task-actions">
            <ButtonComponent onClick={handleEdit} className="edit-button">
              Edit
            </ButtonComponent>
            <ButtonComponent onClick={() => deleteTask(task.id)} className="delete-button">
              Delete
            </ButtonComponent>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoComponent;