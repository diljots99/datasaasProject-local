import React, { useState } from "react";
import { Grid, TextField, Button, Modal, Divider, Typography, InputAdornment, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useSelector , useDispatch} from "react-redux"
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { changePassword } from '../../redux/actions/authActions'
import { useHistory } from 'react-router-dom';
export const useStyles = makeStyles((theme) => ({
  model: {
    top: `50%`,
    left: `50%`,
    transform: `translate(-${50}%, -${50}%)`,
    position: "absolute",
    width: 430,
    backgroundColor: theme.palette.background.paper,
    // height: "500px",
    borderRadius: "30px",
    boxShadow: theme.shadows[5],
    padding: "16px 0 35px",
  },
  modelHead: {
    margin: " 20px 0",
    fontWeight: "bold",
    padding: "0 32px",
    fontSize: "36px",
    lineHeight: "54px",
    fontFamily: "Poppins",
  },
  modelPara: {
    margin: "20px 0px",
    fontSize: "20px",
    color: "#8a8fa7",
  },
  modelForm: {
    width: "100%",
    padding: "10px 32px",
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
    border: "1px solid #DCD9D9",
    borderRadius: "5px",
  },
  inputItem: {
    marginTop: "10px",
  },
  lable: {
    color: "#727272",
    fontWeight: 400,
    marginBottom:"5px",
    fontFamily: "Poppins",
    fontSize: "20px",
    lineHeight: "44px",

  },
  conformButton:{
    background: "#40ACFB",
    borderRadius: "5px",
    fontFamily: "Poppins",
    fontSize: "22px",
    lineHeight: "44px",
    fontWeight: "500",
  },
  cancelButton:{
    background: "#6C757D",
    borderRadius: "5px",
    fontFamily: "Poppins",
    fontSize: "22px",
    lineHeight: "44px",
    fontWeight: "500",
  },
  buttonMain:{
    padding: "0 0 0 32px",
  },
}));

export default function ChangePassword({ open, setshowChangePassword }) {
  const classes = useStyles();
  const dispatch = useDispatch()
  const { userData } = useSelector((state) => state.auth);
  const [data, setData] = useState({
    oldPassword: "",
    newPassword: "",
    conformPassword: "",
  })
  const [error, setError] = useState({})
  const [showPassword, setshowPassword] = useState(false)
  const history = useHistory()

  const handlePasswordReset = () => {
    setError({})
let errors = {}

if(!data.oldPassword){
  errors.oldPassword = "Old password can not be blank"
}

if(!data.newPassword){
  errors.newPassword = "New password can not be blank"
}else if (data.newPassword.length < 4) {
  errors.newPassword = "Password must be more than 4 characters";
}

if(data.newPassword !== data.conformPassword){
  errors.conformPassword = "Password's not mached "
}

if(errors.oldPassword || errors.newPassword || errors.conformPassword){
  setError(errors)
}else{
  const req = {
    "u_email": userData.u_email,
    "old_password": data.oldPassword,
    "new_password": data.newPassword
  }
 
dispatch(changePassword(req, userData))
//history.push('/')
setshowChangePassword(false)
}

  }

  const handleCancle = () => {
    setshowChangePassword(false)
    setData({
      oldPassword: "",
      newPassword: "",
      conformPassword: "",
    })
  }

  return (
    <Modal
      open={open}
      onClose={() => setshowChangePassword(false)}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description">
      <div className={classes.model}>
        <h2 id="simple-modal-title" className={classes.modelHead}>
          Change Password
        </h2>
        <Divider />
        {/* 
          <p id="simple-modal-description" className={classes.modelPara}>
            Enter your details below.
          </p> */}

        {/* Model fields */}
        <Grid container className={classes.modelForm}>
          <Grid item className={classes.modelFormItem}>
            <Typography variant="h6" className={classes.lable}>
              Old Password
            </Typography>
            <TextField
              className={classes.modelFormInput}
              id="outlined-basic"
              placeholder="Enter Old password"
              error ={error.oldPassword ?  true : false }
              variant="outlined"
              size="small"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                      onClick={() => setshowPassword(!showPassword)}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              value={data.oldPassword}
              onChange={e => setData({ ...data, oldPassword: e.target.value })}
            />
            {error.oldPassword && <Typography className={classes.inputError}>{error.oldPassword}</Typography>}
          </Grid>
          <Grid item className={classes.modelFormItem}>
            <Typography variant="h6" className={classes.lable}>
              New Password
            </Typography>
            <TextField
              className={classes.modelFormInput}
              id="outlined-basic"
              error ={error.newPassword ?  true : false }
              size="small"
              placeholder="Enter new password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                      onClick={() => setshowPassword(!showPassword)}>
                      {showPassword ? <Visibility /> : <VisibilityOff />} 
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              value={data.newPassword}
              onChange={e => setData({ ...data, newPassword: e.target.value })}
            />
             {error.newPassword && <Typography className={classes.inputError}>{error.newPassword}</Typography>}
          </Grid>
          <Grid item className={classes.modelFormItem}>
            <Typography variant="h6" className={classes.lable}>
              Confirm Password
            </Typography>
            <TextField
              className={classes.modelFormInput}
              id="outlined-basic"
              error ={error.conformPassword ?  true : false }
              size="small"
              placeholder="Enter new password again"
              variant="outlined"
              type={showPassword ? "text" : "password"}   
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                      onClick={() => setshowPassword(!showPassword)}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              value={data.conformPassword}
              onChange={e => setData({ ...data, conformPassword: e.target.value })}
            />
             {error.conformPassword && <Typography className={classes.inputError}>{error.conformPassword}</Typography>}
          </Grid>
        </Grid>

        <Grid container>
          <Grid item className={classes.buttonMain}> 
            <Button className={classes.conformButton}
              variant="contained"
              size="large"
              style={{ marginTop: "10px"}}
              color="primary"
              onClick={() => { handlePasswordReset() }}>
              Confirm
            </Button>
          </Grid>
          <Grid item>
            <Button className={classes.cancelButton}
              variant="contained"
              size="large"
              style={{
                marginTop: "10px",
                backgroundColor: "#91979d",
                marginLeft: "10px",
              }}
              color="primary"
              onClick={() => { handleCancle() }}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </div>
    </Modal>
  );
}
