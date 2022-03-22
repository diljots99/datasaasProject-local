import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    searchcontainer: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems:"center",
      },
      exportButton: {
        backgroundColor: "#40ACFB",
        fontWeight: "bold",
        marginLeft:"10px"
      },
      chip:{
        width:"80px",
        textAlign:"center",
        fontWeight: "bold",
        fontSize: "18px",
        borderRadius:"5px"
      }
})