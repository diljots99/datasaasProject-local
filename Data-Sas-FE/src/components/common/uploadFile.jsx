import React, { useState } from "react";
import { Grid, TextField, Button, Modal, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    model: {
        top: `50%`,
        left: `50%`,
        transform: `translate(-${50}%, -${50}%)`,
        position: "absolute",
        width: 430,
        backgroundColor: theme.palette.background.paper,
        // height: "500px",
        borderRadius: "30px",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    modelHead: {
        margin: " 20px 0",
        fontWeight: "bold",
    },
    modelPara: {
        margin: "20px 0px",
        fontSize: "20px",
        color: "#8a8fa7",
    },
    modelForm: {
        width: "100%",
    },
    modelFormItem: {
        width: "100%",
        margin: "10px 0",
    },
    modelFormInput: {
        width: "100%",
    },
    inputItem: {
        marginTop: "10px",
    },
    buttonToken: {
        fontSize: "8px",
        fontWeight: "bold",
        width: "121px",
    },
    divider: {
        margin: "20px"
    }

}));

export default function UploadFile({ open, setshowUploadFile , onCSVUpload}) {
    const classes = useStyles();
    const [csvData, setCsvData] =useState([])


const [csvArray, setCsvArray] = useState([]);

const processCSV = (str, delim=',') => {
        const headers = str.slice(0,str.indexOf('\n')).split(delim);
        const rows = str.slice(str.indexOf('\n')+1).split('\n');

        const newArray = rows.map( row => {
            const values = row.split(delim);
            const eachObject = headers.reduce((obj, header, i) => {
                obj[header] = values[i];
                return obj;
            }, {})
            return eachObject;
        })

         setCsvArray(newArray)
        onCSVUpload(newArray)
        setshowUploadFile(false)
    }


  const handleCapture = () => {
console.log("capturing ....")
        const file = csvData;
        const reader = new FileReader();

        reader.onload = function(e) {
            const text = e.target.result;
            console.log(text);
            processCSV(text)
        }

        reader.readAsText(file);

    };

    return (
        <Modal
            open={open}
            onClose={() => setshowUploadFile(false)}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description">
            <div className={classes.model}>
                <h2 id="simple-modal-title" className={classes.modelHead}>
                    Upload File
                </h2>
                <Divider className={classes.divider} />
                {/* Model fields */}
                <Grid container className={classes.modelForm}>
                    {/* <TextField
                            className={classes.modelFormInput}
                            variant="outlined"
                            size="small"
                            label="No file choosen"
                            InputProps={{
                                endAdornment: (
                                    <Button   className={classes.buttonToken} variant="contained" >
                                        Choose File
                                    </Button>
                                ),
                            }}
                        /> */}
               
                        <TextField 
                         className={classes.modelFormInput}
                         variant="outlined"
                         size="small"
                         placeholder={ csvData.name ? csvData.name :"No file choosen"}
                        InputProps={{
                            endAdornment: (
                        <Button
                        className={classes.buttonToken} variant="contained"
                        variant="contained"
                        component="label"
                      >
                        Choose File
                        <input
                          type="file"
                          accept='.csv/.xls'
                          id="raised-button-file"
                          multiple
                          hidden
                          onChange={({target}) => setCsvData(target.files[0] )}
                        />
                      </Button>
                            ),
                        }}
                        />
              
                </Grid>

                <Grid container>
                    <Grid item>
                        <Button
                            variant="contained"
                            size="large"
                            style={{ marginTop: "10px", backgroundColor: "#40acfb" }}
                            color="primary"
                            onClick={() => handleCapture()}>
                            Confirm
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            size="large"
                            style={{
                                marginTop: "10px",
                                backgroundColor: "#91979d",
                                marginLeft: "10px",
                            }}
                            color="primary"
                            onClick={() => setshowUploadFile(false)}>
                            Cancel
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Modal>
    );
}
