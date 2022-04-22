import React , {useCallback, useState, useMemo, useRef } from 'react'
import { useStyles } from "./styles";
import { Grid, Typography, Button,Card } from "@material-ui/core";
import {useSelector } from 'react-redux'
import Chart from "react-apexcharts";
import  ProfileDetail  from './profileDetails'
import Table from "./Table";

const Trade = () => {
    const classess = useStyles();
    const { directorList, companyDetail } = useSelector((state) => state.watch);
    const [tabledata, settableData] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const tradefetchIdRef = useRef(0);

    console.log("trade comp detail", companyDetail )

  let series = [
    {
      name: 'Import',
      data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
    },

    {
      name: 'Export',
      data: [0, 7, 8, 20, 18, 8, 22, 15, 20, 23, 18, 15, 6, 9, 27, 22, 27, 5]
    },

  ]

  let  options = {
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
      text: 'Trade',
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
  }

  const data = React.useMemo(
    () => [
       {
         year: 2014,
         imports: 4,
         exports:6
       },
       {
        year: 2015,
        imports: 44,
        exports:46
      },
      {
        year: 2016,
        imports: 24,
        exports:0
      },
      {
        year: 2016,
        imports: 6,
        exports:60
      },
    ],
    []
);

  const columns = useMemo(
    () => [
        {
            Header: "Year",
            accessor: "year",
        },
        {
            Header: "Imports",
            accessor: "imports",
        },
        {
            Header: "Exports",
            accessor: "exports",
       
        },
    ],
    []
);

  
  const fetchData = useCallback(({ pageSize, pageIndex }) => {
    const fetchId = ++tradefetchIdRef.current;
    setLoading(true);

    setTimeout(() => {
        if (fetchId === tradefetchIdRef.current) {
            const startRow = pageSize * pageIndex;
            const endRow = startRow + pageSize;
            settableData(data.slice(startRow, endRow));
            setPageCount(Math.ceil(data.length / pageSize));
            setLoading(false);
        }
    }, 1000);
}, []);

    return (
        <>
    <div>
      <Typography variant="h6" className={classess.headtext}>
       Trade
      </Typography>
    </div>
    <div>
    <ProfileDetail companyDetail={companyDetail} />
    </div>
    <div style={{margin:"10px 0"}}>
      <div style={{ border: "1px solid #DCD9D9", borderRadius: "10px", background: "#fff" }} className="financialInner">
        <Chart options={options} series={series} type="line" height={350} />
      </div>
    </div>

    <div >
    <Table
                    columns={columns}
                    data={tabledata}
                    fetchData={fetchData}
                    loading={loading}
                    pageCount={pageCount}
                />
    </div>
   </>
    )
}
export default  Trade