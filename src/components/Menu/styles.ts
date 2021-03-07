import styled from 'styled-components'

export const MenuWrapper = styled.nav``;

export const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const MenuListItem = styled.li`
  display: inline;
  font-weight: 600;
  font-size: 16px;
  padding: 15px;
  font-family: 'Nunito', sans-serif;
  &:first-child {
    font-size: 17px;
    font-weight: 900;
  }
`;

export const MenuListLink = styled.a`
  text-decoration: none;
  color: #4B5D68;

  &:visited {
    color: #4B5D68;
  }
  &:active {
    color: #212353;
  }
`;