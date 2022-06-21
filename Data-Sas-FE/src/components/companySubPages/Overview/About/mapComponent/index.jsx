import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { Grid, Typography, TextField, Button, Paper, IconButton, InputAdornment, Divider } from "@material-ui/core";
import { useStyles } from "./styles";
import 'mapbox-gl/dist/mapbox-gl.css';


import mapboxgl from 'mapbox-gl';

    // The following is required to stop "npm build" from transpiling mapbox code.
    // notice the exclamation point in the import.
    // @ts-ignore
    // eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
    
// mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

export default function MapComponent({location}) {

  const [viewport, setViewport] = useState({
    latitude: 40.730610,
    longitude: -73.935242,
    width: "100%",
    height: "370px",
    zoom: 10
  });

  const [marker , setMarker]= useState({
    latitude: 40.730610,
    longitude: -73.935242,
  })
  const [show, setSHow] = useState(false);
  const classess = useStyles()

  useEffect(()=>{
    if(location?.geocode_suggestions?.length > 0){
      setViewport({
        ...viewport,
        latitude: location.geocode_suggestions[0].latitude,
    longitude: location.geocode_suggestions[0].longitude
      })
      setMarker({ 
         latitude: location.geocode_suggestions[0].latitude,
        longitude: location.geocode_suggestions[0].longitude
      })
    }
  }, [location])

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

  console.log("location, ", location)

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
            latitude={marker.latitude}
            longitude={marker.longitude}
          >
              <img  src={"/images/Marker.png"} alt="company-note-list"  onClick={e => { setSHow(true)  }}/>
          </Marker>

        {show ? (
          <Popup
          latitude={marker.latitude}
          longitude={marker.longitude}
            onClose={() => {
              setSHow(false);
            }}
          >
            <div>
             <Grid container className={classess.popupContainer}>
               <Grid item style={{display: 'flex', flexDirection: 'column'}} >
                 <Typography variant="h8" className={classess.address} >{location?.address_line?? "N/a"}</Typography>
                 <Typography variant="p" className={classess.postalCode} >Postal Code : {location?.address_post_code?? "N/a"}</Typography>
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