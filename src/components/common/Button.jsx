import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.7rem 1rem;
  font-size: 1rem;
  cursor: pointer;

  ${({ variant }) =>
    variant === 'danger' &&
    css`
      background-color: #e74c3c;
      color: white;
    `}

  ${({ variant }) =>
    variant === 'category' &&
    css`
      background-color: white;
      color: black;
      flex: 1;
      min-width: 0;
    `}

  ${({ variant }) =>
    !variant &&
    css`
      background-color: #f1f1f1;
      color: black;
    `}

  &:hover {
    opacity: 0.9;
  }
`;

const Button = ({ children, variant, ...props }) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
