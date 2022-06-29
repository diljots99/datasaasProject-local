import {
  Grid,
  Paper,
  Typography,
  Button,
  Menu,
  MenuItem,
  DialogTitle,
} from "@mui/material";
import React, { useEffect, useState, Suspense, lazy } from "react";
import { useStyles } from "./styles";
// import MapComponent from "./mapComponent";
import { useSelector } from "react-redux";
// import countyData from './mapComponent/County.json'

import FilterDropdown from "./Filters/FilterDropdown";

const MapComponent = lazy(() => import("./mapComponent"));

export default function Geography() {
  const classess = useStyles();
  const { InsightsByRegion, InsightsByCounty, InsightsFilterList } =
    useSelector((state) => state.company);
  const [byRegion, setByReagion] = useState([]);
  const [byCounty, setByCounty] = useState([]);
  const [filterByCounty, setFilterByCounty] = useState("");
  const [byCountyFilterValue, setByCountyFilterValue] = useState(null);

  const [filterByRegion, setFilterByRegion] = useState("");
  const [byRegionFilterValue, setByRegionFilterValue] = useState(null);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (InsightsFilterList) {
      const byCounty = InsightsFilterList.filter(
        ({ name }) => name === "county"
      )[0]?.suggestions;
      const byRegion = InsightsFilterList.filter(
        ({ name }) => name === "region"
      )[0]?.suggestions;

      setByCountyFilterValue(byCounty);
      setByRegionFilterValue(byRegion);
    }
  }, [InsightsFilterList]);

  useEffect(() => {
    if (InsightsByRegion) {
      setByReagion(InsightsByRegion);
    }
    if (InsightsByCounty) {
      setByCounty(InsightsByCounty);
    }
  }, [InsightsByRegion, InsightsByCounty]);

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
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
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
            onClick={handleClick}
          >
            Filter
          </Button>
          <Menu
            components="div"
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <div className={classess.menu}>
              <MenuItem>
                <DialogTitle className={classess.filtertitle}>
                  Geography
                </DialogTitle>
              </MenuItem>

              <MenuItem>
                <FilterDropdown
                  title="By County"
                  multiple={true}
                  value={filterByCounty}
                  onChange={setFilterByCounty}
                  filterValue={byCountyFilterValue}
                />
              </MenuItem>

              <MenuItem>
                <FilterDropdown
                  title="By Region"
                  multiple={true}
                  value={filterByRegion}
                  onChange={setFilterByRegion}
                  filterValue={byRegionFilterValue}
                />
              </MenuItem>
            </div>
          </Menu>
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
