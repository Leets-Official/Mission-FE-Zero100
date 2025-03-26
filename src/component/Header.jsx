import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  margin: 20px;
`

const Header = () => {
  return <HeaderContainer>TodoMatic</HeaderContainer>
}

export default Header
