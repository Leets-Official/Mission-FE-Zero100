import styled from 'styled-components';

const HeaderWrapper = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Title>TodoMatic</Title>
    </HeaderWrapper>
  );
}

export default Header;
