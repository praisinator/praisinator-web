var d3 = require('d3');
require('./d3-starPlot');
import React from 'react';
import ReactFauxDOM from 'react-faux-dom';
import Relay from 'react-relay';
import ReactDOM from 'react-dom';

var sampleData = [
  {
    "emotional_joy": 0.255821,
    "emotional_sadness": 0.207131,
    "emotional_disgust": 0.192775,
    "emotional_fear": 0.186713,
    "emotional_anger": 0.15756
  }
]

class Chart extends React.Component {
  render() {
    var margin = {
      top: 32,
      right: 50,
      bottom: 20,
      left: 50
    };
    var scale = d3.scale.linear().domain([0, 4]).range([0, 100]);
    var width = 240 - margin.left - margin.right;
    var height = 240 - margin.top - margin.bottom;
    var labelMargin = 8;


    var star = d3.starPlot()
    .width(width)
    .properties([
        'Joy',
        'Sadness',
        'Disgust',
        'Fear',
        'Anger'
      ])
      .scales(scale)
      .labels([
        'Joy',
        'Sadness',
        'Disgust',
        'Fear',
        'Anger'
      ])
      .margin(margin)
      .labelMargin(labelMargin)

  var node = ReactFauxDOM.createElement('svg')

  sampleData.forEach(function(d) {
    d3.select(node).append('svg')
      .datum(d)
      .call(star)
  });

      return node.toReact()
  }
}

export default Chart;