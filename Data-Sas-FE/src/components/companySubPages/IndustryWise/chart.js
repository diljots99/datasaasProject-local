import React from "react";
import Chart from "react-apexcharts";

export default class SmoothLine extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [
            {
          name: 'Turn Over',
          data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
        },
        {
            name: 'Total Assest',
            data: [0, 5, 8, 12 ,18 , 19, 22, 5, 12, 10, 15, 5, 13, 9, 17, 2, 7, 30]
          },
          {
            name: 'Total Liabiliteas',
            data: [2,10, 5, 10 ,15 , 12, 20, 5, 14, 10, 15, 5, 3, 9, 17, 1, 5, 40]
          },
          {
            name: 'Net Worth',
            data: [0, 7, 8, 20 ,18 , 8, 22, 15, 20, 23, 18, 15, 6, 9, 27, 22, 27, 5]
          },
          {
            name: 'Profit Before Tax',
            data: [7, 15, 18, 22 ,18 , 19, 24, 25, 28, 29, 30, 28, 23, 25, 17, 2, 7, 12]
          },
          {
            name: 'EBIDTA',
            data: [-5, 5, 8, 12 ,18 , 19, 22, 24, 26, 28, 30, 32, 33, 37, 25, 40, 38, 30]
          }
    ],
        options: {
          chart: {
            height: 350,
            type: 'line',
          },
          stroke: {
            width: 5,
            curve: 'smooth'
          },
          xaxis: {
            // type: 'datetime',
            categories: ['2000', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011','2012' ,'2013','2013',"2014",'2015','2016','2017'],
            tickAmount: 10,
            // labels: {
            //   formatter: function(value, timestamp, opts) {
            //     // return opts.dateFormatter(new Date(timestamp), 'dd MMM YYYY')
            //     return console.log("data",timestamp,opts.dateFormatter(new Date(timestamp), 'dd YYYYY'))
            //   }
            // }
          },
          title: {
            text: 'Forecast',
            align: 'left',
            style: {
              fontSize: "13px",
              color: '#666',
              fill: "red",
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              gradientToColors: [ '#FDD835'],
              shadeIntensity: 1,
              type: 'horizontal',
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100, 100, 100]
            },
          },
          yaxis: {
             min: -10,
            max: 40
           
          }
        },
      
      
      };
    }

    render() {
        return (
          <div style={{border:"1px solid #DCD9D9", borderRadius:"10px" , background: "#fff" , padding: "20px 10px"}}>  
<Chart options={this.state.options} series={this.state.series} type="line" height={350} />
</div>
        );
      }
    }

//     render() {
//       return (
        

//   <div id="chart">
// <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
// </div>
