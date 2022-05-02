import { Grid, Paper, Typography, Button } from "@mui/material";
import React from "react";
import { useStyles } from "./styles";
import Donut from "./pieChart";
import BarChart from "./barChart";


export default function Financials() {
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
            Financials
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
                No. of Companies by Turnover(E)
              </Typography>
              <BarChart  barColor={'#ff6c40'} />
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={[classess.paper, classess.bar]}>
              <Typography variant="h5" className={classess.donutHeading}>
                No. of Companies and % of Total by Last Avail Equity
              </Typography>
              <BarChart barColor={'#ff6c40'} />
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={[classess.paper, classess.bar]}>
              <Typography variant="h5" className={classess.donutHeading}>
                No. of Companies and of Total by Last Avail Total Assets
              </Typography>
              <BarChart barColor={'#ff6c40'} />
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={[classess.paper, classess.bar]}>
              <Typography variant="h5" className={classess.donutHeading}>
                No. of Companies and % of Last Avail Shareholder Funds
              </Typography>
              <BarChart barColor={'#ff6c40'} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
