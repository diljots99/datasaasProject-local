import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  IconButton,
  InputAdornment,
  Divider,
} from "@material-ui/core";
import Autocomplete from "@mui/material/Autocomplete";
import "./index.css";
import { useStyles } from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import MonitorComponent from "../../components/common/MonitorComponent";
import NotesComponent from "../../components/common/NotesComponent";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getCompanyNotes,
  getCompanyList,
  getDirectorList,
} from "../../redux/actions/watchAction";
import { Link, useLocation, useHistory } from "react-router-dom";
import { setFilter } from "../../redux/actions/filterAction";

export default function Dashboard() {
  const classess = useStyles();
  const history = useHistory();
  const userData = useSelector((store) => store.auth.userData);
  //const dispatch = useDispatch();
  const companyNotes = useSelector((store) => store.watch.companyNotes);
  const { companyMonitorList ,directorMonitorList , directorList  } = useSelector((state) => state.watch);
  const dispatch = useDispatch();
  const { companyList } = useSelector((state) => state.watch);

  let companyOptions = companyList.map((val) => ({
    label: val.company_name ? val.company_name : "nan",
    id: val.uuid,
  }));

  useEffect(() => {
    dispatch(getCompanyNotes());
  }, []);

  // Director Search

  let directorOptions = directorList.map((val) => ({
    label: val.fullname ? val.fullname : "nan",
    id: val.uuid,
  }));

  const news = [];

  console.log({companyMonitorList, companyNotes ,directorMonitorList});
  const notes = companyNotes;
  const companymoitor = companyMonitorList;
  const monitor = [
    {
      title: "Abc Infotech Pvt. Ltd.",
      image: "http://",
      date: "21/05/2021",
      detail:
        "Contrary popular belief, Lorem to Ipsum is simply Contrary popular belief, Lorem to Ipsum is simply...",
    },
    {
      title: "Reco Technologies Pvt. Ltd.",
      image: "http://",
      date: "21/05/2021",
      detail:
        "Contrary popular belief, Lorem to Ipsum is simply Contrary popular belief, Lorem to Ipsum is simply...",
    },
    {
      title: "MechlinTech",
      date: "21/05/2021",
      detail:
        "Contrary popular belief, Lorem to Ipsum is simply Contrary popular belief, Lorem to Ipsum is simply...",
    },
    {
      title: "Microsoft",
      date: "21/05/2021",
      detail:
        "Contrary popular belief, Lorem to Ipsum is simply Contrary popular belief, Lorem to Ipsum is simply...",
    },
  ];

  console.log("userData", userData);
  console.log(monitor, "BASE_URL  ", process.env);

  const handleAdvanceSearch = () => {
    history.push("/business-search");
    dispatch(setFilter(true));
  };

  return (
    <>
      {/* <div className={classess.header} >
    <Typography variant="h7">Welcome back <span style={{color:"#40ACFB"}}>{`${userData.u_first_name} ${userData.u_last_name}`}</span></Typography>
  </div> */}
      <div className={classess.main}>
        {/* Search fields  */}
        <Grid container justify="space-around">
          <Grid item xs={12} sm={6} style={{ padding: "0 20px" }}>
            <Typography variant="h6" className={classess.searchHeading}>
              Search for Company
            </Typography>

            <Autocomplete
              variant="outlined"
              id="combo-box-demo"
              options={companyOptions}
              onChange={(event, newValue) => {
                history.push(`/company/${newValue.id}/Key-Data`);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  style={{
                    width: "100%",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #DCD9D9",
                    borderRadius: "4px",
                    position: "unset",
                  }}
                  variant="outlined"
                  size="small"
                  placeholder="Enter Company Name..."
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} style={{ padding: "0 20px" }}>
            <Typography variant="h6" className={classess.searchHeading}>
              Search for Director
            </Typography>

            <Autocomplete
              variant="outlined"
              id="combo-box-demo"
              options={directorOptions}
              onChange={(event, newValue) => {
                history.push(`/director/${newValue.id}`);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  style={{
                    width: "100%",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #DCD9D9",
                    borderRadius: "4px",
                    position: "unset",
                  }}
                  variant="outlined"
                  size="small"
                  placeholder="Enter Person's Name..."
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </Grid>
        </Grid>
        {/*  Filter Button  */}
        <Button
          className={classess.filterButton}
          variant="contained"
          onClick={() => handleAdvanceSearch()}
        >
          Advance Search
        </Button>
        {/* User Informaiton   */}
        <Grid container className={classess.infoContainer}>
          {/* list for Company Monitor */}
          <Grid item className={classess.paperColumn}>
            <Paper className={classess.paper}>
              <Grid container className={classess.paperGrid}>
                <Grid item className={classess.infoGridHeader}>
                  <Typography variant="h6" className={classess.infoHeader}>
                    Company Monitor{" "}
                  </Typography>
                </Grid>

                <Grid item className={classess.infoGrid}>
                  <Grid item className={classess.savedSerchesClass}>
                    {companymoitor.length > 0 ? (
                      companymoitor.map((val) => (
                        <>
                         <MonitorComponent data={val} />
                        <Divider />
                        </>
                      ))
                    ) : (
                      <Typography variant="h6" textAlign="center">
                        No results found
                      </Typography>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* list for Director Monitor */}
          <Grid item className={classess.paperColumn}>
            <Paper className={classess.paper}>
              <Grid container className={classess.paperGrid}>
                <Grid item className={classess.infoGridHeader}>
                  <Typography variant="h6" className={classess.infoHeader}>
                  Director Monitor{" "}
                  </Typography>
                </Grid>

                <Grid item className={classess.infoGrid}>
                  <Grid item className={classess.savedSerchesClass}>
                    {directorMonitorList.length > 0 ? (
                      directorMonitorList.map((val) => (<>
                        <MonitorComponent data={val} />
                        <Divider />
                        </>
                      ))
                    ) : (
                      <Typography variant="h6" textAlign="center">
                        No results found
                      </Typography>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* list for Saved Searches */}
          <Grid item className={classess.paperColumn}>
            <Paper className={classess.paper}>
              <Grid container className={classess.paperGrid}>
                <Grid item className={classess.infoGridHeader}>
                  <Typography variant="h6" className={classess.infoHeader}>
                    Saved Searches
                  </Typography>
                </Grid>

                <Grid item className={classess.infoGrid}>
                  <Grid item className={classess.savedSerchesClass}>
                    {news.length > 0 ? (
                      news.map((val) => <NotesComponent data={val} />)
                    ) : (
                      <Typography variant="h6" textAlign="center">
                        No results found
                      </Typography>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* list for Notes */}
          <Grid item className={classess.paperColumn}>
            <Paper className={classess.paper}>
              <Grid container className={classess.paperGrid}>
                <Grid item className={classess.infoGridHeader}>
                  <Typography variant="h6" className={classess.infoHeader}>
                    Notes
                  </Typography>
                </Grid>

                <Grid item className={classess.infoGrid}>
                  <Grid item className={classess.savedSerchesClass}>
                    {notes.length > 0 ? (
                      notes.map((val) => <NotesComponent data={val} />)
                    ) : (
                      <Typography variant="h6" textAlign="center">
                        No results found
                      </Typography>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* list for Saved List */}
          <Grid item className={classess.paperColumn}>
            <Paper className={classess.paper}>
              <Grid container className={classess.paperGrid}>
                <Grid item className={classess.infoGridHeader}>
                  <Typography variant="h6" className={classess.infoHeader}>
                    Saved Lists
                  </Typography>
                </Grid>

                <Grid item className={classess.infoGrid}>
                  <Grid item className={classess.savedSerchesClass}>
                    {news.length > 0 ? (
                      news.map((val) => <NotesComponent data={val} />)
                    ) : (
                      <Typography variant="h6" textAlign="center">
                        No results found
                      </Typography>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
