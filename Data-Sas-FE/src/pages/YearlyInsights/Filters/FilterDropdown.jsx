import React from 'react'
import { useStyles } from "../styles";
import {
    Typography,
    FormControl,
    Box,
  } from "@mui/material";

export default function FilterDropdown({title ,  value , onChange , filterValue}) {
    const classess = useStyles();
   return ( <Box sx={{ minWidth: 120 , width:"100%" }}>
    <Typography variant="h6" >{title}</Typography>
    <FormControl fullWidth>
    <select 
    className={classess.select}
         value={value}
         onChange={e=>  onChange(e.target.value)}
        >
          {filterValue && filterValue.map(val=> <option value={val}>{val} </option> )}
        </select>
  {/* <Select
  size="small"
  labelId="demo-simple-select-label"
  id="demo-simple-select"
  value={value}
  label={title}
  input={<OutlinedInput label={title}/>}
  onChange={e=>  onChange(e.target.value)}
  >
  {filterValue && filterValue.map(val=> <MenuItem value={val}> 
    <Checkbox checked={val === value} />
                <ListItemText primary={val} /></MenuItem> )}
  </Select> */}
  </FormControl>
  </Box>
  )
}
