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
      financialHeading:{
        fontFamily: "Poppins",
        fontSize: "26px",
        lineHeight: "39px",
        color: "#000",
      },
      financialMain:{
        display: "flex",
        flexWrap: "wrap",
        '& .financialInner:last-child':{
          marginLeft: "10px",
        },
        '& .financialInner:first-child':{
          marginRight: "10px",
        },
      },
})