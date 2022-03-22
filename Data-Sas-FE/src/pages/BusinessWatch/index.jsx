import React, { useState } from "react";
import { Grid, Typography, Card, Button, TextField } from "@material-ui/core";
//import TextField from '@mui/material/TextField';
import { useStyles } from "./styles";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import UploadFile from "../../components/common/uploadFile";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { CSVLink } from "react-csv";

export default function BusinessWatch() {
  const classes = useStyles();
  const [showmodel, setshowmodel] = useState(false);
  const [details, setDetails] = useState({
    company_name: "",
    company_number: "",
    person_first_name: "",
    person_last_name: "",
    phone: "",
    refrence: "",
    designation: "",
    postal_code: "",
    date: new Date(),
    notes: "",
    email: "",
  });
  const csvSample = [
    {
      company_name: "",
      company_number: "",
      person_first_name: "",
      person_last_name: "",  
      phone: "",
      refrence: "",
      designation: "",
      postal_code: "",
      date: "",
      notes: "",
      email: "",
    },
  ];

  const onCSVUpload = (data) => {
    console.log("csv data", data[0]);
    setDetails(data[0]);
  };

  return (
    <div className={classes.main}>
      <Typography variant="h5" className={classes.mainText}>
        Business Watch
      </Typography>
      <Card className={classes.card} variant="outlined">
        <Grid container className={classes.mainContainer}>
          {/* first Grid */}
          <Grid container className={classes.subContainer}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" className={classes.lable}>
                Company Name
              </Typography>
              <TextField
                className={classes.input}
                size="small"
                variant="outlined"
                placeholder="Enter company name"
                value={details.company_name}
                onChange={(e) =>
                  setDetails({ ...details, company_name: e.target.value })
                }
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant="h6" className={classes.lable}>
                Company Number
              </Typography>
              <TextField
                className={classes.input}
                size="small"
                variant="outlined"
                placeholder="Enter company Number"
                value={details.company_number}
                onChange={(e) =>
                  setDetails({ ...details, company_number: e.target.value })
                }
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant="h6" className={classes.lable}>
                Contact Person First Name
              </Typography>
              <TextField
                className={classes.input}
                size="small"
                variant="outlined"
                placeholder="Enter Contact Person First Name"
                value={details.person_first_name}
                onChange={(e) =>
                  setDetails({ ...details, person_first_name: e.target.value })
                }
              />
            </Grid>
          </Grid>

          {/* second Grid  */}
          <Grid container className={classes.subContainer}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" className={classes.lable}>
                Enter Contact Person Last Name
              </Typography>
              <TextField
                className={classes.input}
                size="small"
                variant="outlined"
                placeholder="Enter Contact Person Last Name"
                value={details.person_last_name}
                onChange={(e) =>
                  setDetails({ ...details, person_last_name: e.target.value })
                }
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant="h6" className={classes.lable}>
                Phone
              </Typography>
              <TextField
                className={classes.input}
                size="small"
                variant="outlined"
                placeholder="Enter Phone Number"
                value={details.phone}
                onChange={(e) =>
                  setDetails({ ...details, phone: e.target.value })
                }
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant="h6" className={classes.lable}>
                Reference
              </Typography>
              <TextField
                className={classes.input}
                size="small"
                variant="outlined"
                placeholder="Enter reference"
                value={details.refrence}
                onChange={(e) =>
                  setDetails({ ...details, refrence: e.target.value })
                }
              />
            </Grid>
          </Grid>

          {/* Third Grid  */}
          <Grid container className={classes.subContainer}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" className={classes.lable}>
                Designation
              </Typography>
              <TextField
                className={classes.input}
                size="small"
                variant="outlined"
                placeholder="Enter designation"
                value={details.designation}
                onChange={(e) =>
                  setDetails({ ...details, designation: e.target.value })
                }
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant="h6" className={classes.lable}>
                Postal Code
              </Typography>
              <TextField
                className={classes.input}
                size="small"
                variant="outlined"
                placeholder="Enter postal code"
                value={details.postal_code}
                onChange={(e) =>
                  setDetails({ ...details, postal_code: e.target.value })
                }
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant="h6" className={classes.lable}>
                Update/Creation Date
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={details.date}
                  onChange={(e) => setDetails({ ...details, date: e })}
                  renderInput={(params) => (
                    <TextField
                      className={classes.input}
                      size="small"
                      variant="outlined"
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>
              {/* <TextField
                className={classes.input}
                size="small"
                variant="outlined"
                placeholder="Enter update/creation date"
                value={details.date}
                InputProps={{
                  endAdornment: (
                   <CalendarTodayIcon />
                  ),
                 }}
              /> */}
            </Grid>
          </Grid>

          {/* fourth Grid  */}
          <Grid container className={classes.subContainer}>
            <Grid item xs={12} sm={8}>
              <Typography variant="h6" className={classes.lable}>
                Add Notes
              </Typography>
              <TextField
                className={classes.notesInput}
                size="small"
                variant="outlined"
                placeholder="Enter notes"
                value={details.notes}
                onChange={(e) =>
                  setDetails({ ...details, notes: e.target.value })
                }
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant="h6" className={classes.lable}>
                Email
              </Typography>
              <TextField
                className={classes.input}
                size="small"
                variant="outlined"
                placeholder="Enter email"
                value={details.email}
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
              />
            </Grid>
          </Grid>

          {/* Action Grid  */}
          <Grid container className={classes.actionContainer}>
            <Grid item>
              <Button
                className={classes.Button}
                color="primary"
                variant="contained"
              >
                Save
              </Button>
            </Grid>
            <Grid item>
              <Button
                className={classes.Button}
                style={{ backgroundColor: "#5f685f" }}
                color="primary"
                variant="contained"
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                className={classes.Button}
                style={{ backgroundColor: "#40acfb" }}
                color="primary"
                variant="contained"
                onClick={() => {
                  setshowmodel(true);
                }}
              >
                Upload CSV
              </Button>
            </Grid>
            <Grid item className={classes.downloadCsv}>
              <CSVLink
                data={csvSample}
                filename={"DataSaas-BusinesssWatch.csv"}
              >
                <p className={classes.para}>Download Sample CSV</p>{" "}
              </CSVLink>
            </Grid>
          </Grid>
        </Grid>
      </Card>
      {/* model */}

      <UploadFile
        open={showmodel}
        setshowUploadFile={setshowmodel}
        onCSVUpload={(data) => onCSVUpload(data)}
      />
    </div>
  );
}
