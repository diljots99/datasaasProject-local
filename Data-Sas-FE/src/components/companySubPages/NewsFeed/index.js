import React from 'react'
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
                                News Feed
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
                    
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot style={{color:"gray"}} />
                        
                    <TimelineConnector />
                </TimelineSeparator>
                
                <TimelineContent sx={{ py: '12px', px: 2}}>  
                <Typography style={{color:"gray"}}>one hour ago</Typography>
                <Paper style={{width:"755px",borderRadius:"10px"}}>          
               
                    <Typography display="inline" variant="h5" component="span" style={{color:"black",marginLeft:"15px"}}>
                        Tesco Delevery Drivers Saves Norwich Customer Life
                    </Typography><br/>
                    <Typography display="inline" style={{marginLeft:"15px",color:"gray"}}>Eastern Daily Press</Typography><br/>
                    <Typography display="inline" variant="h6" component="span" style={{color:"",marginLeft:"15px"}}>
                        Contrary Popular belief Larem ipsum is the simpaly Contrary popular  
                    </Typography><br/>
                    <Typography display="inline" variant="h6" component="span" style={{color:"",marginLeft:"15px"}}>
                        Popular belief Larem ipsum is the simpaly Contrary popular belief 
                    </Typography><br/>
                    <Typography display="inline" style={{color:"green",marginLeft:"15px"}}>Read more</Typography>      
                    
                </Paper>     <br/>  
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
                <Typography style={{color:"gray"}}>one hour ago</Typography>
                <Paper style={{width:"755px",borderRadius:"10px"}}>          
               
                    <Typography display="inline" variant="h5" component="span" style={{color:"black",marginLeft:"15px"}}>
                        Tesco Delevery Drivers Saves Norwich Customer Life
                    </Typography><br/>
                    <Typography display="inline" style={{marginLeft:"15px",color:"gray"}}>Eastern Daily Press</Typography><br/>
                    <Typography display="inline" variant="h6" component="span" style={{color:"",marginLeft:"15px"}}>
                        Contrary Popular belief Larem ipsum is the simpaly Contrary popular  
                    </Typography><br/>
                    <Typography display="inline" variant="h6" component="span" style={{color:"",marginLeft:"15px"}}>
                        Popular belief Larem ipsum is the simpaly Contrary popular belief 
                    </Typography><br/>
                    <Typography display="inline" style={{color:"green",marginLeft:"15px"}}>Read more</Typography>      
                    
                </Paper>     <br/>    
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot style={{color:"gray"}} />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                   <Typography  
                    variant="h6"
                    color="black"></Typography>
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
                
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot style={{color:"gray"}} />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography style={{color:"gray"}}>one hour ago</Typography>
                <Paper style={{width:"755px",borderRadius:"10px"}}>          
               
                    <Typography display="inline" variant="h5" component="span" style={{color:"black",marginLeft:"15px"}}>
                        Tesco Delevery Drivers Saves Norwich Customer Life
                    </Typography><br/>
                    <Typography display="inline" style={{marginLeft:"15px",color:"gray"}}>Eastern Daily Press</Typography><br/>
                    <Typography display="inline" variant="h6" component="span" style={{color:"",marginLeft:"15px"}}>
                        Contrary Popular belief Larem ipsum is the simpaly Contrary popular  
                    </Typography><br/>
                    <Typography display="inline" variant="h6" component="span" style={{color:"",marginLeft:"15px"}}>
                        Popular belief Larem ipsum is the simpaly Contrary popular belief 
                    </Typography><br/>
                    <Typography display="inline" style={{color:"green",marginLeft:"15px"}}>Read more</Typography>      
                    
                </Paper>     <br/>   
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
                <Typography style={{color:"gray"}}>one hour ago</Typography>
                <Paper style={{width:"755px",borderRadius:"10px"}}>          
               
                    <Typography display="inline" variant="h5" component="span" style={{color:"black",marginLeft:"15px"}}>
                        Tesco Delevery Drivers Saves Norwich Customer Life
                    </Typography><br/>
                    <Typography display="inline" style={{marginLeft:"15px",color:"gray"}}>Eastern Daily Press</Typography><br/>
                    <Typography display="inline" variant="h6" component="span" style={{color:"",marginLeft:"15px"}}>
                        Contrary Popular belief Larem ipsum is the simpaly Contrary popular  
                    </Typography><br/>
                    <Typography display="inline" variant="h6" component="span" style={{color:"",marginLeft:"15px"}}>
                        Popular belief Larem ipsum is the simpaly Contrary popular belief 
                    </Typography><br/>
                    <Typography display="inline" style={{color:"green",marginLeft:"15px"}}>Read more</Typography>      
                    
                </Paper>     <br/>   
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot style={{color:"gray"}} />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography  
                    variant="h6"
                    color="black"></Typography>
                </TimelineContent>
            </TimelineItem>

                     
        </Timeline>
 </Container>
  )
}
