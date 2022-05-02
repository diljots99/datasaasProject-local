import React from 'react'
import { Grid, Paper, Typography, Button } from "@mui/material";
import { useStyles } from "./styles";
import Donut from "./pieChart";
import BarChart from "./barChart";

export default function Type() {
    const classess = useStyles();
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
            <Paper className={classess.paper}>
              <Typography variant="h5" className={classess.donutHeading}>
                Companies by Status
              </Typography>
              <Donut />
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className={classess.paper}>
              <Typography variant="h5" className={classess.donutHeading}>
                Account Categories
              </Typography>
              <Donut />
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className={classess.paper}>
              <Typography variant="h5" className={classess.donutHeading}>
                Companies by Type
              </Typography>
              <Donut />
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
              <BarChart barColor={'#2d99ff'} />
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={[classess.paper, classess.bar]}>
              <Typography variant="h5" className={classess.donutHeading}>
                No. of Companies by Employess Size
              </Typography>
              <BarChart />
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={[classess.paper, classess.bar]}>
              <Typography variant="h5" className={classess.donutHeading}>
                No. of Companies by Turnover
              </Typography>
              <BarChart barColor={"#ff3a6c"} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
