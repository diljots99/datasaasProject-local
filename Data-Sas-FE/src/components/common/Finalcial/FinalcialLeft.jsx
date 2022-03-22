import React from 'react'
import { Grid, Typography, Card } from "@material-ui/core";
import { useStyles } from "./styles";
import { grid } from '@mui/system';

export default function FinalcialLeft({count,message,imgsrc}) {
    const classess = useStyles();
    return (
        <div>
            <Card style={{ height: "100px", margin: "5%" }} variant="outlined">

                <grid style={{ display: "flex", padding:"20px" }}>
                    <img className={classess.Avatar} src={imgsrc} alt="company-note-list" />


                    <grid style={{ display: "inline-grid", paddingLeft: "5px" }}>
                        <Typography display="inline" className={classess.griddata} variant="h7">
                            {count}
                        </Typography>
                        <Typography display="inline" variant="h7" className={classess.griddata}>
                            {message}
                        </Typography>
                    </grid>
                </grid>
            </Card>
        </div>
    )
}
