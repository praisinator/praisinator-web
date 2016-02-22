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
    return this.props.root.teams.edges.map(({node}) => <TeamLink key={node.id} team={node} toggleDrawer={this.toggleDrawer.bind(this)}/>);
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
              <IndexLink to="/"><div id="logo"/></IndexLink>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav onClick={this.toggleDrawer}>
            <div className={drawerIcon}>
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

export default Relay.createContainer(Header, {
    fragments: {
        root: () => Relay.QL`
            fragment on Query {
                teams(first: 10) {
                    edges {
                        node {
                          id,
                          ${TeamLink.getFragment('team')}
                        }
                    }
                }
            }
        `
    }
});
