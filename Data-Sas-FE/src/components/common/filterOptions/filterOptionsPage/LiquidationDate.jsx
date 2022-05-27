import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { useSelector, useDispatch } from "react-redux";
import "./datePicker.css";
import "react-datepicker/dist/react-datepicker.css";
import UpdatePlan from "./UpdatePlan"

export default function LiquidationDate() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const [isEnabled, setIsEnabled] = useState(true);
    const { selectedFilterValues, filterTypeDetail } = useSelector(state => state.filter)
    useEffect(() => getOptions(), []);
  
    const getOptions = () => {
  
      let filtervalue = filterTypeDetail.filter(
        (value) =>
          value.name === "Liquidation Date" && value.category === "Status"
      );
      if (filtervalue) {
        setIsEnabled(filtervalue[0].featureEnabled);
      }
     
    };

    const customStyle = {
        display: "flex",
        justifyContent: "space-evenly",
    };

  return (
    <div className="subFiltersContainerPage">
      {isEnabled ? <>
        <div className="searchContainer">
      <div style={customStyle}>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                dateFormat="dd/MM/yyyy"
                placeholderText="From"
            />
            <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                dateFormat="dd/MM/yyyy"
                placeholderText="To"
            />
        </div>
      </div>
      <div className="subFiltersContainerButton">
        <button className="subFilterApply">Apply</button>
      </div>
      </> : <UpdatePlan />}
     
    </div>
  );
}
