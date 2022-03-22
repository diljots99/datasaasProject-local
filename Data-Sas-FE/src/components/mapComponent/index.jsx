import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { Grid, Typography, TextField, Button, Paper, IconButton, InputAdornment, Divider } from "@material-ui/core";
import { useStyles } from "./styles";

export default function MapComponent() {
  const [viewport, setViewport] = useState({
    latitude: 40.730610,
    longitude: -73.935242,
    width: "100%",
    height: "370px",
    zoom: 10
  });
  const [show, setSHow] = useState(false);
  const classess = useStyles()

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSHow(false);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);
 
  return (
    <div className={classess.main} >
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
       // mapStyle="mapbox://styles/leighhalliday/cjufmjn1r2kic1fl9wxg7u1l4"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >      
          <Marker
            key="123"
            latitude={40.769976}
            longitude={-73.967398}
          >
              <img  src={"/images/Marker.png"} alt="company-note-list"  onClick={e => { setSHow(true)  }}/>
          </Marker>

        {show ? (
          <Popup
          latitude={40.769976}
          longitude={-73.967398}
            onClose={() => {
              setSHow(false);
            }}
          >
            <div>
             <Grid container className={classess.popupContainer}>
               <Grid item style={{display: 'flex', flexDirection: 'column'}} >
                 <Typography variant="h8" className={classess.address} >852 Davisson Street</Typography>
                 <Typography variant="p" className={classess.postalCode} >Postal Code : 47374</Typography>
                 </Grid>
                 <Grid item >
                 <img  src={"/images/Direction.png"} alt="company-note-list"  />
                 </Grid>
             </Grid>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}