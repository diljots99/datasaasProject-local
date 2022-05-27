import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "./datePicker.css";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { SetselectedFilterValues } from "../../../../redux/actions/filterAction";
import UpdatePlan from "./UpdatePlan";
import moment from "moment";

export default function LastAccountFiled() {
  const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [isEnabled, setIsEnabled] = useState(true);
    const [error, setError] = useState(false);
    const { selectedFilterValues, filterTypeDetail } = useSelector(
      (state) => state.filter
    );

    useEffect(() => getOptions(), []);

  const getOptions = () => {
    let filtervalue = filterTypeDetail.filter(
      (value) =>
        value.name === "Last Account Filed" && value.category === "Financials"
    );
    if (filtervalue) {
      setIsEnabled(filtervalue[0].featureEnabled);
    }

  };

  const applyFilter = () => {

    if (startDate && endDate) {
      dispatch(
        SetselectedFilterValues("Incorporation Date", [ moment(startDate).format(),  moment(endDate).format()])
      );
      setStartDate(null);
      setEndDate(null);
      setError(false);
    } else {
      setError(true);
    }
  };
  
    const customStyle = {
        display: "flex",
        justifyContent: "space-evenly",
    };
  
  return (
    <div className="subFiltersContainerPage">
      { isEnabled ? <>
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
      <button
        className="subFilterApply"
        style={{ border: error ? "3px solid red" : "" }}
        onClick={applyFilter}
      >
        Apply
      </button>
    </div>
      </>: <UpdatePlan /> }
    </div>
  );
}
