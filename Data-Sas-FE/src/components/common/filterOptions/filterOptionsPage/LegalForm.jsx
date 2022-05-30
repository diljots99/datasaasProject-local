import React, { useState, useEffect } from "react";
import "./searchBar.css";
import Select from "react-select";
import UpdatePlan from "./UpdatePlan"
import { useSelector, useDispatch } from "react-redux";

export default function LegalForm() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isEnabled, setIsEnabled] = useState(true);
  const { selectedFilterValues, filterTypeDetail } = useSelector(state => state.filter)
  useEffect(() => getOptions(), []);

  const getOptions = () => {

    let filtervalue = filterTypeDetail.filter(
      (value) =>
        value.name === "Legal Form" && value.category === "Status"
    );
    if (filtervalue) {
      setIsEnabled(filtervalue[0].featureEnabled);
    }
   
    // setData(
    //   filtervalue[0].suggestions
    //     ? filtervalue[0].suggestions.map((opt) => ({ value: opt, label: opt }))
    //     : []
    // );
  };

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
    {isEnabled ? <>
      <div className="searchContainer">
        <Select
          styles={customStyles}
          defaultValue={selectedOption}
          placeholder="Legal Form"
          onChange={setSelectedOption}
          options={options}
        />
      </div>
      <div className="subFiltersContainerButton">
        <button className="subFilterApply">Apply</button>
      </div>
      </>: <UpdatePlan />}
    </div>
  );
}
