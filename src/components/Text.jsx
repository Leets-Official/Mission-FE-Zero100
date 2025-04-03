import styled from 'styled-components';

const StyledText = styled.span`
  font-size: 1.1rem;
  color: #333;
`;

function Text({ children }) {
  return <StyledText>{children}</StyledText>;
}

export default Text;
