export default function Category({ current, onChange }) {
  return (
    <div className="category">
      <button onClick={() => onChange('All')} className={current === 'All' ? 'active' : ''}>All</button>
      <button onClick={() => onChange('Active')} className={current === 'Active' ? 'active' : ''}>Active</button>
      <button onClick={() => onChange('Completed')} className={current === 'Completed' ? 'active' : ''}>Completed</button>
    </div>
  );
}
