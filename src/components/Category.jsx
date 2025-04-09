import styled from "styled-components";
import { useTodo } from "../contexts/TodoContext";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem ;
  margin-bottom: 2rem;
  
`;

const Button = styled.button`
  width: 120px;
  padding: 0.5rem;
  border: 1.3px solid ${({ active }) => (active ? "#000" : "#ddd")};
  font-size: 1rem;
  text-decoration: ${({ active }) => (active ? "underline" : "none")};
  background: none;
  cursor: pointer;
`;

function Category() {
  const { filter, setFilter } = useTodo();
  const filters = ["All", "Active", "Completed"];

  return (
    <Wrapper>
      {filters.map((name) => (
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
