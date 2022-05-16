import React, { useState } from "react";
import "./searchBar.css";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { SetselectedFilterValues } from "../../../../redux/actions/filterAction";

export default function CompanyAccountCategory() {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(null);
  const [error, setError] = useState(false)
  const {  selectedFilterValues , filterTypeDetail } = useSelector(
    (state) => state.filter
  );

  const getOptions = () => {
    console.log("aaaaaaaavvv", filterTypeDetail.filter(value => value.name ===  "Account Category" &&  value.category === "Company"))
    let filtervalue = filterTypeDetail.filter(value => value.name ===  "Account Category" &&  value.category === "Company")
     return filtervalue[0].suggestions ? filtervalue[0].suggestions.map(opt=> ({ value: opt, label: opt })) : []
  }

  const options = getOptions()

  const applyFilter = () => {
    // if (checked.length > 0) {
    //   dispatch(SetselectedFilterValues("Company Name", checked));
    // }

    if( selectedOption !==null && selectedOption.length > 0){
      let filterval = selectedOption.map(val=> val.value)
      dispatch(SetselectedFilterValues("Company Account Category", filterval))
      setSelectedOption(null)
    setError(false)
  }else{
    setError(true)
  }
  };

  console.log("Company Account Category", options)
  console.log("Company Account Category selected ", selectedOption)
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
          isMulti
          defaultValue={selectedOption}
          placeholder="Company Account Category"
          onChange={setSelectedOption}
          options={options}
        />
      </div>

      <div className="choosenResultsContainer">

      </div>

      <div className="subFiltersContainerButton">
        <button className="subFilterApply" style={{ border:  error ? '3px solid red' : ''}} onClick={applyFilter} >Apply</button>
      </div>
    </div>
  );
}
