import React from 'react'
import styled from "styled-components";

const TextContainer = styled.text`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Text = () => {
  return (
    <TextContainer>
       <h1>TodoMatic</h1>
       <h2>What needs to be done?</h2>
    </TextContainer>
  )
}

export default Text
