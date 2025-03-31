import styled from 'styled-components';
import Button from './Button';

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

function Category({ current, onChange }) {
  const isSelected = (value) => current === value;

  return (
    <ButtonGroup>
      <Button
        label="All"
        onClick={() => onChange('all')}
        style={{ fontWeight: isSelected('all') ? 'bold' : 'normal' }}
      />
      <Button
        label="Active"
        onClick={() => onChange('active')}
        style={{ fontWeight: isSelected('active') ? 'bold' : 'normal' }}
      />
      <Button
        label="Completed"
        onClick={() => onChange('completed')}
        style={{ fontWeight: isSelected('completed') ? 'bold' : 'normal' }}
      />
    </ButtonGroup>
  );
}

export default Category;
