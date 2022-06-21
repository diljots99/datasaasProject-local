import React, { useState, useEffect } from "react";
import "./searchBar.css";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { SetselectedFilterValues } from "../../../../redux/actions/filterAction";
import UpdatePlan from './UpdatePlan'

export default function DirectorOccupation() {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(null);
  const [error, setError] = useState(false)
  const [isEnabled, setIsEnabled] = useState(true);
  const [options, setOptions] = useState([]);
  const {  selectedFilterValues , filterTypeDetail } = useSelector(
    (state) => state.filter
  );

  useEffect(() => getOptions(), []);

  const getOptions = () => {
 
    let filtervalue = filterTypeDetail.filter(value => value.name ===  "Director Occupation" &&  value.category === "Directors")
    if (filtervalue) {
      setIsEnabled(filtervalue[0].featureEnabled);
    }

    setOptions(
      filtervalue[0].suggestions
        ? filtervalue[0].suggestions.map((opt) => ({ value: opt, label: opt }))
        : []
    );
  }


  const applyFilter = () => {
    // if (checked.length > 0) {
    //   dispatch(SetselectedFilterValues("Company Name", checked));
    // }

    if( selectedOption !==null && selectedOption.length > 0){
      let filterval = selectedOption.map(val=> val.value)
      dispatch(SetselectedFilterValues("Director Occupation", filterval))
      setSelectedOption(null)
    setError(false)
  }else{
    setError(true)
  }
  };

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
         isMulti
         defaultValue={selectedOption}
         placeholder="Director Occupation"
         onChange={setSelectedOption}
         options={options}
       />
     </div>

     <div className="choosenResultsContainer">

     </div>

     <div className="subFiltersContainerButton">
       <button className="subFilterApply" style={{ border:  error ? '3px solid red' : ''}} onClick={applyFilter} >Apply</button>
     </div></> : <UpdatePlan />}
   </div>
  );
}
