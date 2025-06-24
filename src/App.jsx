import Heading from './components/Heading';
import Button from './components/Button';
import Input from './components/Input';
import Checkbox from './components/Checkbox';

function App() {
  return (
    <div>
      <Heading text="TodoMatic" level={1} />
      <Heading text="What needs to be done?" level={2} />

      <div>
        <Input placeholder="Enter a task" />
        <Button label="Add" />
      </div>

      <div style={{ marginTop: '1rem' }}>
        <Button label="Show all tasks" />
        <Button label="Show active tasks" />
        <Button label="Show completed tasks" />
      </div>

      <Heading text="3 tasks remaining" level={2} />

      <div>
        <Checkbox label="Eat" />
        <Button label="Edit Eat" />
        <Button label="Delete Eat" />
      </div>

      <div>
        <Checkbox label="Sleep" />
        <Button label="Edit Sleep" />
        <Button label="Delete Sleep" />
      </div>

      <div>
        <Checkbox label="Repeat" />
        <Button label="Edit Repeat" />
        <Button label="Delete Repeat" />
      </div>
    </div>
  );
}

export default App;