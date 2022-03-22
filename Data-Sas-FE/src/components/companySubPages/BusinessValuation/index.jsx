import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import {
    Grid,
    Typography,
    TextField,
    IconButton,
    InputAdornment,
    Button,
    Select,
} from "@material-ui/core";
import InfoCard from '../../common/InfoCard'
import ColumnChart from '../../common/ColumnChart'
import LineChart from '../../common/LineChart'


export default function BusinessValuation() {
    const classess = useStyles();

    const AUKC = [{heading: "Valuation Ranking Comments", value:"Within Bottom 25% of all UK compines by valuation"},
{heading: "Highest Company Valuation", value:"$399,558,585,833"},
{heading: "Lowest Company Valuation", value:"Within Bottom 25% of all UK compines by valuation"},
{heading: "Average Company Valuation", value:"Within Bottom 25% of all UK compines by valuation"},
]

const IDat = [{heading: "Number of Business within industry", value:"178,683"},
{heading: "Highest Company Valuation", value:"$399,558,585,833"},
{heading: "Lowest Company Valuation", value:"$334,545"},
{heading: "Average Company Valuation", value:"$334,545"},
]

const ROID1 =  [{heading: "Return on Equity Ranking Comments", value:"Within Bottom 25% of all UK compines by ROR"},
{heading: "Highest Company ROE", value:"$399,558,585,833"},
{heading: "Lowest Company ROE", value:"08%"},
{heading: "Average Company Average Company ROE", value:"20%"},
]

const ROID2 =  [{heading: "Number of Business within industry", value:"157575"},
{heading: "Highest Company ROE", value:"$399,558,585,833"},
{heading: "Lowest Company ROE", value:"$848,44"},
{heading: "Average Company Average Company ROE", value:"$458585"},
]

    return (
        <div>
            <Typography variant="h6" style={{ margin: "10px 5px 15px" , fontSize: "24px" , fontFamily: "Poppins" , lineHeight: "36px" , color: "#000" , fontWeight: "600"}}>Business Valuation</Typography>

           <InfoCard title="All UK Companies" data={AUKC} />
           <InfoCard title="Industry Data" data={IDat} />

           <Typography variant="h6" style={{ margin: "10px 5px 15px" , fontSize: "24px" , fontFamily: "Poppins" , lineHeight: "36px" , color: "#000" , fontWeight: "600"}}>Return on Equity</Typography>
           <InfoCard title="Industry Data" data={ROID1} />
           <InfoCard title="Industry Data" data={ROID2} />

           <Grid container style={{justifyContent:"space-between"}}  >
               <Grid item style={{width:"48%"}} className={classess.lineChart}>
               <Typography variant="h6" style={{ margin: "10px 5px 15px" , fontSize: "24px" , fontFamily: "Poppins" , lineHeight: "36px" , color: "#000" , fontWeight: "600"}}>Business Valuation</Typography>
               <LineChart />          
                   </Grid>
               <Grid item style={{width:"48%"}} className={classess.lineChart}>
               <Typography variant="h6" style={{ margin: "10px 5px 15px" ,  fontSize: "24px" , fontFamily: "Poppins" , lineHeight: "36px" , color: "#000" , fontWeight: "600"}}>ROE</Typography>
               <LineChart />
               </Grid>
           </Grid>

           <Grid container style={{justifyContent:"space-between"}} >
               <Grid item  className={classess.turnOver}>
               <Typography variant="h6" style={{ margin: "10px 5px 15px" , fontSize: "24px" , fontFamily: "Poppins" , lineHeight: "36px" , color: "#000" , fontWeight: "600"}}>Turnover</Typography>
               <ColumnChart />
                   </Grid>
               <Grid item className={classess.netAssets}>
               <Typography variant="h6" style={{ margin: "10px 5px 15px" , fontSize: "24px" , fontFamily: "Poppins" , lineHeight: "36px" , color: "#000" , fontWeight: "600"}}>Net Assets</Typography>
               <ColumnChart />
               </Grid>
           </Grid>

        </div>
    );
}
