import React from 'react'
import { Grid, Typography, Card } from "@material-ui/core";
import { grid } from '@mui/system';
import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
        griddata  :{
          fontWeight: "600",
          fontSize: "40px",
          fontFamily: "Poppins",
          color: "#23273A",
          lineHeight: "60px",
        },
        griddatapara:{
          color: "#727272",
          fontSize: "19px",
          fontFamily: "Poppins",
          lineHeight: "28px",
          fontWeight: "500",
        },
        comImage:{
            width: "71px",
            height: "71px",
            // background: "#D9EEFE",
            textAlign: "center",
            lineHeight: "69px",
            marginRight: "10px",
            borderRadius: "50px",
        },
})

export default function DirectorCard({count,message,imgsrc, style}) {
    const classess = useStyles();
    return (
        <Card variant="outlined">

        <grid style={{ display: "flex", padding:"20px", justifyContent:"space-around" }}> 
        <grid className={classess.comImage} style={style} >  
            <img className={classess.Avatar} src={imgsrc} alt="company-note-list" />
            </grid>
        
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
