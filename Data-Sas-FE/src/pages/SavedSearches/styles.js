import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme)=> ({
  main: {
    margin: "40px"
  },
  pagination:{
    display:"flex",
    float:"right"
  },
  paper: {
    height: 300,
    width: 250,
    border: "1px solid",
    borderRadius: "5px",
  },
  searchcontainer: {
    display: "flex",
    justifyContent: "flex-end"
  },
  actionContainer: {
    justifyContent: "space-between",
    // width: "150%",
    alignItems: "center",
    marginTop: "10px",
    display:"flex"
  },
  filter:{
    display: "flex",
    marginTop:"4px",
    justifyContent:"space-around",
    textAlign:"left",
  },
  filterHeading:{
    display: "flex",
    alignItems: "center"
  },
  checkBox: {
    display: "flex",
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "#ff0047",
    fontWeight: "500",
    fontFamily: "Poppins",
    fontSize: "22px",
    lineHeight: "44px",
    marginLeft:"10px"
  },
  tableHeadFirst: {
    borderRadius: " 12px 0 0 12px"
  },
  tableHeadLast: {
    borderRadius: "0 12px 12px 0"
  },
  nameLink:{
    textDecoration: " underline",
    color:"#40ACFB"
  },
  companyNotes:{
    width: "100%",
    overflowX: "auto",
    whiteSpace: "nowrap",
    borderCollapse: "separate",
    borderSpacing: "0 15px",
    '& th' :{
      borderBottom: "1px solid #DCD9D9",
      borderTop: "1px solid #DCD9D9",
      alignItems:'center',
      background: "#f1f1f1",
    },
    '& th:first-child' :{
      borderTopLeftRadius: "4px",
      borderBottomLeftRadius: "4px",
      borderLeft: "1px solid #DCD9D9",
      textAlign: "left",
    },
    '& th:last-child' :{
      borderTopRightRadius: "4px",
      borderBottomRightRadius: "4px",
      borderRight: "1px solid #DCD9D9",
      textAlign: "right",
    },
    '& tr:first-child' :{
      '& td':{
        background: "transparent",
        border: "none",
      },
    },
    '& td:first-child' :{
      borderTopLeftRadius: "4px",
      borderBottomLeftRadius: "4px",
      borderLeft: "1px solid #DCD9D9",
    },
    '& td:last-child' :{
      borderTopRightRadius: "4px",
      borderBottomRightRadius: "4px",
      borderRight: "1px solid #DCD9D9",
      textAlign: "right",
      '& div':{
        justifyContent: "end!important"
      }
    },
    '& td' :{
      borderBottom: "1px solid #DCD9D9",
      borderTop: "1px solid #DCD9D9",
      background: "#fff",
      padding: "8px 16px",
    },
    '& tr:hover':{
      '& td':{
      background: "#EFEFEF",
      },
    },
  },
  model: {
    top: `50%`,
    left: `50%`,
    transform: `translate(-${50}%, -${50}%)`,
    position: "absolute",
    width: 400,
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
  background: "#ff0047",
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
    display:"flex",
    justifyContent:"space-between"
  },
}));