import Text from "./component/text";
import Button from "./component/button";
import Checkbox from "./component/checkbox";
import Input from "./component/input.jsx";
import {useState} from "react";

function App() {

  const [task,setText] = useState("");
  const handleClick = () => {
    alert("click");
  };


  return (
    <div>
      <Text>TodoMatic</Text> <br />
      <Text>What needs to be done?</Text>
      <div
  style={{
    display: 'flex',
  }}
>
  <Input
    value={task}
    onChange={(e) => setText(e.target.value)}
  />
  <Button onClick={handleClick}>Add</Button>
</div>

<div
  style={{
    display: 'flex',
  }}
>
  <Button onClick={handleClick}>Show all tasks</Button>
  <Button onClick={handleClick}>Show active tasks</Button>
  <Button onClick={handleClick}>Show completed tasks</Button>
</div>
      <Text>3 tasks remaining</Text> <br />
        <ul>
          <li>
            <input type ="checkbox" />
            <span style={{fontSize:"25px"}}>Eat</span>
            </li>
          <Button onClick = {handleClick}>Edit Eat</Button>
          <Button onClick = {handleClick}>Delete Eat</Button>
          <li><input type ="checkbox" /><span style={{fontSize:"25px"}}>Sleep</span></li>
          <Button onClick = {handleClick}>Edit Sleep</Button>
          <Button onClick = {handleClick}>Delete Sleep</Button>
          <li><input type ="checkbox" /><span style={{fontSize:"25px"}}>Repeat</span></li>
          <Button onClick = {handleClick}>Edit Repeat</Button>
          <Button onClick = {handleClick}>Delete Repeat</Button>
        </ul>
    </div>
  );
}

export default App;