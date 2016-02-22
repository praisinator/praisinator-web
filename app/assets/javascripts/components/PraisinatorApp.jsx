import React from 'react';
import Relay from 'react-relay';
import Grid from 'react-bootstrap/lib/Grid';
import {Link} from 'react-router';

import Header from './Header';


class PraisinatorApp extends React.Component {
  render() {
    return (
      <Grid fluid data-framework="relay">
          <Header root={this.props.root}/>
          <div className="main-container">
            {this.props.children}
          </div>
        <footer className="info">
          <Grid>
            <div className="left"> <Link to="https://github.com/praisinator/praisinator-web">github.com/praisinator/praisinator-web </Link></div>
            <div className="right">  Made with <i className="fa fa-heart"></i> in Denver, CO</div>
          </Grid>
        </footer>
      </Grid>
    );
  }
}

export default Relay.createContainer(PraisinatorApp, {
  fragments: {
    root: () => Relay.QL `
      fragment on Query {
        ${Header.getFragment('root')}
      }
    `,

  }
});