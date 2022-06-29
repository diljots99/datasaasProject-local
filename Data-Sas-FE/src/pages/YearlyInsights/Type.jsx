import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Typography,
  Button,
  Menu,
  MenuItem,
  DialogTitle,
} from "@mui/material";
import { useStyles } from "./styles";
import BarChart from "./barChart";
import { useSelector } from "react-redux";
import DonutChart from "./Donut";

import FilterDropdown from "./Filters/FilterDropdown";
import FilterMinMax from "./Filters/FilterMinMax";

export default function Type() {
  const classess = useStyles();
  const { Insights, InsightsFilterList } = useSelector(
    (state) => state.company
  );
  const [byStatus, setByStatus] = useState({});
  const [byAccountCategory, setByAccountCategory] = useState({});
  const [byTypes, setByTypes] = useState({});
  const [byBusinessAge, setByBusinessAge] = useState([]);
  const [byEmployeeSize, setByEmployeeSize] = useState([]);
  const [byTurnover, setByTurnover] = useState([]);

  const [filterByStatus, setFilterByStatus] = useState("");
  const [byStatusFilterValue, setBystatusFilterValue] = useState(null);
  const [filterBySize, setFilterBySize] = useState("");
  const [bySizeFilterValue, setBysizeFilterValue] = useState(null);
  const [filterByTurnover, setFilterByTurnover] = useState("");
  const [byTurnoverFilterValue, setByTurnoverFilterValue] = useState(null);
  const [filterByType, setFilterByType] = useState("");
  const [byTypeFilterValue, setByTypeFilterValue] = useState(null);
  const [filterByAgeofBusiness, setFilterByAgeofBusiness] = useState({
    min: 0,
    max: 1,
  });
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
      const bySize = InsightsFilterList.filter(({ name }) => name === "size")[0]
        ?.suggestions;
      const byType = InsightsFilterList.filter(({ name }) => name === "type")[0]
        ?.suggestions;
      const byTurnover = InsightsFilterList.filter(
        ({ name }) => name === "turnover"
      )[0]?.suggestions;

      const byStatus = InsightsFilterList.filter(
        ({ name }) => name === "status"
      )[0]?.suggestions;

      setByTypeFilterValue(byType);
      setBysizeFilterValue(bySize);
      setByTurnoverFilterValue(byTurnover);
      setBystatusFilterValue(byStatus);
    }
  }, [InsightsFilterList]);

  console.log("InsightsFilterList",InsightsFilterList)

  useEffect(() => {
    if (Insights.companiesByStatus) {
      handleByStatus(Insights.companiesByStatus);
    }
    if (Insights.companiesByAccountCategory) {
      handleByAccountCategory(Insights.companiesByAccountCategory);
    }
    if (Insights.companiesByType) {
      handleByType(Insights.companiesByType);
    }
    if (Insights.companiesByAgeOfBusiness) {
      handleByBusinessAge(Insights.companiesByAgeOfBusiness[0]);
    }
    if (Insights.companiesByEmployeeSize) {
      handleByEmployeSize(Insights.companiesByEmployeeSize);
    }
    if (Insights.companiesByTurnover) {
      handleByTurnover(Insights.companiesByTurnover);
    }
  }, [Insights]);

  const handleByStatus = (value) => {
    let data = [];
    let total = value.reduce((total, val) => total + val.statusCount, 0);
    value.forEach((val) => {
      let per = (val.statusCount / total) * 100;
      data.push({
        name: val.status,
        y: per,
      });
    });
    setByStatus(data);
  };

  const handleByAccountCategory = (value) => {
    let data = [];
    let total = value.reduce(
      (total, val) => total + val.accountCategoryCount,
      0
    );
    value.forEach((val) => {
      let per = (val.accountCategoryCount / total) * 100;
      data.push({
        name: val.company_account_category,
        y: per,
      });
    });
    setByAccountCategory(data);
  };

  const handleByType = (value) => {
    let series = [];
    let lables = [];
    let data = [];
    let total = value.reduce((total, val) => total + val.typeCount, 0);
    value.forEach((val) => {
      let per = (val.typeCount / total) * 100;
      data.push({
        name: val.type,
        y: per,
      });
      series.push(per);
      lables.push(val.type);
    });
    setByTypes(data);
  };

  const handleByBusinessAge = (value) => {
    let data = [];

    Object.keys(value).map((key) => {
      data.unshift({
        x: key,
        y: value[key],
      });
    });
    setByBusinessAge(data);
  };

  const handleByEmployeSize = (value) => {
    let data = [];

    value.forEach((val) => {
      if (val.size_class_estimate !== null) {
        data.unshift({
          x:
            val.size_class_estimate === null ? "null" : val.size_class_estimate,
          y: val.number_of_companies,
        });
      }
    });
    setByEmployeeSize(data);
  };

  const handleByTurnover = (value) => {
    let data = [];
    value.forEach((val) => {
      if (val.turnover_class_estimate !== null) {
        data.unshift({
          x:
            val.turnover_class_estimate === null
              ? "null"
              : val.turnover_class_estimate,
          y: val.number_of_companies,
        });
      }
    });
    setByTurnover(data);
  };

  const updateAgeOfBusiness = (e) => {
    const { name, value: val } = e.target;
    setFilterByAgeofBusiness({ ...filterByAgeofBusiness, [name]: val });
  };

  const ApplyFilter =()=>{
console.log({filterByStatus, filterBySize, filterByType,filterByAgeofBusiness})

  }

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
            Type
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
                <DialogTitle className={classess.filtertitle}>Type</DialogTitle>
              </MenuItem>

              <MenuItem>
                <FilterDropdown
                  title="By Status"
                  multiple={true}
                  value={filterByStatus}
                  onChange={setFilterByStatus}
                  filterValue={byStatusFilterValue}
                />
              </MenuItem>

              <MenuItem>
                <FilterDropdown
                  title="By Size"
                  multiple={true}
                  value={filterBySize}
                  onChange={setFilterBySize}
                  filterValue={bySizeFilterValue}
                />
              </MenuItem>

              <MenuItem>
                <FilterDropdown
                  title="By TurnOver"
                  multiple={true}
                  value={filterBySize}
                  onChange={setFilterByTurnover}
                  filterValue={byTurnoverFilterValue}
                />
              </MenuItem>

              <MenuItem>
                <FilterDropdown
                  title="By Type"
                  multiple={true}
                  value={filterByType}
                  onChange={setFilterByType}
                  filterValue={byTypeFilterValue}
                />
              </MenuItem>

              <MenuItem>
                <FilterMinMax
                  value={filterByAgeofBusiness}
                  setValues={updateAgeOfBusiness}
                  title="By Age of Business"
                />
              </MenuItem>

              <MenuItem>
                <Button
                  variant="contained"
                  style={{
                    background: "#40ACFB",
                    color: "#fff!important",
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    fontSize: "18px",
                    lineHeight: "44px",
                  }}
                  onClick={ApplyFilter}
                >
                  Apply
                </Button>
                <Button
                  variant="contained"
                  style={{
                    background: "#FFFFFF",
                    color: "gray",
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    fontSize: "18px",
                    lineHeight: "44px",
                    margin:'0 5px'
                  }}
                  onClick={handleClose}
                >
                  Reset
                </Button>
              </MenuItem>
            </div>
          </Menu>
        </Grid>
      </Grid>

      {/*  Donut charts */}
      <div className={classess.segmentWrapper}>
        <Grid container spacing={2} justifyContent="space-around">
          <Grid item xs={4}>
            <Paper className={classess.paper} style={{ width: "380px" }}>
              {/* <Typography variant="h5" className={classess.donutHeading}>
                Companies by Status
              </Typography> */}
              {/* <Donut series={byStatus.series} lables={byStatus.lables}  /> */}
              <DonutChart data={byStatus} title="Companies by Status" />
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className={classess.paper} style={{ width: "380px" }}>
              {/* <Typography variant="h5" className={classess.donutHeading}>
                Account Categories
              </Typography> */}
              <DonutChart data={byAccountCategory} title="Account Categories" />
              {/* <Donut series={[1,2,3]} lables={["one", "two", "three"]} /> */}
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className={classess.paper} style={{ width: "380px" }}>
              {/* <Typography variant="h5" className={classess.donutHeading}>
                Companies by Type
              </Typography> */}
              {/* <Donut
                series={byTypes.series}
                // lables={["one", "two", "three"]}
              /> */}
              <DonutChart data={byTypes} title="Companies by Type" />
            </Paper>
          </Grid>
        </Grid>

        {/*  Bar charts */}

        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          margin="10px 0"
        >
          <Grid item xs={6}>
            <Paper className={[classess.paper, classess.bar]}>
              <Typography variant="h5" className={classess.donutHeading}>
                No. of Companies by Age of Business
              </Typography>
              <BarChart barColor={"#2d99ff"} data={byBusinessAge} />
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={[classess.paper, classess.bar]}>
              <Typography variant="h5" className={classess.donutHeading}>
                No. of Companies by Employess Size
              </Typography>
              <BarChart data={byEmployeeSize} />
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={[classess.paper, classess.bar]}>
              <Typography variant="h5" className={classess.donutHeading}>
                No. of Companies by Turnover
              </Typography>
              <BarChart barColor={"#ff3a6c"} data={byTurnover} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
