import React, { useState } from "react";
import "./searchBar.css";
import { TextField } from "@material-ui/core";

const textFieldStyle = {
    width: "45%",
    color: "#000",
    background: "#FFFFFF",
    border: "1px solid #DCD9D9",
    borderRadius: "6px",
};

export default function NoOfEmployees() {
    

  return (
    <div className="subFiltersContainerPage">
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
    </div>
  );
}
