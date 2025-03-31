import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.h2`
  font-size: 1.25rem;
  text-align: center;
  font-weight: 400;
  margin-bottom: 2rem;
  color: #555;
`;

function Header() {
  return (
    <>
      <Title>TodoMatic</Title>
      <Subtitle>What needs to be done?</Subtitle>
    </>
  );
}

export default Header;
