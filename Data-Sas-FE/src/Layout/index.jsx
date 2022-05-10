import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { Link, useLocation, useHistory } from "react-router-dom";
import {
  useTheme,
  Drawer,
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  Grid,
  Modal,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core/";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import {
  Menu,
  MenuOpen,
  AccountCircle,
  AttachMoney,
  ArrowDropDown,
  ArrowDropUp,
  Person,
} from "@material-ui/icons";
import LogoutIcon from "@mui/icons-material/Logout";
import LockIcon from "@mui/icons-material/Lock";

// Redux import
import { useDispatch , useSelector } from "react-redux";
import { logout } from "../redux/actions/authActions";

import { useStyles } from "./styles";
import NavBar from "./NavBar";
import Navigations from "../Routes/Navigations";
import Footer from "./Footer";
import ChangePassword from "../components/common/changePassword";
import { getDirectorList,getCompanyList, getDirectorMonitorList, getCompanyMonitorList} from "../redux/actions/watchAction";
import  { getAllFilterTypes , getSavedFilterList  } from "../redux/actions/filterAction"

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const anchorRef = useRef(null);
  const [menustate, setmenuState] = useState(false);
  const [showmodel, setshowmodel] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showchangePassword, setShowChangePassword] = useState(false);

  const userData = useSelector(store => store.auth.userData)

  useEffect(() => {
    dispatch(getDirectorList());
    dispatch(getCompanyList());
    dispatch(getAllFilterTypes())
    dispatch(getSavedFilterList())
    dispatch(getDirectorMonitorList(userData.id));
    dispatch(getCompanyMonitorList(userData.id));
    // dispatch(getDirectorMonitorList());
    // dispatch(getCompanyMonitorList());
  }, [])


  const handleLogout = () => {
    dispatch(logout());
    sessionStorage.removeItem("userData");
  };
    console.log("path",location.pathname);
  return (
    <div className={classes.root}>
      <CssBaseline />

      {/* Header Bar ...........  */}
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: menustate,
        })}>
        <Toolbar>
          <Grid container>
            <Grid item>

              <Typography variant="h5" style={{ margin: "0 10px" }}>
                {location.pathname === "/" ? "Dashboard" :  location.pathname.replace("/", " ").toLocaleUpperCase().replace(/-/g," ")}
              </Typography>
            </Grid>
          </Grid>

          <Grid container justify="flex-end" spacing={2}>
            <Grid item>
              <Link
                title="Subscription"
                to="/subscription"
                style={{ textDecoration: "none", color: "#8a8fa7" }}>
               <img  className={classes.doller} src={"/images/doller.png"} alt="logo" />
              </Link>
            </Grid>
            <Grid item>
              <Link
                title="Profile"
                to="/profile"
                style={{ textDecoration: "none", color: "#8a8fa7" }}>
                <AccountCircle fontSize="large" />
              </Link>
            </Grid>
            <Grid item>
              <Typography
                paragraph
                style={{
                  paddingTop: "5px",
                  alignItems: "center",
                  display: "flex",
                }}
                ref={anchorRef}
                aria-controls={showMenu ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={setShowMenu}>
                {userData.u_first_name} {showMenu ?<ArrowDropUp />  : <ArrowDropDown />}
              </Typography>
              {/* <Button
                ref={anchorRef}
                aria-controls={showMenu ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={setShowMenu}>
                users Name
              </Button> */}
              <Popper
                open={showMenu}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal className={classes.mainPoper}>
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}>
                    <Paper>
                      <ClickAwayListener onClickAway={() => setShowMenu(false)}>
                        <MenuList
                          autoFocusItem={showMenu}
                          id="menu-list-grow"
                          onKeyDown={() => setShowMenu(false)}>
                            
                          <MenuItem onClick={() => {history.push('/profile')}}>
                           <img style={{marginRight:"5px"}} src={"/images/Profile.png"} alt="logo" /> {" "}
                            My Profile
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              setShowChangePassword(true);
                            }}>
                            {/* <LockIcon
                              title="Change Password"
                              style={{
                                color: "#8a8fa7",
                              }}
                            /> */}
                           <img style={{marginRight:"5px"}}  src={"/images/changePass.png"} alt="logo" /> {" "}
                            Change Password
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              setshowmodel(true);
                            }}>

                            {/* <LogoutIcon
                              title="Log-Out"
                              style={{
                                color: "#8a8fa7",
                              }}
                              onClick={() => setshowmodel(true)}
                            /> */}
                             <img style={{marginRight:"5px"}} onClick={() => setshowmodel(true)} src={"/images/logout.png"} alt="logo" />
                            {" "}
                            Logout
                          </MenuItem>{" "}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      {/* Left Drawer & Nav Bar ..............  */}

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawermenustate]: menustate,
          [classes.drawerClose]: !menustate,
        })}
        classes={{
          paper: clsx({
            [classes.drawermenustate]: menustate,   
            [classes.drawerClose]: !menustate,
          }),
        }}>
        <div className={classes.toolbar} style={{background: "#212330"}}>
          {menustate && (
            <Typography variant="h6" style={{ fontFamily: "Poppins" , fontSize: "26px" , fontWeight: "bold" , lineHeight: "44px"}}>
              <span style={{ color: "green", fontWeight: "bold" }}>DATA </span>{" "}
              <span style={{ color: "white", fontWeight: "bold" }}>SAAS</span>
            </Typography>
          )}
          {!menustate ? (
            <Typography
              variant="h6"
              style={{ display: "flex", flexDirection: "column",cursor: "pointer" ,fontFamily: "Poppins" , fontSize: "26px" , fontWeight: "bold" , lineHeight: "32px" }}
              onClick={() => setmenuState(true)}>
              <span style={{ color: "green", fontWeight: "bold" }}>DATA </span>{" "}
              <span style={{ color: "white", fontWeight: "bold" }}>SAAS</span>
            </Typography>
          ) : (
            // <IconButton onClick={() => setmenuState(true)}>
            //   <Menu style={{ color: "#8a8fa7" }} />
            // </IconButton>
            <IconButton onClick={() => setmenuState(false)}>
              <MenuOpen style={{ color: "#8a8fa7" }} />
            </IconButton>
          )}
        </div>
        <Divider />

        <NavBar onSelectItem={() => setmenuState(false)} />
      </Drawer>

      {/* pages ............ */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* {location.pathname.length > 2 ? (
          <Typography paragraph>{location.pathname}</Typography>
        ) : (
          <Typography paragraph>/dashboard</Typography>
        )} */}

        <Navigations />
        <div className={classes.toolbar} />
      </main>

      {/* Footer */}
      <div className={classes.footerMain}>
      
      <Footer />
    </div>

      {/* model */}
      <Modal
        open={showmodel}
        onClose={() => setshowmodel(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        <div className={classes.model}>
          <h2 id="simple-modal-title" className={classes.modelHead}>
            Logout this session
          </h2>
          {/* <Divider /> */}
          <p id="simple-modal-description" className={classes.modelPara}>
            Hi {userData.u_first_name}. are you sure you want to logout
          </p>
          <Grid container className={classes.buttonMain}> 
            <Grid item>
              <Button className={classes.buttonyes}
                variant="contained"
                size="large"
                style={{ marginRight: "10px", backgroundColor: "#40acfb" }}
                color="primary"
                onClick={() => handleLogout()}>
               YES
              </Button>
            </Grid>
            <Grid item>
              <Button className={classes.buttonNo}
                variant="contained"
                size="large"
                style={{ backgroundColor: "#6c757d", width: "100px" }}
                color="primary"
                onClick={() => setshowmodel(false)}>
                NO
              </Button>
            </Grid>
          </Grid>
        </div>
      </Modal>

      {/* change password model */}
      <ChangePassword
        open={showchangePassword}
        setshowChangePassword={setShowChangePassword}
      />
    </div>
  );
}
