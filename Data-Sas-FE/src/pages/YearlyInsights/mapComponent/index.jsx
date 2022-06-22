import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import Map, { Marker, Popup, Source, Layer } from "react-map-gl";
import { useStyles } from "./styles";
import {
  clusterLayer,
  clusterCountLayer,
  unclusteredPointLayer,
  dataLayer,
} from "./Layers";

import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { range } from "d3-array";
import { scaleQuantile } from "d3-scale";

function updatePercentiles(featureCollection, accessor) {
  const { features } = featureCollection;
  const scale = scaleQuantile().domain(features.map(accessor)).range(range(9));
  // console.log({ featureCollection, scale });
  return {
    type: "FeatureCollection",
    features: features.map((f) => {
      const value = accessor(f);
      const properties = {
        ...f.properties,
        value,
        name:f.properties.address_region ? f.properties.address_region : f.properties.name,
        percentile: scale(value),
      };
      return { ...f, properties };
    }),
  };
}

// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved

// mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

export default function MapComponent({ data }) {
  const [viewport, setViewport] = useState({
    latitude: 40.73061,
    longitude: -73.935242,
    width: "100%",
    height: "370px",
    zoom: 1,
  });
  const mapRef = useRef();
  const [show, setSHow] = useState(false);
  const classess = useStyles();
  const [allData, setAllData] = useState(null);
  const [hoverInfo, setHoverInfo] = useState(null);
  const [geodata , setGeodata] = useState(null)
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN
  // console.log("data", data);

  useEffect(() => {
    if(data){
      setAllData(data);
    }else{
      fetch(
        "https://raw.githubusercontent.com/uber/react-map-gl/master/examples/.data/us-income.geojson"
      )
        .then((resp) => resp.json())
        .then((json) => setAllData(json))
        .catch((err) => console.error("Could not load data", err));
    }
    /* global fetch */
 // eslint-disable-line
  }, [data]);

  const onHover = useCallback((event) => {
    // event.persist();
    const {
      features,
      offsetCenter: { x, y },
    } = event;
    const hoveredFeature = features && features[0];
    //  console.log("onHover",{feature: hoveredFeature, x, y} , event)
    // prettier-ignore
    setHoverInfo(hoveredFeature && {feature: hoveredFeature, x, y});
  }, []);

  useEffect(() => {
    if(data){
      console.log("setData ")
      setGeodata( data  && data.features  && updatePercentiles(data, (f) => f.properties.number_of_companies))
      // return (
      //   data  && data.features  && updatePercentiles(data, (f) => f.properties.number_of_companies)
      // );
    }else{
      console.log("set  all data ")
      setGeodata( allData && updatePercentiles(allData, (f) => f.properties.income[2015]))
      // return (
      //   allData && updatePercentiles(allData, (f) => f.properties.income[2015])
      // );
    }
   
  }, [allData,data]);

  // const geodata2 = useMemo(() => {
  //   return (
  //    data && data.features && updatePercentiles(data, (f) => f.properties.number_of_companies)
  //   );
  // }, [data]);

  const geojson = {
    type: "FeatureCollection",
    features: data
      ? data
      : [
          {
            type: "Feature",
            geometry: { type: "Point", coordinates: [-73.935242, 40.73061] },
          },
        ],
  };

  //  console.log("geoData ", geodata);

  useEffect(() => {
    const listener = (e) => {
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
    <div className={classess.main}>
      {}
      <Map
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        // mapStyle="mapbox://styles/leighhalliday/cjufmjn1r2kic1fl9wxg7u1l4"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
        ref={mapRef}
        interactiveLayerIds={["data"]}
        onMouseMove={e=>onHover(e)}
      >       
        <Source type="geojson" data={geodata}>
          <Layer {...dataLayer} />
          {/* <Layer {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredPointLayer} /> */}
          {hoverInfo && (
            <div
              className="tooltip"
              style={{ left: hoverInfo.x, top: hoverInfo.y }}
            >
              <div>State: {hoverInfo.feature.properties.name}</div>
              <div>
                Median Household Income: {hoverInfo.feature.properties.value}
              </div>
              <div>
                Percentile:{" "}
                {(hoverInfo.feature.properties.percentile / 8) * 100}
              </div>
            </div>
          )}
        </Source>

        {/* <Source
          type="geojson"
          // data="https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
          data={ data ? geojson : geodata}
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={100}
          ref={mapRef}
        >
          <Layer {...dataLayer} />
          <Layer {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredPointLayer} />
        </Source> */}
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
      </Map>
    </div>
  );
}
