import { default as appRoutes } from '@/Routes';
import { ReactComponent as Logo } from '@assets/logo.svg';
import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
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
          {appRoutes.map(
            (route) =>
              route.isNavigation && (
                <NavItem>
                  <NavLink>
                    <Link
                      to={route.path as string}
                      onClick={() => toogleNavBar(false)}
                    >
                      {route.name}
                    </Link>
                  </NavLink>
                </NavItem>
              )
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavigationBar;
