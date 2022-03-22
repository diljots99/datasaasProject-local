import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
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
    textAlign:"left"
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
  companyNotes:{
    width: "100%",
    overflowX: "auto",
    whiteSpace: "nowrap",
    borderCollapse: "separate",
    borderSpacing: "0 15px",
    '& th' :{
      borderBottom: "1px solid #DCD9D9",
      borderTop: "1px solid #DCD9D9",
      background: "#f1f1f1",
    },
    '& th:first-child' :{
      borderTopLeftRadius: "4px",
      borderBottomLeftRadius: "4px",
      borderLeft: "1px solid #DCD9D9",
      textAlign: "center",
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
});