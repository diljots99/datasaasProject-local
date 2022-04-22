import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: "40px 60px 150px",
    },
    filterButton: {
        marginTop: "10px",
        backgroundColor: "green",
    },
    grid: {
        margin: "10px 0 10px 2%",
    },
    infoBar: {
        backgroundColor: "#efefef",
        width: "100%",
        display: "flex",
        textAlign: "center",
        justifyContent: "flex-start"
    },
    infoBarPara: {
       padding: "10px 60px",
        color: "#727272",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "20px",
        lineHeight: "44px",
        marginBottom:"0",
    },
    infoBarSpam: {
        color: "#40ACFB",
    },
    leftConetent:{
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "20px",
        lineHeight: "44px",
        color: "#727272",
    },
    rightConetent:{
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "20px",
        lineHeight: "44px",
        color: "#23273A",
    },
});