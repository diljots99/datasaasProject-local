import React ,{ useState , useEffect } from "react";
import Chart from "react-apexcharts";

const BarChart =({barColor, data})=>{
  console.log({barColor , data})
  const [ series , setSeries ] = useState([])

  useEffect(()=>{
    if(data && data.length > 0){
      setSeries([
        {
          name: "Actual",
          data: data 
        },
      ])
    }else{
      setSeries([
        {
          name: "Actual",
          data:[
            {
              x: "2011",
              y: 12,
             
            },
            {
              x: "2012",
              y: 44,
              
            },
            {
              x: "2013",
              y: 54,
             
            },
            {
              x: "2014",
              y: 66,
              
            },
            {
              x: "2015",
              y: 81,
            },
            {
              x: "2016",
              y: 67,
            },
          ],
        },
      ])
    }
  },[data])

  // let  series = 

  let options= {
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    colors: [barColor ? barColor : "#00E396"],
    // dataLabels: {
    //   formatter: function (val, opt) {
    //     const goals =
    //       opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
    //         .goals;

    //     if (goals && goals.length) {
    //       return `${val} / ${goals[0].value}`;
    //     }
    //     return val;
    //   },
    // },
    // legend: {
    //   show: true,
    //   showForSingleSeries: true,
    //   customLegendItems: ["Actual", "Expected"],
    //   markers: {
    //     fillColors: ["#00E396", "#775DD0"],
    //   },
    // },
  }

  return (
    <div id="chart">
      <Chart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
}

export default  BarChart

