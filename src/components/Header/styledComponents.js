import styled from 'styled-components'

export const NavHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  padding: 10px;
  background: none;
  position: relative;
`

export const HeaderHeading = styled.p`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 700;
  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`

export const MenuButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 2;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`

export const NavContainer = styled.ul`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`

export const MobileNavContainer = styled.ul`
  position: absolute;
  top: 0%;
  right: 0;
  background-color: #1d2537;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #0f172a;
  border-radius: 4px;
  padding-left: 0px;
  padding: 12px 24px;
  box-shadow: 0 0 10px #1d2537;
  z-index: 1;
`

export const NavItem = styled.li`
  color: #f8fafc;
  font-family: 'Roboto';
  font-weight: 700;
  list-style-type: none;

  @media screen and (min-width: 1024px) {
    font-size: 16px;
    margin-left: 28px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export const MobileNavItem = styled.li`
  color: #f8fafc;
  font-family: 'Roboto';
  list-style-type: none;
  margin-top: 12px;
  margin-bottom: 12px;
  a {
    color: inherit;
    text-decoration: none;
  }
`
