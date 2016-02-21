import React from 'react';
import Relay from 'react-relay';
import d3Chart from './d3Chart';
import ReactDOM from 'react-dom';

class Chart extends React.Component {
  static propTypes = {
    data: React.PropTypes.array,
    domain: React.PropTypes.object
  };

  componentDidMount() {
    var el = ReactDOM.findDOMNode(this);
    d3Chart.create(el, {
      width: '100%',
      height: '300px'
    }, this.getChartState());
  }

  componentDidUpdate() {
    var el = ReactDOM.findDOMNode(this);
    d3Chart.update(el, this.getChartState());
  }

  getChartState() {
    return {
      data: this.props.data,
      domain: this.props.domain
    };
  }

  componentWillUnmount() {
    var el = ReactDOM.findDOMNode(this);
    d3Chart.destroy(el);
  }

  render() {
    return (
      <div className="Chart"></div>
    );
  }
}

export default Chart;