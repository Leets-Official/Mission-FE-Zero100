import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  font-weight: bold;
  margin: 1px auto;
`;


const Header = () => {
  return <Title>TodoMatic</Title>; 
}

export default Header;

