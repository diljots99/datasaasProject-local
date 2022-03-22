import React from 'react'
import { useStyles } from "./styles";
import { Grid, Typography, Button,Card } from "@material-ui/core";

const Trade = () => {
    const classess = useStyles();
    const ProfileDetail = () => {
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
                <Typography variant="h7">Loream Ipsum</Typography>
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
                <Typography variant="h7">Lorem Ipsum</Typography>
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
                <Typography variant="h7">Lorem Ipsum</Typography>
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
                <Typography variant="h7">Lorem Ipsum</Typography>
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
                <Typography variant="h7">Lorem Ipsum</Typography>
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
                <Typography variant="h7">Lorem Ipsum</Typography>
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
                <Typography variant="h7">Lorem Ipsum</Typography>
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
                <Typography variant="h7">Loream Ipsum</Typography>
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
                <Typography variant="h7">Loream Ipsum</Typography>
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
                <Typography variant="h7">Lorem Ipsum</Typography>
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
       Trade
      </Typography>
    </div>
    <div>
    <ProfileDetail/>
    </div>
   </>
    )
}
export default  Trade