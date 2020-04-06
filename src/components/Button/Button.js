import styled from 'styled-components';

const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: ${({ theme }) => theme.bgColor};
`;

export default Button;
