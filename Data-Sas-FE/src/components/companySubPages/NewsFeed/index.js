import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import DownloadIcon from "@mui/icons-material/Download";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@mui/material/Typography";
import Container from "@material-ui/core/Container";
//import "@fontsource/poppins";
import "./styles.css";

export default function index() {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item lg={12} style={{ borderRadius: "10px" }}>
                    <Box>
                        <Grid>
                            <Typography
                                display="inline"
                                variant="h5"
                                style={{
                                    color: "#8a8fa7",
                                    fontFamily: "Poppins",
                                }}
                            >
                                Lifecycle
                            </Typography>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>

            <Timeline
                position="right"
                style={{
                    marginTop: "50px",
                    marginLeft: "0px",
                }}
            >
                {/* one */}
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot style={{ color: "gray" }} />
                        <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent sx={{ py: "20px", px: 2 }}>
                        <Typography
                            style={{
                                color: "gray",
                                marginBottom: "10px",
                                marginLeft: "20px",
                                fontFamily: "Poppins",
                            }}
                        >
                            1 Hour ago
                        </Typography>
                        <Paper
                            style={{
                                width: "755px",
                                borderRadius: "10px",
                                padding: "15px",
                            }}
                        >
                            <Typography
                                display="inline"
                                variant="h5"
                                component="span"
                                style={{
                                    color: "black",
                                    marginLeft: "15px",
                                    fontFamily: "Poppins",
                                    fontWeight: "600",
                                    fontSize: "20px",
                                }}
                            >
                                Tesco Delevery Drivers Saves Norwich Customer
                                Life
                            </Typography>
                            <br />
                            <Typography
                                display="inline"
                                style={{
                                    margin: "20px 15px",
                                    color: "#9196AC",
                                    fontFamily: "Poppins",
                                    fontStyle: "italic",
                                    fontSize: "14px",
                                    lineHeight: "35px",
                                }}
                            >
                                Eastern Daily Press
                            </Typography>
                            <br />
                            <Typography
                                variant="h6"
                                style={{
                                    color: "#727272",
                                    marginLeft: "15px",
                                    fontFamily: "Poppins",
                                    fontSize: "16px",
                                }}
                            >
                                Contrary Popular belief Larem ipsum is the
                                simpaly Contrary popular Popular belief Larem
                                ipsum is the simpaly Contrary popular belief{" "}
                            </Typography>
                            <Typography
                                style={{
                                    color: "#40ACFB",
                                    marginLeft: "15px",
                                    marginTop: "10px",
                                }}
                            >
                                Read more
                            </Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>

                {/* two */}
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot style={{ color: "gray" }} />
                        <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent sx={{ py: "20px", px: 2 }}>
                        <Typography
                            style={{
                                color: "gray",
                                marginBottom: "10px",
                                marginLeft: "20px",
                                fontFamily: "Poppins",
                            }}
                        >
                            1 Hour ago
                        </Typography>
                        <Paper
                            style={{
                                width: "755px",
                                borderRadius: "10px",
                                padding: "15px",
                            }}
                        >
                            <Typography
                                display="inline"
                                variant="h5"
                                component="span"
                                style={{
                                    color: "black",
                                    marginLeft: "15px",
                                    fontFamily: "Poppins",
                                    fontWeight: "600",
                                    fontSize: "20px",
                                }}
                            >
                                Tesco Delevery Drivers Saves Norwich Customer
                                Life
                            </Typography>
                            <br />
                            <Typography
                                display="inline"
                                style={{
                                    margin: "20px 15px",
                                    color: "#9196AC",
                                    fontFamily: "Poppins",
                                    fontStyle: "italic",
                                    fontSize: "14px",
                                    lineHeight: "35px",
                                }}
                            >
                                Eastern Daily Press
                            </Typography>
                            <br />
                            <Typography
                                variant="h6"
                                style={{
                                    color: "#727272",
                                    marginLeft: "15px",
                                    fontFamily: "Poppins",
                                    fontSize: "16px",
                                }}
                            >
                                Contrary Popular belief Larem ipsum is the
                                simpaly Contrary popular Popular belief Larem
                                ipsum is the simpaly Contrary popular belief{" "}
                            </Typography>
                            <Typography
                                style={{
                                    color: "#40ACFB",
                                    marginLeft: "15px",
                                    marginTop: "10px",
                                }}
                            >
                                Read more
                            </Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>

                {/* three */}
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot style={{ color: "gray" }} />
                        <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent sx={{ py: "20px", px: 2 }}>
                        <Typography
                            style={{
                                color: "gray",
                                marginBottom: "10px",
                                marginLeft: "20px",
                                fontFamily: "Poppins",
                            }}
                        >
                            1 Hour ago
                        </Typography>
                        <Paper
                            style={{
                                width: "755px",
                                borderRadius: "10px",
                                padding: "15px",
                            }}
                        >
                            <Typography
                                display="inline"
                                variant="h5"
                                component="span"
                                style={{
                                    color: "black",
                                    marginLeft: "15px",
                                    fontFamily: "Poppins",
                                    fontWeight: "600",
                                    fontSize: "20px",
                                }}
                            >
                                Tesco Delevery Drivers Saves Norwich Customer
                                Life
                            </Typography>
                            <br />
                            <Typography
                                display="inline"
                                style={{
                                    margin: "20px 15px",
                                    color: "#9196AC",
                                    fontFamily: "Poppins",
                                    fontStyle: "italic",
                                    fontSize: "14px",
                                    lineHeight: "35px",
                                }}
                            >
                                Eastern Daily Press
                            </Typography>
                            <br />
                            <Typography
                                variant="h6"
                                style={{
                                    color: "#727272",
                                    marginLeft: "15px",
                                    fontFamily: "Poppins",
                                    fontSize: "16px",
                                }}
                            >
                                Contrary Popular belief Larem ipsum is the
                                simpaly Contrary popular Popular belief Larem
                                ipsum is the simpaly Contrary popular belief{" "}
                            </Typography>
                            <Typography
                                style={{
                                    color: "#40ACFB",
                                    marginLeft: "15px",
                                    marginTop: "10px",
                                }}
                            >
                                Read more
                            </Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>

                {/* four */}
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot style={{ color: "gray" }} />
                        <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent sx={{ py: "20px", px: 2 }}>
                        <Typography
                            style={{
                                color: "gray",
                                marginBottom: "10px",
                                marginLeft: "20px",
                                fontFamily: "Poppins",
                            }}
                        >
                            1 Hour ago
                        </Typography>
                        <Paper
                            style={{
                                width: "755px",
                                borderRadius: "10px",
                                padding: "15px",
                            }}
                        >
                            <Typography
                                display="inline"
                                variant="h5"
                                component="span"
                                style={{
                                    color: "black",
                                    marginLeft: "15px",
                                    fontFamily: "Poppins",
                                    fontWeight: "600",
                                    fontSize: "20px",
                                }}
                            >
                                Tesco Delevery Drivers Saves Norwich Customer
                                Life
                            </Typography>
                            <br />
                            <Typography
                                display="inline"
                                style={{
                                    margin: "20px 15px",
                                    color: "#9196AC",
                                    fontFamily: "Poppins",
                                    fontStyle: "italic",
                                    fontSize: "14px",
                                    lineHeight: "35px",
                                }}
                            >
                                Eastern Daily Press
                            </Typography>
                            <br />
                            <Typography
                                variant="h6"
                                style={{
                                    color: "#727272",
                                    marginLeft: "15px",
                                    fontFamily: "Poppins",
                                    fontSize: "16px",
                                }}
                            >
                                Contrary Popular belief Larem ipsum is the
                                simpaly Contrary popular Popular belief Larem
                                ipsum is the simpaly Contrary popular belief{" "}
                            </Typography>
                            <Typography
                                style={{
                                    color: "#40ACFB",
                                    marginLeft: "15px",
                                    marginTop: "10px",
                                }}
                            >
                                Read more
                            </Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Container>
    );
}
