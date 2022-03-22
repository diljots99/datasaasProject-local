import React from 'react'
import '../About/style.css'
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import ShareIcon from '@mui/icons-material/Share';


const pdata = [
    {
        date: '2014',
        price: '$3',
        Turnover: 0,
        TotalAssets: 0,
        TotalLibilities: 0,
        NetWorth: 0,
        ProfitBeforeTex: 0,
        EBITDA: 0
    },
    {
        date: '2015',
        price: '$4',
        Turnover: 2,
        TotalAssets: 3,
        TotalLibilities: 4,
        NetWorth: 5,
        ProfitBeforeTex: 6,
        EBITDA: 7

    },
    {
        date: '2016',
        price: '$5',
        Turnover: 1,
        TotalAssets: 2,
        TotalLibilities: 3,
        NetWorth: 4,
        ProfitBeforeTex: 5,
        EBITDA: 6
    },
    {
        date: '2017',
        price: '$6',
        Turnover: 3,
        TotalAssets: 4,
        TotalLibilities: 5,
        NetWorth: 6,
        ProfitBeforeTex: 7,
        EBITDA: 8
    },
    {
        date: '2018',
        price: '$7',
        Turnover: 2,
        TotalAssets: 3,
        TotalLibilities: 4,
        NetWorth: 5,
        ProfitBeforeTex: 6,
        EBITDA: 7
    },
    {
        date: '2019',
        price: '$8',
        Turnover: 4,
        TotalAssets: 5,
        TotalLibilities: 6,
        NetWorth: 7,
        ProfitBeforeTex: 8,
        EBITDA: 9
    },
    {
        date: '2020',
        price: '$9',
        Turnover: 2,
        TotalAssets: 3,
        TotalLibilities: 4,
        NetWorth: 5,
        ProfitBeforeTex: 6,
        EBITDA: 7
    },
    {
        date: '2021',
        price: '$10',
        Turnover: 5,
        TotalAssets: 6,
        TotalLibilities: 7,
        NetWorth: 8,
        ProfitBeforeTex: 9,
        EBITDA: 10
    },

];



