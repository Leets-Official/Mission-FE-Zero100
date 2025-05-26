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

const button = styled(Link)`
  background-color: lightgrey;
  color: black;
  border-radius: 25px;
  font-size: 20px;
  width: 250px;
  padding: 10px 0;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
`

const Main = () => {
  return (
    <Wrapper>
      <Title>은서's TODO</Title>
      <ButtonGroup>
        <button to='/login'>로그인</button>
        <button to='/signup'>회원가입</button>
      </ButtonGroup>
    </Wrapper>
  )
}

export default Main
