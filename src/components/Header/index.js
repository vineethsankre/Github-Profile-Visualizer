import {withRouter} from 'react-router-dom'
import {
  NavHeader,
  HeaderHeading,
  NavContainer,
  NavItem,
} from './styledComponents'

const Header = props => (
  <>
    <NavHeader>
      <HeaderHeading>Github Profile Visualizer</HeaderHeading>
      <NavContainer>
        <NavItem>Home</NavItem>
        <NavItem>Repositories</NavItem>
        <NavItem>Analysis</NavItem>
      </NavContainer>
    </NavHeader>
  </>
)

export default Header
