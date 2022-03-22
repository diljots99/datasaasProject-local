import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
    main:{
      margin:"25px",
      marginLeft:" 5%",
      marginRight: "5%",
      marginTop: "10px"
    },
      searchcontainer: {
        display: "flex",
        justifyContent: "flex-end"
      },
      roleHeader :{
        borderCollapse:" separate",
          borderSpacing: "0 15px",
          width: "100%"
      },
      table: {
        borderCollapse: "collapse"
      },
       th : {
        backgroundColor:" #f1f1f1",
        color: "black",
        padding: "15px 10px",
        textAlign:"center"
      },
      watchHeading:{
        fontFamily: "Poppins",
        fontSize: "26px",
        lineHeight: "39px",
        color: "#000",
      },
});