import {useState} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdClose} from 'react-icons/md'
import {
  NavHeader,
  HeaderHeading,
  MenuButton,
  NavContainer,
  NavItem,
  MobileNavContainer,
  MobileNavItem,
} from './styledComponents'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <NavHeader>
        <HeaderHeading>Github Profile Visualizer</HeaderHeading>
        <MenuButton onClick={toggleMenu}>
          {isMenuOpen ? (
            <MdClose size={20} color="#f8fafc" />
          ) : (
            <GiHamburgerMenu size={20} color="#f8fafc" />
          )}
        </MenuButton>
        <NavContainer>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/">Repositories</Link>
          </NavItem>
          <NavItem>
            <Link to="/">Analysis</Link>
          </NavItem>
        </NavContainer>
        {isMenuOpen && (
          <MobileNavContainer>
            <MobileNavItem>
              <Link to="/">Home</Link>
            </MobileNavItem>
            <MobileNavItem>
              <Link to="/">Repositories</Link>
            </MobileNavItem>
            <MobileNavItem>
              <Link to="/">Analysis</Link>
            </MobileNavItem>
          </MobileNavContainer>
        )}
      </NavHeader>
    </>
  )
}

export default withRouter(Header)
