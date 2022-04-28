import React from 'react'
import Graph from './Graph';
import FinalcialLeft from './FinalcialLeft';
import { Typography } from "@material-ui/core";

const Finalcial = () => {
    return (
        <div style={{margin:"5%"}}>
            <Typography variant="h6">
                Financial Performance
            </Typography>

            <div style={{ display: "flex", width: "100%" }}>
                <div style={{ width: "65%" }}>
                    <Graph />
                </div>
                <div style={{ marginLeft: "5%", width: "30%" }}>
                    <FinalcialLeft count="012" message="Turn Over" imgsrc="/images/DWIcon.png" />
                    <FinalcialLeft count="3020" message="Total Assestr" imgsrc="/images/DouIcon.png" />
                    <FinalcialLeft count="012" message="Turn Over" imgsrc="/images/DWIcon.png" />
                    <FinalcialLeft count="3020" message="Total Assestr" imgsrc="/images/DouIcon.png" />
                </div>

            </div>

        </div>
    )
}
export default Finalcial;