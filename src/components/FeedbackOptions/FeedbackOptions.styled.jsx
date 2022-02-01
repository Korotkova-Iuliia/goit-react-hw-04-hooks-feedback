import styled from 'styled-components';
export const Button = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  &:nth-child(2) {
    color: green;
    border: 2px solid green;
  }
  &:nth-child(3) {
    color: orange;
    border: 2px solid orange;
    margin-left: 2em;
    margin-right: 2em;
  }
  &:nth-child(4) {
    color: red;
    border: 2px solid red;
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.25);
    color: white;
    border: 2px solid white;
    background-color: gray;
    :nth-child(1) {
      color: green;
      border: 2px solid green;
    }
  }
`;
