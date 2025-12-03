import styled from "styled-components";
import { colors } from "src/constants/colors";

const S = {
  Header: styled.header`
    padding: 16px;
    background-color: #f5f5f5;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: ${colors.navy[2]};
  `,
};

export default function Header() {
  return <S.Header>Header</S.Header>;
}