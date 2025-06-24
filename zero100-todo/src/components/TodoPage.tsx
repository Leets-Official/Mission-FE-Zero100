import React, { useState } from 'react';

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Completed', value: 'completed' },
];

const TodoPage = () => {
  const [tasks, setTasks] = useState<{
    id: number;
    text: string;
    completed: boolean;
  }[]>([
    { id: 1, text: 'Eat', completed: false },
    { id: 2, text: 'Eat', completed: false },
    { id: 3, text: 'Eat', completed: false },
  ]);
  const [filter, setFilter] = useState('all');
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState('');

  // 필터링된 리스트
  const filtered = tasks.filter(t =>
    filter === 'all' ? true : filter === 'active' ? !t.completed : t.completed
  );

  // 남은 task 수 (active만)
  const remaining = tasks.filter(t => !t.completed).length;

  // 작업 추가
  const handleAdd = () => {
    if (input.trim() === '') return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: input.trim(), completed: false },
    ]);
    setInput('');
  };

  // 작업 삭제
  const handleDelete = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  // 작업 완료 토글
  const handleToggle = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  // 작업 수정 시작
  const handleEdit = (id: number, text: string) => {
    setEditId(id);
    setEditText(text);
  };

  // 작업 수정 완료
  const handleEditSave = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, text: editText } : t));
    setEditId(null);
    setEditText('');
  };

  // 엔터로 추가
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleAdd();
  };

  return (
    <div style={{ minHeight: '100vh', background: '#fafafa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ background: '#fff', borderRadius: 10, boxShadow: '0 4px 24px #0001', padding: '38px 38px 32px 38px', minWidth: 500, maxWidth: 540, border: 'none' }}>
        <div style={{ fontWeight: 700, fontSize: '2.6rem', textAlign: 'center', marginBottom: 18, color: '#444', letterSpacing: '-1px' }}>TodoMatic</div>
        <div style={{ fontSize: '1.25rem', textAlign: 'center', marginBottom: 18, color: '#444' }}>What needs to be done?</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: 18 }}>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleInputKeyDown}
            style={{ width: '100%', height: 48, fontSize: '1.25rem', border: '2px solid #222', borderRadius: 0, padding: '0 12px', marginBottom: 0, boxSizing: 'border-box', background: '#fff' }}
            placeholder="할 일을 입력하세요"
          />
          <button onClick={handleAdd} style={{ width: '100%', height: 44, background: '#111', color: '#fff', fontWeight: 700, fontSize: '1.25rem', border: 'none', borderRadius: 0, marginTop: 8, marginBottom: 18, letterSpacing: '-1px' }}>Add</button>
        </div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 24, justifyContent: 'center' }}>
          {FILTERS.map(f => (
            <button
              key={f.value}
              style={{
                width: 120,
                height: 38,
                background: filter === f.value ? '#fff' : '#fff',
                border: '2px solid #222',
                borderRadius: 0,
                fontWeight: filter === f.value ? 700 : 400,
                fontSize: '1.1rem',
                color: '#222',
                cursor: 'pointer',
                textDecoration: filter === f.value ? 'underline' : 'none',
              }}
              onClick={() => setFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div style={{ fontWeight: 700, fontSize: '1.7rem', marginBottom: 18, color: '#444' }}>
          {remaining} tasks remaining
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          {filtered.map(task => (
            <div key={task.id} style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                <input type="checkbox" checked={task.completed} onChange={() => handleToggle(task.id)} style={{ width: 28, height: 28, accentColor: '#222', border: '2px solid #222', borderRadius: 2, marginRight: 6 }} />
                {editId === task.id ? (
                  <input
                    value={editText}
                    onChange={e => setEditText(e.target.value)}
                    onBlur={() => handleEditSave(task.id)}
                    onKeyDown={e => { if (e.key === 'Enter') handleEditSave(task.id); }}
                    autoFocus
                    style={{ fontSize: '1.25rem', flex: 1, color: '#222', fontWeight: 500, border: '2px solid #222', borderRadius: 4, padding: '0 8px', height: 32 }}
                  />
                ) : (
                  <span style={{ fontSize: '1.25rem', flex: 'none', color: '#222', fontWeight: 500, marginLeft: 0, marginRight: 0 }}>{task.text}</span>
                )}
              </div>
              <div style={{ display: 'flex', gap: 0, marginTop: 8 }}>
                <button
                  style={{ flex: 1, height: 40, background: '#fff', color: '#222', border: '2px solid #222', borderRadius: 0, fontWeight: 500, fontSize: '1.1rem', marginRight: 8 }}
                  onClick={() => editId === task.id ? handleEditSave(task.id) : handleEdit(task.id, task.text)}
                >
                  {editId === task.id ? 'Save' : 'Edit'}
                </button>
                <button
                  style={{ flex: 1, height: 40, background: '#d32f2f', color: '#fff', border: 'none', borderRadius: 0, fontWeight: 700, fontSize: '1.1rem' }}
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoPage; 