export default function index() {
    return (
        <Container>
            <Typography variant='h4'>About Keynote</Typography>
            <Grid container spacing={2} className="main" >
                <Grid item lg={6} style={{ borderRadius: "10px" }} >
                    <Paper style={{ borderRadius: "10px" }} >
                        <Box p={3}>

                            {/* 1 */}
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ color: "#8a8fa7", float: "left" }} >
                                    Company Name
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ color: "#8a8fa7", float: "left", marginLeft: "50px" }}>
                                    :
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ marginLeft: "50px" }}><b>1415 Lake road,Atlantic</b><br /> <b className='city'>City, New Jersy,08401</b></Typography>
                            </Grid>
                            <br />

                            {/* 2 */}
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ color: "#8a8fa7", float: "left" }} >
                                    Website
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ color: "#8a8fa7", float: "left", marginLeft: "126px" }}>
                                    :
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ marginLeft: "55px" }}><a href='' style={{ textDecoration:"none" }}>www.google.com</a></Typography>
                            </Grid>
                            <br />

                            {/* 3 */}
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ color: "#8a8fa7", float: "left" }} >
                                    Phone Number
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ color: "#8a8fa7", float: "left", marginLeft: "58px" }}>
                                    :
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ marginLeft: "54px" }}><b>4756-234-544 | CTPR</b></Typography>
                            </Grid>
                            <br />

                            {/* 4 */}
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ color: "#8a8fa7", float: "left" }} >
                                    No of Employees
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ color: "#8a8fa7", float: "left", marginLeft: "35px" }}>
                                    :
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ marginLeft: "55px" }}><b>50</b></Typography>
                            </Grid>
                            <br /><br />
                            <Grid>
                                <FacebookIcon color="primary" display="inline" style={{ float: "left" }} />
                            </Grid>
                            <Grid>
                                <TwitterIcon color="primary" display="inline" style={{ float: "left",marginLeft:"10px" }}/>
                            </Grid>
                            <Grid>
                                <LinkedInIcon color="primary" display="inline" style={{ float: "left",marginLeft:"10px" }} />
                            </Grid><br /><br /><br />
                        </Box>
                    </Paper>
                </Grid>
                {/* pivort chart */}

                <Grid item lg={6} >

                    <Paper style={{ borderRadius: "10px" }}>
                        <Box p={3}>
                            <ResponsiveContainer width="100%" aspect="3">
                                <LineChart data={pdata}>
                                    <CartesianGrid />
                                    <XAxis dataKey="date" interval={'preserveStartEnd'} />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="Turnover" stroke='green' activeDot={{ r: 8 }} />
                                    <Line type="monotone" dataKey="TotalAssets" stroke='yellow' activeDot={{ r: 8 }} />

                                    <Line type="monotone" dataKey="TotalLibilities" stroke='pink' activeDot={{ r: 8 }} />
                                    <Line type="monotone" dataKey="NetWorth" stroke='gray' activeDot={{ r: 8 }} />

                                    <Line type="monotone" dataKey="ProfitBeforeTex" stroke='red' activeDot={{ r: 8 }} />
                                    <Line type="monotone" dataKey="EBITDA" stroke='blue' activeDot={{ r: 8 }} />

                                </LineChart>
                            </ResponsiveContainer>
                        </Box>
                    </Paper>

                </Grid>
            </Grid>

            {/* first 3 boxess */}
            <Grid container spacing={2} className="mains" >
                <Grid item lg={4} >

                    <Paper style={{ backgroundColor: "cornflowerblue", borderRadius: "10px" }}>
                        <Box p={3}>
                            <Typography display="inline" variant="h5">Turnover</Typography>
                            <Typography display="inline" variant="h5" style={{ marginLeft: "227px" }}>25</Typography><br />
                            <Typography display="inline" variant="h5">$3884949</Typography>
                            <Typography display="inline" variant="h5" style={{ marginLeft: "150px" }}>$3384949</Typography>
                        </Box>
                    </Paper>

                </Grid>
                <Grid item lg={4} >

                    <Paper style={{ backgroundColor: "gold", borderRadius: "10px" }} >
                        <Box p={3} >
                            <Typography display="inline" variant="h5">Total Assets</Typography>
                            <Typography display="inline" variant="h5" style={{ marginLeft: "195px" }}>25</Typography><br />
                            <Typography display="inline" variant="h5">$3884949</Typography>
                            <Typography display="inline" variant="h5" style={{ marginLeft: "150px" }}>$3384949</Typography>
                        </Box>
                    </Paper>

                </Grid>
                <Grid item lg={4} >

                    <Paper style={{ backgroundColor: "darkturquoise", borderRadius: "10px" }}>
                        <Box p={3} >
                            <Typography display="inline" variant="h5">Total Liabilities</Typography>
                            <Typography display="inline" variant="h5" style={{ marginLeft: "159px" }}>25</Typography><br />
                            <Typography display="inline" variant="h5">$3884949</Typography>
                            <Typography display="inline" variant="h5" style={{ marginLeft: "122px" }}>$333884949</Typography>
                        </Box>
                    </Paper>

                </Grid>
            </Grid>

            {/*second 3 boxes */}
            <Grid container spacing={2} className="mains">
                <Grid item lg={4}>

                    <Paper style={{ backgroundColor: "lightsalmon", borderRadius: "10px" }}>
                        <Box p={3}>
                            <Typography display="inline" variant="h5">Net Worth</Typography>
                            <Typography display="inline" variant="h5" style={{ marginLeft: "212px" }}>25</Typography><br />
                            <Typography display="inline" variant="h5">$3884949</Typography>
                            <Typography display="inline" variant="h5" style={{ marginLeft: "144px" }}>$3384949</Typography>
                        </Box>
                    </Paper>

                </Grid>
                <Grid item lg={4}>

                    <Paper style={{ backgroundColor: "crimson", borderRadius: "10px" }}>
                        <Box p={3}>
                            <Typography display="inline" variant="h5">Profit Before Tax</Typography>
                            <Typography display="inline" variant="h5" style={{ marginLeft: "144px" }}>25</Typography><br />
                            <Typography display="inline" variant="h5">$3884949</Typography>
                            <Typography display="inline" variant="h5" style={{ marginLeft: "144px" }}>$3384949</Typography>
                        </Box>
                    </Paper>

                </Grid>
                <Grid item lg={4}>

                    <Paper style={{ backgroundColor: "darkgreen", borderRadius: "10px" }}>
                        <Box p={3}>
                            <Typography display="inline" variant="h5">EBITDA</Typography>
                            <Typography display="inline" variant="h5" style={{ marginLeft: "223px" }}>25</Typography><br />
                            <Typography display="inline" variant="h5">$3884949</Typography>
                            <Typography display="inline" variant="h5" style={{ marginLeft: "122px" }}>$333884949</Typography>
                        </Box>
                    </Paper>

                </Grid>
            </Grid>

            {/* third 2 div */}
            <Grid container spacing={2} className="mains">
                <Grid item lg={6}>

                    <Paper style={{ borderRadius: "10px" }}>
                        <Grid>
                            <Typography variant='h5' style={{ backgroundColor: "gray", paddingLeft: "25px", height: "60px", paddingTop: "13px", borderRadius: "10px" }}>Commentry</Typography>
                        </Grid>
                        <Box p={3} >
                            <Grid >
                                <Typography style={{ color: "yellow" }}>contrary popular belief lorea ipsom is simply contrary<br />popular belief, Loream ipsum is simple</Typography>
                                <Typography style={{ color: "gray" }}>Loged on 21/05/2021</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={{ color: "green", marginTop: "20px" }}>contrary popular belief lorea ipsom is simply contrary<br />popular belief, Loream ipsum is simple</Typography>
                                <Typography style={{ color: "gray" }}>Loged on 21/05/2021</Typography>
                            </Grid>
                            <Grid>
                                <Typography style={{ color: "green", marginTop: "20px" }}>contrary popular belief lorea ipsom is simply contrary<br />popular belief, Loream ipsum is simple</Typography>
                                <Typography style={{ color: "gray" }}>Loged on 21/05/2021</Typography>
                            </Grid>
                        </Box>
                    </Paper>

                </Grid>
                <Grid item lg={6}>

                    <Paper style={{ borderRadius: "10px" }}>
                        <Box p={3}>

                        </Box>
                    </Paper>

                </Grid>
            </Grid>

            {/* Five div */}
            <Grid container spacing={2} className="mains">
                <Grid item lg={2}>

                    <Paper style={{ borderRadius: "10px" }}>
                        <Box p={3}>
                            <Grid style={{ float: "left", display: "inline-block" }}>
                                <AccountBoxIcon />
                            </Grid>
                            <Grid >
                                <Typography variant='h4' style={{ marginLeft: "55px", fontWeight: "bold" }}>015</Typography>
                            </Grid>
                            <Grid>
                                <Typography variant='h6' style={{ marginLeft: "55px", color: "#8a8fa7", fontWeight: "bold" }}>Total</Typography>
                            </Grid>
                        </Box>
                    </Paper>

                </Grid>
                <Grid item lg={2}>

                    <Paper style={{ borderRadius: "10px" }}>
                        <Box p={3}>
                            <Grid style={{ float: "left", display: "inline-block" }}>
                                <AccountBoxIcon />
                            </Grid>
                            <Grid>
                                <Typography variant='h4' style={{ marginLeft: "55px", fontWeight: "bold" }}>04</Typography>
                            </Grid>
                            <Grid>
                                <Typography variant='h6' style={{ marginLeft: "55px", fontWeight: "bold", color: "#8a8fa7" }}>Active</Typography>
                            </Grid>
                        </Box>
                    </Paper>

                </Grid>
                <Grid item lg={2}>

                    <Paper style={{ borderRadius: "10px" }}>
                        <Box p={3}>
                            <Grid style={{ float: "left", display: "inline-block" }}>
                                <AccountBoxIcon />
                            </Grid>
                            <Grid>
                                <Typography variant='h4' style={{ marginLeft: "55px", fontWeight: "bold" }}>01</Typography>
                            </Grid>
                            <Grid>
                                <Typography variant='h6' style={{ marginLeft: "55px", fontWeight: "bold", color: "#8a8fa7" }}>Secretery</Typography>
                            </Grid>
                        </Box>
                    </Paper>

                </Grid>
                <Grid item lg={2}>

                    <Paper style={{ borderRadius: "10px" }}>
                        <Box p={3}>
                            <Grid style={{ float: "left", display: "inline-block" }}>
                                <AccountBoxIcon />
                            </Grid>
                            <Grid>
                                <Typography variant='h4' style={{ marginLeft: "55px", fontWeight: "bold" }}>00</Typography>
                            </Grid>
                            <Grid>
                                <Typography variant='h6' style={{ marginLeft: "55px", fontWeight: "bold", color: "#8a8fa7" }}>Inactive</Typography>
                            </Grid>
                        </Box>
                    </Paper>

                </Grid>
                <Grid item lg={2}>

                    <Paper style={{ borderRadius: "10px" }}>
                        <Box p={3}>
                            <Grid style={{ float: "left", display: "inline-block" }}>
                                <AccountBoxIcon />
                            </Grid>
                            <Grid>
                                <Typography variant='h4' style={{ marginLeft: "55px", fontWeight: "bold" }}>010</Typography>
                            </Grid>
                            <Grid>
                                <Typography variant='h6' style={{ marginLeft: "55px", fontWeight: "bold", color: "#8a8fa7" }}>Resined</Typography>
                            </Grid>
                        </Box>
                    </Paper>

                </Grid>

            </Grid>

            {/* one div */}
            <Grid container spacing={2} className="mains">
                <Grid item lg={12}>

                    <Paper style={{ borderRadius: "10px" }}>
                        <Box p={3}>
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ color: "#8a8fa7", float: "left" }} >
                                    Account Category
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ color: "#8a8fa7", float: "left", marginLeft: "102px" }}>
                                    :
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ marginLeft: "50px" }}><b>small company </b></Typography>
                            </Grid>
                            <br />
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ color: "#8a8fa7", float: "left" }} >
                                    Account
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ color: "#8a8fa7", float: "left", marginLeft: "196px" }}>
                                    :
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ marginLeft: "50px" }}><b>Last Account Field on 17/02/21</b><br /> <b className='accfield' >Last account made up to 17/02/21</b></Typography>
                            </Grid>
                            <br />
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ color: "#8a8fa7", float: "left" }} >
                                    conformation statement
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ color: "#8a8fa7", float: "left", marginLeft: "50px" }}>
                                    :
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ marginLeft: "50px" }}><b>Last made update on 17/02/21</b></Typography>
                            </Grid>
                            <br />
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ color: "#8a8fa7", float: "left" }} >
                                    Bank Name
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ color: "#8a8fa7", float: "left", marginLeft: "163px" }}>
                                    :
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ marginLeft: "50px" }}><b>Barkleys Bank</b></Typography>
                            </Grid>
                            <br />
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ color: "#8a8fa7", float: "left" }} >
                                    Bank source Code
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ color: "#8a8fa7", float: "left", marginLeft: "101px" }}>
                                    :
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ marginLeft: "50px" }}><b>Barkleys Bank</b></Typography>
                            </Grid>
                            <br />
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ color: "#8a8fa7", float: "left" }} >
                                    Audit & Accountant Detail
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ color: "#8a8fa7", float: "left", marginLeft: "17px" }}>
                                    :
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ marginLeft: "50px" }}><b>Barkleys Bank</b></Typography>
                            </Grid>

                        </Box>
                    </Paper>

                </Grid>


            </Grid>

            {/* one lastdiv */}
            <Grid container spacing={2} className="mains">
                <Grid item lg={6}  >

                    <Paper style={{ borderRadius: "10px" }}>
                        <Box p={3}>
                            <Grid>
                                <LinkedInIcon color="primary" display="inline" style={{ float: "left" }} />
                                <Typography display="inline" style={{ float: "left", marginLeft: "5px",fontWeight:"bold" }}>David Charles</Typography>
                                <Button variant='contained' style={{ marginLeft: "321px", color: "green" }}>Active</Button><br /><br />
                                <AccountCircleIcon display="inline" style={{ float: "left" }} />
                                <Typography display="inline" style={{ float: "left", marginLeft: "5px",color: "#8a8fa7" }}>Director</Typography>
                                <AccountCircleIcon display="inline" style={{ float: "left", marginLeft: "40px" }} />
                                <Typography display="inline" style={{ float: "left", marginLeft: "5px",color: "#8a8fa7" }}>British</Typography>
                                <AccountCircleIcon display="inline" style={{ float: "left", marginLeft: "40px" }} />
                                <Typography display="inline" style={{ float: "left", marginLeft: "5px",color: "#8a8fa7" }}>60 Year Old</Typography>
                                <ShareIcon color="primary" display="inline" style={{ float: "left", marginLeft: "40px" }} />
                                <Typography display="inline" style={{ marginLeft: "5px", color: "#2196f3" }}>See Relationship</Typography>
                            </Grid>

                            {/* 2 */}
                            <Grid display="inline" style={{ marginTop: "40px" }}>
                                <LinkedInIcon color="primary" display="inline" style={{ float: "left" }} />
                                <Typography display="inline" style={{ float: "left", marginLeft: "5px",fontWeight:"bold" }}>David Charles</Typography>
                                <Button variant='contained' style={{ marginLeft: "321px", color: "green" }}>Active</Button><br /><br />
                                <AccountCircleIcon display="inline" style={{ float: "left" }} />
                                <Typography display="inline" style={{ float: "left", marginLeft: "5px",color: "#8a8fa7" }}>Director</Typography>
                                <AccountCircleIcon display="inline" style={{ float: "left", marginLeft: "40px" }} />
                                <Typography display="inline" style={{ float: "left", marginLeft: "5px",color: "#8a8fa7" }}>British</Typography>
                                <AccountCircleIcon display="inline" style={{ float: "left", marginLeft: "40px" }} />
                                <Typography display="inline" style={{ float: "left", marginLeft: "5px",color: "#8a8fa7" }}>60 Year Old</Typography>
                                <ShareIcon color="primary" display="inline" style={{ float: "left", marginLeft: "40px" }} />
                                <Typography display="inline" style={{ marginLeft: "5px", color: "#2196f3" }}>See Relationship</Typography>
                            </Grid>
                            {/* 3 */}
                            <Grid display="inline" style={{ marginTop: "40px" }}>
                                <LinkedInIcon color="primary" display="inline" style={{ float: "left" }} />
                                <Typography display="inline" style={{ float: "left", marginLeft: "5px",fontWeight:"bold" }}>David Charles</Typography>
                                <Button variant='contained' style={{ marginLeft: "321px", color: "green" }}>Active</Button><br /><br />
                                <AccountCircleIcon display="inline" style={{ float: "left" }} />
                                <Typography display="inline" style={{ float: "left", marginLeft: "5px",color: "#8a8fa7" }}>Director</Typography>
                                <AccountCircleIcon display="inline" style={{ float: "left", marginLeft: "40px" }} />
                                <Typography display="inline" style={{ float: "left", marginLeft: "5px",color: "#8a8fa7" }}>British</Typography>
                                <AccountCircleIcon display="inline" style={{ float: "left", marginLeft: "40px" }} />
                                <Typography display="inline" style={{ float: "left", marginLeft: "5px",color: "#8a8fa7" }}>60 Year Old</Typography>
                                <ShareIcon color="primary" display="inline" style={{ float: "left", marginLeft: "40px" }} />
                                <Typography display="inline" style={{ marginLeft: "5px", color: "#2196f3" }}>See Relationship</Typography>
                            </Grid>
                            {/* 4 */}
                            <Grid display="inline" style={{ marginTop: "40px" }}>
                                <LinkedInIcon color="primary" display="inline" style={{ float: "left" }} />
                                <Typography display="inline" style={{ float: "left", marginLeft: "5px",fontWeight:"bold" }}>David Charles</Typography>
                                <Button variant='contained' style={{ marginLeft: "321px", color: "green" }}>Active</Button><br /><br />
                                <AccountCircleIcon display="inline" style={{ float: "left" }} />
                                <Typography display="inline" style={{ float: "left", marginLeft: "5px",color: "#8a8fa7" }}>Director</Typography>
                                <AccountCircleIcon display="inline" style={{ float: "left", marginLeft: "40px" }} />
                                <Typography display="inline" style={{ float: "left", marginLeft: "5px",color: "#8a8fa7" }}>British</Typography>
                                <AccountCircleIcon display="inline" style={{ float: "left", marginLeft: "40px" }} />
                                <Typography display="inline" style={{ float: "left", marginLeft: "5px",color: "#8a8fa7" }}>60 Year Old</Typography>
                                <ShareIcon color="primary" display="inline" style={{ float: "left", marginLeft: "40px" }} />
                                <Typography display="inline" 
                                style={{ marginLeft: "5px", color: "#2196f3" }}>See Relationship</Typography>
                            </Grid>

                        </Box>
                    </Paper>

                </Grid>


            </Grid>

        </Container>
    )
}
