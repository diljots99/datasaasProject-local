import React from "react";
import Chart from "react-apexcharts";

 export default class LineChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        
          series: [{
              name: "Business ",
              data: [20, 20, 20, 20, 20, 20, 20, 20, 20]
          },
          {
            name: "Business 2",
            data: [10, 10, 10, 10, 10, 10, 10, 10, 10]
        }],
          options: {
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight'
            },
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
              },
            },
            xaxis: {
              categories: ["2014","2015","2016","2017","2018","2019","2020","2021"],
            }
          },
        
        
        };
      }

    

      render() {
        return (
          <div style={{border:"1px solid #DCD9D9", borderRadius:"10px" , background: "#fff"}}>  
<Chart options={this.state.options} series={this.state.series} type="line" height={350} />
</div>
        );
      }
    }