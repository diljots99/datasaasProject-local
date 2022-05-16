import React from "react";
import { Grid, Typography, Divider, Chip } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  mainContainer: {
    padding: "0 30px",
    margin: "10px 0",
  },
  infoHeader: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    color: "#34c0f6",
    fontSize: "13px",
  },
  para: {
    color: " #727272",
    fontSize: " 15px",
    margin: 0,
  },
  headerText: {
    fontSize: "19px",
    fontWeight: "bold",
  },
  paraContainer: { margin: "5px 0" },
  divider: {
    margin: "10px ​0 4px 0  !important",
    height: "4px !important",
  },
});

export default function SavedSearchesComponent({ data }) {
  const classnames = useStyles();
  console.log("Data", data);
  return (
    <Grid container className={classnames.mainContainer}>
      <Grid container className={classnames.infoHeader}>
        <Grid item>
          <Typography
            display="inline"
            variant="h8"
            className={classnames.headerText}
          >
            {data.fliter_name}
          </Typography>
        </Grid>
        <Grid item className={classnames.filterHeading}>
          {data.chip_data.map((dat) => (
            <>
              <Typography> {dat.chip_group}</Typography>
              <Grid item>
                {dat.chip_values.map((val) => {
                  return (
                    <Chip
                      style={{ margin: "2px" }}
                      label={val.chip_value}
                      color="success"
                    />
                  );
                })}
              </Grid>
            </>
          ))}
        </Grid>
      </Grid>
      <Divider className={classnames.divider} />
    </Grid>
  );
}
