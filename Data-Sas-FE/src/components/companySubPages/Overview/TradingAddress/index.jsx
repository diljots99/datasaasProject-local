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





export default function index() {
    return (
        <Container>
            <Grid container spacing={2}  >
                <Grid item lg={12} style={{ borderRadius: "10px" }} >

                    <Box>
                        <Grid>
                            <Typography display="inline" variant="h5" style={{ color: "#8a8fa7", float: "left" }} >
                                Trading Address
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography display="inline" variant="h5" style={{ color: "#8a8fa7", float: "left", marginLeft: "50px" }}>
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
                                    Address
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ float: "left", marginLeft: "135px" }}>
                                    Time/City
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ marginLeft: "135px", float: "left", }}>
                                    Counrtry
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h5" style={{marginLeft: "135px"}}>
                                    Region
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
            {/* forth div */}
            <Grid container spacing={2}  >
                <Grid item lg={12}  >
                    <Paper style={{ borderRadius: "10px", backgroundColor: "white" }}>
                        <Box p={3}>
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ float: "left" }} >
                                    Titan Court bishops square
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ float: "left", marginLeft: "40px" }}>
                                    Hatfield
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h5" style={{ marginLeft: "40px", float: "left", }}>
                                    Hertfordshire
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography display="inline" variant="h5" style={{marginLeft: "40px",}}>
                                    East of England
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
