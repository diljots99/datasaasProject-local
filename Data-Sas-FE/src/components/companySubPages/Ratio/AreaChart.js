import React from "react";
import Chart from "react-apexcharts";

export default class AreaChart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        
          series: [{
            name: 'series1',
            data: [0, 40, 28, 51, 42, 109, 100,10]
          }, {
            name: 'series2',
            data: [0, 32, 45, 32, 34, 52, 41,10]
          }],
          options: {
            chart: {
              height: 350,
              type: 'area'
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            xaxis: {
              type: 'datetime',
              categories: ['2000', '2002', '2003', '2004', '2005', '2006', '2007','2008'],
            },
           
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
            },
          },
        
        
        };
      }

  render() {
    return (
      <div style={{ border: "1px solid #DCD9D9", borderRadius: "10px", background: "#fff" }} className="financialInner">
        <Chart options={this.state.options} series={this.state.series} type="area" height={350} />
      </div>
    );
  }
}



