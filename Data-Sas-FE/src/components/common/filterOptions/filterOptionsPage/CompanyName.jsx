import React, { useState , useEffect} from "react";
import "./searchBar.css";
import MuiSearchBar from "material-ui-search-bar";
import { Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import Checkbox from "@mui/material/Checkbox";
import { SetFilterValues } from "../../../../redux/actions/filterAction";
// import data from "../subFilterOptions/data.json";

export default function CompanyName() {
  const dispatch = useDispatch();
  const { companyList } = useSelector((state) => state.watch);
  const { FilterValues } = useSelector(state => state.filter)
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const [data, setData] = useState(
    companyList.map((val) => ({ id: val.id, title: val.company_name }))
  );
  const [checked, setChecked] = useState([]);
  console.log("companyList", companyList);

  useEffect(() => {
      if(FilterValues.CompanyName){
        setChecked(FilterValues.CompanyName)
      }else{
        setChecked([])
      }
  },[FilterValues])

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
    if (checked.length > 0) {
      dispatch(SetFilterValues("CompanyName", checked));
    }
  };
  return (
    <div className="subFiltersContainerPage">
      <div className="searchContainer">
        <MuiSearchBar
          className="search"
          placeholder="search Company Name"
          value={wordEntered}
          onChange={handleFilter}
          onCancelSearch={() => {
            setFilteredData([]);
            setWordEntered("");
          }}
        ></MuiSearchBar>
      </div>
      <div className="choosenResultsContainer">
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
      </div>
      <div className="subFiltersContainerButton">
        <button className="subFilterApply" onClick={applyFilter}>
          Apply
        </button>
      </div>
    </div>
  );
}