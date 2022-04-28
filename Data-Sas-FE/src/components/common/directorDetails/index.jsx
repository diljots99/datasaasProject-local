import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import { Grid, Typography, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setMonitorDirector } from "../../../redux/actions/watchAction";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import { unSetMonitorDirector } from "../../../redux/actions/watchAction";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius:'10px',
};

export default function DirectorDetails() {
  const classess = useStyles();
  const dispatch = useDispatch();
  const [monitor, setMonitor] = useState(false);
  const { directorDetail } = useSelector((state) => state.watch);
  //console.log("directorDetail", directorDetail);
  //console.log(directorDetail?.director_watches,"@=@= my  monitor @=@=@", monitor);
  const [open, setOpen] = React.useState(false);
  let checkStorageValue = JSON.parse(sessionStorage.getItem("userData"));
    //console.log(checkStorageValue.id, "@=@=@=@=@", monitor);
  // const handleOpen = () => {
  //   setMonitor(true);   
  //   setOpen(true);
  //   checkMonitorOrUnMonitor(directorDetail);
  // };
  
  // const handleClose = () =>
  // {
  //   setOpen(false);
  //   checkMonitorOrUnMonitor(directorDetail);
  // };

  // useEffect(() => {
  //   checkMonitorOrUnMonitor(directorDetail)
  // }, [directorDetail]);
  
  // function checkMonitorOrUnMonitor(directorDetail) {
  //   if (
  //     directorDetail.director_watches &&
  //     directorDetail.director_watches.length > 0
  //   ) {  
  //     setMonitor(directorDetail?.director_watches[0].d_watch_status);
  //   } else {
  //     setMonitor(false);
  //   }    
  // }
  useEffect(() => {
    //console.log("companyDetail",companyDetail)
    if (
      directorDetail.director_watches &&
      directorDetail.director_watches.length > 0
    ) { 
      //console.log("@=@=@=@=@", companyDetail.business_watches[0]);
      setMonitor(directorDetail?.director_watches[0].d_watch_status);
      //console.log("@=@=@=@=@", companyDetail.business_watches.filter(det => det.user_id === checkStorageValue.id ));
      setMonitor(directorDetail.director_watches.filter(det => det.user_id === checkStorageValue.id )[0].d_watch_status);
    } else {
      console.log("falseeeeee");
      setMonitor(false);
    }
  }, [directorDetail]);


  const toggleTrueFalse = () => {  
  
    if (monitor == false) {
      console.log("yes");
      dispatch(setMonitorDirector(checkStorageValue.id, directorDetail.id,setMonitor ));
    } else {
      console.log("no");  
      setOpen(true);
    }
  };
  
  const clickToUnMonitor = () => {
    let checkStorageValue = JSON.parse(sessionStorage.getItem("userData"));
    dispatch(unSetMonitorDirector
      (checkStorageValue.id,
       directorDetail.director_watches[0].uuid,
       setMonitor));
       setOpen(false);
  };

  return (
    <>
      <Grid container className={classess.detailsContainer}>
        <Grid item className={classess.detainContainerTop}>
          <Grid item>
            {" "}
            <Typography variant="h6" className={classess.directorName}>
              {directorDetail.name}
            </Typography>
          </Grid>

          <Grid item className={classess.directorActons}>
            <Button
              className={classess.Button}
              style={{
                background: "green",
                color: "white",
                fontFamily: "Arial, Helvetica, sans-serif",
                margin: "8px 4px",
              }}
              variant="contained"
              size="small"
              onClick={toggleTrueFalse}
              startIcon={
                monitor ? <NotificationsOffIcon /> : <NotificationsIcon />
              }
            >
              {monitor ? "un Monitor" : "Monitor"}
            </Button>
            <Button
              className={classess.Button}
              style={{ background: "#f1f1f1", color: "black" }}
              variant="contained"
            >
              Report
            </Button>
          </Grid>
        </Grid>
        <img
          className={classess.directorAvatar}
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOOFMe-CzzMAgkPdsGK1wsKLtoF33HXGK98A&usqp=CAU"
          }
          alt="loc"
        />

        <Grid item className={classess.directorContainerBottom}>
          <Grid
            container
            style={{
              justifyContent: "space-around",
              marginTop: "20px",
            }}
          >
            <Grid item></Grid>
            <Grid item className={classess.directorInfo}>
              <Typography>
                <img src={"/images/calendar.png"} alt="cal" />{" "}
                <span className={classess.directorInfoSpan}>DOB :</span>{" "}
                1/15/0000
              </Typography>
            </Grid>
            <Grid item className={classess.directorInfo}>
              <Typography>
                <img src={"/images/locationIcon.png"} alt="loc" />{" "}
                <span className={classess.directorInfoSpan}>Address :</span>
                {directorDetail.address_line_1}
              </Typography>
            </Grid>
            <Grid item className={classess.directorInfo}>
              <Typography>
                <img src={"/images/globe.png"} alt="globe" />{" "}
                <span className={classess.directorInfoSpan}>Notionality :</span>
                {directorDetail.nationality}
                ipsum
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onBackdropClick="false"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" className={classess.modelPara}>
            Do you want to stop monitoring {directorDetail.name} ?
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>  */}
          <Grid
            item
            className={classess.actionContainer}
            style={{ margin: "5px 0 10px 0" , display:'flex' , justifyContent: 'space-around' }}
          >
            <Button
              className={classess.buttonyes}
              onClick={clickToUnMonitor}
              style={{
                background: "#f1f1f1",
                color: "black",
                fontFamily: "Arial, Helvetica, sans-serif",
                margin: "10px 4px",
              }}
              variant="contained"
              size="small"
            >
              yes
            </Button>
            <Button
              className={classess.buttonNo}
              onClick={() => setOpen(false)}
              style={{
                background: "#e74e4e",
                color: "#ffff",
                fontFamily: "Arial, Helvetica, sans-serif",
                margin: "10px 4px",
              }}
              variant="contained"
              size="small"
            >
              no
            </Button>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}
