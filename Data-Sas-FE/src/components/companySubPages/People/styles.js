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
        borderRadius: "5px"
    },
  
    peopleCard: {
        marginTop: 15,
        flexWrap: "unset",
    },
    griddata: {
        fontWeight: "600",
        fontSize: "40px",
        fontFamily: "Poppins",
        lineHeight: "66px",
        color: "#23273A",
    },
    griddatapara: {
        color: "#727272",
        fontSize: "19px",
        fontFamily: "Poppins",
        lineHeight: "28px",
        fontWeight: "500",
    },
    noEmply:{
        '& comImage':{
            background: "red",
        },
     },
})