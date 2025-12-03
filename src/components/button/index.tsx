import styled from "styled-components"
import { colors } from "src/constants/colors";

export const Button = styled.button`
  border: none;
  background-color: transparent;
  font-family: 'Montserrat';
  font-size: 16px;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;  
  transition: background-color 0.1s ease-out;

  &:hover {
    background-color: ${colors.navy[3]};
  }
`;