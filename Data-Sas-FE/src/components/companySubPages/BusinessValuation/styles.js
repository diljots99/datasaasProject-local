import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    turnOver:{
        width: "48%",
        '& svg':{
            '& g':{
    '& path':{
        fill: "#03A339",
        borderRadius: "0px 5px 5px 0px",
    },
    },
    },
    },
    netAssets:{
        width: "48%",
        '& svg':{
            '& g':{
    '& path':{
        fill: "#6844EE",
        borderRadius: "0px 5px 5px 0px",
    },
    },
    },
    },
    lineChart:{
        '& svg':{
            '& rect':{
        fill: "#fff",
    },
    },
    },
})