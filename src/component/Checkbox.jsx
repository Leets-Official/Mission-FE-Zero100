import React from 'react'

const Checkbox = () => {
  return (
    <div>
      <h2>3 tasks remaining</h2>
      <ul className="task-list">
        <li className="task-item">
          <input type="checkbox" checked />
          <span>Eat</span>
          <div className="task-actions">
            <button>Edit Eat</button>
            <button>Delete Eat</button>
          </div>
        </li>
        <li className="task-item">
          <input type="checkbox" />
          <span>Sleep</span>
          <div className="task-actions">
          <button>Edit Sleep</button>
          <button>Delete Sleep</button>
          </div>
        </li>
        <li className="task-item">
          <input type="checkbox" />
          <span>Repeat</span>
          <div className="task-actions">
          <button>Edit Repeat</button>
          <button>Delete Repeat</button>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Checkbox
