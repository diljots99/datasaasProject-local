import React from 'react'
import { Typography, Chip } from "@mui/material";

export default function AppliedFilters({values}) {
    console.log("fil val ,,,, ", values)
    let allKeys = Object.keys(values)
    // console.log( Object.keys(values) )
  return (
    <div>
    {/* <p>{JSON.stringify(values)}</p> */}
    {Object.keys(values).map(key=>{
      console.log("Key name",  key)
      return (
      <div>
        <Typography variant="subtitle1" className="title">{key}</Typography>
      {values[`${key}`].map(val=> <Chip label={val} color="success" />)}
      </div>
      )
    }) }
    </div>
  )
}
