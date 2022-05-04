import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./datePicker.css";
import "react-datepicker/dist/react-datepicker.css";

export default function IncorporationDate() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);


    const customStyle = {
        display: "flex",
        justifyContent: "space-evenly",
    };

  return (
    <div className="subFiltersContainerPage">
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
    </div>
  );
}
