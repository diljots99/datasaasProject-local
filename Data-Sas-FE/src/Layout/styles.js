import { makeStyles } from '@material-ui/core'

const drawerWidth = 269;

export const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        position: "relative",
        minHeight: "100%",
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        width: `calc(100% - 92px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        color: "#8a8fa7",
        backgroundColor: "#fafafa",
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
    },
    drawermenustate: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        backgroundColor: "#23273a",
        color: "#8a8fa7",
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9) + 20,
        },
        backgroundColor: "#23273a",
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "20px",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        [theme.breakpoints.up("sm")]: {
           paddingLeft: "10px",
           minHeight: "70px",
        },
    },
    content: {
        flexGrow: 1,
        // padding: theme.spacing(3),
    },
    doller: {
        height:"40px",
        width:"40px"
    },
    doller: {
        height:"40px",
        width:"40px"
    },
    footer: {
        marginTop: "1rem",
        padding: "1rem",
        position: "fixed",
        bottom: 0,
        left: drawerWidth,
        width: "100%",
    },
    model: {
        top: `50%`,
        left: `50%`,
        transform: `translate(-${50}%, -${50}%)`,
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        borderRadius: "30px",
        boxShadow: theme.shadows[5],
        padding: "16px 0 24px",
    },
    modelHead: {
        padding: "0 32px 20px",
        borderBottom: "2px solid #F1F2F4",
        fontWeight: "bold",
        fontFamily: "Poppins",
        fontSize: "36px",
        lineHeight: "54px",
        color: "#000000",
    },
    modelPara: {
        margin: "20px 0px",
        fontSize: "25px",
        color: "#717171",
        padding: "0 32px",
        fontWeight: "400",
        fontFamily: "Poppins",
        lineHeight: "40px",
    },
    buttonyes:{
      background: "#40ACFB",
      fontFamily: "Poppins",
      fontSize: "22px",
      lineHeight: "44px",
      fontWeight: "500",
    },
    buttonNo:{
        background: "#6C757D",
        fontFamily: "Poppins",
        fontSize: "22px",
        lineHeight: "44px",
        fontWeight: "500",
      },
    buttonMain:{
      padding: "10px 32px",
    },
    
    active: {
        backgroundColor: "rgb(0 0 0)",
    },
    icon: {
        color: "#8a8fa7",
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    navTitle:{
        '& span':{
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: "18px",  
      lineHeight: "44px",
      color: "#8A8FA7",
      [theme.breakpoints.up("sm")]: {
       marginLeft: "25px",
      },
        },
    },
    icon:{
       minWidth: "40px",
       maxWidth: "40px",
       [theme.breakpoints.up("sm")]: {
        minWidth: "55px",
        maxWidth: "55px",
        justifyContent: "center",
       },
    },
    active:{
        icon:{
        minWidth: "40px",
        maxWidth: "40px",
        [theme.breakpoints.up("sm")]: {
            minWidth: "55px",
            maxWidth: "55px",
            justifyContent: "center",
           },
        },
     },
     
     mainPoper:{
         top: "11px!important",
         left: "-27px!important",
         boxShadow: "0px 0px 15px rgb(0 0 0 / 6%)!important",
         border: "1px solid #F4F3F3!important",
         borderRadius: "10px!important",
         '& ul':{
             padding: "0!important",
             '& li':{
                 borderBottom: "1px solid #EFEFEF",
             },
         },
     },
     footerMain:{
        bottom: 0, 
        background: "#fff" , 
        padding: "13px 0 13px 24px" ,  
        border: "1px solid #E9E9E9" ,  
        position: "absolute", 
        left: "268px" , 
        width: "calc(100% - 268px)",
        [theme.breakpoints.up("sm")]: {
            left: "92px" , 
            width: "calc(100% - 92px)",
        },
     },
}));