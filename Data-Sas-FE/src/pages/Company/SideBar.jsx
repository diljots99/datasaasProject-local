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
} from "@material-ui/core";
import List from "./List";
import { useDispatch } from "react-redux";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import { useSelector } from "react-redux";
import { setMonitorCompany } from "../../redux/actions/watchAction";
import { unSetMonitorCompany } from "../../redux/actions/watchAction";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
//import { Link, useLocation, useHistory } from "react-router-dom";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";
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
};

export default function SideBar() {
  const [open, setOpen] = React.useState(false);

  const [mData, mSetData] = useState({
    user_id: "",
    company_id: "",
  });
  const classess = useStyles();
  const dispatch = useDispatch();
  const { url, path } = useRouteMatch();
  const { companyDetail } = useSelector((state) => state.watch);
  const [monitor, setMonitor] = useState(false);
  const history = useHistory();

let checkStorageValue = JSON.parse(sessionStorage.getItem("userData"));
console.log("checkStorageValue",checkStorageValue)
  useEffect(() => {
    console.log("companyDetail",companyDetail)
    if (
      companyDetail.business_watches &&
      companyDetail.business_watches.length > 0
    ) {
      //console.log("@=@=@=@=@", companyDetail.business_watches.filter(det => det.user_id === checkStorageValue.id ));
      setMonitor(companyDetail.business_watches.filter(det => det.user_id === checkStorageValue.id )[0].b_watch_status);
    } else {
      console.log("falseeeeee");
      setMonitor(false);
    }
  }, [companyDetail]);

  const toggleTrueFalse = () => {
    if (monitor == false) {
      console.log("yes");
      dispatch(setMonitorCompany(checkStorageValue.id, companyDetail.id, setMonitor ));
    } else {
      setOpen(true)
      console.log("no");
    }
  };

  const clickToUnMonitor = () => {
    let checkStorageValue = JSON.parse(sessionStorage.getItem("userData"));
    dispatch(
      unSetMonitorCompany(
        checkStorageValue.id,
        companyDetail.business_watches[0].uuid,
        setMonitor
      )
    );
    setOpen(false)
  };

  // if(companyDetail.business_watches.length){
  //  console.log("🕶🕶🕶🕶🕶🕶",companyDetail.business_watches);
  // }(companyDetail.business_watches && companyDetail.business_watches[0].b_watch_status)
  return (
    <>
      <Grid container className={classess.sideBar}>
        {/* company detail */}
        <Grid item className={classess.companyInfo}>
          <Grid item style={{ margin: "10px 8px 5px 8px" }}>
            <img
              src={"/images/C-logo.png"}
              alt="company-img"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item style={{ margin: "5px" }}>
            <Typography
              variant="h6"
              style={{
                color: "black",
                fontFamily: "Arial, Helvetica, sans-serif",
                margin: "10px 4px",
              }}
            >
              {companyDetail.company_name}
            </Typography>
          </Grid>
          <Grid
            item
            className={classess.actionContainer}
            style={{ margin: "5px" }}
          >
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
              onClick={() => history.push(`${url}/Notes`)}
              style={{
                background: "#e5f2f7",
                color: "#40ACFB",
                fontFamily: "Arial, Helvetica, sans-serif",
                margin: "8px 4px",
              }}
              variant="contained"
              size="small"
            >
                Add notes
            </Button>
          </Grid>
          <Grid
            item
            className={classess.actionContainer}
            style={{ margin: "5px 0 10px 0" }}
          >
            <Button
              className={classess.Button}
              style={{
                background: "#f1f1f1",
                color: "#A2A3A2",
                fontFamily: "Arial, Helvetica, sans-serif",
                margin: "10px 4px",
              }}
              variant="contained"
              size="small"
            >
              Report
            </Button>
            <Button
              className={classess.Button}
              style={{
                background: "#e5f2f7",
                color: "#8A8FA7",
                fontFamily: "Arial, Helvetica, sans-serif",
                margin: "10px 4px",
              }}
              variant="contained"
              size="small"
            >
              Full credit report
            </Button>
          </Grid>
        </Grid>

        {/* company detail list  */}
        <Grid item className={classess.detailList}>
          <List />
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Do you want to stop monitoring this company?
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>  */}
          <Grid
            item
            className={classess.actionContainer}
            style={{ margin: "5px 0 10px 0" }}
          >
            <Button
              className={classess.Button}
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
              className={classess.Button}
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
