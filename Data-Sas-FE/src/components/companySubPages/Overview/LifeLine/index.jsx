import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SpeakerNotesOutlinedIcon from "@mui/icons-material/SpeakerNotesOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@mui/material/Typography";
import Container from "@material-ui/core/Container";

export default function LifeLine() {
  return (
    <Container style={{ boxSizing: "border-box", width: "100%" }}>
      <Grid container spacing={2}>
        <Grid item lg={12} style={{ borderRadius: "10px" }}>
          <Box>
            <Grid>
              <Typography
                display="inline"
                variant="h5"
                style={{ color: "#8a8fa7" }}
              >
                LifeLine
              </Typography>
            </Grid>
          </Box>
        </Grid>
      </Grid>

      <Timeline
        position="alternate"
        style={{ marginTop: "30px"}}
      >
        {/* one */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="h6"
            color="black"
          >
            24-02-2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot style={{ color: "darkgray" }} />

            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Paper style={{ width: "530px", borderRadius: "15px" }}>
              <HomeRoundedIcon
                fontSize="large"
                color="primary"
                style={{
                  color: "white",
                  backgroundColor: "blue",
                  borderRadius: "50%",
                  marginTop: "25px",
                  marginLeft: "-9px",
                }}
              />
              <Typography
                display="inline"
                variant="h6"
                component="span"
                style={{ color: "blue", marginLeft: "20px" }}
              >
                Account with account type small
              </Typography>
              <br />
              <Typography
                display="inline"
                style={{ color: "darkgray", marginLeft: "47px" }}
              >
                Account
              </Typography>
              <FileDownloadOutlinedIcon
                style={{ marginTop: "-33px", marginLeft: "355" }}
              />
            </Paper>
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
            <Paper style={{ width: "530px", borderRadius: "15px" }}>
              <SpeakerNotesOutlinedIcon
                fontSize="large"
                color="primary"
                style={{
                  color: "white",
                  backgroundColor: "green",
                  borderRadius: "50%",
                  marginTop: "25px",
                  marginLeft: "-9px",
                }}
              />
              <Typography
                display="inline"
                variant="h6"
                component="span"
                style={{ color: "green", marginLeft: "20px" }}
              >
                Conformation statement with no update
              </Typography>
              <br />
              <Typography
                display="inline"
                style={{ color: "darkgray", marginLeft: "47px" }}
              >
                Conformation statement
              </Typography>
              <FileDownloadOutlinedIcon
                style={{ marginTop: "-33px", marginLeft: "240px" }}
              />
            </Paper>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot style={{ color: "darkgray" }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" color="black">
              15-02-2020
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* three */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="h6"
            color="black"
          >
            10-02-2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot style={{ color: "darkgray" }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Paper style={{ width: "530px", borderRadius: "15px" }}>
              <HomeRoundedIcon
                fontSize="large"
                color="primary"
                style={{
                  color: "white",
                  backgroundColor: "blue",
                  borderRadius: "50%",
                  marginTop: "25px",
                  marginLeft: "-9px",
                }}
              />
              <Typography
                display="inline"
                variant="h6"
                component="span"
                style={{ color: "blue", marginLeft: "20px" }}
              >
                Account with account type small
              </Typography>
              <br />
              <Typography
                display="inline"
                style={{ color: "darkgray", marginLeft: "47px" }}
              >
                Account
              </Typography>
              <FileDownloadOutlinedIcon
                style={{ marginTop: "-33px", marginLeft: "355" }}
              />
            </Paper>
          </TimelineContent>
        </TimelineItem>

        {/* four */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="h6"
            color="black"
          >
            <Paper style={{ width: "530px", borderRadius: "15px" }}>
              <SpeakerNotesOutlinedIcon
                fontSize="large"
                color="primary"
                style={{
                  color: "white",
                  backgroundColor: "green",
                  borderRadius: "50%",
                  marginTop: "25px",
                  marginLeft: "-9px",
                }}
              />
              <Typography
                display="inline"
                variant="h6"
                component="span"
                style={{ color: "green", marginLeft: "20px" }}
              >
                Conformation statement with no update
              </Typography>
              <br />
              <Typography
                display="inline"
                style={{ color: "darkgray", marginLeft: "47px" }}
              >
                Conformation statement
              </Typography>
              <FileDownloadOutlinedIcon
                style={{ marginTop: "-33px", marginLeft: "240px" }}
              />
            </Paper>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot style={{ color: "darkgray" }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" color="black">
              02-02-2020
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* five */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="h6"
            color="black"
          >
            01-02-2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot style={{ color: "darkgray" }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Paper style={{ width: "530px", borderRadius: "15px" }}>
              <DriveFileMoveOutlinedIcon
                fontSize="large"
                color="primary"
                style={{
                  color: "white",
                  backgroundColor: "red",
                  borderRadius: "50%",
                  marginTop: "25px",
                  marginLeft: "-9px",
                }}
              />
              <Typography
                display="inline"
                variant="h6"
                component="span"
                style={{ color: "red", marginLeft: "20px" }}
              >
                Resolution
              </Typography>
              <br />
              <Typography
                display="inline"
                style={{ color: "darkgray", marginLeft: "47px" }}
              >
                Resolution
              </Typography>
              <FileDownloadOutlinedIcon
                style={{ marginTop: "-33px", marginLeft: "337px" }}
              />
            </Paper>
          </TimelineContent>
        </TimelineItem>

        {/* six */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="h6"
            color="black"
          >
            <Paper style={{ width: "530px", borderRadius: "15px" }}>
              <AccountBoxOutlinedIcon
                fontSize="large"
                color="primary"
                style={{
                  color: "white",
                  backgroundColor: "orange",
                  borderRadius: "50%",
                  marginTop: "25px",
                  marginLeft: "-9px",
                }}
              />
              <Typography
                display="inline"
                variant="h6"
                component="span"
                style={{ color: "orange", marginLeft: "20px" }}
              >
                Changr person director company with change date
              </Typography>
              <br />
              <Typography
                display="inline"
                style={{ color: "darkgray", marginLeft: "47px" }}
              >
                Officers
              </Typography>
              <FileDownloadOutlinedIcon
                style={{ marginTop: "-33px", marginLeft: "358px" }}
              />
            </Paper>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot style={{ color: "darkgray" }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" color="black">
              20-01-2020
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/* seven */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="h6"
            color="black"
          >
            17-01-2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot style={{ color: "darkgray" }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Paper style={{ width: "530px", borderRadius: "15px" }}>
              <LocationOnOutlinedIcon
                fontSize="large"
                color="primary"
                style={{
                  color: "white",
                  backgroundColor: "yellow",
                  borderRadius: "50%",
                  marginTop: "25px",
                  marginLeft: "-9px",
                }}
              />
              <Typography
                display="inline"
                variant="h6"
                component="span"
                style={{ color: "yellow", marginLeft: "20px" }}
              >
                Account with account type small
              </Typography>
              <br />
              <Typography
                display="inline"
                style={{ color: "darkgray", marginLeft: "47px" }}
              >
                Account
              </Typography>
              <FileDownloadOutlinedIcon
                style={{ marginTop: "-33px", marginLeft: "355" }}
              />
            </Paper>
          </TimelineContent>
        </TimelineItem>

        {/* eight */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="h6"
            color="black"
          >
            <Paper style={{ width: "530px", borderRadius: "15px" }}>
              <StickyNote2OutlinedIcon
                fontSize="large"
                color="primary"
                style={{
                  color: "white",
                  backgroundColor: "pink",
                  borderRadius: "50%",
                  marginTop: "25px",
                  marginLeft: "-9px",
                }}
              />
              <Typography
                display="inline"
                variant="h6"
                component="span"
                style={{ color: "pink", marginLeft: "20px" }}
              >
                Annual return company with made up date full
              </Typography>
              <br />
              <Typography
                display="inline"
                style={{ color: "darkgray", marginLeft: "47px" }}
              >
                Annual return
              </Typography>
              <FileDownloadOutlinedIcon
                style={{ marginTop: "-33px", marginLeft: "316px" }}
              />
            </Paper>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot style={{ color: "darkgray" }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" color="black">
              10-01-2020
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
}
