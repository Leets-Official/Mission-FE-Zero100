import styled from 'styled-components';
import Input from './Input';
import Button from './Button';

const AddWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
`;

function AddTodo({ input, setInput, onAdd, isEditing }) {
  return (
    <AddWrapper>
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder=""
      />
      <Button
        label={isEditing ? 'Save' : 'Add'}
        onClick={onAdd}
        variant="add"
      />
    </AddWrapper>
  );
}

export default AddTodo;
