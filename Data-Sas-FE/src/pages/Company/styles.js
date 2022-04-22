import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  main: {
    margin: "40px",
  },
  sideContainer: {
    border: "1px solid #DCD9D9",
    borderRadius: "10px",
    display: "block",
    padding: "0!important",
  },
  mainContainer: {
    display: "block",
    padding: "10px 25px!important",
    overflowX: "scroll"
  },
  companyInfo: {
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "10px 10px 0 0",
    borderBottom: "none",
    display: "block",
    borderBottom: "1px solid #DCD9D9",
    padding: "20px",
  },
  detailList: {
    borderRadius: "0 0 10px 10px",
  },
  actionContainer: {
    width: "100%",
  },
  sideBar: {
    display: "block!important",
  },
  listBn: {
    padding: "10px 25px",
  },
});
