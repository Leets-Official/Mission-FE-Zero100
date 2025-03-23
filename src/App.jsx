import { useState } from 'react';
import Text from './components/Text';
import Button from './components/Button';
import Input from './components/Input';
import Checkbox from './components/Checkbox';

function App() {
  // 📌 할 일 목록을 상태(state)로 관리
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Eat', completed: true },
    { id: 2, name: 'Sleep', completed: false },
    { id: 3, name: 'Repeat', completed: false },
  ]);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>TodoMatic</h1>
      <h2>What needs to be done?</h2>

      {/* 입력창과 추가 버튼 */}
      <div style={{ marginBottom: '1rem' }}>
        <Input value="" onChange={() => {}} />
        <Button label="Add" onClick={() => {}} />
      </div>

      {/* 필터 버튼들 */}
      <div style={{ marginBottom: '1rem' }}>
        <Button label="Show all tasks" onClick={() => {}} />
        <Button label="Show active tasks" onClick={() => {}} />
        <Button label="Show completed tasks" onClick={() => {}} />
      </div>

      {/* 📌 실제 남은 할 일 수 계산 */}
      <h3>{tasks.length} tasks remaining</h3>

      {/* 할 일 목록 표시 */}
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {tasks.map((task) => (
        <li key={task.id} style={{ marginBottom: '1rem' }}>
         <div>
          <Checkbox checked={task.completed} onChange={() => {}} />
          <Text>{task.name}</Text>
         </div>
         <div style={{ marginLeft: '1.5rem' }}>
          <Button label={`Edit ${task.name}`} onClick={() => {}} />
          <Button label={`Delete ${task.name}`} onClick={() => {}} />
         </div>
        </li>
       ))}
      </ul>

    </div>
  );
}

export default App;
