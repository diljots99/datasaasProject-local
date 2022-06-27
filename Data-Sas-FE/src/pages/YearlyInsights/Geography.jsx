import { Grid, Paper, Typography, Button } from "@mui/material";
import React, { useEffect, useState, Suspense, lazy  } from "react";
import { useStyles } from "./styles";
// import MapComponent from "./mapComponent";
import { useSelector } from "react-redux";
// import countyData from './mapComponent/County.json'

const MapComponent = lazy(() => import("./mapComponent"));

export default function Geography() {
  const classess = useStyles();
  const { InsightsByRegion, InsightsByCounty } = useSelector((state) => state.company);
  console.log("InsightsByRegion .",InsightsByRegion );
  const [byRegion, setByReagion] = useState([]);
  const [byCounty, setByCounty]= useState([]);

  useEffect(() => {
    if (InsightsByRegion ) {
      console.log("by region ,", InsightsByRegion);
      // handleByRegion(Insights.companiesByRegion);
      setByReagion(InsightsByRegion )
    }
    if(InsightsByCounty){
      console.log("by InsightsByCounty ,", InsightsByCounty);
      // handleByRegion(Insights.companiesByRegion);
      setByCounty(InsightsByCounty)
    }
  }, [InsightsByRegion, InsightsByCounty]);

  const handleByRegion = (value) => {
    const clusterArray = value.map((val) => {
      const locationOBJ = val.geocode_suggestions[0];
      console.log("lo ,", locationOBJ);
      return {
        type: "Feature",
        address_region: val.address_region,
        number_of_companies: val.number_of_companies,
        geometry: {
          type: "Point",
          coordinates: [locationOBJ?.longitude, locationOBJ?.latitude],
        },
      };
    });

    console.log("by region ,", clusterArray);
    setByReagion(clusterArray);
  };

  // console.log({byCounty , countyData })

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
                <Suspense
    fallback={
      <div>
        <h1>LOADING Map .... </h1>
      </div>
    }
  > 
                <MapComponent data={byCounty} />
                </Suspense>
              </div>
            </Grid>
            <Grid item xs={6} className={classess.mapItem}>
              <div className={classess.mapContainer}>
                <Typography variant="h5" className={classess.donutHeading}>
                  Business By Region
                </Typography>

                <Suspense
    fallback={
      <div>
        <h1>LOADING Map .... </h1>
      </div>
    }
  > 
                <MapComponent data={byRegion} />
                </Suspense>
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
  );
}
