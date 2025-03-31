import styled from 'styled-components';
import Input from './Input';
import Button from './Button';

const AddContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

function AddTodo({ value, onChange, onAdd }) {
  return (
    <AddContainer>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <Button label="Add" onClick={onAdd} />
    </AddContainer>
  );
}

export default AddTodo;
