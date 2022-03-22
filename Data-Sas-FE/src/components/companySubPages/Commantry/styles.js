import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    searchcontainer: {
        display: "flex",
        justifyContent: "right",
        alignItems:"center",
        maxWidth: "100%",
        marginTop: "15px",
      },
      exportButton: {
        backgroundColor: "#40ACFB",
        fontWeight: "600",
        marginLeft:"10px",
        fontfamily: "Poppins",
        fontSize: "22px",
        lineHeight: "44px",
      },
      chip:{
        width:"80px",
        textAlign:"center",
        fontWeight: "bold",
        fontSize: "18px",
        borderRadius:"5px"
      },
      companyHeading:{
        fontFamily: "Poppins",
        fontSize: "26px",
        lineHeight: "39px",
        color: "#000",
      },
      companyTable:{
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