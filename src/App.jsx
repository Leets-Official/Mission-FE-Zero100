import "./index.css";
import Text from "./component/Text";
import Input from "./component/Input";
import Button from "./component/Button";
import Checkbox from "./component/Checkbox";

function App() {
  return (
    <div className="app-container">
      {/* text part */}
      <Text />

      {/* input part */}
      <Input />
     {/* button part */}
      <Button />
      {/* checkbox part */}
      <Checkbox />
    </div>
  );
}

export default App;
