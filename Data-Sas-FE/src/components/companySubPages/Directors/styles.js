import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    searchcontainer: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems:"center",
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
      directorsHeading:{
        fontFamily: "Poppins",
        fontSize: "26px",
        lineHeight: "39px",
        color: "#000",
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
        justifyContent:'space-between',
        marginTop:15
      },
      actionHeader:{
         marginBottom: "10px",
        marginTop:15 },
        griddata  :{
          fontWeight: "bold",
    fontSize: "30px"
        },
        griddatapara:{
          color: "#727272",
          fontSize: "15px"
        },
        directortorsTable:{
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
            '& div':{
              flexWrap: "unset",
            },
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
        mainCard:{
          margin: "0 0 20px",
        },
        tableWrap:{
          display: "block",
          // width: "915px",
          overflowX: "auto",
          '&::-webkit-scrollbar-track' : {
            width: "40px",
            backgroundColor: "rgba(245, 245, 245, 0.75)",
            margin: "15px 0",
            scrollMargin: "20px",
            },
        '&::-webkit-scrollbar' : {
        width: "10px",
        margin: "0 20px",
        scrollMargin: "20px",
        },
        '&::-webkit-scrollbar-thumb' : {
        backgroundColor: "#E7E6E6",
        borderRadius: "10px",
        margin: "0 20px",
        scrollMargin: "20px",
        },
        },
        exportMain:{
          position: "absolute",
          width: "70%",
          top: "80px;"
        },
        exportInner:{
          display: "flex",
          justifyContent: "space-between",
        },

        model: {
          top: `50%`,
          left: `50%`,
          transform: `translate(-${50}%, -${50}%)`,
          position: "absolute",
          width: 440,
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
        justifyContent: "space-around",
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
       modelRadio:{
display:'flex',
justifyContent: 'center',
       }
}))