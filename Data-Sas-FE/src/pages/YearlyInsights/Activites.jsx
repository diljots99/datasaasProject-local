import { Grid, Paper, Typography, Button } from "@mui/material";
import React from "react";
import { useStyles } from "./styles";
import Donut from "./pieChart";
import BarChart from "./barChart";

export default function Activites() {
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
            Activites
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

      <div className={classess.segmentWrapper}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={6}>
            <Paper className={[classess.paper, classess.bar]}>
              <Typography variant="h5" className={classess.donutHeading}>
                No. of Companies by SIC Section
              </Typography>
              <BarChart barColor={'#601484'} />
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={[classess.paper, classess.bar]}>
              <Typography variant="h5" className={classess.donutHeading}>
                No. of Companies by SIC Division
              </Typography>
              <BarChart barColor={'#601484'} />
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={[classess.paper, classess.bar]}>
              <Typography variant="h5" className={classess.donutHeading}>
                No. of Companies by Sector
              </Typography>
              <BarChart barColor={'#601484'} />
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={[classess.paper, classess.bar]}>
              <Typography variant="h5" className={classess.donutHeading}>
                No. of Companies by SIC Code
              </Typography>
              <BarChart barColor={'#601484'} />
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={2} justifyContent="space-around" margin="10px 0">
          <Grid item xs={4}>
            <Paper className={classess.paper}>
              <Typography variant="h5" className={classess.donutHeading}>
                No. of Companies by Expoter
              </Typography>
              <Donut />
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className={classess.paper}>
              <Typography variant="h5" className={classess.donutHeading}>
                No. of Companies by Importer
              </Typography>
              <Donut />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
