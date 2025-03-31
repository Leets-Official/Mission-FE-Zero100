import React, { useState } from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const StyledButton = styled.button`
  width: 130px;
  padding: 7px;
  background-color: white;
  border: 2px solid ${(props) => (props.active ? "black" : "#ccc")};
  border-radius: 0px;
  font-size: 14px;
`;

const Button = () => {
  const [activeButton, setActiveButton] = useState("All");

  return (
    <ButtonContainer>
      {["All", "Active", "Completed"].map((label) => (
        <StyledButton
          key={label}
          active={activeButton === label}
          onClick={() => setActiveButton(label)}
        >
          {label}
        </StyledButton>
      ))}
    </ButtonContainer>
  );
};

export default Button;
