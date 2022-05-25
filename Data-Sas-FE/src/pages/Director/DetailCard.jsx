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
  Card,
} from "@material-ui/core";
import { useSelector } from "react-redux";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function DetailCard() {
  const classes = useStyles();
  const { directorDetail } = useSelector((state) => state.watch);

  console.log("DD ....",  directorDetail)
  return (
    <>
      <Typography variant="h6" className={classes.headtext}>
        Director Details
      </Typography>

      <Card>
        <Grid container className={classes.grid}>
          <Grid item xs={6} sm={2} className={classes.gridItem}>
            <Typography
              display="inline"
              variant="h7"
              style={{ color: "#8a8fa7" }}
            >
              Company Name
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} className={classes.gridItem}>
            <Typography
              display="inline"
              variant="h7"
              style={{ color: "#8a8fa7" }}
            >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} className={classes.gridItem}>
            <Typography variant="h7">
                {directorDetail?.compines_offical?.company_name ? directorDetail?.compines_offical?.company_name : "N/A" }
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2} className={classes.gridItem}>
            <Typography variant="h8" style={{ color: "#8a8fa7" }}>
              Company Number
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} className={classes.gridItem}>
            <Typography
              display="inline"
              variant="h8"
              style={{ color: "#8a8fa7" }}
            >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} className={classes.gridItem}>
            <Typography variant="h8">
            {directorDetail?.compines_offical?.company_number ? directorDetail?.compines_offical?.company_number : "N/A" }
            </Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.grid}>
          <Grid item xs={6} sm={2} className={classes.gridItem}>
            <Typography
              display="inline"
              variant="h7"
              style={{ color: "#8a8fa7" }}
            >
              Social Profiles
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} className={classes.gridItem}>
            <Typography
              display="inline"
              variant="h7"
              style={{ color: "#8a8fa7" }}
            >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} className={classes.gridItem}>
            <Grid>
              <FacebookIcon
                color="primary"
                display="inline"
                style={{
                  float: "left",
                  fontSize: "2.5rem",
                }}
              />
            </Grid>
            <Grid>
              <TwitterIcon
                color="primary"
                display="inline"
                style={{
                  float: "left",
                  marginLeft: "10px",
                  fontSize: "2.5rem",
                }}
              />
            </Grid>
            <Grid>
              <LinkedInIcon
                color="primary"
                display="inline"
                style={{
                  float: "left",
                  marginLeft: "10px",
                  fontSize: "2.5rem",
                }}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Director Data  */}

        <Typography
          variant="h6"
          className={classes.headtext}
          style={{ marginLeft: "15px" }}
        >
          Director Data
        </Typography>

        <Grid container className={classes.grid}>
          <Grid item xs={6} sm={2} className={classes.gridItem}>
            <Typography
              display="inline"
              variant="h7"
              style={{ color: "#8a8fa7" }}
            >
              Status
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} className={classes.gridItem}>
            <Typography
              display="inline"
              variant="h7"
              style={{ color: "#8a8fa7" }}
            >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} className={classes.gridItem}>
            <Typography variant="h7">
              <div
                style={{
                  backgroundColor: "#ccecd7",
                  width: "95%",
                  textAlign: "center",
                  color: "#03A339",
                  fontWeight: "bold",
                  fontSize: "18px",
                  borderRadius: "5px",
                }}
              >
                Active
              </div>
            </Typography>
          </Grid>

          <Grid item xs={6} sm={2} className={classes.gridItem}>
            <Typography variant="h8" style={{ color: "#8a8fa7" }}>
              Appointed On
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} className={classes.gridItem}>
            <Typography
              display="inline"
              variant="h8"
              style={{ color: "#8a8fa7" }}
            >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} className={classes.gridItem}>
            <Typography variant="h8">
                {directorDetail?.appointed_on ? directorDetail?.appointed_on : "N/A" }
            </Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.grid}>
          <Grid item xs={6} sm={2} className={classes.gridItem}>
            <Typography
              display="inline"
              variant="h7"
              style={{ color: "#8a8fa7" }}
            >
              Address
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} className={classes.gridItem}>
            <Typography
              display="inline"
              variant="h7"
              style={{ color: "#8a8fa7" }}
            >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} className={classes.gridItem}>
            <Typography variant="h7">993 sdasd ksadhasdhj</Typography>
          </Grid>

          <Grid item xs={6} sm={2} className={classes.gridItem}>
            <Typography variant="h8" style={{ color: "#8a8fa7" }}>
              Role
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} className={classes.gridItem}>
            <Typography
              display="inline"
              variant="h8"
              style={{ color: "#8a8fa7" }}
            >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} className={classes.gridItem}>
            <Typography variant="h8">
            {directorDetail?.officer_role ? directorDetail?.officer_role : "N/A" }
            </Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.grid}>
          <Grid item xs={6} sm={2} className={classes.gridItem}>
            <Typography
              display="inline"
              variant="h7"
              style={{ color: "#8a8fa7" }}
            >
              Email
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} className={classes.gridItem}>
            <Typography
              display="inline"
              variant="h7"
              style={{ color: "#8a8fa7" }}
            >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} className={classes.gridItem}>
            <Typography variant="h7">mail@mail.com</Typography>
          </Grid>

          <Grid item xs={6} sm={2} className={classes.gridItem}>
            <Typography variant="h8" style={{ color: "#8a8fa7" }}>
              Job Title
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} className={classes.gridItem}>
            <Typography
              display="inline"
              variant="h8"
              style={{ color: "#8a8fa7" }}
            >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} className={classes.gridItem}>
            <Typography variant="h8">Lorem ipsum </Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.grid}>
          <Grid item xs={6} sm={2} className={classes.gridItem}>
            <Typography
              display="inline"
              variant="h7"
              style={{ color: "#8a8fa7" }}
            >
              Contect Number
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} className={classes.gridItem}>
            <Typography
              display="inline"
              variant="h7"
              style={{ color: "#8a8fa7" }}
            >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} className={classes.gridItem}>
            <Typography variant="h7">993 sdasd ksadhasdhj</Typography>
          </Grid>

          <Grid item xs={6} sm={2} className={classes.gridItem}>
            <Typography variant="h8" style={{ color: "#8a8fa7" }}>
              Social Profiles
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} className={classes.gridItem}>
            <Typography
              display="inline"
              variant="h8"
              style={{ color: "#8a8fa7" }}
            >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} className={classes.gridItem}>
            <Grid>
              <FacebookIcon
                color="primary"
                display="inline"
                style={{
                  float: "left",
                  fontSize: "2.5rem",
                }}
              />
            </Grid>
            <Grid>
              <TwitterIcon
                color="primary"
                display="inline"
                style={{
                  float: "left",
                  marginLeft: "10px",
                  fontSize: "2.5rem",
                }}
              />
            </Grid>
            <Grid>
              <LinkedInIcon
                color="primary"
                display="inline"
                style={{
                  float: "left",
                  marginLeft: "10px",
                  fontSize: "2.5rem",
                }}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Company Data  */}

        <Typography
          variant="h6"
          className={classes.headtext}
          style={{ marginLeft: "15px" }}
        >
          Company Data
        </Typography>

        <Grid container className={classes.grid}>
          <Grid item xs={6} sm={2} className={classes.gridItem}>
            <Typography
              display="inline"
              variant="h7"
              style={{ color: "#8a8fa7" }}
            >
              Status
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} className={classes.gridItem}>
            <Typography
              display="inline"
              variant="h7"
              style={{ color: "#8a8fa7" }}
            >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} className={classes.gridItem}>
            <Typography variant="h7">
              <div
                style={{
                  backgroundColor: "#ccecd7",
                  width: "95%",
                  textAlign: "center",
                  color: "#03A339",
                  fontWeight: "bold",
                  fontSize: "18px",
                  borderRadius: "5px",
                }}
              >
             {directorDetail?.compines_offical?.company_status ? directorDetail?.compines_offical?.company_status : "N/A" }
              </div>
            </Typography>
          </Grid>

          <Grid item xs={6} sm={2} className={classes.gridItem}>
            <Typography variant="h8" style={{ color: "#8a8fa7" }}>
              Company Category
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} className={classes.gridItem}>
            <Typography
              display="inline"
              variant="h8"
              style={{ color: "#8a8fa7" }}
            >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} className={classes.gridItem}>
            <Typography variant="h8">
            {directorDetail?.compines_offical?.company_category ? directorDetail?.compines_offical?.company_category : "N/A" }
            </Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.grid}>
          <Grid item xs={6} sm={2} className={classes.gridItem}>
            <Typography
              display="inline"
              variant="h7"
              style={{ color: "#8a8fa7" }}
            >
              Incorporated On
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} className={classes.gridItem}>
            <Typography
              display="inline"
              variant="h7"
              style={{ color: "#8a8fa7" }}
            >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} className={classes.gridItem}>
            <Typography variant="h7">
            {directorDetail?.compines_offical?.incorporation_date ? directorDetail?.compines_offical?.incorporation_date : "N/A" }
            </Typography>
          </Grid>

          <Grid item xs={6} sm={2} className={classes.gridItem}>
            <Typography variant="h8" style={{ color: "#8a8fa7" }}>
              SIC Code
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} className={classes.gridItem}>
            <Typography
              display="inline"
              variant="h8"
              style={{ color: "#8a8fa7" }}
            >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} className={classes.gridItem}>
            <Typography variant="h8">
            {directorDetail?.compines_offical?.siccode_1 ? directorDetail?.compines_offical?.siccode_1 : "N/A" }
            </Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.grid}>
          <Grid item xs={6} sm={2} className={classes.gridItem}>
            <Typography
              display="inline"
              variant="h7"
              style={{ color: "#8a8fa7" }}
            >
              Account Category
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} className={classes.gridItem}>
            <Typography
              display="inline"
              variant="h7"
              style={{ color: "#8a8fa7" }}
            >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} className={classes.gridItem}>
            <Typography variant="h7">
            {directorDetail?.compines_offical?.accounts_account_category ? directorDetail?.compines_offical?.accounts_account_category : "N/A" }
            </Typography>
          </Grid>

          <Grid item xs={6} sm={2} className={classes.gridItem}>
            <Typography variant="h8" style={{ color: "#8a8fa7" }}>
              Account
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} className={classes.gridItem}>
            <Typography
              display="inline"
              variant="h8"
              style={{ color: "#8a8fa7" }}
            >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} className={classes.gridItem}>
            <Typography variant="h8">Lorem Ipsum</Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.grid}>
          <Grid item xs={6} sm={2} className={classes.gridItem}>
            <Typography
              display="inline"
              variant="h7"
              style={{ color: "#8a8fa7" }}
            >
              Confirmation Statement
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} className={classes.gridItem}>
            <Typography
              display="inline"
              variant="h7"
              style={{ color: "#8a8fa7" }}
            >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} className={classes.gridItem}>
            <Typography variant="h7">Lorem</Typography>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
