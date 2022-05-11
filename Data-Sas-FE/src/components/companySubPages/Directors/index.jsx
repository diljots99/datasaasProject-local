import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import {
  Grid,
  Typography,
  Button,
  InputAdornment,
  TextField,
  IconButton,
  Modal,
} from "@material-ui/core";
import Table from "./Table";
import SearchIcon from "@material-ui/icons/Search";
import Checkbox from "@mui/material/Checkbox";
import DirectorCard from "../../common/DirectorCard";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import { useSelector, useDispatch } from "react-redux";
import { getCompanySpecificDirectorList } from "../../../redux/actions/watchAction";
import { getDirectors } from "../../../redux/actions/companyActions";
import { useParams } from "react-router-dom";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Directors = () => {
  const classess = useStyles();
  const [monitor, setMonitor] = useState(false);

  const dispatch = useDispatch();
  const { companyDetail } = useSelector((state) => state.watch);
  const { Directors } = useSelector((state) => state.company);
  const [showmodel, setshowmodel] = useState(false);
  const [filterValue, setFilterValue] = useState("all");
  const [allSelected, setAllSelected] = useState(false);
  const [checked, setChecked] = useState([]);

  const [tabledata, settableData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [pageCount, setPageCount] = React.useState(0);
  const compSumfetchIdRef = React.useRef(0);

  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(getDirectors(companyDetail.uuid));
  }, [companyDetail]);

  useEffect(() => {
    if (!allSelected) {
      setChecked([]);
    } else {
      const temp = data.map((item, index) => {
        return item.uuid;
      });
      setChecked(temp);
    }
  }, [allSelected]);

  useEffect(() => {
    if (Directors.result?.length > 0) {
      setData(Directors.result);
    } else {
      setData([]);
    }
  }, [Directors]);

  const genrateData = () => {
    let downloadable = tabledata.filter((data) => checked.includes(data.uuid));

    // console.log("downloadable ." , downloadable)
    if (checked.length > 0) {
      return downloadable;
    } else {
      return data;
    }
  };

  const applyFilter = () => {
    switch (filterValue) {
      case "all":
        {
          settableData(data);
        }
        break;
      case "active":
        {
          let filteredData = data.filter(
            (val) => val.resigned_on === null && val.appointed_on !== null
          );
          console.log("active filtered", filteredData);
          settableData(filteredData);
        }
        break;
      case "activeResigned":
        {
          let filteredDataActive = data.filter(
            (val) => val.resigned_on === null && val.appointed_on !== null
          );
          let filteredDataRegistered = data.filter(
            (val) => val.resigned_on !== null
          );
          console.log(
            "activeResigned filtered",
            filteredDataActive,
            filteredDataRegistered,
            [...filteredDataActive, ...filteredDataRegistered]
          );
          settableData([...filteredDataActive, ...filteredDataRegistered]);
        }
        break;
      case "activeInactive":
        {
          let filteredDataActive = data.filter(
            (val) => val.resigned_on === null && val.appointed_on !== null
          );
          let filteredDataInactive = data.filter(
            (val) => val.appointed_on !== null && val.resigned_on !== null
          );
          console.log(
            "activeInactive filtered",
            filteredDataActive,
            filteredDataInactive,
            filteredDataInactive
          );
          settableData([...filteredDataActive, ...filteredDataInactive]);
        }
        break;
      default: {
        settableData(data);
      }
    }
    setshowmodel(false);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        Cell: ({ value, row }) => {
          return (
            <Grid container alignItems="center">
              <Grid item>
                <Checkbox
                  size="small"
                  checked={checked.includes(row.original.uuid)}
                  onChange={() => {
                    if (checked.includes(row.original.uuid)) {
                      const temp = checked.filter(
                        (item) => item !== row.original.uuid
                      );
                      setChecked(temp);
                    } else {
                      const temp = [...checked, row.original.uuid];
                      setChecked(temp);
                    }
                  }}
                />
              </Grid>

              <Grid item>{value}</Grid>
            </Grid>
          );
        },
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: (item) => {
          let object = item.cell.row.original;
          let status = "-";
          if (object.resigned_on !== null) status = "Resigned";
          else if (object.resigned_on === null && object.appointed_on !== null)
            status = "Active";
          else if (object.appointed_on !== null && object.resigned_on !== null)
            status = "Inactive";

          return (
            <div
              className={classess.chip}
              style={{
                backgroundColor: `${
                  status === "Active" ? "#ccecd7" : "rgb(236 212 204)"
                }`,
                color: `${status === "Active" ? "#03A339" : "rgb(163 25 3)"}`,
              }}
            >
              {status}
            </div>
          );
        },
      },
      {
        Header: "Appointed On",
        accessor: "appointeOn",
        Cell: (item) => {
          let object = item.cell.row.original;
          return (
            <div
              className={classess.chip}
              style={{
                backgroundColor: "#ccecd7",
                color: "#03A339",
              }}
            >
              {object.appointed_on}
            </div>
          );
        },
      },
      {
        Header: "Occupation",
        accessor: "occupation",
      },
      {
        Header: "Nationality",
        accessor: "nationality",
      },
      {
        Header: "Country",
        accessor: "country",
      },
      {
        Header: "DOB",
        accessor: "dob",
        Cell: (item) => {
          let object = item.cell.row.original;
          return (
            <div
              className={classess.chip}
              style={{
                backgroundColor: "#ccecd7",
                color: "#03A339",
              }}
            >
              {object.date_of_birth_year} / {object.date_of_birth_month}
            </div>
          );
        },
      },
      {
        Header: "Age",
        accessor: "age",
        Cell: (item) => {
          let object = item.cell.row.original;

          // Age calculation
          let today = new Date();
          let age = today.getFullYear() - object.date_of_birth_year;
          let m = today.getMonth() - object.date_of_birth_month;
          if (m < 0) age--;

          return (
            <div
              className={classess.chip}
              style={{
                backgroundColor: "#ccecd7",
                color: "#03A339",
              }}
            >
              {age}
            </div>
          );
        },
      },
      {
        Header: "Resigned On",
        accessor: "resigned_on",
      },
    ],
    [checked]
  );

  const fetchData = React.useCallback(
    ({ pageSize, pageIndex }) => {
      const fetchId = ++compSumfetchIdRef.current;
      setLoading(true);

      setTimeout(() => {
        if (fetchId === compSumfetchIdRef.current) {
          const startRow = pageSize * pageIndex;
          const endRow = startRow + pageSize;
          settableData(data.slice(startRow, endRow));
          setPageCount(Math.ceil(data.length / pageSize));
          setLoading(false);
        }
      }, 1000);
    },
    [data]
  );

  const [searchKey, setSearchKey] = useState("");
  useEffect(() => {
    if (searchKey) {
      let re = new RegExp(`${searchKey}`, "gi");
      let results = data.filter((director) => {
        return (
          (director.name !== null ? director.name.match(re) : false) ||
          (director.country !== null ? director.country.match(re) : false) ||
          (director.nationality !== null
            ? director.nationality.match(re)
            : false) ||
          (director.occupation !== null ? director.occupation.match(re) : false)
        );
      });

      settableData(results);
    } else {
      settableData(data);
    }
  }, [searchKey]);

  return (
    <>
      <div>
        <Typography
          variant="h5"
          style={{ fontWeight: 600 }}
          className={classess.directorsHeading}
        >
          Directors
        </Typography>

        <Grid container className={classess.directorCard}>
          <Grid item className={classess.mainCard}>
            <DirectorCard
              count={Directors.total ? Directors.total : 0}
              message="Total"
              imgsrc="/images/DWIcon.png"
            />
          </Grid>
          <Grid item className={classess.mainCard}>
            <DirectorCard
              count={
                Directors.no_of_active_directors
                  ? Directors.no_of_active_directors
                  : 0
              }
              message="Active"
              imgsrc="/images/DWIcon.png"
            />
          </Grid>
          <Grid item className={classess.mainCard}>
            <DirectorCard
              count={Directors.no_of_secretary ? Directors.no_of_secretary : 0}
              message="Secretary"
              imgsrc="/images/DWIcon.png"
            />
          </Grid>
          <Grid item className={classess.mainCard}>
            <DirectorCard
              count={Directors.no_of_inactive ? Directors.no_of_inactive : 0}
              message="inactive"
              imgsrc="/images/DWIcon.png"
            />
          </Grid>
          <Grid item className={classess.mainCard}>
            <DirectorCard
              count={
                Directors.no_of_resigned_directors
                  ? Directors.no_of_resigned_directors
                  : 0
              }
              message="Resigned"
              imgsrc="/images/DWIcon.png"
            />
          </Grid>
        </Grid>

        <Grid container className={classess.actionHeader}>
          <Grid item xs={12} sm={6} className={classess.actioncontainer}>
            <Button
              className={classess.Button}
              style={{
                background: "green",
                color: "white",
                fontFamily: "Arial, Helvetica, sans-serif",
              }}
              variant="contained"
              size="small"
              onClick={() => setMonitor(!monitor)}
              startIcon={
                monitor ? <NotificationsOffIcon /> : <NotificationsIcon />
              }
            >
              {monitor ? "un Monitor" : "Monitor"}
            </Button>
            <Button
              className={classess.Button}
              style={{
                background: "#f1f1f1",
                color: "#A2A3A2",
                fontFamily: "Arial, Helvetica, sans-serif",
                marginLeft: "10px",
              }}
              variant="contained"
              size="small"
            >
              Report
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} className={classess.searchcontainer}>
            <Button
              className={classess.Button}
              style={{
                background: "#FFFFFF",
                color: "#000000",
                marginRight: "10px",
                fontFamily: "Poppins",
                padding: "0px 10px",
                fontWeight: "600",
                fontSize: "26px",
                lineHeight: "39px",
                color: "#000000",
              }}
              variant="contained"
              size="small"
              startIcon={
                <img
                  src={"/images/Filter.png"}
                  alt="company-note-list"
                  width="30px"
                />
              }
              onClick={() => setshowmodel(true)}
            >
              Filter
            </Button>
            <TextField
              style={{
                background: "#FFFFFF",
                border: "1px solid #DCD9D9",
                textTransform: "capitalize",
                borderRadius: "6px",
              }}
              variant="outlined"
              size="small"
              placeholder="search"
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>

        {tabledata.length > 0 || searchKey === "" ? (
          <Table
            columns={columns}
            data={tabledata}
            fetchData={fetchData}
            loading={loading}
            pageCount={pageCount}
            allSelected={allSelected}
            setAllSelected={setAllSelected}
            genrateData={genrateData}
            fileName={`director list for  ${companyDetail.company_name}`}
          />
        ) : (
          <Typography variant="h6">No results found</Typography>
        )}
      </div>

      <Modal
        open={showmodel}
        onClose={() => setshowmodel(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classess.model}>
          <h2 id="simple-modal-title" className={classess.modelHead}>
            Choose Director Status
          </h2>
          {/* <Divider /> */}
          {/* <p id="simple-modal-description" className={classess.modelPara}>
            Hi. are you sure you want to logout
          </p> */}
          <div className={classess.modelRadio}>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="all"
                name="radio-buttons-group"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
              >
                <FormControlLabel value="all" control={<Radio />} label="All" />
                <FormControlLabel
                  value="active"
                  control={<Radio />}
                  label="Active"
                />
                <FormControlLabel
                  value="activeResigned"
                  control={<Radio />}
                  label="Active and Resigned"
                />
                <FormControlLabel
                  value="activeInactive"
                  control={<Radio />}
                  label="Active and Inactive"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <Grid container className={classess.buttonMain}>
            <Grid item>
              <Button
                className={classess.buttonyes}
                variant="contained"
                size="large"
                style={{ marginRight: "10px", backgroundColor: "#40acfb" }}
                color="primary"
                onClick={() => {
                  applyFilter();
                }}
              >
                YES
              </Button>
            </Grid>
            <Grid item>
              <Button
                className={classess.buttonNo}
                variant="contained"
                size="large"
                style={{ backgroundColor: "#6c757d", width: "100px" }}
                color="primary"
                onClick={() => setshowmodel(false)}
              >
                NO
              </Button>
            </Grid>
          </Grid>
        </div>
      </Modal>
    </>
  );
};
export default Directors;
