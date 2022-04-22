import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStyles } from "./styles";
import { Typography } from "@material-ui/core";
import DirectorDetails from "../../components/common/directorDetails/";
import CompaniesSummary from "../../components/common/companiesSummary/";
import Finalcial from "../../components/common/Finalcial";
import { getDirectorDetail } from "../../redux/actions/watchAction";
import DetailCard from './DetailCard'
import { useDispatch } from "react-redux";

export default function Director() {
  const { ID } = useParams();
  const classess = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDirectorDetail(ID));
  }, [])
 
  console.log("Director ID", ID);
  return (
    <div className={classess.main}>
      <Typography variant="h6" className={classess.headtext}>
        Director details
      </Typography>

      {/* for director details component  */}
      <DirectorDetails />

      {/* for Companies Summary  component  */}
      <CompaniesSummary />

      <DetailCard />
      
       {/* for Financial Summary  component  */}
      <Finalcial/>
    </div>
  );
}
