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
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Work</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Contact</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavigationBar;
