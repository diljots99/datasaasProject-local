import React, { useState, useEffect } from "react";
import { useStyles } from "./styles";
import { Grid, Typography, Button, Card } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import moment from 'moment';
const Profile = () => {
  const classess = useStyles();
  const { companyDetail } = useSelector((state) => state.watch);
  const [data, setData] = useState({
    country: "",
    company_name: "",
    postalCode: "",
    city: "",
    lastAccountdate:"",
    region:"",
    localAuth:"",
    Constituency:""
  });

  useEffect(() => {
    // dispatch(getCompanyDetail(ID));
    console.log("😋😋😋😋😋😋userData😋😋😋😋😋😋", companyDetail);
    setData({
      //   firstName: userData.u_first_name,
      //   lastName: userData.u_last_name,
      //   email: userData.u_email,
      //   country: userData.u_country,
      //   phoneNumber: userData.u_phone_no,
      //   companyName: userData.u_company_name,
      Constituency:companyDetail.company_postcodes[0].county?companyDetail.company_postcodes[0].county:'',
      localAuth:companyDetail.company_postcodes[0].territory?companyDetail.company_postcodes[0].territory:"",
      region: companyDetail.company_postcodes[0].region?companyDetail.company_postcodes[0].region:"",
      lastAccountdate:companyDetail.company_postcodes[0].createdAt?moment(companyDetail.company_postcodes[0].createdAt).format('MM/DD/YYYY'):'',
      postalCode: companyDetail.company_postcodes[0].postcode?companyDetail.company_postcodes[0].postcode:"",
      company_name: companyDetail.company_category?companyDetail.company_category:"",
      city: companyDetail.company_postcodes[0].city?companyDetail.company_postcodes[0].city:"",
      country: companyDetail.company_postcodes[0].country?companyDetail.company_postcodes[0].country:"",
    });
  }, []);

  const ProfileDetail = () => {
    return (
      <div>
        <Card className={classess.root} variant="outlined">
          <div className={classess.gridContainer}>
            <Grid container className={classess.grid}>
              <Grid item xs={6} sm={2} className={classess.gridItem}>
                <Typography
                  display="inline"
                  variant="h7"
                  style={{ color: "#727272" }}
                >
                  Postal Code
                </Typography>
              </Grid>
              <Grid item xs={1} sm={1} className={classess.gridItem}>
                <Typography display="inline" variant="h7">
                  :
                </Typography>
              </Grid>
              <Grid item xs={6} sm={3} className={classess.gridItem}>
                <Typography variant="h7">{data.postalCode}</Typography>
              </Grid>
              <Grid item xs={6} sm={2} className={classess.gridItem}>
                <Typography variant="h7" style={{ color: "#727272" }}>
                  City
                </Typography>
              </Grid>
              <Grid item xs={1} sm={1} className={classess.gridItem}>
                <Typography display="inline" variant="h7">
                  :
                </Typography>
              </Grid>
              <Grid item xs={6} sm={3} className={classess.gridItem}>
                <Typography variant="h7">{data.city}</Typography>
              </Grid>

              <Grid item xs={6} sm={2} className={classess.gridItem}>
                <Typography variant="h7" style={{ color: "#727272" }}>
                  Country
                </Typography>
              </Grid>
              <Grid item xs={1} sm={1} className={classess.gridItem}>
                <Typography display="inline" variant="h7">
                  :
                </Typography>
              </Grid>
              <Grid item xs={6} sm={3} className={classess.gridItem}>
                <Typography variant="h7">{data.country}</Typography>
              </Grid>

              <Grid item xs={6} sm={2} className={classess.gridItem}>
                <Typography variant="h7" style={{ color: "#727272" }}>
                  Region
                </Typography>
              </Grid>
              <Grid item xs={1} sm={1} className={classess.gridItem}>
                <Typography display="inline" variant="h7">
                  :
                </Typography>
              </Grid>
              <Grid item xs={6} sm={3} className={classess.gridItem}>
                <Typography variant="h7">{data.region}</Typography>
              </Grid>

              <Grid item xs={6} sm={2} className={classess.gridItem}>
                <Typography variant="h7" style={{ color: "#727272" }}>
                  Constituency
                </Typography>
              </Grid>
              <Grid item xs={1} sm={1} className={classess.gridItem}>
                <Typography display="inline" variant="h7">
                  :
                </Typography>
              </Grid>
              <Grid item xs={6} sm={3} className={classess.gridItem}>
                <Typography variant="h7">{data.Constituency}</Typography>
              </Grid>

              <Grid item xs={6} sm={2} className={classess.gridItem}>
                <Typography variant="h7" style={{ color: "#727272" }}>
                  Local Authority
                </Typography>
              </Grid>
              <Grid item xs={1} sm={1} className={classess.gridItem}>
                <Typography display="inline" variant="h7">
                  :
                </Typography>
              </Grid>
              <Grid item xs={6} sm={3} className={classess.gridItem}>
                <Typography variant="h7">{data.localAuth}</Typography>
              </Grid>

              <Grid item xs={6} sm={2} className={classess.gridItem}>
                <Typography variant="h7" style={{ color: "#727272" }}>
                  Company Category
                </Typography>
              </Grid>
              <Grid item xs={1} sm={1} className={classess.gridItem}>
                <Typography display="inline" variant="h7">
                  :
                </Typography>
              </Grid>
              <Grid item xs={6} sm={3} className={classess.gridItem}>
                <Typography variant="h7">{data.company_name}</Typography>
              </Grid>

              <Grid item xs={6} sm={2} className={classess.gridItem}>
                <Typography variant="h7" style={{ color: "#727272" }}>
                  Last Account Date
                </Typography>
              </Grid>
              <Grid item xs={1} sm={1} className={classess.gridItem}>
                <Typography display="inline" variant="h7">
                  :
                </Typography>
              </Grid>
              <Grid item xs={6} sm={3} className={classess.gridItem}>
                <Typography variant="h7">{data.lastAccountdate}</Typography>
              </Grid>
            </Grid>
          </div>
        </Card>
      </div>
    );
  };
  return (
    <>
      <div>
        <Typography variant="h6" className={classess.headtext}>
          Profile
        </Typography>
      </div>
      <div>
        <ProfileDetail />
      </div>
    </>
  );
};
export default Profile;
