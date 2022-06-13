import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography, Button } from "@mui/material";
import { useStyles } from "./styles";
import Donut from "./pieChart";
import BarChart from "./barChart";
import { useSelector } from "react-redux";
import DonutChart from "./Donut";

export default function Type() {
  const classess = useStyles();
  const { Insights } = useSelector((state) => state.company);
  const [byStatus, setByStatus] = useState({});
  const [byAccountCategory, setByAccountCategory] = useState({});
  const [byTypes, setByTypes] = useState({});
  const [byBusinessAge, setByBusinessAge] = useState([]);
  const [byEmployeeSize, setByEmployeeSize] = useState([]);
  const [byTurnover, setByTurnover] = useState([]);

  useEffect(() => {
    if (Insights.companiesByStatus) {
      handleByStatus(Insights.companiesByStatus);
    }
    if (Insights.companiesByAccountCategory) {
      handleByAccountCategory(Insights.companiesByAccountCategory);
    }
    if (Insights.companiesByType) {
      handleByType(Insights.companiesByType);
    }
    if(Insights.companiesByAgeOfBusiness){
      handleByBusinessAge(Insights.companiesByAgeOfBusiness[0])
    }
    if(Insights.companiesByEmployeeSize){
      handleByEmployeSize(Insights.companiesByEmployeeSize[0])
    }
    if(Insights.companiesByTurnover){
      handleByTurnover(Insights.companiesByTurnover[0])
    }
  
  }, [Insights]);

  const handleByStatus = (value) => {
    let data = [];
    let total = value.reduce((total, val) => total + val.statusCount, 0);
    value.forEach((val) => {
      let per = (val.statusCount / total) * 100;
      data.push({
        name: val.status,
        y: per,
      });
    });
    setByStatus(data);
  };

  const handleByAccountCategory = (value) => {
    let data = [];
    let total = value.reduce(
      (total, val) => total + val.accountCategoryCount,
      0
    );
    value.forEach((val) => {
      let per = (val.accountCategoryCount / total) * 100;
      data.push({
        name: val.company_account_category,
        y: per,
      });
    });
    setByAccountCategory(data);
  };

  const handleByType = (value) => {
    let series = [];
    let lables = [];
    let data = [];
    let total = value.reduce((total, val) => total + val.typeCount, 0);
    value.forEach((val) => {
      let per = (val.typeCount / total) * 100;
      data.push({
        name: val.type,
        y: per,
      });
      series.push(per);
      lables.push(val.type);
    });
    setByTypes(data);
  };

  const  handleByBusinessAge = (value) =>{
    let data = [];

    Object.keys(value).map(key=>{
      data.unshift({
            x: key ,
            y: value[key],  
          });
    })
    setByBusinessAge(data);
  }

  const  handleByEmployeSize = (value) =>{
    let data = [];

    Object.keys(value).map(key=>{
      data.unshift({
            x: key ,
            y: value[key],  
          });
    })
    setByEmployeeSize(data);
  }

  
  const  handleByTurnover = (value) =>{
    let data = [];

    Object.keys(value).map(key=>{
      data.unshift({
            x: key ,
            y: value[key],  
          });
    })
    setByTurnover(data);
  }

  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        margin="0 0 10px 0"
      >
        <Grid item>
          <Typography variant="h5" className={classess.donutHeading}>
            Type
          </Typography>
        </Grid>
        <Grid item>
          <Button
            className={classess.filterButton}
            variant="contained"
            size="small"
            startIcon={
              <img
                src={"/images/Filter.png"}
                alt="company-note-list"
                width="30px"
              />
            }
            onClick={() => {}}
          >
            Filter
          </Button>
        </Grid>
      </Grid>

      {/*  Donut charts */}

      <div className={classess.segmentWrapper}>
        <Grid container spacing={2} justifyContent="space-around">
          <Grid item xs={4}>
            <Paper className={classess.paper} style={{ width: "380px" }}>
              {/* <Typography variant="h5" className={classess.donutHeading}>
                Companies by Status
              </Typography> */}
              {/* <Donut series={byStatus.series} lables={byStatus.lables}  /> */}
              <DonutChart data={byStatus} title="Companies by Status" />
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className={classess.paper} style={{ width: "380px" }}>
              {/* <Typography variant="h5" className={classess.donutHeading}>
                Account Categories
              </Typography> */}
              <DonutChart data={byAccountCategory} title="Account Categories" />
              {/* <Donut series={[1,2,3]} lables={["one", "two", "three"]} /> */}
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className={classess.paper} style={{ width: "380px" }}>
              {/* <Typography variant="h5" className={classess.donutHeading}>
                Companies by Type
              </Typography> */}
              {/* <Donut
                series={byTypes.series}
                // lables={["one", "two", "three"]}
              /> */}
              <DonutChart data={byTypes} title="DonCompanies by Type" />
            </Paper>
          </Grid>
        </Grid>

        {/*  Bar charts */}

        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          margin="10px 0"
        >
          <Grid item xs={6}>
            <Paper className={[classess.paper, classess.bar]}>
              <Typography variant="h5" className={classess.donutHeading}>
                No. of Companies by Age of Business
              </Typography>
              <BarChart barColor={"#2d99ff"}  data={byBusinessAge}/>
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={[classess.paper, classess.bar]}>
              <Typography variant="h5" className={classess.donutHeading}>
                No. of Companies by Employess Size
              </Typography>
              <BarChart data={byEmployeeSize} />
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={[classess.paper, classess.bar]}>
              <Typography variant="h5" className={classess.donutHeading}>
                No. of Companies by Turnover
              </Typography>
              <BarChart barColor={"#ff3a6c"} data={byTurnover} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
