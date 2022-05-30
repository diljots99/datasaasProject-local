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
          name: 'Net Worth',
          data: [0, 7, 8, 20, 18, 8, 22, 15, 20, 23, 18, 15, 6, 9, 27, 22, 27, 5]
        },

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
          categories: ['2000', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2013', "2014", '2015', '2016', '2017'],
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
            fontSize: "16px",
            color: '#666'
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            gradientToColors: ['#FDD835'],
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
      <div style={{ border: "1px solid #DCD9D9", borderRadius: "10px", background: "#fff" }} className="financialInner">
        <Chart options={this.state.options} series={this.state.series} type="line" height={350} />
      </div>
    );
  }
}


