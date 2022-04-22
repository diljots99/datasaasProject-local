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
        marginLeft:"10px",
        borderRadius: "10px",
        fontFamily: "Poppins",
        fontSize: "22px",
        fontWeight: "500",
        lineHeight: "44px",
      },
      chip:{
        width:"80px",
        textAlign:"center",
        fontWeight: "bold",
        fontSize: "18px",
        borderRadius:"5px"
      },
      filterDropdown:{
       position: "relative",
       zIndex:"999"
      },
      filterinner:{
        background: "white",
        position: "absolute",
        right: "280px",
        top: "51px",
        border: "1px solid #F4F3F3",
        boxShadow: "0px 0px 15px rgb(0 0 0 / 6%)",
        borderRadius: "10px",
        padding: "15px",
      },
      filtertitle:{
        padding: "0!important",
        '& h2':{
          fontFamily: "Poppins",
          fontSize: "18px",
          fontWeight: "600",
          lineHeight: "23px",
          color: "#000",
        }
      },
      filterContent:{
        padding: "0!important",
        '& h2':{
          fontFamily: "Poppins",
          fontSize: "18px",
          fontWeight: "600",
          lineHeight: "23px",
          color: "#000",
        },
        '& span':{
          fontFamily: "Poppins",
          fontSize: "15px",
          fontWeight: "normal",
          lineHeight: "44px",
          color: "#727272",
        }
      },
      radioBtn:{
        padding: "0 5px 0 10px!important",
      },
      applyButton:{
        background: "rgb(64, 172, 251)",
        '& span' :{
          color: "#fff!important"
        }
      }

})