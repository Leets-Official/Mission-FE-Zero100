import React from 'react'

const Button = ({label, onClick}) => {
  return (
    <div className="filters">
        <button>Show all tasks</button>
        <button>Show active tasks</button>
        <button>Show completed tasks</button>
      </div>
  )
}

export default Button;
