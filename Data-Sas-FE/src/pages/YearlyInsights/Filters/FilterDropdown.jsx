import React from "react";
import { useStyles } from "../styles";
import Select, { components } from "react-select";
import { Typography, FormControl, Box } from "@mui/material";

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
  noOptionsMessage: (provided) => ({
    ...provided,
    background: "yellow",
    color: "black",
  }),
};

export default function FilterDropdown({
  title,
  value,
  onChange,
  filterValue,
  multiple,
}) {
  const classess = useStyles();

  const NoOptionsMessage = (props) => {
    return (
      <components.NoOptionsMessage {...props}>
        <span className="custom-css-class">Update plan</span>
      </components.NoOptionsMessage>
    );
  };

  return (
    <Box sx={{ minWidth: 120, width: "100%" }}>
      <Typography variant="h6">{title}</Typography>
      <FormControl fullWidth>
        <Select
          styles={customStyles}
          isMulti={multiple ? true : false}
          components={{ NoOptionsMessage }}
          defaultValue={value}
          placeholder={title}
          onChange={onChange}
          options={
            filterValue
              ? filterValue.map((val) => ({ value: val, label: val }))
              : []
          }
        />
      </FormControl>
    </Box>
  );
}
