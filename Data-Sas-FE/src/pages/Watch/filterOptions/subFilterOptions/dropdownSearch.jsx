import React, { useState } from "react";
import Select from "react-select";
import SearchBar from "./searchBar";
import Data from "./data.json";

const options = [
    { value: "item-1", label: "Search item-1" },
    { value: "item-2", label: "Search item-2" },
    { value: "item-3", label: "Search item-3" },
];

const customStyles = {
    control: (styles) => ({
        ...styles,
        backgroundColor: "white",
        width: "100%",
        padding: "3px",
        borderRadius: "10px",
    }),
    option: (provided, state) => ({
        ...provided,
        fontSize: "14px",
        fontWeight: "300",
    }),
    placeholder: (provided) => ({
        ...provided,
        fontWeight: "400",
    }),
    valueContainer: (provided) => ({
        ...provided,
        fontWeight: "400",
        fontSize: "16px",
    }),
};

const divStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
};

const customSearch = {
    marginTop: "15px",
};

export default function DropdownSearch({ searchNeeded }) {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className="container" style={divStyle}>
            <Select
                styles={customStyles}
                defaultValue={selectedOption}
                placeholder={"Dropdown menu"}
                onChange={setSelectedOption}
                options={options}
            />

            {searchNeeded && (
                <div style={customSearch}>
                    <SearchBar placeholder={"Search"} data={Data} />
                </div>
            )}
        </div>
    );
}
