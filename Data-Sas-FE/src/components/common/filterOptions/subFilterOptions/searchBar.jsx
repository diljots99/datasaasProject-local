import React, { useState } from "react";
import "./searchBar.css";
import MuiSearchBar from "material-ui-search-bar";

function SearchBar({ placeholder, data }) {
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
        <div className="searchContainer">
            <MuiSearchBar
                className="search"
                placeholder={placeholder}
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
                                <a
                                    className="dataItem"
                                    href={item.link}
                                    target="_blank"
                                >
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
    );
}

export default SearchBar;
