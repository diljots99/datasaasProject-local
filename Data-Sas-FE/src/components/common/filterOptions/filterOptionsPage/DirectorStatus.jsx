import React, { useState } from "react";
import "./searchBar.css";
import Select from "react-select";

export default function DirectorStatus() {
    const [selectedOption, setSelectedOption] = useState(null);

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
  
    return (
      <div className="subFiltersContainerPage">
        <div className="searchContainer">
          <Select
            styles={customStyles}
            defaultValue={selectedOption}
            placeholder="Director Status"
            onChange={setSelectedOption}
            options={options}
          />
        </div>
        <div className="subFiltersContainerButton">
          <button className="subFilterApply">Apply</button>
        </div>
      </div>
    );
}
