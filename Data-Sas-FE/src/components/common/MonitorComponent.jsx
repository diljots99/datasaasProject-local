import { Grid, Typography } from "@mui/material";
import react from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  mainContainer: {
    margin: "10px 0",
    alignItems: " center",
    justifyContent: "space-around",
  },
  image: {
    height: " 100%",
    width: "100%",
  },
  para: {
    color: " #727272",
    fontSize: "14px",
    margin: 0,
    lineHeight: "24px",
    color: "#727272",
  },
  nameHeader: {
    fontSize: "18px",
    fontWeight: "bold",
    fontFamily: "Poppins",
    lineHeight: "44px",
    color: "#23273A",
  },
  details: {
    width: "200px",
  },
});

export default function MonitorComponent({ data }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.mainContainer}>
      <Grid item xs={2}>
        <div className={classes.imgContainer}>
          <img
            src="images/logo.png"
            alt="company logo"
            className={classes.image}
          />
        </div>
      </Grid>
      <Grid item className={classes.details}>
        <Grid item>
          <Typography variant="h8" className={classes.nameHeader}>
            {data.company_name ? data.company_name : data.fullname}
          </Typography>
        </Grid>
        <Grid item>
          <div>
            <p className={classes.para}>{data.company_category ? data.company_category  : data.officer_role}</p>

          </div>
          <br/>
          <div>
            <p className={classes.para}>{data.company_status}</p>

          </div>
          
          {/* <p className={classes.para}>company details</p> */}
        </Grid>
      </Grid>
    </Grid>
  );
}
