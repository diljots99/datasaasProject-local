import React from 'react'
import { useStyles } from "./styles";
import { Grid, Typography, Card } from "@material-ui/core";


 const ProfileDetail = ({companyDetail}) => {
    const classess = useStyles();

    return (
      <div>
      <Card className={classess.root} variant="outlined">
      <div className={classess.gridContainer}>
        <Grid container className={classess.grid}>
          <Grid item xs={6} sm={2} className={classess.gridItem}>
            <Typography display="inline" variant="h7" style={{color:"#727272"}}>
             UK SIC Section
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} className={classess.gridItem}>
            <Typography display="inline" variant="h7" >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} className={classess.gridIteml}>
            <Typography variant="h7">{companyDetail.siccode_sictext_1 }</Typography>
          </Grid>
          <Grid item xs={6} sm={2} className={classess.gridItem}>
            <Typography variant="h7" style={{color:"#727272"}}>UK SIC</Typography>
          </Grid>
          <Grid item xs={1} sm={1} className={classess.gridItem}>
            <Typography display="inline" variant="h7" >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} className={classess.gridIteml}>
            <Typography variant="h7">{companyDetail.siccode_1}</Typography>
          </Grid>

          <Grid item xs={6} sm={2} className={classess.gridItem}>
            <Typography variant="h7" style={{color:"#727272"}}>NACE</Typography>
          </Grid>
          <Grid item xs={1} sm={1} className={classess.gridItem}>
            <Typography display="inline" variant="h7" >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} className={classess.gridIteml}>
            <Typography variant="h7">N/A</Typography>
          </Grid>

          <Grid item xs={6} sm={2} className={classess.gridItem}>
            <Typography variant="h7" style={{color:"#727272"}}>US SIC</Typography>
          </Grid>
          <Grid item xs={1} sm={1} className={classess.gridItem}>
            <Typography display="inline" variant="h7" >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} className={classess.gridIteml}>
            <Typography variant="h7">N/A</Typography>
          </Grid>

          <Grid item xs={6} sm={2} className={classess.gridItem}>
            <Typography variant="h7" style={{color:"#727272"}}>NAICS</Typography>
          </Grid>
          <Grid item xs={1} sm={1} className={classess.gridItem}>
            <Typography display="inline" variant="h7" >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} className={classess.gridIteml}>
            <Typography variant="h7">N/A</Typography>
          </Grid>
         
          <Grid item xs={6} sm={2} className={classess.gridItem}>
            <Typography variant="h7" style={{color:"#727272"}}>Sector</Typography>
          </Grid>
          <Grid item xs={1} sm={1} className={classess.gridItem}>
            <Typography display="inline" variant="h7" >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} className={classess.gridIteml}>
            <Typography variant="h7">N/A</Typography>
          </Grid>

          <Grid item xs={6} sm={2} className={classess.gridItem}>
            <Typography variant="h7" style={{color:"#727272"}}>SubSector</Typography>
          </Grid>
          <Grid item xs={1} sm={1} className={classess.gridItem}>
            <Typography display="inline" variant="h7" >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} className={classess.gridIteml}>
            <Typography variant="h7">N/A</Typography>
          </Grid>

          <Grid item xs={6} sm={2} className={classess.gridItem}>
            <Typography variant="h7" style={{color:"#727272"}}>Sector</Typography>
          </Grid>
          <Grid item xs={1} sm={1} className={classess.gridItem}>
            <Typography display="inline" variant="h7" >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} className={classess.gridIteml}>
            <Typography variant="h7">N/A</Typography>
          </Grid>

          <Grid item xs={6} sm={2} className={classess.gridItem}>
            <Typography display="inline" variant="h7" style={{color:"#727272"}}>
             Expoter Status
            </Typography>
          </Grid>
          <Grid item xs={1} sm={1} className={classess.gridItem}>
            <Typography display="inline" variant="h7" >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} className={classess.gridIteml}>
            <Typography variant="h7">N/A</Typography>
          </Grid>
          <Grid item xs={6} sm={2} className={classess.gridItem}>
            <Typography variant="h7" style={{color:"#727272"}}>Importer Status</Typography>
          </Grid>
          <Grid item xs={1} sm={1} className={classess.gridItem}>
            <Typography display="inline" variant="h7" >
              :
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3} className={classess.gridIteml}>
            <Typography variant="h7">N/A</Typography>
          </Grid>
        </Grid>

        
        </div>
      </Card>
      </div>
    );
  };


export default ProfileDetail