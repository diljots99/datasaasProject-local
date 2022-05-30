import React from 'react'
import { Button , Typography } from  '@mui/material';

export default function UpdatePlan() {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}
    ><Typography variant="h6">To access This feature update your Plan</Typography>
    <Button variant="contained"  size="small" color='warning'  >Update Plan</Button>
    </div>
  )
}
