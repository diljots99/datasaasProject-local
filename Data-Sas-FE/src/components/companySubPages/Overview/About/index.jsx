import React, { useEffect, useState , useRef} from "react";
import "./styles.css";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Divider from '@material-ui/core/Divider'
import AccountBoxIcon from "@mui/icons-material/AccountBox";
// import {
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Legend,
//   Tooltip,
// } from "recharts";
import Chart from "react-apexcharts";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import ShareIcon from "@mui/icons-material/Share";
import DirectorCard from "../../../common/DirectorCard";
import MapComponent from "./mapComponent";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { lightBlue } from "@material-ui/core/colors";

import { useSelector, useDispatch } from "react-redux";
import { keynotedetails } from "../../../../redux/actions/watchAction";
import  { getAbout } from '../../../../redux/actions/companyActions'
import Table from "./Table";

const pdata = [
  {
    date: "2014",
    price: "$3",
    Turnover: 0,
    TotalAssets: 0,
    TotalLibilities: 0,
    NetWorth: 0,
    ProfitBeforeTex: 0,
    EBITDA: 0,
  },
  {
    date: "2015",
    price: "$4",
    Turnover: 2,
    TotalAssets: 3,
    TotalLibilities: 4,
    NetWorth: 5,
    ProfitBeforeTex: 6,
    EBITDA: 7,
  },
  {
    date: "2016",
    price: "$5",
    Turnover: 1,
    TotalAssets: 2,
    TotalLibilities: 3,
    NetWorth: 4,
    ProfitBeforeTex: 5,
    EBITDA: 6,
  },
  {
    date: "2017",
    price: "$6",
    Turnover: 3,
    TotalAssets: 4,
    TotalLibilities: 5,
    NetWorth: 6,
    ProfitBeforeTex: 7,
    EBITDA: 8,
  },
  {
    date: "2018",
    price: "$7",
    Turnover: 2,
    TotalAssets: 3,
    TotalLibilities: 4,
    NetWorth: 5,
    ProfitBeforeTex: 6,
    EBITDA: 7,
  },
  {
    date: "2019",
    price: "$8",
    Turnover: 4,
    TotalAssets: 5,
    TotalLibilities: 6,
    NetWorth: 7,
    ProfitBeforeTex: 8,
    EBITDA: 9,
  },
  {
    date: "2020",
    price: "$9",
    Turnover: 2,
    TotalAssets: 3,
    TotalLibilities: 4,
    NetWorth: 5,
    ProfitBeforeTex: 6,
    EBITDA: 7,
  },
  {
    date: "2021",
    price: "$10",
    Turnover: 5,
    TotalAssets: 6,
    TotalLibilities: 7,
    NetWorth: 8,
    ProfitBeforeTex: 9,
    EBITDA: 10,
  },
];

