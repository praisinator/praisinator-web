import React from 'react';
import Relay from 'react-relay';
import Grid from 'react-bootstrap/lib/Grid';

import Header from './Header';


class PraisinatorApp extends React.Component {
  render() {
    return (
      <Grid fluid data-framework="relay">
          <Header/>
          <div className="main-container">
            {this.props.children}
          </div>
        <footer className="info">
        Footer
        </footer>
      </Grid>
    );
  }
}

export default PraisinatorApp;