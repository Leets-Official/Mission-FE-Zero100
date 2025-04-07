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
    `}

    /* 필터버튼(All, Active, Completed) */
  ${({ variant }) =>
    variant === 'category' &&
    css`
      background-color: white;
      color: black;
      flex: 1;
      min-width: 0;
    `}

    /* 선택된 필터 버튼 색을 검정으로 변환 */
  ${({ variant }) =>
    variant === 'selected' &&
    css`
      background-color: black;
      color: white;
      flex: 1;
      min-width: 0;
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
