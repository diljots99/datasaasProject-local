import React from 'react'
import { Grid, Typography, Card } from "@material-ui/core";
import { grid } from '@mui/system';
import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
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
    comImage:{
        width: "61px",
        height: "61px",
        background: "#D9EEFE",
        lineHeight: "57px",
        borderRadius: "50px",
        textAlign: "center",
        marginRight: "7px",
    },
    noEmply:{
        '& comImage':{
            background: "red",
        },
     },
})

export default function PeopleCard({ count, message, imgsrc }) {
    const classess = useStyles();
    return (
        <Card style={{  marginRight: "10px" }} variant="outlined">

            <grid style={{ display: "flex", padding: "20px", justifyContent: "space-around" }}>
             <Grid className={classess.comImage}>
                <img className={classess.Avatar} src={imgsrc} alt="company-note-list" />
                </Grid>
                <grid style={{ display: "inline-grid", paddingLeft: "5px" }}>
                    <Typography display="inline" className={classess.griddata} variant="h7">
                        {count}
                    </Typography>
                    <Typography display="inline" variant="h7" className={classess.griddatapara}>
                        {message}
                    </Typography>
                </grid>
            </grid>
        </Card>
    )
}
