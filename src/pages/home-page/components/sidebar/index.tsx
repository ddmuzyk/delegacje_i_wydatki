import styled from "styled-components"
import { colors } from "src/constants/colors";

const S = {
  Sidebar: styled.aside`
    width: 250px;
    padding: 8px;
    background-color: ${colors.navy[2]};
    /* height: 100%; */
  `,
  NavButton: styled.button`

  `,
};

export const Sidebar = () => {
  return <S.Sidebar>Sidebar</S.Sidebar>;
}