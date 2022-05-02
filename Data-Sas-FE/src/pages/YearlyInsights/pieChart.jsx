import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
       
      },
      series: [6, 33, 16, 48],
      labels: ['Null', 'Unknown', 'Dissolved', 'Active']
    }
  }

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} labels={this.state.lables} type="donut" width="380" />
      </div>
    );
  }
}

export default Donut;