import React from "react";
import { Grid, Typography, Card, Button } from "@material-ui/core";
import { useStyles } from "./styles";

export default function Subscription() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.infoBar}>
        <p className={classes.infoBarPara}>
          Your Current Active Plane is :{" "}
          <spam className={classes.infoBarSpam}>Start</spam>
        </p>
      </div>
      <Card className={classes.root} variant="outlined">
        <Grid container className={classes.grid}>
          <Grid item xs={6} sm={2}>
            <Typography
              display="inline"
              variant="h8"
              style={{ color: "#8a8fa7" }}
              className={classes.leftConetent}
            >
              Sr.No.
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1}>
            <Typography
              display="inline"
              variant="h8"
              style={{ color: "#8a8fa7" }}
              className={classes.leftConetent}
            >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="h8" className={classes.rightConetent}>
              Fhzhdeye2232131313
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Typography
              variant="h8"
              style={{ color: "#8a8fa7" }}
              className={classes.leftConetent}
            >
              Plan Name{" "}
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1}>
            <Typography
              display="inline"
              variant="h8"
              style={{ color: "#8a8fa7" }}
              className={classes.leftConetent}
            >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="h8" className={classes.rightConetent}>
              Start
            </Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.grid}>
          <Grid item xs={6} sm={2}>
            <Typography
              display="inline"
              variant="h8"
              style={{ color: "#8a8fa7" }}
              className={classes.leftConetent}
            >
              Limited Details
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1}>
            <Typography
              display="inline"
              variant="h8"
              style={{ color: "#8a8fa7" }}
              className={classes.leftConetent}
            >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Typography variant="h8" className={classes.rightConetent}>
              This is filled with Limited Details
            </Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.grid}>
          <Grid item xs={6} sm={2}>
            <Typography
              display="inline"
              variant="h8"
              style={{ color: "#8a8fa7" }}
              className={classes.leftConetent}
            >
              Subscription Details
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1}>
            <Typography
              display="inline"
              variant="h8"
              style={{ color: "#8a8fa7" }}
              className={classes.leftConetent}
            >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Typography variant="h8" className={classes.rightConetent}>
              This is filled with Subiscription Details
            </Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.grid}>
          <Grid item xs={6} sm={2}>
            <Typography
              display="inline"
              variant="h8"
              style={{ color: "#8a8fa7" }}
              className={classes.leftConetent}
            >
              Feature
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1}>
            <Typography
              display="inline"
              variant="h8"
              style={{ color: "#8a8fa7" }}
              className={classes.leftConetent}
            >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="h8" className={classes.rightConetent}>
              Feature details goes hear
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Typography
              variant="h8"
              style={{ color: "#8a8fa7" }}
              className={classes.leftConetent}
            >
              Plan Amount
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1}>
            <Typography
              display="inline"
              variant="h8"
              style={{ color: "#8a8fa7" }}
              className={classes.leftConetent}
            >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="h8" className={classes.rightConetent}>
              $ 8.44
            </Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.grid}>
          <Grid item xs={6} sm={2}>
            <Typography
              display="inline"
              variant="h8"
              style={{ color: "#8a8fa7" }}
              className={classes.leftConetent}
            >
              Total Limit
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1}>
            <Typography
              display="inline"
              variant="h8"
              style={{ color: "#8a8fa7" }}
              className={classes.leftConetent}
            >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="h8" className={classes.rightConetent}>
              3352550
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Typography
              variant="h8"
              style={{ color: "#8a8fa7" }}
              className={classes.leftConetent}
            >
              Start date{" "}
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1}>
            <Typography
              display="inline"
              variant="h8"
              style={{ color: "#8a8fa7" }}
              className={classes.leftConetent}
            >
              :
            </Typography>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Typography variant="h8" className={classes.rightConetent}>
              {" "}
              3/5/2021
            </Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.grid}>
          <Grid item xs={6} sm={2}>
            <Typography
              display="inline"
              variant="h8"
              style={{ color: "#8a8fa7" }}
              className={classes.leftConetent}
            >
              Limit Available
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1}>
            <Typography
              display="inline"
              variant="h8"
              style={{ color: "#8a8fa7" }}
              className={classes.leftConetent}
            >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="h8" className={classes.rightConetent}>
              105000
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Typography
              variant="h8"
              style={{ color: "#8a8fa7" }}
              className={classes.leftConetent}
            >
              End Date{" "}
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1}>
            <Typography
              display="inline"
              variant="h8"
              style={{ color: "#8a8fa7" }}
              className={classes.leftConetent}
            >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="h8" className={classes.rightConetent}>
              10/6/2022
            </Typography>
          </Grid>
        </Grid>
      </Card>

      {/* <Grid container>
        <Grid item xs={12} sm={3}>
          <Button
            className={classes.filterButton}
            color="primary"
            variant="contained">
            Update Plane
          </Button>
        </Grid>
      </Grid> */}
    </div>
  );
}
