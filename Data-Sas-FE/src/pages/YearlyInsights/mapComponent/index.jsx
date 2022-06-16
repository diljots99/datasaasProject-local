import React, { useState, useEffect,useRef } from "react";
import ReactMapGL, { Marker, Popup, Source, Layer  } from "react-map-gl";
import { Grid, Typography, TextField, Button, Paper, IconButton, InputAdornment, Divider } from "@material-ui/core";
import { useStyles } from "./styles";
import {
  clusterLayer,
  clusterCountLayer,
  unclusteredPointLayer
} from "./Layers";

export default function MapComponent({data}) {
  const [viewport, setViewport] = useState({
    latitude: 40.730610,
    longitude: -73.935242,
    width: "100%",
    height: "370px",
    zoom: 10
  });
  const mapRef = useRef();
  const [show, setSHow] = useState(false);
  const classess = useStyles()

  const geojson = {
    type: 'FeatureCollection',
    features: data? data :[
      {type: 'Feature', geometry: {type: 'Point', coordinates: [-73.935242,40.730610 ]}}
    ]
  };

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
        ref={mapRef}
      >      

<Source
          type="geojson"
          // data="https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
          data={ data ? geojson : "https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"}
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={100}
          ref={mapRef}
        >
          <Layer {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredPointLayer} />
        </Source>
          {/* <Marker
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
        ) : null} */}
      </ReactMapGL>
    </div>
  );
}