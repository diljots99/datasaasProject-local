import React from "react";
import { Typography, Chip } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  SetselectedFilterValues,
  clearFilterGroup,
} from "../../../redux/actions/filterAction";

export default function AppliedFilters({ values }) {
  const dispatch = useDispatch();
  console.log("fil val ,,,, ", values);
  let allKeys = Object.keys(values);
  // console.log( Object.keys(values) )

  const handelRemove = (filterName, chipValue) => {
    if(filterName == "Incorporation Date"){
       handleAllRemove(filterName)
       return 
      }

    let chips = values[filterName].filter((val) => val !== chipValue);
    console.log("chip remove", chips);
    if (chips.length > 0) dispatch(SetselectedFilterValues(filterName, chips));

  };

  const handleAllRemove = (filterName) => {
    delete values[filterName];

    dispatch(clearFilterGroup(values));
  };

  return (
    <div>
      {/* <p>{JSON.stringify(values)}</p> */}
      {Object.keys(values).map((key) => {
        console.log("Key name", key);
        return (
          <div>
            <Chip
              key={key}
              style={{ margin: "2px" }}
              label={key}
              onDelete={() => handleAllRemove(key)}
            />
            <br />
            {/* <Typography variant="subtitle1" className="title">{key}</Typography> */}
            {values[`${key}`].map((val) => (
              <Chip
                key={val}
                style={{ margin: "2px" }}
                label={val}
                color="success"
                onDelete={() => handelRemove(key, val)}
              />
            ))}
            <hr />
          </div>
        );
      })}
    </div>
  );
}
