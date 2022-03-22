import React from 'react'
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";

import Pagination from '@mui/material/Pagination';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LinkedInIcon from '@mui/icons-material/LinkedIn';





export default function index() {
    return (
        <Container>
            <Grid container spacing={2}  >
                <Grid item lg={12} style={{ borderRadius: "10px" }} >

                    <Box>
                        <Grid>
                            <Typography display="inline" variant="h5" style={{ color: "#8a8fa7", float: "left" }} >
                                Personal Contact info
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography display="inline" variant="h5" style={{ color: "#8a8fa7", float: "left", marginLeft: "12px" }}>
                                <Button
                                    style={{ background: "#FFFFFF", color: "#000000",marginLeft:"130px", fontFamily: "Poppins", padding: "0px 10px", fontWeight: "600", fontSize: "26px", lineHeight: "39px", color: "#000000" }}
                                    variant="contained"
                                    size="small"
                                    startIcon={<img src={"/images/Filter.png"} alt="company-note-list" />}
                                >
                                    Filter
                                </Button>
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography display="inline" variant="h5" style={{ marginLeft: "20px" }}>
                                <TextField
                                    style={{
                                        background: "#FFFFFF",
                                        border: "1px solid #DCD9D9",
                                        textTransform: "capitalize",
                                        borderRadius: "6px",
                                    }}
                                    variant="outlined"
                                    size="small"
                                    placeholder="Search"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment>
                                                <IconButton>
                                                    <SearchIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Typography><br/><br/>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
            {/* second div */}
            <Grid container spacing={2}  >
                <Grid item lg={12}  >
                    <Paper style={{ borderRadius: "10px", backgroundColor: "gray" }}>
                        <Box p={3}>
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ float: "left" }} >
                                    Person Name
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ float: "left", marginLeft: "60px" }}>
                                    Company Name
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ marginLeft: "60px", float: "left", }}>
                                    Phone Nomber
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h5" style={{marginLeft: "60px"}}>
                                    Created Date
                                </Typography>
                            </Grid>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>

            {/* export button */}
            <Grid container spacing={2}  >
                <Grid item lg={12} style={{ borderRadius: "10px" }}>
                    <Box p={3}>
                        <Grid>
                            <Typography display="inline" >
                                <Button color='primary' variant='contained' style={{marginLeft:"635px", width:"135px", height:"60px" }}>Export</Button>
                            </Typography>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
            {/* forth first div */}
            <Grid container spacing={2}  >
                <Grid item lg={12}  >
                    <Paper style={{ borderRadius: "10px", backgroundColor: "white" }}>
                        <Box p={3}>
                            <Grid>
                                <Typography display="inline" variant="h6" style={{ float: "left" }} >
                                    <LinkedInIcon color="primary"/>
                                </Typography>
                                <Typography display="inline" variant="h6" style={{ float: "left",marginLeft: "33px" }} >
                                    Jill Bames 
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h6" style={{ float: "left", marginLeft: "33px" }}>
                                    Hatfield
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h6" style={{ marginLeft: "33px", float: "left", }}>
                                    ABC Trade Service Limited
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h6" style={{marginLeft: "33px",float: "left"}}>
                                    088373636

                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h6" style={{marginLeft: "33px",}}>
                                    -

                                </Typography>
                            </Grid>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>

            {/* forth second */}
            <Grid container spacing={2}  >
                <Grid item lg={12}  >
                    <Paper style={{ borderRadius: "10px", backgroundColor: "white" }}>
                        <Box p={3}>
                            <Grid>
                                <Typography display="inline" variant="h6" style={{ float: "left" }} >
                                    <LinkedInIcon color="primary"/>
                                </Typography>
                                <Typography display="inline" variant="h6" style={{ float: "left",marginLeft: "33px" }} >
                                    Jill Bames 
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h6" style={{ float: "left", marginLeft: "33px" }}>
                                    Hatfield
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h6" style={{ marginLeft: "33px", float: "left", }}>
                                    ABC Trade Service Limited
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h6" style={{marginLeft: "33px",float: "left"}}>
                                    088373636

                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h6" style={{marginLeft: "33px",}}>
                                    20/02/2020

                                </Typography>
                            </Grid>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
            

        {/* forth third div */}
        <Grid container spacing={2}  >
                <Grid item lg={12}  >
                    <Paper style={{ borderRadius: "10px", backgroundColor: "white" }}>
                        <Box p={3}>
                            <Grid>
                                <Typography display="inline" variant="h6" style={{ float: "left" }} >
                                    <LinkedInIcon color="primary"/>
                                </Typography>
                                <Typography display="inline" variant="h6" style={{ float: "left",marginLeft: "33px" }} >
                                    Jill Bames 
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h6" style={{ float: "left", marginLeft: "33px" }}>
                                    Hatfield
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h6" style={{ marginLeft: "33px", float: "left", }}>
                                    ABC Trade Service Limited
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h6" style={{marginLeft: "33px",float: "left"}}>
                                    088373636

                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h6" style={{marginLeft: "33px",}}>
                                    -

                                </Typography>
                            </Grid>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>

            {/* forth four */}
            <Grid container spacing={2}  >
                <Grid item lg={12}  >
                    <Paper style={{ borderRadius: "10px", backgroundColor: "white" }}>
                        <Box p={3}>
                            <Grid>
                                <Typography display="inline" variant="h6" style={{ float: "left" }} >
                                    <LinkedInIcon color="primary"/>
                                </Typography>
                                <Typography display="inline" variant="h6" style={{ float: "left",marginLeft: "33px" }} >
                                    Jill Bames 
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h6" style={{ float: "left", marginLeft: "33px" }}>
                                    Hatfield
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h6" style={{ marginLeft: "33px", float: "left", }}>
                                    ABC Trade Service Limited
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h6" style={{marginLeft: "33px",float: "left"}}>
                                    088373636

                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h6" style={{marginLeft: "33px",}}>
                                    20/02/2020

                                </Typography>
                            </Grid>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>

        {/* forth five div */}
        <Grid container spacing={2}  >
                <Grid item lg={12}  >
                    <Paper style={{ borderRadius: "10px", backgroundColor: "white" }}>
                        <Box p={3}>
                            <Grid>
                                <Typography display="inline" variant="h6" style={{ float: "left" }} >
                                    <LinkedInIcon color="primary"/>
                                </Typography>
                                <Typography display="inline" variant="h6" style={{ float: "left",marginLeft: "33px" }} >
                                    Jill Bames 
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h6" style={{ float: "left", marginLeft: "33px" }}>
                                    Hatfield
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h6" style={{ marginLeft: "33px", float: "left", }}>
                                    ABC Trade Service Limited
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h6" style={{marginLeft: "33px",float: "left"}}>
                                    088373636

                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h6" style={{marginLeft: "33px",}}>
                                    -

                                </Typography>
                            </Grid>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>

            {/* forth six */}
            <Grid container spacing={2}  >
                <Grid item lg={12}  >
                    <Paper style={{ borderRadius: "10px", backgroundColor: "white" }}>
                        <Box p={3}>
                            <Grid>
                                <Typography display="inline" variant="h6" style={{ float: "left" }} >
                                    <LinkedInIcon color="primary"/>
                                </Typography>
                                <Typography display="inline" variant="h6" style={{ float: "left",marginLeft: "33px" }} >
                                    Jill Bames 
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h6" style={{ float: "left", marginLeft: "33px" }}>
                                    Hatfield
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h6" style={{ marginLeft: "33px", float: "left", }}>
                                    ABC Trade Service Limited
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h6" style={{marginLeft: "33px",float: "left"}}>
                                    088373636

                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h6" style={{marginLeft: "33px",}}>
                                    20/02/2020

                                </Typography>
                            </Grid>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>

            {/* Pagination */}
            <Grid container spacing={2}  >
                <Grid item lg={12}  >

                    <Box p={3}>
                        <Grid>

                            <Typography display="inline" style={{ float:"left",marginLeft:"470px"}}>
                                <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel >10</InputLabel>
                                    <Select style={{ marginTop:"-10px" ,borderRadius: "10px"}}>
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>10</MenuItem>
                                        <MenuItem value={20}>20</MenuItem>
                                        <MenuItem value={30}>30</MenuItem>
                                    </Select>
                                </FormControl>
                            </Typography>

                            <Typography display="inline"  style={{}}>
                                <Pagination color='primary' shape='rounded' size='large' />

                            </Typography>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>

        </Container>

    )
}

