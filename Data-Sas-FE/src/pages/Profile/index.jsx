import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  TextField,
  Container,
  Button,
} from "@material-ui/core";
import { Edit, Save } from "@material-ui/icons";
import { useStyles } from "./styles";
import { useDispatch } from "react-redux";
import ChangePassword from "../../components/common/changePassword";
import { updateUser } from "../../redux/actions/authActions";
import ExtensionIcon from "@mui/icons-material/Extension";
// import { useParams } from "react-router-dom";
// import { getCompanyDetail } from "../../redux/actions/watchAction";

export default function Profile() {
  // const { ID } = useParams();
  const [editable, setEditadle] = useState(true);
  const dispatch = useDispatch();
  const [showmodel, setshowmodel] = useState(false);
  // const { companyDetail } = useSelector((state)=> state.watch);
  const [Error, setError] = useState({});
  const [data, setData] = useState({
    uuid: "",
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    phoneNumber: "",
    companyName: "",
    address: "",
    postalCode: "",
    companyNumber: "",
    city: "",
    county: "",
    u_country_code: "",
    u_email_option: "",
  });

  useEffect(() => {
    // dispatch(getCompanyDetail(ID));
    //console.log("😋😋😋😋😋😋userData😋😋😋😋😋😋", JSON.parse(sessionStorage.getItem("userData")) );
    let userData = JSON.parse(sessionStorage.getItem("userData"));
    setData({
      uuid: userData.uuid,
      firstName: userData.u_first_name,
      lastName: userData.u_last_name,
      email: userData.u_email,
      country: userData.u_country,
      phoneNumber: userData.u_phone_no,
      companyName: userData.u_company_name,
      address: userData.u_address,
      postalCode: userData.u_postal_code,
      companyNumber: userData.u_company_no,
      city: userData.u_city,
      county: userData.u_country,
      u_country_code: userData.u_country_code,
      u_email_option: userData.u_email_option,
    });
  }, []);

  const classes = useStyles();
  const cancelBtn = () => {
    setEditadle(true);
  };

  const saveChanges = () => {
    setError({});
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!data.email) {
      errors.email = "Email filed required";
    } else if (!regex.test(data.email)) {
      errors.email = "Invalid email format";
    }
    if (!data.firstName) {
      errors.firstName = "Name filed required";
    }
    if (!data.lastName) {
      errors.lastName = "Last name filed required";
    }
    if (!data.country) {
      errors.country = "Country field resquired";
    }
    if (!data.phoneNumber) {
      errors.phoneNumber = "Phone number field required";
    }
    if (data.phoneNumber.length >10) {
      errors.phoneNumber = "Phone number cannot contain more then 10 digits";
    }
    if (!data.companyName) {
      errors.companyName = "Company name field required";
    }
    if (!data.companyNumber) {
      errors.companyNumber = "Company number field required";
    }
    if (!data.city) {
      errors.city = "City field required";
    }
    if (!data.address) {
      errors.address = "Address field required";
    }
    if (!data.postalCode) {
      errors.postalCode = "Postal code field required";
    }
    if (data.postalCode.length > 6) {
      errors.postalCode = "Postal code cannot contain more then 6 digits";
    }
    if (!data.county) {
      errors.county = "County field required";
    }
    let req = {
      uuid: data.uuid,
      u_first_name: data.firstName.trim(),
      u_last_name: data.lastName.trim(),
      u_country_code: data.u_country_code.trim(),
      u_phone_no: data.phoneNumber.toString().trim(),
      u_company_name: data.companyName.trim(),
      u_company_no: data.companyNumber.trim(),
      u_city: data.city.trim(),
      u_email: data.email.trim(),
      u_country: data.country.trim(),
      u_address: data.address.trim(),
      u_postal_code: data.postalCode.toString().trim(),
      u_email_option: data.u_email_option.trim(),
    };
    console.log({ ...req });
    if (
      errors.email ||
      errors.firstName ||
      errors.lastName ||
      errors.country ||
      errors.phoneNumber ||
      errors.companyName ||
      errors.companyNumber ||
      errors.city ||
      errors.address ||
      errors.county ||
      errors.postalCode
    ) {
      setError(errors);
    } else {
      setEditadle(!editable);
      dispatch(updateUser(req));
    }
  };
  return (
    <>
      <div className={classes.profileMain}>
        {/* <div style={{ backgroundColor: "#efefef" }}>
          <Button
            className={classes.editHeader}
            startIcon={<Edit />}
            color="#40ACFB"
            onClick={() => setEditadle(!editable)}>
            Edit Profile
          </Button>
        </div> */}

        {/* Profile inputs */}
        <Container className={classes.editProfile}>
          <Grid container justify="space-around">
            <Grid item xs={12} sm={6} className={classes.inputItem}>
              <Typography variant="h6" className={classes.lable}>
               First Name
              </Typography>
              <TextField
                className={classes.profileinput}
                disabled={editable}
                size="small"
                variant="outlined"
                error={Error.firstName ? true : false}
                value={data.firstName}
                onChange={(e) =>
                  setData({ ...data, firstName: e.target.value })
                }
              />
              {Error.firstName && (
                <Typography className={classes.inputError}>
                  {Error.firstName}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} sm={6} className={classes.inputItem}>
              <Typography variant="h6" className={classes.lable}>
                Last Name
              </Typography>
              <TextField
                className={classes.profileinput}
                disabled={editable}
                size="small"
                variant="outlined"
                error={Error.lastName ? true : false}
                value={data.lastName}
                onChange={(e) => setData({ ...data, lastName: e.target.value })}
              />
              {Error.lastName && (
                <Typography className={classes.inputError}>
                  {Error.lastName}
                </Typography>
              )}
            </Grid>

            <Grid item xs={12} sm={6} className={classes.inputItem}>
              <Typography variant="h6" className={classes.lable}>
                Email Address
              </Typography>
              <TextField
                className={classes.profileinput}
                disabled={editable}
                size="small"
                variant="outlined"
                error={Error.email ? true : false}
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
              {Error.email && (
                <Typography className={classes.inputError}>
                  {Error.email}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} sm={6} className={classes.inputItem}>
              <Typography variant="h6" className={classes.lable}>
                Country
              </Typography>
              <TextField
                className={classes.profileinput}
                disabled={editable}
                size="small"
                variant="outlined"
                error={Error.country ? true : false}
                value={data.country}
                onChange={(e) => setData({ ...data, country: e.target.value })}
              />
              {Error.country && (
                <Typography className={classes.inputError}>
                  {Error.country}
                </Typography>
              )}
            </Grid>

            <Grid item xs={12} sm={6} className={classes.inputItem}>
              <Typography variant="h6" className={classes.lable}>
                Phone Number
              </Typography>
              <TextField
                className={classes.profileinput}
                disabled={editable}
                variant="outlined"
                size="small"
                error={Error.phoneNumber ? true : false}
                value={data.phoneNumber}
                onChange={(e) =>
                  setData({ ...data, phoneNumber: e.target.value })
                }
              />
              {Error.phoneNumber && (
                <Typography className={classes.inputError}>
                  {Error.phoneNumber}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} sm={6} className={classes.inputItem}>
              <Typography variant="h6" className={classes.lable}>
                County
              </Typography>
              <TextField
                className={classes.profileinput}
                disabled={editable}
                variant="outlined"
                size="small"
                error={Error.county ? true : false}
                value={data.county}
                onChange={(e) => setData({ ...data, county: e.target.value })}
              />
              {Error.county && (
                <Typography className={classes.inputError}>
                  {Error.county}
                </Typography>
              )}
            </Grid>

            <Grid item xs={12} sm={6} className={classes.inputItem}>
              <Typography variant="h6" className={classes.lable}>
                Company Name
              </Typography>
              <TextField
                className={classes.profileinput}
                disabled={editable}
                variant="outlined"
                size="small"
                error={Error.companyName ? true : false}
                value={data.companyName}
                onChange={(e) =>
                  setData({ ...data, companyName: e.target.value })
                }
              />
              {Error.companyName && (
                <Typography className={classes.inputError}>
                  {Error.companyName}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} sm={6} className={classes.inputItem}>
              <Typography variant="h6" className={classes.lable}>
                Address
              </Typography>
              <TextField
                className={classes.profileinput}
                disabled={editable}
                variant="outlined"
                size="small"
                error={Error.address ? true : false}
                value={data.address}
                onChange={(e) => setData({ ...data, address: e.target.value })}
              />
              {Error.address && (
                <Typography className={classes.inputError}>
                  {Error.address}
                </Typography>
              )}
            </Grid>

            <Grid item xs={12} sm={6} className={classes.inputItem}>
              <Typography variant="h6" className={classes.lable}>
                Company Number
              </Typography>
              <TextField
                className={classes.profileinput}
                disabled={editable}
                variant="outlined"
                size="small"
                error={Error.companyNumber ? true : false}
                value={data.companyNumber}
                onChange={(e) =>
                  setData({ ...data, companyNumber: e.target.value })
                }
              />
              {Error.companyNumber && (
                <Typography className={classes.inputError}>
                  {Error.companyNumber}
                </Typography>
              )}
            </Grid>

            <Grid item xs={12} sm={6} className={classes.inputItem}>
              <Typography variant="h6" className={classes.lable}>
                Postal Code
              </Typography>
              <TextField
                className={classes.profileinput}
                disabled={editable}
                variant="outlined"
                size="small"
                error={Error.postalCode ? true : false}
                value={data.postalCode}
                onChange={(e) =>
                  setData({ ...data, postalCode: e.target.value })
                }
              />
              {Error.postalCode && (
                <Typography className={classes.inputError}>
                  {Error.postalCode}
                </Typography>
              )}
            </Grid>

            <Grid item xs={12} sm={6} className={classes.inputItem}>
              <Typography variant="h6" className={classes.lable}>
                City
              </Typography>
              <TextField
                className={classes.profileinput}
                disabled={editable}
                variant="outlined"
                size="small"
                error={Error.city ? true : false}
                value={data.city}
                onChange={(e) => setData({ ...data, city: e.target.value })}
              />
              {Error.city && (
                <Typography className={classes.inputError}>
                  {Error.city}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} sm={6} className={classes.inputItem}>
              <Typography variant="h6" className={classes.lable}>
                Secondary Email(Option)
              </Typography>
              <TextField
                className={classes.profileinput}
                disabled={editable}
                variant="outlined"
                size="small"
              />
            </Grid>
          </Grid>
          <Grid container className={classes.inputItem}>
            <Grid container>
              <Grid
                item
                className={classes.extention}
                style={{ marginBottom: "20px" }}
              >
                <ExtensionIcon style={{ marginRight: "5px" }} />{" "}
                <p className={classes.extText}>Chrome Extention</p>
              </Grid>
            </Grid>
            <Grid item>
              {editable ? (
                <Button
                  className={classes.editHeader}
                  startIcon={<Edit />}
                  color="#40ACFB"
                  onClick={() => setEditadle(!editable)}
                >
                  Edit Profile
                </Button>
              ) : (
                <Button
                  startIcon={<Save />}
                  className={classes.saveButton}
                  variant="contained"
                  onClick={() => {
                    saveChanges();
                  }}
                >
                  Save
                </Button>
              )}
            </Grid>

            {!editable && (
              <Grid item>
                <Button
                  variant="contained"
                  className={classes.filterButton}
                  style={{ backgroundColor: "#91979d", marginLeft: "10px" }}
                  color="primary"
                  onClick={() => {
                    cancelBtn();
                  }}
                >
                  Cancel
                </Button>
              </Grid>
            )}

            <Grid item>
              <Button
                className={classes.filterButton}
                color="primary"
                style={{ backgroundColor: "#40acfb", marginLeft: "20px" }}
                variant="contained"
                onClick={() => {
                  setshowmodel(true);
                }}
              >
                Change Password
              </Button>
            </Grid>
          </Grid>
        </Container>
        {/* model */}

        <ChangePassword open={showmodel} setshowChangePassword={setshowmodel} />
      </div>
    </>
  );
}
