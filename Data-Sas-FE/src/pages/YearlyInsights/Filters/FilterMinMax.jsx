import React from "react";
import { useStyles } from "../styles";
import { Typography, Box } from "@mui/material";

export default function FilterMinMax({ value, setValues, title }) {
  const classess = useStyles();
  return (
    <Box sx={{ minWidth: 120, width: "100%" }}>
      <Typography variant="h6">{title}</Typography>
      <div className={classess.containerMinMax}>
        <input
          className={classess.inputMinMax}
          name="min"
          type="number"
          placeholder="Min"
          value={value.min}
          onChange={setValues}
        />
        <input
          className={classess.inputMinMax}
          name="max"
          type="number"
          placeholder="Max"
          value={value.max}
          onChange={setValues}
        />
      </div>
    </Box>
  );
}
