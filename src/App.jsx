import Text from './components/Text';
import Button from './components/Button';
import Checkbox from './components/Checkbox';
import Input from './components/Input';

function App() {
  const items = ["Eat", "Sleep", "Repeat"];
  return (
    <div>
      <h1>TodoMatic</h1>
      <h1>What needs to be done?</h1>

      <div>
        <Input />
        <Button>Add</Button>
      </div>

      <div>
        <Button>Show all tasks</Button>
        <Button>Show active tasks</Button>
        <Button>Show completed tasks</Button>
      </div>

      <h1>3 tasks remaining</h1>
      
      <ul>
      {items.map((item) => (
        <li key={item}>
          <Checkbox label={item} />
          <div>
            <Button>Edit {item}</Button>
            <Button>Delete {item}</Button>
          </div>
        </li>
      ))}
      </ul>
    </div>
  );
}

export default App;
