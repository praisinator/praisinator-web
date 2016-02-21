import React from 'react';
import Relay from 'react-relay';
import {IndexLink, Link} from 'react-router';
import Navbar from 'react-bootstrap/lib/Navbar';
import classNames from 'classnames';
import NavbarCollapse from 'react-bootstrap/lib/NavbarCollapse';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import Nav from 'react-bootstrap/lib/Nav';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';


import TeamLink from './TeamLink';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      drawerOpen: false
    };
  }
  toggleDrawer = (e) => {
    if (this.state.drawerOpen){
      this.setState({drawerOpen: false});
    } else {
      this.setState({drawerOpen: true})
    }
  };
  renderTeams() {
    console.log('in here');
    return (
    <span>
      <TeamLink toggleDrawer={this.toggleDrawer}/>
      <TeamLink toggleDrawer={this.toggleDrawer}/>
      <TeamLink toggleDrawer={this.toggleDrawer}/>
    </span>
    )
  }
    render() {
      var drawer = classNames({
      'open': this.state.drawerOpen,
      'drawer': true
      });
      var drawerIcon = classNames({
        'open': this.state.drawerOpen,
        'drawer-icon': true
      })
      return (
        <span>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#"><div id="logo"/></a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav onClick={this.toggleDrawer}>
            <div className={drawerIcon}>
              <span></span>
              <span></span>
              <div className="drawer-text"> teams </div>
            </div>
          </Nav>
        </Navbar>
        <div className={drawer}>
          <Grid>
            <Row>
              <h2> Pick A Team </h2>
              {this.renderTeams()}
            </Row>
          </Grid>
        </div>
        </span>
      );
    }
}

export default Header;
