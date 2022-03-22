import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import {
  Grid,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Button,
  Select,
  Card,
} from "@material-ui/core";
import MapComponent from "../../mapComponent";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import NotesComponent from "../../common/NotesComponent";
import InfoCard from "./InfoCard";
import { useSelector } from "react-redux";


export default function KeyData() {
  const classes = useStyles();
  const [mData, mSetData] = useState({
    user_id: "",
    company_id: "",
  });
  const [monitor, setMonitor] = useState(true);
  const { companyDetail } = useSelector((state) => state.watch);

  const news = [
    {
      title: "Lorem Ipsum is a dummy text",
      date: "21/05/2021",
      detail:
        "Contrary popular belief, Lorem to Ipsum is simply Contrary popular belief, Lorem to Ipsum is simply...",
    },
    {
      title: "Lorem Ipsum is a dummy text",
      date: "21/05/2021",
      detail:
        "Contrary popular belief, Lorem to Ipsum is simply Contrary popular belief, Lorem to Ipsum is simply...",
    },
    {
      title: "Lorem Ipsum is a dummy text",
      date: "21/05/2021",
      detail:
        "Contrary popular belief, Lorem to Ipsum is simply Contrary popular belief, Lorem to Ipsum is simply...",
    },
    {
      title: "Lorem Ipsum is a dummy text",
      date: "21/05/2021",
      detail:
        "Contrary popular belief, Lorem to Ipsum is simply Contrary popular belief, Lorem to Ipsum is simply...",
    },
  ];
  const toggleTrueFalse = () => {
    console.log(monitor);
   let checkValue = setMonitor(!monitor)
  };

 
  if(mData.user_id && mData.company_id && monitor == false){
    console.log("yes🎁🎁🎁🎁🎁");
    //dispatch(login(email.trim(), password));
  }else{
    console.log("no🎭🎭🎭🎭🎭");
  }



  return (
    <div>
      <Typography variant="h6" style={{ fontWeight: 600 }}>
        Key Data
      </Typography>

      {/* info card  */}
      <InfoCard data={companyDetail} />

      {/* company info with para and link */}
      <div className={classes.main}>
        <div className={classes.cardHeader}>
          <Typography variant="h6" style={{ fontWeight: 600 }}>
            {companyDetail.company_name}
          </Typography>
        </div>
        <div className={classes.cardParaContainer}>
          <Typography variant="p" className={classes.cardPara}>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing for industries for previewing layouts and visual
            mockups
          </Typography>
        </div>
        <div className={classes.cardParaContainer}>
          <Typography variant="p" className={classes.cardLink}>
            {companyDetail.uri}
          </Typography>
        </div>
      </div>

      <Grid
        container
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
        {/* for Company News */}
        <Grid item className={classes.mainCompany}>
          <div className={classes.gridItemMain}>
            <div className={classes.cardHeader}>
              <Typography variant="h6" style={{ fontWeight: 600 }}>
                Company News
              </Typography>
              <Button
                style={{
                  background: "green",
                  color: "white",
                  fontFamily: "Arial, Helvetica, sans-serif",
                }}
                variant="contained"
                size="small"
                onClick={ toggleTrueFalse}
                startIcon={
                  monitor ? <NotificationsIcon />:<NotificationsOffIcon />
                }
              >
                {monitor ? "Monitor":"un Monitor" }
              </Button>
            </div>
            <div className={classes.cardContainer}>
              {news.map((val) => (
                <NotesComponent data={val} />
              ))}
            </div>
          </div>
        </Grid>

        {/* for map   */}
        <Grid
          item
          className={classes.mainCompany}
          style={{ marginTop: "12px" }}
        >
          <MapComponent />
        </Grid>
      </Grid>
    </div>
  );
}
