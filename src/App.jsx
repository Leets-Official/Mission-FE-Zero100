import Text from "./component/text";
import Button from "./component/button";
import Checkbox from "./component/checkbox";
import Input from "./component/input.jsx";
import {useState} from "react";

function App() {

  const [text,setText] = useState("");
  const handleClick = () => {
    alert("click");
  };


  return (
    <div>
      <Text>TodoMatic</Text> <br />
      <Text>What needs to be done?</Text>
      <Input
      value={text}
      onChange={(e) => setText(e.target.value)}
      />
      <Button onClick = {handleClick}>Add</Button><br />
      <Button onClick = {handleClick}>Show all tasks </Button>
      <Button onClick = {handleClick}>Show active tasks</Button>
      <Button onClick = {handleClick}>Show completed tasks</Button>
      <Text>3 tasks remaining</Text> <br />
      <label>
        <ul>
          <li><input type ="checkbox" /><span style={{fontSize:"25px"}}>Eat</span></li>
          <Button onClick = {handleClick}>Edit Eat</Button>
          <Button onClick = {handleClick}>Delete Eat</Button>
          <li><input type ="checkbox" /><span style={{fontSize:"25px"}}>Sleep</span></li>
          <Button onClick = {handleClick}>Edit Sleep</Button>
          <Button onClick = {handleClick}>Delete Sleep</Button>
          <li><input type ="checkbox" /><span style={{fontSize:"25px"}}>Repeat</span></li>
          <Button onClick = {handleClick}>Edit Repeat</Button>
          <Button onClick = {handleClick}>Delete Repeat</Button>
        </ul>
        
      </label>
    </div>
  );
}

export default App;