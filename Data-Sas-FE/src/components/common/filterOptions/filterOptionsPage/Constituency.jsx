import React, { useState, useEffect } from "react";
import "./searchBar.css";
import MuiSearchBar from "material-ui-search-bar";
import data from "../subFilterOptions/data.json";
import { useSelector, useDispatch } from "react-redux";
import UpdatePlan from "./UpdatePlan";

export default function Constituency() {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [isEnabled, setIsEnabled] = useState(true);
  const { selectedFilterValues, filterTypeDetail } = useSelector(
    (state) => state.filter
  );
  // const [data, setData] = useState([]);

  useEffect(() => getOptions(), []);

  const getOptions = () => {
    let filtervalue = filterTypeDetail.filter(
      (value) => value.name === "Constituency" && value.category === "Location"
    );
    console.log("com name fil val ", filtervalue);
    setIsEnabled(filtervalue[0].featureEnabled);

    // setData(
    //   filtervalue[0].suggestions
    //     ? filtervalue[0].suggestions.map((opt) => ({ value: opt, label: opt }))
    //     : []
    // );
  };

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
  return (
    <div className="subFiltersContainerPage">
      {isEnabled ? (
        <>
          <div className="searchContainer">
            <MuiSearchBar
              className="search"
              placeholder="Search Constituency"
              value={wordEntered}
              onChange={handleFilter}
              onCancelSearch={() => {
                setFilteredData([]);
                setWordEntered("");
              }}
            ></MuiSearchBar>
            <div className="searchResultContainer">
              {filteredData.length != 0 ? (
                <div className="dataResult">
                  {filteredData.slice(0, 3).map((item, key) => {
                    return (
                      <a className="dataItem" href={item.link} target="_blank">
                        <div>{item.title} </div>
                      </a>
                    );
                  })}
                </div>
              ) : wordEntered != "" ? (
                <div className="dataResult">
                  <a className="dataItem">No results found</a>
                </div>
              ) : null}
            </div>
          </div>
          <div className="subFiltersContainerButton">
            <button className="subFilterApply">Apply</button>
          </div>
        </>
      ) : (
        <UpdatePlan />
      )}
    </div>
  );
}
