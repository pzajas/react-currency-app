import styled from "styled-components"

const Button = styled.button`
  box-sizing: border-box;
  padding: 0;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 38px;
  height: 99%;

  font-size: 15px;
  color: black;

  background-color: rgb(213, 213, 213);

  &:hover {
    background-color: ${({ bg }) => bg};
  }
`
export default Button
