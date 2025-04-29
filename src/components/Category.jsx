import React from 'react'
import styled from 'styled-components'
import Button from './common/Button'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  max-width: 600px;
  margin-left: auto; // ✅ 가운데 정렬 보조
  margin-right: auto;
`

const Category = ({ filter, setFilter }) => {
  const filters = ['All', 'Active', 'Completed']
  // 할 일 목록은 All, Active, Completed 버튼 3가지로 필터링 할 수 있게끔

  return (
    <Wrapper>
      {filters.map((f) => (
        <Button
          key={f}
          variant={filter === f ? 'selected' : 'category'}
          onClick={() => setFilter(f)}
        >
          {f}
        </Button>
      ))}
    </Wrapper>
  )
}

export default Category
