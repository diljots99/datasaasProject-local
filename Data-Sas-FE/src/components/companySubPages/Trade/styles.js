import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({

    headtext: {
        fontWeight: "bold",
        marginBottom: "10px",
      },
    
      root : {
        // height:"800px"
        border: "1px solid #DCD9D9",
        borderRadius: "10px",
      },
      image : {
        padding:"10px"
      },
      gridContainer: {
        padding:"30px"
      },
      gridItem:{
        lineHeight:"70px",
        fontSize:"20px",
      },
      header:{
        lineHeight:"39px",
        fontSize:"26px"
      },
      headtext:{
        fontFamily: "Poppins",
        fontSize: "26px",
        lineHeight: "39px",
        color: "#000000",
        fontWeight: "600",
      },
      gridItem:{
        '& span':{
          fontFamily: "Poppins",
          fontSize: "20px",
          lineHeight: "44px",
          color: "#727272",
          fontWeight: "400",
        },
      },
      gridIteml:{
        '& span':{
          fontFamily: "Poppins",
          fontSize: "22px",
          lineHeight: "44px",
          color: "#23273A",
          fontWeight: "400",
        },
      }
})