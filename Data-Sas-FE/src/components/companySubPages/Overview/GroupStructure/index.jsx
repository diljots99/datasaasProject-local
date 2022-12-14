import React from "react";
import { Button } from "@material-ui/core";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import DownloadIcon from "@mui/icons-material/Download";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@mui/material/Typography";
import Container from "@material-ui/core/Container";
import { useStyles } from "./styles";

export default function GroupStructure() {
  const classess = useStyles();
  
  return (
    <div>
   
      <div style={{display: "flex", justifyContent:"space-between" , alignItems: "center"}}>
      <Typography
                display="inline"
                variant="h5"
                style={{ color: "#8a8fa7" }}
              >
                Group Structure
              </Typography>

              <Button className={classess.filterButton} variant="contained" size="small">
            Change Tree View
          </Button>

      </div>
      <div style={{overflowX:"scroll" , paddingLeft:"10px"}}>
      <Container style={{ width: "1280px" }}>
      <Timeline
        position="alternate"
        style={{ marginTop: "50px", marginLeft: "80px" }}
      >
        {/* one */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="h6"
            color="black"
          ></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot style={{ color: "gray" }} />

            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Paper style={{ width: "300px", borderRadius: "10px" }}>
              <Typography
                display="inline"
                variant="h6"
                component="span"
                style={{ color: "black", marginLeft: "15px" }}
              >
                University of Hertfordshire
              </Typography>
              <br />
              <Typography
                display="inline"
                style={{ marginLeft: "15px", color: "gray" }}
              >
                #8694949
              </Typography>
              <br />
            </Paper>{" "}
            <br />
          </TimelineContent>
        </TimelineItem>

        {/* two */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="h6"
            color="black"
          >
            <Paper style={{ width: "300px", borderRadius: "10px" }}>
              <Typography
                display="inline"
                variant="h6"
                component="span"
                style={{ color: "black", marginLeft: "15px" }}
              >
                University of Hertfordshire
              </Typography>
              <br />
              <Typography
                display="inline"
                style={{ marginLeft: "15px", color: "gray" }}
              >
                #8694949
              </Typography>
              <br />
            </Paper>{" "}
            <br />
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot style={{ color: "gray" }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" color="black"></Typography>
          </TimelineContent>
        </TimelineItem>

        {/* three */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="h6"
            color="black"
          ></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot style={{ color: "gray" }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Paper style={{ width: "300px", borderRadius: "10px" }}>
              <Typography
                display="inline"
                variant="h6"
                component="span"
                style={{ color: "black", marginLeft: "15px" }}
              >
                University of Hertfordshire
              </Typography>
              <br />
              <Typography
                display="inline"
                style={{ marginLeft: "15px", color: "gray" }}
              >
                #8694949
              </Typography>
              <br />
            </Paper>{" "}
            <br />
          </TimelineContent>
        </TimelineItem>

        {/* 3 Left */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="h6"
            color="black"
          >
            <Paper style={{ width: "300px", borderRadius: "10px" }}>
              <Typography
                display="inline"
                variant="h6"
                component="span"
                style={{ color: "black", marginLeft: "15px" }}
              >
                University of Hertfordshire
              </Typography>
              <br />
              <Typography
                display="inline"
                style={{ marginLeft: "15px", color: "gray" }}
              >
                #8694949
              </Typography>
              <br />
              <AddIcon
                style={{
                  marginLeft: "270px",
                  marginTop: "-55px",
                  backgroundColor: "gray",
                  borderRadius: "50%",
                }}
              />
            </Paper>{" "}
            <br />
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot style={{ color: "gray" }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Paper
              style={{
                width: "300px",
                borderRadius: "10px",
                marginTop: "-157px",
                marginLeft: "200px",
              }}
            >
              <Typography
                display="inline"
                variant="h6"
                component="span"
                style={{ color: "black", marginRight: "70px" }}
              >
                UH Holdings Limited
              </Typography>
              <br />
              <Typography
                display="inline"
                style={{ marginRight: "215px", color: "gray" }}
              >
                #8694949
              </Typography>
              <br />
              <Typography
                display="inline"
                style={{ marginRight: "199px", color: "green" }}
              >
                View Details
              </Typography>
              <br />
              <RemoveIcon
                style={{
                  marginRight: "15px",
                  marginTop: "-55px",
                  backgroundColor: "gray",
                  borderRadius: "50%",
                }}
              />
            </Paper>{" "}
            <br />
            <Paper
              style={{
                width: "300px",
                borderRadius: "10px",
                marginTop: "-118px",
                marginLeft: "-140px",
              }}
            >
              <Typography
                display="inline"
                variant="h6"
                component="span"
                style={{ color: "black", marginRight: "12px" }}
              >
                University of Hertfordshire
              </Typography>
              <br />
              <Typography
                display="inline"
                style={{ marginRight: "215px", color: "gray" }}
              >
                #8694949
              </Typography>
              <br />
              <RemoveIcon
                style={{
                  marginRight: "15px",
                  marginTop: "-55px",
                  backgroundColor: "gray",
                  borderRadius: "50%",
                }}
              />
            </Paper>{" "}
            <br />
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      <br />
      <br />

      {/* second timeline */}
      <Timeline
        position="alternate"
        style={{ marginTop: "50px", marginLeft: "80px" }}
      >
        {/* one */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="h6"
            color="black"
          ></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot style={{ color: "gray" }} />

            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Paper style={{ width: "300px", borderRadius: "10px" }}>
              <Typography
                display="inline"
                variant="h6"
                component="span"
                style={{ color: "black", marginLeft: "15px" }}
              >
                University of Hertfordshire
              </Typography>
              <br />
              <Typography
                display="inline"
                style={{ marginLeft: "15px", color: "gray" }}
              >
                #8694949
              </Typography>
              <br />
            </Paper>{" "}
            <br />
          </TimelineContent>
        </TimelineItem>

        {/* two */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="h6"
            color="black"
          >
            <Paper style={{ width: "300px", borderRadius: "10px" }}>
              <Typography
                display="inline"
                variant="h6"
                component="span"
                style={{ color: "black", marginLeft: "15px" }}
              >
                University of Hertfordshire
              </Typography>
              <br />
              <Typography
                display="inline"
                style={{ marginLeft: "15px", color: "gray" }}
              >
                #8694949
              </Typography>
              <br />
            </Paper>{" "}
            <br />
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot style={{ color: "gray" }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" color="black"></Typography>
          </TimelineContent>
        </TimelineItem>

        {/* three */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="h6"
            color="black"
          ></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot style={{ color: "gray" }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Paper style={{ width: "300px", borderRadius: "10px" }}>
              <Typography
                display="inline"
                variant="h6"
                component="span"
                style={{ color: "black", marginLeft: "15px" }}
              >
                University of Hertfordshire
              </Typography>
              <br />
              <Typography
                display="inline"
                style={{ marginLeft: "15px", color: "gray" }}
              >
                #8694949
              </Typography>
              <br />
            </Paper>{" "}
            <br />
          </TimelineContent>
        </TimelineItem>

        {/* 3 Left */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="h6"
            color="black"
          >
            <Paper style={{ width: "300px", borderRadius: "10px" }}>
              <Typography
                display="inline"
                variant="h6"
                component="span"
                style={{ color: "black", marginLeft: "15px" }}
              >
                University of Hertfordshire
              </Typography>
              <br />
              <Typography
                display="inline"
                style={{ marginLeft: "15px", color: "gray" }}
              >
                #8694949
              </Typography>
              <br />
              <AddIcon
                style={{
                  marginLeft: "270px",
                  marginTop: "-55px",
                  backgroundColor: "gray",
                  borderRadius: "50%",
                }}
              />
            </Paper>{" "}
            <br />
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot style={{ color: "gray" }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Paper
              style={{
                width: "300px",
                borderRadius: "10px",
                marginTop: "-157px",
                marginLeft: "200px",
              }}
            >
              <Typography
                display="inline"
                variant="h6"
                component="span"
                style={{ color: "black", marginRight: "70px" }}
              >
                UH Holdings Limited
              </Typography>
              <br />
              <Typography
                display="inline"
                style={{ marginRight: "215px", color: "gray" }}
              >
                #8694949
              </Typography>
              <br />
              <RemoveIcon
                style={{
                  marginRight: "15px",
                  marginTop: "-55px",
                  backgroundColor: "gray",
                  borderRadius: "50%",
                }}
              />
              <br />
              <Typography
                display="inline"
                style={{ marginRight: "199px", color: "green" }}
              >
                View Details
              </Typography>
              <br />
            </Paper>{" "}
            <br />
            <Paper
              style={{
                width: "300px",
                borderRadius: "10px",
                marginTop: "-118px",
                marginLeft: "-140px",
              }}
            >
              <Typography
                display="inline"
                variant="h6"
                component="span"
                style={{ color: "black", marginRight: "12px" }}
              >
                University of Hertfordshire
              </Typography>
              <br />
              <Typography
                display="inline"
                style={{ marginRight: "215px", color: "gray" }}
              >
                #8694949
              </Typography>
              <br />
              <RemoveIcon
                style={{
                  marginRight: "15px",
                  marginTop: "-55px",
                  backgroundColor: "gray",
                  borderRadius: "50%",
                }}
              />
            </Paper>{" "}
            <br />
          </TimelineContent>
        </TimelineItem>

        {/* four */}
      </Timeline>
      </Container>
      </div>

    </div>
  );
}
