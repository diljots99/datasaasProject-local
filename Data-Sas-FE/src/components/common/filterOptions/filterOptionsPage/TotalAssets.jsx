import React, { useState, useEffect } from "react";
import "./searchBar.css";
import { TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { SetselectedFilterValues } from "../../../../redux/actions/filterAction";
import UpdatePlan from "./UpdatePlan";

const textFieldStyle = {
  width: "45%",
  color: "#000",
  background: "#FFFFFF",
  border: "1px solid #DCD9D9",
  borderRadius: "6px",
};

export default function TotalAssets() {
  const dispatch = useDispatch();
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [error, setError] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);
  const { selectedFilterValues, filterTypeDetail } = useSelector(
    (state) => state.filter
  );

  useEffect(() => getOptions(), []);

  const getOptions = () => {
    let filtervalue = filterTypeDetail.filter(
      (value) =>
        value.name === "Total Assets" && value.category === "Financials"
    );
    if (filtervalue) {
      setIsEnabled(filtervalue[0].featureEnabled);
    }
  };

  const applyFilter = () => {
    if (min < max) {
      dispatch(SetselectedFilterValues("Total Assets", [min, max]));
      setMin("");
      setMax("");
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="subFiltersContainerPage">
      {isEnabled ? (
        <>
          <div className="searchContainer">
            <TextField
              style={textFieldStyle}
              variant="outlined"
              placeholder="Min"
              size="small"
              type="number"
              value={min}
              onChange={(e) => setMin(parseInt(e.target.value, 10))}
            />
            <TextField
              style={textFieldStyle}
              variant="outlined"
              placeholder="Max"
              size="small"
              type="number"
              value={max}
              onChange={(e) => setMax(parseInt(e.target.value, 10))}
            />
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
        </>
      ) : (
        <UpdatePlan />
      )}
    </div>
  );
}
