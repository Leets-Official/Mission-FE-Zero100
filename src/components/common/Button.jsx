import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.7rem 1rem;
  font-size: 1rem;
  cursor: pointer;

//select 전 기존 all, active, completed 버튼
    ${({ variant }) =>
  variant === 'category' &&
  css`
    background-color: white;
    color: black;
    border: 2px solid gray;
    padding: 0.7rem;
    margin: 0.3rem;
    width: 140px;
    border-radius: 0;
    flex: none; // ✅ 버튼 크기 고정
  `}

  //select 후 기존 all, active, completed 버튼
${({ variant }) =>
  variant === 'selected' &&
  css`
    background-color: white;
    color: black;
    border: 2px solid black;
    padding: 0.7rem;
    margin: 0.3rem;
    width: 140px;
    border-radius: 0;
    text-decoration: underline;
    flex: none; // ✅ 버튼 크기 고정
  `}

    /* Add버튼 */
  ${({ variant }) =>
  variant === 'add' &&
  css`
    background-color: black;
    color: white;
    border: none;
    width: 500px;
    margin-left: 2rem;
    border-radius: 0;
  `}

   /* Edit 버튼 */ 
${({ variant }) =>
  variant === 'edit' &&
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
