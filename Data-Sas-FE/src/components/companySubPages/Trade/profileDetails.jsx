import React from 'react'
import { useStyles } from "./styles";
import { Grid, Typography, Card } from "@material-ui/core";


 const ProfileDetail = ({companyDetail}) => {
    const classess = useStyles();
    console.log("trade info", companyDetail)
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
            <Typography variant="h7">{companyDetail.uk_sic_section}</Typography>
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
            <Typography variant="h7">{companyDetail.uk_sic}</Typography>
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
            <Typography variant="h7">{companyDetail.nace}</Typography>
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
            <Typography variant="h7">{companyDetail.us_sic}</Typography>
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
            <Typography variant="h7">{companyDetail.naics}</Typography>
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
            <Typography variant="h7">{companyDetail.sector}</Typography>
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
            <Typography variant="h7">{companyDetail.subsector}</Typography>
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
            <Typography variant="h7">{companyDetail.exporter_status}</Typography>
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
            <Typography variant="h7">{companyDetail.importer_status}</Typography>
          </Grid>
        </Grid>

        
        </div>
      </Card>
      </div>
    );
  };


export default ProfileDetail