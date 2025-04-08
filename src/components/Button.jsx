import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  cursor: pointer;
  border: 1px solid gray;
  background-color: white;
  color: black;

  ${(props) =>
    props.$variant === 'add' &&
    css`
      width: 100%;
      background-color: black;
      color: white;
      font-size: 1.1rem;
    `}

  ${(props) =>
    props.$variant === 'delete' &&
    css`
      background-color: #c0392b;
      color: white;
      border: none;
    `}

  ${(props) =>
    props.$active &&
    css`
      border-color: black;
      text-decoration: underline;
    `}

    /* 반응형 추가 */
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }
`;

function Button({ label, onClick, variant, active, className, children }) {
  return (
    <StyledButton
      className={className}
      onClick={onClick}
      $variant={variant}
      $active={active}
    >
      {label || children}
    </StyledButton>
  );
}



export default Button;
