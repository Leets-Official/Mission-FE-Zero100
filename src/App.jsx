import Text from './component/Text'
import Input from './component/Input'
import Button from './component/Button'
import CheckBox from './component/CheckBox'
import Header from './component/Header'

function App() {
  const tasks = [
    { id: 'eat', label: 'Eat', checked: true },
    { id: 'sleep', label: 'Sleep', checked: false },
    { id: 'repeat', label: 'Repeat', checked: false },
  ]

  return (
    <div style={{ padding: '10px' }}>
      <Header />
      <div className='Header'>
        <Text type='h2' text='What needs to be done?' />
      </div>

      <div>
        <Input />
        <Button>Add</Button>
      </div>

      <div>
        <Button>Show All tasks</Button>
        <Button>Show active tasks</Button>
        <Button>Show completed tasks</Button>
      </div>

      <Text type='h2' text='3 tasks remaining'></Text>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <CheckBox id={task.id} />
            <label>{task.label}</label>
            <div>
              <Button>{`Edit ${task.label}`}</Button>
              <Button>{`Delete ${task.label}`}</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
