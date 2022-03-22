import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStyles } from "./styles";
import { Grid } from "@material-ui/core";
import SideBar from './SideBar'
import MainContainer from './MainComponent'
import { getCompanyDetail } from "../../redux/actions/watchAction";
import { useDispatch } from "react-redux";

export default function Company() {
  const { ID } = useParams();
  const classess = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanyDetail(ID));
  }, [])

  return (
    <div className={classess.main}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3} className={classess.sideContainer}>
          <SideBar />
        </Grid>

        <Grid item xs={6} md={9} className={classess.mainContainer}>
          <MainContainer />
        </Grid>
      </Grid>
    </div>
  );
}
