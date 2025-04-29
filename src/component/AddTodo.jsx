
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent";

function AddTodo({ inputValue, setInputValue, addTask }) {
  return (
    <div className="add-todo">
      <div className="input-container">
        <InputComponent
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="add-button-container">
        <ButtonComponent label="Add" onClick={addTask} />
      </div>
    </div>
  );
}

export default AddTodo;