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
import "./index.css";
import { useStyles } from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import MonitorComponent from "../../components/common/MonitorComponent";
import NotesComponent from "../../components/common/NotesComponent";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCompanyNotes, getCompanyList, getDirectorList } from "../../redux/actions/watchAction";
import { Link, useLocation, useHistory } from "react-router-dom";

export default function Dashboard() {
  const classess = useStyles();
  const userData = useSelector((store) => store.auth.userData);
  //const dispatch = useDispatch();
  const companyNotes = useSelector((store) => store.watch.companyNotes);
  const { companyMonitorList } = useSelector((state) => state.watch);
  const dispatch = useDispatch();
  const { companyList } = useSelector((state) => state.watch);
  const [searchResultsCompany, setSearchResultsCompany] = useState([]);
 
  const [searchKeyCompany, setSearchKeyCompany] = useState(""); 
  useEffect(() => {
      if (searchKeyCompany) {
          let re = new RegExp(`${searchKeyCompany}`, "gi");
          let results = companyList.filter((company) =>
              company.company_name.match(re)
          );
          setSearchResultsCompany(results);
      } else {
          setSearchResultsCompany([]);
      }
  }, [searchKeyCompany]);

  useEffect(() => {
    dispatch(getCompanyNotes());
  }, []);
   // Director Search
   const { directorList } = useSelector((state) => state.watch);
   const [searchResultsDirector, setSearchResultsDirector] = useState([]);
   const [searchKeyDirector, setSearchKeyDirector] = useState("");
   useEffect(() => {
       if (searchKeyDirector) {
           let re = new RegExp(`${searchKeyDirector}`, "gi");
           let results = directorList.filter((director) => {
               if (director.fullname !== null) {
                   return director.fullname.match(re);
               }
           });
           setSearchResultsDirector(results);
       } else {
           setSearchResultsDirector([]);
       }
   }, [searchKeyDirector]);


  const news = [
    {
      title: "Abc Infotech Pvt. Ltd.",
      date: "21/05/2021",
      detail:
        "Contrary popular belief, Lorem to Ipsum is simply Contrary popular belief, Lorem to Ipsum is simply...",
    },
    {
      title: "Reco Technologies Pvt. Ltd.",
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

  console.log(companyMonitorList, "@@@@@@@@@@@@@@@", companyNotes);
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
  return (
    <>
      {/* <div className={classess.header} >
    <Typography variant="h7">Welcome back <span style={{color:"#40ACFB"}}>{`${userData.u_first_name} ${userData.u_last_name}`}</span></Typography>
  </div> */}
      <div className={classess.main}>
        {/* Search fields  */}
               <Grid container justify="space-around">
                    <Grid item xs={12} sm={6} style={{ padding: "0 20px" }}>
                        <Typography
                            variant="h6"
                            className={classess.searchHeading}
                        >
                            Search for Company
                        </Typography>
                        <TextField
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
                            value={searchKeyCompany}
                            onChange={(e) =>
                                setSearchKeyCompany(e.target.value)
                            }
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment
                                        className={classess.searchInput}
                                    >
                                        <IconButton>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <div className="searchResultContainer">
                            {searchResultsCompany.length != 0 ? (
                                <div className="dataResult">
                                    {searchResultsCompany
                                        .slice(0, 5)
                                        .map((item, key) => {
                                            return (
                                                <Link
                                                    className="dataItem"
                                                    to={`/company/${item.uuid}/Key-Data`}
                                                    style={{
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    <div>
                                                        {item.company_name}
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                </div>
                            ) : searchKeyCompany != "" ? (
                                <div className="dataResult">
                                    <a className="dataItem">No results found</a>
                                </div>
                            ) : null}
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} style={{ padding: "0 20px" }}>
                        <Typography
                            variant="h6"
                            className={classess.searchHeading}
                        >
                            Search for Director
                        </Typography>
                        <TextField
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
                            value={searchKeyDirector}
                            onChange={(e) =>
                                setSearchKeyDirector(e.target.value)
                            }
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment
                                        className={classess.searchInput}
                                    >
                                        <IconButton>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <div className="searchResultContainer">
                            {searchResultsDirector.length !== 0 ? (
                                <div className="dataResult">
                                    {searchResultsDirector
                                        .slice(0, 5)
                                        .map((item, key) => {
                                            return (
                                                <Link
                                                    className="dataItem"
                                                    to={`/director/${item.uuid}`}
                                                    style={{
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    <div>{item.fullname}</div>
                                                </Link>
                                                
                                            );
                                        })}
                                </div>
                            ) : searchKeyDirector !== "" ? (
                                <div className="dataResult">
                                    <a className="dataItem">No results found</a>
                                </div>
                            ) : null}
                        </div>
                    </Grid>
                    </Grid>
        {/*  Filter Button  */}
        <Link to="/business-search">
          <Button className={classess.filterButton} variant="contained">
            Advance Search
          </Button>
        </Link>
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
                        <MonitorComponent data={val} />
                      ))
                    ) : (
                      <Typography variant="h6">No results found</Typography>
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
                    {news.map((val) => (
                      <NotesComponent data={val} />
                    ))}
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
                      <Typography variant="h6">No results found</Typography>
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
                    Saved LISTS
                  </Typography>
                </Grid>

                <Grid item className={classess.infoGrid}>
                  <Grid item className={classess.savedSerchesClass}>
                    {news.map((val) => (
                      <NotesComponent data={val} />
                    ))}
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
