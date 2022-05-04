import React, { useState } from "react";
import "./searchBar.css";
import MuiSearchBar from "material-ui-search-bar";
import data from "../subFilterOptions/data.json";

export default function LocalAuthority() {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

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
      <div className="searchContainer">
        <MuiSearchBar
          className="search"
          placeholder="Search Local Authority"
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
    </div>
  );
}
