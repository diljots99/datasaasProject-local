import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import {
    Grid,
    Typography,
    TextField,
    IconButton,
    InputAdornment,
    Button,
    Select,
    Card
} from "@material-ui/core";

export default function InfoCard({data}){
    const classes = useStyles()
    return(
        <Card className={classes.root} variant="outlined">
        <Grid container className={classes.grid}>
      <Grid item xs={6} sm={2} className={classes.gridItem}>
        <Typography display="inline"  variant="h7" style={{ color: "#8a8fa7" }} >
          Company Name
        </Typography>
      </Grid>
      <Grid item xs={1} sm={1} className={classes.gridItem}>
        <Typography display="inline" variant="h7" style={{ color: "#8a8fa7" }}>
          :
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3} className={classes.gridItem}>
        <Typography variant="h7">{data.company_name}</Typography>
      </Grid>
      <Grid item xs={6} sm={2} className={classes.gridItem}>
        <Typography variant="h8" style={{ color: "#8a8fa7" }}>Company Number</Typography>
      </Grid>
      <Grid item xs={1} sm={1} className={classes.gridItem}>
        <Typography display="inline" variant="h8" style={{ color: "#8a8fa7" }}>
          :
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3} className={classes.gridItem}>
        <Typography variant="h8">{data.company_number}</Typography>
      </Grid>
    </Grid>

    <Grid container className={classes.grid}>
      <Grid item xs={6} sm={2} className={classes.gridItem}>
        <Typography display="inline" variant="h8" style={{ color: "#8a8fa7" }} >
          Reference No.
        </Typography>
      </Grid>
      <Grid item xs={1} sm={1} className={classes.gridItem}>
        <Typography display="inline" variant="h8" style={{ color: "#8a8fa7" }}>
          :
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3} className={classes.gridItem}>
        <Typography variant="h8">1585</Typography>
      </Grid>
      <Grid item xs={6} sm={2} className={classes.gridItem}>
        <Typography variant="h8" style={{ color: "#8a8fa7" }}>incorporatation Date</Typography>
      </Grid>
      <Grid item xs={1} sm={1} className={classes.gridItem}>
        <Typography display="inline" variant="h8" style={{ color: "#8a8fa7" }}>
          :
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3} className={classes.gridItem}>
        <Typography variant="h8">{data.confstmtlastmadeupdate}</Typography>
      </Grid>
    </Grid>

    <Grid container className={classes.grid}>
      <Grid item xs={6} sm={2} className={classes.gridItem}>
        <Typography display="inline" variant="h8" style={{ color: "#8a8fa7" }} >
          Mail
        </Typography>
      </Grid>
      <Grid item xs={1} sm={1} className={classes.gridItem}>
        <Typography display="inline" variant="h8" style={{ color: "#8a8fa7" }}>
          :
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3} className={classes.gridItem}>
        <Typography variant="h8" style={{color: '#34c0f6'}}>Loremipsum@gmail.com</Typography>
      </Grid>
      <Grid item xs={6} sm={2} className={classes.gridItem}>
        <Typography variant="h8" style={{ color: "#8a8fa7" }}>Account category</Typography>
      </Grid>
      <Grid item xs={1} sm={1} className={classes.gridItem}>
        <Typography display="inline" variant="h8" style={{ color: "#8a8fa7" }}>
          :
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3} className={classes.gridItem}>
        <Typography variant="h8">{data.company_category}</Typography>
      </Grid>
    </Grid>

    <Grid container className={classes.grid}>
      <Grid item xs={6} sm={2} className={classes.gridItem}>
        <Typography display="inline" variant="h8" style={{ color: "#8a8fa7" }} >
          Status
        </Typography>
      </Grid>
      <Grid item xs={1} sm={1} className={classes.gridItem}>
        <Typography display="inline" variant="h8" style={{ color: "#8a8fa7" }}>
          :
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3} className={classes.gridItem}>
      <div style={{backgroundColor:"#ccecd7", width:"80px",textAlign:"center",color:"#03A339" ,fontWeight: "bold",fontSize: "18px", borderRadius:"5px"}}>
        {data.company_status}
        </div>
      </Grid>
      <Grid item xs={6} sm={2} className={classes.gridItem}>
        <Typography variant="h8" style={{ color: "#8a8fa7" }}>Liquidation date</Typography>
      </Grid>
      <Grid item xs={1} sm={1} className={classes.gridItem}>
        <Typography display="inline" variant="h8" style={{ color: "#8a8fa7" }}>
          :
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3} className={classes.gridItem}>
        <Typography variant="h8">{data.confstmtnextduedate}</Typography>
      </Grid>
    </Grid>

    <Grid container className={classes.grid} >
      <Grid item xs={6} sm={2} className={classes.gridItem}> 
        <Typography display="inline" variant="h8" style={{ color: "#8a8fa7" }} >
          Telephone
        </Typography>
      </Grid>
      <Grid item xs={1} sm={1} className={classes.gridItem}>
        <Typography display="inline" variant="h8" style={{ color: "#8a8fa7" }}>
          :
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3} className={classes.gridItem}>
        <Typography variant="h8">4756-234-544</Typography>
      </Grid>
      <Grid item xs={6} sm={2} className={classes.gridItem}>
        <Typography variant="h8" style={{ color: "#8a8fa7" }}>NO. of Employees</Typography>
      </Grid>
      <Grid item xs={1} sm={1} className={classes.gridItem}>
        <Typography display="inline" variant="h8" style={{ color: "#8a8fa7" }}>
          :
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3} className={classes.gridItem}>
        <Typography variant="h8">4323</Typography>
      </Grid>
    </Grid>

    <Grid container className={classes.grid}>
      <Grid item xs={6} sm={2} className={classes.gridItem}>
        <Typography display="inline" variant="h8" style={{ color: "#8a8fa7" }} >
          Legal Form 
        </Typography>
      </Grid>
      <Grid item xs={1} sm={1} className={classes.gridItem}>
        <Typography display="inline" variant="h8" style={{ color: "#8a8fa7" }}>
          :
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3} className={classes.gridItem}>
        <Typography variant="h8">lorem ipsum</Typography>
      </Grid>
      <Grid item xs={6} sm={2} className={classes.gridItem}>
        <Typography variant="h8" style={{ color: "#8a8fa7" }}>Dissolution Date</Typography>
      </Grid>
      <Grid item xs={1} sm={1} className={classes.gridItem}>
        <Typography display="inline" variant="h8" style={{ color: "#8a8fa7" }}>
          :
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3} className={classes.gridItem}>
        <Typography variant="h8">13/03/2021</Typography>
      </Grid>
    </Grid>

        </Card>
    )
} 