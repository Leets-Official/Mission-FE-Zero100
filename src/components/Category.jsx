import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
`;

const Button = styled.button`
  padding: 0.6rem 1.5rem;
  border: 1px solid ${({ active }) => (active ? '#000' : '#ddd')};
  font-size: 1rem;
  text-decoration: ${({ active }) => (active ? 'underline' : 'none')};
  background: none;
  cursor: pointer;
`;

function Category({ filter, setFilter }) {
  const filters = ['All', 'Active', 'Completed'];
  return (
    <Wrapper>
      {filters.map(name => (
        <Button
          key={name}
          active={filter === name}
          onClick={() => setFilter(name)}
        >
          {name}
        </Button>
      ))}
    </Wrapper>
  );
}

export default Category;
