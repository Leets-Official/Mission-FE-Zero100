import styled from "styled-components";
import Text from "./component/Text";
import Input from "./component/Input";
import Button from "./component/Button";
import Checkbox from "./component/Checkbox";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // width: 100%;
`;

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
