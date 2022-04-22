import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import {
  Grid,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Button,
  Select,
} from "@material-ui/core";

const useStyles = makeStyles({
    main:{ border: "1px solid #DCD9D9", borderRadius: "10px", marginTop: "10px", marginBottom: "10px" , background: "#fff"},
  cardHeader: {
    paddingLeft: "20px",
    backgroundColor: " #EDEBEB",
    borderRadius: " 10px 10px 0 0",
    height: "40px",
    alignItems: "center",
    display: "flex",
  },
});

export default function InfoCard({ title, data }) {
  const classess = useStyles();

  return (
    <div className={classess.main}>
      <div className={classess.cardHeader}>
        <Typography variant="h6" style={{fontFamily: "Poppins" , fontSize: "24px" , lineHeight: "36px" , color: "#000000" , fontWeight: "600" ,}}>{title}</Typography>
      </div>
      <Grid container style={{ paddingTop: "5px", paddingBottom: "10px" }}>
        {data.map((value) => (
          <Grid
            container
            style={{ justifyContent: "space-around", marginTop: "8px" }}
          >
            <Grid item xs={6} sm={3}>
              <Typography variant="h7" style={{ fontFamily: "Poppins" , fontSize: "20px" , lineHeight: "44px" , color: "#727272" , fontWeight: "400"  }}>
                {value.heading}{" "}
              </Typography>
            </Grid>
            <Grid item  xs={1} sm={1}>
              :
            </Grid>
            <Grid item xs={6} sm={6}>
              <Typography variant="h7" style={{ fontFamily: "Poppins" , fontSize: "22px" , lineHeight: "44px" , color: "#23273A" , fontWeight: "400"  }}>
                {value.value}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
