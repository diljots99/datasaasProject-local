import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    searchcontainer: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems:"center",
      },
      chip:{
        width:"80px",
        textAlign:"center",
        fontWeight: "bold",
        fontSize: "18px",
        borderRadius:"5px"
      },
      graphic:{
        '& tspan':{
fontSize:"14px",
fill: "#8A8FA7",
fontFamily: "Poppins",
lineHeight: "44px",
        },
        '& line':{
         padding: "20px 0",
         minHeight: "40px",
        },
      },

})