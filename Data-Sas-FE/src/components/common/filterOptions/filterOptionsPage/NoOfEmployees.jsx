import React, { useState, useEffect } from "react";
import "./searchBar.css";
import { TextField } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import UpdatePlan from "./UpdatePlan";

const textFieldStyle = {
  width: "45%",
  color: "#000",
  background: "#FFFFFF",
  border: "1px solid #DCD9D9",
  borderRadius: "6px",
};

export default function NoOfEmployees() {
  const [isEnabled, setIsEnabled] = useState(true);
  const { selectedFilterValues, filterTypeDetail } = useSelector(
    (state) => state.filter
  );
  // const [data, setData] = useState([]);

  useEffect(() => getOptions(), []);

  const getOptions = () => {
    let filtervalue = filterTypeDetail.filter(
      (value) =>
        value.name === "Number of employees" && value.category === "Company"
    );
    console.log("com name fil val ", filtervalue);
    setIsEnabled(filtervalue[0].featureEnabled);

    // setData(
    //   filtervalue[0].suggestions
    //     ? filtervalue[0].suggestions.map((opt) => ({ value: opt, label: opt }))
    //     : []
    // );
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
            />
            <TextField
              style={textFieldStyle}
              variant="outlined"
              placeholder="Max"
              size="small"
            />
          </div>
          <div className="subFiltersContainerButton">
            <button className="subFilterApply">Apply</button>
          </div>
        </>
      ) : (
        <UpdatePlan />
      )}
    </div>
  );
}
