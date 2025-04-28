import styled from 'styled-components';


const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  font-weight: bold;
  margin-bottom: 0rem;
`;

const Subtitle = styled.h2`
  font-size: 1.25rem;
  text-align: center;
  font-weight: 400;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  color: black !important;
`;

function Header() {
  return (
    <HeaderWrapper>
    <Title>TodoMatic</Title>
    <Subtitle>What needs to be done?</Subtitle>
  </HeaderWrapper>
  );
}

export default Header;
