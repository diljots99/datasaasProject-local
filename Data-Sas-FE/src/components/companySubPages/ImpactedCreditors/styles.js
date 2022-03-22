import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    searchcontainer: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems:"center",
        margin:"10px 0"
      },
      actioncontainer:{
        display: "flex",
        justifyContent: "flex-start",
        alignItems:"center",
      },
      chip:{
        width:"80px",
        textAlign:"center",
        fontWeight: "bold",
        fontSize: "18px",
        borderRadius:"5px"
      },
      checkBox: {
        display: "flex",
        alignItems: "center",
      },
      exportButton: {
        backgroundColor: "#40ACFB",
        fontWeight: "600",
        marginLeft:"10px",
        fontfamily: "Poppins",
        fontSize: "22px",
        lineHeight: "44px",
      },
      directorCard:{
       
        marginTop:15,
        marginBottom: "25px",
      },
      actionHeader:{
         marginBottom: "10px",
        marginTop:15 },
        impactHeading:{
          fontFamily: "Poppins",
          fontSize: "26px",
          lineHeight: "39px",
          color: "#000000",
          fontWeight: "600",
        },
        creatorTh:{
          fontFamily: "Poppins",
          fontSize: "22px",
          lineHeight: "33px",
          color: "#000000",
          fontWeight: "600",
        },
        impactTable:{
          borderCollapse: "separate",
          borderSpacing: "0 15px",
          width: "100%",
          whiteSpace: "nowrap",
          overflowX: "auto",
          '& th':{
           background: "#f1f1f1",
           padding: "10px 30px",
           fontSize: "22px",
           lineHeight: "33px",
           fontWeight: "600",
           fontFamily: "Poppins",
          },
          '& th:first-child':{
            borderTopLeftRadius: "4px",
            borderBottomLeftRadius: "4px",
          },
          '& th:last-child':{
            borderTopRightRadius: "4px",
            borderBottomRightRadius: "4px",
          },
          '& td':{
            background: "#ffffff",
            padding: "10px 30px",
            fontSize: "22px",
            lineHeight: "33px",
            fontWeight: "400",
            fontFamily: "Poppins",
            color: "#727272",
           },
           '& td:first-child':{
             borderTopLeftRadius: "4px",
             borderBottomLeftRadius: "4px",
           },
           '& td:last-child':{
             borderTopRightRadius: "4px",
             borderBottomRightRadius: "4px",
           },
        },

})