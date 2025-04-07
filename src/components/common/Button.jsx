import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.7rem 1rem;
  font-size: 1rem;
  cursor: pointer;

  /* delete 버튼 */
  ${({ variant }) =>
  variant === 'danger' &&
  css`
    background-color: #e74c3c;
    color: white;
    border: 2px solid #e74c3c;
    padding: 0.5rem 1rem;
    margin: 0.3rem;
    min-width: 80px;
    border-radius: 0;
    flex: none; // ✅ 버튼 크기 고정
  `}


    ${({ variant }) =>
  variant === 'category' &&
  css`
    background-color: white;
    color: black;
    border: 2px solid black;
    padding: 0.5rem 1rem;
    margin: 0.3rem;
    min-width: 80px;
    border-radius: 0;
    flex: none; // ✅ 버튼 크기 고정
  `}

${({ variant }) =>
  variant === 'selected' &&
  css`
    background-color: white;
    color: black;
    font-weight: bold;
    text-decoration: underline;
    border: 2px solid black;
    min-width: 80px;
    flex: none; // ✅ 버튼 크기 고정
  `}



    /* Add버튼 */
  ${({ variant }) =>
  variant === 'add' &&
  css`
    background-color: black;
    color: white;
    border: none;
  `}

  /* 기본스타일 */
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
