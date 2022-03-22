import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Modal,
  Divider,
  Typography,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { addCompanyNotes } from "../../redux/actions/watchAction";
import { useHistory } from "react-router-dom";

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
    padding: "16px 0 35px",
  },
  modelHead: {
    margin: " 20px 0",
    fontWeight: "bold",
    padding: "0 32px",
    fontSize: "36px",
    lineHeight: "54px",
    fontFamily: "Poppins",
  },
  modelPara: {
    margin: "20px 0px",
    fontSize: "20px",
    color: "#8a8fa7",
  },
  modelForm: {
    width: "100%",
    padding: "10px 32px",
  },
  modelFormItem: {
    width: "100%",
    margin: "10px 0",
  },
  inputError: {
    color: "red",
  },
  modelFormInput: {
    width: "100%",
    border: "1px solid #DCD9D9",
    borderRadius: "5px",
  },
  inputItem: {
    marginTop: "10px",
  },
  lable: {
    color: "#727272",
    fontWeight: 400,
    marginBottom: "5px",
    fontFamily: "Poppins",
    fontSize: "20px",
    lineHeight: "44px",
  },
  conformButton: {
    background: "#40ACFB",
    borderRadius: "5px",
    fontFamily: "Poppins",
    fontSize: "22px",
    lineHeight: "44px",
    fontWeight: "500",
  },
  cancelButton: {
    background: "#6C757D",
    borderRadius: "5px",
    fontFamily: "Poppins",
    fontSize: "22px",
    lineHeight: "44px",
    fontWeight: "500",
  },
  buttonMain: {
    padding: "0 0 0 32px",
  },
}));

export default function AddNotes({ open, setAddNotes }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { getcompanyNotes } = useSelector((state) => state.watch);
  const { companyDetail } = useSelector((state) => state.watch);
  const [data, setData] = useState({
    addNotes: "",
  });

  const [error, setError] = useState({});
  const [showPassword, setshowPassword] = useState(false);
  const history = useHistory();

  const handleAddNotes = () => {
    setError({});
    let errors = {};
    let dataToken = JSON.parse(sessionStorage.getItem("userData"));
   // console.log(companyDetail.company_name,"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", companyDetail);
    if (!data.addNotes) {
      errors.addNotes = "Notes can not be blank";
    }

    if (errors.addNotes) {
      setError(errors);
    } else {
      console.log("=@=@=@=@=@=@=@=@=@=@=@=", {
        n_text: data.addNotes,
        user_id: dataToken.id,
        company_id: companyDetail.id,
        comapany_uuid: companyDetail.uuid,
        n_company_name: companyDetail.company_name
      }
      );
      let datas = {
        n_company_name: companyDetail.company_name,
        n_text: data.addNotes,
        user_id: dataToken.id,
        company_id: companyDetail.id,
        comapany_uuid: companyDetail.uuid
      }
      dispatch(
        addCompanyNotes(
          datas
        )
      );
      setAddNotes(false);
      setData({
        addNotes: "",
      });
    }
  };

  const handleCancle = () => {
    setAddNotes(false);
    setData({
      addNotes: "",
    });
  };

  return (
    <Modal
      open={open}
      onClose={() => setAddNotes(false)}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.model}>
        <h2 id="simple-modal-title" className={classes.modelHead}>
          Add Notes
        </h2>
        <Divider />
        {/* Model fields */}
        <Grid container className={classes.modelForm}>
          <Grid item className={classes.modelFormItem}>
            <TextField
              placeholder="Add Note"
              multiline
              value={data.addNotes}
              onChange={(e) => setData({ ...data, addNotes: e.target.value })}
              rows={4}
              maxRows={12}
            />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item className={classes.buttonMain}>
            <Button
              className={classes.conformButton}
              variant="contained"
              size="large"
              style={{ marginTop: "10px" }}
              color="primary"
              onClick={() => {
                handleAddNotes();
              }}
            >
              Save
            </Button>
          </Grid>
          <Grid item>
            <Button
              className={classes.cancelButton}
              variant="contained"
              size="large"
              style={{
                marginTop: "10px",
                backgroundColor: "#91979d",
                marginLeft: "10px",
              }}
              color="primary"
              onClick={() => {
                handleCancle();
              }}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </div>
    </Modal>
  );
}
