import React, { useState, useEffect } from "react";
import "./searchBar.css";
import MuiSearchBar from "material-ui-search-bar";
import { Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import Checkbox from "@mui/material/Checkbox";
import { SetselectedFilterValues } from "../../../../redux/actions/filterAction";
// import data from "../subFilterOptions/data.json";
import UpdatePlan from "./UpdatePlan";

export default function CompanyName() {
  const dispatch = useDispatch();
  const { companyList } = useSelector((state) => state.watch);
  const { selectedFilterValues, filterTypeDetail } = useSelector(
    (state) => state.filter
  );
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [error, setError] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);
  const [data, setData] = useState([]);
  const [checked, setChecked] = useState([]);
  console.log("companyList", companyList);

  useEffect(() => getOptions(), []);

  const getOptions = () => {
    let filtervalue = filterTypeDetail.filter(
      (value) => value.name === "Company Number" && value.category === "Company"
    );
    console.log("com name fil val ", filtervalue);
    setIsEnabled(filtervalue[0].featureEnabled);

    setData(
      filtervalue[0].suggestions
        ? filtervalue[0].suggestions.map((opt) => ({ value: opt, label: opt }))
        : []
    );
  };

  useEffect(() => {
    if (selectedFilterValues["Company Name"]) {
      setChecked(selectedFilterValues["Company Name"]);
    } else {
      setChecked([]);
    }
  }, [selectedFilterValues]);

  const handleFilter = (value) => {
    const searchWord = value;
    setWordEntered(searchWord);
    const newFilter = data.filter((item) => {
      return item.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const applyFilter = () => {
    // if (checked.length > 0) {
    //   dispatch(SetselectedFilterValues("Company Name", checked));
    // }

    if (checked.length > 0) {
      if (selectedFilterValues["Company Name"]) {
        dispatch(
          SetselectedFilterValues("Company Name", [
            ...selectedFilterValues["Company Name"],
            wordEntered,
          ])
        );
      } else {
        dispatch(SetselectedFilterValues("Company Name", [wordEntered]));
      }
      setChecked([]);
      setWordEntered("");
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <div className="subFiltersContainerPage">
      {isEnabled ? (
        <>
          <div className="searchContainer">
            <MuiSearchBar
              className="search"
              placeholder="Search Company Name"
              value={wordEntered}
              onChange={(val) => setWordEntered(val)}
              onCancelSearch={() => {
                setFilteredData([]);
                setWordEntered("");
              }}
            ></MuiSearchBar>
          </div>
          {/* <div className="choosenResultsContainer">
        {filteredData.length != 0 ? (
          <div className="dataResult">
            {filteredData.map((item, key) => {
              return (
                <div
                  className="dataResultItems"
                  onClick={() => {
                    if (checked.includes(item.title)) {
                      const temp = checked.filter((val) => val !== item.title);
                      setChecked(temp);
                    } else {
                      const temp = [...checked, item.title];
                      setChecked(temp);
                    }
                  }}
                >
                  <Checkbox checked={checked.includes(item.title)} />
                  <Typography variant="subtitle2" className="title">
                    {item.title}
                  </Typography>
                </div>
              );
            })}
          </div>
        ) : wordEntered != "" ? (
          <div className="dataResult">
            <a className="dataItem">No results found</a>
          </div>
        ) : data.length > 0 ? (
          <div className="dataResult">
            {data.map((item, key) => {
              return (
                <div
                  className="dataResultItems"
                  onClick={() => {
                    if (checked.includes(item.title)) {
                      const temp = checked.filter((val) => val !== item.title);
                      setChecked(temp);
                    } else {
                      const temp = [...checked, item.title];
                      setChecked(temp);
                    }
                  }}
                >
                  <Checkbox checked={checked.includes(item.title)} />
                  <Typography variant="subtitle2" className="title">
                    {item.title}
                  </Typography>
                </div>
              );
            })}
          </div>
        ) : null}
      </div> */}
          <div className="choosenResultsContainer">
            {wordEntered.length > 0 && (
              <>
                <div
                  className="dataResultItems"
                  onClick={() => setChecked([`with All ${wordEntered} `])}
                >
                  <Checkbox
                    checked={checked.includes(`with All ${wordEntered} `)}
                  />
                  <Typography variant="subtitle2" className="title">
                    with All {wordEntered}
                  </Typography>
                </div>
                <div
                  className="dataResultItems"
                  onClick={() => setChecked([`with only  ${wordEntered} `])}
                >
                  <Checkbox
                    checked={checked.includes(`with only  ${wordEntered} `)}
                  />
                  <Typography variant="subtitle2" className="title">
                    with only {wordEntered}
                  </Typography>
                </div>
              </>
            )}
          </div>

          <div className="subFiltersContainerButton">
            <button
              className="subFilterApply"
              style={{ border: error ? "3px solid red" : "" }}
              onClick={applyFilter}
            >
              Apply
            </button>
          </div>
        </>
      ) : (
        <UpdatePlan />
      )}
    </div>
  );
}
