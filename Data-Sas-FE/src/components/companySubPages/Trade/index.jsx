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

    const [tabledata2, settableData2] = useState([]);
    const [pageCountTable2, setPageCountTable2] = useState(0);
    const [loadingTable2, setLoadingTable2] = useState(false);

    const tradefetchIdRef = useRef(0);
    const tradefetchIdRef2 = useRef(0);

    console.log("trade comp detail", companyDetail )

  let series = [
    {
      name: 'Import',
      data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
    },

    {
      name: 'Export',
      data: [0, 7, 8, 20, 18, 8, 22, 15, 20, 50, 18, 15, 6, 9, 27, 22, 27, 5]
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
      min: 0,
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

const data2 = React.useMemo(
  () => [
     {
       export_hmrc: 2034314,
       export_discription: " Moule export des",
       import_hmrc: 2013232,
       import_discription:" Moule export des",
     },
     {
      export_hmrc: 203432,
      export_discription: " Moule export des",
      import_hmrc: 201433,
      import_discription:" Moule export des",
    },
  ],
  []
);

const columns2 = useMemo(
  () => [
    {
      Header: 'Import',
      columns: [
        {
          Header: 'HMRC',
          accessor: 'import_hmrc',
          aggregate: 'count',
          Aggregated: ({ value }) => `${value} Names`,
        },
        {
          Header: 'Discription',
          accessor: 'import_discription',      
          aggregate: 'uniqueCount',
          Aggregated: ({ value }) => `${value} Unique Names`,
        },
      ],
    },
    {
      Header: 'Export',
      columns: [
        {
          Header: 'HMRC',
          accessor: 'export_hmrc',
          aggregate: 'count',
          Aggregated: ({ value }) => `${value} Names`,
        },
        {
          Header: 'Discription',
          accessor: 'export_discription',      
          aggregate: 'uniqueCount',
          Aggregated: ({ value }) => `${value} Unique Names`,
        },
      ],
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

const fetchDataTable2 = useCallback(({ pageSize, pageIndex }) => {
  const fetchId = ++tradefetchIdRef2.current;
  setLoading(true);

  setTimeout(() => {
      if (fetchId === tradefetchIdRef2.current) {
          const startRow = pageSize * pageIndex;
          const endRow = startRow + pageSize;
          settableData2(data2.slice(startRow, endRow));
          setPageCountTable2(Math.ceil(data2.length / pageSize));
          setLoadingTable2(false);
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
    <div >
    <Table
                    columns={columns2}
                    data={tabledata2}
                    fetchData={fetchDataTable2}
                    loading={loadingTable2}
                    pageCount={pageCountTable2}
                />
    </div>
   </>
    )
}
export default  Trade