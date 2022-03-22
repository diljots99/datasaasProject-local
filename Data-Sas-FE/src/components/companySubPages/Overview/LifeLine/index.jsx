import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import DownloadIcon from '@mui/icons-material/Download';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from '@mui/material/Typography';
import Container from "@material-ui/core/Container";

export default function index() {
    return (
        <Container>
            <Grid container spacing={2}  >
                <Grid item lg={12} style={{ borderRadius: "10px" }} >

                    <Box>
                        <Grid>
                            <Typography display="inline" variant="h5" style={{ color: "#8a8fa7" }} >
                                LifeLine
                            </Typography>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        

        <Timeline position="alternate" style={{marginTop:"50px",marginLeft:"-230px"}}>
        {/* one */}
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="h6"
                    color="black"
                >
                    24-02-2020
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="secondary" />
                        
                    <TimelineConnector />
                </TimelineSeparator>
                
                <TimelineContent sx={{ py: '12px', px: 2}}>     
                <Paper>          
                <HomeRoundedIcon fontSize="large" color="primary" style={{backgroundColor:"green",borderRadius:"50%"}}/>
                    <Typography display="inline" variant="h6" component="span" style={{color:"blue"}}>
                        Account with account type small
                    </Typography><br/>
                    <Typography display="inline">Account</Typography>      
                    <DownloadIcon style={{marginTop:"-33px", marginLeft:"355"}} />
                </Paper>         
                </TimelineContent>
                
            </TimelineItem>
            
             {/* two */}
             <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="h6"
                    color="black"
                >
                <Paper>
                     <Typography display="inline" variant="h6" component="span" style={{color:"green"}}>
                        Conformation statement with no update
                    </Typography><br/>
                    <Typography display="inline">Conformation statement</Typography>
                    <DownloadIcon style={{marginTop:"-33px", marginLeft:"240px"}} />
                </Paper>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                   <Typography  
                    variant="h6"
                    color="black">15-02-2020</Typography>
                </TimelineContent>
            </TimelineItem>

             {/* three */}
             <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="h6"
                    color="black"
                >
                    10-02-2020
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="secondary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Paper>
                    <Typography display="inline" variant="h6" component="span" style={{color:"blue"}}>
                        Account with account type small
                    </Typography><br/>
                    <Typography display="inline">Account</Typography>
                    <DownloadIcon style={{marginTop:"-33px", marginLeft:"355"}}/>
                    </Paper>
                </TimelineContent>
            </TimelineItem>

             {/* four */}
             <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="h6"
                    color="black"
                >
                <Paper>
                     <Typography display="inline" variant="h6" component="span" style={{color:"green"}}>
                        Conformation statement with no update
                    </Typography><br/>
                    <Typography display="inline">Conformation statement</Typography>
                    <DownloadIcon style={{marginTop:"-33px", marginLeft:"240px"}}/>
                    </Paper>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography  
                    variant="h6"
                    color="black">02-02-2020</Typography>
                </TimelineContent>
            </TimelineItem>

             {/* five */}
             <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="h6"
                    color="black"
                >
                    01-02-2020
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="secondary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Paper>
                    <Typography display="inline" variant="h6" component="span" style={{color:"red"}}>
                        Resolution
                    </Typography><br/>
                    <Typography display="inline">Resolution</Typography>
                    <DownloadIcon style={{marginTop:"-33px", marginLeft:"337px"}}/>
                    </Paper>
                </TimelineContent>
            </TimelineItem>

             {/* six */}
             <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="h6"
                    color="black"
                >
                <Paper>
                    <Typography display="inline" variant="h6" component="span" style={{color:'orange'}}>
                        Changr person director company with change date
                    </Typography><br/>
                    <Typography display="inline">Officers</Typography>
                    <DownloadIcon style={{marginTop:"-33px", marginLeft:"358px"}}/>
                    </Paper>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography  
                    variant="h6"
                    color="black">20-01-2020</Typography>
                </TimelineContent>
            </TimelineItem>

             {/* seven */}
             <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="h6"
                    color="black"
                >
                    17-01-2020
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="secondary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Paper>
                    <Typography display="inline" variant="h6" component="span" style={{color:"yellow"}}>
                        Account with account type small
                    </Typography><br/>
                    <Typography display="inline">Account</Typography>
                    <DownloadIcon style={{marginTop:"-33px", marginLeft:"355px"}}/>
                    </Paper>
                </TimelineContent>
            </TimelineItem>

             {/* eight */}
             <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="h6"
                    color="black"
                >
                <Paper>
                    <Typography display="inline" variant="h6" component="span" style={{color:"pink"}}>
                        Annual return company with made up date full listshareholder
                    </Typography><br/>
                    <Typography display="inline">Annual return</Typography>
                    <DownloadIcon style={{marginTop:"-33px", marginLeft:"316px"}}/>
                    </Paper>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography  
                    variant="h6"
                    color="black">10-01-2020</Typography>
                </TimelineContent>
            </TimelineItem>          
        </Timeline>
 </Container>
    )
}