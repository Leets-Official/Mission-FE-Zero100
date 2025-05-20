import React from 'react';
import styled from "styled-components";

const HeaderContainer = styled.text`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Header = () => {
    return (
      <HeaderContainer>
         <h1>TodoMatic</h1>
      </HeaderContainer>
    );
  };
  
  export default Header
  