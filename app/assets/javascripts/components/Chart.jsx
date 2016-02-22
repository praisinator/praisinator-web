import { PieChart } from "react-d3";
import React from "react";
import _ from "lodash";

class Chart extends React.Component {

    pieData() {
        var {prefix} = this.props;
        return _.map(_.omit(this.props.data, '__dataID__'), (value, key)=>{
            var name = _.upperFirst(key.replace(prefix, '').replace('_', ' '));
            return { label: name, value: Math.round(value * 100) }
        });
    }

    render() {
        return (
            <PieChart
                data={this.pieData()}
                width={400}
                height={400}
                radius={100}
                innerRadius={20}
                sectorBorderColor="black"
                title={this.props.title}
            />
        )
    }
}

export default Chart;
