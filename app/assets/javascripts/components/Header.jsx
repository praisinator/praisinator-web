import React from 'react';
import Relay from 'react-relay';
import {IndexLink, Link} from 'react-router';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavbarCollapse from 'react-bootstrap/lib/NavbarCollapse';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import Nav from 'react-bootstrap/lib/Nav';

class Header extends React.Component {
    render() {
        return (
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">Praisinator</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              Drawer Button
            </Nav>
          </Navbar>
        );
    }
}

export default Header;