import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/authActions";
import {
  Button,
  Grid,
  Typography,
  IconButton,
  InputLabel,
  InputAdornment,
  FormControl,
  OutlinedInput,
} from "@material-ui/core";
import clsx from "clsx";
import { Lock, MailOutline } from "@material-ui/icons";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useStyles } from "./styles";

export default function Auth() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);
  const [width, setWidth] = useState(window.innerWidth)
  const [Error, setError] = useState({})

  const handleLogin = () => {
    setError({})
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!email) {
      errors.email = "Cannot be blank";
    } else if (!regex.test(email)) {
      errors.email = "Invalid email format";
    }

    if (!password) {
      errors.password = "Cannot be blank";
    } else if (password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }

    if(errors.email  || errors.password){
      setError(errors)
    }else{
      dispatch(login(email.trim(), password));
    }
  };


  useEffect(() => {
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  })

  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  return (
    <Grid container>
      {/* Image  */}
      <Grid item xs={5} style={{ display: width <= 500 ? "none" : null }} >
        <img className={classes.image} src={"/images/Login.png"} alt="logo" />
      </Grid>

      {/* Login form   */}
      <Grid item xs={width <= 500 ? 12 : 7} className={classes.Container}>
        <Grid container justify="space-between" className={classes.formheader}>
          <Grid item >

            <img src={"/images/logo.png"} alt="logo" />
          </Grid>
          <Grid item>
            <Typography paragraph className={classes.parasignup}>
              {" "}
              Dont have an account? SignUP
            </Typography>{" "}

          </Grid>
          {/* <Grid item>
            {" "} 
            <Typography paragraph className={classes.para}>
              {" "}
              Dont have an account?
            </Typography>{" "}
          </Grid> */}
        </Grid>

        {/*  get started */}
        <Grid item style={{background: "#fff"}}>
          <Typography variant="h3" className={classes.textpara}>
            Hello! Let's get started
          </Typography>
          <Typography paragraph className={classes.para2}>
            Enter your details below.
          </Typography>
        </Grid>

        {/* Form  */}
        <Grid
          container
          direction="column"
          justify="space-between"
          spacing={2}
          className={classes.formContainer}>
          {/* E-mail field */}
          <Grid item className={classes.input}>
            <FormControl
              className={clsx(classes.margin, classes.textField)}
            >
              {/* <InputLabel htmlFor="outlined-adornment-email">
                Enter e-mail Address{" "}
              </InputLabel> */}
              <OutlinedInput
                className={classes.Outlined}
                id="outlined-adornment-email"
                type="e-mail"
                placeholder="Enter e-mail Address"
                error ={Error.email ?  true : false }
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                startAdornment={
                  <InputAdornment position="start" className={classes.positionStart}>
                    <MailOutline />
                  </InputAdornment>
                }
              // labelWidth={70}
              />
            </FormControl>
            {Error.email && <Typography className={classes.inputError}>{Error.email}</Typography>}
          </Grid>
          {/* Password field */}
          <Grid item className={classes.input}>
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="outlined">
              {/* <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel> */}
              <OutlinedInput
                className={classes.Outlined}
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                placeholder=" Password"
                error ={Error.password ?  true : false }
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end" className={classes.lockMain}>
                    <IconButton className={classes.lock}
                      aria-label="toggle password visibility"
                      edge="end"
                      onClick={() => setshowPassword(!showPassword)}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                startAdornment={
                  <InputAdornment position="start" className={classes.positionStart}>
                    <Lock />
                  </InputAdornment>
                }
              // labelWidth={70}
              />
            </FormControl>
            {Error.password && <Typography className={classes.inputError}>{Error.password}</Typography>}
          </Grid>

          <Grid item>
            <div>
              <Button
                className={classes.button}
                variant="contained"
                size="large"
                onClick={() => handleLogin()}>
                SIGN IN
              </Button>
            </div>
          </Grid>
        </Grid>

        {/*  form Footer */}
        <Grid item>
          <Typography paragraph className={classes.para}>
            Copyright © 2021 BrandName. All rights reserved.{" "}

          </Typography>
          <Typography paragraph className={classes.para}>
            Terms & Conditions | Cookie Policy
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
