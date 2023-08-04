import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

function Example(args) {
  return (
    <div>
      <Navbar {...args} color="dark" dark expand="md">
        <NavbarBrand href="/" className="ps-3">Team 2</NavbarBrand>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink href="/register">Register</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/login" className="pe-3">Login</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Example;