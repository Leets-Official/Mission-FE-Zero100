import React from 'react';
import styled from 'styled-components';
import Button from './common/Button'; 

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  width: 100%;           
  max-width: 600px;     
`;

const Category = ({ filter, setFilter }) => {
  const filters = ['all', 'active', 'completed'];

  return (
    <Wrapper>
      {filters.map((f) => (
        <Button
          key={f}
          onClick={() => setFilter(f)}
          variant="category"
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </Button>
      ))}
    </Wrapper>
  );
};

export default Category;
