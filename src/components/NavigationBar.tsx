import { ReactComponent as Logo } from '@assets/logo.svg';
import React, { useCallback } from 'react';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { PATH_ABOUT, PATH_EDUCATION } from '@/Routes';

type NavigationBarProps = {
  toogleNavBar: (arg1: boolean) => void;
  isToggled: boolean;
};

const NavigationBar: React.FC<NavigationBarProps> = ({
  isToggled,
  toogleNavBar,
}: NavigationBarProps) => {
  const toggle = useCallback(() => toogleNavBar(!isToggled), [
    toogleNavBar,
    isToggled,
  ]);

  return (
    <Navbar light expand="sm" fixed="top" color="light">
      <NavbarBrand href="/" className="logo">
        <Logo />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isToggled} navbar className="justify-content-end">
        <Nav navbar={!isToggled} vertical={isToggled}>
          <NavItem>
            <NavLink>
              <Link to="/" onClick={() => toogleNavBar(false)}>
                Home
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to={PATH_ABOUT} onClick={() => toogleNavBar(false)}>
                About
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to={PATH_EDUCATION} onClick={() => toogleNavBar(false)}>
                Education
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/" disabled>
              Work
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/" disabled>
              Contact
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavigationBar;
