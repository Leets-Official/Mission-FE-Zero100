import React from 'react';
import styled from 'styled-components';
import Button from './common/Button'; 

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;           
  max-width: 600px; 
  margin-left: auto;           // ✅ 가운데 정렬 보조
  margin-right: auto;
  
`;

const Category = ({ filter, setFilter }) => {
  const filters = ['all', 'active', 'completed'];
  // 할 일 목록은 all, active, completed 버튼 3가지로 필터링 할 수 있게끔 
  
  return (
    <Wrapper>
      {filters.map((f) => (
        <Button
          key={f}  //f는 각각 all, active, completed
          onClick={() => setFilter(f)}
          variant={filter === f ? 'selected' : 'category'} // filter === 'completed'면 완료된 것만 보기 모드가 된다.
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </Button>
      ))}
    </Wrapper>
  );
};

export default Category;
