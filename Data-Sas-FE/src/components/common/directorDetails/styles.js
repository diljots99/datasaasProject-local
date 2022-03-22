import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    detailsContainer: { flexDirection: "column", height: "180px" },
    detainContainerTop: {
      display: "flex",
      justifyContent: "space-around",
      backgroundImage: `url('/images/DirectorBG.jpg')`,
      height: "80px",
      alignItems: "center",
      borderRadius: "10px 10px 0 0",
    },
    directorName: { color: "white", marginLeft: "30px" },
    directorActons: {
      justifyContent: "space-around",
      width: "300px",
      display: "flex",
    },
    directorAvatar: {
      display: "flex",
      width: "110px",
      height: " 110px",
      border: "5px solid #f0f0f6",
      borderRadius: "80px",
      position: "absolute",
      marginLeft: "5%",
      marginTop: "30px",
    },
    directorContainerBottom: {
      height: "85px",
      borderRadius: "0 0 10px 10px",
      borderLeft: "1px solid gray",
      borderRight: "1px solid gray",
      borderBottom: "1px solid gray",
    },
    directorInfo: { alignItems: "center", display: " flex" },
    directorInfoSpan: { color: "#727272" },
})