
import React, { Component } from "react";
import Chart from "react-apexcharts";
import { Grid, Typography,Card } from "@material-ui/core";
import "./graph.css"
class Graph extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        options: {
        //   chart: {
        //     id: "basic-bar"
        //   },
          xaxis: {
            categories: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
          }
        },
        series: [{
            name: "Session Duration",
            data: [0, 6, 8, 10, 20, 22, 24, 28,30,32]
          },
          {
            name: "Page Views",
            data: [0, 4, 6, 10, 24, 18, 30, 38, 36, 51, 32]
          },
          {
            name: 'Total Visits',
            data: [0, 7, 14, 9, 15, 18, 22, 47, 82, 56, 45]
          }
        ],
      };
    }
  
    render() {
      return (
        
        <div >
            <Card>
          <div className="row">
            <div className="mixed-chart">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="line"
              />
            </div>
          </div>
          </Card>
        </div>
      );
    }
  }
  
  export default Graph;


