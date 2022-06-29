import { Grid, Paper, Typography, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import BarChart from "./barChart";
import { useSelector } from "react-redux";

export default function Financials() {
  const classess = useStyles();
  const { Insights } = useSelector((state) => state.company);
  const [byTurnover, setByTurnover] = useState([]);
  const [byEquity, setByEquity] = useState([]);
  const [byProfitAndLoss, setByProfitAndLoss] = useState([]);
  const [byGrossProfit, setByGrossProfit] = useState([]);

  useEffect(() => {
    if (Insights.companiesByTurnoverFinacial) {
      handleByTurnover(Insights.companiesByTurnoverFinacial);
    }
    if (Insights.companiesByEquity) {
      handleByEquity(Insights.companiesByEquity);
    }
    if (Insights.companiesByProfitAndLoss) {
      handleByProfitAndLoss(Insights.companiesByProfitAndLoss);
    }
    if (Insights.companiesByGrossProfit) {
      handleByGrossProfit(Insights.companiesByGrossProfit);
    }
  }, [Insights]);

  const handleByTurnover = (value) => {
    let data = [];
    Object.keys(value).map((key) => {
      data.unshift({
        x: key,
        y: value[key],
      });
    });

    setByTurnover(data);
  };

  const handleByEquity = (value) => {
    let data = [];
    Object.keys(value).map((key) => {
      data.unshift({
        x: key,
        y: value[key],
      });
    });

    setByEquity(data);
  };

  const handleByProfitAndLoss = (value) => {
    let data = [];
    Object.keys(value).map((key) => {
      data.unshift({
        x: key,
        y: value[key],
      });
    });

    setByProfitAndLoss(data);
  };

  const handleByGrossProfit = (value) => {
    let data = [];
    Object.keys(value).map((key) => {
      data.unshift({
        x: key,
        y: value[key],
      });
    });

    setByGrossProfit(data);
  };


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
              <BarChart barColor={"#ff6c40"} data={byTurnover} />
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={[classess.paper, classess.bar]}>
              <Typography variant="h5" className={classess.donutHeading}>
                No. of Companies and % of Total by Last Avail Equity
              </Typography>
              <BarChart barColor={"#ff6c40"} data={byEquity} />
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={[classess.paper, classess.bar]}>
              <Typography variant="h5" className={classess.donutHeading}>
                By Profit And Loss
              </Typography>
              <BarChart barColor={"#ff6c40"} data={byProfitAndLoss} />
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={[classess.paper, classess.bar]}>
              <Typography variant="h5" className={classess.donutHeading}>
                By Gross Profit
              </Typography>
              <BarChart barColor={"#ff6c40"} data={byGrossProfit} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
