import styled, { css } from "styled-components"
import { colors } from "src/constants/colors";
import { NavLink } from "react-router";
import { routes } from "src/constants/routes"
import { defaultButtonStyles } from "src/constants/styles";
import { useLocation } from "react-router";

const sideBarRoutes = [
  { name: 'Home', path: routes.home },
  { name: 'Delegations', path: routes.delegations },
]

const S = {
  Sidebar: styled.aside`
    width: 215px;
    padding: 8px;
    background-color: ${colors.navy[2]};
  `,
  Nav: styled.nav`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
  NavLink: styled(NavLink)<{ isSelected?: boolean }>`
    ${defaultButtonStyles};
    text-decoration: none;
    color: ${colors.white};
    padding: 12px 4px;

    &:hover {
      color: ${colors.white};
    }

    ${({ isSelected }) => isSelected && css`
      background-color: ${colors.blue[1]};
      &:hover {
        background-color: ${colors.blue[1]};
      };

    `}
  `,
};

export const Sidebar = () => {
  const location = useLocation();

  return <S.Sidebar>
    <S.Nav>
      {sideBarRoutes.map(({ name, path }) => (
        <S.NavLink key={path} to={path} isSelected={path === location.pathname}>
          {name}
        </S.NavLink>
      ))}
    </S.Nav>
  </S.Sidebar>;
}