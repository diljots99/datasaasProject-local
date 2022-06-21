import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts'

const Donut = ({series , lables})=> {
  const [Series , setSeries] = useState([])
  const [Lables , setLables]= useState([])
  const [Options, setOptions] = useState({ 
})

  useEffect(()=>{
    setSeries(series ? series : [])
    setLables(lables ? lables : [])
    setOptions({ series: series ? series : [],
      // chartOptions: {
      //   labels: lables ? lables : []
      // },
      lables: lables ? lables : [],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    })
  },[series , lables])


    // console.log("Donut , ser, lables", Series , Lables, Options )
    return (
      <div className="donut">
        <Chart options={Options}
         series={Series}
          // labels={Lables} 
         type="donut" width="100%" />
      </div>
    );
  
}



export default Donut;