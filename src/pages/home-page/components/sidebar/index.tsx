import styled from "styled-components"
import { colors } from "src/constants/colors";
import { Button } from "src/components/button";
import { NavLink } from "react-router";

const S = {
  Sidebar: styled.aside`
    width: 250px;
    padding: 8px;
    background-color: ${colors.navy[2]};
    /* height: 100%; */
  `,
  Nav: styled.nav`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
  NavButton: styled(Button)`
    height: 40px;
  `,
};

const SideButton = ({ name, path }: {name: string, path: string}) => {
  return <S.NavButton>
    <NavLink to={path}>{name}</NavLink>
  </S.NavButton>;
}

export const Sidebar = () => {
  return <S.Sidebar>
    <S.Nav>
      <S.NavButton>Dashboard</S.NavButton>
    </S.Nav>
  </S.Sidebar>;
}