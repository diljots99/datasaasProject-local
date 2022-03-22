import React from "react";
import { Grid, Typography, Divider } from "@mui/material";
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

export default function NotesComponent({ data }) {
  const classnames = useStyles();

  return (
    <Grid container className={classnames.mainContainer}>
      <Grid container className={classnames.infoHeader}>
        <Grid item>
          <Typography
            display="inline"
            variant="h8"
            className={classnames.headerText}
          >
            {data.n_company_name}
          </Typography>
        </Grid>
        <Grid item>
          <Typography display="inline" variant="h8" className={classnames.date}>
            {data.createdAt}
          </Typography>
        </Grid>
      </Grid>
      <Grid item className={classnames.paraContainer}>
        <Typography display="inline" variant="p" className={classnames.para}>
          {data.n_text}
        </Typography>
        <Divider className={classnames.divider} />
      </Grid>
    </Grid>
  );
}
