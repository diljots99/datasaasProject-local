import { Grid, Paper, Typography, Button } from "@mui/material";
import React from "react";
import { useStyles } from "./styles";
import MapComponent from "../../components/mapComponent";
import { useSelector } from "react-redux";

export default function Geography() {
    const classess = useStyles();
    const { Insights } = useSelector((state) => state.company);
    console.log("insights .", Insights)
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
            Geography
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
        <Grid container>
          <Grid container justifyContent="space-around">
            <Grid item xs={6} className={classess.mapItem}>
              <div className={classess.mapContainer}>
                <Typography variant="h5" className={classess.donutHeading}>
                  Business By Sector
                </Typography>
                <MapComponent />
              </div>
            </Grid>
            <Grid item xs={6} className={classess.mapItem}>
              <div className={classess.mapContainer}>
                <Typography variant="h5" className={classess.donutHeading}>
                  Business By Size
                </Typography>
                <MapComponent />
              </div>
            </Grid>
          </Grid>

          <Grid container justifyContent="space-around" margin="10px 0">
          
             <Grid item xs={6} className={classess.mapItem}>
              <div className={classess.mapContainer}>
                <Typography variant="h5" className={classess.donutHeading}>
                  Business By County
                </Typography>
                <MapComponent />
              </div>
            </Grid>
            <Grid item xs={6} className={classess.mapItem}>
              <div className={classess.mapContainer}>
                <Typography variant="h5" className={classess.donutHeading}>
                  Business By Region
                </Typography>
                <MapComponent />
              </div>
            </Grid>
          </Grid>

          {/* <Grid container justifyContent="space-around">
             <Grid item xs={6} className={classess.mapItem}>
              <div className={classess.mapContainer}>
                <Typography variant="h5" className={classess.donutHeading}>
                  Business By Country
                </Typography>
                <MapComponent />
              </div>
            </Grid>
            <Grid item xs={6} className={classess.mapItem}>
              <div className={classess.mapContainer}>
                <Typography variant="h5" className={classess.donutHeading}>
                  Business By Constituency
                </Typography>
                <MapComponent />
              </div>
            </Grid>
          </Grid> */}
        </Grid>
      </div>
    </>
  )
}
