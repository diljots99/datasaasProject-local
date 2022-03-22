import React, { useState } from "react";
import { Grid, TextField, Button, Modal, Divider, Typography, InputAdornment, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useHistory } from 'react-router-dom';
export const useStyles = makeStyles((theme) => ({
  model: {
    top: `50%`,
    left: `50%`,
    // transform: `translate(-${50}%, -${50}%)`,
    position: "absolute",
    width: 430,
    backgroundColor: theme.palette.background.paper,
    // height: "500px",
    borderRadius: "30px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modelHead: {
    margin: " 20px 0",
    fontWeight: "bold",
  },
  modelPara: {
    margin: "20px 0px",
    fontSize: "20px",
    color: "#8a8fa7",
  },
  modelForm: {
    width: "100%",
  },
  modelFormItem: {
    width: "100%",
    margin: "10px 0",
  },
  inputError:{
    color: "red",
},
  modelFormInput: {
    width: "100%",
  },
  inputItem: {
    marginTop: "10px",
  },
  lable: {
    color: "#727272",
    fontSize: "1rem",
    fontWeight: 500,
    marginBottom:"5px"
  }
}));

export default function Filter({ open,handleClose }) {
  const classes = useStyles();


  


 


  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description">
      <div className={classes.model}>
        <h2 id="simple-modal-title" className={classes.modelHead}>
          Filter
        </h2>
        <Divider />
       
        <Grid container className={classes.modelForm}>
         
        
        
        </Grid>

        <Grid container>
          <Grid item>
            <Button
              variant="contained"
              size="large"
              style={{ marginTop: "10px", backgroundColor: "#40acfb" }}
              color="primary"
            //    onClick={() => { handleSubmit() }}
              >
              Confirm
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              size="large"
              style={{
                marginTop: "10px",
                backgroundColor: "#91979d",
                marginLeft: "10px",
              }}
              color="primary"
            //   onClick={() => { handleCancle() }}
              >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </div>
    </Modal>
  );
}
