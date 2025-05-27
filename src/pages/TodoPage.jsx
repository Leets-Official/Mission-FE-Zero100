// src/pages/TodoPage.js
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


import Header from '../component/Header1';      // .jsx 또는 .js 일 수 있음
import AddTodo from '../component/AddTodo';    // .jsx 또는 .js 일 수 있음
import Category from '../component/Category';  // .jsx 또는 .js 일 수 있음
import TodoList from '../component/TodoList';  // .jsx 또는 .js 일 수 있음

// TodoPage에서 직접 "../App.css"를 import 할 필요는 없습니다.
// App.js에서 전역으로 import 하고 있기 때문입니다.

const LOCAL_STORAGE_KEY_TODOS = "react-todo-app.tasks"; // 로그인 정보와 구분되는 키

function TodoPage() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  const [tasks, setTasks] = useState(() => {
    try {
      const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY_TODOS);
      // 저장된 tasks가 있다면, editing: false 기본값을 추가 (하위 호환성)
      return storedTasks 
        ? JSON.parse(storedTasks).map(task => ({ ...task, editing: task.editing || false })) 
        : [];
    } catch (error) {
      console.error("Failed to load tasks from localStorage:", error);
      return [];
    }
  });

  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all"); // 필터 상태 (all, active, completed)

  // 1. 로그인 상태 확인
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser));
    } else {
      alert('로그인이 필요합니다.');
      navigate('/login'); // 로그인 안되어 있으면 로그인 페이지로 강제 이동
    }
  }, [navigate]);

  // 2. tasks 배열 변경 시 localStorage에 저장
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY_TODOS, JSON.stringify(tasks));
    } catch (error)
    {
      console.error("Failed to save tasks to localStorage:", error);
    }
  }, [tasks]);

  // 로그아웃 처리
  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setCurrentUser(null);
    alert('로그아웃 되었습니다.');
    navigate('/login'); // 로그아웃 후 로그인 페이지로 이동
  };

  // 새 할 일 추가
  const addTask = () => {
    if (inputValue.trim()) {
      const newTask = {
        // id: Date.now() + Math.random(), // 고유 ID 보장
        id: crypto.randomUUID(), // 더 현대적이고 고유한 ID 생성 방식
        name: inputValue.trim(),
        completed: false,
        editing: false, // 새로 추가된 작업은 편집 모드가 아님
      };
      setTasks(prevTasks => [...prevTasks, newTask]);
      setInputValue(""); // 입력 필드 초기화
    }
  };

  // 할 일 완료/미완료 토글
  const toggleTask = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // 할 일 삭제
  const deleteTask = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  // 할 일 편집 모드 시작
  const startEditTask = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        // 클릭된 task만 editing: true로, 나머지는 false로 설정 (한 번에 하나만 편집)
        task.id === id ? { ...task, editing: true } : { ...task, editing: false }
      )
    );
  };

  // 할 일 편집 완료 (저장)
  const finishEditTask = (id, newName) => {
    if (newName && newName.trim()) {
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === id ? { ...task, name: newName.trim(), editing: false } : task
        )
      );
    } else {
      // 새 이름이 비어있다면 편집 취소 (또는 사용자에게 알림)
      cancelEditTask(id);
    }
  };

  // 할 일 편집 취소
  const cancelEditTask = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, editing: false } : task // 해당 task의 editing만 false로
      )
    );
  };

  // 현재 필터에 따라 보여줄 할 일 목록
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true; // 'all' 또는 기본값
  });
  
  // 완료되지 않은 할 일의 수
  const activeCount = tasks.filter(task => !task.completed).length;

  // currentUser가 없을 경우 (로그인 정보 로딩 중 또는 비로그인 리다이렉트 전) 로딩 표시
  if (!currentUser) {
    return <p style={{ textAlign: 'center', marginTop: '50px' }}>Loading user data...</p>;
  }

  return (
    // App.js의 .app-container가 이미 전체를 감싸고 있으므로,
    // TodoPage의 최상위는 div가 아닌 React.Fragment (<> </>) 여도 괜찮습니다.
    // 여기서는 구조적 명확성을 위해 div를 유지합니다.
    <div> 
      {/* Header 컴포넌트에 사용자 이름 등을 prop으로 전달 */}
      <Header userName={currentUser.name} /> 
      
      <button 
        onClick={handleLogout} 
        className="form-button secondary" // App.css의 스타일 재활용
        style={{ 
          position: 'absolute', 
          top: '30px', // App.title 높이 고려
          right: '30px', 
          zIndex: 10  // 다른 요소 위에 보이도록
        }}
      >
        로그아웃
      </button>

      {/* 할 일 추가 입력폼 컴포넌트 */}
      <AddTodo
        inputValue={inputValue}
        setInputValue={setInputValue}
        addTask={addTask}
      />

      {/* 필터 버튼 그룹 컴포넌트 */}
      <Category 
        setFilter={setFilter} 
        currentFilter={filter} // 현재 선택된 필터를 전달하여 활성 버튼 표시
      />

      {/* 할 일 목록 표시 컴포넌트 */}
      <TodoList
        tasks={filteredTasks}          // 필터링된 할 일 목록
        toggleTask={toggleTask}        // 완료 토글 함수
        deleteTask={deleteTask}        // 삭제 함수
        startEditTask={startEditTask}  // 편집 시작 함수
        finishEditTask={finishEditTask} // 편집 저장 함수
        cancelEditTask={cancelEditTask} // 편집 취소 함수
        activeCount={activeCount}      // 남은 할 일 수 (CSS의 .tasks-remaining 에 필요)
      />
    </div>
  );
}

export default TodoPage;