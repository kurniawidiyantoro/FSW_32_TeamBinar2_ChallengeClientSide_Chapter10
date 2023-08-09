import React from 'react';
import { connect } from 'react-redux';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';


function NavbarUser({ userEmail }) {
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavItem>
        <NavbarBrand className="ps-3">{`Welcome, ${userEmail}`}</NavbarBrand>
        </NavItem>
        
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
const mapStateToProps = (state) => ({
  userEmail: state.reducer.email,
});

export default connect(mapStateToProps)(NavbarUser);
