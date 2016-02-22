var d3 = require('d3');
require('./d3-starPlot');
import React from 'react';
import ReactFauxDOM from 'react-faux-dom';
import Relay from 'react-relay';
import ReactDOM from 'react-dom';
import _ from 'lodash';

class Chart extends React.Component {

  plotData(){
    return _.omit(this.props.data, '__dataID__')
  }

  plotProps(){
    return Object.keys(this.plotData())
  }

  plotLabels(){
    var { prefix } = this.props
    return this.plotProps().map((prop) => {
      return _.upperFirst(prop.replace(prefix, '').replace('_', ' '))
    })
  }

  star(){
    // var star = d3.starPlot()
    //   .width(width)
    //   .properties([
    //     'Body',
    //     'Sweetness',
    //     'Smoky',
    //     'Honey',
    //     'Spicy',
    //     'Nutty',
    //     'Malty',
    //     'Fruity',
    //     'Floral'
    //   ])
    //   .scales(scale)
    //   .labels([
    //     'Body',
    //     'Sweetness',
    //     'Smoky',
    //     'Honey',
    //     'Spicy',
    //     'Nutty',
    //     'Malty',
    //     'Fruity',
    //     'Floral'
    //   ])
    //   .title(function(d) { return d.Distillery; })
    //   .margin(margin)
    //   .labelMargin(labelMargin)
    // rows.forEach(function(d, i) {
    //   star.includeLabels(i % 4 === 0 ? true : false);
    //   var wrapper = d3.select('#target').append('div')
    //     .attr('class', 'wrapper')
    //   var svg = wrapper.append('svg')
    //     .attr('class', 'chart')
    //     .attr('width', width + margin.left + margin.right)
    //     .attr('height', width + margin.top + margin.bottom)
    //     debugger
    //   var starG = svg.append('g')
    //     .datum(d)
    //     .call(star)
    //     .call(star.interaction)
    //   var interactionLabel = wrapper.append('div')
    //     .attr('class', 'interaction label')
    //   var circle = svg.append('circle')
    //     .attr('class', 'interaction circle')
    //     .attr('r', 5)
    //   var interaction = wrapper.selectAll('.interaction')
    //     .style('display', 'none');
    //   svg.selectAll('.star-interaction')
    //     .on('mouseover', function(d) {
    //       svg.selectAll('.star-label')
    //         .style('display', 'none')
    //       interaction
    //         .style('display', 'block')
    //       circle
    //         .attr('cx', d.x)
    //         .attr('cy', d.y)
    //       $interactionLabel = $(interactionLabel.node());
    //       interactionLabel
    //         .text(d.key + ': ' + d.datum[d.key])
    //         .style('left', d.xExtent - ($interactionLabel.width() / 2))
    //         .style('top', d.yExtent - ($interactionLabel.height() / 2))
    //     })
    //     .on('mouseout', function(d) {
    //       interaction
    //         .style('display', 'none')
    //       svg.selectAll('.star-label')
    //         .style('display', 'block')
    //     })
  }

  render() {
    var margin = {
      top: 32,
      right: 50,
      bottom: 20,
      left: 50
    };
    var width = 400 - margin.left - margin.right;
    var height = 200 - margin.top - margin.bottom;
    var labelMargin = 8;
    var scale = d3.scale.linear()
      .domain([0.0, 1.0])
      .range([50, 100])
    var star = d3.starPlot()
      .width(width)
      .properties(this.plotProps())
      .scales(scale)
      .labels(this.plotLabels())
      .title(() => this.props.title)
      .margin(margin)
      .labelMargin(labelMargin)
      .includeLabels(true)
    var node = ReactFauxDOM.createElement('div')
    var wrapper = d3.select(node).attr('class', 'wrapper')
    var svg = wrapper.append('svg')
      .attr('class', 'chart')
      .attr('width', width + margin.left + margin.right)
      .attr('height', width + margin.top + margin.bottom)
    var starG = svg.append('g')
      .datum(this.plotData())
      .call(star)

    // var interactionLabel = wrapper.append('div')
    //   .attr('class', 'interaction label')
    // var circle = svg.append('circle')
    //   .attr('class', 'interaction circle')
    //   .attr('r', 5)
    // var interaction = wrapper.selectAll('.interaction')
    //   .style('display', 'none');
    // svg.selectAll('.star-interaction')
    //   .on('mouseover', function(d) {
    //     svg.selectAll('.star-label')
    //       .style('display', 'none')
    //     interaction
    //       .style('display', 'block')
    //     circle
    //       .attr('cx', d.x)
    //       .attr('cy', d.y)
    //     $interactionLabel = $(interactionLabel.node());
    //     interactionLabel
    //       .text(d.key + ': ' + d.datum[d.key])
    //       .style('left', d.xExtent - ($interactionLabel.width() / 2))
    //       .style('top', d.yExtent - ($interactionLabel.height() / 2))
    //   })
    //   .on('mouseout', function(d) {
    //     interaction
    //       .style('display', 'none')
    //     svg.selectAll('.star-label')
    //       .style('display', 'block')
    //   })

    return node.toReact()

  // var node = ReactFauxDOM.createElement('svg')
  //
  // data.forEach(function(d) {
  //   d3.select(node).append('svg')
  //     .datum(d)
  //     .call(star)
  // });
  //
  //     return node.toReact()
  }
}

export default Chart;