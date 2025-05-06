import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
  margin-top: 100px;
`
const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 40px; // 상단 제목과 버튼 사이 간격 유지
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`

const StyledButton = styled(Link)`
  padding: 10px 0;
  background-color: lightgrey;
  color: black;
  font-weight: bold;
  border-radius: 25px;
  width: 180px;
  font-size: 20px;
  text-align: center;
  text-decoration: none;
  width: 250px;
`

const Main = () => {
  return (
    <Wrapper>
      <Title>OO's TODO</Title>
      <ButtonGroup>
        <StyledButton to='/login'>로그인</StyledButton>
        <StyledButton to='/signup'>회원가입</StyledButton>
      </ButtonGroup>
    </Wrapper>
  )
}

export default Main