export default function Index() {
  const { directorList, companyDetail} = useSelector(
    (state) => state.watch
  );
  const { About } = useSelector((state) => state.company);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [activeUsers, setActiveUsers] = useState([]);

  // const [tabledata, settableData] = useState([]);
  //   const [loading, setLoading] = useState(false);
  //   const [pageCount, setPageCount] = useState(0);
  //   const compSumfetchIdRef = useRef(0);
  const [summaryTradeInformatio , setSummaryTradeInformatio] = useState([])

  console.log("About", About ,summaryTradeInformatio );

  useEffect(() => {
    console.log(" table data", About.summary_trade_information )
    if(About.summary_trade_information){
      setSummaryTradeInformatio([About.summary_trade_information])

    }else{
      setSummaryTradeInformatio([])

    }   
  },[About])

//   const columns = React.useMemo(
//     () => [
//         {
//             Header: "Importer",
//             accessor: "importer",
//         },
//         {
//             Header: "Exporter",
//             accessor: "exporter",
//         },
//         {
//             Header: "Time in business",
//             accessor: "time_in_business",
//         },
//         {
//             Header: "Activity",
//             accessor: "activity",
//         },
//     ],
//     []
// );

let  series = [
  {
    name: 'Equity',
    data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
  },
  {
      name: 'Gross Profit',
      data: [0, 5, 8, 12 ,18 , 19, 22, 5, 12, 10, 15, 5, 13, 9, 17, 2, 7, 30]
    },
    {
      name: 'Operating Profit',
      data: [2,10, 5, 10 ,15 , 12, 20, 5, 14, 10, 15, 5, 3, 9, 17, 1, 5, 40]
    },
    {
      name: 'Profit and loss',
      data: [0, 7, 8, 20 ,18 , 8, 22, 15, 20, 23, 18, 15, 6, 9, 27, 22, 27, 5]
    },
    {
      name: 'Cash at Bank',
      data: [7, 15, 18, 22 ,18 , 19, 24, 25, 28, 29, 30, 28, 23, 25, 17, 2, 7, 12]
    },
    {
      name: 'Assets less CurrLiabilities',
      data: [-5, 5, 8, 12 ,18 , 19, 22, 24, 26, 28, 30, 32, 33, 37, 25, 40, 38, 30]
    }

]

  let  options= {
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
      max: 40

    }
  }

  useEffect(()=>{
    dispatch(getAbout(companyDetail.uuid))
  },[companyDetail])


  useEffect(()=>{
      if(About?.director?.docs  ){
        setData(About?.director?.docs)
      }
  },[About])



  // Counters
  let counterTotal = data.length;

  let counterResigned = 0;
  data.map((item, index) => (counterResigned += item.resigned_on !== null));

  let counterActive = 0;
  data.map(
    (item, index) =>
      (counterActive += item.resigned_on === null && item.appointed_on !== null)
  );
  useEffect(() => {
    setActiveUsers(
      data.filter(
        (item) => item.resigned_on === null && item.appointed_on !== null
      )
    );
  }, [data]);

  console.log("active USer", activeUsers);
  let counterInactive = 0;
  data.map(
    (item, index) =>
      (counterInactive +=
        item.appointed_on !== null && item.resigned_on !== null)
  );

  let counterSecretory = 0;
  console.log("Data", data);

  const CardTwo = ({ color, title, value1, value2 }) => {
    return (
      <Paper
        style={{
          backgroundColor: `${color}`,
          borderRadius: "10px",
          width: "100%",
        }}
      >
        <Box p={3}>
          <Grid container style={{ justifyContent: "space-between" }}>
            <Grid item>
              <Typography
                display="inline"
                variant="h6"
                style={{ color: "white" }}
              >
                {title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                display="inline"
                variant="h5"
                style={{ color: "white" }}
              >
                25
              </Typography>
            </Grid>
          </Grid>

          <Grid container style={{ justifyContent: "space-between" }}>
            <Grid item>
              <Typography
                display="inline"
                variant="h5"
                style={{ color: "white" }}
              >
                {value1}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                display="inline"
                variant="h6"
                style={{ color: "white" }}
              >
                {value2}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    );
  };

//   const fetchData = React.useCallback(
//     ({ pageSize, pageIndex }) => {
//         const fetchId = ++compSumfetchIdRef.current;
//         setLoading(true);
// if(summaryTradeInformatio !== undefined  || summaryTradeInformatio.length > 0 ){
// setTimeout(() => {
//     if (fetchId === compSumfetchIdRef.current) {
//         const startRow = pageSize * pageIndex;
//         const endRow = startRow + pageSize;
//         settableData(summaryTradeInformatio?.slice(startRow, endRow));
//         setPageCount(Math.ceil(summaryTradeInformatio?.length / pageSize));
//         setLoading(false);
//     }
// }, 1000);
// }
      
//     },
//     [summaryTradeInformatio]
// );

  return (
    <Container>
      <Typography variant="h4">About-Keynote</Typography>
      <Grid container spacing={2}>
        <Grid item lg={6} style={{ borderRadius: "10px", width: "49%" }}>
          <Paper style={{ borderRadius: "10px", marginTop: "30px" }}>
            <Box p={3}>
              {/* 1 */}
              <Grid>
                <Typography
                  display="inline"
                  variant="h5"
                  style={{ color: "#8a8fa7", float: "left" }}
                >
                  Company Name
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  display="inline"
                  variant="h5"
                  style={{
                    color: "#8a8fa7",
                    float: "left",
                    marginLeft: "50px",
                  }}
                >
                  :
                </Typography>
              </Grid>
              <Grid>
                {/* <Typography display="inline" variant="h5" style={{ marginLeft: "50px" }}><b>1415 Lake road,Atlantic</b><br /> <b className='city'>City, New Jersy,08401</b></Typography>
                            </Grid> */}
                <Typography
                  display="inline"
                  variant="h5"
                  style={{ marginLeft: "50px" }}
                >
                  {About?.company_name ?About?.company_name : "N/A" }
                </Typography>
              </Grid>
              <br />

              {/* 2 */}
              <Grid>
                <Typography
                  display="inline"
                  variant="h5"
                  style={{ color: "#8a8fa7", float: "left" }}
                >
                  Website
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  display="inline"
                  variant="h5"
                  style={{
                    color: "#8a8fa7",
                    float: "left",
                    marginLeft: "126px",
                  }}
                >
                  :
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  display="inline"
                  variant="h5"
                  style={{ marginLeft: "55px" }}
                >
                  <a href="" style={{ textDecoration: "none" }}>
                  {About?.website ?About?.website : "N/A" }
                  </a>
                </Typography>
              </Grid>
              <br />

              {/* 3 */}
              <Grid>
                <Typography
                  display="inline"
                  variant="h5"
                  style={{ color: "#8a8fa7", float: "left" }}
                >
                  Post code
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  display="inline"
                  variant="h5"
                  style={{
                    color: "#8a8fa7",
                    float: "left",
                    marginLeft: "58px",
                  }}
                >
                  :
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  display="inline"
                  variant="h5"
                  style={{ marginLeft: "54px" }}
                >
                 {About?.postcode ?About?.postcode : "N/A" }
                </Typography>
              </Grid>
              <br />

              {/* 4 */}
              <Grid>
                <Typography
                  display="inline"
                  variant="h5"
                  style={{ color: "#8a8fa7", float: "left" }}
                >
                  No of Employees
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  display="inline"
                  variant="h5"
                  style={{
                    color: "#8a8fa7",
                    float: "left",
                    marginLeft: "35px",
                  }}
                >
                  :
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  display="inline"
                  variant="h5"
                  style={{ marginLeft: "55px" }}
                >
                {About?.no_of_employee ?About?.no_of_employee: "N/A" }
                </Typography>
              </Grid>
              <br />
              <br />
              <Grid>
                <FacebookIcon
                  color="primary"
                  display="inline"
                  style={{
                    float: "left",
                    fontSize: "2.5rem",
                  }}
                />
              </Grid>
              <Grid>
                <TwitterIcon
                  color="primary"
                  display="inline"
                  style={{
                    float: "left",
                    marginLeft: "10px",
                    fontSize: "2.5rem",
                  }}
                />
              </Grid>
              <Grid>
                <LinkedInIcon
                  color="primary"
                  display="inline"
                  style={{
                    float: "left",
                    marginLeft: "10px",
                    fontSize: "2.5rem",
                  }}
                />
              </Grid>
              <br />
              <br />
              <br />
            </Box>
          </Paper>
        </Grid>
        {/* pivort chart */}

        <Grid item lg={6} style={{ paddingTop: "40px", width: "49%" }}>
          <Paper style={{ borderRadius: "10px", height: "100%" }}>
          <Chart options={options} series={series} type="line" height={350} />
            {/* <ResponsiveContainer width="100%" height="100%" aspect="3">
              <LineChart data={pdata} style={{ height: "100%" }}>
                <CartesianGrid />
                <XAxis dataKey="date" interval={"preserveStartEnd"} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Turnover"
                  stroke="green"
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="TotalAssets"
                  stroke="yellow"
                  activeDot={{ r: 8 }}
                />

                <Line
                  type="monotone"
                  dataKey="TotalLibilities"
                  stroke="pink"
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="NetWorth"
                  stroke="gray"
                  activeDot={{ r: 8 }}
                />

                <Line
                  type="monotone"
                  dataKey="ProfitBeforeTex"
                  stroke="red"
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="EBITDA"
                  stroke="blue"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer> */}
          </Paper>
        </Grid>
      </Grid>

      {/* first 3 boxess */}
      <Grid container spacing={2}>
        <Grid item lg={4}>
          <CardTwo
            color="mediumpurple"
            title="Equity"
            value1="$3884949"
            value2="$3384949"
          />
        </Grid>
        <Grid item lg={4}>
          <CardTwo
            color="yellow"
            title="Gross Profit"
            value1="$3884949"
            value2="$3384949"
          />
        </Grid>
        <Grid item lg={4}>
          <CardTwo
            color="#67cdcd"
            title="Operating Profit"
            value1="$3884949"
            value2="$3384949"
          />
        </Grid>
      </Grid>

      {/*second 3 boxes */}
      <Grid container spacing={2}>
        <Grid item lg={4}>
          <CardTwo
            color="coral"
            title="Profit and loss"
            value1="$3884949"
            value2="$3384949"
          />
        </Grid>
        <Grid item lg={4}>
          <CardTwo
            color="#eb3992"
            title="Cash at Bank"
            value1="$3884949"
            value2="$3384949"
          />
        </Grid>
        <Grid item lg={4}>
          <CardTwo
            color="#31c731"
            title="Assets less CurrLiabilities"
            value1="$3884949"
            value2="$3384949"
          />
        </Grid>
      </Grid>


      {/* <Grid container spacing={1}>
      <Typography variant="h4">Summary Trade Information</Typography>

      <Table
                        columns={columns}
                        data={tabledata === undefined ? [] :tabledata}
                        fetchData={fetchData}
                        loading={loading}
                        pageCount={pageCount}
                    />
      </Grid> */}

      {/* third 2 div */}
      <Grid container spacing={1}>
        <Grid item lg={6}>
          <Paper style={{ borderRadius: "10px" }}>
            <Grid>
              <Typography
                variant="h5"
                style={{
                  backgroundColor: "lightgray",
                  paddingLeft: "25px",
                  height: "60px",
                  paddingTop: "13px",
                  borderRadius: "10px",
                }}
              >
                Summary Trade Information
              </Typography>
            </Grid>
            <Box p={3}>
              <Grid  style={{display: "flex", alignItems: "center", justifyContent: "space-around" , margin:'5px 0 '}} >
              <ArrowDownwardIcon
                  style={{
                    color: "white",
                    backgroundColor: "green",
                    borderRadius: "50%",
                    fontSize: "2.5rem",
                  }}
                />
                <Typography
                  style={{
                    color: "green",
                    fontSize: "large",
                  }}
                >
                 Importer :
                </Typography>
                <Typography
                  style={{
                    color: "gray",
                  }}
                >
                   {About?.summary_trade_information?.importer?? "N/a"}
                </Typography>
                <Divider />
              </Grid>
              <Grid  style={{display: "flex", alignItems: "center", justifyContent: "space-around" ,margin:'5px 0 '}} >
              <ArrowUpwardIcon
                  style={{
                    color: "white",
                    backgroundColor: "green",
                    borderRadius: "50%",
                    fontSize: "2.5rem",
                  }}
                />
                <Typography
                  style={{
                    color: "green",
                    fontSize: "large",
                  }}
                >
                 Expoter :
                </Typography>
                <Typography
                  style={{
                    color: "gray",
                  }}
                >
                   {About?.summary_trade_information?.exporter?? "N/a"}
                </Typography>
                <Divider />
              </Grid>
              <Grid  style={{display: "flex", alignItems: "center", justifyContent: "space-around",  margin:'5px 0 '}} >
              <ArrowUpwardIcon
                  style={{
                    color: "white",
                    backgroundColor: "green",
                    borderRadius: "50%",
                    fontSize: "2.5rem",
                  }}
                />
                <Typography
                  style={{
                    color: "green",
                    fontSize: "large",
                  }}
                >
                 Time In Business :
                </Typography>
                <Typography
                  style={{
                    color: "gray",
                  }}
                >
                   {About?.summary_trade_information?.time_in_business}
                </Typography>
                <Divider />
              </Grid>
              <Grid  style={{display: "flex", alignItems: "center", justifyContent: "space-around",  margin:'5px 0 '}} >
              <ArrowUpwardIcon
                  style={{
                    color: "white",
                    backgroundColor: "green",
                    borderRadius: "50%",
                    fontSize: "2.5rem",
                  }}
                />
                <Typography
                  style={{
                    color: "green",
                    fontSize: "large",
                  }}
                >
                 Activity :
                </Typography>
                <Typography
                  style={{
                    color: "gray",
                  }}
                >
                   {About?.summary_trade_information?.activity?? "N/a"}
                </Typography>
                <Divider />
              </Grid>
              {/* <Grid>
                <ArrowUpwardIcon
                  style={{
                    marginTop: "35px",
                    marginLeft: "-10px",
                    color: "white",
                    backgroundColor: "green",
                    borderRadius: "50%",
                    fontSize: "2.5rem",
                  }}
                />
                <Typography
                  style={{
                    color: "green",
                    marginTop: "-63px",
                    marginLeft: "30px",
                    fontSize: "large",
                    padding: "20px",
                  }}
                >
                  contrary popular belief lorea ipsom is simply contrary
                  <br />
                  popular belief, Loream ipsum is simple
                </Typography>
                <Typography
                  style={{
                    color: "gray",
                    marginLeft: "49px",
                  }}
                >
                  Loged on 21/05/2021
                </Typography>
                <Typography className="line"></Typography>
              </Grid>
              <Grid>
                <ArrowUpwardIcon
                  style={{
                    marginTop: "35px",
                    marginLeft: "-10px",
                    color: "white",
                    backgroundColor: "green",
                    borderRadius: "50%",
                    fontSize: "2.5rem",
                  }}
                />
                <Typography
                  style={{
                    color: "green",
                    marginTop: "-63px",
                    marginLeft: "30px",
                    fontSize: "large",
                    padding: "20px",
                  }}
                >
                  contrary popular belief lorea ipsom is simply contrary
                  <br />
                  popular belief, Loream ipsum is simple
                </Typography>
                <Typography
                  style={{
                    color: "gray",
                    marginLeft: "49px",
                  }}
                >
                  Loged on 21/05/2021
                </Typography>
              </Grid> */}
            </Box>
          </Paper>
        </Grid>

        {/* for map   */}
        <Grid item lg={6} className="mainCompany">
          <MapComponent  location={About?.locations?.length> 0 ? About?.locations[0] : null}/>
        </Grid>
      </Grid>
      {/* five div */}
      <Grid container className={"directorCard"}>
        <Grid item className="mainCard">
          <DirectorCard
            count={counterTotal}
            message="Total"
            imgsrc="/images/DWIcon.png"
            style={{ border: "2px", backgroundColor: "lightblue" }}
          />
        </Grid>
        <Grid item className="mainCard">
          <DirectorCard
            count={counterActive}
            message="Active"
            imgsrc="/images/DWIcon.png"
            style={{ border: "2px", backgroundColor: "lightblue" }}
          />
        </Grid>
        <Grid item className="mainCard">
          <DirectorCard
            count={counterSecretory}
            message="Secretory"
            imgsrc="/images/DWIcon.png"
            style={{ border: "2px", backgroundColor: "lightblue" }}
          />
        </Grid>
        <Grid item className="mainCard">
          <DirectorCard
            count={counterInactive}
            message="inactive"
            imgsrc="/images/DWIcon.png"
            style={{ border: "2px", backgroundColor: "lightblue" }}
          />
        </Grid>
        <Grid item className="mainCard">
          <DirectorCard
            count={counterResigned}
            message="Resigned"
            imgsrc="/images/DWIcon.png"
            style={{ border: "2px", backgroundColor: "lightblue" }}
          />
        </Grid>
      </Grid>

      {/* one div */}
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <Paper style={{ borderRadius: "10px" }}>
            <Box p={3}>
              <Grid>
                <Typography
                  display="inline"
                  variant="h5"
                  style={{ color: "#8a8fa7", float: "left" }}
                >
                  Account Category
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  display="inline"
                  variant="h5"
                  style={{
                    color: "#8a8fa7",
                    float: "left",
                    marginLeft: "102px",
                  }}
                >
                  :
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  display="inline"
                  variant="h5"
                  style={{
                    marginLeft: "50px",
                    fontFamily: "serif",
                  }}
                >
                  <b> {About?.account_category ?About?.account_categoryt: "N/A" }</b>
                </Typography>
              </Grid>
              <br />
              <Grid>
                <Typography
                  display="inline"
                  variant="h5"
                  style={{ color: "#8a8fa7", float: "left" }}
                >
                 Last Accounts Filed
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  display="inline"
                  variant="h5"
                  style={{
                    color: "#8a8fa7",
                    float: "left",
                    marginLeft: "196px",
                  }}
                >
                  :
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  display="inline"
                  variant="h5"
                  style={{
                    marginLeft: "50px",
                    fontFamily: "serif",
                  }}
                >
                 <b> {About?.last_accounts_filed ?About?.last_accounts_filed: "N/A" }</b>
                </Typography>
              </Grid>
              <br />
              <Grid>
                <Typography
                  display="inline"
                  variant="h5"
                  style={{ color: "#8a8fa7", float: "left" }}
                >
                 Number of Employees
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  display="inline"
                  variant="h5"
                  style={{
                    color: "#8a8fa7",
                    float: "left",
                    marginLeft: "50px",
                  }}
                >
                  :
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  display="inline"
                  variant="h5"
                  style={{
                    marginLeft: "50px",
                    fontFamily: "serif",
                  }}
                >
                  <b>{About?.no_of_employee ?About?.no_of_employee: "N/A" }</b>
                </Typography>
              </Grid>
              <br />
              <Grid>
                <Typography
                  display="inline"
                  variant="h5"
                  style={{ color: "#8a8fa7", float: "left" }}
                >
                 Turnover est.
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  display="inline"
                  variant="h5"
                  style={{
                    color: "#8a8fa7",
                    float: "left",
                    marginLeft: "163px",
                  }}
                >
                  :
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  display="inline"
                  variant="h5"
                  style={{ marginLeft: "50px" }}
                >
                  <b>{About?.turnover_estimate?About?.turnover_estimate : "N/A" }</b>
                </Typography>
              </Grid>
              <br />
              <Grid>
                <Typography
                  display="inline"
                  variant="h5"
                  style={{ color: "#8a8fa7", float: "left" }}
                >
                  Trade Creditors
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  display="inline"
                  variant="h5"
                  style={{
                    color: "#8a8fa7",
                    float: "left",
                    marginLeft: "101px",
                  }}
                >
                  :
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  display="inline"
                  variant="h5"
                  style={{
                    marginLeft: "50px",
                    fontFamily: "serif",
                  }}
                >
                  <b>{About?.trade_creditor ?About?.trade_creditor.map(value => (<p>{value}</p>)): "N/A" }</b>
                </Typography>
              </Grid>
              <br />
              <Grid>
                <Typography
                  display="inline"
                  variant="h5"
                  style={{ color: "#8a8fa7", float: "left" }}
                >
                  Trade Debtors
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  display="inline"
                  variant="h5"
                  style={{
                    color: "#8a8fa7",
                    float: "left",
                    marginLeft: "17px",
                  }}
                >
                  :
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  display="inline"
                  variant="h5"
                  style={{
                    marginLeft: "50px",
                    fontFamily: "serif",
                  }}
                >
                  <b>{About?.trade_debitor ?About?.trade_debitor.map(value => (<p>{value}</p>)): "N/A" }</b>
                </Typography>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* one lastdiv */}

      <Paper style={{ borderRadius: "10px", margin: "15px 0" }}>
        <Box p={3}>
          {activeUsers.length > 0 ? (
            activeUsers.map((user) => (
              <>
                <Grid container justifyContent="space-between" alignItems="center" marginBottom="5px">
                <Grid item>
                    <div style={{display: "flex",alignItems: "center"}}>
                      <LinkedInIcon
                        color="primary"
                        display="inline"
                        style={{
                          float: "left",
                          fontSize: "2.5rem",
                        }}
                      />
                      <Typography
                        display="inline"
                        style={{
                          float: "left",
                          marginLeft: "5px",
                          fontWeight: "bold",
                          fontSize: "large",
                        }}
                      >
                        {user.fullname}
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      style={{
                        color: "#0bbb0b",
                        height: "30px",
                        fontSize: "small",
                        backgroundColor: "lightgreen",
                      }}
                    >
                      Active
                    </Button>
                  </Grid>
                </Grid>  
                  
                  {/* <Button variant='contained' style={{ marginLeft: "321px", color: "",height:"30px" }}>Active</Button><br /><br /> */}

                  <Grid container>
                    <Grid item>
                      <div>
                        <PersonOutlinedIcon
                          variant="outlined"
                          display="inline"
                          style={{ float: "left", color: "darkgray" }}
                        />
                        <Typography
                          display="inline"
                          style={{
                            float: "left",
                            marginLeft: "5px",
                            color: "#8a8fa7",
                          }}
                        >
                          {user.occupation}
                        </Typography>
                      </div>
                    </Grid>

                    <Grid item>
                      <div>
                        <TranslateOutlinedIcon
                          display="inline"
                          style={{
                            float: "left",
                            marginLeft: "40px",
                            color: "darkgray",
                          }}
                        />
                        <Typography
                          display="inline"
                          style={{
                            float: "left",
                            marginLeft: "5px",
                            color: "#8a8fa7",
                          }}
                        >
                          {user.nationality}
                        </Typography>
                      </div>
                    </Grid>

                    <Grid item>
                      <div>
                        <CakeOutlinedIcon
                          display="inline"
                          style={{
                            float: "left",
                            marginLeft: "40px",
                            color: "darkgray",
                          }}
                        />
                        <Typography
                          display="inline"
                          style={{
                            float: "left",
                            marginLeft: "5px",
                            color: "#8a8fa7",
                          }}
                        >
                          {new Date().getFullYear() - user.date_of_birth_year}{" "}
                          Year Old
                        </Typography>
                      </div>
                    </Grid>

                    <Grid item>
                      <div>
                        <ShareIcon
                          color="primary"
                          display="inline"
                          style={{
                            float: "left",
                            marginLeft: "40px",
                          }}
                        />
                        <Typography
                          display="inline"
                          style={{
                            marginLeft: "5px",
                            color: "#2196f3",
                          }}
                        >
                          See Relationship
                        </Typography>
                      </div>
                    </Grid>
                  </Grid>
               
                <hr></hr>
              </>
            ))
          ) : (
            <h4>No Active Employ </h4>
          )}
        </Box>
      </Paper>
    </Container>
  );
}
