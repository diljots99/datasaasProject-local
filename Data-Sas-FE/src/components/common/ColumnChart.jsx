import React, { useState } from "react";
import Chart from "react-apexcharts";

const ColumnChart = () => {
  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
    },
  });

  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ]);

  return <div style={{border:"1px solid #DCD9D9", borderRadius:"10px" , background: "#fff"}}><Chart options={options} series={series} type="bar" /></div>;
};

export default ColumnChart;
