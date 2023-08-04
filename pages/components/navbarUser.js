import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

function NavbarUser(args) {
  return (
    <div>
      <Navbar {...args} color="dark" dark expand="md">
        <NavbarBrand className="ps-3">Team 2</NavbarBrand>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink href="/editprofile">Edit Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/" className="pe-3">Logout</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavbarUser;
