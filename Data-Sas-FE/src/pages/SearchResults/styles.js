import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
    main:{
      margin:"25px"
    },
    tableheader: {
        backgroundColor: "#EFEFEF",
        borderRadius:"12px"
      },
      tableRow: {
        backgroundColor: "white",
        // border: "2px solid",
        marginTop:"10px"
      },
      searchcontainer: {
        display: "flex",
        justifyContent: "flex-end",
      },
      tableCell: {
         textAlign: "center",
      },
      watchHeading:{
        fontFamily: "Poppins",
        fontSize: "26px",
        lineHeight: "39px",
        color: "#000",
      },
});