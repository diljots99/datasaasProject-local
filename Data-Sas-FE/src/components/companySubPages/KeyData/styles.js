import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginTop: "20px",
    },
    filterButton: {
        marginTop: "10px",
        backgroundColor: "green",
    },
    grid: {
        margin: "10px 0 10px 2%",
    },
    gridItem:{
        lineHeight:" 44px",
        fontSize:"19px",
      },
      main:{ border: "1px solid #DCD9D9", borderRadius: "10px", marginTop: "10px", marginBottom: "10px" , background: "#fff"},
      gridItemMain:{ border: "1px solid #DCD9D9", borderRadius: "10px", marginBottom: "10px", background: "#fff" , marginBottom: "10px", width:"100%"},
      cardHeader: {
        padding: "0 20px",
        backgroundColor: " #EDEBEB",
        borderRadius: " 10px 10px 0 0",
        height: "60px",
        alignItems: "center",
        display: "flex",
        justifyContent:"space-between"
      },
      cardParaContainer:{
       margin : "10px 20px",
      },
      cardPara:{
        fontSize: "18px",
        color: "#727272",
      },
      cardLink:{
        fontSize: "18px",
        color: '#34c0f6',
      },
      cardContainer:{
        overflow: "scroll",
        height: "300px",
        marginTop: "10px",
        width: "100%",
        paddingTop: "20px",
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
      mainCompany:{
        width: "50%",
      }

})