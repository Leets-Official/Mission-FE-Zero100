import Text from './components/Text';
import Button from './components/Button';
import Checkbox from './components/Checkbox';
import Input from './components/Input';

function App() {
  return (
    <div>
      <h1>TodoMatic</h1>
      <h1>What needs to be done?</h1>
      <div>
        <Input placeholder=" "/>
        <Button>Add</Button>
      </div>
      <div>
        <Button>Show all tasks</Button>
        <Button>Show active tasks</Button>
        <Button>Show completed tasks</Button>
      </div>
      <h1>3 tasks remaining</h1>
      <ul>
        <li>
          <Checkbox label="Eat" />
          <div>
          <Button>Edit Eat</Button>
          <Button>Delete Eat</Button>
           </div>            
        </li>
        <li>
          <Checkbox label="Sleep" />
          <div>
          <Button>Edit Sleep</Button>
            <Button>Delete Sleep</Button>
           </div>
        </li>
        <li>
          <Checkbox label="Repeat" />
          <div>
          <Button>Edit Repeat</Button>
            <Button>Delete Repeat</Button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
