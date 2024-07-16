import styled from 'styled-components'

export const NavHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
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
export const NavContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`
