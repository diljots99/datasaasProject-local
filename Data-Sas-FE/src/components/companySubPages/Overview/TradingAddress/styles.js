import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  searchcontainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  actioncontainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  chip: {
    width: "80px",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "18px",
    borderRadius: "5px",
  },
  checkBox: {
    display: "flex",
    alignItems: "center",
  },
  directorsHeading: {
    fontFamily: "Poppins",
    fontSize: "26px",
    lineHeight: "39px",
    color: "#000",
  },
  exportButton: {
    backgroundColor: "#40ACFB",
    fontWeight: "600",
    marginLeft: "10px",
    fontfamily: "Poppins",
    fontSize: "22px",
    lineHeight: "44px",
  },
  directorCard: {
    justifyContent: "space-between",
    marginTop: 15,
  },
  actionHeader: {
    marginBottom: "10px",
    marginTop: 15,
  },
  griddata: {
    fontWeight: "bold",
    fontSize: "30px",
  },
  griddatapara: {
    color: "#727272",
    fontSize: "15px",
  },
  tableMain:{
    display:'flex',
    flexDirection: 'column',
    width: "100%",
  },
  directortorsTable: {
    borderCollapse: "separate",
    borderSpacing: "0 15px",
    width: "100%",
    whiteSpace: "nowrap",
    overflowX: "auto",
    "& th": {
      background: "#f1f1f1",
      padding: "10px 30px",
      fontSize: "22px",
      lineHeight: "33px",
      fontWeight: "600",
      fontFamily: "Poppins",
    },
    "& th:first-child": {
      borderTopLeftRadius: "4px",
      borderBottomLeftRadius: "4px",
    },
    "& th:last-child": {
      borderTopRightRadius: "4px",
      borderBottomRightRadius: "4px",
    },
    "& td": {
      background: "#ffffff",
      padding: "10px 30px",
      fontSize: "22px",
      lineHeight: "33px",
      fontWeight: "400",
      fontFamily: "Poppins",
      color: "#727272",
      "& div": {
        flexWrap: "unset",
      },
    },
    "& td:first-child": {
      borderTopLeftRadius: "4px",
      borderBottomLeftRadius: "4px",
    },
    "& td:last-child": {
      borderTopRightRadius: "4px",
      borderBottomRightRadius: "4px",
    },
  },
  mainCard: {
    margin: "0 0 20px",
  },
  tableWrap: {
    display: "block",
    // width: "915px",
    overflowX: "auto",
    "&::-webkit-scrollbar-track": {
      width: "40px",
      backgroundColor: "rgba(245, 245, 245, 0.75)",
      margin: "15px 0",
      scrollMargin: "20px",
    },
    "&::-webkit-scrollbar": {
      width: "10px",
      margin: "0 20px",
      scrollMargin: "20px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#E7E6E6",
      borderRadius: "10px",
      margin: "0 20px",
      scrollMargin: "20px",
    },
  },
  exportMain: {
    position: "absolute",
    width: "70%",
    top: "80px;",
  },
  exportInner: {
    display: "flex",
    justifyContent: "space-between",
  },
});
